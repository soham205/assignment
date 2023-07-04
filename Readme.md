# assignment
Requirments
```
1. Node 18x
2. Docker 20.10.5
3. docker-compose 1.25.0
```

Running migrations
```
npm i -g sequelize-cli
npm i -g pg
sequelize db:migrate  
```

Running as docker container
```
docker-compose up
```

Running locally
```
npm install
npm run watch
```

Creating production build
```
npm run build
```
Serving prodcution build requires
```
1. Copy .sequlizerc .env node_modules package.json config folder to build.
2. run npm run serve
```
# Useful migration commands.

```
sequelize db:migrate                          Run pending migrations
sequelize db:migrate:schema:timestamps:add    Update migration table to have timestamps
sequelize db:migrate:status                   List the status of all migrations
sequelize db:migrate:undo                     Reverts a migration
sequelize db:migrate:undo:all                 Revert all migrations ran
sequelize db:seed                             Run specified seeder
sequelize db:seed:undo                        Deletes data from the database
sequelize db:seed:all                         Run every seeder
sequelize db:seed:undo:all                    Deletes data from the database
sequelize db:create                          Create database specified by configuration
sequelize db:drop                            Drop database specified by configuration
sequelize init                               Initializes project
sequelize init:config                        Initializes configuration
sequelize init:migrations                    Initializes migrations
sequelize init:models                        Initializes models
sequelize init:seeders                       Initializes seeders
sequelize migration:generate                 Generates a new migration file
sequelize migration:create                   Generates a new migration file
sequelize model:generate                     Generates a model and its migration
sequelize model:create                       Generates a model and its migration
sequelize seed:generate                      Generates a new seed file
sequelize seed:create                        Generates a new seed file
```
</details>

# components and API's

```
1. Users :- 
  - {{host}}/api/v1/users/register
  - {{host}}/api/v1/users/login
  - {{host}}/api/v1/users/profile (protected need jwt token)

2. Courses :- 
  - {{host}}/api/v1/courses GET
  - {{host}}/api/v1/courses POST
  - {{host}}/api/v1/courses PUT
  - {{host}}/api/v1/courses DELETE

3. Grads : -
  - {{host}}/api/v1/grades GET
  - {{host}}/api/v1/grades POST
  - {{host}}/api/v1/grades PUT
  - {{host}}/api/v1/grades DELETE
```