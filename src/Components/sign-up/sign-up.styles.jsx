import styled from 'styled-components';

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40vw;
    @media screen and (max-width: 750px) {
        width: 90%;
        margin-bottom: 5rem;
    }
`;

export const SignUpTitle = styled.h2`
    margin: 10px 0; 
`;