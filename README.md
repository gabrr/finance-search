# Money Lion Project

## Development

Install dependencies and run:

```
yarn && yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the UI in the
browser. The page will reload if you make edits.

### API

* The API server is run on port `3001` while the React UI is run on port `3000`
* Your UI can call `/api/data?search=[some-query]` directly since
the request will be proxied to `http://localhost/api/data?...`
* You will to need access the API on port `3001` if you're testing it directly
  from outside your application (e.g. http://localhost:3001/api/data?search=credit)

## Libraries

**Yarn** - Due to its safety — it does an inspection on the background — and speed.

**Icons from Chakra UI**

**TailwindCSS**

**React-toastify -** Disable internet to see the notification

**[Lottie React](https://www.npmjs.com/package/lottie-react)** - Reads Lottie Files to render body moving animations.

**Zod + React Hook Form** - This combo makes it very straightforward to build forms.

**React Query**

## Tools

**[SVGToReact](https://react-svgr.com/playground/) -** Returns a React Component from an SVG file

**[Bundle Size](https://marketplace.visualstudio.com/items?itemName=ambar.bundle-size)** - VS Code plugin to help checking the bundle size

**Figma** - Requires no presentation…

## Atomic Design

Components follow biology system, in larger projects we will have Templates, Pages, Organisms, Molecules and Atoms.

## Services Folder

In this folder you find Single Responsibility, Open Closed principles and Dependency Injection pattern.

Our API depends of the abstraction to work, and if we ever want use something different than fetch, we can just create a new class implementing our abstraction, making it very easy to add/remove http libraries.

## Tests

Tests were made for each requirement of the challenge using e2e Cypress.
````
