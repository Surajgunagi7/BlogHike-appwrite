import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../store/darkSlice';

const ThemeBtn = ({className,iClass}) => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state) => state.dark.isDarkMode);

    const handleToggle = () => {
        dispatch(toggleDarkMode());
    };

    return (
        <button
            onClick={handleToggle}
            className={`${className} transition-transform duration-300 ease-in-out ${isDarkMode ? 'rotate-180' : ''} focus:outline-none`}>
                <i className={`ri-${isDarkMode ? 'moon-fill' : 'sun-fill'} ${iClass} shadow-sm border-[2px] rounded-full text-xl bg-gray-200 text-center p-2`}></i>
        </button>
    );
};

export default ThemeBtn;
