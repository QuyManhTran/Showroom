/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useState, useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import Image from 'next/image';
import useDeBounce from '@/Hook/useDeBounce';
import { data } from 'autoprefixer';
export default function Form() {
  const queryClient = useQueryClient();
  const [cars, setCars] = useState<{ id: number; name: string }[]>([]);
  const [input, setInput] = useState<string>('');
  const [isFocus, setIsFocus] = useState(false);
  const debounce = useDeBounce(300, input);
  const { refetch } = useQuery(['cars'], () => getNameCar(debounce), {
    onSuccess(data) {
      setCars(data);
    },
  });

  useEffect(() => {
    if (debounce.trim()) {
      refetch();
    } else {
      setCars([]);
    }
  }, [debounce]);

  return (
    <form className="flex-1 max-w-3xl flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0 justify-start">
      <div className="relative  flex flex-1 bg-[#3b3c9808] rounded-3xl sm:rounded-r-none dark:rounded-r-3xl dark:border dark:border-solid dark:border-slate-400 dark:rounded-3xl">
        <Image
          src={'/svg/Volkswagen.svg'}
          width={20}
          height={20}
          className="ml-3"
          objectFit="contain"
          alt="cars"
        ></Image>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Volkswagen"
          className="bg-transparent py-3 px-3 w-full outline-none"
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          spellCheck={false}
        ></input>
        {isFocus && (
          <div className="absolute top-full transform translate-y-2 left-0  bg-white shadow-lg w-1/2 flex flex-col justify-start rounded-xl dark:bg-slate-700 dark:text-white z-10 overflow-hidden transition duration-150">
            {cars ? (
              cars.map((car, index) => (
                <div
                  key={index}
                  className="px-2 py-1 hover:bg-gray-100 cursor-pointer dark:text-white dark:hover:bg-slate-800"
                >
                  {car.name}
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
      <div className="relative flex-1  flex bg-[#3b3c9808]  rounded-3xl sm:rounded-l-none dark:ml-1 dark:rounded-l-3xl dark:border dark:border-solid dark:border-slate-400 dark:rounded-3xl">
        <Image
          src={'/img/car.png'}
          width={20}
          height={20}
          className="ml-3"
          objectFit="contain"
          alt="cars"
        ></Image>
        <input
          placeholder="Porsche"
          className="bg-transparent py-3 px-3 w-full outline-none"
          spellCheck={false}
        ></input>
      </div>
    </form>
  );
}

const getNameCar = async (input: string) => {
  const res = await fetch(`api/car?search=${input}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data.data;
};
