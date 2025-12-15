import { listOfStickers } from "../../listofStickers";
import { useParams } from "react-router";

export default function StickersDetails() {
  const { id } = useParams();
  const sticker = listOfStickers.find((s) => s.id.toString() === id);

  if (!sticker) {
    return <p>No Sticker found.</p>;
  }

  return (
    <article className="min-h-screen flex flex-col max-w-7xl mx-auto p-10 ">
      <div className=" rounded-3xl p-10 space-y-10 shadow-2xl mt-50">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex  shadow-xl pr-6 ">
            <figure className=" rounded-3xl p-6  flex-1 flex-col items-center justify-center">
              <img
                src={sticker.cover}
                alt={sticker.title}
                className="min-w-100 h-90 rounded-2xl shadow-lg "
              />
              <img
                src={sticker.hoverImage}
                alt={sticker.title}
                className="w-100 h-90 rounded-2xl shadow-lg mt-2 "
              />
            </figure>
            <figure>
              <img
                src={sticker.digitalImage}
                alt={sticker.title}
                className="h-180 rounded-2xl shadow-lg mt-8 "
              />
            </figure>
          </div>
          <div className="w-80 flex-col justify-items-center text-lg">
            <h2 className="font text-5xl mb-3 text-shadow-lg shadow-xl">
              {sticker.title}
            </h2>
            <p className=" rounded-lg flex p-4 shadow-xl">
              {sticker.description}
            </p>
            <p className="mt-5  text-md font-bold">Size: {sticker.size}</p>
            <p className="mt-5 text-3xl mb-10 shadow-xl text-white">
              Price: ${sticker.cost}
            </p>
            <button className="flex rounded-md shadow-xl border-2 w-50 h-10 justify-center items-center font-bold text-xl text-black mb-20 mt-5 hover:text-black hover:animate-bounce ">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
