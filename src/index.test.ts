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
      'lower_camel_case'
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
      'lower_snake_case'
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
      'upper_snake_case'
    );

    expect(result).toMatchObject({
      USER_NICKNAME: 'evandrolg',
      LAST_POST: '2023-01-01',
      CAREER: {
        LAST_COMPANIES: ['spotify', 'dazn', 'joyn'],
      },
    });
  });
});
