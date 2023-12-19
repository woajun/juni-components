import styled from 'styled-components';

export const StyledBottomDrawer = styled.div`
.drawer-content {
  margin-top: 50px;
  background-color: #fff;
  width: 100%;
  padding: 23px 16px;
  border-radius: 10px 10px 0 0;
  font-size: 14px;
  color: #737373;
  line-height: 24px;
  p {
    position: relative;
    padding-left: 20px;
    &::before {
      content: '•';
      display: block;
      width: 20px;
      height: 20px;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
`;
