# statusx

> A cross-runtime package providing HTTP status code constants with reason
> phrases and utility functions.

[![JSR](https://jsr.io/badges/@egamagz/statusx)](https://jsr.io/@egamagz/statusx)
[![JSR Score](https://jsr.io/badges/@egamagz/statusx/score)](https://jsr.io/@egamagz/statusx/score)
![GitHub License](https://img.shields.io/github/license/egamagz/statusx)
![GitHub Release](https://img.shields.io/github/v/release/egamagz/statusx)

## Overview

`statusx` is a comprehensive JavaScript/TypeScript package that enumerates all
HTTP status codes defined in:

- **RFC 1945** (HTTP/1.0)
- **RFC 2616** (HTTP/1.1)
- **RFC 2518** (WebDAV)

The package exports:

- `StatusCodes` enum - Numeric HTTP status codes
- `ReasonPhrases` enum - Human-readable reason phrases
- Utility functions for parsing and validating status codes

## Installation

_With Deno_*

```console
deno add jsr:@egamagz/statusx
```

**With Bun**

```console
bunx jsr add @egamagz/statusx
```

**With NPM**

```console
npx jsr add @egamagz/statusx
```

## Usage

### Using Status Codes

```typescript
import { StatusCodes } from "@egamagz/statusx";

function handleResponse(status: number) {
  if (status === StatusCodes.OK) {
    console.log("Success!");
  } else if (status === StatusCodes.NotFound) {
    console.log("Resource not found");
  }
}
````

### Using Reason Phrases

```typescript
import { ReasonPhrases } from '@egamagz/statusx';

const message = ReasonPhrases.Unauthorized;
// "Unauthorized"
```

### Parsing Status Codes

```typescript
import { getReasonPhrase, parseStatusCode } from '@egamagz/statusx';

// Get reason phrase from status code
getReasonPhrase(200); // "OK"
getReasonPhrase('404'); // "Not Found"
getReasonPhrase(StatusCodes.BadRequest); // "Bad Request"

// Get status code from reason phrase (case-insensitive)
parseStatusCode('OK'); // 200
parseStatusCode('not found'); // 404
parseStatusCode('Internal Server Error'); // 500
```

### Validation

```typescript
import { isValidReasonPhrase, isValidStatusCode } from '@egamagz/statusx';

isValidStatusCode(200); // true
isValidStatusCode('404'); // true
isValidStatusCode(999); // false

isValidReasonPhrase('OK'); // true
isValidReasonPhrase('not found'); // true
isValidReasonPhrase('Invalid'); // false
```

### Status Code Classification

```typescript
import {
  isClientError,
  isInformational,
  isRedirect,
  isServerError,
  isSuccess,
} from '@egamagz/statusx';

isInformational(100); // true (Continue)
isSuccess(200); // true (OK)
isRedirect(301); // true (Moved Permanently)
isClientError(404); // true (Not Found)
isServerError(500); // true (Internal Server Error)
```

## Features

- **TypeScript Support** - Full TypeScript definitions with JSDoc comments
- **Cross-Runtime** - Works with Deno, Bun, Node.js, and browsers
- **Comprehensive Coverage** - All standard HTTP status codes from HTTP/1.0,
  HTTP/1.1, and WebDAV
- **Utility Functions** - Parse, validate, and classify status codes
- **No Dependencies** - Lightweight with zero external dependencies

## Supported RFCs

| RFC      | Description                  | Status Codes          |
| -------- | ---------------------------- | --------------------- |
| RFC 1945 | HTTP/1.0                     | Core status codes     |
| RFC 2616 | HTTP/1.1                     | Extended status codes |
| RFC 2518 | WebDAV                       | WebDAV-specific codes |
| RFC 6585 | Additional HTTP Status Codes | 4xx/5xx extensions    |
| RFC 8297 | 103 Early Hints              | 103 informational     |

## Status Code Categories

| Category      | Range   | Description                                   |
| ------------- | ------- | --------------------------------------------- |
| Informational | 100-199 | Request received, continuing                  |
| Success       | 200-299 | Request successfully received and accepted    |
| Redirection   | 300-399 | Further action must be taken                  |
| Client Error  | 400-499 | Request has bad syntax or cannot be fulfilled |
| Server Error  | 500-599 | Server failed to fulfill valid request        |

## License

MIT
