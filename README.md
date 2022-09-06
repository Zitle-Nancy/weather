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

#### Test unitario (pruebas unitarias)

Se prueba una unidad (bloque) de código, por ejemplo una función, un objeto, etc. El test unitario es atomico, porque verifica la funionalidad de lo que se ha escrito en un bloque de código.

#### Test de integración

Prueba la integracción de más de un componente.

Tomando como ejemplo nuestra analogía, sería cuando ensamblamos las partes de nuestro avión y verificamos que funcione bien; es decir, integramos (unimos) todas las partes.

#### Test e2e

Prueban que TODO el sistema este funcionando, regresando a nuestra analogía, sería que nuestro avión pueda volar, y hacer todas sus funcionalidades correctamente.

### El estandar para escribir test

Se suele usar las AAA (tres A)

- A (Arrange) `// Acomdar las cosas para que funcionen los test`

- A (Act) `// Ejecutamos el test`

- A (Assert) `// Evaluamos que lo que estamos esperando en nuestros tests pasen, y las posibles respuestas serían failed o passed.`

* > Nota: cuando se va hacer testing de algún componente lo primero que debemos saber es que va hacer, que debe pasar con las entradas que reciba?, cuales deberían de ser sus salidas?, etc.

* > Nota 2: Se le llama SUT (Subject Under Testing) al componente que vamos a testear.

## TDD (Test Driven Development) (Desarrollo guiado por pruebas)

Se trata de primero escribir las pruebas unitarias;

Pasos a seguir:

1. En primer lugar se escribe la prueba y se verifica que esta falla;
2. Implementar el código y verificar que vaya pasando, después hacer un refactor de ese código.

El objetivo de TDD es crear un código limpio y funcional.

En resumen

```
La idea es que los requerimientos sean traducido en pruebas unitarias y que estas pasen y se cumplan los requisitos.
```

### ¿Cómo es desarrollar con TDD?

1. Primero tener un requisito, definir lo que tenemos que hacer y esta definicion nos lleva hacer una prueba automatizada;
2. Verificamos que la prueba falla porque aún no hay ningún código que corresponda a ese test;
3. Hacemos la implementación de ese test, escribiendo el código de la manera más simple y sencilla para que pase, usando el principio "KISS" (Keep It Simple, Stupid)("Hazlo simple");
4. Verificar que el código que hemos escrito pase;
5. Refinamiento, eliminamos código replicado y continuamos con los demás requisitos.

## Proveedores de contexto (Context.Provider)

El context.provider es un componente que recibe un prop value que serán los valores a compartir y todos los componentes renderizados dentro del que tiene el provider tendrán accesp a los valores del contexto.

# Diseño responsivo: Grid Layout

En story book existen addons (los defino como plugins), uno de ello es `@storybook/addon-viewport` el cual nos ayudará para ver el diseño de nuestros componentes en diferentes tamaños. Solo debomos instalarlo y agregar esta linea en el main.js de la carpeta storybook.
`"@storybook/addon-viewport/register"`

PropTypes: la propiedad `oneOf()` que recibe nuestro arreglo, nos ayuda a ser más especificos sobre que valores debe recibir, es decir en el ejemplo de weather no derbería de aceptar mi nombre "Nancy" si bien, es un string no es un tipo de weather y con esa propiedad nos aseguramos de obtener un error.

Testing - Nuevas propiedades

- > `jest.fn()`: nos ayuda a crear una función mock
- > `fireEvent`: nos ayudará a ejecutar un evento/acción
- > `toHaveBeenCalledTimes`: un método donde podremos pasarle por args cuantas veces una función deberá ser ejecutada.
- > `FindText`: permite encontrar un componente por el texto que le indiquemos

# Currying

Prceso de descomponer una funcion que recibe más de un parametro en una serie de funciones que utilizan un unico parametro, tecnica utilizada en programación funcional, esto se usa en connect de redux.

Beneficios:

- Mejor estructura de código
- Potente con Map
- Más reutilización de funciones
- Permite componet funciones

# Closure

Funciones internas a otras funciones.
.....

## PropTypes.shape

Esta propiedad nos ayuda a definir una estructura (figura) a nuestro valor, ejemplo, tenemos un array que debe contener los siguientes valores `weekDay, hour, state, temperature`, hacemos lo siguiente:

```js
nameComponent:PropTypes.arrayOf(PropTypes.shape({
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
  ....
}))
```

Con lo anterior nos aseguramos que el array tenga los valores que necesitaremos, esto es mejor que solo poner:
`nameComponent: PropTypes.array.isRequired`

## FindAllByTestId (Testing)

Esta propiedad la vamos a ocupar cuando necesitamos validar varios elementos(un array) y nos es complicado identificar cada uno por texto u otra caracteristica.
El modo de uso es:

1. Agregar esta propiedad en nuestro componente usando `data-testid="name_id"`
   `<Grid data-testid="name_component">...</Grid>`
   > Note: en el ejemplo anterior, se agrega ese `data-test` en los items de un array.

y en nuestro test hacemos lo siguiente:

1. usamos `findAllByTestId` para encontrar todos los items que contengan el id de `data-testid="name_id"`
2. usamos `findAllByTestId("name_id")` donde se almacena en una constante y con ella hacemos lo que necesitemos;
3. en nuestro caso validamos la longitud que esperamos que renderice(en este caso 6), ejemplo:
   `expect(forecastItems).toHaveLength(6)`

# Recharts

[Documentation](https://github.com/recharts/recharts)
Estas son algunas etiquetas y props que utilzamos para este curso.

- `<LineChart/>` : Lo defino como nuestro canvas, donde vamos a pintar nuestra gráfica.
- `<Line />` : Recibe varias props, en ellas:
  - `Type`: monotone fue la que usamos en este ejemplo,
  - `dataKey`: donde indicaremos a que valor de nuestra data hará referencia, es decir, nuestra data es un array de objetos que contiene valores como el min, max y dayHour.
  - `stroke` : para el color.

##### Otras etiquetas
- `<XAxis/>, <YAxis/>` : pintar los ejes en nuestra grafica.
- `<CartesianGrid/>` : Crea una grid en nuestra grafica
- `<Tooltip/>`: Genera un tooltip que nos muestra más contenido al pasar el mouse en nuestras graficas.
- `<Legend/>`: Nos indica que significa cada color.
