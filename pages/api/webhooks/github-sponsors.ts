// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const exec = require("child_process").exec;
const crypto = require("crypto");
const http = require("http");

const SECRET_TOKEN = process.env.API_ROUTE_SECRET;
const sig = "x-hub-signature";
const sig256 = "x-hub-signature-256";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const sigH = req.headers[sig];
  const sig256H = req.headers[sig256];

  var hmac,
    cSig,
    cSig256,
    payload = req.body;

  hmac = crypto.createHmac("sha1", SECRET_TOKEN);
  hmac.update(JSON.stringify(payload));
  cSig = "sha1=" + hmac.digest("hex");
  hmac = crypto.createHmac("sha256", SECRET_TOKEN);
  hmac.update(JSON.stringify(payload));
  cSig256 = "sha256=" + hmac.digest("hex");

  if (sigH === cSig && sig256H === cSig256 && req.method === "POST") {
    const body = req.body;
    console.log("body: ", body);

    res.status(200).send("OK");
  } else {
    res.status(500).send("Error");
  }
};

export default handler;
