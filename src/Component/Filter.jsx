export const Filter = () => {
  return (
    <>
      <form>
        <label>
          <span>Car brand</span>
          <input value="Enter the text" type="text" />
        </label>
        <select id="cars">
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
        <button>Search</button>
      </form>
    </>
  );
};
