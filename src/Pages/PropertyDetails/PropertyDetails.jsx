import { useLoaderData, useParams } from "react-router-dom";

const PropertyDetails = () => {
  const properts = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const propert = properts.find((propert) => propert.id === idInt);
  console.log(propert);
  return (
    <div className="mt-7">
      <div className="md:grid md:grid-cols-8 md:gap-5 bg-base-100 rounded-2xl shadow-xl">
        <figure className="md:col-span-3 ">
          <img className="md:rounded-l-2xl md:h-full mx-auto md:mx-0" src={propert.image_url} alt="Movie" />
        </figure>
        <div className="md:col-span-5 mx-auto mt-6 py-7 md:mt-0 px-4">
          <h2 className="card-title font-popi font-bold text-3xl">{propert.estate_title}</h2>
          <p className="font-popi text-base text-[#79798a] mt-4">{propert.segment_name}</p>
          <p className="font-popi text-base text-[#3c3c40] mt-4">{propert.description}</p>
          <p className="font-popi text-base text-[#f57d7d] mt-4">Price : {propert.price}</p>
          <p className="font-popi text-base text-black mt-4">Status : {propert.status}</p>
          <p className="font-popi text-base text-black mt-4">Area : {propert.area} sq ft</p>
          <p className="font-popi text-base text-black mt-4">Location : {propert.location}</p>
          <div className="flex gap-5 mt-4">
                {
                    propert.facilities.map((data, id) => <h4 key={id} className="font-popi text-base text-[#3f3f4d] font-medium">{data}</h4>)
                }
            </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
