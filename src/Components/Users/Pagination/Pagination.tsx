import React from 'react'
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



export default function PaginationScreen() {
    const [page, setPage] = React.useState(1);
    const handleChange = (event: any, value: React.SetStateAction<number>) => {
      setPage(value);
    };
  
  return (
    <Stack spacing={2}>
      {/* <Typography>Page: {page}</Typography> */}
      <Pagination count={10} page={page} onChange={handleChange} />
    </Stack>
  )
}
