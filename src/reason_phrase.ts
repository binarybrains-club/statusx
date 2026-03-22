export enum ReasonPhrases {
  /**
   * @description The server has received the request headers and the client should proceed to send the request body.
   */
  Continue = 'Continue',
  /**
   * @description The server is switching protocols as requested by the client via Upgrade header.
   */
  SwitchingProtocols = 'Switching Protocols',
  /**
   * @description The server is processing the request but has not completed it yet (used for async operations).
   */
  Processing = 'Processing',
  /**
   * @description The server is sending resources that the client may preload before the final response.
   */
  EarlyHints = 'Early Hints',
  /**
   * @description The request has succeeded and the response contains the requested data.
   */
  OK = 'OK',
  /**
   * @description The request has succeeded and a new resource has been created as a result.
   */
  Created = 'Created',
  /**
   * @description The request has been accepted for processing but may not be completed yet.
   */
  Accepted = 'Accepted',
  /**
   * @description The returned metadata is not exactly from the origin server (e.g., from a cached copy).
   */
  NonAuthoritativeInformation = 'Non-Authoritative Information',
  /**
   * @description The request succeeded but there is no content to return (e.g., after a DELETE).
   */
  NoContent = 'No Content',
  /**
   * @description The request succeeded and the client should reset the document view (e.g., form reset).
   */
  ResetContent = 'Reset Content',
  /**
   * @description The server is returning partial data as requested by a Range header.
   */
  PartialContent = 'Partial Content',
  /**
   * @description The response contains multiple status codes from different operations (WebDAV).
   */
  MultiStatus = 'Multi-Status',
  /**
   * @description The resource has already been reported in a previous response (WebDAV).
   */
  AlreadyReported = 'Already Reported',
  /**
   * @description The server has fulfilled a request for the resource and the response is a final report (WebDAV).
   */
  IMUsed = 'IM Used',
  /**
   * @description The server has multiple responses available for this request (redirect choice).
   */
  MultipleChoices = 'Multiple Choices',
  /**
   * @description The resource has been permanently moved to a new location (permanent redirect).
   */
  MovedPermanently = 'Moved Permanently',
  /**
   * @description The resource is temporarily at a different location (temporary redirect).
   */
  Found = 'Found',
  /**
   * @description The response can be found at another URI using a different method (POST should not be retried).
   */
  SeeOther = 'See Other',
  /**
   * @description The resource has not been modified since the last request (use cached copy).
   */
  NotModified = 'Not Modified',
  /**
   * @deprecated
   * @description The resource is available through a specific proxy (removed from modern HTTP).
   */
  UseProxy = 'Use Proxy',
  /**
   * @deprecated
   * @description No longer used; reserved for future HTTP implementations.
   */
  Unused = 'Unused',
  /**
   * @description The resource is temporarily at a new location but should retain the original method.
   */
  TemporaryRedirect = 'Temporary Redirect',
  /**
   * @description The resource has been permanently moved and future requests should use the new URI.
   */
  PermanentRedirect = 'Permanent Redirect',
  /**
   * @description The server cannot process the request due to malformed syntax or invalid parameters.
   */
  BadRequest = 'Bad Request',
  /**
   * @description Authentication is required and has failed or not been provided.
   */
  Unauthorized = 'Unauthorized',
  /**
   * @description Payment is required to access this resource (reserved for future use).
   */
  PaymentRequired = 'Payment Required',
  /**
   * @description The server understood the request but refuses to authorize it.
   */
  Forbidden = 'Forbidden',
  /**
   * @description The requested resource could not be found on the server.
   */
  NotFound = 'Not Found',
  /**
   * @description The HTTP method is not allowed for the requested resource.
   */
  MethodNotAllowed = 'Method Not Allowed',
  /**
   * @description The server cannot produce a response matching the client's Accept headers.
   */
  NotAcceptable = 'Not Acceptable',
  /**
   * @description The client must authenticate with the proxy before accessing this resource.
   */
  ProxyAuthenticationRequired = 'Proxy Authentication Required',
  /**
   * @description The server timed out waiting for the request from the client.
   */
  RequestTimeout = 'Request Timeout',
  /**
   * @description The request conflicts with the current state of the resource.
   */
  Conflict = 'Conflict',
  /**
   * @description The resource was available at this location but has been permanently removed.
   */
  Gone = 'Gone',
  /**
   * @description The server requires the Content-Length header to be specified.
   */
  LengthRequired = 'Length Required',
  /**
   * @description A precondition in the request headers evaluates to false on the server.
   */
  PreconditionFailed = 'Precondition Failed',
  /**
   * @description The request body is too large for the server to process.
   */
  ContentTooLarge = 'Content Too Large',
  /**
   * @description The request URI is longer than the server is willing to interpret.
   */
  URITooLong = 'URI Too Long',
  /**
   * @description The request body has a media type that the server does not support.
   */
  UnsupportedMediaType = 'Unsupported Media Type',
  /**
   * @description The Range header specifies a range that is not satisfiable for the resource.
   */
  RangeNotSatisfiable = 'Range Not Satisfiable',
  /**
   * @description The server cannot meet the requirements specified in the Expect header.
   */
  ExpectationFailed = 'Expectation Failed',
  /**
   * @description The server refuses to brew coffee because it is a teapot (April Fools' joke).
   */
  ImATeapot = "I'm a teapot",
  /**
   * @description The server cannot process the request due to insufficient storage space.
   */
  InsufficientSpaceOnResource = 'Insufficient Space on Resource',
  /**
   * @deprecated
   * @description A method failure occurred during the execution (WebDAV; removed from RFC 4918).
   */
  MethodFailure = 'Method Failure',
  /**
   * @description The request was directed at a server that is not able to produce a response.
   */
  MisdirectedRequest = 'Misdirected Request',
  /**
   * @description The server understands the request but cannot process the contained instructions.
   */
  UnprocessableContent = 'Unprocessable Content',
  /**
   * @description The resource that is being accessed is locked (WebDAV).
   */
  Locked = 'Locked',
  /**
   * @description The request failed due to a dependency that itself failed (WebDAV).
   */
  FailedDependency = 'Failed Dependency',
  /**
   * @experimental
   * @description The server is unwilling to risk processing a request that might be replayed (TLS handshake).
   */
  TooEarly = 'Too Early',
  /**
   * @description The server refuses to process the request; the client should upgrade to a different protocol.
   */
  UpgradeRequired = 'Upgrade Required',
  /**
   * @description The server requires the request to include a precondition (e.g., If-Match).
   */
  PreconditionRequired = 'Precondition Required',
  /**
   * @description The user has sent too many requests in a given time period (rate limiting).
   */
  TooManyRequests = 'Too Many Requests',
  /**
   * @description The server refuses to process the request due to oversized header fields.
   */
  RequestHeaderFieldsTooLarge = 'Request Header Fields Too Large',
  /**
   * @description The server cannot legally provide the resource (e.g., due to censorship or legal restrictions).
   */
  UnavailableForLegalReasons = 'Unavailable For Legal Reasons',
  /**
   * @description An unexpected condition was encountered and the server cannot fulfill the request.
   */
  InternalServerError = 'Internal Server Error',
  /**
   * @description The server does not support the functionality required to fulfill the request.
   */
  NotImplemented = 'Not Implemented',
  /**
   * @description The server, while acting as a gateway, received an invalid response from the upstream server.
   */
  BadGateway = 'Bad Gateway',
  /**
   * @description The server is currently unavailable due to overload or maintenance.
   */
  ServiceUnavailable = 'Service Unavailable',
  /**
   * @description The server, while acting as a gateway, did not receive a timely response from the upstream server.
   */
  GatewayTimeout = 'Gateway Timeout',
  /**
   * @description The server does not support the HTTP protocol version used in the request.
   */
  HTTPVersionNotSupported = 'HTTP Version Not Supported',
  /**
   * @description The server has internal configuration issues and cannot complete the request (WebDAV).
   */
  VariantAlsoNegotiates = 'Variant Also Negotiates',
  /**
   * @description The server does not have enough storage space to complete the request.
   */
  InsufficientStorage = 'Insufficient Storage',
  /**
   * @description The server detected an infinite loop while processing the request (WebDAV).
   */
  LoopDetected = 'Loop Detected',
  /**
   * @description The policy for accessing the request requires further extension (WebDAV).
   */
  NotExtended = 'Not Extended',
  /**
   * @description The client must authenticate to access the network (e.g., captive portal).
   */
  NetworkAuthenticationRequired = 'Network Authentication Required',
}
