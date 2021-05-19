import styled from 'styled-components';
import { ReactComponent as ShoppingIcon} from  '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 7px;
    &:hover {
        box-shadow: 0 0 3pt 1pt black;
    }
`;

CartIconContainer.displayName = 'CartIconContainer';

export const ItemCountContainer = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
`;

ItemCountContainer.displayName = 'ItemCountContainer';


export const ShoppingIconContainer = styled(ShoppingIcon)`
    width: 31px;
    height: 31px;
`;

