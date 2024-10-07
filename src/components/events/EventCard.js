import React from "react";
import { NavLink } from "react-router-dom";

import { scrollToTop } from "../footer/ScrollToTop";

const EventCard = (props) => {
  return (
    <div
      data-aos={props.event.dataAos}
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
      data-aos-delay="100"
      data-aos-anchor=".example-selector"
      data-aos-anchor-placement="top-center"
      className="col-lg-4 mb-5"
      id="myDiv"
    >
      <svg className="Path_39_ba" viewBox="0 0 471 619.705">
        <path
          className="Path_39"
          d="M 13.23033809661865 0 L 457.7696533203125 0 C 465.0766296386719 0 471 6.211597442626953 471 13.87399101257324 L 471 605.8309326171875 C 471 613.4933471679688 465.0766296386719 619.7048950195312 457.7696533203125 619.7048950195312 L 13.23033809661865 619.7048950195312 C 5.923424243927002 619.7048950195312 0 613.4933471679688 0 605.8309326171875 L 0 13.87399101257324 C 0 6.211597442626953 5.923424243927002 0 13.23033809661865 0 Z"
        ></path>
      </svg>
      <NavLink onClick={scrollToTop} to={`/events/${props.event.id}/`}>
        <img
          className="n_0_days_of_Google_Cloud_Progr img-date"
          src={props.event.imageSrc}
          alt="Event_Image"
        />
      </NavLink>
      <div className="n_0_Days_Of_Google__Cloud_Prog_bb btm-13 mt-lg-0 mt-3">
        <span className="event_name">{props.event.name}</span>
      </div>
      <div className="n_0_Days_Of_Google__Cloud_Prog_bb btm-10">
        <span>{props.event.dateAlt}</span>
      </div>
      <div className="OPEN_bc btm-11 mt-lg-3">
        <NavLink to={`/events/${props.event.id}/`}>
          <span>OPEN</span>
        </NavLink>
      </div>
      <svg className="Line_2_bd btm-18" viewBox="0 0 111.917 18.782">
        <path
          className="Line_2"
          d="M 0 0.7822184562683105 L 111.9168548583984 0"
        ></path>
      </svg>
    </div>
  );
};

export default EventCard;
