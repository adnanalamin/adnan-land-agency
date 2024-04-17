import PropTypes from 'prop-types'; 

const HappyClientCard = ({data}) => {
    return (
        <div className="">
            <div className="max-w-[350px] h-auto py-8 px-10  lg:px-8 rounded-md mx-auto bg-white relative">
                    <img src={data.image} className="w-24 h-24 rounded-full absolute right-0 left-0 border-4 border-white shadow-xl mx-auto  -top-7" />
                    <div className="flex space-x-1 mt-14 font-popi font-extrabold text-[#8B8B8B]">
                       Rating - {data.rating}
                    </div>
                    <div className="mt-4 text-left">
                        <p className="text-sm leading-relaxed">{data.description}</p>
                        <h4 className="text-base whitespace-nowrap font-extrabold mt-4">{data.name}</h4>
                        <p className="mt-1 text-xs text-gray-400">{data.job_title}</p>
                    </div>
                </div>
        </div>
    );
};

HappyClientCard.propTypes = {
    data: PropTypes.object
}
export default HappyClientCard;