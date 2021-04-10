import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`
export const PreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;
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
