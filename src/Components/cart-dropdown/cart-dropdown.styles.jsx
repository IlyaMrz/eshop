import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button';

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;

export const CartDowndropContainer = styled.div`
    position: absolute;
    width: 240px;
    min-height: 340px;
    max-height: 48vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
    @media screen and (max-width: 400px ) {
        max-height: 70vh;
    }
`;

CartDropdownButton.displayName = 'CartDropdownButton';

export const CartItemsContainer = styled.div`
    width: 90%
    display: flex;
    flex-direction: column;
    overflow: scroll;
    overflow-x: hidden; 
    margin-bottom: 10px;

`;


export const EmptyMessageContainer = styled.span`
font-size: 18px;
margin: 50px auto;
`;

EmptyMessageContainer.displayName = 'EmptyMessageContainer';