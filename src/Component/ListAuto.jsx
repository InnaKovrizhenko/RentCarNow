import axios from "axios";
import { useEffect, useState } from "react";
import { CarDetails } from "./CarDetails";
import {
  Button,
  Collection,
  Decor,
  IconContainer,
  Img,
  Info,
  Item,
  LoadMore,
  Name,
  Price,
  Title,
} from "./ListAuto.styled";

import normalIcon from "../images/normal.png";
import activeIcon from "../images/active.png";

const baseURL = "https://648ca3ae8620b8bae7ed2c50.mockapi.io/adverts";

export const ListAuto = () => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [currentIcon, setCurrentIcon] = useState(normalIcon);

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

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = cars.slice(0, endIndex);

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <Collection>
        <ul>
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
                    setCurrentIcon(
                      currentIcon === normalIcon ? activeIcon : normalIcon
                    );
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    {currentIcon}
                  </svg>
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
        </ul>
        {selectedCar && <CarDetails car={selectedCar} onClose={closeModal} />}
      </Collection>
      {cars.length > endIndex && (
        <LoadMore onClick={loadMore}>Load more</LoadMore>
      )}
    </>
  );
};
