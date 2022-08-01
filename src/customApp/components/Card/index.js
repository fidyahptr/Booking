import React from 'react';
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
          <table>
            <tr>
              <td>Property Name</td>
              <td>:</td>
              <td>{property_name}</td>
            </tr>
            <tr>
              <td>Check in date</td>
              <td>:</td>
              <td>{check_in_date}</td>
            </tr>
            <tr>
              <td>Check out date</td>
              <td>:</td>
              <td>{check_out_date}</td>
            </tr>
            <tr>
              <td>Arrival Time</td>
              <td>:</td>
              <td>{arrival_time ? arrival_time : '--:-- (Please set your arrival time)'}</td>
            </tr>
          </table>
        </div>
      </VCardWidgetWrapper>
    </div>
  );
}

export default Card;
