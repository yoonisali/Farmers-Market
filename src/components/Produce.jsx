import React from "react";
import PropTypes from "prop-types";

function Produce(props) {
    return (
        <React.Fragment>
            <h3>{props.month} | {props.selection} </h3>
            {/* {props.selection.map((produce, index) => 
                <Produce selection={produce.selection}
                        key={index}/>
            )} */}
        </React.Fragment>
    );
}

Produce.propTypes = {
    month: PropTypes.number,
    selection: PropTypes.arrayOf(PropTypes.string),
};

export default Produce;