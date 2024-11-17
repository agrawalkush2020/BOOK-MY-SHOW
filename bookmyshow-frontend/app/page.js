import { decodeAction } from "next/dist/server/app-render/entry-base";
import React from "react";
import Outerbody from "../components/Outerbody";
import '../styles/globals.css'

const GroupsPage = ({
    groups = [],
    username

}) => {
    return (
        <Outerbody />
    )
}

export default GroupsPage;