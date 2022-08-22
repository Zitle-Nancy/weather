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


# Test unitarios y TDD

### Test automáticos

Analogía de test: 
Imaginemos que vamos a construir un avión de madera desde cero y como comenzamos es creando sus alas, para esto primero sacamos sus medidas, pasamos del boceto a crearlas en la madera y vamos midiendo que estas hagan match con las demás partes del avión; Al hacer esto nos permitimos ir probando nuestros avances para irnos asegurando que lo estamos haciendo bien y en el caso que no sea así poder ir corrigiendo en ese momento y no esperar al final, garantizando que nuestro objetivo (el avión) será funcional y cumple con los requisitos que solicitamos.
Lo mismo sucede con los test en nuestro código, nos garantizan de que lo que estamos contruyendo esta bien, nos será útil y funcional.

### Qué tipo de test automáticos existen?

#### Test unitario

Se prueba una unidad (bloque) de código, por ejemplo una función, un objeto, etc. El test unitario es atomico, porque verifica la funionalidad de lo que se ha escrito en un bloque de código.


#### Test de integración

Prueba la integracción de más de un componente.

Tomando como ejemplo nuestra analogía, sería cuando ensamblamos las partes de nuestro avión y verificamos que funcione bien; es decir, integramos (unimos) todas las partes.

#### Test e2e

Prueban que TODO el sistema este funcionando, regresando a nuestra analogía, sería que nuestro avión pueda volar, y hacer todas sus funcionalidades correctamente.

### El estandar para escribir test

Se suele usar las AAA (tres A)

* A (Arrange) ```// Acomdar las cosas para que funcionen los test```

* A (Act) ```// Ejecutamos el test```

* A (Assert) ```// Evaluamos que lo que estamos esperando en nuestros tests pasen, y las posibles respuestas serían failed o passed.```

- > Nota: cuando se va hacer testing de algún componente lo primero que debemos saber es que va hacer, que debe pasar con las entradas que reciba?, cuales deberían de ser sus salidas?, etc.

- > Nota 2: Se le llama SUT (Subject Under Testing) al componente que vamos a testear.