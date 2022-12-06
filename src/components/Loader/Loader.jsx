import "./Loader.css";
import loader from "../../assets/img/Loading.gif";

const Loader = () => {
  return (
    <section className="loader">
      <img src={loader} alt="Loading" />
    </section>
  );
};

export default Loader;
