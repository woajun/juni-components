// Tab.js

import { ReactNode } from 'react';

type Props = {
  title: string
  children: ReactNode
};

const Tab = ({ title, children }: Props) => {
  return <div>{children}</div>;
};

export default Tab;
