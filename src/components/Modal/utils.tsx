import { createRoot, Root } from 'react-dom/client';
import Modal from './Modal';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';

type Props = {
  header: string,
  body: string,
  footer?: string,
  onClick?: () => void
};

let root: Root | undefined;
export const programmaticModal = ({ header, body, footer, onClick }: Props) => {
  const domNode = document.getElementById('modal-root');
  root = root ?? createRoot(domNode!);
  root.render(
    <Modal show>
      <ModalHeader>{header}</ModalHeader>
      <ModalBody>{body}</ModalBody>
      <ModalFooter>
        <button
          type="button"
          onClick={() => {
            if (root) {
              root.unmount();
              root = undefined;
            }
            if (onClick) {
              onClick();
            }
          }}
        >
          {footer ?? '확인'}
        </button>
      </ModalFooter>
    </Modal>,
  );
};
