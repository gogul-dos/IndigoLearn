import { Component } from "react";
import "./index.css";

class Eligibility extends Component {
  render() {
    return (
      <div>
        <h1 className="why-choose-us-heading">Check Your Eligibility</h1>
        <div>
          <div className="elible-points-list">
            <ul className="unordered-eligible-list">
              <li className="eligible-item">
                12th Grade (or equivalent): Completion of your 12th-grade
                education with a minimum of 65% in Mathematics/Accounts and
                English, and at least 50% in other subjects.
              </li>
              <li className="eligible-item">
                A bachelor’s degree from a recognized institution in any
                discipline. Accounting or finance degrees may provide exemptions
                from some ACCA exams.
              </li>
              <li className="eligible-item">
                English Proficiency Tests: Tests like IELTS, TOEFL, or
                equivalent may be required if your prior education was not in
                English.
              </li>
              <li
                className="eligible-item"
                style={{ color: "green", fontWeight: "bold" }}
              >
                If you meet the eligibility criteria, you are ready to take the
                next step towards becoming a certified chartered accountant. Our
                program offers comprehensive support, flexible learning options,
                and expert guidance to help you succeed.
              </li>
            </ul>
            <img
              src="https://res.cloudinary.com/djfbwkdh3/image/upload/v1716518592/240_F_693425646_bsh1SwZr6tiOVXK3wdeShUtY9lstJ5Ni_vtymhf.jpg"
              className="eligible-image"
              alt="eligible?"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Eligibility;
