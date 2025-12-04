import { listofStickers } from "../../listofStickers";
import { useParams } from "react-router";

export default function StickersDetails() {
  const { id } = useParams();
  const { sticker } = listofStickers.find((s) => s.id.toString() === id);

  if (!sticker) {
    return <p>No Sticker found.</p>;
  }

  return (
    <article className="min-h-screen flex flex-col max-w-6xl mx-auto p-10">
      <div></div>
    </article>
  );
}
