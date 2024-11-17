"use client";
import React from "react";

const Toaster = ({
    success = "false",
    message = "",
}) => {
    return (
        <>
            <div>
                <div>
                    <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600" />
                </div>
                <div>
                    {message}
                </div>
            </div>
        </>
    )
}

export default Toaster;
