import React from "react";

const UpdateProfile = () => {
    return (
        <>
            <div className="container py-5">
                <h1 className="text-2xl font-bold capitalize underline">Update Here OR ADD Information</h1>

                <div className="mt-10 bg-gray-300 font-semibold p-10">

                    <form action="POST" >
                        <div className="flex flex-wrap justify-between">
                        <label className="flex flex-wrap mb-5" style={{width:"47%"}}>
                            Name :- 
                            <input type="text" className="w-full w-full h-12 p-5 mt-1"/>
                        </label>
                        <label className="flex flex-wrap mb-5" style={{width:"47%"}}>
                            Address :-
                            <input type="text" className="w-full w-full h-12 p-5 mt-1"/>
                        </label>
                        <label className="flex flex-wrap mb-5" style={{width:"47%"}}>
                            Phone :-
                            <input type="number" className="w-full w-full h-12 p-5 mt-1"/>
                        </label>
                        <label className="flex flex-wrap mb-5" style={{width:"47%"}}>
                            Project Budget :-
                            <input type="number" className="w-full w-full h-12 p-5 mt-1"/>
                        </label>
                        <label className="flex flex-wrap mb-5" style={{width:"47%"}}>
                            Advance Paid Amount :-
                            <input type="number" className="w-full h-12 p-5 mt-1"/>
                        </label>
                        <label className="flex flex-wrap mb-5" style={{width:"47%"}}>
                            <span className="w-full mb-2">Upload Image :-</span>
                            <input type="file" className=" w-full h-12"/>
                        </label>
                        </div>

                        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded py-1 px-5">Submit</button>


                    </form>

                </div>
            </div>
        </>
    );
}

export default UpdateProfile;