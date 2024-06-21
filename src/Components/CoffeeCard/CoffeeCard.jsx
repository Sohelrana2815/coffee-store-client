import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const CoffeeCard = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  console.log(coffees);
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/coffee/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("deleted successfully!");
          const remaining = coffees.filter((cof) => cof._id !== id);
          setCoffees(remaining);
          console.log(data);
        }
      });
  };
  return (
    <div>
      <p className="text-center text-3xl font-bold">
        Coffee Card: {coffees.length}
      </p>
      <div className="grid grid-cols-3">
        {coffees.map((coffee) => (
          <div key={coffee._id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={coffee.photo_url} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{coffee.name}</h2>
              <p>{coffee.price}$</p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleDelete(coffee._id)}
                  className="btn btn-primary"
                >
                  Delete
                </button>
                <Link to={`/update/${coffee._id}`}>
                  <button className="btn btn-secondary">Edit</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeCard;
