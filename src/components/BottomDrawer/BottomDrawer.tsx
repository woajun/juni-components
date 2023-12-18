import { ReactNode } from 'react';
import Dim from '../Dim';
import IcoDrawerClose from '@/assets/img/ico-drawer-close.svg';

type Props = {
  show: boolean;
  onCloseClick: () => void;
  children: ReactNode
};

const BottomDrawer = ({ show, onCloseClick, children }: Props) => (
  <>
    <Dim show={show} />
    <div
      className={`fixed bottom-0 left-0 right-0 z-[60] w-full overflow-y-auto transition-transform ${
        show ? 'transform-none' : 'translate-y-full'
      }`}
      tabIndex={-1}
    >
      <button
        type="button"
        className="absolute top-[5px] end-[16px]"
        onClick={onCloseClick}
      >
        <img src={IcoDrawerClose} alt="" />
      </button>
      <div className="drawer-content">
        {children}
      </div>
    </div>
  </>
);

export default BottomDrawer;
