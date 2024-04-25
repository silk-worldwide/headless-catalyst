import Image from 'next/image';

import { Button } from '@bigcommerce/components/button';
import {
  Slideshow,
  SlideshowAutoplayControl,
  SlideshowContent,
  SlideshowControls,
  SlideshowNextIndicator,
  SlideshowPagination,
  SlideshowPreviousIndicator,
  SlideshowSlide,
} from '@bigcommerce/components/slideshow';

import SlideshowBG from './Untitled-1.png';
import LogoImage from './weboost-logo-2.png';
import CarAntenna from './car-anttenna.jpeg';

export const Hero = () => (
  <Slideshow>
    <SlideshowContent>
      <SlideshowSlide>
        <div className="relative bg-blue-500 flex items-center"> 
          <Image
            alt="an assortment of brandless products " 
            className="ml-auto h-full object-contain" 
            fill
            priority
            sizes="(max-width: 1536px) 100vw, 1536px"
            src={SlideshowBG} 
          /> 
          <div className="flex flex-col gap-4 px-12 pb-48 pt-36 text-white w-1/2"> 
            <h2 className="text-5xl font-black lg:text-6xl">25% Off Sale</h2>
            <p className="max-w-sm">
            Our Best Selling Home Booster Fusion4Home          
            </p>
            <Button asChild className="border-none bg-pink-500 text-white text-center hover:bg-pink-700 flex items-center justify-center whitespace-nowrap w-[115px] h-[57px]
">
              <a href="/#">Shop now</a>
            </Button>
          </div>
        </div>
      </SlideshowSlide>
      <SlideshowSlide>
        <div className="relative bg-cover bg-no-repeat bg-center h-2/3"> 
          <Image
            alt="Car background"
            className="absolute inset-0" 
            layout="fill" 
            objectFit="cover" 
            priority
            src={CarAntenna}
          />
          <div className="absolute inset-0 flex flex-col items-start justify-end h-full pb-20 pl-12 text-white">
              <Image 
                  alt="weBoost Logo" 
                  src={LogoImage}
                  className="w-48 mb-8"
                  width={192}
                  height={64}
              /> 
            <h2 className="text-5xl font-black lg:text-6xl mb-4">Drive Reach Overland</h2>
            <p className="text-xl mb-8">Cell Phone Booster Kit</p>
            <div className="flex items-center mb-12">
              <span className="text-2xl mr-4">$</span>
              <span className="text-4xl font-black">549.99</span>
            </div>
            <Button asChild variant="primary" className="w-fit"> 
              <a href="/#">Shop now</a>
            </Button>
          </div>
        </div> 
      </SlideshowSlide>

      <SlideshowSlide>
        <div className="flex flex-col gap-4 bg-gray-100 px-12 pb-48 pt-36">
          <h2 className="text-5xl font-black lg:text-6xl">Low Prices</h2>
          <p className="max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <Button asChild className="w-fit">
            <a href="/#">Shop now</a>
          </Button>
        </div>
      </SlideshowSlide>
    </SlideshowContent>
    <SlideshowControls>
      <SlideshowAutoplayControl />
      <SlideshowPreviousIndicator />
      <SlideshowPagination />
      <SlideshowNextIndicator />
    </SlideshowControls>
  </Slideshow>
);
