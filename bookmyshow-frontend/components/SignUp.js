"use client";
import React, { useState } from "react";
import Input from "./sharedComponents/Input";
import { useRouter } from 'next/navigation';

const SignUp = ({

}) => {

    const router = useRouter();

    const [username,setUsername]= useState("");
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Handling functions for each input state

    const handleUsernameChange= (value)=>{
        setUsername(value);
    }

    const handlePhoneNumberChange = (value) => {
        let parsedValue = Number(value);
        if(parsedValue==0)parsedValue=null;
        setPhoneNumber(parsedValue);
    }

    const handleEmailChange = (value) => {
        setEmail(value);
    }

    const handlePasswordChange = (value) => {
        setPassword(value);
    }

    const handleConfirmPasswordChange = (value) => {
        setConfirmPassword(value);
    }

    function validateEmail(email) {
        // Regular expression to validate email format
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    const makeTheCall = async (url, body) => {
        let response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return response;
    }

    const handleTheSubmit = async (event) => {
        event.preventDefault();
        try {
            if (phoneNumber.toString().length != 10) {   //phone number 10 digit ka hona chahiye 
                throw new Error('Please put 10 digit "Phone Number"!')
            }
            else if (password !== confirmPassword) {
                throw new Error('Passwords do not match!');
            }
            else if (!validateEmail(email)) {
                throw new Error('please enter a "valid email"!!')
            }

        } catch (error) {
            alert(error.message);
            return; // Stop further processing if there's an error
        }

        let url = 'http://127.0.0.1:3000/' + "users/signup/";
        let body = {
            username,
            number: phoneNumber,
            email: email,
            password: password,
        };
        let response = await makeTheCall(url, body);
        
        if (response.ok) {
            const data = await response.json();
            if (data?.success) {
                // user created successfully, Redirect to login after successful signup
                router.push('/users/login');
            }
            else {
                alert(data?.message);
            }
        }
        else {
            alert('Some thing went Wrong!!');
        }
    }

    console.log("number",phoneNumber, typeof(phoneNumber));

    return (
        <div>
            <form onSubmit={handleTheSubmit}>

                <Input
                    name={"phoneNumber"}
                    type={"tel"}
                    label={"Phone Number:"}
                    value={phoneNumber ?? ""} // Handle undefined values gracefully
                    placeHolder={"Enter your phone number"}
                    handleChange={handlePhoneNumberChange}
                />
                <Input
                    name={"email"}
                    type={"email"}
                    label={"Email Address:"}
                    value={email}
                    placeHolder={"Enter your email address"}
                    handleChange={handleEmailChange}
                />
                <Input
                    name={"username"}
                    type={"text"}
                    label={"Username:"}
                    value={username}
                    placeHolder={"Enter your Username"}
                    handleChange={handleUsernameChange}
                />
                <Input
                    name={"password"}
                    type={"password"}
                    label={"Password:"}
                    value={password}
                    placeHolder={"Enter your password"}
                    handleChange={handlePasswordChange}
                />
                <Input
                    name={"confirmPassword"}
                    type={"password"}
                    label={"Confirm Password:"}
                    value={confirmPassword}
                    placeHolder={"Confirm your password"}
                    handleChange={handleConfirmPasswordChange}
                />

                <button className="border-red-800 border p-[5px]" type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
