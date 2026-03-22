import { describe, it } from '@std/testing/bdd';
import { assertEquals, assertThrows } from '@std/assert';
import {
  getReasonPhrase,
  isClientError,
  isInformational,
  isRedirect,
  isServerError,
  isSuccess,
  isValidReasonPhrase,
  isValidStatusCode,
  parseStatusCode,
} from './utils.ts';
import { StatusCodes } from './status_code.ts';
import { ReasonPhrases } from './reason_phrase.ts';

describe('getReasonPhrase', () => {
  it('should return "Continue" for 100', () => {
    assertEquals(getReasonPhrase(100), 'Continue');
  });

  it('should return "OK" for 200', () => {
    assertEquals(getReasonPhrase(200), 'OK');
  });

  it('should return "Not Found" for 404', () => {
    assertEquals(getReasonPhrase(404), 'Not Found');
  });

  it('should return "Internal Server Error" for 500', () => {
    assertEquals(getReasonPhrase(500), 'Internal Server Error');
  });

  it('should accept string status code', () => {
    assertEquals(getReasonPhrase('200'), 'OK');
    assertEquals(getReasonPhrase('404'), 'Not Found');
  });

  it('should accept StatusCodes enum value', () => {
    assertEquals(getReasonPhrase(StatusCodes.OK), 'OK');
    assertEquals(getReasonPhrase(StatusCodes.BadRequest), 'Bad Request');
  });

  it('should throw for invalid status code', () => {
    assertThrows(
      () => getReasonPhrase('invalid'),
      Error,
      'Invalid status code',
    );
  });

  it('should throw for unknown status code', () => {
    assertThrows(() => getReasonPhrase(999), Error, 'Unknown status code');
  });

  it('should throw for empty string', () => {
    assertThrows(() => getReasonPhrase(''), Error, 'Unknown status code');
  });
});

describe('parseStatusCode', () => {
  it('should return 200 for "OK"', () => {
    assertEquals(parseStatusCode('OK'), 200);
  });

  it('should return 404 for "Not Found"', () => {
    assertEquals(parseStatusCode('Not Found'), 404);
  });

  it('should return 500 for "Internal Server Error"', () => {
    assertEquals(parseStatusCode('Internal Server Error'), 500);
  });

  it('should be case-insensitive', () => {
    assertEquals(parseStatusCode('ok'), 200);
    assertEquals(parseStatusCode('NOT FOUND'), 404);
    assertEquals(parseStatusCode("i'm a teapot"), 418);
  });

  it('should accept ReasonPhrases enum value', () => {
    assertEquals(parseStatusCode(ReasonPhrases.OK), 200);
    assertEquals(parseStatusCode(ReasonPhrases.Unauthorized), 401);
  });

  it('should throw for unknown reason phrase', () => {
    assertThrows(
      () => parseStatusCode('Invalid Reason Phrase'),
      Error,
      'Unknown reason phrase',
    );
  });
});

describe('isValidStatusCode', () => {
  it('should return true for valid status codes', () => {
    assertEquals(isValidStatusCode('200'), true);
    assertEquals(isValidStatusCode('404'), true);
    assertEquals(isValidStatusCode('500'), true);
  });

  it('should return false for invalid status codes', () => {
    assertEquals(isValidStatusCode('999'), false);
    assertEquals(isValidStatusCode('invalid'), false);
    assertEquals(isValidStatusCode(''), false);
  });

  it('should return false for out of range codes', () => {
    assertEquals(isValidStatusCode('50'), false);
    assertEquals(isValidStatusCode('600'), false);
  });
});

describe('isValidReasonPhrase', () => {
  it('should return true for valid reason phrases', () => {
    assertEquals(isValidReasonPhrase('OK'), true);
    assertEquals(isValidReasonPhrase('Not Found'), true);
  });

  it('should be case-insensitive', () => {
    assertEquals(isValidReasonPhrase('ok'), true);
    assertEquals(isValidReasonPhrase('NOT FOUND'), true);
  });

  it('should return false for invalid reason phrases', () => {
    assertEquals(isValidReasonPhrase('Invalid'), false);
    assertEquals(isValidReasonPhrase(''), false);
  });
});

describe('isInformational', () => {
  it('should return true for 1xx status codes', () => {
    assertEquals(isInformational(100), true);
    assertEquals(isInformational(101), true);
    assertEquals(isInformational(102), true);
    assertEquals(isInformational(199), true);
  });

  it('should return false for non-1xx status codes', () => {
    assertEquals(isInformational(200), false);
    assertEquals(isInformational(404), false);
    assertEquals(isInformational(500), false);
  });

  it('should accept string status codes', () => {
    assertEquals(isInformational('100'), true);
    assertEquals(isInformational('200'), false);
  });

  it('should return false for invalid input', () => {
    assertEquals(isInformational('invalid'), false);
  });
});

describe('isSuccess', () => {
  it('should return true for 2xx status codes', () => {
    assertEquals(isSuccess(200), true);
    assertEquals(isSuccess(201), true);
    assertEquals(isSuccess(299), true);
  });

  it('should return false for non-2xx status codes', () => {
    assertEquals(isSuccess(100), false);
    assertEquals(isSuccess(404), false);
    assertEquals(isSuccess(500), false);
  });

  it('should accept string status codes', () => {
    assertEquals(isSuccess('200'), true);
    assertEquals(isSuccess('404'), false);
  });

  it('should return false for invalid input', () => {
    assertEquals(isSuccess('invalid'), false);
  });
});

describe('isRedirect', () => {
  it('should return true for 3xx status codes', () => {
    assertEquals(isRedirect(301), true);
    assertEquals(isRedirect(302), true);
    assertEquals(isRedirect(399), true);
  });

  it('should return false for non-3xx status codes', () => {
    assertEquals(isRedirect(200), false);
    assertEquals(isRedirect(404), false);
    assertEquals(isRedirect(500), false);
  });

  it('should accept string status codes', () => {
    assertEquals(isRedirect('301'), true);
    assertEquals(isRedirect('404'), false);
  });

  it('should return false for invalid input', () => {
    assertEquals(isRedirect('invalid'), false);
  });
});

describe('isClientError', () => {
  it('should return true for 4xx status codes', () => {
    assertEquals(isClientError(400), true);
    assertEquals(isClientError(404), true);
    assertEquals(isClientError(499), true);
  });

  it('should return false for non-4xx status codes', () => {
    assertEquals(isClientError(200), false);
    assertEquals(isClientError(500), false);
    assertEquals(isClientError(300), false);
  });

  it('should accept string status codes', () => {
    assertEquals(isClientError('404'), true);
    assertEquals(isClientError('500'), false);
  });

  it('should return false for invalid input', () => {
    assertEquals(isClientError('invalid'), false);
  });
});

describe('isServerError', () => {
  it('should return true for 5xx status codes', () => {
    assertEquals(isServerError(500), true);
    assertEquals(isServerError(502), true);
    assertEquals(isServerError(599), true);
  });

  it('should return false for non-5xx status codes', () => {
    assertEquals(isServerError(200), false);
    assertEquals(isServerError(404), false);
    assertEquals(isServerError(600), false);
  });

  it('should accept string status codes', () => {
    assertEquals(isServerError('500'), true);
    assertEquals(isServerError('404'), false);
  });

  it('should return false for invalid input', () => {
    assertEquals(isServerError('invalid'), false);
  });
});
