import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Card = ({ toy, user }) => {
    const { _id, img,name, price, ratings } = toy;
    const handleButton = () => {
        if (!user) {
            Swal.fire(
                'You have to log in first to view details',
            )
        }
    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure className='p-4'>
                <img className='w-full h-[250px] object-cover rounded-md shadow-sm' src={img} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><span className='font-semibold'>Price: $</span> {price}</p>
                <p><span className='font-semibold'>Ratings: {ratings}</span></p>
                <div className="card-actions justify-end">
                    <Link onClick={handleButton} to={`/toys/${_id}`}><button className="btn bg-[#DE3F75] mt-10 text-white text-xl font-semibold px-4 py-2 rounded-md">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Card;