import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"
const Navbar = () => {
    return (
        <div className="flex justify-between pt-3 items-center">
            <div></div>
            <div className="nav space-x-5">
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className="login flex gap-3 items-center">
                <div className="">
                    <img src={userIcon} alt="" />
                </div>
                <Link to='/auth/login' className="btn btn-neutral">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;