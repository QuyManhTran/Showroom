import Filter from '@/components/Filter';
import Hero from '@/components/Hero';
import Image from 'next/image';
import { filters } from '@/asset/Filter';
import CarItem from '@/components/CarItem';
import { cars } from '@/asset/cars';
export default function Home() {
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
            <form className="flex-1 max-w-3xl flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0 justify-start">
              <div className="relative  flex flex-1 bg-[#3b3c9808] rounded-3xl sm:rounded-r-none">
                <Image
                  src={'/svg/Volkswagen.svg'}
                  width={20}
                  height={20}
                  className="object-contain ml-3"
                  alt="cars"
                ></Image>
                <input
                  placeholder="Volkswagen"
                  className="bg-transparent py-3 px-3 w-full outline-none"
                ></input>
              </div>
              <div className="relative flex-1  flex bg-[#3b3c9808]  rounded-3xl sm:rounded-l-none">
                <Image
                  src={'/img/car.png'}
                  width={20}
                  height={20}
                  className="object-contain ml-3"
                  alt="cars"
                ></Image>
                <input
                  placeholder="Porsche"
                  className="bg-transparent py-3 px-3 w-full outline-none"
                ></input>
              </div>
            </form>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter, index) => (
                <Filter key={index} title={filter.title} items={filter.items}></Filter>
              ))}
            </div>
          </div>
          <div className="pt-14 grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
            {cars.map((car, index) => (
              <CarItem key={index} name={car.name} price={car.price}></CarItem>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
