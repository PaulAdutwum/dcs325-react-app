import { ReactNode } from "react";
import Button from "./button";

interface Props {
  children: ReactNode;
  onClose: () => void;
}
const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <div />
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="modal"
      ></button>
    </div>
  );
};

export default Alert;
