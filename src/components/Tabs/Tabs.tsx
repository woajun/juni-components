import { ReactElement, useState } from 'react';

type Props = {
  defaultTitle?: string
  children: ReactElement[]
};

const Tabs = ({ defaultTitle, children }: Props) => {
  const [activeTab, setActiveTab] = useState(defaultTitle ?? children[0].props.title ?? '');

  return (
    <>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex justify-evenly">
          {children.map((child) => (
            <li key={child.props.title}>
              <button
                type="button"
                className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg ${
                  activeTab === child.props.title
                    ? 'text-blue-600 border-blue-600 active dark:text-blue-500 dark:border-blue-500'
                    : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                }`}
                onClick={() => setActiveTab(child.props.title)}
              >
                {child.props.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {children.map((child) => (child.props.title === activeTab ? child.props.children : null))}
    </>
  );
};

export default Tabs;
