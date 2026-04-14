import { useState } from "react";
import floorImg from "../assets/floorplan.jpg";

export default function FloorPlans({ data }) {
  const [wing, setWing] = useState("All");
  const [selectedBhk, setSelectedBhk] = useState(null);

  const items = data?.items || [];
  const wings = ["All", ...new Set(items.map((i) => i.wing).filter(Boolean))];
  const filtered = wing === "All" ? items : items.filter((i) => i.wing === wing);
  const active = selectedBhk ? filtered.find((i) => i.bhkType === selectedBhk) : filtered[0];

  return (
    <section id="floorplans" className="bg-green-200 px-6 py-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        {data?.heading || "Floor Plans"}
      </h2>

      <div className="flex gap-6 justify-end mb-6 flex-wrap">
        {wings.map((w) => (
          <button key={w} onClick={() => { setWing(w); setSelectedBhk(null); }}
            className={`text-xs pb-1 transition-colors ${wing === w
              ? "text-gray-800 font-semibold border-b-2 border-gray-800"
              : "text-gray-500 hover:text-gray-700"}`}>
            {w}
          </button>
        ))}
      </div>

      {items.length === 0 ? (
        <p className="text-center text-gray-500 text-sm py-8">No floor plans added yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white rounded-2xl p-4">
            <img src={floorImg} alt="floor plan" className="w-full rounded-lg object-cover h-64" />
          </div>

          <div className="bg-white rounded-2xl p-6 flex flex-col gap-4">
            <div className="flex gap-2 flex-wrap">
              {filtered.map((item, i) => (
                <button key={i} onClick={() => setSelectedBhk(item.bhkType)}
                  className={`px-4 py-1.5 rounded text-sm font-medium transition-colors ${
                    active?.bhkType === item.bhkType
                      ? "bg-green-500 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                  {item.bhkType}
                </button>
              ))}
            </div>

            {active && (
              <div className="text-sm text-gray-600 flex flex-col gap-1">
                <p>Type — {active.bhkType}</p>
                <p>Area — {active.area}</p>
                <p>Price — {active.price || "Click for price"}</p>
              </div>
            )}

            <button className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded self-start transition-colors">
              Download Floor Plan
            </button>
          </div>
        </div>
      )}
    </section>
  );
}