import styled, {css} from "styled-components";

export const Games = styled.section`
  ${({theme}) => css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
    margin: 10px;
  `}
`;
