import { useState, useEffect } from "react";
import { db, storage } from "../../components/Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import "./Create.css";
import { toast } from "react-toastify";
import { useContext } from "react";
import { GlobalContext } from "../../components/context/MainContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import uuid from "react-uuid";

const Create = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const date = new Date().toDateString();

  const { user } = useContext(GlobalContext);

  const cetagories = [
    "Education",
    "Programming",
    "Religion",
    "Gaming",
    "Politics",
    "Sports",
  ];

  const [blogData, setBlogData] = useState({
    title: ``,
    cetagory: ``,
    imgUrl: ``,
    description: ``,
  });

  const [file, setFile] = useState(null);

  async function handleBlogSubmit(e) {
    e.preventDefault();

    if (
      blogData.cetagory &&
      blogData.imgUrl &&
      blogData.description.length > 100
    ) {
      try {
        await addDoc(collection(db, "blogs"), {
          ...blogData,
          author: user.displayName,
          userID: user.uid,
          date: date,
          uniqueID: uuid(),
        });
        toast.success("Blog created successfully");
        navigate("/");
        setBlogData({
          title: "",
          cetagory: "",
          description: "",
          imgUrl: "",
        });
      } catch (e) {
        toast.error("Error creating blog");
      }
    }
    if (blogData.description.length < 100) {
      toast.error("Blog description must contain more words");
    }
  }

  function handleInputChange(e) {
    setBlogData({ ...blogData, [e.target.name]: `${e.target.value}` });
  }

  function handleImgSubmit(e) {
    setFile(e.target.files[0]);
  }

  function uploadImg() {
    const imgRef = ref(storage, `images/${file.name}`);

    uploadBytes(imgRef, file).then((snapshot) => {
      getDownloadURL(imgRef)
        .then((url) => {
          setBlogData({ ...blogData, imgUrl: url });
        })
        .catch((error) => {
          toast.error(error);
        });
    });
  }

  useEffect(() => {
    file && uploadImg();
  }, [file]);

  return (
    <>
      {user.uid ? (
        <section className="create-blog">
          <div className="create-wrapper">
            <h1>Create Blog</h1>
            <form onSubmit={handleBlogSubmit}>
              <input
                onChange={handleInputChange}
                type="text"
                value={blogData.title}
                name="title"
                placeholder="Title"
                required
              />
              <br />
              <div className="select">
                <select
                  value={blogData.cetagory}
                  onChange={handleInputChange}
                  name="cetagory"
                >
                  <option value="">Please select a cetagory</option>
                  {cetagories.map((cetagory, i) => (
                    <option key={i} value={cetagory}>
                      {cetagory}
                    </option>
                  ))}
                </select>
                <div className="file">
                  <input
                    onChange={handleImgSubmit}
                    type="file"
                    name="file"
                    id="file"
                    className="inputfile"
                  />
                  <label htmlFor="file">Choose a photo</label>
                </div>
              </div>
              <br />
              <textarea
                onChange={handleInputChange}
                name="description"
                placeholder="Desciption"
                value={blogData.description}
                required
              ></textarea>
              <input className="btn" type="submit" value={"Submit"} />
            </form>
          </div>
        </section>
      ) : (
        <section className="notify">
          <div className="notify-wrapper">
            <h2>Please make sure you are signed in</h2>
            <Link to={"/auth"} state={{ from: location.pathname }}>
              Sign in
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

export default Create;
