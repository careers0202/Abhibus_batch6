import axios from 'axios';
import React, { Component, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './Login.scss';

function Login(props) {
    const [userInfo, setUserInfo] = useState({}); // const [state, setState] = useState('')
    const [error, setError] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault(); // stops form default behaviour
        console.log('called')

        const resp = await axios.post('http://localhost:8081/login', {
            body: { ...userInfo }
        })
        console.log(resp.data.token)

        if (resp.status === 200) {
            const cookies = new Cookies();
            cookies.set('authtoken', resp.data.token, { path: '/' }); // we acn able to store data in KBs only

            // data storage limit 5MB
            localStorage.setItem('localtoken', resp.data.token)
            sessionStorage.setItem('sessiontoken', resp.data.token)

            localStorage.getItem('localtoken')
            sessionStorage.getItem('sessiontoken')

            props.history.push('/bus')

        } else {
            // this.setState({
            //     error: true
            // })
            setError(true)
        }
    }

    const handleInputData = (e) => {
        // this.setState({
        //     userInfo: {
        //         ...userInfo,
        //         [e.target.name]: e.target.value
        //     }
        // })

        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })

    }

    return (
        <div className="d-flex justify-content-center align-items-center login bg-light text-center">
            <form className="sec" onSubmit={(event) => handleSubmit(event)} autoComplete='off'>
                <h5 className="mb-4 text-primary">Login Form</h5>
                <div>
                    <input
                        type="text"
                        name="username"
                        className="form-control py-2"
                        placeholder="username"
                        onChange={(event) => handleInputData(event)}
                        autoComplete='off'
                    />
                </div>
                <div>
                    <input
                        className="form-control py-2"
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={(event) => handleInputData(event)}
                    />
                </div>
                <input
                    type="submit"
                    value="Login"
                    className="btn btn-warning w-100"
                />
                {error ? <span className="text-danger">Please enter proper credentials</span> : ''}
            </form>

        </div>
    )
}

// class Login extends Component {
//     constructor() {
//         super();
//         this.state = {
//             userInfo: {},
//             error: false,
//         }
//     }

//     handleSubmit = async (event) => {
//         event.preventDefault(); // stops form default behaviour
//         console.log('called')
//         const { userInfo } = this.state;

//         const resp = await axios.post('http://localhost:8081/login', {
//             body: { ...userInfo }
//         })
//         console.log(resp.data.token)

//         if (resp.status === 200) {
//             const cookies = new Cookies();
//             cookies.set('authtoken', resp.data.token, { path: '/' }); // we can able to store data in KBs only

//             // data storage limit 5MB
//             localStorage.setItem('localtoken', resp.data.token)
//             sessionStorage.setItem('sessiontoken', resp.data.token)

//             localStorage.getItem('localtoken')
//             sessionStorage.getItem('sessiontoken')

//             this.props.history.push('/bus')

//         } else {
//             this.setState({
//                 error: true
//             })
//         }

//         // if (userInfo.username && userInfo.password) {
//         //     this.setState({
//         //         error: false
//         //     })
//         //     // go to bus page
//         //     this.props.history.push('/bus')

//         // } else {
//         //     // error case   
//         //     this.setState({
//         //         error: true
//         //     })
//         // }
//     }

//     handleInputData = (e) => {
//         this.setState({
//             userInfo: {
//                 ...this.state.userInfo,
//                 [e.target.name]: e.target.value
//             }
//         })

//     }

//     render() {
//         const { userInfo, error } = this.state
//         console.log(userInfo)
//         return (

//             <div className="d-flex justify-content-center align-items-center login bg-light text-center">
//                 <form className="sec" onSubmit={(event) => this.handleSubmit(event)} autoComplete='off'>
//                     <h5 className="mb-4 text-primary">Login Form</h5>
//                     <div>
//                         <input
//                             type="text"
//                             name="username"
//                             className="form-control py-2"
//                             placeholder="username"
//                             onChange={(event) => this.handleInputData(event)}
//                             autoComplete='off'
//                         />
//                     </div>
//                     <div>
//                         <input
//                             className="form-control py-2"
//                             type="password"
//                             name="password"
//                             placeholder="password"
//                             onChange={(event) => this.handleInputData(event)}
//                         />
//                     </div>
//                     <input
//                         type="submit"
//                         value="Login"
//                         className="btn btn-warning w-100"
//                     />
//                     {error ? <span className="text-danger">Please enter proper credentials</span> : ''}
//                 </form>

//             </div>
//         )
//     }
// }




export default withRouter(Login);

// ?username=admin&password=admin  --- Query params


// Authenticated ----> user info
// Unathenticated ----> 

