import { useState } from 'react';
import Modal from '../../../components/Modal';

const NormalModal = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setIsShow(true)}>show</button>
      <Modal show={isShow}>
        <Modal.Header>aa</Modal.Header>
        <Modal.Body>bb</Modal.Body>
        <Modal.Footer>
          <button type="button" onClick={() => setIsShow(false)}>
            취소
          </button>
          <button type="button" onClick={() => setIsShow(false)}>
            확인
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NormalModal;
