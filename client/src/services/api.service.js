import { Observable } from 'rxjs';

export const ajaxGET = (path) =>
  Observable.ajax('/foo')
    .map(res => res.response);

export const ajaxPOST = (url, body) => {
  console.log('posting')
  const a = Observable;
  return Observable.ajax({
    method: 'GET',
    url,
    body,
  }).map(res => { return res.response});
}
