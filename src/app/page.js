'use client';
import { useEffect } from "react";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import Auth from "@/components/auth/Auth";  

export default function Home() {
  const { user,loading }=useAuth();
  const router=useRouter();

 
  useEffect(()=> {
    if(!loading && user){
      router.push("/dashboard");
      return;
    }

  }, [loading, user])
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      { loading ?<h1>loading....</h1>:<Auth/>}
    </div>
  );
}
