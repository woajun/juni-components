import { useState } from "react";
import Modal from "../../../components/Modal";

function NormalModal() {
    const [isShow, setIsShow] = useState(false);
    return (
        <>
            <button onClick={() => setIsShow(true)}>show</button>
            <Modal show={isShow}>
                <Modal.Header>aa</Modal.Header>
                <Modal.Body>bb</Modal.Body>
                <Modal.Footer>
                    <button onClick={() => setIsShow(false)}>
                        취소
                    </button>
                    <button onClick={() => setIsShow(false)}>
                        확인
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default NormalModal;