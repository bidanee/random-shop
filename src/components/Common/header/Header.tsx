import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Search from "./Search";

const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar bg-base-100 py-4 px-6 shadow-md">
      <div className="flex-1">
        <button
          className="btn btn-ghost hover:bg-green-100 normal-case text-2xl text-green-400 font-extrabold"
          onClick={() => navigate("/main")}
        >
          RandomMeal
        </button>
      </div>
      <Search />
      <div className="flex-end">
        <div className="text-sm mx-1">OOO님 환영합니다</div>
        <button
          className="btn btn-outline btn-neutral border-0 mx-1 btn-sm"
          onClick={() => console.log()}
        >
          로그아웃
        </button>
        <button
          className="btn bg-white btn-sm mx-1 border-0"
          onClick={() => navigate("/mypage")}
        >
          My page
        </button>
        <label tabIndex={0} className="btn btn-ghost btn-circle ">
          <div className="indicator">
            <AiOutlineShoppingCart size={24} />
            <span className="badge badge-sm indicator-item">8</span>
          </div>
        </label>
      </div>
    </nav>
  );
};
export default Header;
