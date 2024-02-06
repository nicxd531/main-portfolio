import React from 'react'
import Pagination  from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function Pg({totalPages,currentPage,setCurrentPage}) {
  return (
    <Stack spacing={2} className='d-flex w-200 justify-content-center align-items-center mt-4' sx={{display:"flex",justifyContent:"center",alignItems:"center",mt:{xs:1,lg:0}}}>
                <Pagination 
                count={totalPages}
                page={currentPage}
                onChange={(event, page) => setCurrentPage(page)}
                />
    </Stack>
  )
}

export default Pg