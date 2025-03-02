import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ToyDetails = () => {
    const { id } = useParams();
    const [toy, setToy] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchToyDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5000/toys/${id}`);
                const data = await response.json();
                setToy(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching toy details:', error);
                setLoading(false);
            }
        };

        fetchToyDetails();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
                <button className="btn bg-[#DE3F75] text-white loading">Loading</button>
            </div>
        );
    }

    if (!toy) {
        return (
            <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
                <h2 className="text-2xl text-gray-600">Toy not found</h2>
            </div>
        );
    }

    return (
        <div className="min-h-[calc(100vh-200px)] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 p-4 lg:p-8 flex items-center justify-center">
                            <div className="w-full h-full flex items-center justify-center">
                                <img 
                                    className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-contain rounded-lg" 
                                    src={toy.img} 
                                    alt={toy.name}
                                />
                            </div>
                        </div>
                        <div className="lg:w-1/2 p-6 lg:p-12">
                            <h1 className="text-2xl lg:text-4xl font-bold text-[#DE3F75] mb-6">{toy.name}</h1>
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-lg lg:text-xl font-semibold text-gray-800">Price</h2>
                                    <p className="text-xl lg:text-2xl text-[#DE3F75]">${toy.price}</p>
                                </div>
                                <div>
                                    <h2 className="text-lg lg:text-xl font-semibold text-gray-800">Rating</h2>
                                    <p className="text-lg">{toy.ratings} ⭐</p>
                                </div>
                                <div>
                                    <h2 className="text-lg lg:text-xl font-semibold text-gray-800">Category</h2>
                                    <p className="text-lg">{toy.category}</p>
                                </div>
                                <div>
                                    <h2 className="text-lg lg:text-xl font-semibold text-gray-800">Available Quantity</h2>
                                    <p className="text-lg">{toy.quantity} units</p>
                                </div>
                                <div>
                                    <h2 className="text-lg lg:text-xl font-semibold text-gray-800">Description</h2>
                                    <p className="text-gray-600 mt-2">{toy.description || 'No description available'}</p>
                                </div>
                            </div>
                            <div className="mt-10">
                                <button className="btn w-full bg-[#DE3F75] hover:bg-[#de3f74cb] text-white text-xl font-semibold px-4 py-2 rounded-md">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails; 