import React, { useState } from 'react';
import Products from './Products';

function Shoppage(props) {
    const [paginate, setpaginate] = useState({
        page: 1,
        limit: 8
    });

    const handleChangePage = (number) => {
        setpaginate({
            ...paginate,
            page: number
        })
    }

    const handlenextandprev = (number) => {
        var x = paginate.page + number;
        if (x === 0) {
            x = 1;
        }
        if (x > 3) {
            x = 3;
        }
        setpaginate({
            ...paginate,
            page: x
        });
    }
    return (
        <div className="container-fluid py-4 container-padding">
            <Products enpont={`products?page=${paginate.page}&limit=${paginate.limit}`} />


            {/* pagination */}

            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item page-link">

                        <span onClick={() => handlenextandprev(-1)}>&laquo;</span>
                        <span className="sr-only">Previous</span>

                    </li>
                    <li className="page-item page-link" onClick={() => handleChangePage(1)}>1</li>
                    <li className="page-item page-link" onClick={() => handleChangePage(2)}>2</li>
                    <li className="page-item page-link" onClick={() => handleChangePage(3)}>3</li>
                    <li className="page-item page-link">

                        <span aria-hidden="true" onClick={() => handlenextandprev(1)}>&raquo;</span>
                        <span className="sr-only">Next</span>

                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Shoppage

