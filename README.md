# Facturify React 19

Sistema de mensajería

## Requisitos

- Node.js >= 18.x
- npm o yarn

## Instalación

1. Clonar repositorio:

```bash
git clone https://github.com/charlyrm14/facturify-frontend
cd facturify-frontend
```

2. Instalar dependencias:
```bash
npm install
# o
yarn install
```

3. Archivo de entorno:
```bash
cp .env.example .env
```

4. Levantar servidor
```bash
npm run dev
# o
yarn dev
```

Endpoints

> Este proyecto consume la API backend Facturify Laravel 12.
⚠️ La comunicación con el backend requiere token JWT almacenado en localStorage.

### Herramientas usadas:
Herramientas usadas
- Vite — Bundler y servidor de desarrollo rápido
- React — Librería UI
- TailwindCSS — Framework CSS
- ESLint + TypeScript — Linter y tipado

Retos
Uno de los principales retos a los que me enfrente en este proyecto fue implementar TypeScript junto con React. Ya que mi experiencia previa se ha basado principalmente en Vue 3, y aunque he trabajado con React, nunca lo había hecho con TypeScript. Por ello, el tipado representaron un desafío importante que me permitió aprender del ecosistema de React con TypeScript.

Para superar estas dificultades, utilicé ChatGPT como una herramienta de orientación para entender mejor cómo manejar el tipado y seguir buenas prácticas en el desarrollo con TypeScript y React. Esta herramienta me permitio manejar de una forma más eficaz el desarrollo de este proyecto

### **Notas:**

- Variables sensibles o específicas de entorno deben estar en .env, no en .env.example.
- Este repositorio solo contiene frontend, el backend está en https://github.com/charlyrm14/facturify-backend
- La autenticación y gestión de sesión se hace mediante JWT en localStorage.

### **Autores:**
Carlos I. Ramos Morales
