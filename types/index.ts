import { MouseEventHandler } from 'react';

export interface ButtonInterface {
  children: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
