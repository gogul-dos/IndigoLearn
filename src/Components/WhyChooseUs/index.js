import { Component } from "react";
import { GrUserExpert } from "react-icons/gr";
import { MdGroup } from "react-icons/md";
import { GrAchievement } from "react-icons/gr";
import "./index.css";

class WhyChooseUs extends Component {
  render() {
    return (
      <div>
        <h1 className="why-choose-us-heading">Why Choose Us</h1>
        <div className="why-choose-items-container">
          <div className="why-choose-items">
            <h1>Expert Faculty</h1>
            <GrUserExpert style={{ height: "50px", width: "50px" }} />
            <p>
              Our team of experienced tutors comprises industry professionals
              and subject matter experts who are dedicated to your success. With
              their extensive knowledge and practical insights, they provide
              engaging and effective instruction that prepares you for the
              challenges of the ACCA qualification.
            </p>
          </div>
          <div className="why-choose-items">
            <h1>Personalized Support</h1>
            <MdGroup style={{ height: "50px", width: "50px" }} />
            <p>
              Your success is our priority, and we're committed to supporting
              you every step of the way. Our dedicated support team is here to
              answer your questions, provide guidance, and offer assistance
              whenever you need it. With personalized attention and support,
              you'll feel confident and motivated to achieve your goals.
            </p>
          </div>
          <div className="why-choose-items">
            <h1>Proven Track Record</h1>
            <GrAchievement style={{ height: "50px", width: "50px" }} />
            <p>
              With a proven track record of success, we have helped countless
              students achieve their ACCA qualification and advance their
              careers in accounting and finance. Our alumni speak to the quality
              of our program and the impact it has had on their professional
              growth and development.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default WhyChooseUs;
