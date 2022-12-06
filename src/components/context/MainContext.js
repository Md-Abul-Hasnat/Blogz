import { useState, createContext } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../Firebase";

export const GlobalContext = createContext();

const MainContext = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "blogs"), (snapshot) => {
      const allBlogs = [];
      snapshot.docs.forEach((doc) => allBlogs.push(doc.data()));
      setBlogs(allBlogs);
      setLoading(false);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <GlobalContext.Provider value={{ setUser, user, blogs, loading }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default MainContext;
