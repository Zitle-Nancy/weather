## Weather App

Just only practical project

Tools:

- Material UI
- Storybook

Notas de aprendizaje

#### Storybook

El comando que ejecutamos fue:

`npx -p @storybook/cli sb init`

Cuando instalas storybook te va a generar una carpeta llamada `.storybook` y
otra en tu src llamada `stories`, dentro de esta podremos encontrar los componentes que al ejecutar `yarn run storybook` nos apareceran en nuestro navegador.

- Para que nosotros comencemos a crear nuestros componentes para storybook, lo primero es crear nuestros archivos son el sufijo `.stories`, ejemplo: `nombreComponente.stories.jsx`

- Crear un componente y que se vea reflejado en nuestro storybook, debemos retornar un objeto con dos keys, `title` y `component`.

- Instalar la fuente roboto, puede ser desde cdn o con yarn `typeface-roboto`
