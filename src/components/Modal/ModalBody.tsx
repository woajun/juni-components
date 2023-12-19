import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const ModalBody = ({ children }: Props) => (
  <div className="modal-body">{children}</div>
);

export default ModalBody;
