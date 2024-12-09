import React from 'react';

function Herocommon() {
    return (
        <div className="w-full h-[300px] absolute bg-[#F6F5FF]">
            <div className="relative">
                {/* content div */}
                <div
                    className="absolute w-[90%] sm:w-[314px] h-[64px] top-[120px] sm:top-[120px] left-10 sm:left-10 lg:left-10 xl:left-10 gap-0 flex flex-col justify-center items-center sm:items-start sm:ml-10"
                >
                    <h1 className="text-xl sm:text-2xl font-bold text-[#101750]">Shop Grid Default</h1>
                    <p className="text-sm sm:text-base text-pink-500">Home.Pages.Shop Grid Default</p>
                </div>
            </div>
        </div>


        // filter section 

    );
}

export default Herocommon;
