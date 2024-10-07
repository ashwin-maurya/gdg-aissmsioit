import React from "react";

import Fade from "react-reveal/Fade";

import Gdsc_All from "../../../images/gdsc-all.png";

const TeamCard = (props) => {
  return (
    <Fade up>
      <div className={`col-lg-${props.member.col} col-12 teams ${props.member.margin}`}>
        <div>
          <span
            className={`Tooltip ${props.member.tooltip}`}
            data-tooltip={props.member.details}
          >
            <img
              src={props.member.image}
              className="img-fluid team-img mt-4 m-auto"
              alt={props.member.alt}
            />
          </span>
        </div>

        <h5 className="mt-4 profile-name">{props.member.name}</h5>

        <h5>{props.member.position}</h5>
        <span></span>
        <div className="social-ico-team col-lg-12">
          <a href={props.member.linkedin} target="_blank" rel="noreferrer">
            <i className="fa fa-linkedin ico-link"></i>
          </a>
          <a href={props.member.github} target="_blank" rel="noreferrer">
            <i className="fa fa-github ico-github"></i>
          </a>
          <a href={props.member.instagram} target="_blank" rel="noreferrer">
            <i className="fa fa-instagram ico-insta"></i>
          </a>
          <a href={props.member.link} target="_blank" rel="noreferrer">
            <i className="fa fa-link ico-link"></i>
          </a>
          <a
            href={props.member.profile}
            className="team-profile-link ml-1"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Gdsc_All}
              alt="gdsc_logo"
              className="team-gdsc-logo"
              style={{ display: "inline-block" }}
            />
          </a>
        </div>
      </div>
    </Fade>
  );
};

export default TeamCard;
