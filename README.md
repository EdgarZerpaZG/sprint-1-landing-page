# El siguiente proyecto es para la evaluación del Sprint N°1 en la especialización de Frontend React/Angular de la IT Academy.

En este proyecto se ha realizado:

- Landing Page con código vanilla, esta se encuentra en la rama **vanilla**.
- Landing Page con el preprocesador de Sass, esta se encuentra en la rama **sass**.
- Landing Page con Tailwind, esta se encuentra en la rama **tailwind**.

## A continuación se explicará los pasos y métodos utilizados para el desarrollo de cada versión de la Landing Page:

### 1. Rama **vanilla**:
- En esta versión se ha utilizado solo HTML, CSS y JavaScript para crear esta vista. Se utilizaron las etiquetas que ofrece HTML para la creación de la estructura de la landing. Para la organización del contenido se hizo uso de las etiquetas **<section>** para la separación de cada parte del contenido y en su interior la información fue separada con las etiquetas **<div>** para una crear una jerarquía que más adelante será utíl para la implementación de los estilos.
- El CSS fue hecho a medida para controlar toda la visibilidad del contenido. Se usaron las propiedades de display para la forma en que se necesitaba presentar la vista, desde **block** para controlar elementos estáticos, **flex** para organizarar secciones relacionadas en una misma fila y **none** para ciertos elementos que se involucran más con la versión mobile y algunas funcionalidades de JavaScript.
- Se agregaron más estilos generales para el espaciado entre los elementos como **padding** y **margin**.
- Otros estilos generales para controlar el tamaño de los textos, color de los textos, espaciado entre líneas, formas de los botones y otros estilos para la decoración de varios elementos.
- Se han incorporado los media queries para mostrar una visibilidad adaptada para diferentes anchos de pantalla. Se tomaron en cuenta las medidas tanto para mobile(hasta 768px), para tabletas (hasta 991px) y de escritorio (a partir de 992px).
- Por último se agregaron algunas funciones para hacer un despliegue del menú principal en la versión mobile y la funcionalidad de los tabs que se muestran en la Landing Page.

### 2. Rama **sass**:
- En esta versión se ha usado la misma estructura de la rama vanilla pero agregando el preprocesador de CSS conocido como **sass**.
- Se ha hecho uso de esta herramienta para la refactorización de los estilos ofreciendo diferentes métodos para trabajar con el CSS de una forma más ordena y eficiente.
- Se utilizaron diferentes métodos que ofrece Sass para compilar los estilos: **mixins**, **includes**, **variables** y **modules**.
- Para la correcta visualización de estos estilo compilados hace falta tener instalado **sass** en el computador, se puede hacer a través de la terminal con del servicio de paquetes **npm** o con **Ruby** y **RubyGems** ya instalados en el computador.
- Para más información de este preprocesador de CSS se puede visitar la documentación oficial [Sass](https://sass-lang.com)

### 3. Rama **tailwind**:
- En esta última rama se usó el framework de **Tailwind** sobre la misma estructura HTML que se utilizó en las anteriores versiones, solo que en este ocasión sin hacer uso de gran parte de los estilos CSS que se habían creado.
- Se trata de un conjunto de estilos que nos proporciona diferentes forma de crear estructuras completas estilizadas de forma rápida.
- Ofrece diferentes formas de como ordenar y presentar los elementos en el DOM por medio de sus clases, además se pueden integrar librerias adicionales para agregar diferentes funcionalidades; como: tabs y acordeones.
- Para una mejor comprensión de este framework se puede leer la documentación oficial [Tailwind](https://tailwindcss.com/docs/installation/using-vite)

Para finalizar la evaluación de este Sprint, se ha hecho "merge" de la rama "tailwind" a la rama "develop" y seguidamente a la rama "main".
