import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  useBack?: () => void
};

const ModalTitle = ({ children, useBack }: Props) => (
  <div className="modal-title">
    {useBack && (
    <button type="button" onClick={useBack}>
      X
    </button>
    )}
    {children}
  </div>
);

export default ModalTitle;
