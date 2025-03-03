import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';

const ToyCard = ({ toy }) => {
    const { _id, name, price, ratings, img } = toy;
    const { user } = useContext(AuthContext);
    
    const handleAddToCart = id => {
        const myToy = {
            email: user.email,
            price: toy.price,
            name: toy.name,
            img: toy.img,
            ratings: toy.ratings,
            category: toy.category,
            seller_info: toy.seller_info
        }
        fetch(`http://localhost:5000/toys/${id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myToy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Successfully added",
                        icon: "success",
                        draggable: true
                    });
                }
            })
    }
    return (
        <div className="card bg-base-100 w-96 border h-[450px] border-gray-300 shadow-2xl relative">
            <figure className='p-4'>
                <img
                    className='w-full h-[250px] object-cover rounded-md shadow-sm'
                    src={img}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                </h2>
                <div className="text-left">
                    <p><span className='font-semibold'>Price:</span> ${price}</p>
                    <p><span className='font-semibold'>Rating:</span> {ratings}</p>
                </div>
            </div>
            <button onClick={() => handleAddToCart(_id)} className='btn bg-[#DE3F75] mt-10 text-white text-xl font-semibold px-4 py-2 rounded-md absolute bottom-0 left-0 right-0'>
                Add to Cart
            </button>
        </div>
    );
};

export default ToyCard;