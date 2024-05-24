import { Component } from "react";
import "./index.css";

class THingsProvided extends Component {
  render() {
    return (
      <div className="thing-provided-container">
        <h1 className="why-choose-us-heading">Things Offered By Us!</h1>
        <div>
          <div className="card-container">
            <div className="card-details">
              <h2>Detailed Study Materials</h2>
              <p>
                Our ACCA program includes meticulously curated study materials
                that cover every aspect of the syllabus. From textbooks and
                study guides to revision notes and practice questions, we
                provide all the resources you need to prepare effectively for
                your exams.
              </p>
            </div>
            <img
              src="https://res.cloudinary.com/djfbwkdh3/image/upload/v1716522479/pexels-rachel-claire-5490905_n5bmv0.jpg"
              alt="study-material"
              className="card-image"
            />
          </div>
          <hr />
          <div className="card-container">
            <div className="card-details">
              <h2>Comprehensive Mock Exams</h2>
              <p>
                Prepare for your exams with our comprehensive mock exams that
                simulate the real exam environment. These practice tests help
                you gauge your understanding, identify areas for improvement,
                and build your confidence ahead of the actual exams.
              </p>
            </div>
            <img
              src="https://res.cloudinary.com/djfbwkdh3/image/upload/v1716523133/pexels-jeswin-3380743_ujboit.jpg"
              alt="mock-exam"
              className="card-image"
            />
          </div>
          <hr />
          <div className="card-container">
            <div className="card-details">
              <h2> Up-to-Date Content</h2>
              <p>
                Stay ahead with our regularly updated course content that
                reflects the latest changes in the ACCA syllabus and industry
                trends. Our continuous updates ensure that you are learning the
                most current and relevant information.
              </p>
            </div>
            <img
              src="https://res.cloudinary.com/djfbwkdh3/image/upload/v1716523483/pexels-pixabay-159751_jvinuh.jpg"
              alt="new-content"
              className="card-image"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default THingsProvided;
