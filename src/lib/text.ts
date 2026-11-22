// Met « Île-de-France » en bleu dans un titre (texte échappé avant insertion).
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
export function hlIdf(title: string): string {
  return esc(title).replace(/Île-de-France/g, '<span class="hl">Île-de-France</span>');
}
