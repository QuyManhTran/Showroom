'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CarData } from '../../../../../types';

export default function CarInfor({ car }: { car: CarData }) {
  const router = useRouter();
  const onBack = () => {
    router.back();
  };
  return (
    <div
      className="relative w-[512px] max-w-full  text-black bg-white rounded-2xl dark:bg-black-100 dark:text-white view-car"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="max-h-[665px] p-6  overflow-y-auto overscroll-contain  overflow-x-hidden">
        <div className="flex flex-col gap-3">
          <div className="relative w-full h-40 bg-blue-500 dark:bg-slate-500 rounded-lg ">
            <Image
              src={'/img/caritem.png'}
              alt="caritem"
              fill
              loading="lazy"
              className="top-0 left-0  transform translate-y-[16px]"
              objectFit="contain"
            ></Image>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative w-full h-24 bg-slate-200 dark:bg-slate-400 rounded-lg ">
              <Image
                src={'/img/frontCar.png'}
                alt="caritem"
                fill
                loading="lazy"
                className="top-0 left-0"
                objectFit="contain"
              ></Image>
            </div>
            <div className="relative w-full h-24 bg-slate-200 dark:bg-slate-400 rounded-lg ">
              <Image
                src={'/img/horizontalCar.png'}
                alt="caritem"
                fill
                loading="lazy"
                className="top-0 left-0"
                objectFit="contain"
              ></Image>
            </div>
            <div className="relative w-full h-24 bg-slate-200 dark:bg-slate-400 rounded-lg ">
              <Image
                src={'/img/backCar.png'}
                alt="caritem"
                fill
                loading="lazy"
                className="top-0 left-0"
                objectFit="contain"
              ></Image>
            </div>
          </div>
          <h2 className="text-2xl font-medium mt-1 capitalize">{car.make}</h2>
          <div className="flex flex-col gap-6 select-none  text-black-100 dark:text-white ">
            <div className="flex flex-row justify-between items-center font-semibold">
              <span className=" font-normal text-gray-500 dark:text-white text-base">City Mpg</span>
              {car.city_mpg}
            </div>
            <div className="flex flex-row justify-between items-center font-semibold">
              <span className=" font-normal text-gray-500 dark:text-white text-base">Class</span>
              {car.class}
            </div>
            <div className="flex flex-row justify-between items-center font-semibold">
              <span className=" font-normal text-gray-500 dark:text-white text-base">
                Combination Mpg
              </span>
              {car.combination_mpg}
            </div>
            <div className="flex flex-row justify-between items-center font-semibold">
              <span className=" font-normal text-gray-500 dark:text-white text-base">
                Cylinders
              </span>
              {car.cylinders}
            </div>
            <div className="flex flex-row justify-between items-center font-semibold">
              <span className=" font-normal text-gray-500 dark:text-white text-base">
                Displacement
              </span>
              {car.displacement}
            </div>
            <div className="flex flex-row justify-between items-center font-semibold">
              <span className=" font-normal text-gray-500 dark:text-white text-base">Drive</span>
              {car.drive}
            </div>
            <div className="flex flex-row justify-between items-center font-semibold">
              <span className=" font-normal text-gray-500 dark:text-white text-base">Make</span>
              {car.make}
            </div>
            <div className="flex flex-row justify-between items-center font-semibold">
              <span className=" font-normal text-gray-500 dark:text-white text-base">Model</span>
              {car.model}
            </div>
            <div className="flex flex-row justify-between items-center font-semibold">
              <span className=" font-normal text-gray-500 dark:text-white text-base">
                Fuel Type
              </span>
              {car.fuel_type}
            </div>
            <div className="flex flex-row justify-between items-center font-semibold">
              <span className=" font-normal text-gray-500 dark:text-white text-base">
                Tranmission
              </span>
              {car.transmission}
            </div>
            <div className="flex flex-row justify-between items-center font-semibold">
              <span className=" font-normal text-gray-500 dark:text-white text-base">Year</span>
              {car.year}
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute top-3 right-7 bg-gray-200 hover:bg-gray-300 transition duration-100 p-2 rounded-full cursor-pointer"
        onClick={onBack}
      >
        <Image
          src={'/svg/close.svg'}
          alt="close"
          height={20}
          width={20}
          objectFit="contain"
        ></Image>
      </div>
    </div>
  );
}
