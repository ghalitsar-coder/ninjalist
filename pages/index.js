import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="grid gap-y-5">
      <h1 className="font-semibold text-4xl ">Homepage</h1>
      <p className="text-slate-600 font-[Poppins] ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, impedit
        alias! Beatae quaerat quidem asperiores maxime animi voluptatum at
        assumenda aliquid. Rerum, exercitationem inventore quisquam possimus
        commodi similique quibusdam harum?
      </p>
      <p className="text-slate-600 font-[Poppins] ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque,
        exercitationem non sequi cumque facilis qui voluptatibus quam a ab
        dignissimos atque deserunt, voluptatum esse nemo accusamus temporibus
        error doloribus perspiciatis!
      </p>
      <Link href="/ninjas">
        <button className="bg-blue-400 w-fit mx-auto text-white font-semibold text-xl p-2 rounded-md shadow-md font-[Poppins] ">
          See all Ninjas
        </button>
      </Link>
    </div>
  );
}
