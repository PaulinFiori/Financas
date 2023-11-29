// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  server: "/",
  whitelistedDomains: [location.host],
  blacklistedRoutes: [
    ""
   ],
   firebase: {
     apiKey: "AIzaSyAnfmRN4tmcqC1gpcY5DxX1RchKJjK5hEI",
     authDomain: "financas-2a0e5.firebaseapp.com",
     projectId: "financas-2a0e5",
     storageBucket: "financas-2a0e5.appspot.com",
     messagingSenderId: "1033200643555",
     appId: "1:1033200643555:web:f2550f3e329892c932c4d6",
     measurementId: "G-V146SP8PBR"
   }
};

/*
 * In development mode, to ignore zone related error stack frames such asF
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
