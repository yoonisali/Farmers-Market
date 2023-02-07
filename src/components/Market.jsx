import React from "react";
import PropTypes from "prop-types";

function Market(props) {
    return (
        <React.Fragment>
            <h3>{props.day} | {props.location} | {props.hours} | {props.booth} </h3>
        </React.Fragment>
    );
}

Market.propTypes = {
    day: PropTypes.number,
    location: PropTypes.string,
    hours: PropTypes.number,
    booth: PropTypes.string
};


export default Market;