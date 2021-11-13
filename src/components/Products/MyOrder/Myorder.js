import React, { useEffect } from 'react';
import useAuth from '../../../Hooks/useAuth/useAuth';

const Myorder = () => {
    const { user } = useAuth();


    useEffect(() => {
        fetch(`https://fast-gorge-58002.herokuapp.com/${user?.email}`)
            .then(res => res.json())
            .then(data => console.log(data))

    }, [user?.email]);



    return (
        <div>
            my oorder
        </div>
    );
};

export default Myorder;