import { CardContent, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { searchCar as searchCarAction } from "../../store/Car/Serach";
import { Car as CarInterface, CarClass } from "../../Interface/Car";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
const Search = () => {
  const searchCarReducer = useSelector((state: RootState) => state.searchCar);
  const dispatch: AppDispatch = useDispatch();
  useEffect(()=>{
    let car = new CarClass("","","","","","",-9999)
    dispatch(searchCarAction(car))
  },[])

  
  return (
    <div>
      <div className="h4">Search Cars</div>
      <Formik
      initialValues={{
        name: "",
        manafactureName: "",
        modelYear: "",
        transmission: "",
        color: "",
        bodyType: "",
        engineCapacity: 0,
      }}
      validationSchema={Yup.object({
        name: Yup.string(),
        manafactureName: Yup.string(),
        modelYear: Yup.string(),
        transmission: Yup.string(),
        color: Yup.string(),
        bodyType: Yup.string(),
        engineCapacity: Yup.number(),
      })}
      onSubmit={(values) => {
        let car = new CarClass(
          values.name,
          values.manafactureName,
          values.modelYear,
          values.transmission,
          values.color,
          values.bodyType,
          values.engineCapacity
        );
        dispatch(searchCarAction(values));
      }}
    >
      <Form>
        <div>
          <label className="mx-2" htmlFor="name">
            Car Name
          </label>
          <Field name="name" type="text" />
          <ErrorMessage className="mx-2" name="name" />
        </div>
        <div>
          <label className="mx-2" htmlFor="manafactureName">
            Manafacture Name
          </label>
          <Field name="manafactureName" type="text" />
          <ErrorMessage className="mx-2" name="manafactureName" />
        </div>
        <div>
          <label className="mx-2" htmlFor="modelYear">
            Model Year
          </label>
          <Field name="modelYear" type="modelYear" />
          <ErrorMessage className="mx-2" name="modelYear" />
        </div>
        <div>
          <label className="mx-2" htmlFor="transmission">
            Transmission
          </label>
          <Field as="select" name="transmission">
            <option value="manual">Manual</option>
            <option value="automatic">Automatic</option>
          </Field>
          <ErrorMessage className="mx-2" name="transmission" />
        </div>
        <div>
          <label className="mx-2" htmlFor="color">
            Color
          </label>
          <Field as="select" name="color">
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="gray">Gray</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
          </Field>
          <ErrorMessage className="mx-2" name="color" />
        </div>
        <div>
          <label className="mx-2" htmlFor="bodyType">
            Body Type
          </label>
          <Field as="select" name="bodyType">
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="hatchback">Hatchback</option>
            <option value="wagon">Wagon</option>
            <option value="jeep">Jeep</option>
          </Field>
          <ErrorMessage className="mx-2" name="bodyType" />
        </div>
        <div>
          <label className="mx-2" htmlFor="engineCapacity">
            Engine Capacity
          </label>
          <Field name="engineCapacity" type="number"></Field>
          <ErrorMessage className="mx-2" name="engineCapacity" />
        </div>
        <button type="submit">Filter</button>
      </Form>
    </Formik>
      {searchCarReducer.loading && <div>Loading Please Wait</div>}
      {searchCarReducer.error && <div>Some Error While Fetching!</div>}
      {searchCarReducer.response && <div>
        {searchCarReducer.response.map((car)=>(<CarCard car={car} />))}
        </div>}
    </div>
  );
};

const CarCard = (props: { car: CarInterface }) => {
  return (
    <CardContent className="border border-dark p-1 m-5">
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <span className="mx-1">{props.car.manafactureName}</span>
        {props.car.name}
      </Typography>
      <Typography variant="h5" component="div">
        {props.car.bodyType}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {props.car.color}
      </Typography>
      <Typography variant="body2">
        {props.car.transmission}
      </Typography>
      <Typography variant="body2">
        {props.car.engineCapacity.toString()}
      </Typography>
    </CardContent>
  );
};

// CarCard.propTypes = {
//   car:CarInterface
// }

export default Search;
