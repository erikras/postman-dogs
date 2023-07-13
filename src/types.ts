import { z } from "zod";

export const breedSchema = z.union([
  z.literal("Affenpinscher"),
  z.literal("African"),
  z.literal("Airedale"),
  z.literal("Akita"),
  z.literal("Appenzeller"),
  z.literal("Shepherd Australian"),
  z.literal("Basenji"),
  z.literal("Beagle"),
  z.literal("Bluetick"),
  z.literal("Borzoi"),
  z.literal("Bouvier"),
  z.literal("Boxer"),
  z.literal("Brabancon"),
  z.literal("Briard"),
  z.literal("Norwegian Buhund"),
  z.literal("Boston Bulldog"),
  z.literal("English Bulldog"),
  z.literal("French Bulldog"),
  z.literal("Staffordshire Bullterrier"),
  z.literal("Australian Cattledog"),
  z.literal("Chihuahua"),
  z.literal("Chow"),
  z.literal("Clumber"),
  z.literal("Cockapoo"),
  z.literal("Border Collie"),
  z.literal("Coonhound"),
  z.literal("Cardigan Corgi"),
  z.literal("Cotondetulear"),
  z.literal("Dachshund"),
  z.literal("Dalmatian"),
  z.literal("Great Dane"),
  z.literal("Scottish Deerhound"),
  z.literal("Dhole"),
  z.literal("Dingo"),
  z.literal("Doberman"),
  z.literal("Norwegian Elkhound"),
  z.literal("Entlebucher"),
  z.literal("Eskimo"),
  z.literal("Lapphund Finnish"),
  z.literal("Bichon Frise"),
  z.literal("Germanshepherd"),
  z.literal("Italian Greyhound"),
  z.literal("Groenendael"),
  z.literal("Havanese"),
  z.literal("Afghan Hound"),
  z.literal("Basset Hound"),
  z.literal("Blood Hound"),
  z.literal("English Hound"),
  z.literal("Ibizan Hound"),
  z.literal("Plott Hound"),
  z.literal("Walker Hound"),
  z.literal("Husky"),
  z.literal("Keeshond"),
  z.literal("Kelpie"),
  z.literal("Komondor"),
  z.literal("Kuvasz"),
  z.literal("Labradoodle"),
  z.literal("Labrador"),
  z.literal("Leonberg"),
  z.literal("Lhasa"),
  z.literal("Malamute"),
  z.literal("Malinois"),
  z.literal("Maltese"),
  z.literal("Bull Mastiff"),
  z.literal("English Mastiff"),
  z.literal("Tibetan Mastiff"),
  z.literal("Mexicanhairless"),
  z.literal("Mix"),
  z.literal("Bernese Mountain"),
  z.literal("Swiss Mountain"),
  z.literal("Newfoundland"),
  z.literal("Otterhound"),
  z.literal("Caucasian Ovcharka"),
  z.literal("Papillon"),
  z.literal("Pekinese"),
  z.literal("Pembroke"),
  z.literal("Miniature Pinscher"),
  z.literal("Pitbull"),
  z.literal("German Pointer"),
  z.literal("Geanlonghair Pointer"),
  z.literal("Pomeranian"),
  z.literal("Medium Poodle"),
  z.literal("Miniature Poodle"),
  z.literal("Standard Poodle"),
  z.literal("Toy Poodle"),
  z.literal("Pug"),
  z.literal("Puggle"),
  z.literal("Pyrenees"),
  z.literal("Redbone"),
  z.literal("Esapeake Retriever"),
  z.literal("Curly Retriever"),
  z.literal("Atcoated Retriever"),
  z.literal("Golden Retriever"),
  z.literal("Hodesian Ridgeback"),
  z.literal("Rottweiler"),
  z.literal("Saluki"),
  z.literal("Samoyed"),
  z.literal("Schipperke"),
  z.literal("Giant Schnauzer"),
  z.literal("Iniature Schnauzer"),
  z.literal("Italian Segugio"),
  z.literal("English Setter"),
  z.literal("Gordon Setter"),
  z.literal("Irish Setter"),
  z.literal("Sharpei"),
  z.literal("English Sheepdog"),
  z.literal("Shetland Sheepdog"),
  z.literal("Shiba"),
  z.literal("Shihtzu"),
  z.literal("Blenheim Spaniel"),
  z.literal("Brittany Spaniel"),
  z.literal("Cocker Spaniel"),
  z.literal("Irish Spaniel"),
  z.literal("Japanese Spaniel"),
  z.literal("Sussex Spaniel"),
  z.literal("Welsh Spaniel"),
  z.literal("Japanese Spitz"),
  z.literal("English Springer"),
  z.literal("Stbernard"),
  z.literal("American Terrier"),
  z.literal("Australian Terrier"),
  z.literal("Bedlington Terrier"),
  z.literal("Border Terrier"),
  z.literal("Cairn Terrier"),
  z.literal("Dandie Terrier"),
  z.literal("Fox Terrier"),
  z.literal("Irish Terrier"),
  z.literal("Kerryblue Terrier"),
  z.literal("Lakeland Terrier"),
  z.literal("Norfolk Terrier"),
  z.literal("Norwich Terrier"),
  z.literal("Patterdale Terrier"),
  z.literal("Russell Terrier"),
  z.literal("Scottish Terrier"),
  z.literal("Sealyham Terrier"),
  z.literal("Silky Terrier"),
  z.literal("Tibetan Terrier"),
  z.literal("Toy Terrier"),
  z.literal("Welsh Terrier"),
  z.literal("Westhighland Terrier"),
  z.literal("Wheaten Terrier"),
  z.literal("Yorkshire Terrier"),
  z.literal("Tervuren"),
  z.literal("Vizsla"),
  z.literal("Spanish Waterdog"),
  z.literal("Weimaraner"),
  z.literal("Whippet"),
]);

