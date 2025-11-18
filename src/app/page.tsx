"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const Home = () => {

  const [value , setValue]=useState("");

  const trpc=useTRPC();
  const invoke =useMutation(trpc.invoke.mutationOptions({}))
  return <div>

    <Input value={value} onChange={(e)=>setValue(e.target.value)}/>

    <Button onClick={()=>invoke.mutate({value:value})} disabled={invoke.isPending} >Inoke Background Job</Button>
  </div>;
};

export default Home;
