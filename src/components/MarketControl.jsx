import React from 'react';
import MarketList from './MarketList';
import ProduceList from './ProduceList';

class MarketControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: 0
        };
    }

    handleClick = () => {
        if (this.state.formVisibleOnPage === 6) {
            this.setState({formVisibleOnPage: 0})
        } else {
            this.setState(prevState => ({
                formVisibleOnPage: prevState.formVisibleOnPage + 1
            }));
        }   
    }

    render(props) {
        let currentlyVisibleState = null;
        let buttonText = null;
        if (this.state.formVisibleOnPage === 1) {
            currentlyVisibleState = <h3><strong><h3>Monday | Pioneer Courthouse Square | 10:00am - 2:00pm | 7C</h3></strong></h3>
            buttonText = "See market schedule for Tuesday!"
        } else if (this.state.formVisibleOnPage === 2) {
            currentlyVisibleState = <h3><strong><h3>Tuesday | Hillsboro | 5:00pm - 8:00pm | 1F</h3></strong></h3>
            buttonText = "See market schedule for Wednesday!"
        } else if (this.state.formVisibleOnPage === 3) {
            currentlyVisibleState =  <h3><strong><h3>Wednesday | Shemanski Park | 10:00am - 2:00pm  | 3E</h3></strong></h3>
            buttonText = "See market schedule for Thursday!"
        } else if (this.state.formVisibleOnPage === 4) {
            currentlyVisibleState = <h3><strong><h3>Thursday | Northwest Portland | 2:00pm - 6:00pm | 6D</h3></strong></h3>
            buttonText = "See market schedule for Saturday!"
        } else if (this.state.formVisibleOnPage === 5) {
            currentlyVisibleState = <h3><strong><h3>Saturday | Beaverton | 10:00am - 1:30pm | 9G</h3></strong></h3>
            buttonText = "See market schedule for Sunday!"
        } else if (this.state.formVisibleOnPage === 6) {
            currentlyVisibleState = <h3><strong><h3>Sunday | Lents International  | 9:00am - 2:00pm | 4A</h3></strong></h3>
            buttonText = "Back Home!"
        } else {
            currentlyVisibleState = <><MarketList /><ProduceList /></>
            buttonText = "See Daily Market Schedule!";
        }
        return (
            <React.Fragment>
                {currentlyVisibleState}
                <button onClick={this.handleClick}>{buttonText}</button>
            </React.Fragment>
        );
    }

}

export default MarketControl;