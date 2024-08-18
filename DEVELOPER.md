
## Rodando a Aplicação Localmente

### Pré-requisitos

1. **Docker e Docker Compose** devem estar instalados em sua máquina.

   **Instalando Docker e Docker Compose no Windows:**

   1. Baixe o [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop) e siga as instruções para instalação.
   2. Após a instalação, inicie o Docker Desktop e certifique-se de que está em execução.
   3. Execute o comando docker-compose up -d para subir o banco postgress localmente

### Passos para Rodar Localmente

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/neverson-silva/sell.git
   cd sell

2. **Instale as dependências do Node.js:**

Execute:

```bash
    npm install
```
3. **Popule o banco de dados:**

Execute:

        npm run drizzle:seed

4.  **Inicie o servidor de desenvolvimento:**

Execute:

    npm run dev

Aplicação estará disponível em http://localhost:3000.

## Configurações para Produção

Para ambientes de produção, configure as variáveis de ambiente do banco de dados.

```makefile
DB_HOST=localhost
DB_NAME=app
DB_USERNAME=app
DB_PASSWORD=app
```

### Publicando na Vercel
Crie uma conta na Vercel se ainda não tiver.

Instale o Vercel CLI globalmente em sua máquina:
    
    npm install -g vercel

Faça login no Vercel:

Execute:

    vercel login

Publicar o projeto:

Na raiz do projeto, execute:

    vercel

Para publicar o projeto fora da vercel será necessário fazer o build da aplicação

    npm run build 

E inicializar o servidor 
    npm start