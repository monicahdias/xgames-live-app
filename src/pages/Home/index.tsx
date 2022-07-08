import * as S from "./style";
import logo from "assets/imgs/logo.png";
import Button1 from "components/Button1";
import Button2 from "components/Button2";
import Games from "components/Games";
import {useState} from "react";

const Home = () => {
  const [games, setGames] = useState([]);

  return (
    <S.Home>
      <S.HomeContent>
        <S.HomeHeader>
          <S.HomeContentLogo>
            <S.HomeLogoImage src={logo} alt="Logo" />
          </S.HomeContentLogo>
          <S.HomeButtons>
            <Button1 value="LOG IN" type="button" />
            <Button2 value="SIGN UP" type="button" />
          </S.HomeButtons>
        </S.HomeHeader>
        <S.HomeGames>
          <Games />
          <Games />
          <Games />
          <Games />
        </S.HomeGames>
      </S.HomeContent>
    </S.Home>
  );
};

export default Home;
