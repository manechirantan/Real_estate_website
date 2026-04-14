import mongoose from "mongoose";

let schema = mongoose.Schema;

const faqSchema = new schema({
  question: { type: String, default: "" },
  answer: { type: String, default: "" },
});

const constructionSchema = new schema({
  title: { type: String, default: "" },
  description: { type: String, default: "" },
});

const amenitySchema = new schema({
  title: { type: String, default: "" },
  description: { type: String, default: "" },
});

const connectivitySchema = new schema({
  place: { type: String, default: "" },
  distance: { type: String, default: "" },
});

const floorPlanSchema = new schema({
  wing: { type: String, default: "" },
  bhkType: { type: String, default: "" },
  area: { type: String, default: "" },
  price: { type: String, default: "" },
});

const contentSchema = new schema(
  {
    hero: {
      tagline: { type: String, default: "Thinking of a Fantastic Vicinity?" },
      subTagline: { type: String, default: "25+ Modern Lifestyle Amenities" },
      projectName: { type: String, default: "Megaplex Prime Infinity" },
      Type: { type: String, default: "Smart 1 BHK" },
      Price: { type: String, default: "₹ 69.99 Lacs*" },
      Type2: { type: String, default: "Premium 2 BHK" },
      Price2: { type: String, default: "₹ 96.99 Lacs*" },
      address: { type: String, default: "Bldg No. 333/334, Circle, Kannamwar Nagar 1, Vikhroli (East)" },
    },

    projectOverview: {
      heading: { type: String, default: "About Project" },
      description: { type: String, default: "" },
      brochure: { type: String, default: "Download Brochure" },
    },

    nearbyConnectivity: {
      heading: { type: String, default: "Nearby Connectivity" },
      items: { type: [connectivitySchema], default: [] },
    },

    amenities: {
      heading: { type: String, default: "Amenities" },
      subheading: { type: String, default: "This project provides everything your family expects." },
      items: { type: [amenitySchema], default: [] },
    },

    floorPlans: {
      heading: { type: String, default: "Floor Plans" },
      items: { type: [floorPlanSchema], default: [] },
    },

    aboutDeveloper: {
      heading: { type: String, default: "About Developer" },
      description: { type: String, default: "" },
      Label1: { type: String, default: "1.33 LAC" },
      Label2: { type: String, default: "449+" },
      Label3: { type: String, default: "5.77 LAC" },
      Label4: { type: String, default: "3 TLAC" },
    },

    constructionUpdates: {
      heading: { type: String, default: "Construction Updates" },
      items: { type: [constructionSchema], default: [] },
    },

    faq: {
      heading: { type: String, default: "Frequently Asked Questions" },
      items: { type: [faqSchema], default: [] },
    },
  },
  { timestamps: true }
);

let Content = mongoose.model("Content", contentSchema);

export default Content;