import React from "react";
import "./ClubLink.css";
import "./Clubs";
import "./ClubLink.css";
import { Link } from "react-router-dom";
const ClubLink = ({ clubsInfo, onBack }) => {
  if (!clubsInfo) {
    return <div> Error: Clubs data not found.</div>;
  }
  return (
    <>
      <div className="main">
        <section className="introduction">
          <button className="back-btn" onClick={onBack}>
            Back
          </button>
        </section>

        <section className="about-section">
          <div className="about-img">
            <img
              className="about-images"
              src={clubsInfo.image}
              alt={clubsInfo.name}
            />
          </div>
          <div className="title-name">
            <h1 className="outer-title">{clubsInfo.name}</h1>
            <div className="intro-content">
              <p>{clubsInfo.intro}</p>
            </div>
          </div>
        </section>

        <section className="members">
          <div className="mem-title">
            <h1>Members</h1>
          </div>
          <div className="member-img">
            <Link to={"/profile/Pragati"} style={{textDecoration:"none"}}>
              <div className="image-section">
                <img
                  src={clubsInfo.image}
                  alt="MemberImage"
                  className="mem-img"
                />
                <div className="image-title">Pragati</div>
              </div>
            </Link>

            <Link to={"/profile/Shubha"} style={{textDecoration:"none"}}>
              <div className="image-section">
                <img
                  src={clubsInfo.image}
                  alt="MemberImage"
                  className="mem-img"
                />
                <div className="image-title">Shubha</div>
              </div>
            </Link>
            <Link to={"/profile/Mohini"} style={{textDecoration:"none"}}>
              <div className="image-section">
                <img
                  src={clubsInfo.image}
                  alt="MemberImage"
                  className="mem-img"
                />
                <div className="image-title">Mohini</div>
              </div>
            </Link>
            <Link to={"/profile/Shweta"} style={{textDecoration:"none"}}>
              <div className="image-section">
                <img
                  src={clubsInfo.image}
                  alt="MemberImage"
                  className="mem-img"
                />
                <div className="image-title">Shweta</div>
              </div>
            </Link>
            <Link to={"/profile/John"} style={{textDecoration:"none"}}>
              <div className="image-section">
                <img
                  src={clubsInfo.image}
                  alt="MemberImage"
                  className="mem-img"
                />
                <div className="image-title">John</div>
              </div>
            </Link>
            <Link to={"/profile/admin5"} style={{textDecoration:"none"}}>
              <div className="image-section">
                <img
                  src={clubsInfo.image}
                  alt="MemberImage"
                  className="mem-img"
                />
                <div className="image-title">Admin</div>
              </div>
            </Link>
          </div>
        </section>

        <section className="contact-info">
          <div className="contact-card-main">
            <div className="contact-title">Industry</div>
            <div className="contact-content">
              <p>{clubsInfo.industry}</p>
            </div>
          </div>

          <div className="contact-card-main">
            <div className="contact-title">Company size:</div>
            <div className="contact-content">{clubsInfo.size}</div>
          </div>

          <div className="contact-card-main">
            <div className="contact-title">Headquaters</div>
            <div className="contact-content">{clubsInfo.headquater}</div>
          </div>
          <hr />

          <div className="contact-card-main">
            <div className="contact-title">Founded</div>
            <div className="contact-content">{clubsInfo.Founded}</div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ClubLink;
