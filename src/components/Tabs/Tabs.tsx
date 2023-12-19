import { ReactElement, useState } from 'react';
import { StyledTabs } from './style';

type Props = {
  defaultTitle?: string
  children: ReactElement[]
};

const Tabs = ({ defaultTitle, children }: Props) => {
  const [activeTab, setActiveTab] = useState(defaultTitle ?? children[0].props.title ?? '');

  return (
    <>
      <StyledTabs>
        <ul className="tab-list">
          {children.map((child) => (
            <li key={child.props.title}>
              <button
                type="button"
                className={`tab-button ${
                  activeTab === child.props.title
                    ? 'active'
                    : ''
                }`}
                onClick={() => setActiveTab(child.props.title)}
              >
                {child.props.title}
              </button>
            </li>
          ))}
        </ul>
      </StyledTabs>
      {children.map((child) => (child.props.title === activeTab ? child.props.children : null))}
    </>
  );
};

export default Tabs;
