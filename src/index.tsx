export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export function multiplySync(a: number, b: number): number {
  return a * b;
}
