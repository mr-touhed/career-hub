import React from 'react';
import Header from '../Header';
import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
    const error = useRouteError();
    console.error(error.message);
    return (
        <div className='container'>
        <Header />
        <div className='h-[60vh] flex justify-center items-center'>
                <h2 className='text-4xl font-extrabold'>Opss ! 404 <i>{error.statusText || error.message}</i></h2>
        </div>
        </div>
    );
};

export default ErrorPage;