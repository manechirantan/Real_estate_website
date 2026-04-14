import buildingImg from "../assets/building.jpg";

export default function Hero({ data }) {
  if (!data) return null;

  return (
    <section id="home" className="grid md:grid-cols-2 min-h-[90vh] items-center px-6 py-12 gap-8 bg-white">
      {/* left */}
      <div>
        <p className="text-xs text-gray-500 font-medium tracking-widest mb-2">
          {data.subTagline}
        </p>
        <h1 className="text-3xl font-bold text-gray-800 mb-6 leading-tight">
          THINKING<br />
          OF A <span className="text-green-500">FANTASTIC VICINITY?</span>
        </h1>
        <img src={buildingImg} alt="building" className="w-full rounded-2xl object-cover max-h-72" />
      </div>

      {/* right */}
      <div className="flex flex-col items-center text-center gap-4">
        <div className="text-2xl">🌿</div>
        <h2 className="text-4xl font-black tracking-wide text-gray-800">
          {data.projectName || "VIGHNAHARTA INFINITY"}
        </h2>

        <div className="flex items-center gap-2 w-full">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-gray-400 text-xs">◇</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="grid grid-cols-2 divide-x divide-gray-200 w-full mt-2">
          <div className="pr-6 text-left">
            <p className="text-sm font-semibold text-gray-700">{data.Type || "SMART 1 BHK"}</p>
            <p className="text-xs text-gray-400 line-through mt-0.5">@ 74.99 Lacs</p>
            <p className="text-2xl font-bold text-gray-800">{data.Price || "₹ 69.99 Lacs*"}</p>
            <p className="text-xs text-gray-400">— onwards —</p>
          </div>
          <div className="pl-6 text-left">
            <p className="text-sm font-semibold text-gray-700">{data.Type2 || "PREMIUM 2 BHK"}</p>
            <p className="text-xs text-gray-400 line-through mt-0.5">@ 1.05 CR</p>
            <p className="text-2xl font-bold text-gray-800">{data.Price2 || "₹ 96.99 Lacs*"}</p>
            <p className="text-xs text-gray-400">— onwards —</p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-gray-400 text-xs">◇</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="flex items-start gap-2 mt-2">
          <span className="text-green-500 mt-0.5">📍</span>
          <p className="text-xs text-center leading-relaxed text-gray-600">{data.address}</p>
        </div>
      </div>
    </section>
  );
}