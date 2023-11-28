import React from "react";


const SideMenu = () => {

    return (
        <>
            <div className="w-2/12 bg-gray-500 " style={{ height: "100vh" }}>
                <div className="h-20 bg-yellow-400 mb-5 flex items-center justify-center">
                    <h2 className="text-3xl text-center text-black font-bold ">HELLO</h2>
                </div>

                <ul className="w-full px-5">
                    <li className="bg-white py-1 px-2 font-semibold rounded hover:bg-yellow-400 hover:cursor-pointer ">link</li>
                </ul>
            </div>
        </>
    );
}

export default SideMenu;