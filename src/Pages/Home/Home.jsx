import { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import Card from "../../Components/Card/Card";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    useEffect(() => {
        document.title = 'Adnan Land Agency';
      }, []);

    const [property, setProperty] = useState([])

    useEffect(()=>{
        AOS.init();
    },[])

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProperty(data))
    },[])
    return (
        <div>
            <Banner></Banner>
        <div className="mt-12 text-center">
            <h1 data-aos="fade-down-left" className="font-extrabold font-popi text-4xl">Estate</h1>
            <p data-aos="zoom-out-left" className="mt-8 md:w-3/5 mx-auto font-popi text-[#5b5f66] text-xs font-semibold">At Adnan Land Agency, we specialize in connecting our clients with the perfect land and properties to meet their needs. Whether you are searching for a sprawling countryside retreat, a cozy suburban plot, or a prime piece of urban real estate, our dedicated team is here to guide you every step of the way.</p>
        </div>
            <div  className="md:grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                
            {
                property.map(data => <Card key={data.id} data={data}></Card>)
            }
            </div>

        </div>
    );
};

export default Home;