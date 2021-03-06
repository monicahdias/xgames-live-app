import styled, {css} from "styled-components";
import background from "assets/imgs/background-image.png";

export const Home = styled.section`
  ${({theme}) => css`
    background-color: ${theme.colors.baseBg2};
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    min-width: 100vw;
    min-height: 100vh;
    color: ${theme.colors.textColor};
  `}
`;

export const HomeContent = styled.main`
  ${({theme}) => css`
    width: 100%;
    height: 100%;
    ${theme.mixins.overlay()};
  `}
`;

export const HomeHeader = styled.section`
  ${() => css`
    width: 100%;
    display: flex;
    align-self: flex-start;
  `}
`;

export const HomeContentLogo = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    align-self: flex-start;
  `}
`;

export const HomeLogoImage = styled.img`
  ${() => css`
    width: 10rem;
    margin-left: 1rem;
  `}
`;

export const HomeButtons = styled.div`
  ${() => css`
    width: 10rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start
    justify-content: flex-end;
    margin: .5rem 1rem;
    gap: .5rem;
  
  `}
`;

export const HomeGames = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
  `}
`;
