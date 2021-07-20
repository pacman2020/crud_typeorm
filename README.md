# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command

4. `typeorm entity:create -n Name`
5. `npm run typeorm migration:generate -- -n migrationNameHere`
6. `npm run typeorm migration:run`