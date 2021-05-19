import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 0 auto 20px;

    @media screen and (max-width: 730px) {
        align-items: center;
    }
`
export const PreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 730px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
`;

export const TitleContainer = styled.h1`
    width: 40%;
    font-size: 28px;
    margin: 5px 0 25px;
    cursor: pointer;
    background-color: #f2f2f2;
    border-radius: 10px;
    display: flex;
    align-self: center;
    justify-content: center;
    &:hover {
        box-shadow: 0 0 3pt 1pt black;
    }
`;
TitleContainer.displayName = 'TitleContainer';
