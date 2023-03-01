# DesafioLatam Back Final Proyect

## Stack

- Made whit JavaScript.
- Vite for development and build.
- Node 19.6.0
- Prisma Orm 4.0
- Postgresql for data
- Express for routing
- JsonWebToken for Node.
- Dotenv for read .env File

## Setup

### Needed Files

#### `.env`

Go to your Base proyect, then create a `.env` file whit the following structure:

```
# Prisma
DATABASE_URL=postgresql://janedoe:mypassword@localhost:5432/mydb

#Jwt access token
ACCESS_TOKEN_SECRET=""

```
When you run a command that needs access to the database defined via the datasource block (for example, prisma db pull), the Prisma CLI automatically loads the DATABASE_URL environment variables from the .env file and makes it available to the CLI.

### Local Setup

