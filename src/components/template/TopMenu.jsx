import React from "react";

const TopMenus = () => {

    return (
        <>
            <header className="bg-yellow-400 h-20 w-full flex">
                <div className="w-full p-8 text-gray-800 flex justify-between items-center">
                    <form action="post">
                        <input type="text" className="px-3 py-1 rounded-l-full focus-visible:border-r" />
                        <button type="sumbit" className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded-r-full text-white font-semibold ">Search</button>
                    </form>
                    <div>
                        <ul>
                            <li className="flex items-center font-semibold"><span className="mr-3"> Name </span><img className="w-10" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png" alt="user name" /></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>

    );

}

export default TopMenus;