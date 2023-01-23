import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useSearchParams } from 'react-router-dom';

import Text from 'components/Basic/Text';
import Rating from 'components/Basic/Rating';
import { HotelType } from 'pages/Home';

import styles from './styles.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

type ListItemProps = {
  hotel: HotelType;
};

const ListItem: React.FC<ListItemProps> = ({ hotel }) => {
  const [searchParams] = useSearchParams();
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.carousel}>
          <Carousel showThumbs={false} showIndicators={false} autoPlay infiniteLoop>
            {hotel?.images?.map((image, index) => (
              <div key={index}>
                <img src={image.url} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className={styles.headerContent}>
          <div className={styles.name}>
            <Text content={hotel?.name} size="heading" additionalClass={styles.hotelName} />
            <Text content={hotel?.address1} size="pharagraph" />
            <Text content={hotel?.address2} size="pharagraph" />
            <Text content={hotel?.town} size="pharagraph" />
            <Text content={hotel?.country} size="pharagraph" />
          </div>
          <div className={styles.rating}>
            <Rating rating={parseInt(hotel?.starRating)} />
          </div>
        </div>
      </div>
      <div className={styles.body}>
        {hotel?.rooms
          ?.filter(
            room =>
              room?.occupancy.maxAdults >= parseInt(searchParams.get('adults') ?? '0') &&
              room?.occupancy.maxChildren >= parseInt(searchParams.get('children') ?? '0')
          )
          ?.map(room => (
            <div className={styles.room} key={room?.id}>
              <div className={styles.name}>
                <Text content={room?.name} size="pharagraph" additionalClass={styles.roomName} />
                <Text content={`Adults: ${room?.occupancy?.maxAdults}`} size="pharagraph" />
                <Text content={`Children: ${room?.occupancy?.maxChildren}`} size="pharagraph" />
              </div>
              <div className={styles.bodyContent}>
                <Text content={room?.longDescription} size="pharagraph" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListItem;
