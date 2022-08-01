import React, { useState, useEffect } from "react";
import axios from 'axios';
import LayoutContentWrapper from "../../components/utility/layoutWrapper.js";
import LayoutContent from "../../components/utility/layoutContent";
import Input from '../../components/uielements/input';
import Button from '../../components/uielements/button';
import IntlMessages from "../../components/utility/intlMessages";
import Card from '../components/Card';
import { Form } from 'antd';

const BlankPage = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState('');
  const [input, setInput] = useState('');
  const [submit, setSubmit] = useState(false);
  const [update, setUpdate] = useState('');

  // get data booking
  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`https://bv-online-assessment.herokuapp.com/api/bookings`)
        .then(response => setData(response.data))
        .catch(err => console.log(err));
    };
    getData();
  }, []);

  const handleChange = e => {
    const result = e.target.value.toUpperCase();
    setInput(result);
  };

  const handleUpdate = e => {
    setUpdate(e.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    // search input
    const search = () => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].booking_code === input) {
          return data[i];
        }
      }
      return false;
    }
    let find = search();
    setData2(find)
    setSubmit(true);
  };

  function updatePost() {
    axios
      .put(`https://bv-online-assessment.herokuapp.com/api/bookings/${input}/update-eta`, {
        booking_code: input,
        arrival_time: update
      })
      .then((response) => {
        setData2(response.data);
        console.log(response.data);

      });
  }

  return (
    <div>
      <LayoutContentWrapper style={{ height: "100vh" }}>
        <LayoutContent>
          <Form onSubmit={handleSubmit}>
            <IntlMessages id="text.bookingCode" />

            <Input placeholder="KBU2127" name="kode" value={input} onChange={handleChange} pattern="[A-Z0-9]+"/>
            <Button type="primary" htmlType="submit">
              Search
          </Button>
          </Form>
          {submit && (
            data2 ? (
              <div>
                <Card guest_name={data2.guest_name} property_name={data2.property_name} check_in_date={data2.check_in_date} check_out_date={data2.check_out_date} arrival_time={data2.arrival_time} profile_picture={data2.profile_picture} />
                <label for="appt">Choose a time for your meeting:</label>

                <input type="time" id="appt" name="appt" value={update} onChange={handleUpdate} />

                <small>Office hours are 9am to 6pm</small>
                <button onClick={updatePost}>Update Post</button>
              </div>
            ) : (
                <div>
                  <p>Tidak ada Kode Booking</p>
                </div>
              )

          )}
        </LayoutContent>
      </LayoutContentWrapper>
    </div>
  );
}

export default BlankPage;