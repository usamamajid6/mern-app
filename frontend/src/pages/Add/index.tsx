import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { saveCar as saveCarAction } from "../../store/Car/Save";
import { Car as carInterface, CarClass } from "../../Interface/Car";
const Add = () => {
  const saveCarReducer = useSelector((state: RootState) => state.saveCar);
  const dispatch: AppDispatch = useDispatch();

  console.log(saveCarReducer);
  

  return (
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
        name: Yup.string().required("Required"),
        manafactureName: Yup.string().required("Required"),
        modelYear: Yup.string().required("Required"),
        transmission: Yup.string().required("Required"),
        color: Yup.string().required("Required"),
        bodyType: Yup.string().required("Required"),
        engineCapacity: Yup.number().required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        let car = new CarClass(
          values.name,
          values.manafactureName,
          values.modelYear,
          values.transmission,
          values.color,
          values.bodyType,
          values.engineCapacity
        );
        dispatch(saveCarAction(values));
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
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default Add;
