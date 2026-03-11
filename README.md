# Prueba Tecnica Nexos Software

## ABC Platform MVP

Repositorio desarrollado como respuesta al caso practico propuesto para Nexos Software. La solucion representa un MVP fullstack para la migracion de la empresa ficticia ABC desde un modelo monolitico hacia una arquitectura basada en microservicios.

El alcance funcional cubre:

- Gestion de usuarios
- Gestion de pedidos
- Gestion de pagos
- Frontend moderno con autenticacion simulada
- Integracion con API publica
- Contenerizacion completa con Docker y `docker-compose`

## Descripcion general del proyecto

La empresa ficticia ABC esta migrando su plataforma de gestion de pedidos hacia un modelo mas escalable basado en microservicios. Como respuesta a este caso, se construyo una solucion MVP que desacopla los dominios principales del negocio en servicios independientes y los integra con una aplicacion frontend moderna.

La solucion implementa:

- Un frontend en Angular con login simulado, roles, menu dinamico, dashboard y consumo de APIs
- Tres microservicios backend independientes para usuarios, pedidos y pagos
- Integracion con una API publica externa
- Orquestacion completa con Docker Compose
- Una base de datos simulada en MongoDB como soporte para una futura evolucion del sistema

La implementacion prioriza claridad arquitectonica, separacion de responsabilidades y facilidad de despliegue local.

## Formato de entrega

Este repositorio queda preparado para una entrega formal a Nexos Software con los siguientes elementos:

- Descripcion general del proyecto
- Diagrama de arquitectura
- Justificacion de decisiones tecnicas en frontend y backend
- Pasos para ejecutar todo el sistema con Docker
- Capturas del frontend funcionando
- Enlace a la API publica utilizada

## Arquitectura de la solucion

### Microservicios implementados

La solucion se compone de cuatro piezas principales:

1. `usuarios-service`
   Servicio REST para exponer informacion mock de usuarios y endpoints de salud/estado.
2. `pedidos-service`
   Servicio REST para exponer informacion mock de pedidos y endpoints de salud/estado.
3. `pagos-service`
   Servicio REST para exponer informacion mock de pagos y endpoints de salud/estado.
4. `frontend`
   Aplicacion Angular 21 con render SSR en Node y consumo de los microservicios.

Adicionalmente, el entorno local incluye:

5. `mongodb`
   Base de datos simulada en contenedor para representar una futura persistencia desacoplada por servicio.

### Modelo de comunicacion

El modelo de comunicacion actual es REST sincrono sobre HTTP:

- Frontend -> microservicios backend
- Frontend -> API publica JSONPlaceholder
- Docker Compose -> red comun para todos los servicios

No se implementa mensajeria ni gRPC en esta version, ya que el objetivo del MVP es demostrar integracion basica, separacion por dominio y despliegue distribuido.

### Seleccion de base de datos

En esta prueba no hay persistencia real por microservicio. Los datos de negocio son simulados mediante mocks en cada API.

Se incluyo MongoDB como base simulada por las siguientes razones:

- Es adecuada para escenarios de evolucion rapida y desacoplo inicial.
- Facilita un futuro enfoque database-per-service.
- Encaja bien como contenedor auxiliar en un MVP.

En una evolucion posterior, una opcion razonable seria:

- Usuarios: base relacional o documental segun necesidades de identidad
- Pedidos: relacional por consistencia transaccional
- Pagos: relacional con controles adicionales de auditoria

## Diagrama de arquitectura

El repositorio contiene la carpeta `arquitectura/`, destinada a documentacion visual de la arquitectura.

Archivos esperados para la entrega:

- `arquitectura/diagrama-arquitectura.png`
- o `arquitectura/diagrama-arquitectura.drawio`

## Stack tecnologico

### Frontend

- Angular 21.1.x
- TypeScript 5.9.x
- Angular SSR
- RxJS 7.8
- CSS puro
- Node 22 para contenedorizacion

### Backend

- ASP.NET Core Minimal APIs
- .NET 10.0

### Infraestructura local

- Docker
- Docker Compose
- MongoDB 8

## Estructura del repositorio

```text
.
|-- arquitectura/
|-- backend/
|   |-- usuarios/
|   |-- pedidos/
|   `-- pagos/
|-- docs/
|   `-- screenshots/
|-- frontend/
|-- docker-compose.yml
```

## Funcionalidades implementadas

### Frontend

