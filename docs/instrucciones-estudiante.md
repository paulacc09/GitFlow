# Instrucciones para estudiantes

## Qué es Git Flow

Git Flow es una forma de organizar el trabajo con ramas. En esta práctica usarás:

- `main`: rama estable del proyecto.
- `develop`: rama donde se integran los cambios antes de liberar una versión.
- `feature/nombre`: ramas para funcionalidades o mejoras.
- `release/v1.0.0`: rama para preparar una versión estable.
- `hotfix/nombre`: rama para corregir errores urgentes desde `main`.

## Hacer fork

1. Abre el repositorio plantilla en GitHub.
2. Haz clic en **Fork**.
3. Elige tu cuenta personal u organización de clase.
4. Trabaja siempre sobre tu fork, no sobre el repositorio original del docente.

## Clonar el repositorio

```bash
git clone https://github.com/TU_USUARIO/NOMBRE_DEL_REPO.git
cd NOMBRE_DEL_REPO
git status
```

Si Git muestra que estás en `main` y el directorio está limpio, puedes comenzar.

## Levantar la API de práctica

El repositorio incluye una mini API en Express con un endpoint de estado. Instala dependencias y ejecútala localmente:

```bash
npm install
npm start
```

Prueba el endpoint:

```bash
curl http://localhost:3000/api/estado
```

También puedes abrir `http://localhost:3000/api/estado` en el navegador.

## Ejecutar el workflow Iniciar práctica

Cuando creas el repositorio desde el template, GitHub genera un commit inicial en `main`. Ese `push` inicial intenta ejecutar automáticamente el workflow **Iniciar práctica** para crear el primer issue.

Si el primer issue no aparece después de unos minutos, ejecútalo manualmente:

1. En GitHub, entra a tu fork o copia del template.
2. Abre la pestaña **Actions**.
3. Selecciona **Iniciar práctica**.
4. Haz clic en **Run workflow**.
5. Revisa la pestaña **Issues**.

El primer issue aparecerá automáticamente. A medida que avances, el workflow **Validar progreso de misiones** revisará acciones como crear ramas, hacer push, abrir Pull Requests y crear tags.

Cuando una misión se pueda validar automáticamente, el issue recibirá un comentario con:

- qué estás practicando;
- por qué esa acción importa dentro de Git Flow;
- qué puntos ya cumplen;
- qué falta corregir si algo no pasa.

Si todo está correcto, el workflow cerrará el issue y creará la siguiente misión.

No cierres las misiones manualmente desde GitHub. Si un issue de misión se cierra manualmente o desde un Pull Request, el workflow **Proteger cierre de misiones** lo reabrirá y te recordará que el cierre debe hacerlo la validación automática.

## Crear ramas

Crear `develop`:

```bash
git checkout main
git pull origin main
git checkout -b develop
git push -u origin develop
```

Crear una feature desde `develop`:

```bash
git checkout develop
git pull origin develop
git checkout -b feature/readme-base
git push -u origin feature/readme-base
```

Crear una release:

```bash
git checkout develop
git pull origin develop
git checkout -b release/v1.0.0
git push -u origin release/v1.0.0
```

Crear un hotfix:

```bash
git checkout main
git pull origin main
git checkout -b hotfix/readme-typo
git push -u origin hotfix/readme-typo
```

## Hacer commits

```bash
git status
git add README.md
git commit -m "Actualiza estructura del README"
git push
```

Usa mensajes breves, claros y en presente. Evita mezclar cambios sin relación en el mismo commit.

## Guardar cambios temporales con git stash

Usa `git stash` cuando tienes cambios sin terminar y necesitas limpiar el árbol de trabajo para cambiar de rama, actualizar desde remoto o revisar otra tarea sin hacer un commit incompleto.

Guardar cambios temporalmente:

```bash
git status
git stash push -m "avance temporal documentacion extra"
git status
git stash list
```

Para que la misión 6 pueda cerrarse automáticamente, vuelve al issue de esa misión en GitHub y comenta exactamente:

```text
stash realizado
```

Recuperar el último stash:

```bash
git stash pop
git status
```

Después de recuperar los cambios, revísalos, haz commit y publica la rama cuando el avance ya tenga sentido como parte del historial.

## Abrir Pull Requests

1. En GitHub, abre la pestaña **Pull requests**.
2. Haz clic en **New pull request**.
3. Selecciona la rama base correcta:
   - `feature/*` hacia `develop`.
   - `release/*` hacia `main`.
   - `hotfix/*` hacia `main` y luego hacia `develop`.
4. Escribe una descripción clara.
5. Espera que los workflows pasen antes de fusionar.

## Crear tags

Cuando la versión final esté en `main`, crea el tag:

```bash
git checkout main
git pull origin main
git tag v1.0.0
git push origin v1.0.0
```

Verifica el tag en GitHub en la sección **Tags** o **Releases**.

## Validar el README

El README debe tener estas secciones como encabezados reales. Los workflows revisarán la estructura y, en misiones avanzadas, también comentarán si falta contenido mínimo en instalación, uso, autores o flujo Git:

```markdown
# Nombre del Proyecto
## Descripción
## Instalación
## Uso
## Autores
## Flujo de trabajo Git
```

En la misión 8, completa `Instalación`, `Uso` y `Autores` usando la mini API Express incluida en el repositorio.

- En `Instalación`, explica que se necesita Node.js 20 o superior y muestra `npm install`.
- En `Uso`, explica cómo levantar la API con `npm start`.
- En `Uso`, muestra cómo probar `GET /api/estado` con navegador o `curl`.
- En `Uso`, describe la respuesta JSON esperada.
- En `Autores`, identifica integrantes, grupo, curso o roles si aplica.

Puedes validar localmente con:

```bash
npm run validate:readme
```
