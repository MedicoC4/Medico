// import axios from 'axios'
import React from 'react';

import TextField from '@mui/material/TextField';

import './profile.css';

const Profile = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const { data } = userData;
  console.log(data);

  return (
    <div style={{ padding: '0rem 1.5rem', width: '100%' }}>
      <h1>Profile</h1>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
        <div
          style={{
            backgroundColor: 'white',
            width: '30%',
            height: '70vh',
            borderRadius: '16px',
            boxShadow:
              'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px',
            padding: '3rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <img
            src={data.Pharmacy.imageUrl}
            alt=""
            style={{ height: '10rem', objectFit: 'cover' }}
          />
          <div className="profile_info">
            <h2>Profile Details</h2>
            <p>
              <span>User Name: </span>
              {data.username}
            </p>
            <p>
              <span>Email:</span> {data.email}
            </p>
            <p>
              <span>Adress:</span> {data.Pharmacy.adress}
            </p>
            <p>
              <span>Pharmacy Name:</span> {data.Pharmacy.PHname}
            </p>
            <p>
              <span>Pharmacy Type:</span> {data.Pharmacy.type}
            </p>
          </div>
        </div>{' '}
        <div
          style={{
            backgroundColor: 'white',
            width: '70%',
            height: '70vh',
            borderRadius: '16px',
            padding: '1.5rem',
            boxShadow:
              'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.9rem' }}>
            <h2 style={{ margin: '0px' }}>Update Profile Detail</h2>
            <div className="profile_inputs">
              <TextField
                id="outlined-basic"
                label="User Name"
                variant="outlined"
                // name="productName"
                // onChange={handleInputChange}
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                // name="productName"
                // onChange={handleInputChange}
              />
              <TextField
                id="outlined-basic"
                label="Pharmacy Name"
                variant="outlined"
                // name="productName"
                // onChange={handleInputChange}
              />
              <TextField
                id="outlined-basic"
                label="Pharmacy Type"
                variant="outlined"
                // name="productName"
                // onChange={handleInputChange}
              />
            </div>
            <TextField
              id="outlined-basic"
              label="Adress"
              variant="outlined"
              style={{ width: '100%' }}
              // name="productName"
              // onChange={handleInputChange}
            />
          </div>
          <div>
            <h2 style={{ margin: '5px', paddingTop: '1rem', paddingBottom: '1rem' }}>
              Update Password
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <TextField
                id="outlined-basic"
                label="Current Password"
                variant="outlined"
                style={{ width: '100%' }}
                // name="productName"
                // onChange={handleInputChange}
              />
              <TextField
                id="outlined-basic"
                label="New Password"
                variant="outlined"
                style={{ width: '100%' }}
                // name="productName"
                // onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
