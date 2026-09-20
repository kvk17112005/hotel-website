import chefImage from "@/assets/chef-narayana.jpg";
import exteriorImage from "@/assets/hotel-exterior.jpg";
import feastImage from "@/assets/hotel-feast.jpg";
import interiorImage from "@/assets/hotel-interior.jpg";
import vegImage from "@/assets/vegetarian-plate.jpg";
import nonVegImage from "@/assets/nonveg-plate.jpg";

import amritsariBharwanKulcha from "@/assets/amritsari-bharwan-kulcha.jpg";
import andhraKodiVepudu from "@/assets/andhra-kodi-vepudu.jpg";
import broccoliMalai from "@/assets/broccoli-malai.jpg";
import butterChicken1947 from "@/assets/butter-chicken-1947.jpg";
import dalSvGrand from "@/assets/dal-sv-grand.jpg";
import darkChocolateMishti from "@/assets/dark-chocolate-mishti.jpg";
import keralaAvial from "@/assets/kerala-avial.jpg";
import kolhapuriLamb from "@/assets/kolhapuri-lamb.jpg";
import lambBiryani from "@/assets/lamb-biryani.jpg";
import lucknowGalouti from "@/assets/lucknow-galouti.jpg";
import morelMillet from "@/assets/morel-millet.jpg";
import muttonRoganJosh from "@/assets/mutton-rogan-josh.jpg";
import paneerAngaar from "@/assets/paneer-angaar.jpg";
import paneerKhurchan from "@/assets/paneer-khurchan.jpg";
import pepperChickenTikka from "@/assets/pepper-chicken-tikka.jpg";
import prawnGheeRoast from "@/assets/prawn-ghee-roast.jpg";
import roseJamun from "@/assets/rose-jamun.jpg";
import seafoodSmallPlate from "@/assets/seafood-small-plate.jpg";
import meenMoilee from "@/assets/meen-moilee.jpg";
import slowCookedLambShank from "@/assets/slow-cooked-lamb-shank.jpg";
import smokedGobi from "@/assets/smoked-gobi.jpg";
import subzDumBiryani from "@/assets/subz-dum-biryani.jpg";
import tenderCoconutPayasam from "@/assets/tender-coconut-payasam.jpg";
import wildMushroomKulcha from "@/assets/wild-mushroom-kulcha.jpg";

export const images = { chefImage, exteriorImage, feastImage, interiorImage, vegImage, nonVegImage };

export type ChefName = "Chef Narayana" | "Chef Arjun" | "Chef Vikram";

export type Chef = {
  name: ChefName;
  role: string;
  story: string;
  image: string;
};

export const chefs: Chef[] = [
  {
    name: "Chef Narayana",
    role: "Executive chef · Modern Indian",
    story: "A generous cook shaped by temple kitchens, coastal markets and grand hotels.",
    image: chefImage,
  },
  {
    name: "Chef Arjun",
    role: "Chef de cuisine · Tandoor & vegetarian",
    story: "Arjun brings bright produce, patient fermentation and the quiet drama of the tandoor.",
    image: vegImage,
  },
  {
    name: "Chef Vikram",
    role: "Chef de cuisine · Coastal & ember",
    story: "Vikram cooks with smoke, seafood and the bold spice memory of India’s western coast.",
    image: nonVegImage,
  },
];

export type Dish = {
  slug: string;
  name: string;
  kind: "Vegetarian" | "Non-Vegetarian";
  course: "Small Plates" | "From the Tandoor" | "Mains" | "Rice & Breads" | "Desserts";
  note: string;
  story: string;
  price: string;
  image: string;
  highlights: string[];
  ingredients?: string[];
  chef: ChefName;
};

const dishImages: Record<string, string> = {
  "smoked-gobi": smokedGobi,
  "morel-millet": morelMillet,
  "paneer-angaar": paneerAngaar,
  "broccoli-malai": broccoliMalai,
  "dal-sv-grand": dalSvGrand,
  "paneer-khurchan": paneerKhurchan,
  "subz-dum-biryani": subzDumBiryani,
  "wild-mushroom-kulcha": wildMushroomKulcha,
  "rose-jamun": roseJamun,
  "tender-coconut-payasam": tenderCoconutPayasam,
  "nalli-on-ember": slowCookedLambShank,
  "coastal-catch": seafoodSmallPlate,
  "pepper-chicken-tikka": pepperChickenTikka,
  "galouti": lucknowGalouti,
  "butter-chicken-1947": butterChicken1947,
  "mutton-rogan-josh": muttonRoganJosh,
  "meen-moilee": meenMoilee,
  "grand-lamb-biryani": lambBiryani,
  "prawn-ghee-roast": prawnGheeRoast,
  "chocolate-mishti": darkChocolateMishti,
  "avial-coconut": keralaAvial,
  "bharwan-kulcha": amritsariBharwanKulcha,
  "andhra-chilli-chicken": andhraKodiVepudu,
  "kolhapuri-lamb": kolhapuriLamb,
};

