import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title,
            publishedAt,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost)
    return (
      <div className="min-h-screen bg-green-100 flex justify-center flex items-center">
        <h1 className="bg-green-100 loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></h1>
      </div>
    );

  return (
    <main className="bg-blue-100 min-h-screen p-10">
      <article className="container shadow-lg mx-auto bg-green-100 rounded-lg">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center flex justify-center p-10">
            <div className="bg-white bg-opacity-75 rounded p-10 mb-5">
              <h1 className="PlayFair text-3xl text-blue-900 lg:text-6xl mb-4 flex justify-center">
                {singlePost.title}
              </h1>
              <div className="flex justify-center text-black ">
                <img
                  src={urlFor(singlePost.authorImage).url()}
                  alt={singlePost.name}
                  className="w-10 h-10 rounded-full"
                />
                <p className="OpenSans flex items-center pl-2 text-2xl lg:text-4xl">
                  {singlePost.name}
                </p>
              </div>
              <div className="OpenSans flex justify-center pl-2 mb-2 space-x-4 text-black text-l lg:text-2xl pt-2 text-gray-500">
                <h1 className=" OpenSans font-bold justify-center">
                  Written on
                </h1>
                : {new Date(singlePost.publishedAt).toLocaleDateString()}
              </div>
            </div>
          </div>
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            className="w-full object-cover rounded-t"
            style={{ height: "420px" }}
          />
        </header>
        <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full text-black OpenSans">
          <BlockContent
            blocks={singlePost.body}
            projectId="dmoi15vh"
            dataset="production"
          />
        </div>
      </article>
    </main>
  );
}
