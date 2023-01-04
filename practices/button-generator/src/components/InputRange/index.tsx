import React from 'react';

const InputRange = ({ ...rest }: React.ComponentPropsWithoutRef<'input'>): React.ReactElement => {
  return (
    <input
      type='range'
      className='form-range w-full h-6 p-0 cursor-pointer bg-transparent focus:outline-none focus:ring-0 focus:shadow-none'
      {...rest}
    />
  );
};

export default InputRange;
