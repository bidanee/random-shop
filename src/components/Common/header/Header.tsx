import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Search from "./Search";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase/firebaseSetup";

const Header = () => {
  const [displayName, setDisplayName] = useState("");
  const navigate = useNavigate();
  // const isLoggedIn = JSON.parse(localStorage.getItem("login"));

  const currentUser = auth.currentUser;
  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        localStorage.removeItem("login");
        localStorage.removeItem("user");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const name = auth.onAuthStateChanged(async (user) => {
      await setDisplayName(user?.displayName);
    });
    return name;
  }, []);

  return (
    <>
      {currentUser ? (
        <div className=" flex items-center w-full p-0 bg-base-100 py-4 px-6 shadow-md">
          <div className="flex-1">
            <button
              className=" btn btn-ghost hover:bg-green-100 normal-case text-sm sm:text-3xl text-green-400 font-extrabold "
              onClick={() => navigate("/")}
            >
              RandomMeal
            </button>
          </div>
          <div className="flex-end flex items-center">
            <Search />
            <div className=" text-sm mr-2 ml-6 ">{displayName} 님</div>
            <button
              className=" btn btn-outline btn-neutral border-0 mx-1 btn-sm"
              onClick={handleLogout}
            >
              로그아웃
            </button>
            <button
              className="btn bg-white btn-sm mx-1 border-0"
              onClick={() => navigate("/mypage")}
            >
              My page
            </button>
            <label tabIndex={0} className=" btn btn-ghost btn-circle ">
              <div
                className="hidden md:block indicator"
                onClick={() => navigate("/cart")}
              >
                <AiOutlineShoppingCart size={24} />
              </div>
            </label>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center text-2xl w-full bg-base-100 p-3 text-blue-300 shadow-md">
          페이지를 보시려면 로그인이 필요합니다.
        </div>
      )}
    </>
  );
};
export default Header;
