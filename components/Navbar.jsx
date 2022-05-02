import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex  items-center mb-5 rounded-lg shadow-lg  py-3 ">
      <div className="container flex justify-between mx-auto ">
        <Link href="/">
          <h1 className="text-2xl cursor-pointer font-bold  font-[Poppins]  ">
            Ninjas
          </h1>
        </Link>
        <div className="flex gap-x-5 font-semibold ">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/ninjas">
            <a>All Ninjas</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
