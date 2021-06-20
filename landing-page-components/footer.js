import styled from "styled-components";
import { Outer } from "../landing-page-components/common";
import MailChimpForm from "./form/mailchimp-form";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Link from "next/link";

export const Footer = () => {
  let url =
    "https://crossit.us19.list-manage.com/subscribe/post?u=21edd8517b1df818e5f38c6f5&amp;id=0117980746";

  return (
    <FooterWrapper>
      <Outer style={{ position: "relative" }}>
        <Wrapper>
          <List>
            <li>
              <a href="mailto:jbnj@raaatio.com">Contact</a>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <a href="https://twitter.com/iamnottheway" target="_blank">
                @iamnottheway
              </a>
            </li>

            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms and Condition</Link>
            </li>
          </List>
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <MailChimpForm
                status={status}
                message={message}
                onValidated={(formData) => subscribe(formData)}
              />
            )}
          />
        </Wrapper>
        <hr color="#2C2C2C"></hr>
        <Text>Copyright &#169; Joel Benjamin</Text>
        <PropImage src="/static/landing-page/noise-footer.png"></PropImage>
      </Outer>
    </FooterWrapper>
  );
};

const PropImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  transform: rotate(12.69deg);
`;

const List = styled.ul`
  color: #fff;
  list-style: none;
  padding: 0px;
  font-family: Inter;
  font-size: 12px;

  li {
    margin: 10px 0;

    a {
      text-decoration: none;
      color: #fff;
    }
  }
`;

const FooterWrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: #000;
  padding: 30px 0;
  position: relative;
  overflow: hidden;
`;

const Text = styled.div`
  color: #fff;
  font-size: 12px;
  font-family: Inter;
  padding: 20px 0;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  grid-gap: 5px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
