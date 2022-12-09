import { useState, createContext } from "react";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const GlobalContext = createContext();

const MainContext = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );

  const [blogs, setBlogs] = useState([]);
  const [blogData, setBlogData] = useState({
    title: ``,
    cetagory: ``,
    imgUrl: ``,
    description: ``,
  });
  const [file, setFile] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [blogId, setBlogId] = useState(null);
  const [isDelete, setIsDelete] = useState({ value: false, id: "" });

  function updateBlog(id) {
    setBlogId(id);
    setIsUpdate(true);
    navigate("/create");
    const { title, cetagory, description, imgUrl } = blogs.find(
      (blog) => blog.id === id
    );
    setBlogData({
      title,
      cetagory,
      imgUrl,
      description,
    });
  }

  async function handleDelete(id) {
    await deleteDoc(doc(db, "blogs", `${id}`));
    setIsDelete({ value: false, id: "" });
    toast.success("Blog deleted");
  }

  function reduceText(text, length) {
    return text.slice(0, length);
  }

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "blogs"), (snapshot) => {
      const allBlogs = [];
      snapshot.docs.forEach((doc) => {
        allBlogs.push({ id: doc.id, ...doc.data() });
      });
      setBlogs(allBlogs);
      setLoading(false);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        reduceText,
        setUser,
        setBlogData,
        setFile,
        updateBlog,
        setIsUpdate,
        setBlogId,
        handleDelete,
        setIsDelete,
        setBlogs,
        isDelete,
        user,
        blogs,
        loading,
        blogData,
        file,
        isUpdate,
        blogId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default MainContext;
