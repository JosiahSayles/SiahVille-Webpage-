import { listOfStickers } from "../../listofStickers";
import { useParams } from "react-router";

export default function StickersDetails() {
  const { id } = useParams();
  const sticker = listOfStickers.find((s) => s.id.toString() === id);

  if (!sticker) {
    return <p>No Sticker found.</p>;
  }

  return (
    <article className="min-h-screen flex flex-col max-w-6xl mx-auto p-10">
      <div className="bg-gray-100 rounded-3xl p-10 space-y-10 shadow-inner">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="bg-white rounded-3xl p-6 shadow-md flex-1 flex items-center justify-center">
            <h1> Hello</h1>
            <img
              src={sticker.cover}
              alt={sticker.title}
              className="w-full rounded-2xl shadow-sm"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
