// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const exec = require("child_process").exec;
const crypto = require("crypto");
const http = require("http");

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const SECRET_TOKEN = process.env.API_ROUTE_SECRET;

  if (req.query.SECRET_TOKEN !== SECRET_TOKEN || req.method !== "POST") {
    res.status(401).send("You are not authorized to access this API route.");
    return;
  }

  console.log(req.body);
};

export default handler;
