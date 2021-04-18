import styled from 'styled-components';

export const SignInContainer = styled.div`
    width: 40vw;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 750px) {
      width: 90%;
      margin-bottom: 5rem;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;