import React, { useEffect, useState } from "react";
import Favorited from "./Favorited";

function Favorites() {
  const [favoritesData, setFavoritesData] = useState([]);

  // Fetch data from the endpoint when the component mounts
  useEffect(() => {
    fetch("http://localhost:4001/favorites")
      .then((response) => response.json())
      .then((data) => setFavoritesData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="favorites">
      <div>
        <button>Favorited By</button>
        <div className="favoritelist">
          {favoritesData.map((formData) => (
            <Favorited key={formData.id} formData={formData} />
          ))}
        </div>
      </div>
      <div>
        <button>You Favorited</button>
        <div className="favoritelist">
          {favoritesData.map((formData) => (
            <Favorited key={formData.id} formData={formData} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
