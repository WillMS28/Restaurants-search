import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  width: 90px;
  height: 90px;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  padding: 10px;
`;

export const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.fontFamily.regular};
  color: #fff;
  font-size: 16px;
`;
