# Nombre del Proyecto

API de Practica Git Flow

## Descripción

Este proyecto es una mini API construida con Express para practicar Git Flow en una actividad guiada.

La API tiene un endpoint de estado que permite comprobar que el servidor esta funcionando correctamente.

## Instalación

Requisitos:

- Node.js 20 o superior.
- npm.

Pasos:

~~~bash
git clone https://github.com/TU_USUARIO/NOMBRE_DEL_REPO.git
cd NOMBRE_DEL_REPO
npm install
~~~

## Uso

Levantar el servidor local:

~~~bash
npm start
~~~

Probar el endpoint:

~~~bash
curl http://localhost:3000/api/estado
~~~

Respuesta esperada:

~~~json
{
  "ok": true,
  "mensaje": "API de practica Git Flow funcionando",
  "version": "1.0.0"
}
~~~

Si usas navegador, abre:

~~~text
http://localhost:3000/api/estado
~~~

## Autores

- Paula Camila Acosta Alvarado - Estudiante

## Flujo de trabajo Git

Durante la práctica se usará Git Flow:

- main: rama principal y estable.
- develop: rama de integración.
- feature/readme-base: rama para crear la primera versión del README.
- feature/documentacion-extra: rama para mejorar la documentación.
- release/v1.0.0: rama para preparar la entrega final.
- hotfix/readme-typo: rama para corregir un error menor.

La versión final se marcará con el tag v1.0.0.