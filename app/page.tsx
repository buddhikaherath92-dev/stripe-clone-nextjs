import Heading from "./_components/primitive/heading";
import Paragraph from "./_components/primitive/paragraph";
import Button from "./_components/primitive/button";
import { chevoronRightIcon } from "./_ui/icons";

export default function Home() {
  return (
    <div className="scn-container mx-auto">
      <div className="flex">
        <div className="basis-1/2">
          <Heading headingText="Financial infrastructure to grow your revenue" headingSize={1} headingType="MAIN"></Heading>
          <div className="mt-8">
            <Paragraph paragraphText="Join the millions of companies of all sizes that use Stripe to accept payments online and in person, 
            embed financial services, power custom revenue models, and build a more profitable business."></Paragraph>
          </div>
          <div className="mt-8">
            <Button buttonText="Request an invite" buttonIcon={chevoronRightIcon} buttonType="MAJOR"></Button>
          </div>
        </div>
        <div className="basis-1/2"></div>
      </div>
    </div>
  );
}
