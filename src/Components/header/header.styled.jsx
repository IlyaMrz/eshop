import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    @media screen and (max-width: 720px) {
        margin-bottom: 1vw;
        padding-right: 3vw;
    }

`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
    @media screen and (max-width: 720px) {
        height: 30%;
        width: 40px;
        padding: 15px;
    }
    @media screen and (max-width: 370px) {
        opacity: 0;
    }
`;

export const OptionsContainer = styled.div`
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      white-space: nowrap;
`

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 7px;
    &:hover {
        box-shadow: 0 0 3pt 1pt black;
    }
`;