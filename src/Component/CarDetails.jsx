export const CarDetails = ({ car, onClose }) => {
  return (
    <>
      <div key={car.id}>
        <button onClick={onClose}>X</button>
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
        <button>Rent car</button>
      </div>
    </>
  );
};
