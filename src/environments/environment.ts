// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  title: 'ValuSoft',
  production: false,
  apiUrl: 'http://api.valusoft.io:5002/api/v1',
  debugLog: true,
  errorToasts: true,
  appVersion: 'v1.0.1',
  USERDATA_KEY: 'authf649fc9a5f55',
  SESSION_STORAGE_PREFIX: 'VALU_',
  defaultTenant: 'root',
  baseUrl: 'http://api-valusoft.belsio.online:5002/', // Add this line

}
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
