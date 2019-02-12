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

Crie as duas variaveis de ambiente a seguir
```
PORT: número da porta para rodar a aplicação
PROD: booleano que indica se esta em ambiente de produção
CACHE_TIME: número em segundos para cache da aplicação, valor padrão de 60 segundos
API_URL: url para acesso da api, valor padrão para desenvolvimento é http://localhost:5000
```

e execute: 

```
yarn start
```

## Melhorias
- Server side rendering para SEO
- Maner estado da página ao navegar pelo historico do browser
- Aplicar placeholder enquanto imagens carregam
- Loading e Error state para todos os componentes
