import { React, useContext } from 'react';
import Button from '@mui/material/Button';
import { ColorModeContext } from './provider/ColorThemeProvider';

const App = () => {
    const { mode, toggleMode } = useContext(ColorModeContext);

    return (
        <Button color='primary' onClick={toggleMode}>
            test
        </Button>
    );
};

export default App;
