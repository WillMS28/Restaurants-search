import styled from 'styled-components';

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  cursor: pointer;
  padding: 16px;
  background-color: #fff;
  border-left: 5px solid transparent;
  :hover {
    border-left-color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.background};
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.fontFamily.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  line-height: 29px;
`;

export const Address = styled.span`
  font-family: ${(props) => props.theme.fonts.fontFamily.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const RestaurantPhoto = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 16px;
  object-fit: cover;

  margin-left: 6px;
`;
