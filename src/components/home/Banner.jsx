import React, { useRef } from "react";
import Container from "../common/Container";
import { Button } from "../ui/button";
import Highlight from "../common/Highlight";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import { SLIDER_DATA } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";

const Slides = ({ title, subtitle, btnText, src, highlight, to }) => {
  return (
    <div className="grid sm:grid-cols-2 gap-2">
      <div className="flex flex-col items-center sm:items-start justify-center gap-2 relative z-[1] sm:pl-4">
        <div className="absolute top-[25px] right-0 w-48 h-48 bg-primary opacity-10 rounded-full blur-2xl z-[-1]" />
        <div className="absolute bottom-0 left-[30px] w-40 h-40 bg-primary opacity-10 rounded-full blur-2xl z-[-1]" />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark leading-[1.4] max-w-[510px] text-center sm:text-start">
          {<Highlight text={title} highlight={highlight} />}
        </h1>
        <p className="text-muted font-medium sm:max-w-[450px] text-sm md:text-base lg:text-lg text-center sm:text-start">
          {subtitle}
        </p>
        <div>
          <Button
            className="sm:h-10 font-semibold rounded-full mt-2 sm:px-8 px-5 hover:bg-primary hover:scale-[1.1]"
            asChild
          >
            <Link to={to}>{btnText}</Link>
          </Button>
        </div>
      </div>
      <div className="flex items-center relative z-[1]">
        <div className="absolute bottom-0 right-[30px] w-48 h-48 bg-[#FF6A3D] opacity-30 rounded-full blur-2xl z-[-1]" />
        <img
          src={src}
          alt=""
          className="max-h-[270px] xs:max-h-[320px] sm:max-h-[450px] w-full object-contain"
        />
      </div>
    </div>
  );
};

const Banner = () => {
  const swiperRef = useRef(null);

  return (
    <section className="relative group">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        loop
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
      >
        {SLIDER_DATA.map((data, i) => (
          <SwiperSlide key={i}>
            <Container className="mt-6 relative group">
              <Slides
                title={data.title}
                subtitle={data.subtitle}
                highlight={data.highlight}
                src={data.src}
                btnText={data.btnText}
                to={data.to}
              />
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center gap-3 absolute right-10 bottom-10 z-[2]">
        <Button
          variant="outline"
          className={
            "rounded-full bg-primary/10 text-dark backdrop-blur-[10px] border-transparent h-auto aspect-square group-hover:bg-primary group-hover:text-white hover:bg-accent hover:text-dark size-9"
          }
          onClick={() => swiperRef.current.slidePrev()}
        >
          <ChevronLeft className="size-4" />
        </Button>
        <Button
          variant="outline"
          className={
            "rounded-full bg-primary/10 text-dark backdrop-blur-[10px] border-transparent h-auto aspect-square group-hover:bg-primary group-hover:text-white hover:bg-accent hover:text-dark size-9"
          }
          onClick={() => swiperRef.current.slideNext()}
        >
          <ChevronRight className="size-4" />
        </Button>
      </div>
    </section>
  );
};

export default Banner;