export const breeds = {
  Affenpinscher: "affenpinscher",
  African: "african",
  Airedale: "airedale",
  Akita: "akita",
  Appenzeller: "appenzeller",
  "Shepherd Australian": "australian/shepherd",
  Basenji: "basenji",
  Beagle: "beagle",
  Bluetick: "bluetick",
  Borzoi: "borzoi",
  Bouvier: "bouvier",
  Boxer: "boxer",
  Brabancon: "brabancon",
  Briard: "briard",
  "Norwegian Buhund": "buhund/norwegian",
  "Boston Bulldog": "bulldog/boston",
  "English Bulldog": "bulldog/english",
  "French Bulldog": "bulldog/french",
  "Staffordshire Bullterrier": "bullterrier/staffordshire",
  "Australian Cattledog": "cattledog/australian",
  Chihuahua: "chihuahua",
  Chow: "chow",
  Clumber: "clumber",
  Cockapoo: "cockapoo",
  "Border Collie": "collie/border",
  Coonhound: "coonhound",
  "Cardigan Corgi": "corgi/cardigan",
  Cotondetulear: "cotondetulear",
  Dachshund: "dachshund",
  Dalmatian: "dalmatian",
  "Great Dane": "dane/great",
  "Scottish Deerhound": "deerhound/scottish",
  Dhole: "dhole",
  Dingo: "dingo",
  Doberman: "doberman",
  "Norwegian Elkhound": "elkhound/norwegian",
  Entlebucher: "entlebucher",
  Eskimo: "eskimo",
  "Lapphund Finnish": "finnish/lapphund",
  "Bichon Frise": "frise/bichon",
  Germanshepherd: "germanshepherd",
  "Italian Greyhound": "greyhound/italian",
  Groenendael: "groenendael",
  Havanese: "havanese",
  "Afghan Hound": "hound/afghan",
  "Basset Hound": "hound/basset",
  "Blood Hound": "hound/blood",
  "English Hound": "hound/english",
  "Ibizan Hound": "hound/ibizan",
  "Plott Hound": "hound/plott",
  "Walker Hound": "hound/walker",
  Husky: "husky",
  Keeshond: "keeshond",
  Kelpie: "kelpie",
  Komondor: "komondor",
  Kuvasz: "kuvasz",
  Labradoodle: "labradoodle",
  Labrador: "labrador",
  Leonberg: "leonberg",
  Lhasa: "lhasa",
  Malamute: "malamute",
  Malinois: "malinois",
  Maltese: "maltese",
  "Bull Mastiff": "mastiff/bull",
  "English Mastiff": "mastiff/english",
  "Tibetan Mastiff": "mastiff/tibetan",
  Mexicanhairless: "mexicanhairless",
  Mix: "mix",
  "Bernese Mountain": "mountain/bernese",
  "Swiss Mountain": "mountain/swiss",
  Newfoundland: "newfoundland",
  Otterhound: "otterhound",
  "Caucasian Ovcharka": "ovcharka/caucasian",
  Papillon: "papillon",
  Pekinese: "pekinese",
  Pembroke: "pembroke",
  "Miniature Pinscher": "pinscher/miniature",
  Pitbull: "pitbull",
  "German Pointer": "pointer/german",
  "Geanlonghair Pointer": "pointer/geanlonghair",
  Pomeranian: "pomeranian",
  "Medium Poodle": "poodle/medium",
  "Miniature Poodle": "poodle/miniature",
  "Standard Poodle": "poodle/standard",
  "Toy Poodle": "poodle/toy",
  Pug: "pug",
  Puggle: "puggle",
  Pyrenees: "pyrenees",
  Redbone: "redbone",
  "Esapeake Retriever": "retriever/esapeake",
  "Curly Retriever": "retriever/curly",
  "Atcoated Retriever": "retriever/atcoated",
  "Golden Retriever": "retriever/golden",
  "Hodesian Ridgeback": "ridgeback/hodesian",
  Rottweiler: "rottweiler",
  Saluki: "saluki",
  Samoyed: "samoyed",
  Schipperke: "schipperke",
  "Giant Schnauzer": "schnauzer/giant",
  "Iniature Schnauzer": "schnauzer/iniature",
  "Italian Segugio": "segugio/italian",
  "English Setter": "setter/english",
  "Gordon Setter": "setter/gordon",
  "Irish Setter": "setter/irish",
  Sharpei: "sharpei",
  "English Sheepdog": "sheepdog/english",
  "Shetland Sheepdog": "sheepdog/shetland",
  Shiba: "shiba",
  Shihtzu: "shihtzu",
  "Blenheim Spaniel": "spaniel/blenheim",
  "Brittany Spaniel": "spaniel/brittany",
  "Cocker Spaniel": "spaniel/cocker",
  "Irish Spaniel": "spaniel/irish",
  "Japanese Spaniel": "spaniel/japanese",
  "Sussex Spaniel": "spaniel/sussex",
  "Welsh Spaniel": "spaniel/welsh",
  "Japanese Spitz": "spitz/japanese",
  "English Springer": "springer/english",
  Stbernard: "stbernard",
  "American Terrier": "terrier/american",
  "Australian Terrier": "terrier/australian",
  "Bedlington Terrier": "terrier/bedlington",
  "Border Terrier": "terrier/border",
  "Cairn Terrier": "terrier/cairn",
  "Dandie Terrier": "terrier/dandie",
  "Fox Terrier": "terrier/fox",
  "Irish Terrier": "terrier/irish",
  "Kerryblue Terrier": "terrier/kerryblue",
  "Lakeland Terrier": "terrier/lakeland",
  "Norfolk Terrier": "terrier/norfolk",
  "Norwich Terrier": "terrier/norwich",
  "Patterdale Terrier": "terrier/patterdale",
  "Russell Terrier": "terrier/russell",
  "Scottish Terrier": "terrier/scottish",
  "Sealyham Terrier": "terrier/sealyham",
  "Silky Terrier": "terrier/silky",
  "Tibetan Terrier": "terrier/tibetan",
  "Toy Terrier": "terrier/toy",
  "Welsh Terrier": "terrier/welsh",
  "Westhighland Terrier": "terrier/westhighland",
  "Wheaten Terrier": "terrier/wheaten",
  "Yorkshire Terrier": "terrier/yorkshire",
  Tervuren: "tervuren",
  Vizsla: "vizsla",
  "Spanish Waterdog": "waterdog/spanish",
  Weimaraner: "weimaraner",
  Whippet: "whippet",
} as const;

export const dogSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  image: z.string(),
  age: z.number(),
  breed: breedSchema,
});
export type Dog = z.infer<typeof dogSchema>;

export const dogToCreateSchema = dogSchema.omit({ id: true, image: true });

export const databaseSchema = z.array(dogSchema);

export type Database = z.infer<typeof databaseSchema>;
