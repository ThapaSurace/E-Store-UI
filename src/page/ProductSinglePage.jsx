import React from "react";

const ProductSinglePage = () => {
  return (
    <div className="min-h-[70vh] flex justify-center items-center">
      <div className="container  flex flex-col md:flex-row gap-10 md:gap-20 my-10">
        {/* img container */}
        <div className="h-72 flex flex-col items-center">
          <img
            src="https://books.bizmandala.com/media/books/9781788401487/image.webp"
            alt="img"
            className="rounded-md h-full shadow-sm object-cover"
          />
          <div className="mt-4 font-semibold italic text-slate-800">
            <span>Genres: </span> <span>Arts</span>
          </div>
        </div>

        {/* info container */}
        <div className="flex-1">
          <h1 className="text-xl text-slate-900 font-semibold">
            Elton John by O'Neill
          </h1>
          <div className="mt-2 font-light text-sm">
            <span>Author: </span>Terry O'Neill
          </div>
          <p className="my-4">
            Looking at Terry's photographs is like gazing through a window at
            the most extraordinary and exciting moments of my life. I'm so glad
            he was with us throughout the madness: in his evocative and stylish
            photos he captured those moments as no other photographer could.-
            Elton JohnElton John and iconic photographer Terry O'Neill worked
            together for many years, taking in excess of 5,000 photographs. From
            intimate backstage shots to huge stadium concerts, the photographs
            in this book represent the very best of this archive, with most of
            the images being shown here for the first time.O'Neill has drawn on
            his personal relationship with Elton John to write the book's
            introduction and captions.", author: "Terry O'Neill
          </p>
          <span className="font-[100] text-2xl">$ 400</span>

          <div>
            <button className="bg-slate-900 hover:bg-slate-700 mt-4">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSinglePage;
