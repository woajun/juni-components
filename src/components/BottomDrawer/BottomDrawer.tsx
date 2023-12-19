import { ReactNode } from 'react';
import Dim from '../Dim';
import { StyledBottomDrawer } from './style';

type Props = {
  show: boolean;
  onCloseClick: () => void;
  children: ReactNode
};

const BottomDrawer = ({ show, onCloseClick, children }: Props) => (
  <>
    <Dim show={show} />
    <StyledBottomDrawer
      className={`fixed bottom-0 left-0 right-0 z-[60] w-full overflow-y-auto transition-transform ${
        show ? 'transform-none' : 'translate-y-full'
      }`}
      tabIndex={-1}
    >
      <button
        type="button"
        className="absolute top-[5px] end-[13px]"
        onClick={onCloseClick}
      >
        <div className="bg-white rounded-full h-7 w-7 flex items-center justify-center">
          X
        </div>
      </button>
      <div className="drawer-content">
        {children}
      </div>
    </StyledBottomDrawer>
  </>
);

export default BottomDrawer;
