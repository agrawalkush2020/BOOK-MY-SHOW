"use client";
import React, { useState } from "react";
import Input from "./Input";

const LandingPage = ({

}) => {

    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleTheSubmit = (event) => {
        event.preventDefault(); 
    }

    const handleSignIn = ()=>{
        debugger
    }

    return (
            <div>
                <div>
                    <form>
                        <Input
                            name={"Number"}
                            type={'number'}
                            label={'Number:'}
                            value={number}
                            placeHolder={'Number'}
                            handleChange={setNumber}
                        />
                        <Input
                            name={"password"}
                            type={"password"}
                            label={"password:"}
                            value={password}
                            placeHolder={"Password"}
                            handleChange={setPassword}
                        />
                        <button className="bg-orange-600" type="submit" onClick={(event)=>handleTheSubmit(event)}>Submit</button>
                    </form>
                </div>
                <div>Click to <a className="color-red cursor-pointer" onClick={handleSignIn}>Sign-Up</a></div>

            </div>
    )
}

export default LandingPage;