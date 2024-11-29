"use client";

import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";

export function Social() {
  return (
    <div className="w-full flex items-center gap-x-2">
      <Button
        variant={"outline"}
        onClick={() => console.log("clicked")}
        size={"lg"}
        className="w-full"
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        variant={"outline"}
        onClick={() => console.log("clicked")}
        size={"lg"}
        className="w-full"
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
}
