import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://648ca3ae8620b8bae7ed2c50.mockapi.io/adverts";

export const Filter = () => {
  const [cars, setCars] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isListOpen, setIsListOpen] = useState(false);
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

  const handleInputChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
    setIsListOpen(true);
  };

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  const handleCarSelect = (car) => {
    car.preventDefault();
    setInputValue(car);
    setSelectedCar(car);
    setIsListOpen(false);
  };

  const arrowIcon = isListOpen ? "▲" : "▼";

  return (
    <>
      <form>
        <label>
          <span>Car brand</span>
          <input
            placeholder="Enter the text"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={toggleList}>{arrowIcon}</button>
        </label>
        {isListOpen && (
          <ul>
            {cars
              .filter(
                (car) =>
                  car.make &&
                  car.make.toLowerCase().startsWith(inputValue.toLowerCase())
              )
              .map((car) => (
                <li key={car.id} onClick={() => handleCarSelect(car.make)}>
                  {car.make}
                </li>
              ))}
          </ul>
        )}
        {/* <select id="cars">
          <option value="car1">Машина 1</option>
          <option value="car2">Машина 2</option>
          <option value="car3">Машина 3</option>
          <option value="car4">Машина 4</option>
          <option value="car5">Машина 5</option>
          <option value="car6">Машина 6</option>
          <option value="car7">Машина 7</option>
          <option value="car8">Машина 8</option>
        </select>
        <label>
          <span>Price/ 1 hour</span>
          <input value="To $" type="text" />
        </label>
        <label>
          <span>Сar mileage / km</span>
          <input value="From" type="text" />
          <input value="To" type="text" />
        </label>
        <button>Search</button> */}
      </form>
      {selectedCar && <p>{selectedCar}</p>}
    </>
  );
};
