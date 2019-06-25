![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# cstsortan-components

This is a simple library containing small web components for building apps, like an appbar, a drawer and a bottom-modal. These components
are build using [Stencil](https://stenciljs.com)

Stencil is also great for building entire apps (and PWAs). For that, use the [stencil-app-starter](https://github.com/ionic-team/stencil-app-starter).

# Stencil

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all.

## Adding the components to your project

To start using this library, you can simply add a script tag in the head of your index.html:
`<script src="https://unpkg.com/cstsortan-components@0.0.1/dist/cstsortan-components.js"></script>`

## If you're using a bundler like webpack or rollup (like with a javascript framework)

- Run `npm i cstsortan-components --save`
- Then import the loader from your entry file: `import { defineCustomElements as initalizeCstsortanComponents} 'cstsortan/loader';`
- And initialize the the components: `initalizeCstsortanComponents(window);`
- (for angular, you'll have to add the CUSTOM_ELEMENTS_SCHEMAS into the schemas of your module you are adding these components to)
- (In a stencil app you can just do an import like this: `import 'cstsortan/loader';`)
- Then you can use the elements anywhere in your template, JSX, html etc

## Using the elements:
Here's an example that uses all three elements:
```html
<!DOCTYPE html>
<html dir="ltr" lang="en">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0">
    <title>Stencil Component Starter</title>
    <script src="https://unpkg.com/cstsortan-components@0.0.1/dist/cstsortan-components.js"></script>

</head>

<body>
	<style>
		cs-appbar {
			user-select: none;
		}
	</style>
	<cs-appbar>
		<div id="btn-menu" slot="start">
			<button id="btn-menu">Toggle Drawer</button>
    </div>
    <div id="btn-main">App Bar</div>
    <div slot="end"></div>
  </cs-appbar>
  <side-drawer></side-drawer>
  <cs-modal>
    <p>Who's here?</p>
  </cs-modal>

  <script>
    // Open the side-drawer when clicking the button
    document.querySelector('#btn-menu').addEventListener('click', () => document.querySelector('side-drawer').openDrawer());

    // Open the bottom modal when clicking the appbar title
    document.querySelector('#btn-main').addEventListener('click', () => document.querySelector('cs-modal').openModal());
  </script>
</body>

</html>
```
