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
| GET    | /meja?id={id}           | Masuk kehalaman user yang dimana user dapat memesan makanna yang tersedia                               |
| POST   | /meja/add               | User menambahkan makanan yang ingin dipesan                                                             |
| GET    | /meja/delete/:id'       | User menghapus makanan yang dipesan                                                                     |
| GET    | /meja/exit              | User keluar dari halaman home lalu kembali ke form awal                                                 |
| GET    | /pesanan                | Menampilkan semua makanan yang sudah dipesan oleh user dan menampilkan semua makanan yang sudah dimasak |
| GET    | /pesanan/proses         | Melakukan _insertion_ pesanan dan melakukan _update_ pada pesanan `status_pesanan` : 1                  |
| GET    | /pesanan/proses_pesanan | Melakukan _insertion_ pesanan dan melakukan _update_ pada pesanan `status_pesanan` : 0                  |

### Database

```bash
npx sequelize-cli model:generate --name bahan --attributes name:string,stok:integer

npx sequelize-cli model:generate --name makanan --attributes name:string,harga:integer,foto:string

npx sequelize-cli model:generate --name bahan_baku --attributes makananId:integer,bahanId:integer,jumlah:integer

npx sequelize-cli model:generate --name pesanan --attributes mejaId:integer,makananId:integer,jumlah:integer,status_makanan:integer,status_pesanan:integer

npx sequelize-cli model:generate --name meja --attributes name:string,status_meja:integer,status_nota:integer
```

### Documentation

- GET '/'

```sh
//request
localhost:3000/

//response
{
    "message": "Home Page"
}
```

- GET '/meja/'

```sh
//request
localhost:3000/meja

//response
{
    "message": "User Page"
}
```

- POST '/meja/home'

```sh
//request
localhost:3000/meja/home
name : Guntur

//response
{
    "id": 17,
    "name": "Guntur",
    "status_meja": 0,
    "status_nota": 0,
    "updatedAt": "2022-08-14T17:50:32.157Z",
    "createdAt": "2022-08-14T17:50:32.157Z"
}
```

-POST '/meja/add'

```sh
//request
localhost:3000/meja/add
mejaId: 1,
makananId: 1

//response
{
    "mejaId": 1,
    "makananId": 1,
    "jumlah": 1,
    "status_makanan": 0,
    "status_pesanan": 0,
    "updatedAt": "2022-08-14T17:51:14.245Z",
    "createdAt": "2022-08-14T17:51:14.245Z"
}
```

-GET '/meja/delete/:id'

```sh
//request
localhost:3000/meja/delete/1

//response
1
```

-GET '/bahan'

```sh
//request
localhost:3000/bahan

//response
[
    {
        "id": 14,
        "name": "Bebek",
        "stok": 11,
        "createdAt": "2022-08-12T14:56:54.160Z",
        "updatedAt": "2022-08-12T16:36:44.173Z"
    },
    {
        "id": 12,
        "name": "Blueberry",
        "stok": 98,
        "createdAt": "2022-08-12T14:11:27.458Z",
        "updatedAt": "2022-08-14T04:04:34.161Z"
    },
    {
        "id": 6,
        "name": "Daging Sapi",
        "stok": 50,
        "createdAt": "2022-08-12T09:36:02.133Z",
        "updatedAt": "2022-08-12T16:36:55.275Z"
    },
    {
        "id": 2,
        "name": "Garam",
        "stok": 95,
        "createdAt": "2022-08-12T02:27:57.590Z",
        "updatedAt": "2022-08-14T07:53:05.454Z"
    },
    {
        "id": 11,
        "name": "Jeruk",
        "stok": 98,
        "createdAt": "2022-08-12T14:11:21.150Z",
        "updatedAt": "2022-08-14T04:04:34.161Z"
    },
    {
        "id": 7,
        "name": "Kecap Manis",
        "stok": 110,
        "createdAt": "2022-08-12T09:36:31.241Z",
        "updatedAt": "2022-08-14T03:07:47.770Z"
    },
    {
        "id": 3,
        "name": "Mentega",
        "stok": 95,
        "createdAt": "2022-08-12T02:28:02.553Z",
        "updatedAt": "2022-08-14T07:53:05.454Z"
    },
    {
        "id": 9,
        "name": "Nasi",
        "stok": 105,
        "createdAt": "2022-08-12T09:38:26.892Z",
        "updatedAt": "2022-08-14T03:07:52.882Z"
    },
    {
        "id": 1,
        "name": "Roti",
        "stok": 105,
        "createdAt": "2022-08-12T02:27:51.582Z",
        "updatedAt": "2022-08-14T17:15:15.080Z"
    },
    {
        "id": 8,
        "name": "Sauce Barbeque",
        "stok": 107,
        "createdAt": "2022-08-12T09:37:08.697Z",
        "updatedAt": "2022-08-14T03:07:57.378Z"
    },
    {
        "id": 4,
        "name": "Telur",
        "stok": 95,
        "createdAt": "2022-08-12T02:28:07.444Z",
        "updatedAt": "2022-08-14T07:53:05.453Z"
    },
    {
        "id": 5,
        "name": "Tepung Terigu",
        "stok": 98,
        "createdAt": "2022-08-12T02:28:12.722Z",
        "updatedAt": "2022-08-14T04:04:34.160Z"
    },
    {
        "id": 13,
        "name": "Wortel",
        "stok": 100,
        "createdAt": "2022-08-12T14:50:17.708Z",
        "updatedAt": "2022-08-14T03:08:03.933Z"
    }
]
```

