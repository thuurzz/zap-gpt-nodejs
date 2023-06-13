import { Client } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";
import talkWithGPT3 from "./gpt.js";
import dotenv from "dotenv";

dotenv.config();

const client = new Client();

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", (message) => {
  if (message.from !== "status@broadcast") {
    console.log(message);
  }
});

const list_of_contacts = [`${process.env.CELL_NUMBER1}@c.us`];

client.on("message", async (message) => {
  if (
    message.type === "chat" &&
    message.from !== "status@broadcast" &&
    list_of_contacts.includes(message.from)
  ) {
    console.log(message.body);
    const msgGPT3 = await talkWithGPT3(message.body);
    console.log(msgGPT3);
    message.reply(msgGPT3);
  }
});

client.initialize();
