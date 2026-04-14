import tower1 from "../assets/tower1.jpg";
import tower2 from "../assets/tower2.jpg";
import tower3 from "../assets/tower3.jpg";

const towers = [
  { img: tower1,  name: "Tower A" },
  { img: tower2, name: "Tower B" },
  { img: tower3,  name: "Tower C" },
];

export default function ConstructionUpdates({ data }) {
  if (!data) return null;

  return (
    <section id="construction" className="bg-white px-6 py-16 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">
        {data.heading || "Construction Updates"}
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {towers.map((t, i) => {
          const item = data.items?.[i];
          return (
            <div key={i} className="relative rounded-2xl overflow-hidden h-64">
              <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 text-left text-white">
                <span className="text-xs bg-green-500 px-2 py-0.5 rounded mb-1 inline-block">
                  {item?.title || t.status}
                </span>
                <p className="text-sm font-semibold">{item?.description || t.name}</p>
                <button className="text-xs text-green-300 hover:text-white mt-1 transition-colors">
                  Know More
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}