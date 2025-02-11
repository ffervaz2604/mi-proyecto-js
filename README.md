# AgroGestor

## Tabla de Contenidos

- [Introducción](#introducción)
- [Características](#características)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Licencia](#licencia)

## Introducción

Este proyecto tiene como objetivo la gestión completa de actividades agrícolas.  
Proporciona una solución para la asignación de tareas que requieran una programación para un periodo de tiempo y está diseñado para facilitar el uso de todo tipo de personas.

## Características

- ✅ Interfaz intuitiva y fácil de usar
- ✅ Asignación de actividades
- ✅ Registro de temporales
- ✅ Seguimiento de actividades

## Requisitos

Para ejecutar este proyecto, necesitarás tener instalado:

- **Apache** (Servidor web)
- **PHP 8.1 o superior** (Lenguaje backend)
- **Composer** (Gestor de dependencias para PHP)
- **Laravel 10** (Framework backend)
- **Node.js 18 o superior** (Para Angular)
- **Angular 16 o superior** (Framework frontend)
- **MySQL 8 o superior** (Base de datos)

## Instalación

Sigue estos pasos para instalar el proyecto:

bash
- **Clonar el repositorio**
git clone https://github.com/usuario/repositorio.git

- **Acceder al directorio del backend**
cd repositorio/backend

- **Instalar dependencias de Laravel**
composer install

- **Configurar el archivo de entorno**
cp .env.example .env

- **Generar la clave de aplicación**
php artisan key:generate

- **Configurar la base de datos en el archivo .env y ejecutar migraciones**
php artisan migrate --seed

- **Iniciar el servidor de Laravel**
php artisan serve

- **Acceder al directorio del frontend**
cd ../frontend

- **Instalar dependencias de Angular**
npm install

- **Iniciar la aplicación Angular**
ng serve --open

## Uso

Para ejecutar el proyecto, sigue estos pasos:

1. Asegúrate de que **Apache** y **MySQL** están en ejecución.  

2. Inicia el backend de Laravel:  

   ```bash
   php artisan serve

2. Ejecuta el backend con el siguiente comando:

3. Inicia el frontend de Angular:
ng serve --open

4. Abre el navegador y accede a la aplicación en:
http://localhost:4200.

## Licencia
Este proyecto está bajo la licencia MIT.

Más información en Documentación oficial.