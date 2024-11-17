import React from "react";
import { useRouter } from 'next/router';
import AddGroup from "../../../components/AddGroup";
import { useEffect, useState } from 'react';

const addGroupPage = ({

}) => {

    const router = useRouter();
    const [users, setUsers] = useState([]);
    const [currentUserName, setCurrentUserName] = useState('');

    useEffect(() => {
        if (router.isReady && router.state && router.state.users) {
            // Retrieve users passed via router state
            setUsers(router.state.users);
            setCurrentUserName(router.state.currentUserName);
        }
    }, [router.isReady]);

    return (
        <AddGroup
            allUsers={users}
            currentUserName={currentUserName}
        />
    )
}

export default addGroupPage;