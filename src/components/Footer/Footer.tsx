import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full text-black dark:text-white mt-5 border-t border-solid border-gray-100 dark:border-slate-600">
      <section className="max-w-[1440px] mx-auto py-10 px-6 sm:px-16 grid grid-cols-1 lg:grid-cols-5  sm:grid-cols-2 md:grid-cols-3  gap-12">
        <div className="sm:col-span-2 md:col-span-1 lg:col-span-2 flex flex-col items-start ">
          <Link className="flex justify-center items-center mb-6" href="/">
            <Image
              src={'/logo.svg'}
              alt="logo"
              width={118}
              height={18}
              objectFit="contain"
              className="bg-transparent"
            ></Image>
          </Link>
          <p className="text-base text-gray-700">Carhub 2023</p>
          <p className="text-base text-gray-700">All Rights Reserved ©</p>
        </div>
        <div className="flex flex-col gap-6 mr-6">
          <h3 className=" text-xl text-slate-700 font-bold ">About</h3>
          <div className="flex flex-col gap-5">
            <Link className="text-gray-500 text-lg" href="/">
              How it works
            </Link>
            <Link className="text-gray-500 text-lg" href="/">
              Featured
            </Link>
            <Link className="text-gray-500 text-lg" href="/">
              Partnership
            </Link>
            <Link className="text-gray-500 text-lg" href="/">
              Bussiness
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-6 mr-6">
          <h3 className=" text-xl text-slate-700 font-bold ">Company</h3>
          <div className="flex flex-col gap-5">
            <Link className="text-gray-500 text-lg" href="/">
              Events
            </Link>
            <Link className="text-gray-500 text-lg" href="/">
              Blog
            </Link>
            <Link className="text-gray-500 text-lg" href="/">
              Podcast
            </Link>
            <Link className="text-gray-500 text-lg" href="/">
              Invite a friend
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-6 mr-6">
          <h3 className=" text-xl text-slate-700 font-bold ">Socials</h3>
          <div className="flex flex-col gap-5">
            <Link className="text-gray-500 text-lg" href="/">
              Discord
            </Link>
            <Link className="text-gray-500 text-lg" href="/">
              Instagram
            </Link>
            <Link className="text-gray-500 text-lg" href="/">
              Twitter
            </Link>
            <Link className="text-gray-500 text-lg" href="/">
              Facebook
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}
