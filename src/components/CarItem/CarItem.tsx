'use client';
import Image from 'next/image';
import Button from '../Button/Button';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CarData } from '../../../types';

export default function CarItem({ name, price, car }: { name: string; price: number; car: any }) {
  const router = useRouter();
  const [isView, setIsView] = useState<boolean>(false);
  const onEnter = () => {
    setIsView(true);
  };
  const onLeave = () => {
    setIsView(false);
  };

  const onView = () => {
    let searchParams = `${name}?`;
    for (const key in car) {
      searchParams = searchParams.concat(`${key}=${car[key]}&&`);
    }
    searchParams = searchParams.slice(0, searchParams.length - 2);
    router.push(`/infor/${searchParams}`, { scroll: false });
  };
  return (
    <div
      className="relative p-6 bg-[#f5f8ff] rounded-3xl hover:bg-white hover:shadow-lg dark:bg-transparent dark:border dark:border-solid dark:border-blue-400 dark:text-white"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <h2 className="font-bold capitalize text-2xl">{name}</h2>
      <div className="relative flex mt-4">
        <span className=" text-lg top-0">$</span>
        <span className="inline-block top-1 left-2 text-3xl font-bold transform mt-1">{price}</span>
        <span className=" top-6 left-11 text-sm mt-6">/day</span>
      </div>
      <div className="relative w-full h-40">
        <Image
          src={'/img/caritem.png'}
          alt="caritem"
          loading="lazy"
          objectFit="contain"
          fill
          className="top-0 left-0 right-0 bottom-0"
        ></Image>
      </div>
      {!isView && (
        <div className="flex flex-wrap justify-between h-12 mt-3">
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image
              src={'/svg/steeringWheel.svg'}
              alt="steeringWheel"
              width={20}
              height={20}
              objectFit="contain"
            ></Image>
            <span className="text-slate-400 leading-[17px]">Automatic</span>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image
              src={'/svg/tire.svg'}
              alt="tire"
              width={20}
              height={20}
              objectFit="contain"
            ></Image>
            <span className="text-slate-400 leading-[17px]">FWD</span>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image
              src={'/svg/gas.svg'}
              alt="gas"
              width={20}
              height={20}
              objectFit="contain"
            ></Image>
            <span className="text-slate-400 leading-[17px]">{car.city_mpg}</span>
          </div>
        </div>
      )}
      {isView && (
        <Button
          className={
            'relative w-full mt-3 text-white font-medium view-btn h-12 dark:bg-slate-700 dark:text-slate-400'
          }
          onClick={onView}
        >
          View more
          <span className="absolute p-1 top-1/2 right-[10%] transform -translate-y-1/2">
            <Image
              src={'/svg/arrowRight.svg'}
              alt="arrowright"
              width={20}
              height={20}
              objectFit="contain"
            ></Image>
          </span>
        </Button>
      )}
    </div>
  );
}
