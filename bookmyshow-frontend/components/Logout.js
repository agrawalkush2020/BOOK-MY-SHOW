"use client";
import React from "react";
import { useRouter } from 'next/navigation';

const Logout = ({

})=>{

    const router = useRouter();

    const handleLogout = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/users/logout/', {
                method: 'POST', // Use POST as your Django view expects it
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // This ensures cookies (like sessionid) are sent
            });
    
            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    // Clear session cookie from the frontend
                    document.cookie = "sessionid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    
                    // Redirect to login page or home
                    router.push('/users/login');
                }
            } else {
                console.log('Failed to log out.');
            }
        } catch (error) {
            console.error('Error logging out:', error);
        }
    }    
    

    return(
        <button onClick={handleLogout}>Logout</button>
    )
}

export default Logout;

