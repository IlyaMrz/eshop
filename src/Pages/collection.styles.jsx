import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto 20px;
`;

export const TitleContainer = styled.h2`
    font-size: 38px;
    margin: 0 auto 20px;
`;

export const ItemsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 0 auto;
    grid-gap: 1rem;
    

    @media screen and (max-width: 730px) {
        font-size: 15px;
        grid-template-columns: 1fr 1fr;
    }
`;