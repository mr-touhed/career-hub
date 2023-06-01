import React from 'react';
import Header from '../Header';

const Blog = () => {
    return (
        <div>
            <div className="banner-container ">
                    <div className='container'>
                    <Header/>
                            <h2 className='text-center mt-11 text-6xl'>Blog</h2>
                    </div>
             </div>

             <div className='my-12 container'>
                    <h2 className='font-bold text-2xl mb-6'>When should you use context API?</h2>
                    <p>If you only want to avoid passing some props through many levels</p>
                    <h2 className='font-bold text-2xl mb-6'>What is a custom hook?</h2>
                    <h2 >If you have one or multiple React hooks that will be used at multiple locations in a code, you should use custom React JS hooks. This helps in making the code more readable and make the code clean.</h2>
                    <h2 className='font-bold text-2xl mb-6'>What is useRef?</h2>
                    <p>It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly.</p>
                    <h2 className='font-bold text-2xl mb-6'>What is UseMemo ?</h2>
                    <p>useMemo is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations.</p>
             </div>
        </div>
    );
};

export default Blog;