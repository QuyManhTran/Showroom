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

export interface CarsInterFace {
  name: string;
  price: string;
}
