import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NotFound = () => {
    const router= useRouter();
  useEffect(() => {
      setTimeout(() => { 
          router.push("/")
       }, 3000)
  }, []);

  return (
    <div className="flex flex-col gap-y-5 text-slate-500 justify-center items-center">
      <h1 className="text-4xl font-semibold font-[Poppins] ">Oooopss....</h1>
      <h2 className="text-2xl font-semibold font-[Poppins] ">
        404 | Page not found
      </h2>
      <p className="text-md font-semibold  ">
        Back to{" "}
        <Link href="/">
          <a> home</a>
        </Link>{" "}
      </p>
    </div>
  );
};

export default NotFound;
