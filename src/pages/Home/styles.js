import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};

  width: 460px;
  height: 100vh;

  overflow-y: auto;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;

  background-color: #fff;

  justify-content: center;
  padding: 16px;
`;

export const Logo = styled.img`
  margin: 0 auto 15px;
`;

export const Map = styled.div`
  background-color: #333;
  width: 100vw;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 16px;
  }
`;

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.fontFamily.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;

  margin: 16px 0;
`;
