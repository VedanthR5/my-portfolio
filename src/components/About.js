import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import mountains from "../mountains.jpg";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
          name,
          "bio": bio[0].children[0].text,
          "authorImage": image.asset->url
      }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author)
    return (
      <div className="min-h-screen bg-green-100 flex justify-center flex items-center">
        <h1 className="bg-green-100 loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></h1>
      </div>
    );

  return (
    <main className="relative">
      <img src={mountains} alt="Mountain" className="absolute w-full" />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-green-300 bg-opacity-70 rounded-lg shadow-2xl lg:flex p-10 mr-7 ml-7">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-10"
            alt="Vedanth"
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="PlayFair text-6xl text-green-200 mb-5">
              Hey there! I'm{" "}
              <span className="text-blue-900 italic">{author.name}</span>
            </h1>
            <p className="OpenSans text-black text-opacity-70 text-xl">{author.bio}</p>
          </div>
        </section>
      </div>
    </main>
  );
}