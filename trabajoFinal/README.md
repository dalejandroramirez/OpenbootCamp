Crearemos un proyecto de react desde cero: 

**npm init**  < Inicializará las instalaciones deseadas >

<ul>

<li> packege name : < Nombre del proyecto></li>
<li>version : </li>
<li>description : < Descripcion del proyecto ></li>

<li>entry point : < index.jx ></li>
<li>test command : < Es el encargado de generar las pruebas ></li>
<li>keywords : < Palabras reservadas para poder buscar el proyecto ></li>
<li>autor : < debe coincidir con mi usuario de npm o de git ></li>
</ul>

<h2> Instalar algunas dependencias De desarrollo</h2>
  <ul> 
  <li>npm i --save-dev dev @babel/cli</li>
  <li>npm i --save-dev @babel/core</li>
  <li>npm i --save-dev @babel/preset-env</li>
  <li>npm i --save-dev @babel/preset-react</li>  
  <li>npm i --save-dev babel-loader</li>  
  <li>npm i --save-dev css-loader</li>
  <li>npm i --save-dev documentation</li>
  <li>npm i --save-dev eslint</li>
  <li>npm i --save-dev webpack webpack-cli webpack-dev-server</li>
  <li>npm i --save-dev node-sass sass-loader</li>
  <li>npm i --save-dev html-webpack-plugin</li>
  <li>npm i --save-dev mini-css-extract-plugin</li>
  <li>npm i --save-dev file-loader source-map-loader</li>
  <li>npm i --save-dev @babel/plugin-transform-modules-commonjs</li>
  <li>npm i --save-dev @babel/plugin-transform-runtime</li>
  </ul>



<h2> Instalar algunas dependencias De Produccion</h2>
  <ul> 
  <li>npm i --save react react-dom react-router-dom</li>
  <li>npm i --save redux react-redux redux-saga </li>
  <li>npm i --save axios bootstrap </li>
  <li></li>
  <li>npm i --save-dev @babel/preset-react</li>  
  </ul>

<h2> Configuración Babel <h2>

<p>Creamos un archivo **.babelrc**</p>

<p>Creamos un archivo **.editorconfig** <spam>Configura el entorno de edición</spam></p> 

<p>Creamos un archivo **index.html**</p>


<p>Creamos un archivo **webpack.config.js**</p>

<h2>Usar eslint </h2>

<p>sudo npm install -g eslint</p>
<ul>
<li> ./node_modules/.bin/eslint --init</li>
<li>To check syntax, find problems, and enforce code style</li>
<li>JavaScript modules (import/export)</li>
<li>Browser</li>
<li> Airbnb: https://github.com/airbnb/javascript</li>
<li> JSON</li>
</ul>
</p>

<h2> Configuración package.json<h2>
<ul>
<li> Dentro de **Script**:</li>
<li> Dentro de **eslintrc.json**:</li>
</ul>


<h2> Conectar el index.jsx con App.jsx<h2>
<ul>
 <li> **npm run lint** usando lint podemos ver las convenciones generadas para ser universales en el codigo</li>
</ul>


**Crear Netlify**
- npm install --save-dev netlify-cli
- npm install netlify-cli -g 
- npm install -g npm@latest

