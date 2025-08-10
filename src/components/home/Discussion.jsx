import React, { useRef } from "react";
import Container from "../common/Container";
import { Button } from "../ui/button";
import { useInView, motion } from "framer-motion";
import { Link } from "react-router";

const Discussion = () => {
  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { once: true });

  const textRef = useRef(null);
  const textInView = useInView(textRef, { once: true });

  return (
    <Container className="overflow-x-clip grid lg:grid-cols-2 gap-4 lg:gap-8">
      <motion.div
        ref={imageRef}
        initial={{ opacity: 0, x: -100 }}
        animate={imageInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.6, ease: "easeOut", delay: 0 }}
        className="flex items-center justify-center"
      >
        <img
          src="/discussion.png"
          alt=""
          className="max-h-[500px] w-full object-contain"
        />
      </motion.div>
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, x: 100 }}
        animate={textInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.6, ease: "easeOut", delay: 0 }}
        className="flex flex-col justify-center gap-4"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-dark leading-[1.4]">
          Explore Diverse Product Perspectives and Concerns
        </h2>
        <p className="text-sm sm:text-base text-muted leading-[1.7]">
          Gain insight into how consumers truly feel about the products they
          use. Our platform encourages users to raise genuine concerns, share
          boycotting reasons, and discuss alternatives — creating a more
          transparent and aware shopping experience for everyone. Whether it's
          ethical sourcing, corporate behavior, or product quality, every
          opinion matters here.
        </p>
        <div>
          <Button asChild className="rounded-full font-semibold h-10 px-8">
            <Link to={'/queries'} >
            Explore More
            </Link>
          </Button>
        </div>
      </motion.div>
    </Container>
  );
};

export default Discussion;
