import axios from 'axios';
import GoogleMapReact from 'google-map-react';
import React, { useRef, useState, useEffect, useCallback } from 'react';

import { Button } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import './profile.css';

// eslint-disable-next-line react/prop-types
const MapMarker = ({ text }) => (
  <div style={{ color: 'red', fontWeight: 'bold' }}>
    {' '}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="#666666"
      className="bi bi-geo-alt-fill"
      viewBox="0 0 16 16"
    >
      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
    </svg>
  </div>
);

const Profile = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const [userDatas, setUserDatas] = useState({});
  const [userLocation, setUserLocation] = useState(null);
  const [geoLocation, setGeoLocation] = useState('');

  const [latitudee, setLatitude] = useState('');
  const [longitudee, setLongitude] = useState('');
  const { data } = userData;
  const [, setMap] = useState(null);
  const mapRef = useRef(null);
  const [pharmacyInputs, setPharmacyInputs] = useState({
    imageUrl: 'https://cdn2.iconfinder.com/data/icons/website-icons/512/User_Avatar-512.png',
    type: '',
    adress: '',
    PHname: '',
  });
  console.log(pharmacyInputs);

  const handlePharmacyChange = (e) => {
    const { name, value } = e.target;
    setPharmacyInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const getUserLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('User Location:', position.coords);
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
        setLatitude(latitude);
        setLongitude(longitude);
        setGeoLocation(`${latitude}, ${longitude}`);
        if (mapRef.current) {
          mapRef.current.panTo({ lat: latitude, lng: longitude });
        }
      },
      (error) => {
        console.error('Error getting user location:', error.message);
      }
    );
  }, []);

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  const onMapLoaded = ({ map }) => {
    setMap(map);
    mapRef.current = map; // Store the map reference in the ref
  };

  const fetchUserData = useCallback(async () => {
    const response = await axios.get(`http://127.0.0.1:1128/api/user/getOneById/${data.id}`);
    setUserDatas(response?.data);
  }, [data.id]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  const UpdateUserData = async (PharmacyId, latitude, longitude) => {
    try {
      await axios.patch(`http://127.0.0.1:1128/api/pharmacy/updateLangLat/${PharmacyId}`, {
        ...pharmacyInputs,
        latitude,
        longitude,
      });
      fetchUserData();
    } catch (error) {
      console.error('Error updating user data:', error);
      // Handle the error, e.g., show an error message to the user
    }
  };

  return (
    <div
      style={{
        padding: '0rem 1.5rem',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
      }}
    >
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
            src={userDatas?.Pharmacy?.imageUrl}
            alt=""
            style={{ height: '10rem', objectFit: 'cover' }}
          />
          <div className="profile_info">
            <h2>Profile Details</h2>
            <div className="profile_info_details">
              <p>
                <span>User Name: </span>
                {userDatas?.username}
              </p>
              <p>
                <span>Email:</span> {userDatas?.email}
              </p>
              <p>
                <span>Address:</span> {userDatas?.Pharmacy?.adress}
              </p>
              <p>
                <span>Pharmacy Name:</span> {userDatas?.Pharmacy?.PHname}
              </p>
              <p>
                <span>Pharmacy Type:</span> {userDatas?.Pharmacy?.type}
              </p>
            </div>
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
            justifyContent: 'flex-start',
            gap: '1.5rem',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
            <h2 style={{ margin: '0px' }}>Update Profile Detail</h2>
            <div className="profile_inputs">
              <TextField
                id="outlined-basic"
                label="Pharmacy Name"
                variant="outlined"
                name="PHname"
                value={pharmacyInputs.PHname}
                onChange={handlePharmacyChange}
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Pharmacy Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={pharmacyInputs.type}
                  name="type"
                  label="Pharmacy Type"
                  onChange={handlePharmacyChange}
                >
                  <MenuItem value="day">Day</MenuItem>
                  <MenuItem value="night">Night</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="outlined-basic"
                label="Geo Location"
                variant="outlined"
                value={geoLocation}
                focused
              />
            </div>
            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              name="adress"
              value={pharmacyInputs.adress}
              onChange={handlePharmacyChange}
            />
            <Button
              style={{ width: '10rem', backgroundColor: '#212B36' }}
              size="large"
              variant="contained"
              onClick={() => {
                UpdateUserData(data.Pharmacy.id, data.id, latitudee, longitudee);
              }}
            >
              Update Profile
            </Button>
          </div>
          <div className="box_location" style={{ height: '63.5vh', width: '80%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyA6k67mLz5qFbAOpq2zx1GBX9gXqNBeS-Y' }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
              onGoogleApiLoaded={({ map: loadedMap }) => onMapLoaded({ map: loadedMap })}
            >
              {userLocation && (
                <MapMarker lat={userLocation.lat} lng={userLocation.lng} text="My Marker" />
              )}
            </GoogleMapReact>
            <div
              className="location"
              onClick={() => getUserLocation()}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  getUserLocation();
                }
              }}
              role="button"
              type="button"
              tabIndex={0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#666666"
                className="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
