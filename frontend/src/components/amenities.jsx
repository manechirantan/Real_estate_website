import { useState } from "react";
import amenityImg from "../assets/amenity.jpg";

const icons = ["💪", "🎯", "🏃‍♂️", "🧘‍♂️", "🏊‍♂️", "🎭"];

export default function Amenities({ data }) {
  const [showAll, setShowAll] = useState(false);
  if (!data) return null;

  const items = data.items || [];
  const visible = showAll ? items : items.slice(0, 6);

  return (
    <section id="amenities" className="bg-teal-50 px-6 py-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">
        {data.heading || "Amenities"}
      </h2>
      <p className="text-sm text-gray-500 mb-8">{data.subheading}</p>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <img
          src={amenityImg}
          alt="amenities"
          className="w-full rounded-2xl object-cover h-72"
        />

        <div>
          <div className="grid grid-cols-3 gap-6">
            {visible.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-2"
              >
                <div
                  className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm"
                  style={{
                    fontFamily:
                      "Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji",
                  }}
                >
                  <span>{icons[i % icons.length]}</span>
                </div>
                <p className="text-xs text-gray-600 font-medium">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          {items.length > 6 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="mt-6 bg-green-500 hover:bg-green-600 text-white text-xs px-4 py-2 rounded transition-colors"
            >
              {showAll ? "View less" : "View more"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
