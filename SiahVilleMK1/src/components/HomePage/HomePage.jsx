import "./HomePage.css";
import Stickers from "../Stickers/Stickers";
import { newAdditionStickers } from "../../newAdditionStickers";

export default function HomePage() {
  return (
    <>
      <div className="home-page">
        <div>
          <h1 className=" font flex items-center justify-center text-6xl text-shadow-lg font-bold mb-8">
            Welcome to SiahVille Studios
          </h1>
          <section className=" rounded-2xl border-stone-300 shadow-2xl p-6 mb-2 max-w-8xl mx-auto px-10 w-full mt-2">
            <ul className="flex flex items-center h-120 rounded-2x justify-center items-center">
              <img
                className="h-full rounded-md shadow-2xl"
                src="/marketing/TruckedUp1.jpeg"
                alt="TruckedUp sticker"
              />
              <img
                className="h-full rounded-md shadow-2xl"
                src="/marketing/MK1.jpg"
                alt="group of sticker and water bottle"
              />
              <img
                className="h-full rounded-md shadow-2xl"
                src="/marketing/NA1.JPG"
                alt="Nova Axe Stickers"
              />
              <img
                className="h-full rounded-md shadow-2xl"
                src="/marketing/Mk2.jpg"
                alt="Unidetified Mystic hustler sticker and waterbottle"
              />
            </ul>
          </section>
          <section className="shadow-2xl pb-1">
            <h2 className=" font flex justify-center text-7xl font-bold mt-20 mb-10 text-shadow-lg">
              Featured Stickers: New Drops!
            </h2>
            <div className=" bg-slate-200 rounded-2xl border-stone-300 shadow-2xl p-6 mb-6 max-w-10xl mx-auto px-10 w-300 mt-2 mb-2">
              <article>
                <strong>New Stickers Drop</strong>{" "}
                <em>- Exclusive Designs Now Available!</em>
                <p>
                  Upgrade your collection with our latest Siahville Sticker
                  Drop! This fresh batch features bold, eye-catching designs
                  that bring personality, hustle, and mystic energy to your
                  everyday items. Whether you’re about securing the bag, rocking
                  luxury vibes, tapping into the unknown, or exploring
                  otherworldly dimensions, there’s a sticker for you!
                </p>
                <article>
                  <strong>What's Included in the Drop:</strong>
                  <ul className="indent-2 list-disc pl-12 mt-2 mb-8">
                    <li className="mb-4">
                      <p>
                        {" "}
                        <strong> Voyager</strong>- where the unknown meets the
                        unimaginable. This cosmic explorer is ready to venture
                        into the great beyond… or your sticker collection.
                      </p>
                    </li>
                    <li className="mb-4">
                      <p>
                        {" "}
                        <strong> Certified Bag Chaser</strong>- A set of
                        vibrant, graffiti-style stickers for the true go-getters
                        who never stop chasing success. Available in multiple
                        colorways, featuring bold lettering and a money bag
                        icon.
                      </p>
                    </li>
                    <li>
                      <p>
                        {" "}
                        <strong> Vibes</strong>- Enjoy the vibe with this
                        vibrant set of bold, elegant, tranquil stickers that
                        will set the tone for all your personal items!.
                      </p>
                    </li>
                  </ul>
                  <p>
                    Limited stock available! Don’t miss out on these exclusive
                    designs. Grab yours now and elevate your sticker game!
                  </p>
                </article>
              </article>
            </div>
          </section>

          <section className="flex justify-center shadow-xl">
            <h3></h3>
            <ul className="flex  ">
              {newAdditionStickers.map((sticker) => (
                <Stickers key={sticker.id} sticker={sticker} />
              ))}
            </ul>
          </section>

          <section className=" flex justify-center font-bold text-3xl mb-20 mt-10 ">
            <button className="border-3 text-white rounded-xl p-3  hover:text-black shadow-xl hover:animate-bounce">
              Shop all
            </button>
          </section>
        </div>
      </div>
    </>
  );
}
