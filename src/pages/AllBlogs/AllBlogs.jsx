import { useContext } from "react";
import { GlobalContext } from "../../components/context/MainContext";
import "./AllBlogs.css";

const AllBlogs = () => {
  const { blogs } = useContext(GlobalContext);

  return (
    <div>
      <h1>all blog page</h1>
    </div>
  );
};

export default AllBlogs;
