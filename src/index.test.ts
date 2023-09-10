import objectFormatter from './';

describe('objectFormatter', () => {
  test('format keys in lower camel case', () => {
    const result = objectFormatter(
      {
        user_nickname: 'evandrolg',
        last_post: '2023-01-01',
        career: {
          last_companies: ['spotify', 'dazn', 'joyn'],
        },
      },
      'lowerCamelCase'
    );

    expect(result).toMatchObject({
      userNickname: 'evandrolg',
      lastPost: '2023-01-01',
      career: {
        lastCompanies: ['spotify', 'dazn', 'joyn'],
      },
    });
  });

  test('format keys in lower snake case', () => {
    const result = objectFormatter(
      {
        userNickname: 'evandrolg',
        lastPost: '2023-01-01',
        career: {
          lastCompanies: ['spotify', 'dazn', 'joyn'],
        },
      },
      'lowerSnakeCase'
    );

    expect(result).toMatchObject({
      user_nickname: 'evandrolg',
      last_post: '2023-01-01',
      career: {
        last_companies: ['spotify', 'dazn', 'joyn'],
      },
    });
  });

  test('format keys in upper snake case', () => {
    const result = objectFormatter(
      {
        userNickname: 'evandrolg',
        lastPost: '2023-01-01',
        career: {
          lastCompanies: ['spotify', 'dazn', 'joyn'],
        },
      },
      'upperSnakeCase'
    );

    expect(result).toMatchObject({
      USER_NICKNAME: 'evandrolg',
      LAST_POST: '2023-01-01',
      CAREER: {
        LAST_COMPANIES: ['spotify', 'dazn', 'joyn'],
      },
    });
  });

  test('format keys in upper camel case', () => {
    const result = objectFormatter(
      {
        user_nickname: 'evandrolg',
        last_post: '2023-01-01',
        career: {
          last_companies: ['spotify', 'dazn', 'joyn'],
        },
      },
      'upperCamelCase'
    );

    expect(result).toMatchObject({
      LastPost: '2023-01-01',
      UserNickname: 'evandrolg',
      Career: {
        LastCompanies: ['spotify', 'dazn', 'joyn'],
      },
    });
  });
});
