import { AiFillStar } from "react-icons/ai";
import { FaRegEye, FaShareAlt } from "react-icons/fa";

const NewsCard = (props = {}) => {
    const {news} = props || {};
    return (
        <div className=" p-4 bg-white rounded-xl shadow-md">
            <div className="flex items-center mb-4">
                <img className="w-10 h-10 rounded-full mr-3" src={news.author.img} alt="" />
                <div>
                    <p className="font-semibold">{news.author.name}</p>
                    <p className="text-sm text-gray-500">{news.author.published_date}</p>
                </div>
                <div className="ml-auto">
                    <FaShareAlt className="text-gray-600"></FaShareAlt>
                </div>
            </div>
            <h2 className="text-xl font-semibold mb-2">{news.title}</h2>
            <img className="w-full object-cover rounded-lg mb-4" src={news.thumbnail_url} alt="" />
            <p className="text-gray-700 text-sm mb-4">
                {news.details.slice(0, 150)}...{""}
                <span className="text-primary">Read More</span>
            </p>
            <div className="flex items-center justify-between text-gray-400">
                <div className="flex items-center">
                    {[...Array(5)].map(((_, i) => {
                        <AiFillStar key={i} className={`text-yellow-500 ${i < Math.round(news.rating.number) ? "" : "opacity-50"}`}></AiFillStar>
                    }))}
                    <span className="ml-2 font-semibold">{news.rating.number}</span>
                </div>
                <div className="flex items-center">
                    <FaRegEye className="mr-1"></FaRegEye>
                    <span>{news.total_view}</span>
                </div>
            </div>

        </div>
    );
};

export default NewsCard;