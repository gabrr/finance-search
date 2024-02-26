import { Animations } from "./animations";

const NotFoundState = () => (
  <div data-test="not-found-state" className="w-3/5 mx-auto">
    <Animations.EmptyState />
    <p className="text-center text-sm text-gray-400">
      There are no results matching your query
    </p>
  </div>
);

export default NotFoundState;
