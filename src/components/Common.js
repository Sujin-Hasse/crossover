import styled from "styled-components";
import logo from "../assets/img/logo.svg";
import logout from "../assets/img/logout icon.svg";

export const CommonInput = () => {
  return (
    <>
      <Input />
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

const Input = styled.input`
  align-items: center;
  background: rgb(245, 245, 245);
  box-sizing: border-box;
  border: none;
  height: 44px;
  margin: 4px 0px 4px 0px;
  padding: 0px 12px 0px 12px;
  border-radius: 6px;
`;

const WrapHeader = styled.div``;
const Logo = styled.img`
  margin: 36px 0px 42px 363px;
`;

const Logout = styled.img`
  margin: 44px 364px 43px 0px;
  float: right;
`;
