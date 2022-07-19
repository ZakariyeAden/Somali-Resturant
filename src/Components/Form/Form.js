import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";

const FormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}> 
        <Form.Group className="mb-3 flex-col">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            size="lg"
            {...register("firstName", { required: true, maxLength: 10, minLength: 5})}
          />
          {errors.firstName && <p className="error">Please check the First Name</p>}
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            size="lg"
            {...register("lastName" , { required: true, maxLength: 10, })}
          />
           {errors.lastName && <p className="error">Please check the Last Name</p>}
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            size="lg"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
           {errors.email && <p className="error">Please check your email</p>}
        </Form.Group>
        <Button size="lg" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FormPage;
