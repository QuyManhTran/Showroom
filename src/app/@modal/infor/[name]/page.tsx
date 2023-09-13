'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CarInfor() {
  const router = useRouter();
  const onBack = () => {
    router.back();
  };
  return (
    <div className="relative w-[512px] max-w-full  text-black bg-white rounded-2xl dark:bg-black-100 dark:text-white">
      <div className="max-h-[665px] p-6  overflow-y-auto overscroll-contain  overflow-x-hidden">
        <div className="flex flex-col gap-3">
          <div className="relative w-full h-40 bg-blue-500 dark:bg-slate-500 rounded-lg ">
            <Image
              src={'/img/caritem.png'}
              alt="caritem"
              fill
              loading="lazy"
              className="top-0 left-0  transform translate-y-[16px] object-contain"
            ></Image>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative w-full h-24 bg-slate-200 dark:bg-slate-400 rounded-lg ">
              <Image
                src={'/img/frontCar.png'}
                alt="caritem"
                fill
                loading="lazy"
                className="top-0 left-0   object-contain"
              ></Image>
            </div>
            <div className="relative w-full h-24 bg-slate-200 dark:bg-slate-400 rounded-lg ">
              <Image
                src={'/img/horizontalCar.png'}
                alt="caritem"
                fill
                loading="lazy"
                className="top-0 left-0   object-contain"
              ></Image>
            </div>
            <div className="relative w-full h-24 bg-slate-200 dark:bg-slate-400 rounded-lg ">
              <Image
                src={'/img/backCar.png'}
                alt="caritem"
                fill
                loading="lazy"
                className="top-0 left-0   object-contain"
              ></Image>
            </div>
          </div>
          <h2 className="text-2xl font-medium mt-1">Kia Stinger Awd</h2>
          <div className="flex flex-col gap-6 select-none  text-black-100 dark:text-white ">
            <div className="flex flex-row justify-between items-centerfont-semibold">
              <span className=" font-normal text-gray-500 dark:text-white text-base">City Mpg</span>
              21
            </div>
            <div className="flex flex-row justify-between items-center font-semibold">
              <span className=" font-normal text-gray-500 dark:text-white text-base">Class</span>
              midsize car
            </div>
            <div className="flex flex-row justify-between items-center font-semibold">
              <span className=" font-normal text-gray-500 dark:text-white text-base">
                Combination Mpg
              </span>
              24
            </div>
            <div className="flex flex-row justify-between items-center font-semibold">
              <span className=" font-normal text-gray-500 dark:text-white text-base">
                Cylinders
              </span>
              4
            </div>
            <div className="flex flex-row justify-between items-center font-semibold">
              <span className=" font-normal text-gray-500 dark:text-white text-base">
                Displacement
              </span>
              2.5
            </div>
            <div className="flex flex-row justify-between items-center font-semibold">
              <span className=" font-normal text-gray-500 dark:text-white text-base">Drive</span>
              awd
            </div>
            <div className="flex flex-row justify-between items-center font-semibold">
              <span className=" font-normal text-gray-500 dark:text-white text-base">Make</span>
              KIA
            </div>
            <div className="flex flex-row justify-between items-center font-semibold">
              <span className=" font-normal text-gray-500 dark:text-white text-base">Model</span>
              stinger awd
            </div>
            <div className="flex flex-row justify-between items-center font-semibold">
              <span className=" font-normal text-gray-500 dark:text-white text-base">
                Fuel Type
              </span>
              gas
            </div>
            <div className="flex flex-row justify-between items-center font-semibold">
              <span className=" font-normal text-gray-500 dark:text-white text-base">
                Tranmission
              </span>
              a
            </div>
            <div className="flex flex-row justify-between items-center font-semibold">
              <span className=" font-normal text-gray-500 dark:text-white text-base">Year</span>
              2023
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
