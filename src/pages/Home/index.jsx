import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurants from '../../assets/restaurante-fake.png';
import { Card } from '../../components';

import { Container, Search, Logo, Wrapper, Map, Carousel, CarouselTitle } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do restaurante" />
          <TextField
            label="Pesquisar"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </TextField>

          <CarouselTitle>Na sua Área</CarouselTitle>
          <Carousel {...settings}>
            <Card photo={restaurants} title="Nome do restaurante" />
            <Card photo={restaurants} title="Nome do restaurante" />
            <Card photo={restaurants} title="Nome do restaurante" />
            <Card photo={restaurants} title="Nome do restaurante" />
            <Card photo={restaurants} title="Nome do restaurante" />
            <Card photo={restaurants} title="Nome do restaurante" />
            <Card photo={restaurants} title="Nome do restaurante" />
          </Carousel>
        </Search>
      </Container>

      <Map />
    </Wrapper>
  );
};

export default Home;
