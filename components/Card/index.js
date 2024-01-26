const CardApi = ({ card }) => {
  return (
    <div className="max-w-sm  overflow-hidden shadow-lg flex flex-col justify-center p-12 rounded-xl">
      <img className="text-center max-h-[200px]" src={card.image} alt="Card" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{card.username}</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero.
        </p>
      </div>
      <div className="px-6 py-4 flex gap-3 flex-wrap">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {card.macAddress}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {card.phone}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          {card.email}
        </span>
      </div>
    </div>
  );
};

export default CardApi;
