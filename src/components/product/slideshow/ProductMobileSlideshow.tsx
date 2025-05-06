'use client';

import { type CSSProperties } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './slideshow.css';

interface Props {
  title: string;
  images: string[];
  className?: string;
}

export const ProductMobileSlideshow = ({ title, images, className }: Props) => {
  return (
    <div className={className}>
      <Swiper
        style={
          {
            '--swiper-pagination-color': 'var(--color-secondary)',
            height: '400px',
            width: '100%',
          } as CSSProperties
        }
        pagination
        modules={[FreeMode, Pagination]}
        className='mySwiper2 overflow-hidden rounded-xl'
      >
        {images.map((img, index) => (
          <SwiperSlide key={img}>
            <Image
              src={`/products/${img}`}
              alt={`${title} ${index + 1}`}
              width={500}
              height={500}
              className='h-full w-full rounded-xl object-fill'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
