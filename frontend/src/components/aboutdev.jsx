import dev1 from "../assets/dev1.jpg";
import dev2 from "../assets/dev2.jpg";

export default function AboutDeveloper({ data }) {
  if (!data) return null;

  const stats = [
    { label: "Projects", value: "6" },
    { label: "sq. ft. area developed", value: data.Label1 },
    { label: "Happy Families", value: data.Label2 },
    { label: "sq. ft. ongoing", value: data.Label3 },
    { label: "sq. ft. Area Upcoming", value: data.Label4 },
  ];

  return (
    <section id="developer" className="bg-teal-50 px-6 py-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">{data.heading || "About Developer"}</h2>
        <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">{data.description}</p>
      </div>

      <div className="bg-green-200 rounded-xl px-6 py-4 flex flex-wrap justify-around gap-4 mb-8">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <p className="text-lg font-bold text-gray-800">{s.value}</p>
            <p className="text-xs text-gray-600">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <img src={dev1} alt="" className="w-full h-48 object-cover rounded-2xl" />
        <img src={dev2} alt="" className="w-full h-48 object-cover rounded-2xl" />
      </div>
    </section>
  );
}