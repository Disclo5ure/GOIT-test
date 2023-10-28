import { useSelector } from 'react-redux';
import css from './Modal.module.css';
import { selectCars } from 'redux/cars/selectors';
import { useMyContext } from 'context/useMyContext';

export const ModalCard = props => {
  const cars = useSelector(selectCars);
  const { id } = useMyContext();
  const car = cars.find(item => item.id === id);

  const {
    make,
    model,
    year,
    type,
    img,
    rentalPrice,
    mileage,
    accessories,
    functionalities,
    address,
    fuelConsumption,
    engineSize,
    description,
    rentalConditions,
  } = car;

  const city = address.split(',')[1];
  const country = address.split(',')[2];
  const rentalConditionsFormatted = rentalConditions.split('\n');

  return (
    <div className={css.container}>
      <img src={img} alt="" className={css.modalImg} />
      <p className={css.name}>
        {make}
        <span style={{ color: '#3470FF' }}> {model}</span>, {year}
      </p>
      <p
        className={css.tags}
      >{`${city} | ${country} | Id: ${id} | Year: ${year} | Type: ${type} | Fuel consumption: ${fuelConsumption} | Engine Size: ${engineSize}`}</p>
      <p className={css.description}>{description}</p>
      <div className={css.accessories}>
        <p className={css.font500}>Accessories and functionalities</p>
        <p className={css.tags}>
          {accessories.map(item => `${item} | `)}
          {functionalities.map(item => `${item} | `)}
        </p>
      </div>
      <ul className={css.rentalConditions}>
        <p className={css.font500}>Rental conditions: </p>
        <div className={css.rentalConditionsAll}>
          {rentalConditionsFormatted.map(item => (
            <span className={css.rentalConditionsTag}>{item}</span>
          ))}
          <span
            className={css.rentalConditionsTag}
          >{`Mileage: ${mileage.toLocaleString('en-US')}`}</span>
          <span
            className={css.rentalConditionsTag}
          >{`Price: ${rentalPrice}`}</span>
        </div>
      </ul>
      <a href="tel:+380730000000" className={css.rentButton}>
        Rent car
      </a>
    </div>
  );
};
