// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const exec = require("child_process").exec;
const crypto = require("crypto");
const http = require("http");

const SECRET_TOKEN = process.env.API_ROUTE_SECRET;
const sigHub = "X-Hub-Signature";
const sigHub256 = "X-Hub-Signature-256";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const sig = req.headers[sigHub];
  const sig256 = req.headers[sigHub256];
  if (!sig && !sig256) {
    res.status(401).send("No signature");
    return;
  }
  const secret = SECRET_TOKEN || "";
  const hash = crypto.createHmac("sha1", secret).update(req.body).digest("hex");
  if (sig && sig !== `sha1=${hash}`) {
    res.status(401).send("Invalid signature");
    return;
  }
  if (sig256 && sig256 !== `sha256=${hash}`) {
    res.status(401).send("Invalid signature");
    return;
  }

  // print payload
  console.log(req.body);

  res.end();
};

export default handler;
