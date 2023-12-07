import React, { useEffect, useState } from 'react'
import Singleproduct from './Singleproduct'
import axios from 'axios'
import Pagination from '../Pagination'

function Products() {
    const [data, setData] = useState([])
    useEffect(() => {
        const getApi = async () => {
            await axios.get("https://fakestoreapi.com/products")
                .then(res => setData(res.data))
                .catch(error => console.log(error))
        }
        getApi()
    }, [])
    const totalPages = data.length / 5;
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

    const renderPageNumbers = () => {
        const pageNumbers = [];

        for (let i = 1; i <= totalPages; i++) {
            const isCurrentPage = i === currentPage;
            pageNumbers.push(
                <li key={i}>
                    <a
                        href="#"
                        className={`flex items-center justify-center px-4 h-10 ${isCurrentPage
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-500 bg-white'
                            } border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white`}
                        onClick={() => handlePageChange(i)}
                    >
                        {i}
                    </a>
                </li>
            );
        }

        return pageNumbers;
    };

    return (<>
        <div className='grid grid-cols-1 gap-3 pt-3 mx-auto w-4/5 items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
            {currentProducts.map(product => (
                <Singleproduct product={product} />
            ))}

        </div>
        <Pagination renderPage={renderPageNumbers} currentPage={currentPage} totalPages={totalPages} />
    </>
    )
}

export default Products