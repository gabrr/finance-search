import { MdRestartAlt, IconButton } from "../components/atoms";
import { Animations } from "../components/molecules";

const NotFound = () => {
  return (
    <div className="text-center mt-9">
      <Animations.NotFoundError className="w-4/6 max-w-md mx-auto" />
      <p className="text-gray-400">
        We can't find the page you're looking for...
      </p>

      <IconButton
        text="Go home"
        icon={<MdRestartAlt />}
        className="mx-auto mt-3"
        onClick={() => {
          /**
           * In production we might use React Router Dom or Next JS Page System.
           */
          window.history.replaceState(null, "", "/");
          window.location.reload();
        }}
      />
    </div>
  );
};

export default NotFound;
