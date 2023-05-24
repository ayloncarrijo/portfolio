import type { ContactFieldValues } from "@/containers/contact";
import { globalData } from "@/global-data";
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<NextApiResponse> {
  const user = globalData.email;

  const pass = process.env.EMAIL_PASS;

  if (pass == null) {
    return res.status(500).end();
  }

  const { name, email, subject, message } = req.body as ContactFieldValues;

  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user,
      pass,
    },
  });

  await transporter.sendMail({
    from: `${name} <${user}>`,
    to: user,
    replyTo: email,
    subject,
    text: message,
  });

  return res.status(200).end();
}
