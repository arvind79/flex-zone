import { FaCrown } from "react-icons/fa";
import HeaderImage from "../../assets/images/header_bg_4.jpg";
import { plans } from "../../data";

import Header from "../../components/Header";
import Card from "../../UI/Card";

import "./plans.css";

const Plans = () => {
  return (
    <>
      <Header title={"Membership Plans"} image={HeaderImage}>
        <p>
          Looking for a gym membership with the staff, tools and services needed
          to crush your health goals? say hello to Shape City.
        </p>
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {plans.map(({ id, name, desc, price, features }) => {
            return (
              <Card className="plan__card" key={id}>
                <span className="membership__icon">
                  <FaCrown />
                </span>
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`₹${price}`}</h1>
                <h2>/mo</h2>
                <h4>Features</h4>
                {features.map(({ feature, available }, index) => {
                  return (
                    <p className={!available ? "disabled" : ""} key={index}>
                      {feature}
                    </p>
                  );
                })}

                {/* choose button */}
                <button className="btn lg">Choose Plan</button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Plans;
