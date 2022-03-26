import axios from 'axios';
import React, { useState, useEffect } from 'react';



function BusList(props) {
    const [buslist, setBuslist] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(async () => {
        // API calls
        const { source, destination } = props.match.params;
        const url = `http://localhost:8081/list/${source}/${destination}`


        // fetch(url, { method: "GET" }) // asynchronus operations
        //     .then(resp => resp.json())
        //     .then(data => this.setState({ buslist: data })) // promise

        // axios.get(url)
        //     .then(resp => this.setState({ buslist: resp.data }))

        const resp = await axios.get(url);
        setBuslist(resp.data)
    }, [])// componentDidMount


    useEffect(() => {
        return function () {
            console.log('componentwillunmount');
            // clearInterval(timer);
        }
    }, []) // componentWillUnmount


    const handleBooking = async (data) => {
        console.log('data', data)

        // fetch('http://localhost:8081/book', {
        //     method: "POST",
        //     body: JSON.stringify(data) // payload

        // })
        //     .then(resp => resp.json())
        //     .then(data => this.setState({
        //         message: data.msg
        //     }))

        // axios.post('http://localhost:8081/book', {
        //     body: data
        // })
        //     .then(resp => this.setState({
        //         message: resp.data.msg
        //     }))

        const resp = await axios.post('http://localhost:8081/book', { body: data });
        setMessage(resp.data.msg)

    }

    const { source, destination } = props.match.params;
    return (
        <div>
            {buslist.length ? <h4 className="m-2">Showing Buses from <b>{source}</b> to <b>{destination}</b></h4> : ''}
            {message ? <p className="text-success text-center">{message}</p> : ''}
            {buslist.length ? buslist.map((bus, index) => {
                return (
                    <div className="card bg-light m-3 p-3" key={index}>
                        <h4>{bus.type}</h4>
                        <p>{bus.time}</p>
                        <div className="d-flex justify-content-between">
                            <b>${bus.price}</b>
                            <button type="button" className="btn btn-danger" onClick={() => handleBooking(bus)}>
                                Book Now
                            </button>
                        </div>
                    </div>
                )
            }) : <h4 className="text-center m-2">Currently no busses available on this route</h4>}
        </div>
    )
}

export default BusList;


// export default class BusList extends Component {
//     constructor() {
//         super();
//         this.state = {
//             buslist: [],
//             message: ''
//         }
//     }

//     // http://localhost:8081/list/:source/:destination

//     async componentDidMount() {
//         // API calls
//         const { source, destination } = this.props.match.params;
//         const url = `http://localhost:8081/list/${source}/${destination}`


//         // fetch(url, { method: "GET" }) // asynchronus operations
//         //     .then(resp => resp.json())
//         //     .then(data => this.setState({ buslist: data })) // promise

//         // axios.get(url)
//         //     .then(resp => this.setState({ buslist: resp.data }))

//         const resp = await axios.get(url);
//         this.setState({ buslist: resp.data })
//     }

//     handleBooking = async (data) => {
//         console.log('data', data)

//         // fetch('http://localhost:8081/book', {
//         //     method: "POST",
//         //     body: JSON.stringify(data) // payload

//         // })
//         //     .then(resp => resp.json())
//         //     .then(data => this.setState({
//         //         message: data.msg
//         //     }))

//         // axios.post('http://localhost:8081/book', {
//         //     body: data
//         // })
//         //     .then(resp => this.setState({
//         //         message: resp.data.msg
//         //     }))

//         const resp = await axios.post('http://localhost:8081/book', { body: data });
//         this.setState({
//             message: resp.data.msg
//         })

//     }

//     render() {
//         const { buslist, message } = this.state;
//         console.log(this.props.match.params) // Route params
//         const { source, destination } = this.props.match.params;
//         return (
//             <div>
//                 {buslist.length ? <h4 className="m-2">Showing Buses from <b>{source}</b> to <b>{destination}</b></h4> : ''}
//                 {message ? <p className="text-success text-center">{message}</p> : ''}
//                 {buslist.length ? buslist.map((bus, index) => {
//                     return (
//                         <div className="card bg-light m-3 p-3" key={index}>
//                             <h4>{bus.type}</h4>
//                             <p>{bus.time}</p>
//                             <div className="d-flex justify-content-between">
//                                 <b>${bus.price}</b>
//                                 <button type="button" className="btn btn-danger" onClick={() => this.handleBooking(bus)}>
//                                     Book Now
//                                 </button>
//                             </div>
//                         </div>
//                     )
//                 }) : <h4 className="text-center m-2">Currently no busses available on this route</h4>}
//             </div>
//         )
//     }
// }
