# foodCourt

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- Node.js
- Express
- Postgres (DBMS)
- Sequelize (ORM)
- EJS (Template Engne)

```bash
npx sequelize-cli model:generate --name bahan --attributes name:string,stok:integer

npx sequelize-cli model:generate --name makanan --attributes name:string,harga:integer,foto:string

npx sequelize-cli model:generate --name bahan_baku --attributes makananId:integer,bahanId:integer,jumlah:integer

npx sequelize-cli model:generate --name pesanan --attributes mejaId:integer,makananId:integer,jumlah:integer,status_makanan:integer,status_pesanan:integer

npx sequelize-cli model:generate --name meja --attributes name:string,status_meja:integer,status_nota:integer
```
