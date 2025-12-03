export default function Stickers({ sticker }) {
  return (
    <div>
      <li className=" group flex-col  bg-slate-400 rounded-xl shadow-2xl  p-1 ml-8 mr-8 mb-20 mt-10 max w-100 h-135 hover: transition-transform duration-300">
        <div className="relative w-full h-100 rounded-lg overflow-hidden">
          {/* Default image */}
          <img
            src={sticker.cover}
            alt={sticker.title}
            className=" absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0 "
          />
          {/* Hover image */}
          <img
            src={sticker.hoverImage}
            alt={sticker.title}
            className=" absolute inset-0 w-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-lg h-100"
          />
        </div>
        <h2 className="font text-2xl font-bold text-black-800">
          {sticker.title} -
        </h2>
        <p className="">{sticker.description}</p>
      </li>
    </div>
  );
}
