/*
 * Internal module that is used by the default client, http client, and
 * the session fetching apparatus. Made as a separate module to avoid
 * circular dependencies and repeated code.
 */
import axios from 'axios';
import qs from 'qs';

export default function clientFactory(options) {
  const client = axios.create({
    xsrfCookieName: 'kolibri_csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
    paramsSerializer: function(params) {
      // Do custom querystring stingifying to comma separate array params
      return qs.stringify(params, { arrayFormat: 'comma' });
    },
    // FIXME: Evilly hard-code a base URL.
    //        Instead, this should be in local state with some sane default.
    //        Note that we will have trouble with CORS because Kolibri doesn't
    //        expect this. I work around this locally by installing
    //        <https://github.com/adamchainz/django-cors-headers> and then
    //        changing Kolibri's default settings to include
    //        `CORS_ALLOW_ALL_ORIGINS = True`.
    baseURL: "http://localhost:8000",
    ...options,
  });
  client.interceptors.response.use(
    response => response,
    function(error) {
      if (!error.response) {
        error.response = {
          status: 0,
        };
      }
      return Promise.reject(error);
    }
  );
  return client;
}
