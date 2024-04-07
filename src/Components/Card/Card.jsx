const Card = ({data}) => {
    const {id, estate_title, segment_name, description, status, area, location, facilities, image_url, price} = data;
  return (
    <div className="mt-12">
      
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
          className="h-64 w-full object-fill"
            src={image_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-popi">{estate_title}</h2>
          <h4 className="font-popi text-base text-[#3f3f4d] font-medium">ID : {id}</h4>
          <p className="font-popi text-[#747a76]">{segment_name}</p>
            <p className="font-popi text-[#747a76]">{description}</p>
            <h4 className="font-popi text-base text-[#3f3f4d] font-medium">Price : {price}</h4>
            <h4 className="font-popi text-base text-[#3f3f4d] font-medium">Status : {status}</h4>
            <p className="font-popi text-[#747a76]">Area : {area} sq ft</p>
            <h4 className="font-popi text-base text-[#3f3f4d] font-medium">location : {location}</h4>
            <div className="flex gap-5">
                {
                    facilities.map((data, id) => <h4 key={id} className="font-popi text-xs text-[#3f3f4d] font-medium">{data}</h4>)
                }
            </div>
            
          <div className="card-actions">
            <button className="btn btn-primary bg-[#5e5fbf] text-white font-popi  w-full">View Property</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
