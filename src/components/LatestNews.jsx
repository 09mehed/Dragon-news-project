import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex items-center bg-base-200 p-2">
            <p className="bg-[#D72050] text-base-100 px-3 py-1 ">Latest</p>
            <Marquee pauseOnHover={true} speed={100} className="space-x-10">
                <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, repudiandae.</Link>
                <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, repudiandae.</Link>
                <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, repudiandae.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;