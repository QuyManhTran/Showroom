'use client';
import Image from 'next/image';
import Button from '../Button/Button';

export default function Hero() {
  return (
    <section className="flex flex-col xl:flex-row gap-5 relative z-0 max-w-[1400px] mx-auto">
      <div className="flex-1  xl:flex-shrink-0 pt-36 px-16 dark:text-white">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[52px] font-bold">
          Find, book, rent a car—quick and super easy!
        </h1>
        <p className="mt-5 text-2xl font-light">
          Streamline your car rental experience with our effortless booking process.
        </p>
        <Button className={'text-white mt-10'}>Explore Cars</Button>
      </div>
      <div className="w-full flex items-end justify-end xl:flex-[1.5] ">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px]">
          <Image
            src={'/img/fortuner.jpg'}
            alt="fortuner ver 16.8"
            fill
            objectFit="contain"
            className="z-10"
          ></Image>
          <div
            className="absolute  bg-primary-blue top-0 left-0 w-full h-[75%] transform translate-y-14 translate-x-16"
            style={{ clipPath: 'ellipse(90% 54% at 99% 61%)' }}
          ></div>
        </div>
      </div>
    </section>
  );
}
