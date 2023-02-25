// TODO: add and export your own actions
// import cities from '../data/cities';

// export function setCities() {
//   return {
//     type: 'SET_CITIES',
//     payload: cities
//   }
// }

export const SET_ACTIVE_CITY = "SET_ACTIVE_CITY";
export function setActiveCity(city) {
  return {
    type: SET_ACTIVE_CITY,
    payload: city
  }
}

export const SET_CITIES = "SET_CITIES";
export function setCities() {
  const promise = fetch('https://raw.githubusercontent.com/yhfung-git/react-cities-json/main/cities.json')
  .then(response => response.json());

  return {
    type: SET_CITIES,
    payload: promise
  };
}
