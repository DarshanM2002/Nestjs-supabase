import React from "react";
import client from "@/api/client";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { toast } from "sonner";

const Signup= ()=>{
    const handleSignup= async (e)=>{
        e.preventDefault();
        const email=e.target[0]?.value;
        const password=e.target[1]?.value;
        console.log(email,password);

        if(!email || !password){
            toast.error('please enter email and password');
            return;
        }
        const { data, error }=await client.auth.signUp({
            email,
            password,
        });
        if(data){
            toast.success("Success,Please login now");
        }
       
       if (error){
        toast.error("Unable to signup");
       }
    };
    return ( <Card>
        <CardHeader>
            <CardTitle>Sign up</CardTitle>
            <CardDescription>Enter email password to sign up</CardDescription>
        </CardHeader>
        <CardContent>
            <form onSubmit={handleSignup}>
                <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                        <Label>Email</Label>
                        <Input id="email"
                        type="email" required placeholder="example@gmail.com"></Input>
                    </div>
                    <div className="grid gap-2">
                        <Label>Password</Label>
                        <Input id="password"
                        type="password" required />
                    </div>
                    <Button type="submit" className="w-full">Sign Up</Button>
                </div>
            </form>
        </CardContent>
    </Card>
    );
};

export default Signup;
