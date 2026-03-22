import { type StatusCode, StatusCodes } from './status-code.ts';
import { type ReasonPhrase, ReasonPhrases } from './reason-phrase.ts';

const statusCodeToReasonPhrase: Record<number, string> = {
  [StatusCodes.Continue]: ReasonPhrases.Continue,
  [StatusCodes.SwitchingProtocols]: ReasonPhrases.SwitchingProtocols,
  [StatusCodes.Processing]: ReasonPhrases.Processing,
  [StatusCodes.EarlyHints]: ReasonPhrases.EarlyHints,
  [StatusCodes.OK]: ReasonPhrases.OK,
  [StatusCodes.Created]: ReasonPhrases.Created,
  [StatusCodes.Accepted]: ReasonPhrases.Accepted,
  [StatusCodes.NonAuthoritativeInformation]:
    ReasonPhrases.NonAuthoritativeInformation,
  [StatusCodes.NoContent]: ReasonPhrases.NoContent,
  [StatusCodes.ResetContent]: ReasonPhrases.ResetContent,
  [StatusCodes.PartialContent]: ReasonPhrases.PartialContent,
  [StatusCodes.MultiStatus]: ReasonPhrases.MultiStatus,
  [StatusCodes.AlreadyReported]: ReasonPhrases.AlreadyReported,
  [StatusCodes.IMUsed]: ReasonPhrases.IMUsed,
  [StatusCodes.MultipleChoices]: ReasonPhrases.MultipleChoices,
  [StatusCodes.MovedPermanently]: ReasonPhrases.MovedPermanently,
  [StatusCodes.Found]: ReasonPhrases.Found,
  [StatusCodes.SeeOther]: ReasonPhrases.SeeOther,
  [StatusCodes.NotModified]: ReasonPhrases.NotModified,
  [StatusCodes.UseProxy]: ReasonPhrases.UseProxy,
  [StatusCodes.Unused]: ReasonPhrases.Unused,
  [StatusCodes.TemporaryRedirect]: ReasonPhrases.TemporaryRedirect,
  [StatusCodes.PermanentRedirect]: ReasonPhrases.PermanentRedirect,
  [StatusCodes.BadRequest]: ReasonPhrases.BadRequest,
  [StatusCodes.Unauthorized]: ReasonPhrases.Unauthorized,
  [StatusCodes.PaymentRequired]: ReasonPhrases.PaymentRequired,
  [StatusCodes.Forbidden]: ReasonPhrases.Forbidden,
  [StatusCodes.NotFound]: ReasonPhrases.NotFound,
  [StatusCodes.MethodNotAllowed]: ReasonPhrases.MethodNotAllowed,
  [StatusCodes.NotAcceptable]: ReasonPhrases.NotAcceptable,
  [StatusCodes.ProxyAuthenticationRequired]:
    ReasonPhrases.ProxyAuthenticationRequired,
  [StatusCodes.RequestTimeout]: ReasonPhrases.RequestTimeout,
  [StatusCodes.Conflict]: ReasonPhrases.Conflict,
  [StatusCodes.Gone]: ReasonPhrases.Gone,
  [StatusCodes.LengthRequired]: ReasonPhrases.LengthRequired,
  [StatusCodes.PreconditionFailed]: ReasonPhrases.PreconditionFailed,
  [StatusCodes.ContentTooLarge]: ReasonPhrases.ContentTooLarge,
  [StatusCodes.URITooLong]: ReasonPhrases.URITooLong,
  [StatusCodes.UnsupportedMediaType]: ReasonPhrases.UnsupportedMediaType,
  [StatusCodes.RangeNotSatisfiable]: ReasonPhrases.RangeNotSatisfiable,
  [StatusCodes.ExpectationFailed]: ReasonPhrases.ExpectationFailed,
  [StatusCodes.ImATeapot]: ReasonPhrases.ImATeapot,
  [StatusCodes.InsufficientSpaceOnResource]:
    ReasonPhrases.InsufficientSpaceOnResource,
  [StatusCodes.MethodFailure]: ReasonPhrases.MethodFailure,
  [StatusCodes.MisdirectedRequest]: ReasonPhrases.MisdirectedRequest,
  [StatusCodes.UnprocessableContent]: ReasonPhrases.UnprocessableContent,
  [StatusCodes.Locked]: ReasonPhrases.Locked,
  [StatusCodes.FailedDependency]: ReasonPhrases.FailedDependency,
  [StatusCodes.TooEarly]: ReasonPhrases.TooEarly,
  [StatusCodes.UpgradeRequired]: ReasonPhrases.UpgradeRequired,
  [StatusCodes.PreconditionRequired]: ReasonPhrases.PreconditionRequired,
  [StatusCodes.TooManyRequests]: ReasonPhrases.TooManyRequests,
  [StatusCodes.RequestHeaderFieldsTooLarge]:
    ReasonPhrases.RequestHeaderFieldsTooLarge,
  [StatusCodes.UnavailableForLegalReasons]:
    ReasonPhrases.UnavailableForLegalReasons,
  [StatusCodes.InternalServerError]: ReasonPhrases.InternalServerError,
  [StatusCodes.NotImplemented]: ReasonPhrases.NotImplemented,
  [StatusCodes.BadGateway]: ReasonPhrases.BadGateway,
  [StatusCodes.ServiceUnavailable]: ReasonPhrases.ServiceUnavailable,
  [StatusCodes.GatewayTimeout]: ReasonPhrases.GatewayTimeout,
  [StatusCodes.HTTPVersionNotSupported]: ReasonPhrases.HTTPVersionNotSupported,
  [StatusCodes.VariantAlsoNegotiates]: ReasonPhrases.VariantAlsoNegotiates,
  [StatusCodes.InsufficientStorage]: ReasonPhrases.InsufficientStorage,
  [StatusCodes.LoopDetected]: ReasonPhrases.LoopDetected,
  [StatusCodes.NotExtended]: ReasonPhrases.NotExtended,
  [StatusCodes.NetworkAuthenticationRequired]:
    ReasonPhrases.NetworkAuthenticationRequired,
};

