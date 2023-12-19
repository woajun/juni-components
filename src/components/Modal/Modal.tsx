import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import Dim from '../Dim';
import { StyledModal } from './style';

type Props = {
  show: boolean;
  children: ReactNode;
};

const Modal = ({ show, children }: Props) => show
  && createPortal(
    <>
      <Dim show={show} />
      <StyledModal>
        <div className="modal-content">{children}</div>
      </StyledModal>
    </>,
    document.body,
  );

export default Modal;
