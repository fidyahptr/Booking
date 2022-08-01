import React, { Component } from 'react';
import { VCardWidgetWrapper } from './style';

const Card = ({ guest_name, property_name, check_in_date, check_out_date, arrival_time, profile_picture }) => {
  return (
    <div>
      <VCardWidgetWrapper className="isoVCardWidgetWrapper">
        <div className="isoVCardImage">
          <img src={profile_picture} alt={profile_picture} />
        </div>

        <div className="isoVCardBody">
          <h3 className="isoName">Hi, {guest_name}!</h3>
          <p className="isoDescription">Thank you for booking with Bukit Vista. Here are the details of your current booking.</p>
          <span className="isoDesgTitle">{property_name}</span>

        </div>
      </VCardWidgetWrapper>
    </div>
  );
}

export default Card;
