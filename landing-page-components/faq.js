import styled from "styled-components";

const faqs = [
  {
    title: "How to activate Raaatio Pro",
    description: `First of all, thanks for buying Raaatio Pro. Your 
      license key has been sent to your email. Copy the key → go to raaatio.com/app → Click on the "Activate Pro" button on the header
       → Put the key in the Input field and click Activate. `,
  },
  {
    title: "How long can I use Raaatio Pro?",
    description: `If you bought the license, you can use it for 1 year without any restrictions.`,
  },
  {
    title: "If I buy Raaatio Pro once, do I keep it forever?",
    description: `No, you just get to use it for 1 year. You'll have to renew the license again after it expires`,
  },
  {
    title: "What payment method do you accept?",
    description: `Currently, all payments are processed by Gumroad (gumroad.com). They accept all major credit/debit cards and support Paypal.`,
  },
  {
    title: "How many patterns can I generate?",
    description: `You can generate unlimited noise patterns. More patterns will be added soon.`,
  },
  {
    title: "Can I refund my purchase?",
    description: `Yes, if you're not satisfied with the product, send me an email at jbnj@raaatio.com or reach out via twitter @iamnottheway within 24 hours. You'll get your money back, no questions asked. Responses may vary but I will respond as fast as I can.`,
  },
  {
    title: "I have a question, how do I get in touch?",
    description: `Please reach out to jbnj@raaatio.com or @iamnottheway on twitter for any questions`,
  },
];

const FaqItem = ({ data }) => (
  <Container>
    <Heading size={24}>{data.title}</Heading>
    <Description>{data.description}</Description>
  </Container>
);

const FaqCard = () => {
  return (
    <FaqCardContainer>
      {faqs.map((i, k) => (
        <FaqItem data={i} key={k}></FaqItem>
      ))}
    </FaqCardContainer>
  );
};

export default FaqCard;

const Container = styled.div`
  margin: 0px;
  margin-top: 20px;
  margin-bottom: 50px;
`;

const Heading = styled.h1`
  font-size: ${(props) => (props.size ? `${props.size}px` : "30px")};
  margin: 0px;
  line-height: 130%;
  font-family: Inter;
`;

const Description = styled.p`
  line-height: 30px;
  font-weight: 500;
  color: #595c65;
  font-family: Inter;
`;

const FaqCardContainer = styled.div`
  max-width: 800px;
  width: 100%;
  height: auto;
  padding: 10%;
  background: #fff;
  border-radius: 2px;
  box-sizing: border-box;
  border: 1px solid #000000;
  box-shadow: 10px 10px 0px rgba(30, 29, 96, 0.45);
`;
