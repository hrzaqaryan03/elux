import { useState } from "react";

const usePaginate = (data = []) => {

    const [currentIndex , setCurrentIndex] = useState(0)
    const totalPages = data.length

    const currentData = () => [data[currentIndex]]

    const goToNextPage = () => {
        if(currentIndex < totalPages - 1) {
            setCurrentIndex(currentIndex + 1)
        }else {
            setCurrentIndex(0)
        }
    }
    
    const goToPage = (index) => {
        setCurrentIndex(index)
    }

    return {
        currentIndex,
        goToPage,
        goToNextPage,
        currentData,
        totalPages
    }
    
    
}

export default usePaginate
