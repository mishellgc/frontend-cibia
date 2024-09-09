# Frontend Cibia

Frontend de la aplicación "Cibia" desarrollado en React.

## Descripción

Este proyecto es una aplicación web construida en React que forma parte del sistema Cibia. El frontend se conecta a un backend para proporcionar servicios de interacción con el usuario y gestión de datos.

## Características

- **Interfaz moderna**: Diseño UI sencillo y adaptable.
- **Chat interactivo**: Incluye una interfaz de chat fija en la esquina inferior derecha que se puede expandir, minimizar y cerrar.
- **Conexión con API de OpenAI**: Integración con un backend de Python usando Flask para interactuar con modelos de IA de OpenAI.
- **Envío de imágenes**: Permite adjuntar imágenes desde el frontend.

## Tecnologías utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **Material-UI**: Framework de componentes UI para React.
- **Flask**: Micro-framework de backend en Python para gestionar la API.
- **OpenAI API**: Interacción con modelos de lenguaje para brindar respuestas automáticas en el chat.

## Instalación y configuración

### Clonar el repositorio

Primero, clona este repositorio a tu máquina local:

```bash
git clone https://github.com/tu-usuario/frontend-cibia.git
cd frontend-cibia
```
### Instalar dependencias
Una vez dentro del directorio del proyecto, instala las dependencias necesarias ejecutando:

```bash
npm install
```
### Ejecutar la aplicación en modo de desarrollo
Para iniciar el servidor de desarrollo, ejecuta:

```bash
npm start
```
Esto abrirá la aplicación en tu navegador en la dirección http://localhost:3000.

### Construcción para producción
Si deseas construir el proyecto para producción, puedes ejecutar:

```bash
npm run build
```
Esto creará una versión optimizada del proyecto en la carpeta build.
