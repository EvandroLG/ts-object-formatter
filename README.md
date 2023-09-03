# ts-object-formatter &middot; [![license](https://badgen.now.sh/badge/license/MIT)](./LICENSE)

A tiny library for formatting object fields in snake case or camel case.

## Installation

To install `ts-object-formatter`, execute:

```sh
npm install ts-object-formatter
```

## Quickstart

Below is an example of how to use the library:

```js
import objectFormatter from 'ts-object-formatter';

const map = {
  user_nickname: 'evandrolg',
  last_post: '2023-01-01',
  career: {
    last_companies: ['spotify', 'dazn', 'joyn'],
  },
};

objectFormatter(map, 'lower_camel_case');
/*
{
  userNickname: 'evandrolg',
  lastPost: '2023-01-01',
  career: {
    lastCompanies: ['spotify', 'dazn', 'joyn'],
  },
}
*/
```

## API

### objectFormatter

Converts the object keys to camel or snake case.

#### object

Type: `object`
Object that will be formatted.

#### filter

Type: `lower_camel_case | lower_snake_case`
Filter that will be applied to convert the object key.
