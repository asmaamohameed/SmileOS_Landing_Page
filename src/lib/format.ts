export function formatPrice(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

export function fill(template: string, n: number) {
  return template.replace("{n}", formatPrice(n));
}