const rawDishes: Array<Omit<Dish, "chef" | "image">> = [
  {
    slug: "smoked-gobi",
    name: "Smoked Gobi",
    kind: "Vegetarian",
    course: "Small Plates",
    note: "Charred cauliflower · coriander emulsion · black lime",
    story: "Cauliflower is ember-roasted until its edges caramelise, then lifted with fresh coriander and the citrus depth of black lime.",
    price: "₹695",
    highlights: ["Ember roasted", "Gluten free", "Coriander oil"],
    ingredients: ["Cauliflower", "Black lime", "Fresh coriander", "Coriander seed oil", "Gram flour", "Smoked salt", "Mustard oil"],
  },
  {
    slug: "morel-millet",
    name: "Morel & Millet",
    kind: "Vegetarian",
    course: "Small Plates",
    note: "Himalayan morels · pearl millet · truffle rasam",
    story: "Mountain morels meet an ancient grain in Chef Narayana’s quiet conversation between the Himalayas and the southern coast.",
    price: "₹925",
    highlights: ["Himalayan morels", "Heritage millet", "Truffle rasam"],
    ingredients: ["Himalayan morels", "Pearl millet", "Truffle oil", "Tomato rasam", "Clarified butter", "Curry leaves", "Asafoetida"],
  },
  {
    slug: "paneer-angaar",
    name: "Paneer Angaar",
    kind: "Vegetarian",
    course: "From the Tandoor",
    note: "House paneer · smoked pepper · kasundi cream",
    story: "Fresh paneer is marinated overnight, fired in the tandoor and finished with mustard cream and charred peppers.",
    price: "₹795",
    highlights: ["House-made paneer", "Tandoor fired", "Mustard cream"],
    ingredients: ["House-made paneer", "Smoked black pepper", "Kasundi mustard cream", "Garlic", "Green chilli", "Ghee", "Charcoal"],
  },
  {
    slug: "broccoli-malai",
    name: "Broccoli Malai",
    kind: "Vegetarian",
    course: "From the Tandoor",
    note: "Broccoli · aged cheddar · cardamom · almond",
    story: "A delicate malai marinade protects the broccoli over fierce heat, leaving the florets charred yet tender.",
    price: "₹745",
    highlights: ["Almond crust", "Mild spice", "Tandoor fired"],
    ingredients: ["Broccoli", "Aged cheddar", "Cardamom", "Ground almond", "Fresh cream", "Green chilli", "Kasuri methi"],
  },
  {
    slug: "dal-sv-grand",
    name: "Dal SV Grand",
    kind: "Vegetarian",
    course: "Mains",
    note: "Black lentils · cultured butter · 18-hour simmer",
    story: "Our house signature rests over a low flame through the night for exceptional silkiness and depth.",
    price: "₹675",
    highlights: ["18-hour simmer", "House signature", "Cultured butter"],
    ingredients: ["Black lentils (urad dal)", "Cultured butter", "Tomato", "Fresh cream", "Ginger", "Garlic", "Garam masala", "Kasuri methi"],
  },
  {
    slug: "paneer-khurchan",
    name: "Paneer Khurchan",
    kind: "Vegetarian",
    course: "Mains",
    note: "Cottage cheese · tomato · fenugreek · sweet pepper",
    story: "A robust Delhi classic, prepared with torn house paneer and a bright tomato-fenugreek masala.",
    price: "₹775",
    highlights: ["North Indian classic", "House paneer", "Medium spice"],
    ingredients: ["Torn cottage cheese (paneer)", "Tomato", "Fenugreek (methi)", "Sweet pepper", "Onion", "Garam masala", "Cultured butter", "Green chilli"],
  },
  {
    slug: "subz-dum-biryani",
    name: "Subz Dum Biryani",
    kind: "Vegetarian",
    course: "Rice & Breads",
    note: "Seasonal vegetables · aged basmati · saffron",
    story: "A sealed clay pot opens tableside to release saffron, mint and the fragrance of long-aged basmati.",
    price: "₹825",
    highlights: ["Dum cooked", "Aged basmati", "Served with raita"],
    ingredients: ["Seasonal vegetables", "Aged basmati rice", "Saffron", "Fresh mint", "Browned onion", "Yoghurt", "Biryani masala", "Clarified butter"],
  },
  {
    slug: "wild-mushroom-kulcha",
    name: "Wild Mushroom Kulcha",
    kind: "Vegetarian",
    course: "Rice & Breads",
    note: "Forest mushrooms · black garlic · truffle butter",
    story: "A crisp, blistered kulcha hiding a savoury heart of mushrooms, black garlic and restrained truffle.",
    price: "₹425",
    highlights: ["Clay oven", "Black garlic", "Truffle butter"],
    ingredients: ["Forest mushrooms", "Black garlic", "Truffle butter", "Wheat flour", "Ajwain", "Red onion", "Fresh coriander"],
  },
  {
    slug: "rose-jamun",
    name: "Rose Jamun",
    kind: "Vegetarian",
    course: "Desserts",
    note: "Caramelised milk · Damask rose · pistachio",
    story: "The familiar becomes refined: warm caramelised milk dumplings with fragrant rose and pistachio praline.",
    price: "₹495",
    highlights: ["Served warm", "Pistachio praline", "Damask rose"],
    ingredients: ["Reduced milk solids (khoya)", "Damask rose", "Pistachio", "Pistachio praline", "Unrefined sugar", "Green cardamom", "Rose water"],
  },
  {
    slug: "tender-coconut-payasam",
    name: "Tender Coconut Payasam",
    kind: "Vegetarian",
    course: "Desserts",
    note: "Young coconut · jaggery · toasted cashew",
    story: "A cool coastal finale of tender coconut, unrefined jaggery and gently toasted cashew.",
    price: "₹475",
    highlights: ["Coastal recipe", "Naturally sweetened", "Served chilled"],
    ingredients: ["Young coconut", "Coconut milk", "Jaggery", "Toasted cashew", "Basmati rice", "Green cardamom"],
  },
  {
    slug: "nalli-on-ember",
    name: "Nalli on Ember",
    kind: "Non-Vegetarian",
    course: "From the Tandoor",
    note: "Lamb shank · fermented chilli · smoked marrow",
    story: "Slow-braised lamb is glazed over embers, balancing deep marrow richness with the brightness of fermented chilli.",
    price: "₹1,495",
    highlights: ["Slow braised", "Ember finished", "Chef signature"],
    ingredients: ["Lamb shank", "Fermented chilli", "Smoked bone marrow", "Garam masala", "Yoghurt", "Clarified butter", "Fresh turmeric"],
  },
  {
    slug: "coastal-catch",
    name: "Coastal Catch",
    kind: "Non-Vegetarian",
    course: "Small Plates",
    note: "Line-caught fish · kokum · coconut charcoal",
    story: "The day’s catch is cooked over coconut shell charcoal and served with tart kokum and coastal herbs.",
    price: "₹1,095",
    highlights: ["Line caught", "Coconut charcoal", "Kokum glaze"],
    ingredients: ["Line-caught fish", "Kokum", "Coconut shell charcoal", "Coastal herbs", "Fresh turmeric", "Curry leaves", "Coconut oil"],
  },
  {
    slug: "pepper-chicken-tikka",
    name: "Pepper Chicken Tikka",
    kind: "Non-Vegetarian",
    course: "From the Tandoor",
    note: "Free-range chicken · Tellicherry pepper · curry leaf",
    story: "Juicy chicken meets the floral heat of Tellicherry pepper and a final crackle of curry leaf.",
    price: "₹895",
    highlights: ["Free-range chicken", "Tellicherry pepper", "Tandoor fired"],
    ingredients: ["Free-range chicken", "Tellicherry pepper", "Curry leaves", "Yoghurt", "Ginger-garlic paste", "Red chilli", "Clarified butter"],
  },
  {
    slug: "galouti",
    name: "Lucknow Galouti",
    kind: "Non-Vegetarian",
    course: "Small Plates",
    note: "Lamb · long pepper · saffron sheermal",
    story: "A silken Awadhi kebab perfumed with long pepper and mace, set on a miniature saffron sheermal.",
    price: "₹975",
    highlights: ["Awadhi recipe", "Hand-ground spice", "Saffron bread"],
    ingredients: ["Finely minced lamb", "Long pepper", "Mace", "Clove", "Green cardamom", "Rose petals", "Clarified butter", "Saffron sheermal"],
  },
  {
    slug: "butter-chicken-1947",
    name: "Butter Chicken 1947",
    kind: "Non-Vegetarian",
    course: "Mains",
    note: "Tandoori chicken · cultured butter · tomato",
    story: "Our homage to the original Delhi icon: smoky chicken, ripe tomato and cultured butter in exact balance.",
    price: "₹995",
    highlights: ["Heritage recipe", "Tandoori chicken", "Cultured butter"],
    ingredients: ["Tandoori chicken", "Cultured butter", "Tomato", "Fresh cream", "Cashew", "Fenugreek (kasuri methi)", "Ginger-garlic paste"],
  },
  {
    slug: "mutton-rogan-josh",
    name: "Mutton Rogan Josh",
    kind: "Non-Vegetarian",
    course: "Mains",
    note: "Goat · Kashmiri chilli · fennel · black cardamom",
    story: "Aromatic rather than fiery, this Kashmiri preparation layers fennel, cardamom and the warmth of red chilli.",
    price: "₹1,150",
    highlights: ["Kashmiri style", "Slow cooked", "Aromatic spice"],
    ingredients: ["Goat meat", "Kashmiri chilli", "Fennel seed", "Black cardamom", "Ginger", "Garlic", "Yoghurt", "Browned onion"],
  },
  {
    slug: "meen-moilee",
    name: "Meen Moilee",
    kind: "Non-Vegetarian",
    course: "Mains",
    note: "Sea bass · coconut milk · ginger · green chilli",
    story: "Delicate sea bass is barely poached in coconut milk with ginger, turmeric and garden green chilli.",
    price: "₹1,250",
    highlights: ["Kerala inspired", "Sea bass", "Gentle spice"],
    ingredients: ["Sea bass", "Coconut milk", "Ginger", "Green chilli", "Fresh turmeric", "Curry leaves", "Coconut oil"],
  },
  {
    slug: "grand-lamb-biryani",
    name: "Grand Lamb Biryani",
    kind: "Non-Vegetarian",
    course: "Rice & Breads",
    note: "Lamb · aged basmati · saffron · browned onion",
    story: "Marinated lamb and aged basmati are sealed beneath pastry and cooked on dum for an aromatic tableside reveal.",
    price: "₹1,195",
    highlights: ["Dum cooked", "Aged basmati", "Tableside opening"],
    ingredients: ["Marinated lamb", "Aged basmati rice", "Saffron", "Browned onion", "Fresh mint", "Yoghurt", "Biryani masala", "Sealed pastry"],
  },
  {
    slug: "prawn-ghee-roast",
    name: "Prawn Ghee Roast",
    kind: "Non-Vegetarian",
    course: "Small Plates",
    note: "Tiger prawn · Byadgi chilli · ghee · tamarind",
    story: "Mangalorean in spirit, with sweet tiger prawns lacquered in ghee, chilli and tamarind.",
    price: "₹1,195",
    highlights: ["Tiger prawns", "Byadgi chilli", "Mangalorean style"],
    ingredients: ["Tiger prawns", "Byadgi chilli", "Ghee", "Tamarind", "Garlic", "Curry leaves", "Fresh coconut"],
  },
  {
    slug: "chocolate-mishti",
    name: "Dark Chocolate Mishti",
    kind: "Vegetarian",
    course: "Desserts",
    note: "Single-origin chocolate · mishti doi · cocoa nib",
    story: "Single-origin dark chocolate is tempered by cultured Bengali yoghurt and the crunch of cocoa nib.",
    price: "₹545",
    highlights: ["Single-origin cacao", "Cultured yoghurt", "Cocoa nib"],
    ingredients: ["Single-origin dark chocolate", "Mishti doi (cultured yoghurt)", "Cocoa nib", "Unrefined jaggery", "Cardamom"],
  },
  {
    slug: "avial-coconut",
    name: "Kerala Avial",
    kind: "Vegetarian",
    course: "Mains",
    note: "Seasonal vegetables · coconut · curry leaves",
    story: "A Kerala classic of tender seasonal vegetables folded through a gentle coconut and yoghurt sauce, finished with curry leaves and coconut oil.",
    price: "₹625",
    highlights: ["Kerala classic", "Coconut finished", "Seasonal produce"],
    ingredients: ["Seasonal vegetables", "Coconut", "Curry leaves", "Yoghurt", "Coconut oil", "Ginger", "Green chilli"],
  },
  {
    slug: "bharwan-kulcha",
    name: "Amritsari Bharwan Kulcha",
    kind: "Vegetarian",
    course: "Rice & Breads",
    note: "Potato · pomegranate · ajwain · cultured butter",
    story: "A blistered tandoor bread stuffed with spiced potato, pomegranate and ajwain, served with cultured butter.",
    price: "₹395",
    highlights: ["Tandoor baked", "Punjabi recipe", "Served hot"],
    ingredients: ["Potato", "Pomegranate", "Ajwain", "Cultured butter", "Wheat flour", "Kalonji (nigella)", "Fresh coriander"],
  },
  {
    slug: "andhra-chilli-chicken",
    name: "Andhra Kodi Vepudu",
    kind: "Non-Vegetarian",
    course: "Small Plates",
    note: "Free-range chicken · curry leaf · dried red chilli",
    story: "A spirited Andhra preparation of crisp-edged chicken tossed with roasted spices, curry leaf and dried red chilli.",
    price: "₹875",
    highlights: ["Andhra style", "Roasted spice", "Curry leaf"],
    ingredients: ["Free-range chicken", "Curry leaves", "Dried red chilli", "Roasted spices", "Garlic", "Onion", "Black pepper"],
  },
  {
    slug: "kolhapuri-lamb",
    name: "Kolhapuri Lamb Rassa",
    kind: "Non-Vegetarian",
    course: "Mains",
    note: "Lamb · coconut · sesame · Kolhapuri masala",
    story: "Tender lamb in a deeply roasted Kolhapuri masala with coconut and sesame, balanced for warmth rather than heat.",
    price: "₹1,175",
    highlights: ["Slow cooked", "Kolhapuri masala", "Roasted coconut"],
    ingredients: ["Lamb", "Coconut", "Sesame", "Kolhapuri masala", "Onion", "Ginger-garlic paste", "Tamarind", "Curry leaves"],
  },
];

