import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((item) => ({ params: { slug: item.id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + slug);
  const data = await res.json();
  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  console.log(ninja);
  return (
    <div className="grid gap-y-5 place-content-center " >
      <h1 className="font-semibold text-4xl  ">{ninja.name}</h1>
      <h2 className="font-semibold">{ninja.email}</h2>
      <p className="">{ninja.website}</p>
      <h3 className="font-semibold">{ninja.address.city}</h3>
    </div>
  );
};

export default Details;
