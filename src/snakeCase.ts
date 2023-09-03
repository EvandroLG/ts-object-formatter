function isAlphanumeric(s: string): boolean {
  return /[A-Za-z0-9]/.test(s);
}

function isUpperCase(s: string): boolean {
  return s.toUpperCase() === s;
}

function baseSnakeCase(s: string): string {
  const output: Array<string> = [];

  for (let i = 0; i < s.length; i++) {
    const isInBoundaries = output.length && i < s.length - 1;
    const c = s[i];

    if (!isAlphanumeric(c) && isInBoundaries) {
      const next = s[i + 1];

      if (isAlphanumeric(next)) {
        output.push('_', next);
        i++;
      }
    } else if (isUpperCase(c) && isInBoundaries) {
      output.push('_', c);
    } else if (isAlphanumeric(c)) {
      output.push(c);
    }
  }

  return output.join('');
}

export function lowerSnakeCase(s: string): string {
  return baseSnakeCase(s).toLowerCase();
}

export function upperSnakeCase(s: string): string {
  return baseSnakeCase(s).toUpperCase();
}
