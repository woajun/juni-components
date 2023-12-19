import { ReactNode } from 'react';
import Dim from '../Dim';

type Props = {
  show: boolean;
  children: ReactNode;
  onClose: () => void;
};

const LeftDrawer = ({ show, children, onClose }: Props) => {
  return (
    <>
      <Dim show={show} onClick={onClose} />
      <div
        className={`${
          !show && '-translate-x-full'
        } fixed w-80 bg-white bg-opacity-95 transform transition-transform duration-300 ease-in-out z-20 lg:translate-x-0 pointer-events-auto border-r border-slate-300 overflow-hidden h-full`}
      >
        {children}
      </div>
    </>
  );
};

export default LeftDrawer;
