import { Button } from "@chakra-ui/react";

import './pagination.css';

interface PaginationComponentProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}
export default function PaginationComponent({currentPage, totalPages, onPageChange} : PaginationComponentProps){
    
    const handlePrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if(currentPage < totalPages){
            onPageChange(currentPage + 1);
        }
    }


    const handlePageClick = (page: number) =>{
        onPageChange(page);
    }
    
    const renderPageNumbers = () =>{
        const pageNumbers = [];
        for( let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button 
                    key={i} 
                    className={`page-number ${currentPage === i ? 'active' : ''}`}
                    onClick={() => handlePageClick(i)} > 

                    {i}
                </button>
            );
        }
        return pageNumbers;
    }

    return(
        <>  
            <div className="pagination">
                <Button onClick={handlePrevPage} disabled={currentPage ===1}>
                    Volta
                </Button>
                {renderPageNumbers()}
                <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </Button>
            </div>
        </>
    )
}