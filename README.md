# Nombre del Proyecto

Git Flow Practice

## Descripción

Repositorio plantilla para una práctica guiada de Git y Git Flow en cursos universitarios de Ingeniería de Software.

La práctica crea issues progresivos para que cada estudiante trabaje ramas, Pull Requests, releases, tags, hotfixes, `git stash` y documentación sobre un proyecto pequeño y ejecutable.

El proyecto base incluye una mini API en Express con un endpoint:

```text
GET /api/estado
```

## Instalación

Necesitas Node.js 20 o superior.

Instala las dependencias:

```bash
npm install
```

Para usarlo como estudiante:

1. Crea un repositorio desde este template o haz fork.
2. Entra a la pestaña **Actions**.
3. Espera que se ejecute **Iniciar práctica** o ejecútalo manualmente si el primer issue no aparece.

Para ejecutar validaciones localmente:

```bash
npm run validate:readme
npm run validate:gitflow
```

## Uso

Levanta la API localmente:

```bash
npm start
```

Abre el endpoint en el navegador o con `curl`:

```bash
curl http://localhost:3000/api/estado
```

La respuesta esperada es un JSON parecido a este:

```json
{
  "ok": true,
  "mensaje": "API de practica Git Flow funcionando",
  "version": "1.0.0"
}
```

El estudiante debe seguir los issues creados automáticamente en GitHub.

Los issues de misión no se cierran manualmente. El workflow **Validar progreso de misiones** los cierra cuando detecta que el criterio se cumplió; si alguien los cierra desde la interfaz de GitHub, **Proteger cierre de misiones** los reabre.

El flujo general es:

1. Crear `develop`.
2. Crear ramas `feature/`.
3. Practicar `git stash`.
4. Completar el README explicando cómo levantar la API.
5. Integrar cambios con Pull Requests.
6. Crear una rama `release/`.
7. Crear el tag `v1.0.0`.
8. Corregir un detalle con una rama `hotfix/`.

## Autores

- Plantilla para estudiantes de Ingeniería de Software.
- Docente responsable: ajustar según el curso.

## Flujo de trabajo Git

La práctica usa una versión guiada de Git Flow:

- `main`: rama estable.
- `develop`: rama de integración.
- `feature/readme-base`: rama para crear el README inicial.
- `feature/documentacion-extra`: rama para mejorar la documentación.
- `release/v1.0.0`: rama de preparación de versión.
- `hotfix/readme-typo`: rama para una corrección menor.

Los workflows de GitHub Actions crean y cierran issues automáticamente a medida que el estudiante avanza.