-POST '/bahan/create'

```sh
//request
localhost:3000/bahan/create
name : Daging Sapi
stok: 100

//response
{
    "id": 18,
    "name": "Daging Sapi",
    "stok": 0,
    "updatedAt": "2022-08-14T18:04:47.921Z",
    "createdAt": "2022-08-14T18:04:47.921Z"
}
```

-POST '/bahan/update/:id'

```sh
//request
localhost:3000/bahan/update/18
name: Roti

//response
[
    1
]
```

-GET '/bahan/delete/:id'

```sh
//request
localhost:3000/bahan/delete/18

//response
1
```

-POST '/bahan/add'

```sh
//request
localhost:3000/bahan/add
id: 1
stok: 10

//response
[
    1
]
```

-GET '/makanan/read'

```sh
//request
localhost:3000/makanan/read

//response
[
    {
        "id": 1,
        "name": "Roti Bakar",
        "harga": 10000,
        "foto": "1660299559669 - makanan1.jpg",
        "createdAt": "2022-08-12T02:28:37.956Z",
        "updatedAt": "2022-08-12T10:19:19.670Z"
    },
    {
        "id": 2,
        "name": "Pancake",
        "harga": 20000,
        "foto": "1660299565214 - makanan2.jpg",
        "createdAt": "2022-08-12T02:28:46.729Z",
        "updatedAt": "2022-08-12T10:19:25.214Z"
    },
    {
        "id": 3,
        "name": "Steak",
        "harga": 30000,
        "foto": "1660299574474 - makanan3.jpg",
        "createdAt": "2022-08-12T02:28:55.375Z",
        "updatedAt": "2022-08-12T10:19:34.475Z"
    },
    {
        "id": 4,
        "name": "Bebek Bakar",
        "harga": 10000,
        "foto": "1660299872959 - 1.jpg",
        "createdAt": "2022-08-12T10:05:19.497Z",
        "updatedAt": "2022-08-12T10:24:32.962Z"
    }
]
```

-POST '/makanan/create'

```sh
//request
localhost:3000/makanan/read
name: Streakkk
harga: 30000
foto: 1

//response
{
    "id": 14,
    "name": "Steakkkk",
    "harga": 30000,
    "foto": "",
    "updatedAt": "2022-08-14T18:20:53.995Z",
    "createdAt": "2022-08-14T18:20:53.995Z"
}
```

-POST '/makanan/update/:id'

```sh
//request
localhost:3000/makanan/update/14
name: Baso
harga: 5000
foto: 2

//response
[
    1
]
```

-POST '/makanan/delete/:id'

```sh
//request
localhost:3000/makanan/delete/14


//response
1
```
