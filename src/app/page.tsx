import Filter from '@/components/Filter';
import Hero from '@/components/Hero';
import Image from 'next/image';
import { filters } from '@/asset/Filter';
import CarItem from '@/components/CarItem';
import { CarData } from '../../types';
import Form from '@/components/Form';
export default async function Home() {
  const cars: CarData[] = await getCars();
  return (
    <main className="overflow-hidden">
      <Hero></Hero>
      <section id="catalog" className="w-full mt-12 dark:text-white">
        <div className="max-w-[1440] mx-auto sm:px-16 py-4 px-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold pb-3">Car Catalogue</h1>
            <p className="text-[18px]  font-normal">Explore out cars you might like</p>
          </div>

          <div className="flex flex-col justify-between lg:flex-row  lg:items-center gap-4 lg:gap-2">
            <Form></Form>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter, index) => (
                <Filter key={index} title={filter.title} items={filter.items}></Filter>
              ))}
            </div>
          </div>
          <div className="pt-14 grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
            {cars.map((car, index) => (
              <CarItem key={index} name={car.make} price={car.highway_mpg} car={car}></CarItem>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

async function getCars() {
  const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla&limit=12';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7aa2d47beemshc281a30f2e13a98p13c9f0jsnd0c3afb01b77',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  return data;
}
