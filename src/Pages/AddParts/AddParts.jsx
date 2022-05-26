import React from "react";
import { useForm } from "react-hook-form";

const AddParts = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/bikeAdd", {
      method: "POST",
      headers: { "content-type":"application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
    reset();
  };
  return (
    <div className="card lg:max-w-lg mx-auto  p-2 shadow-lg justify-center items-center my-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name")}
          placeholder="Product Name"
          className="p-2 my-1 w-100"
        />
        <br />
        <input
          {...register("price")}
          placeholder="Price"
          className="p-2 my-1 w-100"
        />
        <br />
        <input
          {...register("stock")}
          placeholder="Quantity"
          className="p-2 my-1 w-100"
        />
        <br />
        <input
          {...register("order")}
          placeholder="Order"
          className="p-2 my-1 w-100"
        />
        <br />
        <input
          {...register("description")}
          placeholder="Description"
          className="p-2 my-1 w-100"
        />
        <br />
        <input
          {...register("image", { required: true })}
          placeholder="Image Link"
          className="p-2 my-1 w-100"
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <p className="w-50 m-auto p-2">
          <input
            type="submit"
            value="Add A bike"
            className="btn d-block m-auto px-3"
          />
        </p>
      </form>
    </div>
  );
};

export default AddParts;
