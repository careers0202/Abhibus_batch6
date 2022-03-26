import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './Bus.scss';


class Bus extends Component {

    constructor() {
        super();
        this.state = {
            journeyData: {},
            error: false
        }
        console.log(' initialization Phase--->constructor');
        this.timer = ''; // Global variable
        // initialization phase
    }

    // componentWillMount() {
    //     console.log('Mounting Phase--->componentWillMount')
    // }

    componentDidMount() {
        console.log('Mounting Phase--->componentDidMount');
        // API calls
        let count = 0
        this.timer = setInterval(() => {
            count = count + 1
            console.log('Secs', count)
        }, 1000)
    }

    shouldComponentUpdate() {
        console.log('updating Phase--->shouldComponentUpdate');
        return true; // every state or prop update call render
    }
    componentWillUpdate() {
        console.log('updating Phase--->componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('updating Phase--->componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('Unmounting Phase--->componentWillUnmount');

        clearInterval(this.timer);
    }

    handelSubmit = (e) => {
        e.preventDefault();
        const { journeyData } = this.state;
        const { source, destination, doj } = journeyData;
        if (source && destination && doj) {
            const path = `/bus_search/${source}/${destination}/${doj}`
            this.props.history.push(path)
        } else {
            this.setState({
                error: true
            })
        }

        console.log(this.state.journeyData)
    }

    handleData = (e) => {
        console.log(e.target.value, e.target.name)
        this.setState({
            journeyData: {
                ...this.state.journeyData,
                [e.target.name]: e.target.value
            }
        })
    }
    render() {
        const { error } = this.state;
        console.log('render')
        return (
            <>
                <div className="topSection">
                    <h2 className="text-center">Book Bus Tickets</h2>
                    <div className="tabs">
                        <b>Bus</b>
                        <b>Trains</b>
                        <b>Hotels</b>
                    </div>

                    <div className="searchContainer">
                        <form onSubmit={(e) => this.handelSubmit(e)}>
                            <div>
                                <i className="fas fa-location-arrow"></i>
                                <input
                                    className="leavingInput form-control"
                                    name="source"
                                    type="text"
                                    onChange={(e) => this.handleData(e)}
                                />
                                <label>Leaving from</label>
                            </div>

                            <input type="text" name="destination" placeholder="Going to" onChange={(e) => this.handleData(e)} />
                            <input type="date" name="doj" placeholder="Date of Journey" onChange={(e) => this.handleData(e)} />
                            <input type="date" placeholder="Date of Return" />
                            <div>
                                <input className="searchBtn" type="submit" value="Search" />
                            </div>

                        </form>
                    </div>
                    {error ? <p className="text-danger text-center">Enter source and destination</p> : ''}
                </div>
                <div className="container">
                    <div className="offers">
                        <h2>AbhiBus Offers</h2>
                        <div className="offerImages">
                            <img src="https://static.abhibus.com/busgallery/offerbanners/Feb2022/01/1643654227/476x220.png"
                                alt="offers" />
                            <img src="https://static.abhibus.com/busgallery/offerbanners/Feb2022/02/1643746459/476x220.png"
                                alt="offers" />
                            <img src="https://static.abhibus.com/busgallery/offerbanners/Dec2021/26/1640460615/476x220.png"
                                alt="offers" />
                            <img src="https://static.abhibus.com/busgallery/offerbanners/Oct2021/31/1635683656/476X220.png"
                                alt="offers" />
                            <img src="https://static.abhibus.com/busgallery/offerbanners/Feb2022/01/1643694880/476X220.png"
                                alt=" offers" />
                        </div>
                    </div>
                    <div className="infoSection">
                        <div className="avatarItem">
                            <img className="avatar" src="./images/buslogo.png" alt="bus logo" />
                            <h2>1000</h2>
                            <span>ROUTES</span>
                        </div>

                        <img className="avatar" src="./images/buslogo.png" alt="bus logo" />
                        <img className="avatar" src="./images/buslogo.png" alt="bus logo" />
                        <img className="avatar" src="./images/buslogo.png" alt="bus logo" />
                        <img className="avatar" src="./images/buslogo.png" alt="bus logo" />
                        <img className="avatar" src="./images/buslogo.png" alt="bus logo" />
                    </div>
                    <div className="covidInfo row my-3 border border-dark p-3 bg-white">
                        <div className=" col-md-9">
                            <h1>COVID-19 Related Travel Advisory</h1>
                            <p>
                                AbhiBus recommends that every passenger must follow the <a href="
            https://www.abhibus.com/corona" target="_blank">Covid
                                    Safety Guidelines</a> to ensure a safe and
                                comfortable
                                travel experience during bus journeys. Strict safety protocol can ensure that we end the pandemic soon.
                                Make
                                sure you wear a double mask, use hand sanitiser and maintain strict social distancing while travelling.
                                And
                                yes,
                                look out for Safe-T Bus Operators while booking. Safe-T Bus Partners are handpicked, validated bus
                                operators
                                who
                                follow the Covid safety protocols to ensure the safety of you and your family.
                            </p>

                            <p>
                                Our travel updates summarize changes reported by various sources on bus and train transportation
                                services.
                                Consider this information as a guide only and please refer to the State-wise COVID-19 Travel Guidelines
                                in
                                India
                                links for further information on travel restrictions and news updates.

                                Follow 6 simple steps to protect yourself during Bus travel
                            </p>
                            <img src="https://static.abhibus.com/img/homepage/covid-precausion.png" alt="covid rules" />
                        </div>
                        <div className="col-md-3 d-flex align-items-center">
                            <img src="https://static.abhibus.com/img/homepage/home-2.png" width="200px" alt="travel img" />
                        </div>
                    </div>

                    <div className="faq">
                        <h1>Frequently Asked Questions on Online Bus Booking</h1>
                        <h4>Q. How do you do online bus reservation on AbhiBus?</h4>
                        <p>Ans: Booking a bus ticket online in India is easy with ABHIBUS. Simply enter the Leaving from -- Going to
                            destination details along with the date you wish to travel in the bus search option on the site. Within
                            seconds
                            you will be given a list of buses availability for your route. Select your bus that suits you best for
                            you.
                            Then
                            just follow the simple steps to the ticket booking payment process and your seat will be reserved for
                            your
                            bus
                            journey.</p>

                        <h4>Q. Do I need to create an account to book bus tickets on AbhiBus?</h4>
                        <p>Ans: No, you can book bus tickets as a guest user by providing required passenger details. However, we
                            recommend
                            you to create an account so that you get the latest information about bus availability, ticket details
                            and
                            other
                            features which will help you book faster during future transactions.
                        </p>
                    </div>

                    <div>
                        <h1>Benefits of Booking Bus Tickets Online</h1>
                        <p>
                            In this day and age of technology, offline modes of bus ticket booking are no more a preference. Online
                            ticket booking is easy, fast and hassle-free. AbhiBus ticks off all three with our easy app and website
                            navigation.

                            Booking bus tickets online with AbhiBus has solved many problems that people face while booking their
                            tickets at offline counters or travel agents. Download the AbhiBus App to see the benefits of making a
                            bus
                            ticket booking online.

                            Here's listing all the benefits of booking bus tickets online on AbhiBus
                        </p>

                        <ul>
                            <li>
                                Avoid standing in long queues at offline bus ticket counters.
                            </li>
                            <li>No more hassle of approaching travel agents.</li>
                            <li>No more hassle of approaching travel agents.</li>
                        </ul>

                    </div>
                    <div className="chatBot">
                        <img className="chatBotImg" src="./images/chat.png" alt="chatbot" />
                    </div>
                    <footer>
                        <h5>Popular Bus Routes</h5>
                        <ul>
                            <li>Hyderabad-Bangalore Buses</li>
                            <li>Pune-Shirdi Buses</li>
                        </ul>
                    </footer>

                </div>
            </>
        )
    }
}

export default withRouter(Bus);
