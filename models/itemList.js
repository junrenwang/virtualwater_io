// reference: Petersson, Tashina; Secondi, Luca; Magnani, Andrea; Antonelli, Marta; Dembska, Katarzyna; Valentini, Riccardo; et al. (2021). SU-EATABLE LIFE: a comprehensive database of carbon and water footprints of food commodities. figshare. Dataset. https://doi.org/10.6084/m9.figshare.13271111.v2
const itemList = [

    {
      category: "AGRICULTURAL PROCESSED",
      name: "APPLE JUICE",
      wc: "1140"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "BARLEY FLAKES",
      wc: "1977"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "BEANS (F)",
      wc: "801"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "BEER*",
      wc: "155"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "BEET SUGAR",
      wc: "865"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "BREAD",
      wc: "667"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "BREAD MULTICEREAL**",
      wc: "771"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "BREAD PLAIN**",
      wc: "1031"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "BREAD WHOLE**",
      wc: "887"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "CAKES AND CROISSANT**",
      wc: "1640"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "CANE MOLASSE",
      wc: "527"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "CANE SUGAR",
      wc: "1724"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "CASSAVA FLOUR",
      wc: "1878"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "CHOCOLATE",
      wc: "17196"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "CHOCOLATE OR CREAM FILLED COOKIES**",
      wc: "2902"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "COCOA BUTTER",
      wc: "33938"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "COCOA CAKES AND CROISSANT**",
      wc: "3468"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "COCOA PASTE",
      wc: "24238"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "COCOA POWDER",
      wc: "15618"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "COCONUT OIL",
      wc: "4490"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "COFFEE ROASTED",
      wc: "19956"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "COFFEE SOLUBLE",
      wc: "640"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "COFFEE STANDARD",
      wc: "1120"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "COFFEE STRONG",
      wc: "1600"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "COFFEE WEAK",
      wc: "800"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "CORN CANNED",
      wc: "807"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "CRISPBREAD**",
      wc: "1423"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "DRIED CASSAVA",
      wc: "1610"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "EGG PASTA*",
      wc: "4637"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "FLAVORED CRACKERS**",
      wc: "1378"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "FRUCTOSE",
      wc: "1782"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "GRAPEFRUIT JUICE",
      wc: "675"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "KETCHUP",
      wc: "534"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "LINSEED OIL",
      wc: "9415"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "MAIZE FLOUR & MEAL",
      wc: "1167"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "MAIZE GROATS",
      wc: "1081"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "MAIZE HULLED, PEARLED, SLICED OR KIBBLED",
      wc: "1314"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "MAIZE OIL",
      wc: "2575"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "MAIZE STARCH",
      wc: "1671"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "MALT",
      wc: "1950"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "MALT, ROASTED",
      wc: "2437"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "MANIOC (CASSAVA) STARCH",
      wc: "2254"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "MARGARINE*",
      wc: "1324"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "MIXED VEGETABLES (F)",
      wc: "339"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "OAT FLAKES",
      wc: "2416"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "OAT GROATS",
      wc: "2536"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "OAT MEAL",
      wc: "2536"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "OLIVE OIL",
      wc: "14415"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "OLIVE OIL REFINED",
      wc: "14726"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "ORANGE JUICE",
      wc: "1019"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "PALM OIL",
      wc: "4971"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "PASTA*",
      wc: "1508"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "PEANUT OIL",
      wc: "7529"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "PEAS (F)",
      wc: "850"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "PESTO",
      wc: "2099"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "PESTO WITHOUT GARLIC",
      wc: "2249"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "PINEAPPLE JUICE",
      wc: "1273"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "PLAIN CRACKERS**",
      wc: "1447"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "POTATO FLAKES",
      wc: "1044"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "POTATO FLOUR & MEAL",
      wc: "1436"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "POTATO STARCH",
      wc: "1512"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "POTATOES (F)",
      wc: "575"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "QUORNE",
      wc: "2000"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "RAPESEED OIL",
      wc: "4301"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "RICE FLOUR & MEAL",
      wc: "2429"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "RICE GROATS",
      wc: "2230"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "RYE FLOUR",
      wc: "1930"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "SESAM OIL",
      wc: "21793"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "SIMPLE COOKIES**",
      wc: "1723"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "SOY BURGER",
      wc: "1053"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "SOY MILK*",
      wc: "2030"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "SOY PASTE",
      wc: "572"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "SOY SAUCE",
      wc: "613"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "SOYBEAN FLOUR",
      wc: "2523"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "SOYBEAN OIL",
      wc: "4190"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "SPINACH (F)",
      wc: "834"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "SUNFLOWER OIL",
      wc: "6792"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "SWEET CORN (F)",
      wc: "700"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "TAPIOCA OF CASSAVA",
      wc: "2818"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "TAPIOCA OF POTATOES",
      wc: "1436"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "TOFU",
      wc: "1724.5"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "TOMATO & BASIL",
      wc: "147"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "TOMATO ARRABBIATA",
      wc: "155"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "TOMATO JUICE",
      wc: "267"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "TOMATO JUICE CONCENTRATED*",
      wc: "1069"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "TOMATO PASTE",
      wc: "855"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "TOMATO PEELED",
      wc: "267"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "TOMATO PUREE",
      wc: "713"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "WHEAT FLOUR",
      wc: "1849"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "WHEAT GLUTEN",
      wc: "4189"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "WHEAT PELLETS",
      wc: "2036"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "WHEAT STARCH",
      wc: "1436"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "WHOLEGRAIN CRACKERS**",
      wc: "617"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "WINE*",
      wc: "524"
    },
    {
      category: "AGRICULTURAL PROCESSED",
      name: "YEAST COMPRESSED*",
      wc: "51"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "ASS MEAT",
      wc: "50274"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "ASS OFFAL",
      wc: "3152"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "BACON",
      wc: "6116"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "BEEF BONE FREE MEAT*",
      wc: "15139"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "BEEF CURED MEAT",
      wc: "23799"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "BEEF LIVER",
      wc: "7746"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "BEEF MEAT WITH BONE",
      wc: "10943"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "BEEF OFFAL",
      wc: "11155"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "BUTTER*",
      wc: "5659"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "BUTTERED MILK",
      wc: "1599"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "CHEESE",
      wc: "5253"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "CHEESE BLUE-VEINED",
      wc: "5060"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "CHEESE GRATED",
      wc: "5060"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "CHICKEN BONE FREE MEAT",
      wc: "3960"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "CHICKEN MEAT WITH BONE*",
      wc: "3330"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "COW MILK",
      wc: "1260.5"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "CREAM",
      wc: "3838"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "CURED HAM BONE FREE",
      wc: "9850"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "CURED HAM WITH BONE",
      wc: "5798"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "CURED PORK BONE FREE",
      wc: "6238"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "CURED SHOULDERS WITH BONE",
      wc: "5798"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "DUCK BONE FREE MEAT",
      wc: "4325"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "EGG YOLKS",
      wc: "3270"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "EGGS",
      wc: "2562"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "EGGS SHELLED",
      wc: "3632"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "FRESH HAM WITH BONE",
      wc: "5677"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "FRESH SHOULDERS WITH BONE",
      wc: "5677"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "GOAT BONE FREE MEAT*",
      wc: "4160"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "GOAT OFFAL",
      wc: "3152"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "GOOSE BONE FREE MEAT",
      wc: "4325"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "GRAN MORAVIA",
      wc: "2067"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "GUINEA BONE FREE MEAT",
      wc: "4325"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "HARD AND SEMI-HARD CHEESE",
      wc: "12139"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "HINNY MEAT",
      wc: "50274"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "HINNY OFFAL",
      wc: "3152"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "HORSE MEAT",
      wc: "50274"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "HORSE OFFAL",
      wc: "3152"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "KEPHIR",
      wc: "1599"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "LAMB BONE FREE MEAT*",
      wc: "10412"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "LAMB MEAT WITH BONE*",
      wc: "4362"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "MASCARPONE",
      wc: "6100"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "MEALWORMS*",
      wc: "4341"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "MILK ACID",
      wc: "1599"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "MILK CREAMY",
      wc: "1898"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "MILK POWDER",
      wc: "4750"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "MOZZARELLA",
      wc: "9410"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "MULE MEAT",
      wc: "50274"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "MULE OFFAL",
      wc: "3152"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "PARMIGIANO REGGIANO",
      wc: "10200"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "PORK BONE FREE MEAT*",
      wc: "6299"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "PORK CUTS WITH BONE",
      wc: "5798"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "PORK FAT",
      wc: "4323"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "PORK LIVER",
      wc: "684"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "PORK MEAT WITH BONE",
      wc: "4361"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "PORK OFFAL",
      wc: "1254"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "POULTRY FAT",
      wc: "4323"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "RICOTTA",
      wc: "2470.5"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "SAUSAGES",
      wc: "15600"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "SHEEP BONE FREE MEAT*",
      wc: "8705"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "SHEEP CARCASSE WITH BONE",
      wc: "8310"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "SHEEP CUTS WITH BONE",
      wc: "8320"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "SHEEP OFFAL",
      wc: "3152"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "STRACCHINO",
      wc: "5600"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "TURKEY BONE FREE MEAT",
      wc: "4325"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "YOGURT FLAVORED",
      wc: "1659"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "YOGURT WHITE",
      wc: "1540"
    },
    {
      category: "ANIMAL HUSBANDRY",
      name: "YOGURT WHITE LACTOSE FREE",
      wc: "1040"
    },
    {
      category: "CROPS",
      name: "ALMOND SHELLED",
      wc: "16095"
    },
    {
      category: "CROPS",
      name: "ALMOND WITH SHELL",
      wc: "8047"
    },
    {
      category: "CROPS",
      name: "ANISE",
      wc: "8280"
    },
    {
      category: "CROPS",
      name: "APPLE",
      wc: "622"
    },
    {
      category: "CROPS",
      name: "APPLES",
      wc: "6847"
    },
    {
      category: "CROPS",
      name: "APRICOT",
      wc: "1287"
    },
    {
      category: "CROPS",
      name: "ARECA NUT",
      wc: "11165"
    },
    {
      category: "CROPS",
      name: "ARTICHOKE",
      wc: "818"
    },
    {
      category: "CROPS",
      name: "ASPARAGUS* ",
      wc: "2150"
    },
    {
      category: "CROPS",
      name: "AVOCADO",
      wc: "1805"
    },
    {
      category: "CROPS",
      name: "BADIAN",
      wc: "8280"
    },
    {
      category: "CROPS",
      name: "BANANA",
      wc: "500"
    },
    {
      category: "CROPS",
      name: "BARLEY",
      wc: "1423"
    },
    {
      category: "CROPS",
      name: "BEAN",
      wc: "5053"
    },
    {
      category: "CROPS",
      name: "BEAN (fresh)",
      wc: "516"
    },
    {
      category: "CROPS",
      name: "BLACK TEA",
      wc: "8856"
    },
    {
      category: "CROPS",
      name: "BLACKBERRY",
      wc: "413"
    },
    {
      category: "CROPS",
      name: "BLUEBERRY",
      wc: "845"
    },
    {
      category: "CROPS",
      name: "BRASSICAS",
      wc: "280"
    },
    {
      category: "CROPS",
      name: "BROCCOLI",
      wc: "325"
    },
    {
      category: "CROPS",
      name: "BRUSSEL SPROUT",
      wc: "285"
    },
    {
      category: "CROPS",
      name: "CABAGGE",
      wc: "280"
    },
    {
      category: "CROPS",
      name: "CAHSEW APPLE",
      wc: "3793"
    },
    {
      category: "CROPS",
      name: "CAHSEW NUT",
      wc: "14218"
    },
    {
      category: "CROPS",
      name: "CARDAMOM",
      wc: "34319"
    },
    {
      category: "CROPS",
      name: "CARROT",
      wc: "195"
    },
    {
      category: "CROPS",
      name: "CAULIFLOWER",
      wc: "285"
    },
    {
      category: "CROPS",
      name: "CHERRY SOUR",
      wc: "1411"
    },
    {
      category: "CROPS",
      name: "CHERRY SWEET",
      wc: "1604"
    },
    {
      category: "CROPS",
      name: "CHESTNUT",
      wc: "2750"
    },
    {
      category: "CROPS",
      name: "CHICKPEA",
      wc: "4177"
    },
    {
      category: "CROPS",
      name: "CHILLY",
      wc: "7365"
    },
    {
      category: "CROPS",
      name: "CHILLY FRESH",
      wc: "379"
    },
    {
      category: "CROPS",
      name: "CINNAMON",
      wc: "15526"
    },
    {
      category: "CROPS",
      name: "CITRUS",
      wc: "457"
    },
    {
      category: "CROPS",
      name: "CLEMENTINE",
      wc: "748"
    },
    {
      category: "CROPS",
      name: "CLOVE",
      wc: "61205"
    },
    {
      category: "CROPS",
      name: "COCONUT",
      wc: "1971"
    },
    {
      category: "CROPS",
      name: "COCONUTS",
      wc: "2093"
    },
    {
      category: "CROPS",
      name: "COFFEE BEAN",
      wc: "19928"
    },
    {
      category: "CROPS",
      name: "COFFEE GREEN",
      wc: "15897"
    },
    {
      category: "CROPS",
      name: "CORIANDER",
      wc: "8280"
    },
    {
      category: "CROPS",
      name: "COWPEA",
      wc: "6906"
    },
    {
      category: "CROPS",
      name: "CRANBERRY",
      wc: "276"
    },
    {
      category: "CROPS",
      name: "CUCUMBER",
      wc: "353"
    },
    {
      category: "CROPS",
      name: "CURRANT",
      wc: "499"
    },
    {
      category: "CROPS",
      name: "DATES",
      wc: "2840"
    },
    {
      category: "CROPS",
      name: "EGGPLANT",
      wc: "362"
    },
    {
      category: "CROPS",
      name: "FABA BEAN",
      wc: "2018"
    },
    {
      category: "CROPS",
      name: "FENNEL SEEDS",
      wc: "8280"
    },
    {
      category: "CROPS",
      name: "FIG",
      wc: "3350"
    },
    {
      category: "CROPS",
      name: "GARLIC",
      wc: "589"
    },
    {
      category: "CROPS",
      name: "GARLIC POWDER",
      wc: "2265"
    },
    {
      category: "CROPS",
      name: "GINGER",
      wc: "1657"
    },
    {
      category: "CROPS",
      name: "GOOSEBERRY",
      wc: "526"
    },
    {
      category: "CROPS",
      name: "GRAPES",
      wc: "608"
    },
    {
      category: "CROPS",
      name: "GREEN TEA",
      wc: "8856"
    },
    {
      category: "CROPS",
      name: "GUAVA",
      wc: "1800"
    },
    {
      category: "CROPS",
      name: "HAZELNUT SHELLED",
      wc: "10515"
    },
    {
      category: "CROPS",
      name: "HAZELNUT WITH SHELL",
      wc: "5258"
    },
    {
      category: "CROPS",
      name: "HEMPSEED",
      wc: "3685"
    },
    {
      category: "CROPS",
      name: "HOP CONE",
      wc: "4065"
    },
    {
      category: "CROPS",
      name: "HOP EXTRACT",
      wc: "16259"
    },
    {
      category: "CROPS",
      name: "KIWI",
      wc: "514"
    },
    {
      category: "CROPS",
      name: "KOLA NUT",
      wc: "23391"
    },
    {
      category: "CROPS",
      name: "LEMON",
      wc: "642"
    },
    {
      category: "CROPS",
      name: "LENTIL",
      wc: "5874"
    },
    {
      category: "CROPS",
      name: "LETTUCE",
      wc: "237"
    },
    {
      category: "CROPS",
      name: "LIME",
      wc: "642"
    },
    {
      category: "CROPS",
      name: "LINSEED",
      wc: "5168"
    },
    {
      category: "CROPS",
      name: "LONGABERRY",
      wc: "413"
    },
    {
      category: "CROPS",
      name: "MACE",
      wc: "34319"
    },
    {
      category: "CROPS",
      name: "MAIZE",
      wc: "1191"
    },
    {
      category: "CROPS",
      name: "MAIZE GREEN",
      wc: "700"
    },
    {
      category: "CROPS",
      name: "MANDARIN",
      wc: "748"
    },
    {
      category: "CROPS",
      name: "MANGO",
      wc: "1855"
    },
    {
      category: "CROPS",
      name: "MANGOSTEEN",
      wc: "1800"
    },
    {
      category: "CROPS",
      name: "MANIOC",
      wc: "564"
    },
    {
      category: "CROPS",
      name: "MILLET",
      wc: "4478"
    },
    {
      category: "CROPS",
      name: "MIXED NUTS",
      wc: "9063"
    },
    {
      category: "CROPS",
      name: "MULBERRY",
      wc: "413"
    },
    {
      category: "CROPS",
      name: "MUSTARD SEED",
      wc: "2809"
    },
    {
      category: "CROPS",
      name: "NUTMEG",
      wc: "34319"
    },
    {
      category: "CROPS",
      name: "OAT",
      wc: "1788"
    },
    {
      category: "CROPS",
      name: "OKRA",
      wc: "576"
    },
    {
      category: "CROPS",
      name: "OLIVES*",
      wc: "3015"
    },
    {
      category: "CROPS",
      name: "ONION",
      wc: "290"
    },
    {
      category: "CROPS",
      name: "ORANGE",
      wc: "654"
    },
    {
      category: "CROPS",
      name: "PALM NUT",
      wc: "2868"
    },
    {
      category: "CROPS",
      name: "PAPAYA",
      wc: "460"
    },
    {
      category: "CROPS",
      name: "PEA",
      wc: "1979"
    },
    {
      category: "CROPS",
      name: "PEA (fresh)",
      wc: "595"
    },
    {
      category: "CROPS",
      name: "PEACH",
      wc: "910"
    },
    {
      category: "CROPS",
      name: "PEANUT",
      wc: "2782"
    },
    {
      category: "CROPS",
      name: "PEAR",
      wc: "922"
    },
    {
      category: "CROPS",
      name: "PEPPER",
      wc: "379"
    },
    {
      category: "CROPS",
      name: "PEPPER (PIPER SPP.)",
      wc: "7611"
    },
    {
      category: "CROPS",
      name: "PEPPERMINT",
      wc: "288"
    },
    {
      category: "CROPS",
      name: "PIGEON PEA",
      wc: "5494"
    },
    {
      category: "CROPS",
      name: "PINEAPPLE",
      wc: "255"
    },
    {
      category: "CROPS",
      name: "PISTACHIO",
      wc: "11363"
    },
    {
      category: "CROPS",
      name: "PLANTAIN",
      wc: "1602"
    },
    {
      category: "CROPS",
      name: "PLUM",
      wc: "2180"
    },
    {
      category: "CROPS",
      name: "POPPY SEED",
      wc: "2188"
    },
    {
      category: "CROPS",
      name: "POTATO",
      wc: "554.8"
    },
    {
      category: "CROPS",
      name: "PUMPKIN",
      wc: "400"
    },
    {
      category: "CROPS",
      name: "RAISINS",
      wc: "2433"
    },
    {
      category: "CROPS",
      name: "RAPESEED",
      wc: "2271"
    },
    {
      category: "CROPS",
      name: "RASPBERRY",
      wc: "413"
    },
    {
      category: "CROPS",
      name: "RICE",
      wc: "1597"
    },
    {
      category: "CROPS",
      name: "RYE",
      wc: "1554"
    },
    {
      category: "CROPS",
      name: "SAFFRON",
      wc: "731000"
    },
    {
      category: "CROPS",
      name: "SESAM SEED",
      wc: "9371"
    },
    {
      category: "CROPS",
      name: "SHALLOT",
      wc: "272"
    },
    {
      category: "CROPS",
      name: "SORGHUM",
      wc: "3048"
    },
    {
      category: "CROPS",
      name: "SOYBEAN",
      wc: "1816.4"
    },
    {
      category: "CROPS",
      name: "SPINACH",
      wc: "292"
    },
    {
      category: "CROPS",
      name: "SQUASH",
      wc: "336"
    },
    {
      category: "CROPS",
      name: "STRAWBERRY",
      wc: "247.9"
    },
    {
      category: "CROPS",
      name: "STRING BEAN",
      wc: "547"
    },
    {
      category: "CROPS",
      name: "SUGAR BEET",
      wc: "132"
    },
    {
      category: "CROPS",
      name: "SUGAR CANE",
      wc: "210"
    },
    {
      category: "CROPS",
      name: "SUNFLOWER SEED",
      wc: "3366"
    },
    {
      category: "CROPS",
      name: "SWEET POTATO",
      wc: "383"
    },
    {
      category: "CROPS",
      name: "TANGERIN",
      wc: "748"
    },
    {
      category: "CROPS",
      name: "TARO",
      wc: "606"
    },
    {
      category: "CROPS",
      name: "TOMATO",
      wc: "41"
    },
    {
      category: "CROPS",
      name: "TOMATO DRIED*",
      wc: "4276"
    },
    {
      category: "CROPS",
      name: "TURNIP",
      wc: "195"
    },
    {
      category: "CROPS",
      name: "VANILLA BEAN",
      wc: "126505"
    },
    {
      category: "CROPS",
      name: "WALNUT SHELLED",
      wc: "9172.5"
    },
    {
      category: "CROPS",
      name: "WALNUT WITH SHELL",
      wc: "4918"
    },
    {
      category: "CROPS",
      name: "WATERMELON",
      wc: "185"
    },
    {
      category: "CROPS",
      name: "WHEAT",
      wc: "1639"
    },
    {
      category: "CROPS",
      name: "YAM",
      wc: "343"
    },
    {
      category: "CROPS",
      name: "ZUCCHINI",
      wc: "336"
    },
    {
      category: "FISHING",
      name: "BLACK CARP",
      wc: "2555"
    },
    {
      category: "FISHING",
      name: "CARP",
      wc: "2364"
    },
    {
      category: "FISHING",
      name: "COD",
      wc: "2782"
    },
    {
      category: "FISHING",
      name: "CRUSTACEAN",
      wc: "1974"
    },
    {
      category: "FISHING",
      name: "FLOUNDER",
      wc: "798"
    },
    {
      category: "FISHING",
      name: "GILSTHEAD SEABREAM",
      wc: "3543.5"
    },
    {
      category: "FISHING",
      name: "GRASS CARP",
      wc: "2229"
    },
    {
      category: "FISHING",
      name: "GROUPER",
      wc: "360"
    },
    {
      category: "FISHING",
      name: "MAJOR CARP",
      wc: "3808"
    },
    {
      category: "FISHING",
      name: "MANDARIN FISH",
      wc: "88"
    },
    {
      category: "FISHING",
      name: "MILKFISH",
      wc: "2471.5"
    },
    {
      category: "FISHING",
      name: "PANGASIID",
      wc: "1909.5"
    },
    {
      category: "FISHING",
      name: "PRAWNS GIANT",
      wc: "1738"
    },
    {
      category: "FISHING",
      name: "RED DRUM",
      wc: "2202"
    },
    {
      category: "FISHING",
      name: "SALMON",
      wc: "2193"
    },
    {
      category: "FISHING",
      name: "SEABASS",
      wc: "6524"
    },
    {
      category: "FISHING",
      name: "SILVERBARB",
      wc: "2861.5"
    },
    {
      category: "FISHING",
      name: "STURGEON",
      wc: "13420"
    },
    {
      category: "FISHING",
      name: "TILAPIA",
      wc: "2263"
    },
    {
      category: "FISHING",
      name: "TROUT",
      wc: "2188"
    },
    {
      category: "FISHING",
      name: "TURBOT",
      wc: "1504"
    },
    {
      category: "FISHING",
      name: "WUCHANG BREAM",
      wc: "10550"
    }
   ];

   module.exports = itemList;