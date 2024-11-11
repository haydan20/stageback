
# Desafio Niuco - Haydan Aguiar

Resolução do desafio proposto pela Niuco para nova vaga !

## Funcionalidades

- Coleta dados de usuários da Mock API.
- DE-PARA dos dados coletados conforme regras solicitadas.
- Exibição dos dados dos usuários em formato estruturado.
- Log e tratamento de erros.

## Requisitos


- [Node.js](https://nodejs.org/) (v16 ou superior)

## Configuração do Ambiente

1. Clone este repositório:

   git clone https://github.com/haydan20/niuco.git
   cd repositorio
   
2. Instale as dependências:

npm install

3. Crie um arquivo .env na raiz do projeto e adicione a variável API_URL com a URL da API mock:

API_URL=http://localhost:3000/xpto


4. Execução
npm start


5. Testes
npm test

6. CI/CD
Este repositório inclui um pipeline de CI configurado com GitHub Actions para rodar testes automaticamente em cada push ou pull request. O arquivo de configuração do workflow está localizado em .github/workflows/ci.yml.



