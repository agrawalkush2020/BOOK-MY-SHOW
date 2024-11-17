"use client";
import React, { useState } from "react";
import Input from "./Input";
import { useRouter } from 'next/navigation';

const SignUp = ({

}) => {

    const router = useRouter();

    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [profilePhoto, setProfilePhoto] = useState(null);

    // Handling functions for each input state
    const handleFullNameChange = (value) => {
        setFullName(value);
    }

    const handlePhoneNumberChange = (value) => {
        setPhoneNumber(value);
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

    const handleFileChange = (event) => {
        setProfilePhoto(event.target.files[0]);
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
            else if (false) {  //format check krenge file ka jpg and jpeg hee hona chahiye 
                throw new Error('please upload the file with jpg or jpeg format only');
            }

        } catch (error) {
            alert(error.message);
            return; // Stop further processing if there's an error
        }

        let url = 'http://127.0.0.1:8000/' + "users/signup/";
        let body = {
            fullName: fullName,
            phoneNumber: phoneNumber,
            email: email,
            password: password,
            // Profile photo will not be included in a simple JSON body; it needs to be handled differently (e.g., using FormData for file uploads)
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

    return (
        <div>
            <form onSubmit={handleTheSubmit}>
                <Input
                    name={"fullName"}
                    type={"text"}
                    label={"Full Name:"}
                    value={fullName}
                    placeHolder={"Enter your full name"}
                    handleChange={handleFullNameChange}
                />
                <Input
                    name={"phoneNumber"}
                    type={"number"}
                    label={"Phone Number:"}
                    value={phoneNumber}
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
                <div>
                    <label>Profile Photo (Optional):</label>
                    <Input
                        type="file"
                        onChange={handleFileChange}
                    />
                </div>
                <button className="bg-orange-600" type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
