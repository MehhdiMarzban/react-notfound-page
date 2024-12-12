import * as React from 'react';
import './styles/global.css';
import Lottie from 'lottie-react';
import NotFoundProps from './types/NotFound';
import animationData from './lottie/notfound.json';

const NotFound: React.FC<NotFoundProps> = ({
  ButtonComponent = () => null,
  text = '404 NotFound !',
  textClassName,
  rootClassName,
}) => {
  return (
    <div
      className={`flex flex-col justify-center items-center ${rootClassName}`}
    >
      <Lottie animationData={animationData} loop height={400} width={400} />
      <h1 className={`text-center text-pretty text-3xl ${textClassName}`}>
        {text}
      </h1>
      <ButtonComponent />
    </div>
  );
};

export default NotFound;