const chefByDish: Record<string, ChefName> = {
  "smoked-gobi": "Chef Arjun",
  "morel-millet": "Chef Arjun",
  "paneer-angaar": "Chef Arjun",
  "broccoli-malai": "Chef Arjun",
  "dal-sv-grand": "Chef Narayana",
  "paneer-khurchan": "Chef Arjun",
  "subz-dum-biryani": "Chef Narayana",
  "wild-mushroom-kulcha": "Chef Arjun",
  "rose-jamun": "Chef Narayana",
  "tender-coconut-payasam": "Chef Narayana",
  "nalli-on-ember": "Chef Narayana",
  "coastal-catch": "Chef Vikram",
  "pepper-chicken-tikka": "Chef Vikram",
  "galouti": "Chef Narayana",
  "butter-chicken-1947": "Chef Narayana",
  "mutton-rogan-josh": "Chef Narayana",
  "meen-moilee": "Chef Vikram",
  "grand-lamb-biryani": "Chef Narayana",
  "prawn-ghee-roast": "Chef Vikram",
  "chocolate-mishti": "Chef Narayana",
  "avial-coconut": "Chef Arjun",
  "bharwan-kulcha": "Chef Arjun",
  "andhra-chilli-chicken": "Chef Vikram",
  "kolhapuri-lamb": "Chef Vikram",
};

export const dishes: Dish[] = rawDishes.map((dish) => ({
  ...dish,
  image: dishImages[dish.slug] ?? vegImage,
  chef: chefByDish[dish.slug] ?? "Chef Narayana",
}));

export const navItems = [
  { label: "Home", to: "/" as const },
  { label: "Menu", to: "/menu" as const },
  { label: "Chef", to: "/chef" as const },
  { label: "Experience", to: "/experience" as const },
  { label: "Contact", to: "/contact" as const },
];

export const featuredDishes = [dishes[0], dishes[4], dishes[10], dishes[17]].filter(
  (dish): dish is Dish => Boolean(dish),
);
