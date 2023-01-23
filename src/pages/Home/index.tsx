import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

import ListItem from 'components/UI/ListItem';

import styles from './styles.module.scss';

export type RoomType = {
  id: string;
  name: string;
  longDescription: string;
  shortDescription: string;
  occupancy: {
    maxAdults: number;
    maxChildren: number;
    maxOverall: number;
  };
};

export type HotelType = {
  id: string;
  name: string;
  images: {
    url: string;
  }[];
  address1: string;
  address2: string;
  town: string;
  postcode: string;
  country: string;
  countryCode: string;
  checkInHours: string;
  checkInMinutes: string;
  checkOutHours: string;
  checkOutMinutes: string;
  description: string;
  email: string;
  telephone: string;
  starRating: string;
  rooms: RoomType[];
};

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const [loading, setIsLoading] = useState(false);
  const [hotelData, setHotelData] = useState<HotelType[]>([]);

  const getAllHotelData = async () => {
    try {
      setIsLoading(true);
      const { data: hotels } = await axios.get(
        `${process.env.REACT_APP_API_ENDPOINT_BASE_URL}/hotels?collection-id=OBMNG`
      );
      const data = await Promise.all(
        hotels.map(async (hotel: HotelType) => {
          const {
            data: { rooms: rooms },
          } = await axios.get(`${process.env.REACT_APP_API_ENDPOINT_BASE_URL}/roomRates/OBMNG/${hotel?.id}`);
          return { ...hotel, rooms: rooms };
        })
      );
      setHotelData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllHotelData();
  }, []);

  return (
    <div className={styles.wrapper}>
      {hotelData?.length > 0 &&
        hotelData
          .filter(hotel => hotel.starRating === searchParams.get('star') || searchParams.get('star') === '0')
          .map(hotel => <ListItem hotel={hotel} key={hotel?.id} />)}
    </div>
  );
};

export default HomePage;
