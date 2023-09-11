'use client';

import { ButtonInterface } from '../../../types';

function Button({ children, onClick = () => {} }: ButtonInterface) {
  return (
    <button
      className="flex justify-center items-center mt-10 px-6 py-3 bg-primary-blue rounded-3xl text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
