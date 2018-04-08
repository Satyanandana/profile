// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBd41wcBI2Tg1pULYGS1Fc0RhXFPkKLLTw',
    authDomain: 'myprofile-50.firebaseapp.com',
    databaseURL: 'https://myprofile-50.firebaseio.com',
    projectId: 'myprofile-50',
    storageBucket: 'myprofile-50.appspot.com',
    messagingSenderId: '725963694309'
  }
};
