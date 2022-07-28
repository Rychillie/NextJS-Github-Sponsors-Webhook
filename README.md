# NextJS + Github Sponsors Webhook

This is a [Next.js](https://nextjs.org/) project created to apply the Github Sponsors Webhooks.

# Using this Repo

First generate a token with the following command on your terminal:

```bash
node -e "console.log(crypto.randomBytes(32).toString('hex'))"
```

Then copy the `.env.example` file to `.env` and replace the `API_ROUTE_SECRET` with the token you generated.

Then install the dependencies with the following command:

```bash
yarn
```

Then run the following command to start the server:

```bash
yarn dev
```
