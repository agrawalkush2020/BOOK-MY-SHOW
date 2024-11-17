"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Login from '../../../components/Login';
import Logout from '../../../components/Logout';

export default function LoginPage() {

    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        function checkCookie() {
            const cookies = document.cookie.split(';');
            const sessionCookie = cookies.find(cookie => cookie.trim().startsWith('sessionid='));
            setIsAuthenticated(!!sessionCookie);
        }

        checkCookie();
    }, []);

    if (isAuthenticated === null) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Login Page</h1>

            {isAuthenticated ? (
                <p>You are already logged in. Please log out to log in as a different user.</p>
            ) : (
                <div>
                    <Logout />
                    <Login />
                    <p>Not Registered?&nbsp;&nbsp;&nbsp;
                        <Link href="/users/signup">
                            Sign-Up here
                        </Link>
                    </p>
                </div>
            )}
        </div>
    );
}
