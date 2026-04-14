import img1 from "../assets/interior1.jpg";
import img2 from "../assets/garden.jpg";
import img3 from "../assets/gym.jpg";

export default function AboutProject({ data }) {
  if (!data) return null;

  return (
    <section
      id="overview"
      className="bg-[#eaf4f4] px-6 md:px-16 py-16 grid md:grid-cols-2 gap-12 items-center"
    >
      <div className="relative flex items-center justify-center h-[350px] md:h-[450px]">
        <img
          src={img2}
          alt=""
          className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full shadow-lg"
        />

        <img
          src={img1}
          alt=""
          className="absolute top-0 left-10 w-50 h-32 object-cover rounded-2xl shadow-md"
        />

        <img
          src={img3}
          alt=""
          className="absolute bottom-4 right-20 w-44 h-44 object-cover rounded-full shadow-md"
        />
      </div>

      
      <div className="max-w-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-5">
          {data.heading || "About Project"}
        </h2>

        <p className="text-gray-600 leading-relaxed text-sm mb-6">
          {data.description}
        </p>

        <button className="bg-green-500 hover:bg-green-600 text-white text-sm px-6 py-3 rounded-md shadow transition-all">
          {data.brochureLabel || "Download Brochure"}
        </button>
      </div>
    </section>
  );
}
