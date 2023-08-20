import { lowerCamelCase, lowerSnakeCase } from './filters';

test('lowerCamelCase', () => {
  expect(lowerCamelCase('my-string--like---this-')).toBe('myStringLikeThis');
  expect(lowerCamelCase('my-string-like-this-')).toBe('myStringLikeThis');
  expect(lowerCamelCase('--my-string--like---this--')).toBe('myStringLikeThis');

  expect(lowerCamelCase('my string like this')).toBe('myStringLikeThis');
  expect(lowerCamelCase('  my string  like  this  ')).toBe('myStringLikeThis');

  expect(lowerCamelCase('my_string_like_this_')).toBe('myStringLikeThis');
  expect(lowerCamelCase('My  string__like-this**')).toBe('myStringLikeThis');
});

test('lowerSnakeCase', () => {
  expect(lowerSnakeCase('my-string--like---this-')).toBe('my_string_like_this');
  expect(lowerSnakeCase('my-string-like-this-')).toBe('my_string_like_this');
  expect(lowerSnakeCase('--my-string--like---this--')).toBe(
    'my_string_like_this'
  );
});
