import { useState } from "react";

const fallbackItems = [
  { question: "What makes this project a trusted name in real estate?", answer: "We have delivered 6+ projects with over 449 happy families across Mumbai." },
  { question: "What types of residential options are available?", answer: "We offer Smart 1 BHK and Premium 2 BHK apartments with modern amenities." },
  { question: "Why should I invest here?", answer: "Prime location in Vikhroli East with excellent connectivity and 20+ amenities." },
  { question: "How does the developer ensure quality?", answer: "Every project is built on a foundation of integrity, excellence and innovation." },
];

export default function FAQ({ data }) {
  const [open, setOpen] = useState(null);

  const heading = data?.heading || "Frequently Asked Questions";
  const items = data?.items?.length > 0 ? data.items : fallbackItems;

  return (
    <section id="faq" className="bg-teal-50 px-6 py-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">{heading}</h2>

      <div className="max-w-2xl mx-auto flex flex-col gap-3">
        {items.map((item, i) => (
          <div key={i} className="bg-green-100 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex justify-between items-center px-5 py-4 text-sm text-gray-700 font-medium hover:bg-green-200 transition-colors text-left"
            >
              <span>{item.question}</span>
              <span className="text-lg text-green-600 ml-4 shrink-0">{open === i ? "−" : "+"}</span>
            </button>
            {open === i && (
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}