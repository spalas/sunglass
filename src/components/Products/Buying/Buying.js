import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';
import useAuth from '../../../Hooks/useAuth/useAuth';

const Buying = () => {
    const [item, setItem] = useState({})
    const { user } = useAuth()
    const { buyingId } = useParams()

    console.log(buyingId);





    const { register, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    const onSubmit = (data) => {
        data.email = user?.email;
        data.status = "pending";
        fetch("http://localhost:5000/addOrders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
    };

    useEffect(() => {
        fetch(`https://fast-gorge-58002.herokuapp.com/${buyingId}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])








    return (
        <Container>
            <h1> This is  Your order item all here </h1>

            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={item?.image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item?.name}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {item?.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item?.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>





            <div>
                <div>
                    <h1 className="mt-5 text-center text-danger"> Process Orders</h1>
                    <div className=" w-25 m-auto mt-5">
                        <div className=" ">
                            <div className="">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input
                                        {...register("name")}
                                        placeholder="Name"
                                        defaultValue={item?.name}
                                        className="p-2 m-2 w-100 input-field"
                                    />

                                    <input
                                        {...register("description")}
                                        placeholder="Description"
                                        defaultValue={item?.description}
                                        className="p-2 m-2 w-100 input-field"
                                    />

                                    <input
                                        {...register("image", { required: true })}
                                        placeholder="Image Link"
                                        defaultValue={item?.image}
                                        className="p-2 m-2 w-100 input-field"
                                    />

                                    <input
                                        {...register("price", { required: true })}
                                        placeholder="Price"
                                        defaultValue={item?.price}
                                        type="number"
                                        className="p-2 m-2 w-100 input-field"
                                    />
                                    <br />
                                    <select {...register("model")} className="p-2 m-2 w-100">
                                        <option value="premium">premium</option>
                                        <option value="classic">classic</option>
                                        <option value="business">business</option>
                                    </select>

                                    <br />

                                    {errors.exampleRequired && <span>This field is required</span>}

                                    <input
                                        type="submit"
                                        value="Place your order"
                                        className="btn btn-info w-50"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </Container>
    );
};

export default Buying;