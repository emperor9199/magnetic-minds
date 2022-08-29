import React from "react";
import "./ServiceCards.css";
import depressionImg from "../../assets/ServiceCards/depression.jpg";
import corporateImg from "../../assets/ServiceCards/corporate.jpg";
import relationshipImg from "../../assets/ServiceCards/relationship.jpg";
import angerImg from "../../assets/ServiceCards/anger.jpg";
import sportsImg from "../../assets/ServiceCards/sports.jpg";

const ServiceCards = () => {
  return (
    <div class="cards">
      <div class="card">
        <img src={depressionImg} />
        <h3>Depression</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          eum perspiciatis. Atque facere officia itaque molestiae voluptate
          quasi
        </p>
      </div>
      <div class="card">
        <img src={corporateImg} />
        <h3>Corporate</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          eum perspiciatis. Atque facere officia itaque molestiae voluptate
          quasi
        </p>
      </div>
      <div class="card">
        <img src={relationshipImg} />
        <h3>Relationship</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          eum perspiciatis. Atque facere officia itaque molestiae voluptate
          quasi
        </p>
      </div>
      <div class="card">
        <img src={angerImg} />
        <h3>Anger</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          eum perspiciatis. Atque facere officia itaque molestiae voluptate
          quasi
        </p>
      </div>
      <div class="card">
        <img src={sportsImg} />
        <h3>Sports</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          eum perspiciatis. Atque facere officia itaque molestiae voluptate
          quasi
        </p>
      </div>
      {/* <div class="card">
        <h2>
          <a href="#">Title</a>
        </h2>
        <p>Some article description stuff.</p>
      </div> */}
    </div>
  );
};

export default ServiceCards;
