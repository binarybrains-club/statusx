import { describe, it } from '@std/testing/bdd';
import { assertEquals } from '@std/assert';
import { ReasonPhrases } from './reason_phrase.ts';

describe('ReasonPhrases', () => {
  describe('Informational (1xx)', () => {
    it('Continue should be "Continue"', () => {
      assertEquals(ReasonPhrases.Continue, 'Continue');
    });
    it('SwitchingProtocols should be "Switching Protocols"', () => {
      assertEquals(ReasonPhrases.SwitchingProtocols, 'Switching Protocols');
    });
    it('Processing should be "Processing"', () => {
      assertEquals(ReasonPhrases.Processing, 'Processing');
    });
    it('EarlyHints should be "Early Hints"', () => {
      assertEquals(ReasonPhrases.EarlyHints, 'Early Hints');
    });
  });

  describe('Success (2xx)', () => {
    it('OK should be "OK"', () => {
      assertEquals(ReasonPhrases.OK, 'OK');
    });
    it('Created should be "Created"', () => {
      assertEquals(ReasonPhrases.Created, 'Created');
    });
    it('Accepted should be "Accepted"', () => {
      assertEquals(ReasonPhrases.Accepted, 'Accepted');
    });
    it('NonAuthoritativeInformation should be "Non-Authoritative Information"', () => {
      assertEquals(
        ReasonPhrases.NonAuthoritativeInformation,
        'Non-Authoritative Information',
      );
    });
    it('NoContent should be "No Content"', () => {
      assertEquals(ReasonPhrases.NoContent, 'No Content');
    });
    it('ResetContent should be "Reset Content"', () => {
      assertEquals(ReasonPhrases.ResetContent, 'Reset Content');
    });
    it('PartialContent should be "Partial Content"', () => {
      assertEquals(ReasonPhrases.PartialContent, 'Partial Content');
    });
    it('MultiStatus should be "Multi-Status"', () => {
      assertEquals(ReasonPhrases.MultiStatus, 'Multi-Status');
    });
    it('AlreadyReported should be "Already Reported"', () => {
      assertEquals(ReasonPhrases.AlreadyReported, 'Already Reported');
    });
    it('IMUsed should be "IM Used"', () => {
      assertEquals(ReasonPhrases.IMUsed, 'IM Used');
    });
  });

  describe('Redirection (3xx)', () => {
    it('MultipleChoices should be "Multiple Choices"', () => {
      assertEquals(ReasonPhrases.MultipleChoices, 'Multiple Choices');
    });
    it('MovedPermanently should be "Moved Permanently"', () => {
      assertEquals(ReasonPhrases.MovedPermanently, 'Moved Permanently');
    });
    it('Found should be "Found"', () => {
      assertEquals(ReasonPhrases.Found, 'Found');
    });
    it('SeeOther should be "See Other"', () => {
      assertEquals(ReasonPhrases.SeeOther, 'See Other');
    });
    it('NotModified should be "Not Modified"', () => {
      assertEquals(ReasonPhrases.NotModified, 'Not Modified');
    });
    it('UseProxy should be "Use Proxy"', () => {
      assertEquals(ReasonPhrases.UseProxy, 'Use Proxy');
    });
    it('Unused should be "Unused"', () => {
      assertEquals(ReasonPhrases.Unused, 'Unused');
    });
    it('TemporaryRedirect should be "Temporary Redirect"', () => {
      assertEquals(ReasonPhrases.TemporaryRedirect, 'Temporary Redirect');
    });
    it('PermanentRedirect should be "Permanent Redirect"', () => {
      assertEquals(ReasonPhrases.PermanentRedirect, 'Permanent Redirect');
    });
  });

  describe('Client Error (4xx)', () => {
    it('BadRequest should be "Bad Request"', () => {
      assertEquals(ReasonPhrases.BadRequest, 'Bad Request');
    });
    it('Unauthorized should be "Unauthorized"', () => {
      assertEquals(ReasonPhrases.Unauthorized, 'Unauthorized');
    });
    it('PaymentRequired should be "Payment Required"', () => {
      assertEquals(ReasonPhrases.PaymentRequired, 'Payment Required');
    });
    it('Forbidden should be "Forbidden"', () => {
      assertEquals(ReasonPhrases.Forbidden, 'Forbidden');
    });
    it('NotFound should be "Not Found"', () => {
      assertEquals(ReasonPhrases.NotFound, 'Not Found');
    });
    it('MethodNotAllowed should be "Method Not Allowed"', () => {
      assertEquals(ReasonPhrases.MethodNotAllowed, 'Method Not Allowed');
    });
    it('NotAcceptable should be "Not Acceptable"', () => {
      assertEquals(ReasonPhrases.NotAcceptable, 'Not Acceptable');
    });
    it('ProxyAuthenticationRequired should be "Proxy Authentication Required"', () => {
      assertEquals(
        ReasonPhrases.ProxyAuthenticationRequired,
        'Proxy Authentication Required',
      );
    });
    it('RequestTimeout should be "Request Timeout"', () => {
      assertEquals(ReasonPhrases.RequestTimeout, 'Request Timeout');
    });
    it('Conflict should be "Conflict"', () => {
      assertEquals(ReasonPhrases.Conflict, 'Conflict');
    });
    it('Gone should be "Gone"', () => {
      assertEquals(ReasonPhrases.Gone, 'Gone');
    });
    it('LengthRequired should be "Length Required"', () => {
      assertEquals(ReasonPhrases.LengthRequired, 'Length Required');
    });
    it('PreconditionFailed should be "Precondition Failed"', () => {
      assertEquals(ReasonPhrases.PreconditionFailed, 'Precondition Failed');
    });
    it('ContentTooLarge should be "Content Too Large"', () => {
      assertEquals(ReasonPhrases.ContentTooLarge, 'Content Too Large');
    });
    it('URITooLong should be "URI Too Long"', () => {
      assertEquals(ReasonPhrases.URITooLong, 'URI Too Long');
    });
    it('UnsupportedMediaType should be "Unsupported Media Type"', () => {
      assertEquals(
        ReasonPhrases.UnsupportedMediaType,
        'Unsupported Media Type',
      );
    });
    it('RangeNotSatisfiable should be "Range Not Satisfiable"', () => {
      assertEquals(
        ReasonPhrases.RangeNotSatisfiable,
        'Range Not Satisfiable',
      );
    });
    it('ExpectationFailed should be "Expectation Failed"', () => {
      assertEquals(ReasonPhrases.ExpectationFailed, 'Expectation Failed');
    });
    it('ImATeapot should be "I\'m a teapot"', () => {
      assertEquals(ReasonPhrases.ImATeapot, "I'm a teapot");
    });
    it('InsufficientSpaceOnResource should be "Insufficient Space on Resource"', () => {
      assertEquals(
        ReasonPhrases.InsufficientSpaceOnResource,
        'Insufficient Space on Resource',
      );
    });
    it('MethodFailure should be "Method Failure"', () => {
      assertEquals(ReasonPhrases.MethodFailure, 'Method Failure');
    });
    it('MisdirectedRequest should be "Misdirected Request"', () => {
      assertEquals(ReasonPhrases.MisdirectedRequest, 'Misdirected Request');
    });
    it('UnprocessableContent should be "Unprocessable Content"', () => {
      assertEquals(
        ReasonPhrases.UnprocessableContent,
        'Unprocessable Content',
      );
    });
    it('Locked should be "Locked"', () => {
      assertEquals(ReasonPhrases.Locked, 'Locked');
    });
    it('FailedDependency should be "Failed Dependency"', () => {
      assertEquals(ReasonPhrases.FailedDependency, 'Failed Dependency');
    });
    it('TooEarly should be "Too Early"', () => {
      assertEquals(ReasonPhrases.TooEarly, 'Too Early');
    });
    it('UpgradeRequired should be "Upgrade Required"', () => {
      assertEquals(ReasonPhrases.UpgradeRequired, 'Upgrade Required');
    });
    it('PreconditionRequired should be "Precondition Required"', () => {
      assertEquals(ReasonPhrases.PreconditionRequired, 'Precondition Required');
    });
    it('TooManyRequests should be "Too Many Requests"', () => {
      assertEquals(ReasonPhrases.TooManyRequests, 'Too Many Requests');
    });
    it('RequestHeaderFieldsTooLarge should be "Request Header Fields Too Large"', () => {
      assertEquals(
        ReasonPhrases.RequestHeaderFieldsTooLarge,
        'Request Header Fields Too Large',
      );
    });
    it('UnavailableForLegalReasons should be "Unavailable For Legal Reasons"', () => {
      assertEquals(
        ReasonPhrases.UnavailableForLegalReasons,
        'Unavailable For Legal Reasons',
      );
    });
  });

  describe('Server Error (5xx)', () => {
    it('InternalServerError should be "Internal Server Error"', () => {
      assertEquals(ReasonPhrases.InternalServerError, 'Internal Server Error');
    });
    it('NotImplemented should be "Not Implemented"', () => {
      assertEquals(ReasonPhrases.NotImplemented, 'Not Implemented');
    });
    it('BadGateway should be "Bad Gateway"', () => {
      assertEquals(ReasonPhrases.BadGateway, 'Bad Gateway');
    });
    it('ServiceUnavailable should be "Service Unavailable"', () => {
      assertEquals(ReasonPhrases.ServiceUnavailable, 'Service Unavailable');
    });
    it('GatewayTimeout should be "Gateway Timeout"', () => {
      assertEquals(ReasonPhrases.GatewayTimeout, 'Gateway Timeout');
    });
    it('HTTPVersionNotSupported should be "HTTP Version Not Supported"', () => {
      assertEquals(
        ReasonPhrases.HTTPVersionNotSupported,
        'HTTP Version Not Supported',
      );
    });
    it('VariantAlsoNegotiates should be "Variant Also Negotiates"', () => {
      assertEquals(
        ReasonPhrases.VariantAlsoNegotiates,
        'Variant Also Negotiates',
      );
    });
    it('InsufficientStorage should be "Insufficient Storage"', () => {
      assertEquals(ReasonPhrases.InsufficientStorage, 'Insufficient Storage');
    });
    it('LoopDetected should be "Loop Detected"', () => {
      assertEquals(ReasonPhrases.LoopDetected, 'Loop Detected');
    });
    it('NotExtended should be "Not Extended"', () => {
      assertEquals(ReasonPhrases.NotExtended, 'Not Extended');
    });
    it('NetworkAuthenticationRequired should be "Network Authentication Required"', () => {
      assertEquals(
        ReasonPhrases.NetworkAuthenticationRequired,
        'Network Authentication Required',
      );
    });
  });
});
