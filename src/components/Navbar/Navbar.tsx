import { ThemeConText } from '@/app/layout';
import { useContext } from 'react';
import Image from 'next/image';
import Button from '../Button/Button';
import Link from 'next/link';
import Switcher from '../Switcher';
export default function Navbar() {
  const theme = useContext(ThemeConText);
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto  flex flex-row justify-between items-center px-6 py-4 sm:px-16 sm:py-6 ">
        <Link className="flex justify-center items-center" href="/">
          <Image
            src={'/logo.svg'}
            alt="logo"
            width={118}
            height={18}
            objectFit="contain"
            className="bg-transparent"
          ></Image>
        </Link>
        <Switcher
          onclick={theme.onChangeTheme}
          title={theme.isDarkMode ? 'Dark Mode' : 'Light Mode'}
        ></Switcher>
        <Button
          className={
            'bg-white text-primary-blue  min-w-[130px] text-xl xl:rounded-[28px] xl:bg-white xl:border xl:border-solid xl:border-blue-400  dark:bg-primary-blue dark:text-white dark:mt-0'
          }
        >
          <span className="flex items-center mb-[4px]" style={{ lineHeight: '100%' }}>
            Sign in
          </span>
        </Button>
      </nav>
    </header>
  );
}
