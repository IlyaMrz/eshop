import styled from 'styled-components';

export const SignInUpContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;
    @media screen and (max-width: 750px) {
        flex-direction: column;
        align-items:center;
    }
`;