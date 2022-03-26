import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { Component } from 'react'
import Cookies from 'universal-cookie';

export default class Mybookings extends Component {

    constructor() {
        super();
        this.state = {
            bookings: [],
            error: false,
            msg: ''
        }
    }

    async componentDidMount() {
        const cookies = new Cookies()
        const resp = await axios.get('http://localhost:8081/mybookings', {
            headers: {
                token: cookies.get('authtoken')
            }
        });

        if (resp.status === 200) {
            this.setState({
                bookings: resp.data
            })

        } else {
            this.setState({
                error: true
            })
        }

    }

    handleCancel = async (bookingid) => {
        const response = await axios.delete(`http://localhost:8081/ticketdelete/${bookingid}`);
        console.log({ response })
        this.setState({
            bookings: response.data.data,
            msg: response.data.msg
        })
    }

    render() {
        const { error, bookings, msg } = this.state
        return (
            <div className="container">
                {msg ? <h5 className="text-center text-success my-2">{msg}</h5> : ''}
                {error ? <div className="text-center m-4">
                    <h4 className="text-danger">Please login to see the bookings</h4>
                    <Link to='/'>Go to Login</Link>
                </div> : ''}
                {bookings.map((item, index) => {
                    return (
                        <div className="card border m-4 p-4" key={index}>
                            <h4>Ticket Number:{item.bookingid}</h4>
                            <p>Travel:{item.type}</p>
                            <p>Timings:{item.time}</p>
                            <button type="button" className="btn btn-danger w-50" onClick={() => this.handleCancel(item.bookingid)}>Cancel</button>
                        </div>)
                })}
            </div>
        )
    }
}
