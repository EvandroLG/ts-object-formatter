import { lowerCamelCase, lowerSnakeCase } from './filters';

type ObjectType = { [key: string]: unknown };
type FilterType = 'lower_camel_case' | 'lower_snake_case';

function isObject(o: unknown): boolean {
  return typeof o === 'object' && !Array.isArray(o);
}

function applyFilter(key: string, filter: FilterType): string {
  let result: string;

  switch (filter) {
    case 'lower_camel_case':
      result = lowerCamelCase(key);
      break;
    case 'lower_snake_case':
      result = lowerSnakeCase(key);
      break;
  }

  return result;
}

function objectFormatter(obj: ObjectType, filter: FilterType) {
  const keys = Object.keys(obj);
  const output: ObjectType = {};

  for (const key of keys) {
    const newKey = applyFilter(key, filter);
    const value = isObject(obj[key])
      ? objectFormatter(obj[key] as ObjectType, filter)
      : obj[key];

    output[newKey] = value;
  }

  return output as ObjectType;
}

export default objectFormatter;
