function isAlphanumeric(s: string): boolean {
  return /[A-Za-z0-9]/.test(s);
}

function baseCamelCase(s: string, isCapitalize = false): string {
  const output: Array<string> = [];

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (!isAlphanumeric(c) && i < s.length - 1) {
      const next = s[i + 1];

      if (isAlphanumeric(next)) {
        if (!output.length && isCapitalize) {
          output.push(next.toUpperCase());
        } else {
          output.push(output.length ? next.toUpperCase() : next.toLowerCase());
        }

        i++;
      }
    } else if (isAlphanumeric(c)) {
      output.push(
        isCapitalize && !output.length ? c.toUpperCase() : c.toLowerCase()
      );
    }
  }

  return output.join('');
}

export function lowerCamelCase(s: string): string {
  return baseCamelCase(s);
}

export function upperCamelCase(s: string): string {
  return baseCamelCase(s, true);
}
