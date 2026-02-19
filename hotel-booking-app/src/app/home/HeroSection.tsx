import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-[372px] bg-black">
      <img
        className="absolute size-full z-1 mx-auto object-cover inset-0"
        src="./assets/hero-image-1440.jpeg"
        alt="Hero Image"
      />
      <div className="z-2 relative container ">
        <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
          Travel has never
          <br />
          felt this cosy
        </h1>
        <p className="text-xl font-medium leading-snug text-white md:text-2xl">
          Book an entire place to all yourself
        </p>
        <Button className="mt-6 h-12 px-4 text-base font-semibold cursor-pointer">
          Discover Holiday Rentals
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
