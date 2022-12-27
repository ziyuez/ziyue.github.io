import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resume = this.props.data.resume;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Ziyue Zhang Profile Photo"
              />
            </div>
            <div className="nine columns main-col">
              <h2>You can call me JJ!</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Let's Chat</h2>
                  <p className="address">
                    <span>Phone: {phone}</span>
                    <br />
                    <span>Email: {email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resume} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
