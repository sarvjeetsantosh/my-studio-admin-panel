import React from "react";

const TopMenus = () => {

    return (
        <>
            <header className="bg-yellow-400 h-20 w-full">
                <div className="w-full p-8 text-gray-800 flex justify-between">
                    <form action="post">
                        <input type="text" />
                        <button type="sumbit">Search</button>
                    </form>
                    <div>
                        <ul>
                            <li>name <img src="" alt="user name" /></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>

    );

}

export default TopMenus;