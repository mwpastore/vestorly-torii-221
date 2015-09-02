import ajax from 'ic-ajax';

export default function apiAjax(method, url, args = {}) {
  args.method = method;

  url = '/api' + url;

  /***
   * GET data will be converted into query parameters.
   *
   * For other methods, if we have data but no contentType, assume we're
   * sending stringified JSON. Otherwise, the caller determines how the 
   * data should be encoded and typed.
   ***/
  if (
    args.method !== 'GET' && 
    args.hasOwnProperty('data') && 
    !args.hasOwnProperty('contentType')
  ) {
    args.contentType = 'application/json';
    args.data = JSON.stringify(args.data);
    args.processData = false;
  }

  // Assume the caller expects to get back JSON, unless otherwise specified.
  if (!args.hasOwnProperty('dataType'))
    args.dataType = 'json';

  return ajax(url, args);
}
