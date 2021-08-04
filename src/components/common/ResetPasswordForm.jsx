import React from 'react'
import { Link, useHistory } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Axios from 'axios';
import '../../assets/css/Authentication/loginForm.css';
import { useState } from 'react';


export default function ResetPasswordForm() {

    const [userpasswordReg, setUserpasswordReg] = useState("");
    const [conpasswordReg, setConpasswordReg] = useState("");
    const [PassWarningReg, setPassWarningReg] = useState("");
    const [btnEnable, setbtnEnable] = useState("true");

    let history = useHistory();

    const passwordReset = (e) => {
        e.preventDefault();
        Axios.post(`${process.env.REACT_APP_BASE_URL}/reset-password`, {
            userPassword: conpasswordReg,

        }).then((response) => {
            console.log(response);
            if (response.data.status) {
                history.push("/sign-in");
                console.log("password reset successfully");
            } else {
                history.push("/reset-password");
                console.log("password reset unsuccessfully");
            }
        }).catch((error) => {
            console.log("this is response" + error);

        });


    };

    const checkPassword = (e) => {
        e.preventDefault();
        const conPass = e.target.value;
        // setbtnEnable(false)
        if (userpasswordReg != conPass) {
            setPassWarningReg("Invalid Confirm Password");
            setbtnEnable(true)
        } else {
            setPassWarningReg("")
            setConpasswordReg(conPass);
            setbtnEnable(false)
        }
    }


    return (

        <form className="col" onSubmit={(e) => { passwordReset(e) }} method="POST">
            <div className="frmLogin">
                <div className="grpLogin">
                    <div className="form-group my-4">
                        <h3>Rest Password</h3>

                    </div>
                    <div className="form-group">

                        <input type="password" name="password" className="form-control " placeholder="Password" required onChange={(e) => { setUserpasswordReg(e.target.value); }} />
                    </div>
                    <div className="form-group">

                        <input type="password" name="confirmPassword" className="form-control " placeholder="Confirm password" required onChange={(e) => { checkPassword(e); }} />
                    </div>
                    <div>
                        <p style={{ color: "red", float: "left", fontSize: 13, marginTop: 17 }}>{PassWarningReg}</p>
                    </div>
                    <button type="submit" className="submitbtn" disabled={btnEnable} >Sign Up</button>

                    <p className="forgot-password ">
                        Don't Want to change<Link className="nav-link" to="/sign-in">sign in</Link>
                    </p>
                    <hr />
                    <div className="signIcons">
                        <FaFacebook />
                        <FaInstagram /><FaTwitter /><FaLinkedinIn />

                    </div>

                </div>
            </div>

        </form >

    )
}
