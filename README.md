API de Gestión de Películas

Descripción

Este proyecto es una API REST que permite gestionar películas (crear, leer, actualizar y eliminar). También incluye registro e inicio de sesión de usuarios con autenticación mediante JWT. Las películas están asociadas a cada usuario autenticado.

Alumnos:

- Orlando Perez
- Ignacio Gonzalez
- Edgardo Rodriguez

Cómo lo realizamos

Instalamos las dependencias

Configuramos el archivo .env con las variables

Iniciamos el servidor

------------------------------------------------------------------------

Rutas

1. Rutas Públicas

POST /auth/register: Registra un nuevo usuario.

Body:

json

{
  "username": "usuario",
  "password": "contraseña"
}

POST /auth/login: Inicia sesión.

Body:

json

{
  "username": "usuario",
  "password": "contraseña"
}

Respuesta:

json

{
  "token": "JWT_TOKEN"
}

2. Rutas Protegidas (Requieren Token JWT)

GET /movies: Obtiene todas las películas del usuario.

GET /movies/:id: Obtiene una película específica por ID.

POST /movies: Crea una nueva película.

Body:

json

{
  "title": "Título",
  "director": "Director",
  "year": 2023
}

PUT /movies/:id: Actualiza una película.

DELETE /movies/:id: Elimina una película.

Nota: Para las rutas protegidas, envía el token en el encabezado:
javascript

Authorization: Bearer <TOKEN>

-----------------------------------------------------------------------------

Pruebas

Usa Postman para probar las rutas:

Registra un usuario (/auth/register).
Inicia sesión (/auth/login) y copia el token recibido.
Usa el token para acceder a las rutas protegidas (/movies).

Casos esperados:

Sin token: Error de acceso denegado.
Token inválido: Error de token inválido.
Token válido: Acceso permitido a las películas.

-----------------------------------------------------------------------------

Tecnologías

Node.js
Express
MongoDB
JWT
bcrypt
