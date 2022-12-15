import { useState, useEffect } from 'react'
import users from '../../houses.json'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SingleBedOutlinedIcon from '@mui/icons-material/SingleBedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import CropRotateIcon from '@mui/icons-material/CropRotate';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import './List.css';

function List() {

    const [data, setData] = useState(users);
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [range, setRange] = useState('');
    const [type, setType] = useState('');
    const [search, setSearch] = useState('');
    console.log(range);
    console.log(date.split('-', 1))

    // return (date == '' ? item : [(item.available.split("-", 1)] == date.split("-", 1)));



    return (
        <div className="main">
            <div className="heading">
                <h1>Search properties to rent</h1>


            </div>
            <div className="filter">
                <div className="location">
                    <label for="places" style={{ fontSize: '1.4rem', color: 'darkgray' }}>Location</label>
                    <br />
                    <select name="places" id="places" className='places' style={{ color: 'black', backgroundColor: 'white' }} value={location} onChange={(e) => setLocation(e.target.value)}>
                        <option value="Florida">Florida,USA</option>
                        <option value="TX">TX,USA</option>
                        <option value="IN">IN,USA</option>
                        <option value="Washington">Washington,USA</option>
                        <option value="NewYork">NewYor,USA</option>
                    </select>

                </div>
                <hr style={{ width: '0.5px', height: '3rem' }} />

                <div className="date">
                    <div style={{ fontSize: '1.4rem', color: 'darkgray' }}>When</div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', fontWeight: '600' }}>
                        Select Move-in Date
                    </div>
                    <div>
                        <input type="date" id="birthday" name="birthday" onChange={e => setDate(e.target.value)} style={{ fontWeight: '600', fontSize: '1rem', color: 'black', backgroundColor: 'white' }}></input>
                    </div>
                </div>
                <hr style={{ width: '0.5px', height: '3rem' }} />

                <div className="price">

                    <label for="price-range" style={{ fontSize: '1.4rem', color: 'darkgray' }}>Prices</label>
                    <br />
                    <select name="price-range" id="price-range" style={{ fontWeight: '600', fontSize: '1rem', color: 'black', backgroundColor: 'white' }} value={range} onChange={e => setRange(e.target.value)}>
                        <option value='price1'>$500-$2500</option>
                        <option value='price2'>$2500-$3500</option>
                        <option value='price3'>$3500-$5000</option>
                        <option value='price4'>$5000-$8000</option>
                    </select>
                </div>
                <hr style={{ width: '0.5px', height: '3rem' }} />


                <div className="property-type">
                    <label for="Home" style={{ fontSize: '1.4rem', color: 'darkgray' }}>Property Type</label>
                    <br />
                    <select name='Home' id="Home" style={{ fontWeight: '600', fontSize: '1rem', color: 'black', backgroundColor: 'white' }} value={type} onChange={e => setType(e.target.value)}>
                        <option value='Houses'>Houses</option>
                        <option value='Apartment'>Apartment</option>
                        <option value='Bungalow'>Bungalow</option>
                        <option value='BarnHouse'>Barn House</option>
                        <option value='Chalet'>Chalet</option>
                        <option value='Castle'>Castle</option>
                    </select>
                </div>
                <hr style={{ width: '0.5px', height: '3rem' }} />

                <div><div>
                    <input type='text' placeholder='Search houses ....' value={search} onChange={e => (setSearch(e.target.value))} style={{ color: 'black', padding: '5px 0px' }} />

                </div></div>

            </div>
            <div className='list'>
                {
                    data && data.filter((item) => {

                        return (location == '' ? item : (item.city.includes(location))
                        )
                    }).filter((item) => {

                        return range == '' ? item : range == 'price1' ? (item.price >= 500 && item.price <= 2500) : range == 'price2' ? (item.price >= 2500 && item.price <= 3500) : range == 'price3' ? (item.price <= 5000 && item.price >= 3500) : (item.price >= 5000 && item.price <= 8000);

                    }).filter((item) => {
                        const date1 = date.split('-')
                        const date2 = item.available.split('-')
                        console.log(date1)
                        console.log(date2)


                        return (
                            date1 == '' ? item : (date1[0] == date2[0] && date1[1] == date2[1])
                        )

                    })
                        .filter((item) => {
                            return (type == '' ? item : (item.type.includes(type)));
                        }).filter((item) => {
                            return (search.toLowerCase() === '' ? item : item.hname.toLowerCase().includes(search))
                        }).map(({ picture, hname, address, city, country, price, type, available, beds, bathrooms, area, id }) => (
                            <div className="card">
                                <div className="row-1">
                                    <img src={picture} alt='img' style={{ width: '400px', height: '250px' }} />
                                </div>
                                <div className="row-2">
                                    <div className="price">
                                        ${price.toLocaleString(undefined, { maximumFractionDigits: 2 })}<span style={{ fontSize: '1rem', fontWeight: '400', color: '#D3D3D3' }}>/month</span>
                                    </div>
                                    <div className="icon">
                                        <FavoriteBorderIcon color='primary' fontSize='0.5rem' sx={{ padding: '5px', border: '1px solid', borderRadius: '50%' }} />
                                    </div>

                                </div>
                                <div className="row-3">
                                    <h2>{hname}</h2>
                                </div>
                                <div className="row-4">
                                    {address}, {city} , {country}
                                </div>

                                <hr style={{ width: '25rem' }} />
                                <div className="row-5">
                                    <div className="beds" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <SingleBedOutlinedIcon color='primary' fontSize='small' /> {beds}Beds
                                    </div>
                                    <div className="bath" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <BathtubOutlinedIcon color='primary' fontSize='small' />{bathrooms}Bathrooms
                                    </div>
                                    <div className="area" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <CropRotateIcon color='primary' fontSize='small' /> {area}<sup>2</sup>
                                    </div>
                                </div>
                            </div>

                        ))
                }
            </div>
        </div>
    )
}

export default List