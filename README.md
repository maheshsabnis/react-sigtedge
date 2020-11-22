# Install react CLI using following command

npm install -g create-react-app

-- The package.json file as a configuration file for the Project

Runtime dependencies

react, the react object model

react-dom , the react DOM rendering Object Model

-- Installition of any third party lib
npm install --save <PACKAGE-NAME>

npm install --save bootstrap

ES 6 Modules, exports the objects so that the Containing libraries can import them

-- The Build COnfiguration

react-script build command

-- Contains all static HTML / CSS Transpilation into JS
-- so that it will be easily loaded in Browser and reduce the
-- loading time
  41.21 KB (-4 B)  build/static/js/2.e010b95e.chunk.js
  22.49 KB         build/static/css/2.1a02f21c.chunk.css
  1.4 KB (+1 B)    build/static/js/3.6fb68425.chunk.js
--- The Runtime Object Model provided by WebPack to React Application
-- so that React App will be executed in browser
  1.17 KB (+2 B)   build/static/js/runtime-main.d0d73908.js

--- The Developer JavaScript and CSS code that is used in the project
--- Internally it uses 'webpack' module bundler tool
--- uses the Babel transpiler to transpile (COmpile the ES 6 code into ES 3)  
--- WebPack uses CSS loader and Style Loader to compress CSS files used by developer

598 B (+221 B)   build/static/js/main.ccc51897.chunk.js
  531 B (+253 B)   build/static/css/main.8c8b27cf.chunk.css
=====================================================================================================

React.js Components

They are Basic Building Units of React Apps to generate reusable and composable Views

1. UI

- Static HTML elements
  - Compiled using React.DOM object Model
    - Validate HTML Tag (or element) using JSX compiler
      - JSX, the XML Rule based Compiler for React application to valdiate the HTML
      - JSX have define an HTML Element System with Attributes so that they are dynamically excecuted

2. State or Data

- Conains the Data Definition properties that will be used by HTML UI for Showing data to end-user
    or accepting data from end-user
- The HTML element is bind with the state proeprties using JSX Attributes to show / accept data
  - e.g. value, className, text, selected, etc.  

3.Events

- An Eventing System that will be used to define behavior of HTML elements
- Used to  Modify state of component

React Components Types

1. Class Components

- ES 6 class that is derived from 'Component' base class
- Uses the 'Lifeycycle' methods to define behavior of Components
- Used extensively till React 15.x before release of React 16

2.Functional Componets

- ES 6 functions returning HTML for HTML rendering  
- Introduced in React 16.0 +
- Currently used as a Standard of React App development
- Uses React 'hooks' from 16.8 + for State and the Lifecycle management
- Maintainability
=======================================================================================================
React
1. Components<P,S> class
  - used as base class for Class components
  - P, the 'props' object, used to pass data(aka state) across components
    - data, the property values or function references  
      - Function References means F1() == F2()
    - the 'props' is an immutable object
      - We can keep define properties in it and it will be 'live' at application scope across 
        all parentt-to-child components  
  - S, the 'state' object, the state local to the component and mutable, i.e. the state will be
    destroyed one the component is unloded (un-mounted)
  - State properties Binding with HTML element using the JSX attribute System
     e.g. <input type="text" value={this.state.<PROPERTY-NAME>}>
      - value is JSX attribute , PROPERTY-NAME is state of the component
















