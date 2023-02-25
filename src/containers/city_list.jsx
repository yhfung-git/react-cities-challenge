import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { setCities } from '../actions';
import City from './city';

class CityList extends Component {
  componentDidMount() {
    this.props.setCities();
  }

  renderList = () => {
    return this.props.cities.map((city, index) =>
      <City
        city={city}
        key={index}
      />
    )
  }

  render() {
    return (
      <div className="cities">
        { this.renderList() }
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

function mapStateToProps(state){
  return {
    cities: state.cities
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
