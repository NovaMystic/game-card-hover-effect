import jinxImg from "./images/img1.jpg";
import yasuoImg from "./images/img2.jpg";

export default function Cards() {
  return (
    <>
      <div className="background-container">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
      <div className="container">
        <div className="card">
          <h2>Jinx</h2>
          <p>A manic and impulsive criminal from Zaun Crest.</p>
          <span>Hover here</span>
          <div className="pic"></div>
          <button></button>
        </div>
        <div className="card card2">
          <h2>Yasuo</h2>
          <p>An Ionian of deep resolve, Yasuo is an agile swordsman.</p>
          <span>Hover here</span>
          <div className="pic"></div>
          <button></button>
        </div>
      </div>
    </>
  );
}
