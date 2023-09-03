import { lowerSnakeCase, upperSnakeCase } from './snakeCase';

test('lowerSnakeCase', () => {
  expect(lowerSnakeCase('my-string--like---this-')).toBe('my_string_like_this');
  expect(lowerSnakeCase('my-string-like-this-')).toBe('my_string_like_this');
  expect(lowerSnakeCase('--my-string--like---this--')).toBe(
    'my_string_like_this'
  );

  expect(lowerSnakeCase('My  string__like-this**')).toBe('my_string_like_this');
  expect(lowerSnakeCase('MyStringIsMine')).toBe('my_string_is_mine');
  expect(lowerSnakeCase('_My*_StringIs_Mine--_*')).toBe('my_string_is_mine');
});

test('upperSnakeCase', () => {
  expect(upperSnakeCase('my-string--like---this-')).toBe('MY_STRING_LIKE_THIS');
  expect(upperSnakeCase('my-string-like-this-')).toBe('MY_STRING_LIKE_THIS');
  expect(upperSnakeCase('--my-string--like---this--')).toBe(
    'MY_STRING_LIKE_THIS'
  );

  expect(upperSnakeCase('My  string__like-this**')).toBe('MY_STRING_LIKE_THIS');
  expect(upperSnakeCase('MyStringIsMine')).toBe('MY_STRING_IS_MINE');
  expect(upperSnakeCase('_My*_StringIs_Mine--_*')).toBe('MY_STRING_IS_MINE');
});
