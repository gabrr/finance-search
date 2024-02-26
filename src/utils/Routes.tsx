import { Home, NotFound } from "../pages";

/**
 * This function is meant to allow 404 error.
 * In production we might use React Router Dom or Next JS Page System.
 */
const Routes = () => {
  let Component;

  switch (window.location.pathname) {
    case "/":
      Component = Home;
      break;
    default:
      Component = NotFound;
  }

  return <Component />;
};

export default Routes;
