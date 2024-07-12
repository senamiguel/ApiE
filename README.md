# Meu Projeto de API TypeScript

Bem-vindo ao meu projeto em TypeScript! Este README irá guiá-lo através dos passos necessários para configurar e executar o projeto usando `tsnd`.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas no seu sistema:

- [Node.js](https://nodejs.org/en/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/senamiguel/ApiE.git
   ```
   ```ou
   git clone git@github.com:senamiguel/ApiE.git
   cd ApiE
2. Instale as dependências do projeto:
 ```
  npm install
 ```
 ```
  yarn install
```

## Executando o Projeto

Para iniciar o projeto em modo de desenvolvimento usando tsnd, execute o seguinte comando:

`npx tsnd src/index.ts`

Se você preferir adicionar um script no package.json para facilitar a execução, adicione a seguinte linha na seção de scripts:
```
"scripts": {
  "dev": "tsnd src/index.ts"
}
```
Então você pode iniciar o projeto com:
```
npm run dev
```

## Contribuindo
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

1. Faça um fork do projeto.
2. Crie um branch para sua feature (git checkout -b feature/nova-feature).
3. Commit suas mudanças (git commit -am 'Adiciona nova feature').
4. Faça um push para o branch (git push origin feature/nova-feature).
5. Abra um Pull Request.
