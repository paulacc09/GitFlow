# Instrucciones para docentes

## Usar este repo como plantilla

1. Sube estos archivos a un repositorio de GitHub.
2. En **Settings > General**, activa **Template repository** si quieres que cada estudiante cree una copia limpia.
3. Mantén GitHub Actions habilitado.
4. Revisa que el repositorio permita issues y Pull Requests.

La práctica no requiere secretos externos. Los workflows usan `GITHUB_TOKEN`, que GitHub genera automáticamente para cada ejecución.

El repositorio incluye una mini API en Express (`src/server.js`) para que el README no sea abstracto: el estudiante debe explicar cómo instalar dependencias, levantar el servidor y probar el endpoint `GET /api/estado`.

## Compartir con estudiantes

Puedes compartir el enlace del repositorio y pedir una de estas opciones:

- **Fork**: recomendado si quieres conservar relación con el repositorio original.
- **Use this template**: recomendado si quieres copias independientes.

Pide a cada estudiante que trabaje en su propio repositorio y que entregue la URL del fork o copia.

## Revisar avance

Revisa principalmente:

- Issues creados y cerrados en orden.
- Ramas `develop`, `feature/readme-base`, `feature/documentacion-extra`, `release/v1.0.0` y `hotfix/readme-typo`.
- Pull Requests desde feature hacia `develop`.
- Pull Request desde release hacia `main`.
- Pull Requests del hotfix hacia `main` y `develop`.
- Tag `v1.0.0`.
- README final con las secciones obligatorias.
- README final explicando `npm install`, `npm start` y `GET /api/estado`.
- Workflows ejecutados y resultados.

## Interpretar los workflows

- **Iniciar práctica**: se ejecuta con `workflow_dispatch` y también con `push` a `main`, para que la copia creada desde template intente crear la primera misión desde el commit inicial. Si el issue ya existe, no lo duplica.
- **Proteger cierre de misiones**: escucha issues cerrados o reabiertos. Si una misión fue cerrada manualmente o desde un Pull Request, la reabre y comenta que el cierre debe hacerlo el workflow de progreso. Si una misión ya completada fue reabierta, la vuelve a cerrar.
- **Validar progreso de misiones**: escucha creación de ramas, pushes, Pull Requests, comentarios en issues y tags. Comenta el issue activo, cierra misiones verificables y crea la siguiente misión en el mismo job. La misión de `git stash` se cierra cuando el estudiante comenta `stash realizado`, porque el stash es local y GitHub no puede leerlo directamente.
- **Validar README**: falla si `README.md` no tiene las secciones obligatorias.
- **Validar Git Flow**: revisa `develop`, registro de prefijos `feature/`, `release/` y `hotfix/`, y reglas básicas de Pull Requests.

El workflow de Git Flow usa modo progresivo en Pull Requests para no bloquear etapas tempranas por ramas que todavía no se han creado. En ejecución manual puede usarse el modo final.

Cuando un workflow cierra un issue con `GITHUB_TOKEN`, GitHub no dispara otro workflow `issues.closed`. Por eso **Validar progreso de misiones** cierra la misión y crea la siguiente dentro del mismo job. El workflow **Proteger cierre de misiones** existe para impedir que un estudiante avance cerrando issues desde la interfaz.

## Modificar la secuencia de issues

La secuencia se define en:

```text
scripts/practice-missions.js
```

Para cambiarla:

1. Edita el arreglo `missions`.
2. Mantén identificadores numéricos consecutivos.
3. Conserva títulos claros y cuerpos con objetivo, pasos y criterio de cierre.
4. Si agregas misiones nuevas, verifica que `getNextMission` pueda encontrarlas por número consecutivo.
5. Ejecuta localmente una revisión de sintaxis:

```bash
node --check scripts/practice-missions.js
node --check scripts/create-initial-issues.js
node --check scripts/create-next-issue.js
```

## Adaptar la práctica a otra clase

Puedes ajustar:

- Nombres de ramas, por ejemplo `feature/api-base` o `feature/tests`.
- Secciones obligatorias del README en `scripts/validate-readme.js`.
- Criterios de Git Flow en `scripts/validate-gitflow.js`.
- Criterios de avance automático y comentarios en `scripts/validate-progress.js`.
- Textos de issues en `scripts/practice-missions.js`.
- Endpoint base de la práctica en `src/server.js`.
- Documentación de entrega en `docs/instrucciones-estudiante.md`.

Si tu curso usa GitHub Classroom, puedes publicar este repositorio como base de una tarea y pedir que cada estudiante active el workflow manualmente al comenzar.

## Recomendacion de evaluación

Una rúbrica simple puede considerar:

- 30% uso correcto de ramas y Pull Requests.
- 20% cierre ordenado de issues.
- 20% README completo y claro.
- 15% tag y release final.
- 15% reflexión sobre el flujo de trabajo.
