import { StatusCodes, type StatusCode } from './status-code.ts';
import { ReasonPhrases, type ReasonPhrase } from './reason-phrase.ts';

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

const reasonPhraseLowerCaseCache: Record<string, number> = (() => {
  const cache: Record<string, number> = {};
  for (const key in reasonPhraseToStatusCode) {
    cache[key.toLowerCase()] = reasonPhraseToStatusCode[key];
  }
  return cache;
})();

/**
 * Returns the reason phrase for a given HTTP status code.
 *
 * @param {number | string | StatusCodes} statusCode - The HTTP status code (e.g., 200, "404", StatusCodes.OK).
 * @returns {ReasonPhrase} The reason phrase corresponding to the status code.
 * @throws {Error} If the status code is invalid or unknown.
 *
 *  @example
 * ```ts
 * import { getReasonPhrase, StatusCodes } from "@egamagz/statusx"
 * getReasonPhrase(200)       // "OK"
 * getReasonPhrase("404")     // "Not Found"
 * getReasonPhrase(StatusCodes.BadRequest)  // "Bad Request"
 * ```
 */
export function getReasonPhrase(statusCode: number | string | StatusCodes): ReasonPhrase {
  const code = Number(statusCode);
  if (isNaN(code)) {
    throw new Error(`Invalid status code: ${statusCode}`);
  }
  const reasonPhrase = statusCodeToReasonPhrase[code];
  if (!reasonPhrase) {
    throw new Error(`Unknown status code: ${statusCode}`);
  }
  return reasonPhrase as ReasonPhrase;
}

/**
 * Returns the status code for a given HTTP reason phrase.
 *
 * @param {string | ReasonPhrase} reasonPhrase - The HTTP reason phrase (case-insensitive).
 * @returns {number} The status code corresponding to the reason phrase.
 * @throws {Error} If the reason phrase is unknown.
 *
 * @example
 * ```ts
 * import { getStatusCode } from "@egamagz/statusx"
 * getStatusCode("OK")              // 200
 * getStatusCode("not found")      // 404
 * getStatusCode("Internal Server Error")  // 500
 * ```
 */
export function getStatusCode(reasonPhrase: string | ReasonPhrase): number {
  const lowerReasonPhrase = reasonPhrase.toLowerCase();
  const code = reasonPhraseLowerCaseCache[lowerReasonPhrase];
  if(!code){
    throw new Error(`Unknown reason phrase: ${reasonPhrase}`);
  }
  return code;
}

/**
 * Checks if a status code is a valid HTTP status code.
 *
 * @param {number | string | StatusCodes} statusCode - The status code to validate.
 * @returns {boolean} True if the status code is valid, false otherwise.
 *
 * @example
 * ```ts
 * import { isValidStatusCode } from "@egamagz/statusx"
 * 
 * isValidStatusCode(200)   // true
 * isValidStatusCode("404") // true
 * isValidStatusCode(999)   // false
 * ```
 */
export function isValidStatusCode(statusCode: number | string | StatusCodes): boolean {
  const code = Number(statusCode);
  return !isNaN(code) && statusCodeToReasonPhrase[code] !== undefined;
}

/**
 * Checks if a reason phrase is a valid HTTP reason phrase.
 *
 * @param {string | ReasonPhrase} reasonPhrase - The reason phrase to validate.
 * @returns {boolean} True if the reason phrase is valid, false otherwise.
 *
 * @example
 * ```ts
 * import { isValidReasonPhrase } from "@egamagz/statusx"
 * 
 * isValidReasonPhrase("OK")          // true
 * isValidReasonPhrase("not found")    // true (case-insensitive)
 * isValidReasonPhrase("Invalid")      // false
 * ```
 */
export function isValidReasonPhrase(reasonPhrase: string | ReasonPhrase): boolean {
  const lowerReasonPhrase = reasonPhrase.toLowerCase();
  return reasonPhraseLowerCaseCache[lowerReasonPhrase] !== undefined;
}

/**
 * Checks if the status code is an informational response (1xx).
 *
 * @param {number | string | StatusCodes} statusCode - The status code to check.
 * @returns {boolean} True if the status code is in the 100-199 range.
 *
 * @example
 * ```ts
 * import { isInformational } from "@egamagz/statusx"
 * 
 * isInformational(100)  // true (Continue)
 * isInformational(200)  // false
 * ```
 */
export function isInformational(statusCode: number | string | StatusCodes): boolean {
  const code = Number(statusCode);
  return !isNaN(code) && code >= 100 && code < 200;
}

/**
 * Checks if the status code is a successful response (2xx).
 *
 * @param {number | string | StatusCodes} statusCode - The status code to check.
 * @returns {boolean} True if the status code is in the 200-299 range.
 *
 * @example
 * ```ts
 * import { isSuccess } from "@egamagz/statusx"
 * 
 * isSuccess(200)  // true (OK)
 * isSuccess(404)  // false
 * ```
 */
export function isSuccess(statusCode: number | string | StatusCodes): boolean {
  const code = Number(statusCode);
  return !isNaN(code) && code >= 200 && code < 300;
}

/**
 * Checks if the status code is a redirection response (3xx).
 *
 * @param {number | string | StatusCodes} statusCode - The status code to check.
 * @returns {boolean} True if the status code is in the 300-399 range.
 *
 * @example
 * ```ts
 * import { isRedirect } from "@egamagz/statusx"
 * 
 * isRedirect(301)  // true (Moved Permanently)
 * isRedirect(200)  // false
 * ```
 */
export function isRedirect(statusCode: number | string | StatusCodes): boolean {
  const code = Number(statusCode);
  return !isNaN(code) && code >= 300 && code < 400;
}

/**
 * Checks if the status code is a client error response (4xx).
 *
 * @param {number | string | StatusCodes} statusCode - The status code to check.
 * @returns {boolean} True if the status code is in the 400-499 range.
 *
 * @example
 * ```ts
 * import { isClientError } from "@egamagz/statusx"
 * isClientError(404)  // true (Not Found)
 * isClientError(500)  // false
 * ```
 */
export function isClientError(statusCode: number | string | StatusCodes): boolean {
  const code = Number(statusCode);
  return !isNaN(code) && code >= 400 && code < 500;
}

/**
 * Checks if the status code is a server error response (5xx).
 *
 * @param {number | string | StatusCodes} statusCode - The status code to check.
 * @returns {boolean} True if the status code is in the 500-599 range.
 *
 * @example
 * ```ts
 * isServerError(500)  // true (Internal Server Error)
 * isServerError(404)  // false
 * ```
 */
export function isServerError(statusCode: number | string | StatusCodes): boolean {
  const code = Number(statusCode);
  return !isNaN(code) && code >= 500 && code < 600;
}
