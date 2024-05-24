import { Component } from "react";
import "./index.css";

class Placements extends Component {
  render() {
    return (
      <div style={{ overflow: "auto", height: "90vh" }}>
        <h1 style={{ marginLeft: "15px" }}>
          Why Our Placement Services Stand Out ?
        </h1>
        <div>
          <div className="card-container">
            <img
              src="https://res.cloudinary.com/djfbwkdh3/image/upload/v1716524258/pexels-fauxels-3183197_vvlbay.jpg"
              className="card-image"
              alt="connections"
            />
            <div>
              <h1>Strong Industry Connections</h1>
              <p>
                We have built strong relationships with leading companies in the
                accounting and finance sectors. Our extensive network includes
                multinational corporations, renowned accounting firms, and
                innovative startups, ensuring a wide range of opportunities for
                our students.
              </p>
            </div>
          </div>
          <div className="card-container">
            <div>
              <h1>Exclusive Job Portals</h1>
              <p>
                Gain access to exclusive job portals that list opportunities
                specifically for our ACCA students. These portals feature
                internships, part-time positions, and full-time roles that are
                not available to the general public, giving you a competitive
                edge in the job market.
              </p>
            </div>
            <img
              src="https://res.cloudinary.com/djfbwkdh3/image/upload/v1716524707/pexels-shkrabaanthony-4348401_jsh9yq.jpg"
              className="card-image"
              alt="jobs"
            />
          </div>
          <div className="card-container">
            <img
              src="https://res.cloudinary.com/djfbwkdh3/image/upload/v1716524897/pexels-yankrukov-4458418_bxt8fa.jpg"
              className="card-image"
              alt="alumni-networks"
            />
            <div>
              <h1>Alumni Network</h1>
              <p>
                Join our vibrant alumni network and connect with former students
                who are now established professionals in the industry. Benefit
                from their insights, advice, and connections to further your
                career.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Placements;
