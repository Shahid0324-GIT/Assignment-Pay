import { peopleOpinion } from "../../data";

const Opinion = () => (
  <>
    <div className="review-card-container">
      {peopleOpinion.map((item) => {
        const { id, name, alt, img, review } = item;
        return (
          <div className="card-container" key={id}>
            <img src={img} alt={alt} className="card-image" />
            <div className="review-text">
              <h5 className="review-name">{name}</h5>
              <p className="review-para">{review}</p>
            </div>
          </div>
        );
      })}
    </div>

    <div className="review-about-container">
      <h1 className="review-about-head">
        tropical adventure <br />
        <span className="review-about-head-1">for students</span>
      </h1>
      <p className="review-about-para">
        student tropical vacation: relax and recharge
      </p>
      <ul className="review-about-list-container">
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </ul>
      <button type="button" className="assignment-btn review-btn">
        explore more
      </button>
    </div>
  </>
);

export default Opinion;
