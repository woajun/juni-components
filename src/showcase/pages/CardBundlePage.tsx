import CardBundle from "../../components/CardBundle/CardBundle";

function CardBundlePage() {
  return (
    <div className="container">
      <CardBundle
        height={60}
        width={200}
        colors={["red", "orange", "green", "blue"]}
        onClick={alert}
      />
      <CardBundle
        height={150}
        width={150}
        colors={["indigo", "purple"]}
        onClick={alert}
      />
    </div>
  );
}

export default CardBundlePage;
