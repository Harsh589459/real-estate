import React from 'react';
import DraftsIcon from '@mui/icons-material/Drafts';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Button from '@mui/material/Button';

import './Navbar.css';

function Navbar() {
    return (
        <div className='main-nav'>
            <div className="main-head">
                <DraftsIcon color='primary' />
                Estatery
            </div>
            <div className="nav-content">
                <div className="rent hover">Rent</div>
                <div className="buy hover">Buy</div>
                <div className="sell hover">Sell</div>
                <div className="manage hover">
                    <div className="dropdown" style={{ width: '5rem', padding: '0px' }}>
                        Manage  <KeyboardArrowDownOutlinedIcon sx={{ position: 'relative', top: '3px', left: '4px', fontSize: 'small', padding: '0px' }} />
                        <div className="dropdown-content">
                            <p style={{ color: 'black' }}>House</p>
                            <p style={{ color: 'black' }}>Home</p>
                            <p style={{ color: 'black' }}>Estate</p>
                        </div>
                    </div>

                </div>
                <div className="resources hover" style={{ width: '7rem' }}>
                    <div className="dropdown" >
                        Resources  <KeyboardArrowDownOutlinedIcon sx={{ position: 'relative', top: '3px', left: '4px', fontSize: 'small' }} />
                        <div className="dropdown-content">
                            <p style={{ color: 'black' }}>Houseresource</p>
                            <p style={{ color: 'black' }}>Homeresource</p>
                            <p style={{ color: 'black' }}>Estateresource</p>
                        </div>
                    </div>

                </div>
            </div >
            <div className="login-signup">
                <Button variant="outlined" size="small">
                    Login
                </Button>
                <Button variant="contained" size="small">
                    SignUp
                </Button>

            </div>

        </div >
    )
}

export default Navbar