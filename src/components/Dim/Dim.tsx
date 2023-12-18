import { useEffect } from 'react';

type Props = {
  show: boolean;
  onClick?: () => void;
};

const Dim = ({ show, onClick }: Props) => {
  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [show]);

  return (
    show && (
      <div
        className="fixed inset-0 z-10 bg-black bg-opacity-30"
        onClick={onClick}
      />
    )
  );
};

export default Dim;
