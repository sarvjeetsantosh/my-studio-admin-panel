import React from "react";
import { Link } from "react-router-dom";

const BookingList = () => {

    return (
        <>
            <div className="container py-5">
                <h1 className="text-2xl font-bold capitalize underline">all booking list</h1>

                <div className="mt-10 w-full">
                    <table className="w-full">

                        <tr className="border h-12 uppercase bg-yellow-400">
                            <th className="border border-gray-700 ">Sr. No</th>
                            <th className="border border-gray-700">Name</th>
                            <th className="border border-gray-700">Address</th>
                            <th className="border border-gray-700">image</th>
                            <th className="border border-gray-700">status</th>
                            <th className="border border-gray-700">Detail</th>
                        </tr>

                        <tr className="text-center h-12 font-semibold capitalize">
                            <td className="border border-gray-700">1</td>
                            <td className="border border-gray-700">mohan</td>
                            <td className="border border-gray-700">mohali</td>
                            <td className="border border-gray-700"><img className="w-10 m-auto" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png" alt="user name" /></td>
                            <td className="border border-gray-700">status</td>
                            <td className="border border-gray-700"><Link to="/clientdetail" className="bg-gray-800 hover:bg-gray-600 text-white px-2 py-1 rounded">View More</Link></td>

                        </tr>

                    </table>
                </div>

            </div>
        </>
    );

}

export default BookingList;