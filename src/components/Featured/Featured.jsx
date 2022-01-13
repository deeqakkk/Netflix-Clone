import { FaInfoCircle, FaRegPlayCircle } from "react-icons/fa";
import "./featured.scss";

export default function Featured({type}) {
  return (
    <div className="featured">
    {type &&(
      <div className="category">
      <span>{type==="movie"?"Movies":"Series"}</span>
      <select name="genre" id="genre">
        <option>Genre</option>
        <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
      </select>
      </div>
    )}
      <img
        width={"100%"}
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="info">
        <img
          src="https://cdn.pixabay.com/photo/2020/12/16/21/58/tv-5837826_960_720.jpg"
          alt=""
        />
        <span className="desc">
          loren is askdjflksdjflkas dfjklsjd fl sjdflkajsdf; jaldkfjasdkl f
          loren is askdjflksdjflkas dfjklsjd fl sjdflkajsdf; jaldkfjasdkl f
          loren is askdjflksdjflkas dfjklsjd fl sjdflkajsdf; jaldkfjasdkl f
          loren is askdjflksdjflkas dfjklsjd fl sjdflkajsdf; jaldkfjasdk; f{" "}
        </span>{" "}
        <div className="buttons">
          <button className="play">
            {" "}
            <FaRegPlayCircle /> <span> Play </span>
          </button>
          <button className="more">
            {" "}
            <FaInfoCircle /> <span> Info </span>
          </button>
        </div>{" "}
      </div>{" "}
    </div>
  );
}
