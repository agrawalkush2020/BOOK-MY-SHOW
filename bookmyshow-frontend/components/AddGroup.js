"use client";
import React, { useEffect, useState } from "react";
import DropDown from "./DropDown";
import Input from "./Input";
import { useRouter } from 'next/navigation';


const Person = ({
    name = ''
}) => {
    return (
        <>
            {name}
            <button>x</button>
        </>
    )

}


const AddGroup = ({
    allUsers = [],
    currentUserName = '',

}) => {

    const router = useRouter();

    const [groupName, setGroupName] = useState('');
    const [userNames, setUserNames] = useState([currentUserName]);

    const handleTheAddUser = (userName) => {
        setUserNames([...userName, userName]);
    }

    const handleTheGroupName = (name) => {
        setGroupName(name);
    }

    const makeTheGroup = async () => {
        try {
            if(!groupName){
                throw new Error('Enter the Group Name');
            }
            else if(userNames.length()==0){
                throw new Error('Select the group members');
            }

            const response = await fetch('http://127.0.0.1:8000/groups/logout/',{
                method:'POST',
                body:JSON.stringify({
                    groupName,
                    userNames
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if(response.ok){
                router.push('/groups');
            }
            else{
                throw new Error('Some thing went Wrong!');
            }
            
        } catch (error) {
            alert(error.message);
            return ;
        }
    }

    return (
        <>
            {/* list down all the users which i have included */}
            <div>
                {userNames.map((name) => {
                    return <Person
                        name={name}
                        key={name}
                    />;
                })}
            </div>
                
            {/* group name */}
            <Input
                name={'groupName'}
                type={'text'}
                label={'Group Name:'}
                value={groupName}
                handleChange={handleTheGroupName}
                placeHolder={'Enter the new group name'}
            />

                {/* will show all the users which i can add */}
            <div>
                <DropDown
                    deafultOption={'--Add User--'}
                    options={allUsers}
                    handleTheChange={handleTheAddUser}
                    selectedOptions={[...userNames, currentUserName]}
                    alwaysShowDefault={true}
                />
            </div>

            <button onClick={makeTheGroup}>Make Group</button>
        </>
    );
}

export default AddGroup;