const reasonPhraseToStatusCode: Record<string, number> = {
  [ReasonPhrases.Continue]: StatusCodes.Continue,
  [ReasonPhrases.SwitchingProtocols]: StatusCodes.SwitchingProtocols,
  [ReasonPhrases.Processing]: StatusCodes.Processing,
  [ReasonPhrases.EarlyHints]: StatusCodes.EarlyHints,
  [ReasonPhrases.OK]: StatusCodes.OK,
  [ReasonPhrases.Created]: StatusCodes.Created,
  [ReasonPhrases.Accepted]: StatusCodes.Accepted,
  [ReasonPhrases.NonAuthoritativeInformation]:
    StatusCodes.NonAuthoritativeInformation,
  [ReasonPhrases.NoContent]: StatusCodes.NoContent,
  [ReasonPhrases.ResetContent]: StatusCodes.ResetContent,
  [ReasonPhrases.PartialContent]: StatusCodes.PartialContent,
  [ReasonPhrases.MultiStatus]: StatusCodes.MultiStatus,
  [ReasonPhrases.AlreadyReported]: StatusCodes.AlreadyReported,
  [ReasonPhrases.IMUsed]: StatusCodes.IMUsed,
  [ReasonPhrases.MultipleChoices]: StatusCodes.MultipleChoices,
  [ReasonPhrases.MovedPermanently]: StatusCodes.MovedPermanently,
  [ReasonPhrases.Found]: StatusCodes.Found,
  [ReasonPhrases.SeeOther]: StatusCodes.SeeOther,
  [ReasonPhrases.NotModified]: StatusCodes.NotModified,
  [ReasonPhrases.UseProxy]: StatusCodes.UseProxy,
  [ReasonPhrases.Unused]: StatusCodes.Unused,
  [ReasonPhrases.TemporaryRedirect]: StatusCodes.TemporaryRedirect,
  [ReasonPhrases.PermanentRedirect]: StatusCodes.PermanentRedirect,
  [ReasonPhrases.BadRequest]: StatusCodes.BadRequest,
  [ReasonPhrases.Unauthorized]: StatusCodes.Unauthorized,
  [ReasonPhrases.PaymentRequired]: StatusCodes.PaymentRequired,
  [ReasonPhrases.Forbidden]: StatusCodes.Forbidden,
  [ReasonPhrases.NotFound]: StatusCodes.NotFound,
  [ReasonPhrases.MethodNotAllowed]: StatusCodes.MethodNotAllowed,
  [ReasonPhrases.NotAcceptable]: StatusCodes.NotAcceptable,
  [ReasonPhrases.ProxyAuthenticationRequired]:
    StatusCodes.ProxyAuthenticationRequired,
  [ReasonPhrases.RequestTimeout]: StatusCodes.RequestTimeout,
  [ReasonPhrases.Conflict]: StatusCodes.Conflict,
  [ReasonPhrases.Gone]: StatusCodes.Gone,
  [ReasonPhrases.LengthRequired]: StatusCodes.LengthRequired,
  [ReasonPhrases.PreconditionFailed]: StatusCodes.PreconditionFailed,
  [ReasonPhrases.ContentTooLarge]: StatusCodes.ContentTooLarge,
  [ReasonPhrases.URITooLong]: StatusCodes.URITooLong,
  [ReasonPhrases.UnsupportedMediaType]: StatusCodes.UnsupportedMediaType,
  [ReasonPhrases.RangeNotSatisfiable]: StatusCodes.RangeNotSatisfiable,
  [ReasonPhrases.ExpectationFailed]: StatusCodes.ExpectationFailed,
  [ReasonPhrases.ImATeapot]: StatusCodes.ImATeapot,
  [ReasonPhrases.InsufficientSpaceOnResource]:
    StatusCodes.InsufficientSpaceOnResource,
  [ReasonPhrases.MethodFailure]: StatusCodes.MethodFailure,
  [ReasonPhrases.MisdirectedRequest]: StatusCodes.MisdirectedRequest,
  [ReasonPhrases.UnprocessableContent]: StatusCodes.UnprocessableContent,
  [ReasonPhrases.Locked]: StatusCodes.Locked,
  [ReasonPhrases.FailedDependency]: StatusCodes.FailedDependency,
  [ReasonPhrases.TooEarly]: StatusCodes.TooEarly,
  [ReasonPhrases.UpgradeRequired]: StatusCodes.UpgradeRequired,
  [ReasonPhrases.PreconditionRequired]: StatusCodes.PreconditionRequired,
  [ReasonPhrases.TooManyRequests]: StatusCodes.TooManyRequests,
  [ReasonPhrases.RequestHeaderFieldsTooLarge]:
    StatusCodes.RequestHeaderFieldsTooLarge,
  [ReasonPhrases.UnavailableForLegalReasons]:
    StatusCodes.UnavailableForLegalReasons,
  [ReasonPhrases.InternalServerError]: StatusCodes.InternalServerError,
  [ReasonPhrases.NotImplemented]: StatusCodes.NotImplemented,
  [ReasonPhrases.BadGateway]: StatusCodes.BadGateway,
  [ReasonPhrases.ServiceUnavailable]: StatusCodes.ServiceUnavailable,
  [ReasonPhrases.GatewayTimeout]: StatusCodes.GatewayTimeout,
  [ReasonPhrases.HTTPVersionNotSupported]: StatusCodes.HTTPVersionNotSupported,
  [ReasonPhrases.VariantAlsoNegotiates]: StatusCodes.VariantAlsoNegotiates,
  [ReasonPhrases.InsufficientStorage]: StatusCodes.InsufficientStorage,
  [ReasonPhrases.LoopDetected]: StatusCodes.LoopDetected,
  [ReasonPhrases.NotExtended]: StatusCodes.NotExtended,
  [ReasonPhrases.NetworkAuthenticationRequired]:
    StatusCodes.NetworkAuthenticationRequired,
};

