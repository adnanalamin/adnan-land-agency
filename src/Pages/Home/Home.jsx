import { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import Card from "../../Components/Card/Card";


const Home = () => {

    const [property, setProperty] = useState([])

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProperty(data))
    },[])
    return (
        <div>
            <Banner></Banner>
        <div className="mt-12 text-center">
            <h1 className="font-extrabold font-popi text-4xl">Estate</h1>
        </div>
            <div className="md:grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                
            {
                property.map(data => <Card key={data.id} data={data}></Card>)
            }
            </div>

        </div>
    );
};

export default Home;