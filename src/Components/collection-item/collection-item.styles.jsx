import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button';

export const CustomButtonContainer = styled(CustomButton)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
    @media screen and (max-width: 730px) {
      min-width: 10px;
      width: auto;
      height: auto;
      letter-spacing: 0.5px;
      line-height: 30px;
      padding: 0 0.8rem 0 0.8rem;
      font-size: 0.8rem;
    }
`

export const ItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    margin-bottom: 15px;
    
    &:hover {
      .image {
        opacity: 0.8;
      }
      button {
        opacity: 0.85;
        display: flex;
        z-index:2;
      }
      div:first-child {
          box-shadow: 0 0 3pt 1pt black;
          z-index:1;
      }
    }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
      width: 100%;
      height: 5%;
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      padding: 0 15px;
      @media screen and (max-width: 550px) {
        font-size: 13px;
      }
`;

export const NameContainer = styled.span`
    width: 90%;
`;

export const PriceContainer = styled.span`
    width: 10%;
`;