import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavigation = styled.nav`
  display: grid;
  width: 100%;
  height: 56px;
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3), 0 6px 6px rgba(0, 0, 0, 0.23);
  button {
    position: relative;
    .icon-wrap {
      position: absolute;
      bottom: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 4px;
    }
  }
  .navi-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    font-size: 10px;
    font-weight: bold;
    color: #9e9e9e;
    &.on {
      color: #029283;
    }
  }
`;

type Props = {
  children?: ReactNode;
};

const BottomNav = ({ children }: Props) => {
  return (
    <>
      {createPortal(
        <StyledNavigation className="navigation grid-cols-3">
          <Link
            to="/"
            className={`navi-icon`}
          >
            <div>컴포넌트</div>
          </Link>
          {children || (
            <Link
              className={`navi-icon`}
              to="/"
            >
              <div>홈</div>
            </Link>
          )}
          <Link
            to="/"
            className={`navi-icon`}
          >
            <div>설정</div>
          </Link>
        </StyledNavigation>,
        document.body,
      )}
    </>
  );
};

export default BottomNav;
