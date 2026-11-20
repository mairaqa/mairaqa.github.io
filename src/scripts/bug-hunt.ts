// Bug hunt: bugs are hidden around the page as <button data-bug-id>.
// Catching them all unlocks a message. Progress is kept per visitor in localStorage.
const KEY = 'bugs-caught';
const toast = document.getElementById('toast');
const bugs = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-bug-id]'));
const total = bugs.length;

const fill = (tpl: string, a: number, b = total) => tpl.replace('9991', String(a)).replace('9992', String(b));

function load(): Set<string> {
  try { return new Set(JSON.parse(localStorage.getItem(KEY) ?? '[]')); } catch { return new Set(); }
}
function save(s: Set<string>) {
  try { localStorage.setItem(KEY, JSON.stringify([...s])); } catch {}
}
const caught = load();

let hideTimer: number | undefined;
function show(html: string, ms = 3500) {
  if (!toast) return;
  toast.innerHTML = html;
  toast.classList.add('is-open');
  clearTimeout(hideTimer);
  if (ms) hideTimer = window.setTimeout(() => toast.classList.remove('is-open'), ms);
}
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

function render() {
  const n = [...caught].filter((id) => bugs.some((b) => b.dataset.bugId === id)).length;
  document.querySelectorAll<HTMLElement>('[data-hunt-count]').forEach((el) => {
    el.textContent = `${n}/${total}`;
    el.closest('button')?.setAttribute('aria-label', fill(toast?.dataset.counter ?? '', n));
  });
  const left = total - n;
  document.querySelectorAll<HTMLElement>('[data-known-bugs]').forEach((el) => {
    el.textContent = left === 1 ? toast?.dataset.knownOne ?? '' : fill(toast?.dataset.known ?? '', left);
  });
  document.documentElement.classList.toggle('all-bugs-caught', total > 0 && left === 0);
  return n;
}

function markCaught(btn: HTMLButtonElement) {
  btn.classList.add('caught');
  btn.disabled = true;
}

if (total && toast) {
  bugs.forEach((b) => { if (caught.has(b.dataset.bugId!)) { markCaught(b); b.classList.add('gone'); } });
  render();

  bugs.forEach((btn) => btn.addEventListener('click', () => {
    if (btn.classList.contains('caught')) return;
    caught.add(btn.dataset.bugId!);
    save(caught);
    markCaught(btn);
    window.setTimeout(() => btn.classList.add('gone'), 1200);
    btn.dispatchEvent(new CustomEvent('bug:caught', { bubbles: true }));
    const n = render();
    if (n === total) {
      show(`<p>🎉 ${esc(toast.dataset.done!)}</p><a class="link mt-2 inline-block text-pass" href="${esc(toast.dataset.contact!)}">→ ${esc(toast.dataset.contactLabel!)}</a>`, 8000);
    } else {
      show(`<p><span class="text-pass">✓</span> ${esc(fill(toast.dataset.caught!, n))}</p>`);
    }
  }));

  document.querySelectorAll('[data-hunt-toggle]').forEach((el) => el.addEventListener('click', () => {
    const n = render();
    show(`<p>${esc(n === total ? toast.dataset.done! : fill(toast.dataset.intro!, total))}</p>
      ${n > 0 ? `<button type="button" data-hunt-reset class="mt-3 cursor-pointer rounded border border-line px-2 py-1 text-xs text-muted hover:text-fg">${esc(toast.dataset.reset!)}</button>` : ''}`, 0);
    toast.querySelector('[data-hunt-reset]')?.addEventListener('click', () => {
      caught.clear(); save(caught);
      bugs.forEach((b) => { b.classList.remove('caught', 'gone'); b.disabled = false; });
      render();
      toast.classList.remove('is-open');
    });
  }));

  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') toast.classList.remove('is-open'); });
}

// a note for the curious devs who open the console
console.log(
  '%c🐞 found me in the console?%c\nthat is exactly what a good qa does. say hi: https://www.linkedin.com/in/mairatorresqa',
  'font: 600 14px monospace; color: #3fb950',
  'font: 12px monospace',
);
