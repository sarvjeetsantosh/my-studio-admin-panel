import React from "react";
import { Link } from "react-router-dom";

const ClientDetail = () => {

    return (
        <>
            <div className="container  py-5">

                <div className="flex items-center justify-between">
                    <h1 className="text-2xl mb-5 capitalize font-bold underline">client details</h1>

                    <button className="bg-green-600 hover:bg-green-700 font-semibold text-white py-1 px-3 rounded shadow"><Link to="/updateprofile" className="capitalize">update details </Link></button>
                
                </div>

                <h2 className="mt-5 text-red-700 text-2xl"><b>project status : </b> <span className="font-semibold">Completed</span> </h2>

                <div className="mt-10 flex w-full justify-between items-start">

                    <div className="w-2/5">
                        <img className="w-full mr-10" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="client img" />
                    </div>

                    <div className="w-3/5 pl-10 capitalize flex flex-wrap">

                        <ul className=" w-5/6 bg-gray-100 p-10 mb-5">
                            <li className="mr-10"><b>Name : </b> KXXJASXkLk </li>
                            <li className="mr-10"><b>phone : </b>356554754</li>
                            <li className="mr-10"><b>Address : </b>asdkjfkjasdf</li>
                            <li className="mr-10"><b>Booking Date : </b>asdkjfkjasdf</li>
                        </ul>

                        <ul className="w-5/6 bg-yellow-100 p-10">
                            <li className="mb-2"><b>advance payment : </b> KXXJASXkLk </li>
                            <li className="mb-2"><b>recieved payment : </b>356554754</li>
                            <li className="mb-2"><b>Pending payment : </b>356554754</li>
                            <li className="mt-5 text-red-700 text-2xl"><b>project price : </b> <span className="font-semibold">46558636</span> </li>
                        </ul>
                    </div>

                </div>

            </div>

        </>
    );

}

export default ClientDetail;