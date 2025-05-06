'use client';

import { type CSSProperties, useState } from 'react';
import Image from 'next/image';
import { type Swiper as SwiperObj } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './slideshow.css';

interface Props {
  title: string;
  images: string[];
  className?: string;
}

export const ProductDesktopSlideshow = ({
  title,
  images,
  className,
}: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObj>();

  return (
    <div className={className}>
      <Swiper
        style={
          {
            '--swiper-navigation-color': 'var(--color-secondary)',
            height: '700px',
          } as CSSProperties
        }
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay: 2500,
          pauseOnMouseEnter: true,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className='mySwiper2 rounded-xl'
      >
        {images.map((img, index) => (
          <SwiperSlide key={img}>
            <Image
              src={`/products/${img}`}
              alt={`${title} ${index + 1}`}
              width={1024}
              height={800}
              className='rounded-xl'
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper mt-6'
      >
        {images.map((img, index) => (
          <SwiperSlide key={img}>
            <Image
              src={`/products/${img}`}
              alt={`${title} selector ${index + 1}`}
              width={300}
              height={300}
              className='rounded-xl'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
