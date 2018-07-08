//functional component that will create input field into the new message 
//section of the page. when the enter key is pressed we are going to 
//dispatch the addMessage action passing the value of the input field

import React from 'react';
import PropTypes from 'prop-types';

const AddMessage = (props) => {
    let input

    return (
        <section id="new-message">
            <input
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        props.dispatch(input.value, 'Me')
                        input.value = ''
                    }
                }}
                type = "text"
                ref = {(node) => {
                    input = node
                }}
            />
        </section>
    )
}

AddMessage.PropTypes = {
    dispatch: PropTypes.func.isRequired
}

export default AddMessage