import { useState } from 'react';
import Button from '../components/Button';

const Home = () => {
  const [size, setSize] = useState('sm');
  const [bgColor, setBgColor] = useState('primary');

  const handleChangeSize = (e: any) => {
    const value = e.target.value;
    setSize(value);
  };

  const handleChangeBgColor = (e: any) => {
    const value = e.target.value;
    setBgColor(value);
  };

  return (
    <div className='p-3 grow'>
      <h1 className='font-bold leading-none tracking-tight text-3xl mb-5'>Preview Button</h1>
      <div className='m-2 p-3 rounded-lg border-2 boder-solid border-grey-200'>
        <div className='flex items-center justify-center'>
          <Button textContent='Button' size={size} bgColor={bgColor} />
        </div>
      </div>
      <h2 className='font-bold leading-none tracking-tight text-2xl my-5'>Properties</h2>
      <div className='m-2 p-3 rounded-lg border-2 boder-solid border-grey-200'>
        <div className='pb-5'>
          <label>Size</label>
          <select
            onChange={handleChangeSize}
            className='form-control block w-full px-2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          >
            <option className='option' value='sm'>
              Small
            </option>
            <option className='option' value='md'>
              Medium
            </option>
            <option className='option' value='lg'>
              Large
            </option>
          </select>
        </div>
        <div className='pb-5'>
          <label>Background Color</label>
          <select
            onChange={handleChangeBgColor}
            className='form-control block w-full px-2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          >
            <option className='option' value='primary'>
              Primary
            </option>
            <option className='option' value='info'>
              Info
            </option>
            <option className='option' value='danger'>
              Danger
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Home;
