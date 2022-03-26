import React, { Component } from 'react';

// class Button extends Component {
//     render() {
//         console.log(this.props)
//         return (
//             <div className="my-4">
//                 <button
//                     type="button"
//                     className={`btn ${this.props.color}`}
//                     onClick={() => this.props.handleClick(this.props.name)}
//                 >
//                     {this.props.btnLabel}
//                 </button>ß
//             </div>
//         )
//     }
// }



function Button(props) {
    const { color, btnLabel, name, handleClick } = props;
    return (
        <div className="my-4">
            <button
                type="button"
                className={`btn ${color}`}
                onClick={() => handleClick(name)}
            >
                {btnLabel}
            </button>
        </div>
    )
}

export default Button;

// 1.class
// 2.Functional