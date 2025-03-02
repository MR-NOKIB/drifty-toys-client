import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyCard from '../ToyCard/ToyCard';
const AllToys = () => {
    const toys = useLoaderData();
    return (
        <div>
            <h1 className='custom-h1 my-10 w-1/2 mx-auto text-center'>Explore Our Exciting Collection of Toy Cars!</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    toys.map(toy => <ToyCard key={toy._id} toy={toy}></ToyCard>)
                }
            </div>
        </div>
    );
};

export default AllToys;