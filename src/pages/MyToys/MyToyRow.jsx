import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from 'sweetalert2';

const MyToyRow = ({ toy, handleDelete }) => {
    const { category, img, name, price, seller_info, _id } = toy;
    return (
        <tr>
            <th>
                <div className="h-12 w-12 shadow-md">
                            <img
                                src={img} />
                        </div>
                    </th>
                    <td>
                        {name}
                    </td>
                    <td>
                        {category}
                    </td>
                    <td>
                        {price}
                    </td>
                    <td>
                        {seller_info.sellerName}
                    </td>
                    <td>
                        <RiDeleteBin6Line onClick={() => handleDelete(_id)} className='text-3xl text-red-500' />
                    </td>

                </tr>
            );
        };

export default MyToyRow;