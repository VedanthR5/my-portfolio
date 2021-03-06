import React from "react";
import image from "../20210724_185626.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Makena Beach, Maui, HI"
        className="absolute object-cover w-full h-full "
      />
      <section className="relative flex justify-center min-h-screen pt-20 lg:pt-40 px-8">
        <h1 className="text-6xl text-green-900 text-opacity-80 flex justify-center font-light PlayFair lg:leading-snug home-name ">
          Hi! I'm Vedanth.{" "}
        </h1>
      </section>
    </main>
  );
}
