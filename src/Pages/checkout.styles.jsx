import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
    width: 65%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;

    button {
        margin-left: auto;
      }
    @media screen and (max-width: 730px) {
        width: 90%;
        margin: 13px auto 30px;
    }
`;

export const CheackoutHeaderContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
    text-transform: capitalize;
    width: 23%;

    &:last-child {
        width: 8%;
      }
`;

export const TotalContainer = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`;

export const TestWarningContainer = styled.div`
    text-align: center;
    margin-top: 40px;
    margin-bottom: 12px;
    font-size: 24px;
    color:red;
`;