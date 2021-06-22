import React, {useEffect, useState} from 'react'
import NavBar from '../../molecules/NavBar';
import Card1 from '../../molecules/Card1'; 
import Axios from 'axios'

const About = () => {
    const [provinsi, setProvinsi] = useState([]);

    useEffect(() => {
        fetch("https://api.kawalcorona.com/indonesia/provinsi")
            .then((res) => res.json())
            .then((json) => setProvinsi(json))
        // Axios.get("https://api.kawalcorona.com/indonesia")
        //     .then((res) => setUsers(res.data)
        // );
    }, []);

    console.log(provinsi);
    return (
        <div className="container">
            <NavBar/>
            <h1>Provinsi</h1>
            <hr />
            <div className="row align-item-start">
            </div>
        </div>
    )
}


export default About;