# Teste: Spring Boot + Native Federation

## Estrutura

- `host/` – Spring Boot (Java 17, Maven). Serve a página `index.html` e a API `/api/hello`.
- `mfe1/` – micro frontend em TypeScript (web component `<meu-componente>`), compilado com
  `@softarc/native-federation-esbuild`. O build é gravado em `host/src/main/resources/static/mfe1`.

## Pré-requisitos

- Node.js 20+ e npm
- Java 17+ e Maven (ou abra a pasta `host` no IntelliJ/Eclipse/VS Code)

## Como rodar

```bash
cd mfe1
npm install
npm run build

cd ../host
mvn spring-boot:run
```

Abra http://localhost:8085 — deve aparecer "Micro frontend: Olá do Spring Boot!".

## Fluxo

1. O Spring entrega `index.html`.
2. O orquestrador (`/js/orchestrator-quickstart.js`) lê o manifesto e busca `/mfe1/remoteEntry.json`.
3. Ele carrega o módulo `./component`, que registra `<meu-componente>`.
4. O componente chama `GET /api/hello` e mostra a resposta.
