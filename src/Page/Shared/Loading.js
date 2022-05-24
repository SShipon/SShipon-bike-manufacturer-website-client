import React from 'react';

const Loading = () => {
    return (
            <div className="h-screen flex items-center justify-center ">
                <div className="w-24 h-24 border-l-2 border-gray-800 rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;