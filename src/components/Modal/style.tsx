import styled from 'styled-components';

export const StyledModal = styled.div`
  z-index: 50;
  position: fixed;
  padding: calc(40 / 320 * 100vw);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  inset: 0;
  .modal-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 4px;
    .modal-title {
      width: 100%;
      text-align: center;
      font-size: 22px;
      line-height: 73px;
      height: 73px;
      border-bottom: 1px solid #ccc;
      font-weight: 600;
      &:has(> button) {
        display: flex;
        align-items: center;
        justify-content: center;
        button {
          position: absolute;
          left: 16px;
        }
      }
    }
    .modal-body {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 95px;
      padding: 23px;
    }
    .modal-footer {
      width: 100%;
      button {
        width: 100%;
        background-color: #029283;
        height: 50px;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        border-radius: 0 0 4px 4px;
      }
      &:has(button:nth-child(2)) {
        display: flex;
        align-items: center;
        button {
          &:nth-child(1) {
            background-color: #9e9e9e;
            border-radius: 0 0 0 4px;
          }
          &:nth-child(2) {
            border-radius: 0 0 4px 0;
          }
        }
      }
    }
  }
`;
