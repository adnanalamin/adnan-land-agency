import { MdEmail } from "react-icons/md";
import { SlSocialFacebook } from "react-icons/sl";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Contactus = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = location.pathname.split("/").join([]);
  }, [location]);
  return (
    <div className="mt-14 mb-12">
      <div className="grid sm:grid-cols-2 items-center gap-16 my-6 mx-auto max-w-4xl bg-white text-[#333] font-[sans-serif]">
        <div>
          <h1 className="text-3xl font-extrabold font-popi">Contact US</h1>
          <p className="text-sm text-gray-400 mt-3">
            Have some big idea or brand to develop and need help? Then reach out
            we haved love to hear about your project and provide help.
          </p>
          <div className="mt-12">
            <h2 className="text-lg font-extrabold">Email</h2>
            <ul className="mt-3">
              <li className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <MdEmail className="text-xl text-[#007bff]"></MdEmail>
                </div>
                <a
                  href="javascript:void(0)"
                  className="text-[#007bff] text-sm ml-3"
                >
                  <small className="block">Mail</small>
                  <strong>adnanland@agency.com</strong>
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-12">
            <h2 className="text-lg font-extrabold">Socials</h2>
            <ul className="flex mt-3 space-x-4">
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="javascript:void(0)">
                  <SlSocialFacebook className="text-xl text-[#007bff]"></SlSocialFacebook>
                </a>
              </li>
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="javascript:void(0)">
                  <FaLinkedin className="text-xl text-[#007bff]"></FaLinkedin>
                </a>
              </li>
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="javascript:void(0)">
                  <FaXTwitter className="text-xl text-[#007bff]"></FaXTwitter>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <form className="ml-auo space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-[#007bff]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-[#007bff]"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-[#007bff]"
          />
          <textarea
            placeholder="Message"
            rows="6"
            className="w-full rounded-md px-4 bg-gray-100 text-sm pt-3 outline-[#007bff]"
          ></textarea>
          <button
            type="button"
            className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-3 w-full"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
