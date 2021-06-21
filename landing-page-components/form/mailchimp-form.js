import styled from "styled-components";

const MailChimpForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <Wrapper>
      <NewsletterText>Sign up to get updates on raaatio</NewsletterText>
      <div>
        <div>
          <Input
            ref={(node) => (email = node)}
            type="email"
            placeholder="Your email"
          />
          <Button onClick={submit}>Subscribe</Button>
        </div>
        <div>
          {status === "sending" && <Text>sending...</Text>}
          {status === "error" && <Text>You're already subscribed </Text>}
          {status === "success" && <Text>{message}</Text>}
        </div>
      </div>
    </Wrapper>
  );
};

const NewsletterText = styled.h3`
  font-size: 20px;
  color: #fff;
  font-family: Inter;
  margin: 4px 0 !important;
`;

const Wrapper = styled.div`
  padding: 10px;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  z-index: 10;
  margin: 20px 0 !important;

  @media (max-width: 500px) {
    padding: 0px;
  }

  > div {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0px !important;

    @media (max-width: 500px) {
      width: 100%;
      padding: 0px;
    }
  }

  @media (max-width: 600px) {
    justify-content: flex-start;
  }
`;

const Input = styled.input`
  padding: 20px;
  padding-left: 10px;
  margin: 5px !important;
  margin-left: 0px !important;
  border-radius: 4px;
  border: none;

  @media (max-width: 500px) {
    width: 100%;
    margin: 5px 0px !important;
  }
`;

const Button = styled.button`
  padding: 20px 30px;
  border: none;
  border-radius: 4px;

  background-color: #4627ff;
  color: #fff;
  cursor: pointer;
  margin: 5px !important;

  @media (max-width: 500px) {
    width: 100%;

    margin: 5px 0px !important;
  }
`;

const Text = styled.p`
  font-size: 14px;
  color: #fff;
  font-family: Inter;
`;

export default MailChimpForm;
