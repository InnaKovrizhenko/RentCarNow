import axios from "axios";
import { useEffect, useState } from "react";
import { CarDetails } from "../CarDetails/CarDetails";
import {
  Button,
  Collection,
  Decor,
  IconContainer,
  Img,
  Info,
  Item,
  List,
  LoadMore,
  Name,
  Price,
  Title,
} from "./ListAuto.styled";
import normalIcon from "../../images/normal.svg";
import activeIcon from "../../images/active.svg";

const baseURL = "https://648ca3ae8620b8bae7ed2c50.mockapi.io/adverts/";

const getFavoritesFromLocalStorage = () => {
  const storedFavorites = localStorage.getItem("favorites");
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

const addFavoriteToLocalStorage = (carId) => {
  const favorites = getFavoritesFromLocalStorage();
  favorites.push(carId);
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const removeFavoriteFromLocalStorage = (carId) => {
  const favorites = getFavoritesFromLocalStorage();
  const newFavorites = favorites.filter((id) => id !== carId);
  localStorage.setItem("favorites", JSON.stringify(newFavorites));
};

export const ListAuto = () => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const [favorites, setFavorites] = useState(getFavoritesFromLocalStorage());

  const isFavorite = (carId) => favorites.includes(carId);

  const toggleFavorite = (carId) => {
    if (isFavorite(carId)) {
      removeFavoriteFromLocalStorage(carId);
      setFavorites((prev) => prev.filter((id) => id !== carId));
    } else {
      addFavoriteToLocalStorage(carId);
      setFavorites((prev) => [...prev, carId]);
    }
  };

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

  const openModal = (car) => {
    setSelectedCar(car);
  };

  const closeModal = () => {
    setSelectedCar(null);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = cars.slice(0, endIndex);

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <Collection>
        <List>
          {itemsToShow.map((car) => {
            return (
              <Item
                key={car.id}
                onClick={() => {
                  openModal(car);
                }}
              >
                <Img src={car.img} alt="" width="274" height="268" />
                <IconContainer
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(car.id);
                  }}
                >
                  <img
                    src={isFavorite(car.id) ? activeIcon : normalIcon}
                    alt="icon"
                  />
                </IconContainer>
                <Title>
                  <Name>
                    {car.make} <Decor>{car.model}</Decor>, {car.year}
                  </Name>
                  <Price>{car.rentalPrice}</Price>
                </Title>
                <Info>
                  {car.address} | {car.rentalCompany} | {car.type} |
                  {car.mileage} m | {car.accessories[2]}
                </Info>
                <Button>Learn more</Button>
              </Item>
            );
          })}
        </List>
        {selectedCar && <CarDetails car={selectedCar} onClose={closeModal} />}
      </Collection>
      {cars.length > endIndex && (
        <LoadMore onClick={loadMore}>Load more</LoadMore>
      )}
    </>
  );
};
