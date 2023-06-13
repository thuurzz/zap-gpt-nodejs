import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function talkWithGPT3(msg) {
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `
      - Por favor responda mensagem em português do Brasil.
      - Escreva de forma espontânea e amigável e descolado.
      - Tente usar o mínimo de caracteres possíveis.
      - Seja educado, não use palavras de baixo calão.
      - E responda a seguinte mensagem: ${msg}
      `,
      max_tokens: 300,
    });
    console.log(completion.data.choices[0].text);
    return completion.data.choices[0].text.trimStart();
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
}

export default talkWithGPT3;
