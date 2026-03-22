export enum StatusCodes {
  /**
   * @description The server has received the request headers and the client should proceed to send the request body.
   */
  Continue = 100,
  /**
   * @description The server is switching protocols as requested by the client via Upgrade header.
   */
  SwitchingProtocols = 101,
  /**
   * @description The server is processing the request but has not completed it yet (used for async operations).
   */
  Processing = 102,
  /**
   * @description The server is sending resources that the client may preload before the final response.
   */
  EarlyHints = 103,
  /**
   * @description The request has succeeded and the response contains the requested data.
   */
  OK = 200,
  /**
   * @description The request has succeeded and a new resource has been created as a result.
   */
  Created = 201,
  /**
   * @description The request has been accepted for processing but may not be completed yet.
   */
  Accepted = 202,
  /**
   * @description The returned metadata is not exactly from the origin server (e.g., from a cached copy).
   */
  NonAuthoritativeInformation = 203,
  /**
   * @description The request succeeded but there is no content to return (e.g., after a DELETE).
   */
  NoContent = 204,
  /**
   * @description The request succeeded and the client should reset the document view (e.g., form reset).
   */
  ResetContent = 205,
  /**
   * @description The server is returning partial data as requested by a Range header.
   */
  PartialContent = 206,
  /**
   * @description The response contains multiple status codes from different operations (WebDAV).
   */
  MultiStatus = 207,
  /**
   * @description The resource has already been reported in a previous response (WebDAV).
   */
  AlreadyReported = 208,
  /**
   * @description The server has fulfilled a request for the resource and the response is a final report (WebDAV).
   */
  IMUsed = 226,
  /**
   * @description The server has multiple responses available for this request (redirect choice).
   */
  MultipleChoices = 300,
  /**
   * @description The resource has been permanently moved to a new location (permanent redirect).
   */
  MovedPermanently = 301,
  /**
   * @description The resource is temporarily at a different location (temporary redirect).
   */
  Found = 302,
  /**
   * @description The response can be found at another URI using a different method (POST should not be retried).
   */
  SeeOther = 303,
  /**
   * @description The resource has not been modified since the last request (use cached copy).
   */
  NotModified = 304,
  /**
   * @deprecated
   * @description The resource is available through a specific proxy (removed from modern HTTP).
   */
  UseProxy = 305,
  /**
   * @deprecated
   * @description No longer used; reserved for future HTTP implementations.
   */
  Unused = 306,
  /**
   * @description The resource is temporarily at a new location but should retain the original method.
   */
  TemporaryRedirect = 307,
  /**
   * @description The resource has been permanently moved and future requests should use the new URI.
   */
  PermanentRedirect = 308,
  /**
   * @description The server cannot process the request due to malformed syntax or invalid parameters.
   */
  BadRequest = 400,
  /**
   * @description Authentication is required and has failed or not been provided.
   */
  Unauthorized = 401,
  /**
   * @description Payment is required to access this resource (reserved for future use).
   */
  PaymentRequired = 402,
  /**
   * @description The server understood the request but refuses to authorize it.
   */
  Forbidden = 403,
  /**
   * @description The requested resource could not be found on the server.
   */
  NotFound = 404,
  /**
   * @description The HTTP method is not allowed for the requested resource.
   */
  MethodNotAllowed = 405,
  /**
   * @description The server cannot produce a response matching the client's Accept headers.
   */
  NotAcceptable = 406,
  /**
   * @description The client must authenticate with the proxy before accessing this resource.
   */
  ProxyAuthenticationRequired = 407,
  /**
   * @description The server timed out waiting for the request from the client.
   */
  RequestTimeout = 408,
  /**
   * @description The request conflicts with the current state of the resource.
   */
  Conflict = 409,
  /**
   * @description The resource was available at this location but has been permanently removed.
   */
  Gone = 410,
  /**
   * @description The server requires the Content-Length header to be specified.
   */
  LengthRequired = 411,
  /**
   * @description A precondition in the request headers evaluates to false on the server.
   */
  PreconditionFailed = 412,
  /**
   * @description The request body is too large for the server to process.
   */
  ContentTooLarge = 413,
  /**
   * @description The request URI is longer than the server is willing to interpret.
   */
  URITooLong = 414,
  /**
   * @description The request body has a media type that the server does not support.
   */
  UnsupportedMediaType = 415,
  /**
   * @description The Range header specifies a range that is not satisfiable for the resource.
   */
  RangeNotSatisfiable = 416,
  /**
   * @description The server cannot meet the requirements specified in the Expect header.
   */
  ExpectationFailed = 417,
  /**
   * @description The server refuses to brew coffee because it is a teapot (April Fools' joke).
   */
  ImATeapot = 418,
  /**
   * @description The server cannot process the request due to insufficient storage space.
   */
  InsufficientSpaceOnResource = 419,
  /**
   * @deprecated
   * @description A method failure occurred during the execution (WebDAV; removed from RFC 4918).
   */
  MethodFailure = 420,
  /**
   * @description The request was directed at a server that is not able to produce a response.
   */
  MisdirectedRequest = 421,
  /**
   * @description The server understands the request but cannot process the contained instructions.
   */
  UnprocessableContent = 422,
  /**
   * @description The resource that is being accessed is locked (WebDAV).
   */
  Locked = 423,
  /**
   * @description The request failed due to a dependency that itself failed (WebDAV).
   */
  FailedDependency = 424,
  /**
   * @experimental
   * @description The server is unwilling to risk processing a request that might be replayed (TLS handshake).
   */
  TooEarly = 425,
  /**
   * @description The server refuses to process the request; the client should upgrade to a different protocol.
   */
  UpgradeRequired = 426,
  /**
   * @description The server requires the request to include a precondition (e.g., If-Match).
   */
  PreconditionRequired = 428,
  /**
   * @description The user has sent too many requests in a given time period (rate limiting).
   */
  TooManyRequests = 429,
  /**
   * @description The server refuses to process the request due to oversized header fields.
   */
  RequestHeaderFieldsTooLarge = 431,
  /**
   * @description The server cannot legally provide the resource (e.g., due to censorship or legal restrictions).
   */
  UnavailableForLegalReasons = 451,
  /**
   * @description An unexpected condition was encountered and the server cannot fulfill the request.
   */
  InternalServerError = 500,
  /**
   * @description The server does not support the functionality required to fulfill the request.
   */
  NotImplemented = 501,
  /**
   * @description The server, while acting as a gateway, received an invalid response from the upstream server.
   */
  BadGateway = 502,
  /**
   * @description The server is currently unavailable due to overload or maintenance.
   */
  ServiceUnavailable = 503,
  /**
   * @description The server, while acting as a gateway, did not receive a timely response from the upstream server.
   */
  GatewayTimeout = 504,
  /**
   * @description The server does not support the HTTP protocol version used in the request.
   */
  HTTPVersionNotSupported = 505,
  /**
   * @description The server has internal configuration issues and cannot complete the request (WebDAV).
   */
  VariantAlsoNegotiates = 506,
  /**
   * @description The server does not have enough storage space to complete the request.
   */
  InsufficientStorage = 507,
  /**
   * @description The server detected an infinite loop while processing the request (WebDAV).
   */
  LoopDetected = 508,
  /**
   * @description The policy for accessing the request requires further extension (WebDAV).
   */
  NotExtended = 510,
  /**
   * @description The client must authenticate to access the network (e.g., captive portal).
   */
  NetworkAuthenticationRequired = 511,
}
