import { createPortal } from 'react-dom';
import { redirect } from 'react-router-dom';
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

type NavItemTo = {
  to: string
  label: string
}

type NavItemClick = {
  label: string
  onClick: () => void
}

type NavItem = NavItemTo | NavItemClick

type Props = {
  navItems: NavItem[]
}

const BottomNav = ({ navItems }: Props) => {
  const isNavItemTo = (item: NavItem): item is NavItemTo => {
    return (item as NavItemTo).to !== undefined;
  };
  
  return (
    <>
      {createPortal(
        <StyledNavigation className="navigation grid-cols-3">
          {navItems.map((e) => (
            <div
                key={e.label}
                onClick={() => {
                  if (isNavItemTo(e)) {
                    redirect(e.to);
                  } else {
                    e.onClick();
                  }
                }}
                className="navi-icon"
            >
                <div>{e.label}</div>
            </div>
          ))}
        </StyledNavigation>,
        document.body,
      )}
    </>
  );
};

export default BottomNav;