- Login simulado sin backend real
- Validacion de formulario de acceso
- Persistencia de sesion simulada en `localStorage`
- Roles disponibles:
  - `admin`: acceso total
  - `user`: acceso a dashboard, usuarios y pedidos
- Menu lateral dinamico segun rol
- Vista dashboard con estado de microservicios
- Vista de usuarios
- Vista de pedidos
- Vista de pagos
- Vista de datos publicos desde JSONPlaceholder
- Boton para alternar modo claro/oscuro
- Layout responsive basado en CSS puro
- Rutas protegidas mediante guards

### Backend

Cada microservicio expone:

- `GET /`
- `GET /health`
- `GET /status`
- Un endpoint de dominio:
  - Usuarios: `GET /api/users`
  - Pedidos: `GET /api/orders`
  - Pagos: `GET /api/payments`

Los datos son mockeados internamente y no dependen de persistencia real.

## Detalle funcional del frontend

### Login y roles

El acceso se realiza desde una pantalla de login simulado donde se valida:

- correo electronico
- contrasena con longitud minima
- rol seleccionado

El flujo de autenticacion no depende de backend. La sesion se almacena localmente para simplificar el MVP.

### Navegacion y permisos

La navegacion se define por rutas protegidas:

- `/login`
- `/dashboard`
- `/users`
- `/orders`
- `/payments`
- `/public-data`

Restricciones de acceso:

- `admin`: todas las rutas
- `user`: dashboard, usuarios y pedidos

### Dashboard

El dashboard consolida el estado de los tres microservicios consumiendo:

- `usuarios-service/status`
- `pedidos-service/status`
- `pagos-service/status`

### Integracion con API publica

La vista `public-data` consume:

- `https://jsonplaceholder.typicode.com/posts`

La interfaz presenta una seleccion limitada de publicaciones y permite recarga manual.

## Endpoints por servicio

### usuarios-service

- `GET /`
- `GET /health`
- `GET /status`
- `GET /api/users`

### pedidos-service

- `GET /`
- `GET /health`
- `GET /status`
- `GET /api/orders`

### pagos-service

- `GET /`
- `GET /health`
- `GET /status`
- `GET /api/payments`

## Ejemplos de respuestas de los microservicios

### usuarios-service

#### GET /health

```json
{
  "status": "Healthy"
}
```

#### GET /status

```json
{
  "service": "usuarios-service",
  "version": "1.0.0",
  "environment": "Development",
  "timestamp": "2026-03-10T17:00:00Z",
  "port": "8080"
}
```

#### GET /api/users

```json
[
  {
    "id": 1,
    "name": "Admin User",
    "email": "admin@abc.com",
    "role": "admin"
  },
  {
    "id": 2,
    "name": "Regular User",
    "email": "user@abc.com",
    "role": "user"
  }
]
```

### pedidos-service

#### GET /health

```json
{
  "status": "Healthy"
}
```

#### GET /status

```json
{
  "service": "pedidos-service",
  "version": "1.0.0",
  "environment": "Development",
  "timestamp": "2026-03-10T17:00:00Z",
  "port": "8080"
}
```

#### GET /api/orders

```json
[
  {
    "id": 1001,
    "customer": "Juan Perez",
    "total": 125.50,
    "status": "Pending"
  },
  {
    "id": 1002,
    "customer": "Maria Gomez",
    "total": 300.00,
    "status": "Completed"
  }
]
```

### pagos-service

#### GET /health

```json
{
  "status": "Healthy"
}
```

#### GET /status

```json
{
  "service": "pagos-service",
  "version": "1.0.0",
  "environment": "Development",
  "timestamp": "2026-03-10T17:00:00Z",
  "port": "8080"
}
```

#### GET /api/payments

```json
[
  {
    "id": 5001,
    "orderId": 1001,
    "amount": 125.50,
    "status": "Approved"
  },
  {
    "id": 5002,
    "orderId": 1002,
    "amount": 300.00,
    "status": "Pending"
  }
]
```

## Dockerizacion

El proyecto incluye:

- `frontend/Dockerfile`
- `backend/usuarios/Dockerfile`
- `backend/pedidos/Dockerfile`
- `backend/pagos/Dockerfile`
- `docker-compose.yml`

### Servicios levantados por Docker Compose

- `frontend`
- `usuarios-service`
- `pedidos-service`
- `pagos-service`
- `mongodb`

### Puertos expuestos

- Frontend Angular SSR: `http://localhost:4200`
- Usuarios: `http://localhost:8081`
- Pedidos: `http://localhost:8082`
- Pagos: `http://localhost:8083`
- MongoDB: `mongodb://localhost:27017`

