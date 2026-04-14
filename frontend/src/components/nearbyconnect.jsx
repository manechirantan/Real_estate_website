export default function NearbyConnect({ data }) {
  if (!data) return null;

  const items = data.items || [];

  return (
    <section id="connectivity" className="bg-white px-6 py-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        {data.heading || "Nearby Connectivity"}
      </h2>

      {items.length === 0 ? (
        <p className="text-center text-gray-400 text-sm">No connectivity data added yet.</p>
      ) : (
        <div className="max-w-2xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <div key={i} className="bg-teal-50 rounded-xl px-4 py-3 flex justify-between items-center">
              <span className="text-sm text-gray-700 font-medium">{item.place}</span>
              <span className="text-xs text-green-600 font-semibold ml-2">{item.distance}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}