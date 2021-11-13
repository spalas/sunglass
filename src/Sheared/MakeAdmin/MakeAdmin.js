import React from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, } = useForm();
    const onSubmit = (data) => {
        fetch("https://fast-gorge-58002.herokuapp.com/makeAdmin", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));

        console.log(data);

    }


    return (
        <div>
            <h1>Admin</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="input-field"
                    name="email"
                    placeholder="email"

                    type="email"
                    {...register("email", { required: true })}
                />
                <br />


                <input
                    className="submit-btn btn btn-danger mt-3"
                    type="submit"
                    value="Click here"
                />
            </form>
        </div>
    );
};

export default MakeAdmin;