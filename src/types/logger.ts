/**
 * Represents the details of an error.
 */
export interface ErrorLogDetails {
  message: string;
  name: string;
  stack: string | undefined;
  context: string;
}

/**
 * Represents the context in which an error occurred.
 */
export enum LoggerContext {
  COPILOT_COMPLETION_FETCH = 'COPILOT_COMPLETION_FETCH_ERROR',
  FETCH_COMPLETION_ITEM = 'FETCH_COMPLETION_ITEM_ERROR',
  REGISTER_COMPLETION = 'REGISTER_COMPLETION_ERROR',
  TRIGGER_COMPLETION = 'TRIGGER_COMPLETION_ERROR',
  UNEXPECTED = 'UNEXPECTED_ERROR',
  DEPRECATED_COPILOT_REGISTRATION = 'DEPRECATED_COPILOT_REGISTRATION_WARNING',
  DEPRECATED_COMPLETION_PROPERTY = 'DEPRECATED_COMPLETION_PROPERTY_WARNING',
  COMPLETION_NOT_REGISTERED = 'COMPLETION_NOT_REGISTERED_WARNING',
}
