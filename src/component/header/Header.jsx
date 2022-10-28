import { React, useContext, useEffect, useRef, useState } from 'react';
import './Header.css';
import { ColorModeContext } from '../../provider/ColorThemeProvider';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import GitHubIcon from '@mui/icons-material/GitHub';
import Tooltip from '@mui/material/Tooltip';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

export const Header = () => {
    const { mode, toggleMode } = useContext(ColorModeContext);

    return (
        <div className='header' color='primary'>
            <div className='header-side'></div>
            <div className='header-center'>
                <div className='header-logo'>
                    <h1 className='header-logo__text'>{'</> dev.log'}</h1>
                </div>
                <div className='header-menu'>
                    <Tooltip title='search article'>
                        <IconButton>
                            <SearchIcon color='icon' />
                        </IconButton>
                    </Tooltip>
                    <Tooltip
                        title={mode === 'dark' ? 'light mode' : 'dark mode'}
                    >
                        <IconButton onClick={toggleMode}>
                            {mode === 'dark' ? (
                                <Brightness7Icon color='icon' />
                            ) : (
                                <Brightness4Icon color='icon' />
                            )}
                        </IconButton>
                    </Tooltip>
                    <a href='https://github.com/dev-saku' target='_brank'>
                        <Tooltip title='github'>
                            <IconButton>
                                <GitHubIcon color='icon' />
                            </IconButton>
                        </Tooltip>
                    </a>
                </div>
            </div>
            <div className='header-side'></div>
        </div>
    );
};

export default Header;
