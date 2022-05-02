import Link from "next/link";
import React from "react";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <div className="grid gap-y-5">
      <h1 className="font-semibold text-4xl ">All Ninjas</h1>
      {ninjas.map((ninja) => (
        <Link
          href={`/ninjas/${ninja.id}`}
          className="bg-white rounded-sm shadow-md p-2 border-l-8 border-l-transparent hover:border-l-8 hover:border-l-sky-400 "
          key={ninja.id}
        >
          <a>
            <h1 className="font-semibold text-slate-600 "> {ninja.name} </h1>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
