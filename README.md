# CORs Light Tester

A very bare bones `React` app that simply tries to hit _some_ endpoint.

Simply go to the `src/App.tsx` file and near the top of the file, set these constants with the appropriate values, or modify the request so it doesn't:

```js
const url = ''; // your url
const bearerToken = undefined; // your bearer token, if needed
```

Then just run `yarn start` and it will open a browser and explode or not explode telling you if you have, in fact, fixed your `COR`s issues.

Cheers.

