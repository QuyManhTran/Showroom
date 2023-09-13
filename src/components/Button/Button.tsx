'use client';

import { ButtonInterface } from '../../../types';

function Button({ children, onClick = () => {}, className }: ButtonInterface) {
  return (
    <button
      className={`flex justify-center items-center px-6 py-3 bg-primary-blue rounded-3xl ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
