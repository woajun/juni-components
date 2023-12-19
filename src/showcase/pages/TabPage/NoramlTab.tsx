import Tabs, { Tab } from '../../../components/Tabs';

const NormalTab = () => {
  return (
    <Tabs defaultTitle="Dashboard">
      <Tab title="Profile">
        profile contents
      </Tab>
      <Tab title="Dashboard">
        dashboard contents
      </Tab>
      <Tab title="Settings">
        setting contents
      </Tab>
    </Tabs>
  );
};

export default NormalTab;
