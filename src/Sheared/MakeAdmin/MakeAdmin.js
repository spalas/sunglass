import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {

    const [email, setEmail] = useState('')


    const { register, handleSubmit, } = useForm();
    const onSubmit = (data) => {
        const user = { email }
        fetch("http://localhost:5000/users/makeAdmin", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user),
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