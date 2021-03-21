import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { moveCar } from './redux/actionCreators';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

function Cars({
  redCar, blueCar, yellowCar, moveCar
}) {
  return (
    <div>
      <div>
        <img className={redCar ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
        <button type="button" onClick={() => moveCar('red', !redCar)}>Move</button>
      </div>
      <div>
        <img className={blueCar ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
        <button type="button" onClick={() => moveCar('blue', !blueCar)}>Move</button>
      </div>
      <div>
        <img className={yellowCar ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
        <button type="button" onClick={() => moveCar('yellow', !yellowCar)}>Move</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
	redCar: state.carReducer.cars.red,
	blueCar: state.carReducer.cars.blue,
	yellowCar: state.carReducer.cars.yellow
})

const mapDispatchToProps = (dispatch) => ({
  moveCar: (car, side) => dispatch(moveCar(car, side))
});

Cars.propTypes = {
  moveCar: PropTypes.func.isRequired,
  blueCar: PropTypes.bool.isRequired,
  redCar: PropTypes.bool.isRequired,
  yellowCar: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
