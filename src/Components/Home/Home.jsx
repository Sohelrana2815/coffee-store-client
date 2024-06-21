import { useLoaderData } from "react-router-dom";

const Home = () => {
  const coffees = useLoaderData();
  console.log(coffees);
  return (
    <div>
      <h2 className="text-center text-3xl font-bold">This is Home!</h2>
      <h2 className="text-center text-3xl font-bold">
        Coffees: {coffees.length}
      </h2>
    </div>
  );
};

export default Home;
