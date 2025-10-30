'use client';
import React from "react";
import { Button } from "@/components/ui/button";
import client from "@/api/client";
const Dashboard=()=>{
    return (
        <><div>This is our dashboard</div><Button onClick={() => {
            client.auth.signOut();
        } }

        >Sign Out</Button></>
    )
};
export default Dashboard;