import React, { useEffect, useState } from "react";
import Favorited from "./Favorited";

function Favorites() {
  const [favoritesData, setFavoritesData] = useState([]);

  // Fetch data from the endpoint when the component mounts
  useEffect(() => {
    fetch("http://127.0.0.1:9393/favorites")
      .then((response) => response.json())
      .then((data) => setFavoritesData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleDeleteFavorite = (favoriteId) => {
    // Send a DELETE request to the server to delete the favorite
    fetch(`http://127.0.0.1:9393/favorites/${favoriteId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Optionally, you can handle the success message here
        // Remove the deleted favorite from the state
        setFavoritesData((prevData) =>
          prevData.filter((formData) => formData.id !== favoriteId)
        );
      })
      .catch((error) => console.error("Error deleting favorite:", error));
  };

  return (
    <div className="favorites">
      <div>
        <button>Favorited By</button>
        <div className="favoritelist">
          {favoritesData.map((formData) => (
            <div key={formData.id}>
              <Favorited
                formData={formData}
                handleDeleteFavorite={handleDeleteFavorite}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <button>You Favorited</button>
        <div className="favoritelist">
          {favoritesData.map((formData) => (
            <div key={formData.id}>
              <Favorited
                formData={formData}
                handleDeleteFavorite={handleDeleteFavorite}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favorites;