# Teste Frontend - Mercado Livre

Esse projeto é a implementação solicitada no teste técnico de front-end do Mercado Livre.

Projeto hospedado com Heroku no link https://mercadolivre-test-frontend.herokuapp.com

## Pré-requisitos

- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/)
- [Npm](https://www.npmjs.com/)
- [Yarn](https://yarnpkg.com/pt-BR/)
- [Sass](http://sass-lang.com/install)

## Instalando dependências
```
$ yarn install
```

## Desenvolvendo

Após instalar as dependências para rodar o projeto local execute:

```
$ yarn dev
```

## Server side rendering local

Para testar o server side rendering primeiro é necesário criar o build do front com o seguinte comando:

```
$ yarn build
```

Depois é só iniciar o server local com o comando:
```
$ yarn server:local
```

*Obs.*: Desta forma a cada alteração detro da pasta src/ e necessário criar novamente o build.


## Testando
Para rodar os testes de unidade execute:

```
$ yarn test
```

Para verificar o coverage report execute:

```
$ yarn test:coverage
```

## Preparando para deploy

para gerar o build do front execute:

```
$ yarn build
```

## Rodando o servidor em produção

Crie as variaveis de ambiente a seguir
```
PORT: número da porta para rodar a aplicação
CACHE_TIME: número em segundos para cache da aplicação, valor padrão de 60 segundos
REACT_APP_API_URL: url para acesso da api
```

e execute: 

```
yarn start
```

## Melhorias
- Migrar para React 17
