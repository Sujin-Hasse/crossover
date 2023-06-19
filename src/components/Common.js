import styled from "styled-components";
import logo from "../assets/img/logo.svg";
import logout from "../assets/img/logout icon.svg";

export const IdInput = () => {
  return (
    <>
      <IdInputbox />
    </>
  );
};

export const PasswordInput = () => {
  return (
    <>
      <PasswordInputbox />
    </>
  );
};

export const Header = () => {
  return (
    <>
      <WrapHeader>
        <Logo src={logo} />
        <Logout src={logout} />
      </WrapHeader>
    </>
  );
};

const IdInputbox = styled.input`
  width: 540px;
  height: 90px;
  border-radius: 25px;
  border: 2px solid #717171;
`;

const PasswordInputbox = styled.input`
  width: 540px;
  height: 90px;
  border-radius: 25px;
  border: 2px solid #717171;
`;

const WrapHeader = styled.div``;

const Logo = styled.img`
  margin: 36px 0px 42px 363px;
`;

const Logout = styled.img`
  margin: 44px 364px 43px 0px;
  float: right;
`;
