import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick?: () => void;
};

const ModalFooter = ({ children, onClick }: Props) => (
  <div className="modal-footer" onClick={onClick}>
    {children}
  </div>
);

export default ModalFooter;
