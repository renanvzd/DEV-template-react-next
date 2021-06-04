import { ReactNode } from 'react';
import Carousel from './Carousel/carousel';
import HomeMoradas from './homeMoradas';

type PageTemplate = {
  children: ReactNode;
};

const PageTemplate: React.FC = ({ children }: PageTemplate) => {
  return (
    <>
      <Carousel />
      <HomeMoradas />
      {children}
    </>
  );
};

export default PageTemplate;
