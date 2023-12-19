import CardBundle from '../../components/CardBundle/CardBundle';

const CardBundlePage = () => {
  return (
    <div className="flex items-center flex-col gap-10 pt-10">
      <CardBundle
        height={60}
        width={200}
        colors={['red', 'orange', 'green', 'blue']}
        onClick={alert}
      />
      <CardBundle
        height={150}
        width={150}
        colors={['indigo', 'purple']}
        onClick={alert}
      />
    </div>
  );
};

export default CardBundlePage;
