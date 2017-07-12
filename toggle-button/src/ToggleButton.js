import React, {Component} from 'react';

/**
 * Toggle button component
 * 
 * @class ToggleButton
 */
class ToggleButton extends Component {

    /**
     * Creates an instance of ToggleButton.
     * @param {any} props 
     */
    constructor(props) {
        super(props);
        this.state = {
            isToggled: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    /**
     * Click event handler on button 
     */
    handleClick() {
        // Basic syntax
        // this.setState((prevState, props) => {
        //     console.log('You clicked on this component.');
        //     return {
        //         isToggled: !prevState.isToggled
        //     };
        // });

        // Advanced syntax
        this.setState((prevState, props) => ({
            isToggled: !prevState.isToggled
        }));

        // Regular function
        // this.setState(function (prevState, props) {
        //     console.log('You clicked on this component.');
        //     return {
        //         isToggled: !prevState.isToggled
        //     };
        // });
    }


    /**
     * Render this component to UI
     */
    render()
    {
        console.log('render lai roi nhe.');
        return (
            <button className="btn btn-warning" onClick={this.handleClick}>
                {this.state.isToggled ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default ToggleButton;