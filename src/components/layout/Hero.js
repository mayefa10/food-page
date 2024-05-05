//'use client';
//import React, { useEffect } from 'react';
import Image from 'next/image';
import Right from '../icons/Right';
//import { gsap } from 'gsap';



const Hero = () => {
  /*
function Hero() {
  useEffect(() => {
    const ImageFor = document.querySelector('ImageFor');
    gsap.from(ImageFor, { opacity: 0, y: 50, duration: 20 });
  }, []);
*/

  return (
    <section className="hero mt-4">
      <div className="py-8">
        <h1 className="text-4xl font-semibold my-2 ">
          {' '}
          Eat The Best{' '}
          <span className="text-primary">
            <br /> Pizza
          </span>{' '}
          With the
          <br /> best flavors{' '}
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Pizza is one of the best Italian foods that became international due
          to its great flavors and easy preparation.
        </p>
        <div className="flex gap-4 items-center text-sm">
          <button
            className="bg-primary items-center
    uppercase rounded-full px-4 py-2 text-white flex gap-2 "
          >
            Order now
            <Right />
          </button>
          <button className="font-semibold flex gap-4 py-2 text-gray-600">
            Learn more
            <Right />
          </button>
        </div>
      </div>
      <div className="relative my-6 ml-16 w-[80vh] h-[60vh] ">
        <Image
          src={'/pizzaPix.jpg'}
          alt={'pizza'}
          layout="fill"
          objectFit={'contain'}
          className=""
        />
      </div>
    </section>
  );
};

export default Hero;

