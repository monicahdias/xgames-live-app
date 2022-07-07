import * as S from "./style";
import logo from "assets/imgs/logo.png";
import Button1 from "components/Button1";
import Button2 from "components/Button2";

const LoginBox = () => {
  return (
    <S.LoginBox>
      <S.LoginBoxLogo>
        <S.LoginBoxLogoImg src={logo} alt="logo" />
      </S.LoginBoxLogo>
      <S.LoginBoxForm>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <S.Buttons>
          <Button1 value="LOG IN" type="button" />
          <Button2 value="REGISTER" type="button" />
        </S.Buttons>
      </S.LoginBoxForm>
    </S.LoginBox>
  );
};

export default LoginBox;