/**
 * Returns the reason phrase corresponding to the given status code.
 *
 * @param {StatusCodes | number | string} statusCode - The HTTP status code.
 * @returns {ReasonPhrase} The reason phrase corresponding to the given status code.
 * @throws {Error} If the status code is invalid or unknown.
 */
export function getReasonPhrase(
  statusCode: StatusCodes | number | string,
): string {
  const code = Number(statusCode);
  if (isNaN(code)) {
    throw new Error(`Invalid status code: ${statusCode}`);
  }
  const reasonPhrase = statusCodeToReasonPhrase[code];
  if (!reasonPhrase) {
    throw new Error(`Unknown status code: ${statusCode}`);
  }
  return reasonPhrase;
}

/**
 * Returns the status code corresponding to the given reason phrase.
 *
 * @param {ReasonPhrases | string} reasonPhrase - The HTTP reason phrase.
 * @returns {StatusCode} The status code corresponding to the given reason phrase.
 * @throws {Error} If the reason phrase is invalid or unknown.
 */
export function getStatusCode(
  reasonPhrase: ReasonPhrases | string,
): number {
  const lowerReasonPhrase = reasonPhrase.toLowerCase();
  for (const key in reasonPhraseToStatusCode) {
    if (key.toLowerCase() === lowerReasonPhrase) {
      return reasonPhraseToStatusCode[key];
    }
  }
  const code = reasonPhraseToStatusCode[reasonPhrase];
  if (!code) {
    throw new Error(`Unknown reason phrase: ${reasonPhrase}`);
  }
  return code;
}