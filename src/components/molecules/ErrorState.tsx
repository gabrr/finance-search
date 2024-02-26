import { IconButton, MdRestartAlt } from "../atoms";
import { Animations } from "./animations";

const ErrorState = ({
  message = "Unknown error happened",
}: {
  message: string;
}) => {
  return (
    <div data-test="error-state" className="w-3/5 mx-auto text-center">
      <Animations.NetworkError className="max-w-32 mx-auto mb-8" />
      <p className="text-gray-400">{message}</p>

      <IconButton
        className="mx-auto mt-4"
        icon={<MdRestartAlt />}
        text="Restart"
        onClick={() => window.location.reload()}
      />
    </div>
  );
};

export default ErrorState;
