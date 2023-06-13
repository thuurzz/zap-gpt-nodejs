import { Client } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";
import talkWithGPT3 from "./gpt.js";
import dotenv from "dotenv";

dotenv.config();

// criação do cliente do whatsapp
const client = new Client();

// função para gerar o QR Code
client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

// função para quando o cliente estiver pronto
client.on("ready", () => {
  console.log("Client is ready!");
});

// lista com telefones que podem enviar mensagens para o bot, podem ser adicionados mais números.
// para da cada número, adicionar o número seguido de @c.us
// caso deseje que qualquer número possa enviar mensagens, basta remover a linha da validação do número dentro do if
const list_of_contacts = [`${process.env.CELL_NUMBER1}@c.us`];

// função para quando o cliente receber uma mensagem, processar e enviar uma resposta usando o GPT-3
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

// inicialização do cliente
client.initialize();