## Ejecucion con Docker

### Requisitos previos

- Docker Desktop instalado y en ejecucion
- Puerto `4200` libre para el frontend
- Puertos `8081`, `8082`, `8083` y `27017` libres para backend y MongoDB

### Pasos para levantar todo el sistema

1. Clonar el repositorio.
2. Abrir una terminal en la raiz del proyecto.
3. Ejecutar:

```bash
docker compose up --build
```

4. Esperar a que los servicios finalicen su arranque.
5. Acceder a:
   - Frontend: `http://localhost:4200`
   - Usuarios: `http://localhost:8081`
   - Pedidos: `http://localhost:8082`
   - Pagos: `http://localhost:8083`

### Ejecucion en segundo plano

```bash
docker compose up -d --build
```

### Reconstruccion limpia del frontend

```bash
docker compose down
docker compose build --no-cache frontend
docker compose up -d frontend
```

### Detener el entorno

```bash
docker compose down
```

## Ejecucion local

### Opcion 1: con Docker Compose

Desde la raiz del proyecto:

```bash
docker compose up --build
```

Para ejecucion en segundo plano:

```bash
docker compose up -d --build
```

Para detener los servicios:

```bash
docker compose down
```

### Opcion 2: ejecucion manual

#### Frontend

```bash
cd frontend
npm install
ng serve
```

#### Backend

Cada microservicio puede ejecutarse individualmente desde su carpeta correspondiente:

```bash
cd backend/usuarios
dotnet run
```

```bash
cd backend/pedidos
dotnet run
```

```bash
cd backend/pagos
dotnet run
```

## Consideraciones tecnicas

### Justificacion de decisiones tecnicas

#### Frontend

- Se eligio Angular por alineacion con lo solicitado en la prueba.
- Se implemento SSR para empaquetado y despliegue mas cercanos a un escenario real.
- Se uso CSS puro para el layout y la tematizacion.
- Se implementaron guards para proteger rutas por autenticacion y rol.
- Se uso un layout compartido con header y sidebar para reutilizacion de estructura.
- Se integro una API publica externa para demostrar consumo HTTP adicional al backend propio.

#### Backend

- Se separaron microservicios por dominio funcional.
- Se utilizaron mocks para centrar el ejercicio en arquitectura e integracion, no en logica de negocio compleja.
- Se eligieron Minimal APIs por simplicidad, bajo ruido de configuracion y rapidez para un MVP.
- Se expusieron `/health` y `/status` para facilitar verificaciones operativas y de integracion.

#### Infraestructura

- Se utilizo Docker Compose para permitir un entorno reproducible de extremo a extremo.
- Se incluyo MongoDB como base simulada para representar una futura evolucion a persistencia desacoplada.

### Limitaciones del MVP

- No existe autenticacion real ni JWT.
- No existe persistencia real por microservicio.
- MongoDB esta incluido como base simulada y no como fuente activa de datos.
- No hay mensajeria entre servicios.
- No hay observabilidad avanzada, tracing ni API gateway.
- La carpeta `arquitectura/` esta disponible para completar la evidencia visual del diseno.

## API publica utilizada

La API publica integrada en la solucion es:

- JSONPlaceholder: [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)

Uso dentro del proyecto:

- Vista `public-data`
- Carga de publicaciones de ejemplo
- Recarga manual desde la interfaz

### 1. Diseno de arquitectura

- Microservicios definidos por dominio
- Comunicacion REST establecida
- Base simulada incluida con MongoDB

### 2. Frontend moderno

- Login simulado
- Validacion de campos
- Roles y menu dinamico
- Integracion con API publica
- Modo oscuro/claro
- Responsive
- CSS puro

### 3. Backend basico

- Tres microservicios independientes
- Endpoints `/health` y `/status`
- Dockerfile por servicio
- Datos mock sin persistencia obligatoria

### 4. Dockerizacion

- Dockerfile para frontend
- Dockerfile por microservicio
- `docker-compose.yml` con frontend, APIs y MongoDB

## Mensaje para Nexos Software

Esta solucion fue construida como un MVP tecnico orientado a demostrar criterio de diseno, separacion por dominios, capacidad de integracion fullstack y despliegue reproducible en contenedores.

El proyecto no pretende ser una plataforma terminada, sino una base clara y extensible para evolucionar hacia una arquitectura empresarial mas robusta, manteniendo una implementacion sencilla, verificable y alineada con los requerimientos del caso.
