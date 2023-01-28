import React, { useEffect, useState } from 'react'
import './pagination.css';

function Pagination({ pages, setCurrentPage}) {
    
  // const pages = 5;

    const numOfPages = [];

    for(let i = 1; i <= pages; i++) {

    numOfPages.push(i);
    }
    const [currentButton, setCurrentButton] = useState(1);

    useEffect(()=>{
      setCurrentPage(currentButton);
    }, [currentButton, setCurrentPage]);
    
  return (
    <div className='pages'>
        <div className='hint-text'>Showing <b>3</b> out of <b>25</b> entries
            <ul className='list'>
              <li className={`${currentButton === 1 ? 'page-item disabled' : 'page-item' } `} ><a href="#!"
                onClick={ () => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}
              
            >previous</a></li>

            { 
            numOfPages?.map((page, index) => {
                return (
                <li key={index} className= {`${currentButton === page ? 'page-item active' : 'page-item' } `}
                ><a href="#1" className="page-link"
                onClick={() => setCurrentButton(page)}
                >{page}</a></li>
                )
            })
            }

            <li className={`${currentButton === numOfPages.length ? 'page-item disabled' : 'page-item' } `} ><a href="#!"
              onClick={ () => setCurrentButton((next) => next === numOfPages.length ? next : next + 1)}
            >Next</a></li>
            </ul>
            </div>
    </div>
  )
}

export default Pagination
