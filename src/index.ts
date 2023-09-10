import { lowerSnakeCase, upperSnakeCase } from './snakeCase';
import { lowerCamelCase, upperCamelCase } from './camelCase';

type ObjectType = { [key: string]: unknown };
type FilterType =
  | 'lowerCamelCase'
  | 'upperCamelCase'
  | 'lowerSnakeCase'
  | 'upperSnakeCase';

function isObject(o: unknown): boolean {
  return typeof o === 'object' && !Array.isArray(o);
}

function applyFilter(key: string, filter: FilterType): string {
  let result: string;

  switch (filter) {
    case 'lowerCamelCase':
      result = lowerCamelCase(key);
      break;
    case 'upperCamelCase':
      result = upperCamelCase(key);
      break;
    case 'lowerSnakeCase':
      result = lowerSnakeCase(key);
      break;
    case 'upperSnakeCase':
      result = upperSnakeCase(key);
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
