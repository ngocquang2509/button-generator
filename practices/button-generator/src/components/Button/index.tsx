export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  textContent: string;
  size?: string;
  bgColor?: string;
  borderColor?: string;
  borderRadius?: string;
  isBlock?: boolean;
  isDisabled?: boolean;
}

const Button = ({
  textContent = '',
  size = 'md',
  bgColor = 'primary',
  borderColor = 'primary',
  borderRadius = 'md',
  isBlock = false,
  isDisabled = false,
  ...rest
}: IButton): React.ReactElement => {
  const baseClass = 'text-white text-center m-2 border-solid border-2';
  const classes = [
    baseClass,

    size === 'lg' ? 'h-12 px-6 m-2 text-lg' : '',
    size === 'md' ? 'h-10 px-5 m-2' : '',
    size === 'sm' ? 'h-8 px-4 m-2 text-sm' : '',

    borderRadius === 'lg' ? 'rounded-lg' : '',
    borderRadius === 'md' ? 'rounded' : '',
    borderRadius === 'sm' ? 'rounded-sm' : '',
    borderRadius === 'full' ? 'rounded-full' : '',

    bgColor === 'primary' ? 'bg-sky-500 hover:bg-sky-600' : '',
    bgColor === 'info' ? 'bg-green-500 hover:bg-green-600' : '',
    bgColor === 'danger' ? 'bg-red-500 hover:bg-red-600' : '',

    borderColor === 'primary' ? 'border-sky-600' : '',
    borderColor === 'info' ? 'border-green-600' : '',
    borderColor === 'danger' ? 'border-red-600' : '',

    isBlock === true ? 'block w-full' : '',
    isBlock === false ? '' : '',

    isDisabled === true ? 'opacity-50 cursor-not-allowed' : '',
    isDisabled === false ? '' : '',
  ].join(' ');
  return (
    <button className={`${classes}`} {...rest}>
      {textContent}
    </button>
  );
};

export default Button;
