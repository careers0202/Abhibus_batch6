import React, { Component } from 'react'
import './card.css';

class card extends Component {
    render() {
        console.log(this.props)
        // this.props = {
        //     studentInfo: student1,
        //     studentInfo1:student2
        // }
        const { studentInfo, title } = this.props;
        return (
            <div>
                <div className="card">
                    <b>{title}:</b>
                    <h4>My Name is: {studentInfo.name}</h4>
                    <p>Training Name is: {studentInfo.training}</p>
                    <p>Institute Name: {studentInfo.institute}</p>
                </div>
            </div>
        )
    }
}

export default card;