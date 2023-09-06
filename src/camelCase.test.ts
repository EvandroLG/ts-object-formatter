import { lowerCamelCase, upperCamelCase } from './camelCase';

test('lowerCamelCase', () => {
  expect(lowerCamelCase('my-string--like---this-')).toBe('myStringLikeThis');
  expect(lowerCamelCase('my-string-like-this-')).toBe('myStringLikeThis');
  expect(lowerCamelCase('--my-string--like---this--')).toBe('myStringLikeThis');

  expect(lowerCamelCase('my string like this')).toBe('myStringLikeThis');
  expect(lowerCamelCase('  my string  like  this  ')).toBe('myStringLikeThis');

  expect(lowerCamelCase('my_string_like_this_')).toBe('myStringLikeThis');
  expect(lowerCamelCase('My  string__like-this**')).toBe('myStringLikeThis');
});

test('upperCamelCase', () => {
  expect(upperCamelCase('my-string--like---this-')).toBe('MyStringLikeThis');
  expect(upperCamelCase('my-string-like-this-')).toBe('MyStringLikeThis');
  expect(upperCamelCase('--my-string--like---this--')).toBe('MyStringLikeThis');

  expect(upperCamelCase('my string like this')).toBe('MyStringLikeThis');
  expect(upperCamelCase('  my string  like  this  ')).toBe('MyStringLikeThis');

  expect(upperCamelCase('my_string_like_this_')).toBe('MyStringLikeThis');
  expect(upperCamelCase('My  string__like-this**')).toBe('MyStringLikeThis');
});
