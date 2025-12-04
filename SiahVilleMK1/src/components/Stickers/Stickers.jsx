export default function Stickers({ sticker }) {
  return (
    <div className="flex-col justify-items-center">
      <li className=" group flex-col border-2 bg-slate-400 rounded-xl shadow-2xl  p-1 ml-8 mr-8  mt-10 max w-100 h-150 hover: transition-transform duration-300">
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
        <div className="flex-col justify-items-center">
          <h2 className="font text-2xl font-bold text-black-800 pl-2 shadow-md rounded-xl w-fit bg-slate-400">
            {sticker.title} -
          </h2>
          <p className="pl-2 bg-slate-400 rounded-xl ">{sticker.description}</p>
        </div>
      </li>
      <button className="flex rounded-md shadow-xl border-2 w-50 h-10 justify-center items-center font-bold text-xl text-white mb-20 mt-5 hover:text-black   hover:animate-bounce ">
        See more
      </button>
    </div>
  );
}
