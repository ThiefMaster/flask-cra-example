# Flask & create-react-app

This is an example on how to use a react frontend in your Flask app.
It uses [`create-react-app`][cra] (CRA) so you don't need to configure much yourself!

Note that CRA is mainly for single-page apps - so if that's not what you want,
then you may want to configure webpack yourself instead.

## Installation

- Create and activate a virtualenv
- `pip install -e .`
- Inside the `client/` directory: `npm install`

## Running

### Dev server

- Use `flask run` as usual to start the dev server.
- Inside the `client/` directory, use `npm start` to run the CRA dev server.

Note: The frontend will proxy all `/api/` requests to the Flask app, which it expects
on `http://127.0.0.1:5000`.

You can use the `FLASK_URL` env var to override this (it's used in `setupProxy.js` - see
the [CRA docs][cra-proxy] for details on the proxy feature).

To access your app, go to `http://localhost:3000` (you can use `PORT` env var if you want
a different port).

### Production build (development)

The CRA server, just like the Flask dev server, is not meant for production. Luckily CRA
provides an option to do a static build for production: `npm run build`

The Flask app is configured to serve those files correctly when accessed directly, so
after building you can go to `http://localhost:5000` and your webapp should work.

Note that in this case autoreloading is not available and you need to run `npm run build`
whenever you changed something in the frontend.

### Production

For a real production deployment, you use `npm run build` as well, but instead of using
the Flask dev server you use a real web server (like nginx+uwsgi).

Also, there's no reason to have your frontend served through Flask - so the web server should
be configured to serve the files from the `client/build` directory, and only forward `/api/`
requests to the Flask app.

## Your own app

If you want to use this in your own app, **do not** just copy the whole `client` folder!

Instead, use `npx create-react-app client` to create it from scratch. All you then need to do
is updating a few things to integrate e.g. with the Flask routing system to build URLs.

Check the commits in this repo to see what changes were done - it's not much, and by running
`create-react-app` yourself you are sure to have the latest version of it!

[cra]: https://facebook.github.io/create-react-app/
[cra-proxy]: https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development
