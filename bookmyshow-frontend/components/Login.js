"use client";
import React, {useState} from "react";
import Input from "./Input";
import { useRouter } from 'next/navigation';

const Login = ({

}) => {

    const router = useRouter();

    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const handlePhoneNumberChange = (value) => {
        setPhoneNumber(value);
    }

    const handlePasswordChange = (value) => {
        setPassword(value);
    }


    const makeTheCall = async (url, body) => {
        let response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include', // This ensures cookies are sent and received
        })

        return response;
    }

    const handleTheSubmit = async (event) => {

        if(!phoneNumber || !password){
            alert('Don"t leave the input empty')
            return ;
        }

        event.preventDefault();

        // debugger

        let url = 'http://127.0.0.1:8000/' + "users/login/";
        let body = {
            phoneNumber,
            password: password,
        };

        let response = await makeTheCall(url, body);
        debugger
        if(response.ok){
            const data = await response.json();
            
            if(data?.success){
                // user logged In
                router.push('/movies');
            }
            else{
                alert(data?.message);
            }
        }
        else{
            alert('Some thing went Wrong!!');
        }

    }

    return (
        <form onSubmit={handleTheSubmit}>
            <Input
                name={"phoneNumber"}
                type={"number"}
                label={"Phone Number:"}
                value={phoneNumber}
                placeHolder={"Enter your phone number"}
                handleChange={handlePhoneNumberChange}
            />
            <Input
                name={"password"}
                type={"password"}
                label={"Password:"}
                value={password}
                placeHolder={"Enter your password"}
                handleChange={handlePasswordChange}
            />
            <button className="bg-orange-600" type="submit">
                Log In
            </button>
        </form>
    )
}

export default Login;