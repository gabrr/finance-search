import { toast } from "react-toastify";

const ToastBody = ({ title, message }: { title: string; message: string }) => (
  <div>
    <strong className="text-sm">{title}</strong>
    <p className="text-xs">{message}</p>
  </div>
);

export const notify = {
  error(
    title = "Network Error",
    message = "It seems you're not connected to internet"
  ) {
    toast(<ToastBody title={title} message={message} />, { type: "error" });
  },
  info(title = "", message = "Something is not right...") {
    toast(<ToastBody title={title} message={message} />, {
      type: "warning",
    });
  },
};
