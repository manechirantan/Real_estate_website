export default function Footer({ projectName, address }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xs font-bold text-green-700">
                LR
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-gray-800">
                  {projectName || "LIME"}
                </div>
                <div className="text-xs text-gray-500">
                  Luxury living, thoughtfully crafted
                </div>
              </div>
            </div>

            {address && (
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                {address}
              </p>
            )}
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#overview"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="#amenities"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Amenities
                </a>
              </li>
              <li>
                <a
                  href="#floorplans"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Floor Plans
                </a>
              </li>
              <li>
                <a
                  href="#connectivity"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Connectivity
                </a>
              </li>
              <li>
                <a
                  href="#developer"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Developer
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-3">
              Support
            </h3>
            <div className="space-y-3 text-sm text-gray-600">
              <p>
                For pricing, site visits, and availability, tap{" "}
                <a
                  href="#home"
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  Enquiry Now
                </a>
                .
              </p>
              <a
                href="#home"
                className="inline-flex items-center justify-center rounded-md bg-green-500 px-4 py-2 text-white text-sm hover:bg-green-600 transition-colors w-fit"
              >
                Back to top
              </a>
              <p className="text-xs text-gray-500">
                *Images and prices are for representation only.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-100 pt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500">
            © {year} {projectName || "LIME"}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <a
              href="#home"
              className="text-gray-500 hover:text-green-600 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#home"
              className="text-gray-500 hover:text-green-600 transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
