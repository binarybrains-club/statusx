import { describe, it } from '@std/testing/bdd';
import { assertEquals } from '@std/assert';
import { StatusCodes } from './status_code.ts';

describe('StatusCodes', () => {
  describe('Informational (1xx)', () => {
    it('Continue should be 100', () => {
      assertEquals(StatusCodes.Continue, 100);
    });
    it('SwitchingProtocols should be 101', () => {
      assertEquals(StatusCodes.SwitchingProtocols, 101);
    });
    it('Processing should be 102', () => {
      assertEquals(StatusCodes.Processing, 102);
    });
    it('EarlyHints should be 103', () => {
      assertEquals(StatusCodes.EarlyHints, 103);
    });
  });

  describe('Success (2xx)', () => {
    it('OK should be 200', () => {
      assertEquals(StatusCodes.OK, 200);
    });
    it('Created should be 201', () => {
      assertEquals(StatusCodes.Created, 201);
    });
    it('Accepted should be 202', () => {
      assertEquals(StatusCodes.Accepted, 202);
    });
    it('NonAuthoritativeInformation should be 203', () => {
      assertEquals(StatusCodes.NonAuthoritativeInformation, 203);
    });
    it('NoContent should be 204', () => {
      assertEquals(StatusCodes.NoContent, 204);
    });
    it('ResetContent should be 205', () => {
      assertEquals(StatusCodes.ResetContent, 205);
    });
    it('PartialContent should be 206', () => {
      assertEquals(StatusCodes.PartialContent, 206);
    });
    it('MultiStatus should be 207', () => {
      assertEquals(StatusCodes.MultiStatus, 207);
    });
    it('AlreadyReported should be 208', () => {
      assertEquals(StatusCodes.AlreadyReported, 208);
    });
    it('IMUsed should be 226', () => {
      assertEquals(StatusCodes.IMUsed, 226);
    });
  });

  describe('Redirection (3xx)', () => {
    it('MultipleChoices should be 300', () => {
      assertEquals(StatusCodes.MultipleChoices, 300);
    });
    it('MovedPermanently should be 301', () => {
      assertEquals(StatusCodes.MovedPermanently, 301);
    });
    it('Found should be 302', () => {
      assertEquals(StatusCodes.Found, 302);
    });
    it('SeeOther should be 303', () => {
      assertEquals(StatusCodes.SeeOther, 303);
    });
    it('NotModified should be 304', () => {
      assertEquals(StatusCodes.NotModified, 304);
    });
    it('UseProxy should be 305', () => {
      assertEquals(StatusCodes.UseProxy, 305);
    });
    it('Unused should be 306', () => {
      assertEquals(StatusCodes.Unused, 306);
    });
    it('TemporaryRedirect should be 307', () => {
      assertEquals(StatusCodes.TemporaryRedirect, 307);
    });
    it('PermanentRedirect should be 308', () => {
      assertEquals(StatusCodes.PermanentRedirect, 308);
    });
  });

  describe('Client Error (4xx)', () => {
    it('BadRequest should be 400', () => {
      assertEquals(StatusCodes.BadRequest, 400);
    });
    it('Unauthorized should be 401', () => {
      assertEquals(StatusCodes.Unauthorized, 401);
    });
    it('PaymentRequired should be 402', () => {
      assertEquals(StatusCodes.PaymentRequired, 402);
    });
    it('Forbidden should be 403', () => {
      assertEquals(StatusCodes.Forbidden, 403);
    });
    it('NotFound should be 404', () => {
      assertEquals(StatusCodes.NotFound, 404);
    });
    it('MethodNotAllowed should be 405', () => {
      assertEquals(StatusCodes.MethodNotAllowed, 405);
    });
    it('NotAcceptable should be 406', () => {
      assertEquals(StatusCodes.NotAcceptable, 406);
    });
    it('ProxyAuthenticationRequired should be 407', () => {
      assertEquals(StatusCodes.ProxyAuthenticationRequired, 407);
    });
    it('RequestTimeout should be 408', () => {
      assertEquals(StatusCodes.RequestTimeout, 408);
    });
    it('Conflict should be 409', () => {
      assertEquals(StatusCodes.Conflict, 409);
    });
    it('Gone should be 410', () => {
      assertEquals(StatusCodes.Gone, 410);
    });
    it('LengthRequired should be 411', () => {
      assertEquals(StatusCodes.LengthRequired, 411);
    });
    it('PreconditionFailed should be 412', () => {
      assertEquals(StatusCodes.PreconditionFailed, 412);
    });
    it('ContentTooLarge should be 413', () => {
      assertEquals(StatusCodes.ContentTooLarge, 413);
    });
    it('URITooLong should be 414', () => {
      assertEquals(StatusCodes.URITooLong, 414);
    });
    it('UnsupportedMediaType should be 415', () => {
      assertEquals(StatusCodes.UnsupportedMediaType, 415);
    });
    it('RangeNotSatisfiable should be 416', () => {
      assertEquals(StatusCodes.RangeNotSatisfiable, 416);
    });
    it('ExpectationFailed should be 417', () => {
      assertEquals(StatusCodes.ExpectationFailed, 417);
    });
    it('ImATeapot should be 418', () => {
      assertEquals(StatusCodes.ImATeapot, 418);
    });
    it('InsufficientSpaceOnResource should be 419', () => {
      assertEquals(StatusCodes.InsufficientSpaceOnResource, 419);
    });
    it('MethodFailure should be 420', () => {
      assertEquals(StatusCodes.MethodFailure, 420);
    });
    it('MisdirectedRequest should be 421', () => {
      assertEquals(StatusCodes.MisdirectedRequest, 421);
    });
    it('UnprocessableContent should be 422', () => {
      assertEquals(StatusCodes.UnprocessableContent, 422);
    });
    it('Locked should be 423', () => {
      assertEquals(StatusCodes.Locked, 423);
    });
    it('FailedDependency should be 424', () => {
      assertEquals(StatusCodes.FailedDependency, 424);
    });
    it('TooEarly should be 425', () => {
      assertEquals(StatusCodes.TooEarly, 425);
    });
    it('UpgradeRequired should be 426', () => {
      assertEquals(StatusCodes.UpgradeRequired, 426);
    });
    it('PreconditionRequired should be 428', () => {
      assertEquals(StatusCodes.PreconditionRequired, 428);
    });
    it('TooManyRequests should be 429', () => {
      assertEquals(StatusCodes.TooManyRequests, 429);
    });
    it('RequestHeaderFieldsTooLarge should be 431', () => {
      assertEquals(StatusCodes.RequestHeaderFieldsTooLarge, 431);
    });
    it('UnavailableForLegalReasons should be 451', () => {
      assertEquals(StatusCodes.UnavailableForLegalReasons, 451);
    });
  });

  describe('Server Error (5xx)', () => {
    it('InternalServerError should be 500', () => {
      assertEquals(StatusCodes.InternalServerError, 500);
    });
    it('NotImplemented should be 501', () => {
      assertEquals(StatusCodes.NotImplemented, 501);
    });
    it('BadGateway should be 502', () => {
      assertEquals(StatusCodes.BadGateway, 502);
    });
    it('ServiceUnavailable should be 503', () => {
      assertEquals(StatusCodes.ServiceUnavailable, 503);
    });
    it('GatewayTimeout should be 504', () => {
      assertEquals(StatusCodes.GatewayTimeout, 504);
    });
    it('HTTPVersionNotSupported should be 505', () => {
      assertEquals(StatusCodes.HTTPVersionNotSupported, 505);
    });
    it('VariantAlsoNegotiates should be 506', () => {
      assertEquals(StatusCodes.VariantAlsoNegotiates, 506);
    });
    it('InsufficientStorage should be 507', () => {
      assertEquals(StatusCodes.InsufficientStorage, 507);
    });
    it('LoopDetected should be 508', () => {
      assertEquals(StatusCodes.LoopDetected, 508);
    });
    it('NotExtended should be 510', () => {
      assertEquals(StatusCodes.NotExtended, 510);
    });
    it('NetworkAuthenticationRequired should be 511', () => {
      assertEquals(StatusCodes.NetworkAuthenticationRequired, 511);
    });
  });
});
