import React from 'react';

function Loading() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-light-gray">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
            <p className="text-lg text-gray-600 ml-4 dark:text-gray-200">Loading...</p>
        </div>
    );
}

export default Loading;
