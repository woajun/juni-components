import { useState } from 'react';
import LeftDrawer from '../../../components/Drawer/LeftDrawer';

const LeftDrawerComp = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className="pt-5 text-center">
        <button type="button" onClick={() => setIsShow(true)} className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Show
        </button>
      </div>
      <LeftDrawer show={isShow} onClose={() => setIsShow(false)}>
        aaaa
      </LeftDrawer>
    </>
  );
};

export default LeftDrawerComp;
