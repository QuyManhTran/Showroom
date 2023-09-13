'use client';
import Image from 'next/image';
import { ButtonFilter } from '../../../types';
import { useState } from 'react';

export default function App({ title, items }: ButtonFilter) {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div className="relative w-fit text-slate-700">
      <button
        className="outline-none bg-white dark:bg-transparent dark:text-white border border-solid rounded-lg shadow-md min-w-[127px] py-[8px]"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="px-2 flex justify-between">
          {title}
          <Image
            src={'/svg/filter.svg'}
            alt="filter"
            loading="lazy"
            width={20}
            height={20}
            className="ml-4 object-contain"
          ></Image>
        </div>
      </button>
      {isActive && (
        <div className="absolute top-full transform translate-y-1 w-full bg-white  dark:bg-transparent dark:text-white border border-solid rounded-lg shadow-md z-20 h-fit overflow-hidden origin-top transition ease-linear duration-500">
          {items.map((item, index) => (
            <li key={index} className="list-none hover:bg-blue-300 cursor-pointer px-2 py-[4px]">
              {item.item}
            </li>
          ))}
        </div>
      )}
    </div>
  );
}
