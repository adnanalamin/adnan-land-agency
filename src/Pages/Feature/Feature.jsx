import { IoMdSettings } from "react-icons/io";
import { GrDocumentPerformance, GrShieldSecurity } from "react-icons/gr";


const Feature = () => {
    return (
        <div>
            <div className="bg-[#F7F7F7] text-[#333] font-[sans-serif]">
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-extrabold text-center mb-16">Discover Our Exclusive Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-md:max-w-md mx-auto">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="p-6">
              <IoMdSettings className="text-5xl"></IoMdSettings>
              <h3 className="text-xl font-semibold mb-2">Customization</h3>
              <p className="text-gray-500 text-sm">Tailor our product to suit your needs. Tailor our product to suit your needs.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="p-6">
              <GrShieldSecurity className="text-5xl"></GrShieldSecurity>
              <h3 className="text-xl font-semibold mb-2">Security</h3>
              <p className="text-gray-500 text-sm">Your data is protected by the latest security measures.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="p-6">
              <GrDocumentPerformance className="text-5xl"></GrDocumentPerformance>
              <h3 className="text-xl font-semibold mb-2">Performance</h3>
              <p className="text-gray-500 text-sm">Experience blazing-fast performance with our product.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Feature;