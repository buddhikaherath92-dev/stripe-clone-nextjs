import Heading from "./_components/primitive/heading";

export default function Home() {
  return (
    <div className="scn-container mx-auto">
      <div className="flex">
        <div className="basis-1/2">
          <Heading headingText="Financial infrastructure to grow your revenue" headingSize={1} headingType="MAIN"></Heading>
        </div>
        <div className="basis-1/2"></div>
      </div>
    </div>
  );
}
