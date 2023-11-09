import React, { useState } from 'react';

function Pagination({ renderPage, currentPage, totalPages }) {

    return (
        <nav className='border  py-5' aria-label="Page navigation">
            <ul className="inline-flex -space-x-px text-base h-10">
                <li>
                    <a
                        href="#"
                        className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        onClick={() => renderPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </a>
                </li>
                {renderPage()}
                <li>
                    <a
                        href="#"
                        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        onClick={() => renderPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;
