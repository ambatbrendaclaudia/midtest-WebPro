import React, {useEffect, useState} from 'react'
import NavBar from '../../molecules/NavBar';
import Card1 from '../../molecules/Card1'; 
import Card2 from '../../molecules/Card2';
import Card3 from '../../molecules/Card3';
import Axios from 'axios'

const Dashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://api.kawalcorona.com/indonesia")
            .then((res) => res.json())
            .then((json) => setData(json))
        // Axios.get("https://api.kawalcorona.com/indonesia")
        //     .then((res) => setData(res.data)
        // );
    }, []);

    console.log(data);
    return (
        <div className="container">
            <NavBar/>
            <h2>Dasboard</h2>
            <hr />
            <h3>Indonesia</h3>
            <div className="row align-item-start">
                {
                    data.map((item) => (
                <>
                    <Card1 positif={item.positif}/>
                    <Card2 sembuh={item.sembuh}/>
                    <Card3 meninggal={item.meninggal}/>
                </>   
                    ))
                }
            </div>
        </div>
    )
}


export default Dashboard;