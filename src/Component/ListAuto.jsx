import axios from "axios";
import { useEffect, useState } from "react";
import { CarDetails } from "./CarDetails";

const baseURL = "https://648ca3ae8620b8bae7ed2c50.mockapi.io/adverts";

export const ListAuto = () => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get(baseURL);
        setCars(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCars();
  }, []);

  console.log(cars);

  const openModal = (car) => {
    setSelectedCar(car);
  };

  const closeModal = () => {
    setSelectedCar(null);
  };

  return (
    <>
      <ul>
        {cars.map((car) => {
          return (
            <li
              key={car.id}
              onClick={() => {
                console.log(selectedCar);
                openModal(car);
              }}
            >
              <img src={car.img} alt="" width="274" height="268" />
              <div>
                <h2>
                  {car.make} {car.model},
                </h2>
                <p>{car.year}</p>
                <p>{car.rentalPrice}</p>
              </div>
              <div>
                {car.address} | {car.rentalCompany} | Premium | {car.type} |{" "}
                {car.mileage} | {car.functionalities[0]}
              </div>
              <button>Learn more</button>
            </li>
          );
        })}
      </ul>
      {selectedCar && <CarDetails car={selectedCar} onClose={closeModal} />}
    </>
  );
};
