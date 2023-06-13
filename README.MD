# Meu Projeto de Integração G-Mail e WhatsApp

Este é um projeto que integra o WhatsApp usando as bibliotecas openai, whatsapp-webjs e dotenv. Ele permite receber e processar mensagens usando o GPT-3 da OpenAI e responder automaticamente pelo WhatsApp.

## Funcionalidades:

Utiliza o modelo GPT-3 da OpenAI para gerar respostas automáticas.
Envia as respostas automaticamente pelo WhatsApp.

## Pré-requisitos:

- Node.js (ˆ16LTS)
- Conta na OpenAI com uma chave de API válida.
- Conta no WhatsApp.

## Instalação:

Clone este repositório:
``` 
git clone git@github.com:thuurzz/zap-gpt-nodejs.git
```
Navegue até o diretório do projeto:
``` 
cd zap-gpt-nodejs
```
Instale as dependências do projeto:
``` 
npm install
```
Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente necessárias. Exemplo:
``` 
OPENAI_API_KEY=SuaChaveDeAPI
CELL_NUMBER1=NumeroCelularParaResponder
```
É possível restringir os contatos, como também liberar para que responda a todas as mensagens.

## Uso:

Execute o seguinte comando para iniciar o cliente WhatsApp:
``` 
npm start
```
- Aguarde a exibição do QR Code no terminal.
- Use o aplicativo WhatsApp no seu dispositivo móvel para ler o QR Code e conectar o cliente WhatsApp ao seu número.
- Aguarde até que o cliente esteja pronto e conectado.
- A partir desse momento, o cliente estará pronto para receber, processar e responder automaticamente pelo WhatsApp.

## Configuração Adicional:

Para ajustar as configurações do modelo GPT-3, como o modelo usado e o número máximo de tokens, consulte o arquivo gpt.js.
Para ajustar as configurações do cliente WhatsApp, como os contatos permitidos e as ações a serem tomadas ao receber mensagens, consulte o arquivo whatsapp.js.

## Contribuição:

Contribuições são bem-vindas! Se você tiver alguma melhoria, correção de bugs ou novos recursos para adicionar, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença:

Este projeto está licenciado sob a MIT License.