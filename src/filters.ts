function isAlphanumeric(s: string): boolean {
  return /[A-Za-z0-9]/.test(s);
}

function isUpperCase(s: string): boolean {
  return s.toUpperCase() === s;
}

export function lowerCamelCase(s: string): string {
  const output: Array<string> = [];

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (!isAlphanumeric(c) && i < s.length - 1) {
      const next = s[i + 1];

      if (isAlphanumeric(next)) {
        output.push(output.length ? next.toUpperCase() : next.toLowerCase());
        i++;
      }
    } else if (isAlphanumeric(c)) {
      output.push(c.toLowerCase());
    }
  }

  return output.join('');
}

export function lowerSnakeCase(s: string): string {
  const output: Array<string> = [];

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    const isInBoundaries = output.length && i < s.length - 1;

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

  return output.join('').toLowerCase();
}
