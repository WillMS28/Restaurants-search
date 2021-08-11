import React from 'react';
import ReactStars from 'react-rating-stars-component';

import restaurantfake from '../../assets/restaurante-fake.png';

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';

const RestaurantCard = () => {
  return (
    <Restaurant>
      <RestaurantInfo>
        <Title>Nome do restaurante</Title>
        <ReactStars count={5} value={4} isHalf size={20} activeColor="#ffd700" />
        <Address>Rua fulano de tal, 564</Address>
      </RestaurantInfo>
      <RestaurantPhoto src={restaurantfake} alt="restaurante" />
    </Restaurant>
  );
};

export default RestaurantCard;
