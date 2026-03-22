export type ReasonPhrase = typeof ReasonPhrases[keyof typeof ReasonPhrases];

export enum ReasonPhrases {
  Continue = 'Continue',
  SwitchingProtocols = 'Switching Protocols',
  Processing = 'Processing',
  EarlyHints = 'Early Hints',
  OK = 'OK',
  Created = 'Created',
  Accepted = 'Accepted',
  NonAuthoritativeInformation = 'Non-Authoritative Information',
  NoContent = 'No Content',
  ResetContent = 'Reset Content',
  PartialContent = 'Partial Content',
  MultiStatus = 'Multi-Status',
  AlreadyReported = 'Already Reported',
  IMUsed = 'IM Used',
  MultipleChoices = 'Multiple Choices',
  MovedPermanently = 'Moved Permanently',
  Found = 'Found',
  SeeOther = 'See Other',
  NotModified = 'Not Modified',
  /**
   * @deprecated
   */
  UseProxy = 'Use Proxy',
  /**
   * @deprecated
   */
  Unused = 'Unused',
  TemporaryRedirect = 'Temporary Redirect',
  PermanentRedirect = 'Permanent Redirect',
  BadRequest = 'Bad Request',
  Unauthorized = 'Unauthorized',
  PaymentRequired = 'Payment Required',
  Forbidden = 'Forbidden',
  NotFound = 'Not Found',
  MethodNotAllowed = 'Method Not Allowed',
  NotAcceptable = 'Not Acceptable',
  ProxyAuthenticationRequired = 'Proxy Authentication Required',
  RequestTimeout = 'Request Timeout',
  Conflict = 'Conflict',
  Gone = 'Gone',
  LengthRequired = 'Length Required',
  PreconditionFailed = 'Precondition Failed',
  ContentTooLarge = 'Content Too Large',
  URITooLong = 'URI Too Long',
  UnsupportedMediaType = 'Unsupported Media Type',
  RangeNotSatisfiable = 'Range Not Satisfiable',
  ExpectationFailed = 'Expectation Failed',
  ImATeapot = "I'm a teapot",
  InsufficientSpaceOnResource = 'Insufficient Space on Resource',
  /**
   * @deprecated
   */
  MethodFailure = 'Method Failure',
  MisdirectedRequest = 'Misdirected Request',
  UnprocessableContent = 'Unprocessable Content',
  Locked = 'Locked',
  FailedDependency = 'Failed Dependency',
  TooEarly = 'Too Early',
  UpgradeRequired = 'Upgrade Required',
  PreconditionRequired = 'Precondition Required',
  TooManyRequests = 'Too Many Requests',
  RequestHeaderFieldsTooLarge = 'Request Header Fields Too Large',
  UnavailableForLegalReasons = 'Unavailable For Legal Reasons',
  InternalServerError = 'Internal Server Error',
  NotImplemented = 'Not Implemented',
  BadGateway = 'Bad Gateway',
  ServiceUnavailable = 'Service Unavailable',
  GatewayTimeout = 'Gateway Timeout',
  HTTPVersionNotSupported = 'HTTP Version Not Supported',
  VariantAlsoNegotiates = 'Variant Also Negotiates',
  InsufficientStorage = 'Insufficient Storage',
  LoopDetected = 'Loop Detected',
  NotExtended = 'Not Extended',
  NetworkAuthenticationRequired = 'Network Authentication Required'
}

