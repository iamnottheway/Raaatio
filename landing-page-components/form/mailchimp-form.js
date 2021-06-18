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
          {status === "error" && <Text>Opps something went wrong</Text>}
          {status === "success" && <Text>{message}</Text>}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px;
  padding-left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;

  > div {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  @media (max-width: 600px) {
    justify-content: flex-start;
  }
`;

const Input = styled.input`
  padding: 20px 30px;
  padding-left: 10px;
  margin: 5px !important;

  @media (max-width: 500px) {
    width: 100%;
    margin: 5px 0px !important;
  }
`;

const Button = styled.button`
  padding: 20px 30px;
  border: none;
  border-radius: 0px;
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
