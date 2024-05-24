import { Component } from "react";
import Popup from "reactjs-popup";
import { TiTick } from "react-icons/ti";
import "./index.css";
class Home extends Component {
  state = { inputValue: "" };

  inputChanged = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div className="home-main-container">
        <h1 style={{ textAlign: "center" }}>Become ACCA in 18 Months!</h1>
        <div className="home-container">
          <div className="home-headings">
            <h1 className="home-heads">Structured Learning Path</h1>
            <p>
              Our program is structured to guide you through each stage of the
              ACCA qualification, from the Applied Knowledge exams to the
              Strategic Professional exams.
            </p>
          </div>
          <div className="home-headings">
            <h1 className="home-heads">Interactive Learning Experience</h1>
            <p>
              Engage with interactive online lessons, video lectures, and
              quizzes that make learning enjoyable and effective.
            </p>
          </div>
          <div className="home-headings">
            <h1 className="home-heads">Flexible Study Options</h1>
            <p>
              Study at your own pace with 24/7 access to course materials. Our
              online platform allows you to customize your study schedule to fit
              your lifestyle and commitments.
            </p>
          </div>
        </div>
        <h2 style={{ textAlign: "center" }}>Intrested..?</h2>
        <div className="call-back-container">
          <input
            className="mobile-number-input"
            type="text"
            placeholder="Enter Mobile Number"
            value={inputValue}
            onChange={this.inputChanged}
          />

          <Popup
            modal
            trigger={
              <button type="button" className="callback-button">
                Request A Call Back
              </button>
            }
          >
            {(close) => (
              <>
                <div className="popup-container">
                  <p>We appreciate your intrest in Indigo Learn...</p>
                  <p>Our staff will get back to you as soons as possible..</p>
                  <TiTick style={{ color: "green", fontSize: "40px" }} />
                  <button
                    type="button"
                    className="trigger-button"
                    onClick={() => close()}
                  >
                    Close
                  </button>
                </div>
              </>
            )}
          </Popup>
        </div>
      </div>
    );
  }
}

export default Home;
