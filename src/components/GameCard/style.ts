import styled, {css} from "styled-components";

export const GameCard = styled.section``;

export const GameCardContent = styled.section`
  ${({theme}) => css`
    width: 257px;
    height: 281px;
    ${theme.mixins.gameCard()};
    display: flex;
    justify-content: center;
    align-items: flex-start;
    border-radius: 4px;
  `}
`;

export const GameCardImage = styled.img`
  ${() => css`
    width: 230px;
    margin-top: 10px;
    border-radius: 4px;
  `}
`;

export const GameCardRating = styled.section`

`;
