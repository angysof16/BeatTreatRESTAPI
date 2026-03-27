# BeatTreat — Backend API

Backend REST API para la aplicación **BeatTreat**, una plataforma de reseñas musicales. Desarrollado con Node.js, Express y Sequelize sobre PostgreSQL.

---

## Tecnologías utilizadas

- **Node.js** — entorno de ejecución
- **Express** — framework web
- **Sequelize** — ORM para base de datos relacional
- **PostgreSQL** — base de datos
- **Postman** — pruebas de endpoints

---

## Estructura del proyecto

```
express/
├── package.json
└── src/
    ├── app.js                        # Configuración de Express y rutas
    ├── index.js                      # Punto de entrada, conexión BD e inicio del servidor
    ├── controller/
    │   ├── users.controller.js       # Lógica de usuarios
    │   ├── albums.controller.js      # Lógica de álbumes
    │   └── reviews.controller.js    # Lógica de reseñas (CRUD completo)
    ├── database/
    │   ├── database.js               # Conexión a PostgreSQL con Sequelize
    │   ├── initUsers.js              # Datos iniciales de usuarios
    │   └── initAlbums.js             # Datos iniciales de álbumes
    ├── models/
    │   ├── User.js                   # Modelo de usuario
    │   ├── Album.js                  # Modelo de álbum
    │   ├── Review.js                 # Modelo de reseña
    │   └── relations.js              # Relaciones entre modelos
    └── routes/
        ├── users.routes.js           # Rutas de usuarios
        ├── albums.routes.js          # Rutas de álbumes
        └── reviews.routes.js        # Rutas de reseñas
```

---

## Entidades y relaciones

El backend maneja **3 entidades** relacionadas entre sí:

- **User** — usuario de la plataforma
- **Album** — álbum musical (artículo a reseñar)
- **Review** — reseña escrita por un usuario sobre un álbum

```
User ──< Review >── Album
```

Un usuario puede escribir muchas reseñas. Un álbum puede tener muchas reseñas. Cada reseña pertenece a exactamente un usuario y un álbum.

---

## Instalación y ejecución

### Requisitos previos

- Node.js instalado
- PostgreSQL instalado y corriendo
- DBeaver (opcional, para visualizar la base de datos)

### Pasos

**1. Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd express
```

**2. Instalar dependencias**
```bash
npm install
```

**3. Configurar la base de datos**

Crear una base de datos en PostgreSQL llamada `beatTreat`. Luego editar las credenciales en `src/database/database.js`:

```js
export const sequelize = new Sequelize("beatTreat", "postgres", "TU_CONTRASEÑA", {
    port: 5432,
    host: "localhost",
    dialect: "postgres",
});
```

**4. Correr el servidor**
```bash
npm run dev
```

Al iniciar, el servidor automáticamente crea las tablas y carga los datos iniciales de usuarios y álbumes.

El servidor queda corriendo en `http://localhost:3000`.

---

## Endpoints disponibles

### Usuarios

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/users/:id` | Buscar un usuario por su id |
| GET | `/users/:userId/reviews` | Traer todas las reseñas de un usuario |

### Álbumes

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/albums` | Traer todos los álbumes |
| GET | `/albums/:id` | Traer el detalle de un álbum por su id |
| GET | `/albums/:albumId/reviews` | Traer todas las reseñas de un álbum |

### Reseñas

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/reviews` | Crear una reseña |
| PUT | `/reviews/:id` | Modificar una reseña por su id |
| DELETE | `/reviews/:id` | Eliminar una reseña por su id |

---

## Ejemplos de uso en Postman

### Buscar usuario por id
```
GET http://localhost:3000/users/1
```

### Traer todos los álbumes
```
GET http://localhost:3000/albums
```

### Traer detalle de un álbum
```
GET http://localhost:3000/albums/2
```

### Crear una reseña
```
POST http://localhost:3000/reviews
Content-Type: application/json

{
    "userId": 1,
    "albumId": 2,
    "rating": 4.5,
    "content": "Un álbum increíble, Bad Bunny superó todas las expectativas."
}
```

### Modificar una reseña
```
PUT http://localhost:3000/reviews/1
Content-Type: application/json

{
    "rating": 5,
    "content": "Definitivamente el mejor álbum del año."
}
```

### Eliminar una reseña
```
DELETE http://localhost:3000/reviews/1
```

---

## Datos iniciales cargados

Al arrancar el servidor se cargan automáticamente los siguientes datos:

**Usuarios (3):** Alex Morrison, María García, Carlos Ruiz

**Álbumes (5):** A Night at the Opera (Queen), Un Verano Sin Ti (Bad Bunny), Midnights (Taylor Swift), Renaissance (Beyoncé), News of the World (Queen)
