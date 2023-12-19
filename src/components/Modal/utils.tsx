import { createRoot, Root } from 'react-dom/client';
import Modal from '.';

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
      <Modal.Header>{header}</Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
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
      </Modal.Footer>
    </Modal>,
  );
};
