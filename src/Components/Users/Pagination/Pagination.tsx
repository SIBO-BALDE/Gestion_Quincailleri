import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface PaginationScreenProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

const PaginationScreen: React.FC<PaginationScreenProps> = ({ page, setPage, totalPages }) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value); // Met à jour la page lorsque l'utilisateur change de page
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handleChange}
        sx={{
          '.Mui-selected': {
            backgroundColor: '#fe5300', 
            color: 'white',
          },
          '.MuiPaginationItem-root': {
            '&:hover': {
              backgroundColor: '#fe5300', 
              color: 'white',
            },
            '&:focus': {
              backgroundColor: '#fe5300', 
              color: 'white',
            },
           
          },
        }}
      />
    </Stack>
  );
};

export default PaginationScreen;
