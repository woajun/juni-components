import { ReactNode } from 'react';

export type TabProps = {
  title: string
  children: ReactNode
};

const Tab = ({ title, children }: TabProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  title;
  return children;
};

export default Tab;
