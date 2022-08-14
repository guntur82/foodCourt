# foodCourt

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- Node.js
- Express
- Postgres (DBMS)
- Sequelize (ORM)
- EJS (Template Engne)
- Boostrap
- CSS

### End Point

| Method | Route                   | Keterangan                                                                                              |
| ------ | ----------------------- | ------------------------------------------------------------------------------------------------------- |
| GET    | /                       | Menampilkan form untuk memesan meja atas nama user / masuk sebagai staff                                |
| GET    | /bahan                  | Menampilkan semua bahan yang ada dalam database dan dapat melakukan _insertion_                         |
| POST   | /bahan/add              | Menerima data yang dikirim dari halaman `/bahan ` untuk melakukan _insertion_                           |
| GET    | /bahan/read             | Menampilkan semua bahan yang ada dalam database                                                         |
| GET    | /bahan/create           | Menampilkan halaman form untuk menambahkan data bahan                                                   |
| POST   | /bahan/create           | Menerima data yang dikirim dari halaman `/bahan/create ` untuk melakukan _insertion_                    |
| GET    | /bahan/update/:id       | Menampilkan halaman form untuk mengubah data bahan dari `Id`                                            |
| POST   | /bahan/update/:id       | Menerima data yang dikirim dari halaman `/bahan/update/:id` untuk melakukan _update_                    |
| GET    | /bahan/delete/:id       | Melakukan _delete_ data bahan berdasarkan `id` yang dikirimkan                                          |
| GET    | /makanan                | Menampilkan semua makanan yang sudah diterima oleh staff di pesanan                                     |
| GET    | /makanan/read           | Menampilkan semua makanan yang ada dalam database                                                       |
| GET    | /makanan/create         | Menampilkan halaman form untuk menambahkan data makanan                                                 |
| POST   | /makanan/create         | Menerima data yang dikirim dari halaman `/makanan/create ` untuk melakukan _insertion_                  |
| GET    | /makanan/update/:id     | Menampilkan halaman form untuk mengubah data makanan dari `Id`                                          |
| POST   | /makanan/update/:id     | Menerima data yang dikirim dari halaman `/makanan/update/:id` untuk melakukan _update_                  |
| GET    | /makanan/delete/:id     | Melakukan _delete_ data makanan berdasarkan `id` yang dikirimkan                                        |
| GET    | /makanan/info/:id       | Menampilkan halaman makanan yang sudah memiliki bahan yang digunakan atau belum                         |
| POST   | /makanan/info/:id       | Menerima data yang dikirim dari halaman `/makanan/info/:id` untuk melakukan _update_ atau _insertion_   |
| GET    | /makanan/masak          | Mengubah `status_makanan` dalam database lalu mengurangi jumlah bahan sesuai jumlah makanan             |
| POST   | /meja/home              | Menerima data yang dikirim dari halaman `/ ` untuk melakukan _insertion_                                |
| GET    | /meja?id=:id            | Masuk kehalaman user yang dimana user dapat memesan makanna yang tersedia                               |
| GET    | /meja/add               | User menambahkan makanan yang ingin dipesan                                                             |
| GET    | /meja/delete            | User menghapus makanan yang dipesan                                                                     |
| GET    | /meja/exit              | User keluar dari halaman home lalu kembali ke form awal                                                 |
| GET    | /pesanan                | Menampilkan semua makanan yang sudah dipesan oleh user dan menampilkan semua makanan yang sudah dimasak |
| GET    | /pesanan/proses         | Melakukan _insertion_ pesanan dan melakukan _update_ pada pesanan `status_pesanan` : 1                  |
| GET    | /pesanan/proses_pesanan | Melakukan _insertion_ pesanan dan melakukan _update_ pada pesanan `status_pesanan` : 0                  |

```bash
npx sequelize-cli model:generate --name bahan --attributes name:string,stok:integer

npx sequelize-cli model:generate --name makanan --attributes name:string,harga:integer,foto:string

npx sequelize-cli model:generate --name bahan_baku --attributes makananId:integer,bahanId:integer,jumlah:integer

npx sequelize-cli model:generate --name pesanan --attributes mejaId:integer,makananId:integer,jumlah:integer,status_makanan:integer,status_pesanan:integer

npx sequelize-cli model:generate --name meja --attributes name:string,status_meja:integer,status_nota:integer
```
