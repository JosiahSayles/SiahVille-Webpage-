import React from "react";
import { listOfStickers } from "../../listofStickers";
import Stickers from "./Stickers";

export default function StickersPage() {
  return (
    <div className=" flex flex-col items-center py-8 px-4 min-h-screen mt-40">
      <h1 className="font text-6xl text-shadow-lg mb-10">Catalog</h1>
      <ul className="grid grid-cols-3 gap 3">
        {listOfStickers.map((sticker) => (
          <Stickers key={sticker.id} sticker={sticker} />
        ))}
      </ul>
    </div>
  );
}
