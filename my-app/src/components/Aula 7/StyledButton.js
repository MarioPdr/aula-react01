import React from 'react';
import Button from '@mui/material/Button';

const StyledButton = () => {
    return (
        <div>
            <Button variant="text" color="primary">Text</Button>
            <Button variant="contained" color="primary">Contained</Button>
            <Button variant="outlined" color="primary">Outlined</Button>
        </div>
    );
};

export default StyledButton;
