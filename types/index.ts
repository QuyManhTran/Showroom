import { MouseEventHandler } from 'react';

export interface ButtonInterface {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: any;
}

export interface ButtonFilter {
  title: string;
  items: { item: string }[];
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: any;
}

export interface CarData {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
