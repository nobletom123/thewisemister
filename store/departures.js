export const state = () => ({
  departures: [
      {
        Id: 1,
        DepCode: "ABZ",
        AirportName: "Aberdeen",

      },
      {
        Id: 2,
        DepCode: "BFS",
        AirportName: "Belfast",

      },
      {
        Id: 3,
        DepCode: "BHX",
        AirportName: "Birmingham",

      },
      {
        Id: 4,
        DepCode: "BOH",
        AirportName: "Bournemouth",

      },
      {
        Id: 5,
        DepCode: "BRS",
        AirportName: "Bristol",

      },
      {
        Id: 6,
        DepCode: "CWL",
        AirportName: "Cardiff",

      },
      {
        Id: 7,
        DepCode: "EDI",
        AirportName: "Edinburgh",

      },
      {
        Id: 8,
        DepCode: "EMA",
        AirportName: "East Midlands",

      },
      {
        Id: 9,
        DepCode: "GLA",
        AirportName: "Glasgow",

      },
      {
        Id: 10,
        DepCode: "HUY",
        AirportName: "Humberside",

      },
      {
        Id: 11,
        DepCode: "LBA",
        AirportName: "Leeds Bradford",

      },
      {
        Id: 12,
        DepCode: "LGW",
        AirportName: "London Gatwick",

      },
      {
        Id: 13,
        DepCode: "LHR",
        AirportName: "London Heathrow",

      },
      {
        Id: 14,
        DepCode: "LPL",
        AirportName: "Liverpool",

      },
      {
        Id: 15,
        DepCode: "LTN",
        AirportName: "Luton",

      },
      {
        Id: 16,
        DepCode: "MAN",
        AirportName: "Manchester",

      },
      {
        Id: 17,
        DepCode: "NCL",
        AirportName: "Newcastle",

      },
      {
        Id: 18,
        DepCode: "NWI",
        AirportName: "Norwich",

      },
      {
        Id: 19,
        DepCode: "PIK",
        AirportName: "Prestwick",

      },
      {
        Id: 20,
        DepCode: "SEN",
        AirportName: "Southend",

      },
      {
        Id: 21,
        DepCode: "STN",
        AirportName: "Stansted",

      },
      {
        Id: 22,
        DepCode: "LON",
        AirportName: "London All",
        // "": "* this needs to search LGW+LHR+LTN+STN+LCY"
      },
      {
        Id: 23,
        DepCode: "LCY",
        AirportName: "London City",

      }
    ],
  departureSearchResults: [],
  destinations: [
  {
    AirportName: "Al Arish",
    code: "AAC"
  },
  {
    AirportName: "Annaba",
    code: "AAE"
  },
  {
    AirportName: "Alborg",
    code: "AAL"
  },
  {
    AirportName: "Al Ain",
    code: "AAN"
  },
  {
    AirportName: "Aarhus",
    code: "AAR"
  },
  {
    AirportName: "Altay",
    code: "AAT"
  },
  {
    AirportName: "Abadan",
    code: "ABD"
  },
  {
    AirportName: "Allentown (PA)",
    code: "ABE"
  },
  {
    AirportName: "Abilene (TX)",
    code: "ABI"
  },
  {
    AirportName: "Abidjan",
    code: "ABJ"
  },
  {
    AirportName: "Bamaga",
    code: "ABM"
  },
  {
    AirportName: "Albuquerque (NM)",
    code: "ABQ"
  },
  {
    AirportName: "Aberdeen (SD)",
    code: "ABR"
  },
  {
    AirportName: "Abu Simbel",
    code: "ABS"
  },
  {
    AirportName: "Abuja - Nnamdi Azikiwe International Airport",
    code: "ABV"
  },
  {
    AirportName: "Albury",
    code: "ABX"
  },
  {
    AirportName: "Albany (GA)",
    code: "ABY"
  },
  {
    AirportName: "Acapulco",
    code: "ACA"
  },
  {
    AirportName: "Accra - Kotoka International Airport",
    code: "ACC"
  },
  {
    AirportName: "Arrecife/Lanzarote",
    code: "ACE"
  },
  {
    AirportName: "Altenrhein",
    code: "ACH"
  },
  {
    AirportName: "Alderney",
    code: "ACI"
  },
  {
    AirportName: "Nantucket (MA)",
    code: "ACK"
  },
  {
    AirportName: "Waco (TX)",
    code: "ACT"
  },
  {
    AirportName: "Eureka (CA)",
    code: "ACV"
  },
  {
    AirportName: "Atlantic City (NJ) - Atlantic City International",
    code: "ACY"
  },
  {
    AirportName: "Adana",
    code: "ADA"
  },
  {
    AirportName: "Izmir - Adnan Menderes Airport",
    code: "ADB"
  },
  {
    AirportName: "Addis Ababa - Bole International Airport",
    code: "ADD"
  },
  {
    AirportName: "Aden - Aden International Airport",
    code: "ADE"
  },
  {
    AirportName: "Adiyaman",
    code: "ADF"
  },
  {
    AirportName: "Amman - Amman-Marka International Airport",
    code: "ADJ"
  },
  {
    AirportName: "Adelaide",
    code: "ADL"
  },
  {
    AirportName: "Kodiak (AK)",
    code: "ADQ"
  },
  {
    AirportName: "Alldays",
    code: "ADY"
  },
  {
    AirportName: "San Andres",
    code: "ADZ"
  },
  {
    AirportName: "Abeche",
    code: "AEH"
  },
  {
    AirportName: "Buenos Aires, Jorge Newbery",
    code: "AEP"
  },
  {
    AirportName: "Adler/Sochi",
    code: "AER"
  },
  {
    AirportName: "Alesund",
    code: "AES"
  },
  {
    AirportName: "Agadir",
    code: "AGA"
  },
  {
    AirportName: "Augsburg - Augsbur gAirport",
    code: "AGB"
  },
  {
    AirportName: "Malaga",
    code: "AGP"
  },
  {
    AirportName: "Augusta (GA)",
    code: "AGS"
  },
  {
    AirportName: "Aguascaliente",
    code: "AGU"
  },
  {
    AirportName: "Aggeneys",
    code: "AGZ"
  },
  {
    AirportName: "Khamis Mushayat",
    code: "AHB"
  },
  {
    AirportName: "Athens (GA)",
    code: "AHN"
  },
  {
    AirportName: "Alghero Sassari",
    code: "AHO"
  },
  {
    AirportName: "Al Hoceima",
    code: "AHU"
  },
  {
    AirportName: "Ajaccio",
    code: "AJA"
  },
  {
    AirportName: "Jouf",
    code: "AJF"
  },
  {
    AirportName: "Anjouan - Anjouan Airport",
    code: "AJN"
  },
  {
    AirportName: "Aracaju",
    code: "AJU"
  },
  {
    AirportName: "Agades",
    code: "AJY"
  },
  {
    AirportName: "Auckland - Auckland International Airport",
    code: "AKL"
  },
  {
    AirportName: "King Salomon (AK)",
    code: "AKN"
  },
  {
    AirportName: "Akrotiri - RAF",
    code: "AKT"
  },
  {
    AirportName: "Almaty (Alma Ata) - Almaty International Airport",
    code: "ALA"
  },
  {
    AirportName: "Albany (NY) - Albany International Airport",
    code: "ALB"
  },
  {
    AirportName: "Alicante",
    code: "ALC"
  },
  {
    AirportName: "Alta",
    code: "ALF"
  },
  {
    AirportName: "Algiers, Houari Boumediene Airport",
    code: "ALG"
  },
  {
    AirportName: "Albany",
    code: "ALH"
  },
  {
    AirportName: "Alexander Bay - Kortdoorn",
    code: "ALJ"
  },
  {
    AirportName: "Waterloo IA",
    code: "ALO"
  },
  {
    AirportName: "Aleppo",
    code: "ALP"
  },
  {
    AirportName: "Andorra La Vella - Heliport",
    code: "ALV"
  },
  {
    AirportName: "Walla Walla (WA)",
    code: "ALW"
  },
  {
    AirportName: "Alexandria - El Nhouza Airport",
    code: "ALY"
  },
  {
    AirportName: "Amarillo (TX)",
    code: "AMA"
  },
  {
    AirportName: "Ahmedabad",
    code: "AMD"
  },
  {
    AirportName: "Amman - Queen Alia International Airport",
    code: "AMM"
  },
  {
    AirportName: "Amsterdam - Amsterdam Airport Schiphol",
    code: "AMS"
  },
  {
    AirportName: "Anniston (AL)",
    code: "ANB"
  },
  {
    AirportName: "Anchorage (AK) - Ted Stevens Anchorage International",
    code: "ANC"
  },
  {
    AirportName: "Ankara",
    code: "ANK"
  },
  {
    AirportName: "Antwerp",
    code: "ANR"
  },
  {
    AirportName: "Antigua, V.C. Bird International",
    code: "ANU"
  },
  {
    AirportName: "Ancona - Ancona Falconara Airport",
    code: "AOI"
  },
  {
    AirportName: "Aomori",
    code: "AOJ"
  },
  {
    AirportName: "Karpathos",
    code: "AOK"
  },
  {
    AirportName: "Altoona (PA)",
    code: "AOO"
  },
  {
    AirportName: "Naples (FL)",
    code: "APF"
  },
  {
    AirportName: "Apia - Faleolo International Airport",
    code: "APW"
  },
  {
    AirportName: "Aqaba",
    code: "AQJ"
  },
  {
    AirportName: "Ann Arbor (MI)",
    code: "ARB"
  },
  {
    AirportName: "Arkhangelsk",
    code: "ARH"
  },
  {
    AirportName: "Arusha",
    code: "ARK"
  },
  {
    AirportName: "Stockholm - Arlanda",
    code: "ARN"
  },
  {
    AirportName: "Ashgabat - Saparmurat Turkmenbashy Int. Airport",
    code: "ASB"
  },
  {
    AirportName: "Aspen, (CO) - Aspen-Pitkin County Airport",
    code: "ASE"
  },
  {
    AirportName: "Amami",
    code: "ASJ"
  },
  {
    AirportName: "Yamoussoukro",
    code: "ASK"
  },
  {
    AirportName: "Asmara - Asmara International",
    code: "ASM"
  },
  {
    AirportName: "Alice Springs",
    code: "ASP"
  },
  {
    AirportName: "Kayseri",
    code: "ASR"
  },
  {
    AirportName: "Asuncion - Asunción International Airport",
    code: "ASU"
  },
  {
    AirportName: "Aswan - Daraw Airport",
    code: "ASW"
  },
  {
    AirportName: "Athens - Elefthérios Venizélos International Airport",
    code: "ATH"
  },
  {
    AirportName: "Atlanta (GA) - Hartsfield Atlanta International Airport",
    code: "ATL"
  },
  {
    AirportName: "Athens (OH)",
    code: "ATO"
  },
  {
    AirportName: "Amritsar",
    code: "ATQ"
  },
  {
    AirportName: "Appelton/Neenah/Menasha (WI)",
    code: "ATW"
  },
  {
    AirportName: "Watertown (SD)",
    code: "ATY"
  },
  {
    AirportName: "Assiut",
    code: "ATZ"
  },
  {
    AirportName: "Aruba - Reina Beatrix International, Oranjestad",
    code: "AUA"
  },
  {
    AirportName: "Oranjestad - Reina Beatrix International",
    code: "AUA"
  },
  {
    AirportName: "Abu Rudeis",
    code: "AUE"
  },
  {
    AirportName: "Augusta (ME) - Augusta State Airport",
    code: "AUG"
  },
  {
    AirportName: "Abu Dhabi - Abu Dhabi International",
    code: "AUH"
  },
  {
    AirportName: "Aurillac",
    code: "AUR"
  },
  {
    AirportName: "Austin (TX) - Austin-Bergstrom Airport",
    code: "AUS"
  },
  {
    AirportName: "Asheville (NC)",
    code: "AVL"
  },
  {
    AirportName: "Wilkes Barre/Scranton (PA)",
    code: "AVP"
  },
  {
    AirportName: "Anguilla",
    code: "AXA"
  },
  {
    AirportName: "Altus",
    code: "AXS"
  },
  {
    AirportName: "Akita",
    code: "AXT"
  },
  {
    AirportName: "Ayers Rock - Connellan",
    code: "AYQ"
  },
  {
    AirportName: "Ayr",
    code: "AYR"
  },
  {
    AirportName: "Antalya",
    code: "AYT"
  },
  {
    AirportName: "Aiyura",
    code: "AYU"
  },
  {
    AirportName: "Ayawasi",
    code: "AYW"
  },
  {
    AirportName: "Amazon Bay",
    code: "AZB"
  },
  {
    AirportName: "Kalamazoo/Battle Creek (MI)",
    code: "AZO"
  },
  {
    AirportName: "Mexico City - Atizapan",
    code: "AZP"
  },
  {
    AirportName: "Samana - Samaná El Catey International Airport",
    code: "AZS"
  },
  {
    AirportName: "Bahrain - Bahrain International Airport",
    code: "BAH"
  },
  {
    AirportName: "Baku - Heydar Aliyev International Airport",
    code: "BAK"
  },
  {
    AirportName: "Barranquilla",
    code: "BAQ"
  },
  {
    AirportName: "Bhubaneswar",
    code: "BBI"
  },
  {
    AirportName: "Berberati",
    code: "BBT"
  },
  {
    AirportName: "Bambari",
    code: "BBY"
  },
  {
    AirportName: "Barcelona",
    code: "BCN"
  },
  {
    AirportName: "Jinka - Baco/Jinka Airport",
    code: "BCO"
  },
  {
    AirportName: "Bermuda - L.F. Wade International Airport",
    code: "BDA"
  },
  {
    AirportName: "Bundaberg",
    code: "BDB"
  },
  {
    AirportName: "Hartford (CT) /Springfield (MA)",
    code: "BDL"
  },
  {
    AirportName: "Bandung - Husein Sastranegara International Airport",
    code: "BDO"
  },
  {
    AirportName: "Baroda",
    code: "BDQ"
  },
  {
    AirportName: "Bridgeport (CT)",
    code: "BDR"
  },
  {
    AirportName: "Brindisi",
    code: "BDS"
  },
  {
    AirportName: "Bardufoss",
    code: "BDU"
  },
  {
    AirportName: "Belgrad (Beograd) - Belgrade Nikola Tesla International",
    code: "BEG"
  },
  {
    AirportName: "Benton Harbour (MI)",
    code: "BEH"
  },
  {
    AirportName: "Belem - Val de Cans International Airport",
    code: "BEL"
  },
  {
    AirportName: "Benghazi (Bengasi)",
    code: "BEN"
  },
  {
    AirportName: "Newcastle - Belmont",
    code: "BEO"
  },
  {
    AirportName: "Berlin",
    code: "BER"
  },
  {
    AirportName: "Brest",
    code: "BES"
  },
  {
    AirportName: "Bethel (AK)",
    code: "BET"
  },
  {
    AirportName: "Beira",
    code: "BEW"
  },
  {
    AirportName: "Beirut - Beirut Rafic Hariri International Airport",
    code: "BEY"
  },
  {
    AirportName: "Bradford/Warren (PA) /Olean (NY)",
    code: "BFD"
  },
  {
    AirportName: "Bakersfield (CA)",
    code: "BFL"
  },
  {
    AirportName: "Bloemfontein - Bloemfontein Airport",
    code: "BFN"
  },
  {
    AirportName: "Buffalo Range",
    code: "BFO"
  },
  {
    AirportName: "Bucaramanga",
    code: "BGA"
  },
  {
    AirportName: "Bangui - M'Poko International Airport",
    code: "BGF"
  },
  {
    AirportName: "Bridgetown - Grantley Adams International",
    code: "BGI"
  },
  {
    AirportName: "Johnson City (NY) - Binghamton/Endicott/Johnson",
    code: "BGM"
  },
  {
    AirportName: "Bergen",
    code: "BGO"
  },
  {
    AirportName: "Bangor (ME)",
    code: "BGR"
  },
  {
    AirportName: "Bangassou",
    code: "BGU"
  },
  {
    AirportName: "Bagdad - Baghdad International Airport",
    code: "BGW"
  },
  {
    AirportName: "Bergamo/Milan - Orio Al Serio",
    code: "BGY"
  },
  {
    AirportName: "Milan - Orio Al Serio",
    code: "BGY"
  },
  {
    AirportName: "Bullhead City (NV)",
    code: "BHC"
  },
  {
    AirportName: "Blenheim",
    code: "BHE"
  },
  {
    AirportName: "Birmingham (AL)",
    code: "BHM"
  },
  {
    AirportName: "Bhopal",
    code: "BHO"
  },
  {
    AirportName: "Broken Hill",
    code: "BHQ"
  },
  {
    AirportName: "Bahawalpur",
    code: "BHV"
  },
  {
    AirportName: "Bastia",
    code: "BIA"
  },
  {
    AirportName: "Billings (MT)",
    code: "BIL"
  },
  {
    AirportName: "Bilbao",
    code: "BIO"
  },
  {
    AirportName: "Biarritz",
    code: "BIQ"
  },
  {
    AirportName: "Bismarck (ND) - Bismarck Municipal Airport",
    code: "BIS"
  },
  {
    AirportName: "Bria",
    code: "BIV"
  },
  {
    AirportName: "Bemidji (MN)",
    code: "BJI"
  },
  {
    AirportName: "Banjul - Banjul International Airport (Yundum International)",
    code: "BJL"
  },
  {
    AirportName: "Bujumbura - Bujumbura International Airport",
    code: "BJM"
  },
  {
    AirportName: "Bodrum - Milas Airport",
    code: "BJV"
  },
  {
    AirportName: "Leon",
    code: "BJX"
  },
  {
    AirportName: "Badajoz",
    code: "BJZ"
  },
  {
    AirportName: "Kota Kinabalu",
    code: "BKI"
  },
  {
    AirportName: "Bangkok, Suvarnabhumi International",
    code: "BKK"
  },
  {
    AirportName: "Cleveland (OH) , Burke Lakefront",
    code: "BKL"
  },
  {
    AirportName: "Bamako - Bamako-Sénou International Airport",
    code: "BKO"
  },
  {
    AirportName: "Beckley (WV)",
    code: "BKW"
  },
  {
    AirportName: "Brookings (SD)",
    code: "BKX"
  },
  {
    AirportName: "Barcelona",
    code: "BLA"
  },
  {
    AirportName: "Bluefield (WV)",
    code: "BLF"
  },
  {
    AirportName: "Bellingham (WA)",
    code: "BLI"
  },
  {
    AirportName: "Billund",
    code: "BLL"
  },
  {
    AirportName: "Bologna",
    code: "BLQ"
  },
  {
    AirportName: "Bangalore",
    code: "BLR"
  },
  {
    AirportName: "Blackwater",
    code: "BLT"
  },
  {
    AirportName: "Blantyre (Mandala) - Chileka International Airport",
    code: "BLZ"
  },
  {
    AirportName: "Stockholm - Bromma",
    code: "BMA"
  },
  {
    AirportName: "Broome",
    code: "BME"
  },
  {
    AirportName: "Bloomington (IN)",
    code: "BMG"
  },
  {
    AirportName: "Bloomington (IL)",
    code: "BMI"
  },
  {
    AirportName: "Brampton Island",
    code: "BMP"
  },
  {
    AirportName: "Nashville (TN)",
    code: "BNA"
  },
  {
    AirportName: "Brisbane",
    code: "BNE"
  },
  {
    AirportName: "Ballina",
    code: "BNK"
  },
  {
    AirportName: "Broennoeysund",
    code: "BNN"
  },
  {
    AirportName: "Bannu",
    code: "BNP"
  },
  {
    AirportName: "Bora Bora",
    code: "BOB"
  },
  {
    AirportName: "Bordeaux - Bordeaux Airport",
    code: "BOD"
  },
  {
    AirportName: "Bogota - El Nuevo Dorado International Airport",
    code: "BOG"
  },
  {
    AirportName: "Boise (ID) - Boise Air Terminal",
    code: "BOI"
  },
  {
    AirportName: "Bourgas/Burgas",
    code: "BOJ"
  },
  {
    AirportName: "Bombay (Mumbai) - Chhatrapati Shivaji International",
    code: "BOM"
  },
  {
    AirportName: "Bonaire",
    code: "BON"
  },
  {
    AirportName: "Bodo",
    code: "BOO"
  },
  {
    AirportName: "Boston (MA) - General Edward Lawrence Logan",
    code: "BOS"
  },
  {
    AirportName: "Bobo/Dioulasso",
    code: "BOY"
  },
  {
    AirportName: "Beaumont/Pt. Arthur (TX)",
    code: "BPT"
  },
  {
    AirportName: "Brunswick (GA)",
    code: "BQK"
  },
  {
    AirportName: "Aguadilla",
    code: "BQN"
  },
  {
    AirportName: "San Carlos de Bariloche",
    code: "BRC"
  },
  {
    AirportName: "Brainerd (MN)",
    code: "BRD"
  },
  {
    AirportName: "Bremen - Bremen Airport (Flughafen Bremen)",
    code: "BRE"
  },
  {
    AirportName: "Bari",
    code: "BRI"
  },
  {
    AirportName: "Burlington IA",
    code: "BRL"
  },
  {
    AirportName: "Berne, Bern-Belp",
    code: "BRN"
  },
  {
    AirportName: "Brussels - Brussels Airport",
    code: "BRU"
  },
  {
    AirportName: "Brasilia - President Juscelino Kubitschek International",
    code: "BSB"
  },
  {
    AirportName: "Basel",
    code: "BSL"
  },
  {
    AirportName: "Basra, Basrah",
    code: "BSR"
  },
  {
    AirportName: "Butte (MT)",
    code: "BTM"
  },
  {
    AirportName: "Baton Rouge (LA) - Baton Rouge Metropolitan Airport",
    code: "BTR"
  },
  {
    AirportName: "Bratislava - M. R. Štefánik Airport",
    code: "BTS"
  },
  {
    AirportName: "Bintulu",
    code: "BTU"
  },
  {
    AirportName: "Burlington (VT)",
    code: "BTV"
  },
  {
    AirportName: "Budapest - Budapest Ferihegy International Airport",
    code: "BUD"
  },
  {
    AirportName: "Buenos Aires",
    code: "BUE"
  },
  {
    AirportName: "Buffalo/Niagara Falls (NY)",
    code: "BUF"
  },
  {
    AirportName: "Benguela",
    code: "BUG"
  },
  {
    AirportName: "Bucharest",
    code: "BUH"
  },
  {
    AirportName: "Bulawayo",
    code: "BUQ"
  },
  {
    AirportName: "Burbank (CA)",
    code: "BUR"
  },
  {
    AirportName: "Boa Vista",
    code: "BVB"
  },
  {
    AirportName: "Baltimore (MD) - Washington International Airport",
    code: "BWI"
  },
  {
    AirportName: "Washington DC - Baltimore Washington International",
    code: "BWI"
  },
  {
    AirportName: "Bandar Seri Begawan - Brunei International Airport",
    code: "BWN"
  },
  {
    AirportName: "Burnie (Wynyard)",
    code: "BWT"
  },
  {
    AirportName: "Bissau - Osvaldo Vieiro International Airport",
    code: "BXO"
  },
  {
    AirportName: "Borrego Springs (CA)",
    code: "BXS"
  },
  {
    AirportName: "Bouake",
    code: "BYK"
  },
  {
    AirportName: "Bayreuth - Bindlacher-Berg",
    code: "BYU"
  },
  {
    AirportName: "Belize City - Philip S.W.Goldson International",
    code: "BZE"
  },
  {
    AirportName: "Barisal",
    code: "BZL"
  },
  {
    AirportName: "Bozeman (MT)",
    code: "BZN"
  },
  {
    AirportName: "Brazzaville - Maya-Maya Airport",
    code: "BZV"
  },
  {
    AirportName: "Cabinda",
    code: "CAB"
  },
  {
    AirportName: "Columbia (SC) - Columbia Metropolitan Airport",
    code: "CAE"
  },
  {
    AirportName: "Cagliari",
    code: "CAG"
  },
  {
    AirportName: "Cairo - Cairo International Airport",
    code: "CAI"
  },
  {
    AirportName: "Akron (OH)",
    code: "CAK"
  },
  {
    AirportName: "Guangzhou (Canton) - Baiyun International Airport",
    code: "CAN"
  },
  {
    AirportName: "Casablanca",
    code: "CAS"
  },
  {
    AirportName: "Cayenne - Cayenne-Rochambeau Airport",
    code: "CAY"
  },
  {
    AirportName: "Cochabamba",
    code: "CBB"
  },
  {
    AirportName: "Canberra - Canberra Airport",
    code: "CBR"
  },
  {
    AirportName: "Cottbus - Cottbus-Drewitz Airport",
    code: "CBU"
  },
  {
    AirportName: "Calicut",
    code: "CCJ"
  },
  {
    AirportName: "Concord (CA) - Buchanan Field",
    code: "CCR"
  },
  {
    AirportName: "Caracas - Simón Bolívar International Airport",
    code: "CCS"
  },
  {
    AirportName: "Calcutta (Kolkata) - Netaji Subhas Chandra",
    code: "CCU"
  },
  {
    AirportName: "Kolkata (Calcutta) - Netaji Subhas Chandra",
    code: "CCU"
  },
  {
    AirportName: "Chub Cay",
    code: "CCZ"
  },
  {
    AirportName: "Cedar City (UT)",
    code: "CDC"
  },
  {
    AirportName: "Paris - Charles de Gaulle",
    code: "CDG"
  },
  {
    AirportName: "Cordova (AK)",
    code: "CDV"
  },
  {
    AirportName: "Cebu City - Mactan-Cebu International",
    code: "CEB"
  },
  {
    AirportName: "Crescent City (CA)",
    code: "CEC"
  },
  {
    AirportName: "Ceduna",
    code: "CED"
  },
  {
    AirportName: "Ciudad Obregon",
    code: "CEN"
  },
  {
    AirportName: "Cannes – Mandelieu Airport",
    code: "CEQ"
  },
  {
    AirportName: "Cessnock",
    code: "CES"
  },
  {
    AirportName: "Clermont Ferrand",
    code: "CFE"
  },
  {
    AirportName: "Cienfuegos - Jaime González Airport",
    code: "CFG"
  },
  {
    AirportName: "Donegal (Carrickfin)",
    code: "CFN"
  },
  {
    AirportName: "Coffs Harbour",
    code: "CFS"
  },
  {
    AirportName: "Corfu",
    code: "CFU"
  },
  {
    AirportName: "Craig (AK)",
    code: "CGA"
  },
  {
    AirportName: "Cuiaba - Marechal Rondon International Airport",
    code: "CGB"
  },
  {
    AirportName: "Sao Paulo - Congonhas",
    code: "CGH"
  },
  {
    AirportName: "Jakarta - Soekarno-Hatta International",
    code: "CGK"
  },
  {
    AirportName: "Cologne - Cologne Airport (Flughafen Köln/Bonn)",
    code: "CGN"
  },
  {
    AirportName: "Köln, Köln/Bonn",
    code: "CGN"
  },
  {
    AirportName: "Chittagong",
    code: "CGP"
  },
  {
    AirportName: "Changchun",
    code: "CGQ"
  },
  {
    AirportName: "Campo Grande",
    code: "CGR"
  },
  {
    AirportName: "Ciudad Guayana",
    code: "CGU"
  },
  {
    AirportName: "Chattanooga (TN)",
    code: "CHA"
  },
  {
    AirportName: "Christchurch",
    code: "CHC"
  },
  {
    AirportName: "Chaoyang, Beijing - Chaoyang Airport",
    code: "CHG"
  },
  {
    AirportName: "Chicago (IL)",
    code: "CHI"
  },
  {
    AirportName: "Charlottesville (VA)",
    code: "CHO"
  },
  {
    AirportName: "Chania",
    code: "CHQ"
  },
  {
    AirportName: "Charleston (SC)",
    code: "CHS"
  },
  {
    AirportName: "Rome - Ciampino",
    code: "CIA"
  },
  {
    AirportName: "Chico (CA)",
    code: "CIC"
  },
  {
    AirportName: "Cedar Rapids IA",
    code: "CID"
  },
  {
    AirportName: "Chipata",
    code: "CIP"
  },
  {
    AirportName: "Canouan (island) - Canouan Airport",
    code: "CIW"
  },
  {
    AirportName: "Coimbatore",
    code: "CJB"
  },
  {
    AirportName: "Calama - El Loa",
    code: "CJC"
  },
  {
    AirportName: "Chitral",
    code: "CJL"
  },
  {
    AirportName: "Ciudad Juarez",
    code: "CJS"
  },
  {
    AirportName: "Clarksburg (WV)",
    code: "CKB"
  },
  {
    AirportName: "Chongqing - Jiangbei International Airport",
    code: "CKG"
  },
  {
    AirportName: "Conakry - Conakry International Airport",
    code: "CKY"
  },
  {
    AirportName: "Carlsbad (CA)",
    code: "CLD"
  },
  {
    AirportName: "Cleveland (OH) - Cleveland Hopkins International",
    code: "CLE"
  },
  {
    AirportName: "College Station/Bryan (TX)",
    code: "CLL"
  },
  {
    AirportName: "Port Angeles (WA)",
    code: "CLM"
  },
  {
    AirportName: "Cali",
    code: "CLO"
  },
  {
    AirportName: "Colima",
    code: "CLQ"
  },
  {
    AirportName: "Charlotte (NC)",
    code: "CLT"
  },
  {
    AirportName: "Calvi",
    code: "CLY"
  },
  {
    AirportName: "Colombo - Bandaranaike International Airport",
    code: "CMB"
  },
  {
    AirportName: "Ciudad Del Carmen",
    code: "CME"
  },
  {
    AirportName: "Chambery",
    code: "CMF"
  },
  {
    AirportName: "Columbus (OH) - Port Columbus International",
    code: "CMH"
  },
  {
    AirportName: "Champaign (IL)",
    code: "CMI"
  },
  {
    AirportName: "Casablanca, Mohamed V",
    code: "CMN"
  },
  {
    AirportName: "Clermont",
    code: "CMQ"
  },
  {
    AirportName: "Hancock (MI)",
    code: "CMX"
  },
  {
    AirportName: "Constanta (Constanța) - Constanta Int'l Airport",
    code: "CND"
  },
  {
    AirportName: "Belo Horizonte - Tancredo Neves International Airport",
    code: "CNF"
  },
  {
    AirportName: "Cairns",
    code: "CNS"
  },
  {
    AirportName: "Chiang Mai - Chiang Mai International Airport",
    code: "CNX"
  },
  {
    AirportName: "Cody/Powell/Yellowstone (WY)",
    code: "COD"
  },
  {
    AirportName: "Cochin",
    code: "COK"
  },
  {
    AirportName: "Concord (NH) - Concord Municipal Airport",
    code: "CON"
  },
  {
    AirportName: "Cotonou - Cotonou Cadjehoun Airport",
    code: "COO"
  },
  {
    AirportName: "Cordoba",
    code: "COR"
  },
  {
    AirportName: "Colorado Springs (CO)",
    code: "COS"
  },
  {
    AirportName: "Coober Pedy",
    code: "CPD"
  },
  {
    AirportName: "Copenhagen - Copenhagen Airport",
    code: "CPH"
  },
  {
    AirportName: "Casper (WY)",
    code: "CPR"
  },
  {
    AirportName: "Cape Town - Cape Town International Airport",
    code: "CPT"
  },
  {
    AirportName: "Myrtle Beach (SC) - Grand Strand Airport",
    code: "CRE"
  },
  {
    AirportName: "Carnot",
    code: "CRF"
  },
  {
    AirportName: "Jacksonville (FL) - Craig Municipal",
    code: "CRG"
  },
  {
    AirportName: "Corpus Christi (TX)",
    code: "CRP"
  },
  {
    AirportName: "Charleston (WV) - Yeager Airport",
    code: "CRW"
  },
  {
    AirportName: "Columbus (GA)",
    code: "CSG"
  },
  {
    AirportName: "Casino",
    code: "CSI"
  },
  {
    AirportName: "Carson City (NV)",
    code: "CSN"
  },
  {
    AirportName: "Castaway",
    code: "CST"
  },
  {
    AirportName: "Catania",
    code: "CTA"
  },
  {
    AirportName: "Cartagena - Rafael Núñez International Airport",
    code: "CTG"
  },
  {
    AirportName: "Cooktown",
    code: "CTN"
  },
  {
    AirportName: "Sapporo - New Chitose Airport",
    code: "CTS"
  },
  {
    AirportName: "Sapporo - New Chitose Airport",
    code: "CTS"
  },
  {
    AirportName: "Chengdu - Shuangliu",
    code: "CTU"
  },
  {
    AirportName: "Culiacan",
    code: "CUL"
  },
  {
    AirportName: "Cancun",
    code: "CUN"
  },
  {
    AirportName: "Curacao - Curaçao International Airport",
    code: "CUR"
  },
  {
    AirportName: "Chihuahua - Gen Fierro Villalobos",
    code: "CUU"
  },
  {
    AirportName: "Cincinnati (OH) - Cincinnati/Northern Kentucky Int'l",
    code: "CVG"
  },
  {
    AirportName: "Ciudad Victoria",
    code: "CVM"
  },
  {
    AirportName: "Carnarvon",
    code: "CVQ"
  },
  {
    AirportName: "Wausau/Stevens Point (WI)",
    code: "CWA"
  },
  {
    AirportName: "Curitiba - Afonso Pena International Airport",
    code: "CWB"
  },
  {
    AirportName: "Kiritimati (island) - Cassidy International Airport",
    code: "CXI"
  },
  {
    AirportName: "Charters Towers",
    code: "CXT"
  },
  {
    AirportName: "Cheyenne (WY) - Cheyenne Regional Airport",
    code: "CYS"
  },
  {
    AirportName: "Cuyo",
    code: "CYU"
  },
  {
    AirportName: "Chichen Itza",
    code: "CZA"
  },
  {
    AirportName: "Constantine",
    code: "CZL"
  },
  {
    AirportName: "Cozmel",
    code: "CZM"
  },
  {
    AirportName: "Daytona Beach (FL)",
    code: "DAB"
  },
  {
    AirportName: "Dhaka - Zia International Airport",
    code: "DAC"
  },
  {
    AirportName: "Dallas (TX) , Love Field",
    code: "DAL"
  },
  {
    AirportName: "Damascus, International",
    code: "DAM"
  },
  {
    AirportName: "Danville (VA)",
    code: "DAN"
  },
  {
    AirportName: "Dar es Salam (Daressalam) - Julius Nyerere Int'l",
    code: "DAR"
  },
  {
    AirportName: "Dayton (OH)",
    code: "DAY"
  },
  {
    AirportName: "Dubbo",
    code: "DBO"
  },
  {
    AirportName: "Dubuque IA",
    code: "DBQ"
  },
  {
    AirportName: "Dubrovnik",
    code: "DBV"
  },
  {
    AirportName: "Dalby",
    code: "DBY"
  },
  {
    AirportName: "Washington DC - Ronald Reagan National",
    code: "DCA"
  },
  {
    AirportName: "Daydream Island",
    code: "DDI"
  },
  {
    AirportName: "Decatur (IL)",
    code: "DEC"
  },
  {
    AirportName: "Delhi - Indira Gandhi International Airport",
    code: "DEL"
  },
  {
    AirportName: "Denver (CO) - Denver International Airport",
    code: "DEN"
  },
  {
    AirportName: "Detroit (MI) , Coleman A. Young Municipal",
    code: "DET"
  },
  {
    AirportName: "Dallas/Ft. Worth (TX) - Dallas/Fort Worth International",
    code: "DFW"
  },
  {
    AirportName: "Fort Worth (TX) - Dallas/Fort Worth International Airport",
    code: "DFW"
  },
  {
    AirportName: "Dhahran",
    code: "DHA"
  },
  {
    AirportName: "Dothan (AL)",
    code: "DHN"
  },
  {
    AirportName: "Dili - Nicolau Lobato International Airport",
    code: "DIL"
  },
  {
    AirportName: "Jambi - Sultan Taha Syarifudn",
    code: "DJB"
  },
  {
    AirportName: "Djerba",
    code: "DJE"
  },
  {
    AirportName: "Jayapura - Sentani",
    code: "DJJ"
  },
  {
    AirportName: "Daloa",
    code: "DJO"
  },
  {
    AirportName: "Dunk Island",
    code: "DKI"
  },
  {
    AirportName: "Dakar - Léopold Sédar Senghor International Airport",
    code: "DKR"
  },
  {
    AirportName: "Douala",
    code: "DLA"
  },
  {
    AirportName: "Dalian - Zhoushuizi International Airport",
    code: "DLC"
  },
  {
    AirportName: "Dillingham (AK)",
    code: "DLG"
  },
  {
    AirportName: "Duluth (MN) /Superior (WI)",
    code: "DLH"
  },
  {
    AirportName: "Dalaman",
    code: "DLM"
  },
  {
    AirportName: "Disneyland Paris",
    code: "DLP"
  },
  {
    AirportName: "Moscow - Domodedovo",
    code: "DME"
  },
  {
    AirportName: "Bangkok, Don Muang",
    code: "DMK"
  },
  {
    AirportName: "Dammam, King Fahad International",
    code: "DMM"
  },
  {
    AirportName: "Dinard",
    code: "DNR"
  },
  {
    AirportName: "Denizli",
    code: "DNZ"
  },
  {
    AirportName: "Dodoma - Dodoma Airport",
    code: "DOD"
  },
  {
    AirportName: "Doha - Doha International Airport",
    code: "DOH"
  },
  {
    AirportName: "Melville Hall",
    code: "DOM"
  },
  {
    AirportName: "Devonport",
    code: "DPO"
  },
  {
    AirportName: "Denpasar/Bali",
    code: "DPS"
  },
  {
    AirportName: "Derby",
    code: "DRB"
  },
  {
    AirportName: "Durango (CO)",
    code: "DRO"
  },
  {
    AirportName: "Dresden - Dresden Airport",
    code: "DRS"
  },
  {
    AirportName: "Darwin",
    code: "DRW"
  },
  {
    AirportName: "Dera Ismail Khan - Dera Ismail Khan Airport",
    code: "DSK"
  },
  {
    AirportName: "Des Moines (IA) - Des Moines International Airport",
    code: "DSM"
  },
  {
    AirportName: "Dortmund",
    code: "DTM"
  },
  {
    AirportName: "Detroit (MI) , Metropolitan Area",
    code: "DTT"
  },
  {
    AirportName: "Detroit (MI) , Wayne County Airport",
    code: "DTW"
  },
  {
    AirportName: "Dublin - Dublin International Airport",
    code: "DUB"
  },
  {
    AirportName: "Dunedin",
    code: "DUD"
  },
  {
    AirportName: "Dubois (PA)",
    code: "DUJ"
  },
  {
    AirportName: "Durban",
    code: "DUR"
  },
  {
    AirportName: "Duesseldorf - Düsseldorf International Airport",
    code: "DUS"
  },
  {
    AirportName: "Dutch Harbor (AK)",
    code: "DUT"
  },
  {
    AirportName: "Devils Lake (ND)",
    code: "DVL"
  },
  {
    AirportName: "Dubai - Dubai International Airport",
    code: "DXB"
  },
  {
    AirportName: "Dysart",
    code: "DYA"
  },
  {
    AirportName: "Dushanbe (Duschanbe) - Dushanbe Airport",
    code: "DYU"
  },
  {
    AirportName: "Dzaoudzi",
    code: "DZA"
  },
  {
    AirportName: "Basel/Mulhouse",
    code: "EAP"
  },
  {
    AirportName: "San Sebastian",
    code: "EAS"
  },
  {
    AirportName: "Wenatchee (WA)",
    code: "EAT"
  },
  {
    AirportName: "Eau Clarie (WI)",
    code: "EAU"
  },
  {
    AirportName: "Elba Island, Marina Di Campo",
    code: "EBA"
  },
  {
    AirportName: "Entebbe - Entebbe International Airport",
    code: "EBB"
  },
  {
    AirportName: "Esbjerg",
    code: "EBJ"
  },
  {
    AirportName: "St. Etienne",
    code: "EBU"
  },
  {
    AirportName: "Edinburgh - Edinburgh Airport",
    code: "EDI"
  },
  {
    AirportName: "Emerald",
    code: "EDR"
  },
  {
    AirportName: "Bergerac - Roumanieres",
    code: "EGC"
  },
  {
    AirportName: "Vail (CO)",
    code: "EGE"
  },
  {
    AirportName: "Egilsstadir",
    code: "EGS"
  },
  {
    AirportName: "Eindhoven",
    code: "EIN"
  },
  {
    AirportName: "Beef Island - Terrance B. Lettsome",
    code: "EIS"
  },
  {
    AirportName: "Elkhart (IN)",
    code: "EKI"
  },
  {
    AirportName: "Elko (NV)",
    code: "EKO"
  },
  {
    AirportName: "North Eleuthera",
    code: "ELH"
  },
  {
    AirportName: "Ellisras",
    code: "ELL"
  },
  {
    AirportName: "Elmira (NY)",
    code: "ELM"
  },
  {
    AirportName: "El Paso (TX) - El Paso International Airport",
    code: "ELP"
  },
  {
    AirportName: "East London",
    code: "ELS"
  },
  {
    AirportName: "Ely (NV)",
    code: "ELY"
  },
  {
    AirportName: "Emerald",
    code: "EMD"
  },
  {
    AirportName: "El Minya",
    code: "EMY"
  },
  {
    AirportName: "Kenai (AK)",
    code: "ENA"
  },
  {
    AirportName: "Nancy",
    code: "ENC"
  },
  {
    AirportName: "Enontekioe",
    code: "ENF"
  },
  {
    AirportName: "Esperance",
    code: "EPR"
  },
  {
    AirportName: "Erzincan",
    code: "ERC"
  },
  {
    AirportName: "Erfurt - Erfurt Airport (Flughafen Erfurt)",
    code: "ERF"
  },
  {
    AirportName: "Erie (PA)",
    code: "ERI"
  },
  {
    AirportName: "Windhoek - Eros",
    code: "ERS"
  },
  {
    AirportName: "Erzurum",
    code: "ERZ"
  },
  {
    AirportName: "Ankara - Esenboğa International Airport",
    code: "ESB"
  },
  {
    AirportName: "Escanaba (MI)",
    code: "ESC"
  },
  {
    AirportName: "Alexandria - Esler Field",
    code: "ESF"
  },
  {
    AirportName: "Elat",
    code: "ETH"
  },
  {
    AirportName: "Metz/Nancy Metz-Nancy-Lorraine",
    code: "ETZ"
  },
  {
    AirportName: "Eugene (OR)",
    code: "EUG"
  },
  {
    AirportName: "Evenes",
    code: "EVE"
  },
  {
    AirportName: "Eriwan (Yerevan, Jerevan)",
    code: "EVN"
  },
  {
    AirportName: "Evansville (IN)",
    code: "EVV"
  },
  {
    AirportName: "New Bern (NC)",
    code: "EWN"
  },
  {
    AirportName: "New York - Newark (NJ)",
    code: "EWR"
  },
  {
    AirportName: "Key West (FL)",
    code: "EYW"
  },
  {
    AirportName: "Buenos Aires, Ezeiza International Airport",
    code: "EZE"
  },
  {
    AirportName: "Faroer - Vágar Airport",
    code: "FAE"
  },
  {
    AirportName: "Fairbanks (AK)",
    code: "FAI"
  },
  {
    AirportName: "Faro",
    code: "FAO"
  },
  {
    AirportName: "Fargo (ND) (MN)",
    code: "FAR"
  },
  {
    AirportName: "Fresno (CA)",
    code: "FAT"
  },
  {
    AirportName: "Fayetteville/Ft. Bragg (NC)",
    code: "FAY"
  },
  {
    AirportName: "Lumbumbashi",
    code: "FBM"
  },
  {
    AirportName: "Oslo - Fornebu",
    code: "FBU"
  },
  {
    AirportName: "Kalispell (MT)",
    code: "FCA"
  },
  {
    AirportName: "Rome - Fuimicino",
    code: "FCO"
  },
  {
    AirportName: "Fort de France - Martinique Aimé Césaire International",
    code: "FDF"
  },
  {
    AirportName: "Friedrichshafen - Bodensee-Airport Friedrichshafen",
    code: "FDH"
  },
  {
    AirportName: "Fes",
    code: "FEZ"
  },
  {
    AirportName: "Fort Huachuca/Sierra Vista (AZ)",
    code: "FHU"
  },
  {
    AirportName: "Kinshasa - N'Djili",
    code: "FIH"
  },
  {
    AirportName: "Alfujairah (Fujairah)",
    code: "FJR"
  },
  {
    AirportName: "Fujairah, International Airport",
    code: "FJR"
  },
  {
    AirportName: "Karlsruhe-Baden - Soellingen",
    code: "FKB"
  },
  {
    AirportName: "Kisangani",
    code: "FKI"
  },
  {
    AirportName: "Franklin/Oil City (PA)",
    code: "FKL"
  },
  {
    AirportName: "Fukushima - Fukushima Airport",
    code: "FKS"
  },
  {
    AirportName: "Flagstaff (AZ)",
    code: "FLG"
  },
  {
    AirportName: "Fort Lauderdale/Hollywood (FL)",
    code: "FLL"
  },
  {
    AirportName: "Florianopolis",
    code: "FLN"
  },
  {
    AirportName: "Florence (SC)",
    code: "FLO"
  },
  {
    AirportName: "Florence (Firenze) - Peretola Airport",
    code: "FLR"
  },
  {
    AirportName: "Farmington (NM)",
    code: "FMN"
  },
  {
    AirportName: "Muenster/Osnabrueck",
    code: "FMO"
  },
  {
    AirportName: "Fort Myers, Metropolitan Area (FL)",
    code: "FMY"
  },
  {
    AirportName: "Freetown - Freetown-Lungi International Airport",
    code: "FNA"
  },
  {
    AirportName: "Funchal",
    code: "FNC"
  },
  {
    AirportName: "Nimes",
    code: "FNI"
  },
  {
    AirportName: "Pyongyang - Sunan International Airport",
    code: "FNJ"
  },
  {
    AirportName: "Flint (MI)",
    code: "FNT"
  },
  {
    AirportName: "Fort Dodge IA",
    code: "FOD"
  },
  {
    AirportName: "Fortaleza - Pinto Martins Airport",
    code: "FOR"
  },
  {
    AirportName: "Freeport - Grand Bahama International Airport",
    code: "FPO"
  },
  {
    AirportName: "Grand Bahama International",
    code: "FPO"
  },
  {
    AirportName: "Frankfurt/Main - Frankfurt Airport (Rhein-Main-Flughafen)",
    code: "FRA"
  },
  {
    AirportName: "Fort Riley (KS) - Marshall AAF",
    code: "FRI"
  },
  {
    AirportName: "Frejus",
    code: "FRJ"
  },
  {
    AirportName: "Floro",
    code: "FRO"
  },
  {
    AirportName: "Bishkek - Manas International Airport",
    code: "FRU"
  },
  {
    AirportName: "Francistown",
    code: "FRW"
  },
  {
    AirportName: "Figari",
    code: "FSC"
  },
  {
    AirportName: "Sioux Falls (SD)",
    code: "FSD"
  },
  {
    AirportName: "Fort Smith (AR)",
    code: "FSM"
  },
  {
    AirportName: "St. Pierre, NF",
    code: "FSP"
  },
  {
    AirportName: "Fuerteventura",
    code: "FUE"
  },
  {
    AirportName: "Fukuoka",
    code: "FUK"
  },
  {
    AirportName: "Futuna",
    code: "FUT"
  },
  {
    AirportName: "Fort Wayne (IN)",
    code: "FWA"
  },
  {
    AirportName: "Fayetteville (AR)",
    code: "FYV"
  },
  {
    AirportName: "Gadsden (AL)",
    code: "GAD"
  },
  {
    AirportName: "Yamagata, Junmachi",
    code: "GAJ"
  },
  {
    AirportName: "Guwahati",
    code: "GAU"
  },
  {
    AirportName: "Gaborone - Sir Seretse Khama International Airport",
    code: "GBE"
  },
  {
    AirportName: "Gilette (WY)",
    code: "GCC"
  },
  {
    AirportName: "Guernsey",
    code: "GCI"
  },
  {
    AirportName: "Grand Cayman - Owen Roberts International",
    code: "GCM"
  },
  {
    AirportName: "Grand Canyon (AZ)",
    code: "GCN"
  },
  {
    AirportName: "Guadalajara",
    code: "GDL"
  },
  {
    AirportName: "Gdansk",
    code: "GDN"
  },
  {
    AirportName: "Glendive (MT)",
    code: "GDV"
  },
  {
    AirportName: "Spokane (WA)",
    code: "GEG"
  },
  {
    AirportName: "Georgetown - Cheddi Jagan International Airport",
    code: "GEO"
  },
  {
    AirportName: "Geraldton",
    code: "GET"
  },
  {
    AirportName: "Geelong",
    code: "GEX"
  },
  {
    AirportName: "Griffith",
    code: "GFF"
  },
  {
    AirportName: "Grand Forks (ND)",
    code: "GFK"
  },
  {
    AirportName: "Longview/Kilgore (TX)",
    code: "GGG"
  },
  {
    AirportName: "Glasgow (MT)",
    code: "GGW"
  },
  {
    AirportName: "Govenors Harbour",
    code: "GHB"
  },
  {
    AirportName: "Gibraltar",
    code: "GIB"
  },
  {
    AirportName: "Rio de Janeiro - Galeao",
    code: "GIG"
  },
  {
    AirportName: "Gilgit",
    code: "GIL"
  },
  {
    AirportName: "Jijel",
    code: "GJL"
  },
  {
    AirportName: "Grand Junction (CO)",
    code: "GJT"
  },
  {
    AirportName: "Great Keppel Island",
    code: "GKL"
  },
  {
    AirportName: "Greenville (MS)",
    code: "GLH"
  },
  {
    AirportName: "Gladstone",
    code: "GLT"
  },
  {
    AirportName: "Grenoble",
    code: "GNB"
  },
  {
    AirportName: "Grenada - Point Salines Airport also Maurice Bishop",
    code: "GND"
  },
  {
    AirportName: "Ghent (Gent)",
    code: "GNE"
  },
  {
    AirportName: "Gainesville (FL)",
    code: "GNV"
  },
  {
    AirportName: "Genoa",
    code: "GOA"
  },
  {
    AirportName: "Goa",
    code: "GOI"
  },
  {
    AirportName: "Nizhny Novgorod - Strigino International Airport",
    code: "GOJ"
  },
  {
    AirportName: "Groton/New London (CT)",
    code: "GON"
  },
  {
    AirportName: "Goondiwindi",
    code: "GOO"
  },
  {
    AirportName: "Gothenburg (Göteborg) - Landvetter",
    code: "GOT"
  },
  {
    AirportName: "Garoua",
    code: "GOU"
  },
  {
    AirportName: "Gove (Nhulunbuy)",
    code: "GOV"
  },
  {
    AirportName: "Gorna",
    code: "GOZ"
  },
  {
    AirportName: "Araxos",
    code: "GPA"
  },
  {
    AirportName: "Gulfport/Biloxi (MS)",
    code: "GPT"
  },
  {
    AirportName: "Grand Rapids (MN)",
    code: "GPZ"
  },
  {
    AirportName: "Green Bay (WI)",
    code: "GRB"
  },
  {
    AirportName: "George",
    code: "GRJ"
  },
  {
    AirportName: "Gerona",
    code: "GRO"
  },
  {
    AirportName: "Groningen - Eelde",
    code: "GRQ"
  },
  {
    AirportName: "Grand Rapids (MI)",
    code: "GRR"
  },
  {
    AirportName: "Sao Paulo - Guarulhos International",
    code: "GRU"
  },
  {
    AirportName: "Sao Paulo - Guarulhos",
    code: "GRU"
  },
  {
    AirportName: "Granada",
    code: "GRX"
  },
  {
    AirportName: "Graz",
    code: "GRZ"
  },
  {
    AirportName: "Guadalcanal",
    code: "GSI"
  },
  {
    AirportName: "Greensboro/Winston Salem (NC)",
    code: "GSO"
  },
  {
    AirportName: "Greenville/Spartanburg (SC)",
    code: "GSP"
  },
  {
    AirportName: "Groote Eylandt - Alyangula",
    code: "GTE"
  },
  {
    AirportName: "Great Falls (MT)",
    code: "GTF"
  },
  {
    AirportName: "Guettin",
    code: "GTI"
  },
  {
    AirportName: "Mount Cook",
    code: "GTN"
  },
  {
    AirportName: "Guatemala City - La Aurora International Airport",
    code: "GUA"
  },
  {
    AirportName: "Gunnison/Crested Butte (CO)",
    code: "GUC"
  },
  {
    AirportName: "Guam",
    code: "GUM"
  },
  {
    AirportName: "Hagåtña - Guam International Airport",
    code: "GUM"
  },
  {
    AirportName: "Geneva - Geneva-Cointrin International Airport",
    code: "GVA"
  },
  {
    AirportName: "Gwadar",
    code: "GWD"
  },
  {
    AirportName: "Gweru",
    code: "GWE"
  },
  {
    AirportName: "Westerland, Sylt Airport",
    code: "GWT"
  },
  {
    AirportName: "Galway",
    code: "GWY"
  },
  {
    AirportName: "Guayaquil - Simon Bolivar",
    code: "GYE"
  },
  {
    AirportName: "Goiania, Santa Genoveva Airport",
    code: "GYN"
  },
  {
    AirportName: "Gympie",
    code: "GYP"
  },
  {
    AirportName: "Gaza City - Gaza International Airport",
    code: "GZA"
  },
  {
    AirportName: "Gaziantep",
    code: "GZT"
  },
  {
    AirportName: "Hachijo Jima",
    code: "HAC"
  },
  {
    AirportName: "Den Haag (The Hague)",
    code: "HAG"
  },
  {
    AirportName: "Moroni - Prince Said Ibrahim",
    code: "HAH"
  },
  {
    AirportName: "Hannover",
    code: "HAJ"
  },
  {
    AirportName: "Hamburg - Fuhlsbuettel",
    code: "HAM"
  },
  {
    AirportName: "Hanoi - Noi Bai International Airport",
    code: "HAN"
  },
  {
    AirportName: "Whitsunday Resort",
    code: "HAP"
  },
  {
    AirportName: "Harrisburg (PA) - Harrisburg Skyport",
    code: "HAR"
  },
  {
    AirportName: "Haugesund",
    code: "HAU"
  },
  {
    AirportName: "Havana - José Martí International",
    code: "HAV"
  },
  {
    AirportName: "Hobart",
    code: "HBA"
  },
  {
    AirportName: "Alexandria - Borg el Arab Airport",
    code: "HBH"
  },
  {
    AirportName: "Hyderabad",
    code: "HDD"
  },
  {
    AirportName: "Steamboat Springs (CO)",
    code: "HDN"
  },
  {
    AirportName: "Hatyai (Hat Yai)",
    code: "HDY"
  },
  {
    AirportName: "Helsinki - Vantaa",
    code: "HEL"
  },
  {
    AirportName: "Heraklion",
    code: "HER"
  },
  {
    AirportName: "Athens, Hellinikon Airport",
    code: "HEW"
  },
  {
    AirportName: "Haifa",
    code: "HFA"
  },
  {
    AirportName: "Hammerfest",
    code: "HFT"
  },
  {
    AirportName: "Hangchow (Hangzhou)",
    code: "HGH"
  },
  {
    AirportName: "Korhogo",
    code: "HGO"
  },
  {
    AirportName: "Hilton Head Island (SC)",
    code: "HHH"
  },
  {
    AirportName: "Frankfurt/Hahn",
    code: "HHN"
  },
  {
    AirportName: "Hibbing (MN)",
    code: "HIB"
  },
  {
    AirportName: "Lake Havasu City (AZ)",
    code: "HII"
  },
  {
    AirportName: "Hiroshima International",
    code: "HIJ"
  },
  {
    AirportName: "Honiara Henderson International",
    code: "HIR"
  },
  {
    AirportName: "Hayman Island",
    code: "HIS"
  },
  {
    AirportName: "Hakodate",
    code: "HKD"
  },
  {
    AirportName: "Hong Kong - International Airport (HKIA)",
    code: "HKG"
  },
  {
    AirportName: "Jackson (MS) - Hawkins Field",
    code: "HKS"
  },
  {
    AirportName: "Phuket",
    code: "HKT"
  },
  {
    AirportName: "Hickory (NC)",
    code: "HKY"
  },
  {
    AirportName: "Lanseria",
    code: "HLA"
  },
  {
    AirportName: "Ulanhot",
    code: "HLH"
  },
  {
    AirportName: "Helena (MT)",
    code: "HLN"
  },
  {
    AirportName: "Jakarta - Halim Perdana Kusuma",
    code: "HLP"
  },
  {
    AirportName: "Hamilton",
    code: "HLT"
  },
  {
    AirportName: "Hamilton",
    code: "HLZ"
  },
  {
    AirportName: "Home Hill",
    code: "HMH"
  },
  {
    AirportName: "Hermosillo - Gen. Pesqueira Garcia",
    code: "HMO"
  },
  {
    AirportName: "Morioka, Hanamaki",
    code: "HNA"
  },
  {
    AirportName: "Tokyo - Haneda",
    code: "HND"
  },
  {
    AirportName: "Hoonah (AK)",
    code: "HNH"
  },
  {
    AirportName: "Hinchinbrook Island",
    code: "HNK"
  },
  {
    AirportName: "Honolulu (HI) - Honolulu International Airport",
    code: "HNL"
  },
  {
    AirportName: "Haines (AK)",
    code: "HNS"
  },
  {
    AirportName: "Holguin",
    code: "HOG"
  },
  {
    AirportName: "Homer (AK)",
    code: "HOM"
  },
  {
    AirportName: "Huron (SD)",
    code: "HON"
  },
  {
    AirportName: "Hof",
    code: "HOQ"
  },
  {
    AirportName: "Horta",
    code: "HOR"
  },
  {
    AirportName: "Houston (TX) , Hobby",
    code: "HOU"
  },
  {
    AirportName: "White Plains (NY)",
    code: "HPN"
  },
  {
    AirportName: "Harbin (Haerbin)",
    code: "HRB"
  },
  {
    AirportName: "Harare - Harare International Airport",
    code: "HRE"
  },
  {
    AirportName: "Hurghada International",
    code: "HRG"
  },
  {
    AirportName: "Kharkov",
    code: "HRK"
  },
  {
    AirportName: "Harlingen/South Padre Island (TX)",
    code: "HRL"
  },
  {
    AirportName: "Huntsville (AL)",
    code: "HSV"
  },
  {
    AirportName: "Chita (Tschita)",
    code: "HTA"
  },
  {
    AirportName: "Hamilton Island",
    code: "HTI"
  },
  {
    AirportName: "Huntington (WV)",
    code: "HTS"
  },
  {
    AirportName: "Terre Haute (IN)",
    code: "HUF"
  },
  {
    AirportName: "Huahine",
    code: "HUH"
  },
  {
    AirportName: "Hue - Phu Bai",
    code: "HUI"
  },
  {
    AirportName: "Huatulco",
    code: "HUX"
  },
  {
    AirportName: "Hervey Bay",
    code: "HVB"
  },
  {
    AirportName: "New Haven (CT)",
    code: "HVN"
  },
  {
    AirportName: "Havre (MT)",
    code: "HVR"
  },
  {
    AirportName: "Hwange National Park",
    code: "HWN"
  },
  {
    AirportName: "Hyannis (MA)",
    code: "HYA"
  },
  {
    AirportName: "Hyderabad - Rajiv Gandhi International Airport",
    code: "HYD"
  },
  {
    AirportName: "Hydaburg (AK)",
    code: "HYG"
  },
  {
    AirportName: "Washington DC - Dulles International",
    code: "IAD"
  },
  {
    AirportName: "Niagara Falls International",
    code: "IAG"
  },
  {
    AirportName: "Houston, TX - George Bush Intercontinental Airport",
    code: "IAH"
  },
  {
    AirportName: "Ibiza",
    code: "IBZ"
  },
  {
    AirportName: "Incheon, Incheon International Airport",
    code: "ICN"
  },
  {
    AirportName: "Seoul - Incheon International Airport",
    code: "ICN"
  },
  {
    AirportName: "Wichita (KS)",
    code: "ICT"
  },
  {
    AirportName: "Idaho Falls (ID)",
    code: "IDA"
  },
  {
    AirportName: "Kiev - Zhulhany",
    code: "IEV"
  },
  {
    AirportName: "Innisfail",
    code: "IFL"
  },
  {
    AirportName: "Ingham",
    code: "IGH"
  },
  {
    AirportName: "Iguazu, Cataratas",
    code: "IGR"
  },
  {
    AirportName: "Jacksonville (IL) - Municipal Airport",
    code: "IJX"
  },
  {
    AirportName: "Irkutsk",
    code: "IKT"
  },
  {
    AirportName: "Killeem (TX)",
    code: "ILE"
  },
  {
    AirportName: "Iliamna (AK)",
    code: "ILI"
  },
  {
    AirportName: "Wilmington (NC)",
    code: "ILM"
  },
  {
    AirportName: "Ile des Pins",
    code: "ILP"
  },
  {
    AirportName: "Indianapolis (IN) International",
    code: "IND"
  },
  {
    AirportName: "Nis",
    code: "INI"
  },
  {
    AirportName: "International Falls (MN)",
    code: "INL"
  },
  {
    AirportName: "Innsbruck - Kranebitten",
    code: "INN"
  },
  {
    AirportName: "Isle of Man",
    code: "IOM"
  },
  {
    AirportName: "Ile Ouen",
    code: "IOU"
  },
  {
    AirportName: "Easter Island",
    code: "IPC"
  },
  {
    AirportName: "Imperial (CA)",
    code: "IPL"
  },
  {
    AirportName: "Williamsport (PA)",
    code: "IPT"
  },
  {
    AirportName: "Iquitos",
    code: "IQT"
  },
  {
    AirportName: "Lockhart River",
    code: "IRG"
  },
  {
    AirportName: "Biraro",
    code: "IRO"
  },
  {
    AirportName: "Mt. Isa",
    code: "ISA"
  },
  {
    AirportName: "Islamabad - Benazir Bhutto International Airport",
    code: "ISB"
  },
  {
    AirportName: "Ishigaki - New Ishigaki Airport",
    code: "ISG"
  },
  {
    AirportName: "Williston (ND)",
    code: "ISL"
  },
  {
    AirportName: "Kingston (NC)",
    code: "ISO"
  },
  {
    AirportName: "Long Island, Islip (NY) - Mac Arthur",
    code: "ISP"
  },
  {
    AirportName: "Istanbul - Istanbul Atatürk Airport",
    code: "IST"
  },
  {
    AirportName: "Ithaca/Cortland (NY)",
    code: "ITH"
  },
  {
    AirportName: "Osaka - Itami",
    code: "ITM"
  },
  {
    AirportName: "Hilo (HI)",
    code: "ITO"
  },
  {
    AirportName: "Incercargill",
    code: "IVC"
  },
  {
    AirportName: "Invercargill",
    code: "IVC"
  },
  {
    AirportName: "Ivalo",
    code: "IVL"
  },
  {
    AirportName: "Bagdogra",
    code: "IXB"
  },
  {
    AirportName: "Chandigarh - Chandigarh International Airport",
    code: "IXC"
  },
  {
    AirportName: "Belgaum",
    code: "IXG"
  },
  {
    AirportName: "Jammu - Satwari",
    code: "IXJ"
  },
  {
    AirportName: "Ranchi",
    code: "IXR"
  },
  {
    AirportName: "Jamshedpur - Sonari Airport",
    code: "IXW"
  },
  {
    AirportName: "Inykern (CA)",
    code: "IYK"
  },
  {
    AirportName: "Izmir",
    code: "IZM"
  },
  {
    AirportName: "Jalalabad",
    code: "JAA"
  },
  {
    AirportName: "Jackson Hole (WY)",
    code: "JAC"
  },
  {
    AirportName: "Jackson Hole (WY)",
    code: "JAC"
  },
  {
    AirportName: "Jandakot",
    code: "JAD"
  },
  {
    AirportName: "Jaffna - Kankesanturai",
    code: "JAF"
  },
  {
    AirportName: "Jacobabad",
    code: "JAG"
  },
  {
    AirportName: "Jaipur - Sanganeer",
    code: "JAI"
  },
  {
    AirportName: "Jacmel",
    code: "JAK"
  },
  {
    AirportName: "Jalapa",
    code: "JAL"
  },
  {
    AirportName: "Jambol",
    code: "JAM"
  },
  {
    AirportName: "Jackson (MS) - Jackson Internationall",
    code: "JAN"
  },
  {
    AirportName: "Jacquinot Bay",
    code: "JAQ"
  },
  {
    AirportName: "Jauja",
    code: "JAU"
  },
  {
    AirportName: "Jacksonville (FL) - International",
    code: "JAX"
  },
  {
    AirportName: "Jonesboro (AR)  Jonesboro Airport",
    code: "JBR"
  },
  {
    AirportName: "Joacaba",
    code: "JCB"
  },
  {
    AirportName: "Julia Creek",
    code: "JCK"
  },
  {
    AirportName: "Jacobina",
    code: "JCM"
  },
  {
    AirportName: "Juiz De Fora - Francisco De Assis Airport",
    code: "JDF"
  },
  {
    AirportName: "Jodhpur",
    code: "JDH"
  },
  {
    AirportName: "Jingdezhen",
    code: "JDZ"
  },
  {
    AirportName: "Jeddah - King Abdulaziz International",
    code: "JED"
  },
  {
    AirportName: "Jeremie - Jeremie Airport",
    code: "JEE"
  },
  {
    AirportName: "Jefferson City (MO) - Jefferson Memorial",
    code: "JEF"
  },
  {
    AirportName: "Jersey",
    code: "JER"
  },
  {
    AirportName: "New York - John F. Kennedy (NY)",
    code: "JFK"
  },
  {
    AirportName: "Jamnagar - Govardhanpur",
    code: "JGA"
  },
  {
    AirportName: "Jagdalpur",
    code: "JGB"
  },
  {
    AirportName: "Jiayuguan - Jiayuguan Airport",
    code: "JGN"
  },
  {
    AirportName: "Ji'an",
    code: "JGS"
  },
  {
    AirportName: "Johor Bahru - Sultan Ismail International",
    code: "JHB"
  },
  {
    AirportName: "Helsingborg",
    code: "JHE"
  },
  {
    AirportName: "Jinghong - Gasa Airport",
    code: "JHG"
  },
  {
    AirportName: "Kapalua West (HI)",
    code: "JHM"
  },
  {
    AirportName: "Shute Harbour",
    code: "JHQ"
  },
  {
    AirportName: "Jamestown (NY)",
    code: "JHW"
  },
  {
    AirportName: "Djibouti (city) - Djibouti-Ambouli International Airport",
    code: "JIB"
  },
  {
    AirportName: "Jijiga",
    code: "JIJ"
  },
  {
    AirportName: "Jilin",
    code: "JIL"
  },
  {
    AirportName: "Jimma",
    code: "JIM"
  },
  {
    AirportName: "Jinja",
    code: "JIN"
  },
  {
    AirportName: "Jipijapa",
    code: "JIP"
  },
  {
    AirportName: "Jiri",
    code: "JIR"
  },
  {
    AirportName: "Jiujiang - Jiujiang Lushan Airport",
    code: "JIU"
  },
  {
    AirportName: "Jiwani",
    code: "JIW"
  },
  {
    AirportName: "Juanjui",
    code: "JJI"
  },
  {
    AirportName: "Jinjiang",
    code: "JJN"
  },
  {
    AirportName: "Jönköping (Jonkoping) - Axamo Airport",
    code: "JKG"
  },
  {
    AirportName: "Chios",
    code: "JKH"
  },
  {
    AirportName: "Janakpur",
    code: "JKR"
  },
  {
    AirportName: "Jakarta - Metropolitan Area",
    code: "JKT"
  },
  {
    AirportName: "Jacksonville (TX)",
    code: "JKV"
  },
  {
    AirportName: "Joplin (MO)",
    code: "JLN"
  },
  {
    AirportName: "Jalandhar",
    code: "JLR"
  },
  {
    AirportName: "Jales",
    code: "JLS"
  },
  {
    AirportName: "Jamba",
    code: "JMB"
  },
  {
    AirportName: "Mykonos",
    code: "JMK"
  },
  {
    AirportName: "Jomsom",
    code: "JMO"
  },
  {
    AirportName: "Jamestown (ND)",
    code: "JMS"
  },
  {
    AirportName: "Jiamusi - Jiamusi Airport",
    code: "JMU"
  },
  {
    AirportName: "Januaria",
    code: "JNA"
  },
  {
    AirportName: "Johannesburg - OR Tambo International Airport",
    code: "JNB"
  },
  {
    AirportName: "Jining",
    code: "JNG"
  },
  {
    AirportName: "Junin",
    code: "JNI"
  },
  {
    AirportName: "Juneau (AK) - Juneau International Airport",
    code: "JNU"
  },
  {
    AirportName: "Naxos - Naxos Airport",
    code: "JNX"
  },
  {
    AirportName: "Jinzhou - Jinzhou Airport",
    code: "JNZ"
  },
  {
    AirportName: "Joensuu",
    code: "JOE"
  },
  {
    AirportName: "Joinville - Cubatao Airport",
    code: "JOI"
  },
  {
    AirportName: "Jolo",
    code: "JOL"
  },
  {
    AirportName: "Johnston Island",
    code: "JON"
  },
  {
    AirportName: "Jos",
    code: "JOS"
  },
  {
    AirportName: "Joao Pessoa - Castro Pinto Airport",
    code: "JPA"
  },
  {
    AirportName: "Jaque",
    code: "JQE"
  },
  {
    AirportName: "Jorhat - Rowriah Airport",
    code: "JRH"
  },
  {
    AirportName: "Kilimadjaro",
    code: "JRO"
  },
  {
    AirportName: "Jerusalem - Atarot Airport (closed)",
    code: "JRS"
  },
  {
    AirportName: "Jaisalmer",
    code: "JSA"
  },
  {
    AirportName: "Skiathos",
    code: "JSI"
  },
  {
    AirportName: "Jose De San Martin",
    code: "JSM"
  },
  {
    AirportName: "Jessore - Jessore Airport",
    code: "JSR"
  },
  {
    AirportName: "Johnstown (PA)",
    code: "JST"
  },
  {
    AirportName: "Jatai",
    code: "JTI"
  },
  {
    AirportName: "Thira",
    code: "JTR"
  },
  {
    AirportName: "Juba",
    code: "JUB"
  },
  {
    AirportName: "Juist (island)",
    code: "JUI"
  },
  {
    AirportName: "Jujuy - El Cadillal Airport",
    code: "JUJ"
  },
  {
    AirportName: "Juliaca",
    code: "JUL"
  },
  {
    AirportName: "Jumla",
    code: "JUM"
  },
  {
    AirportName: "Jundah",
    code: "JUN"
  },
  {
    AirportName: "Juticalpa",
    code: "JUT"
  },
  {
    AirportName: "Upernavik - Upernavik Heliport",
    code: "JUV"
  },
  {
    AirportName: "Janesville (WI) - Rock County",
    code: "JVL"
  },
  {
    AirportName: "Jwaneng",
    code: "JWA"
  },
  {
    AirportName: "Jackson (MI) - Reynolds Municipal",
    code: "JXN"
  },
  {
    AirportName: "Jyväskylä (Jyvaskyla)",
    code: "JYV"
  },
  {
    AirportName: "Kajaani",
    code: "KAJ"
  },
  {
    AirportName: "Kano",
    code: "KAN"
  },
  {
    AirportName: "Kuusamo",
    code: "KAO"
  },
  {
    AirportName: "Kabul - Khwaja Rawash Airport",
    code: "KBL"
  },
  {
    AirportName: "Kiev - Borispol",
    code: "KBP"
  },
  {
    AirportName: "Streaky Bay",
    code: "KBY"
  },
  {
    AirportName: "Coffmann Cove (AK)",
    code: "KCC"
  },
  {
    AirportName: "Collinsville",
    code: "KCE"
  },
  {
    AirportName: "Kuching",
    code: "KCH"
  },
  {
    AirportName: "Kahramanmaras",
    code: "KCM"
  },
  {
    AirportName: "Maras",
    code: "KCM"
  },
  {
    AirportName: "Kochi",
    code: "KCZ"
  },
  {
    AirportName: "Khuzdar",
    code: "KDD"
  },
  {
    AirportName: "Skardu",
    code: "KDU"
  },
  {
    AirportName: "Reykjavik - Keflavik International",
    code: "KEF"
  },
  {
    AirportName: "Kiel - Holtenau",
    code: "KEL"
  },
  {
    AirportName: "Kemi/Tornio",
    code: "KEM"
  },
  {
    AirportName: "Kingscote",
    code: "KGC"
  },
  {
    AirportName: "Kaliningrad",
    code: "KGD"
  },
  {
    AirportName: "Kalgoorlie",
    code: "KGI"
  },
  {
    AirportName: "Kigali - Gregoire Kayibanda",
    code: "KGL"
  },
  {
    AirportName: "Kos",
    code: "KGS"
  },
  {
    AirportName: "Kaohsiung International",
    code: "KHH"
  },
  {
    AirportName: "Karachi - Jinnah International Airport",
    code: "KHI"
  },
  {
    AirportName: "Kauhajoki",
    code: "KHJ"
  },
  {
    AirportName: "Chabarovsk (Khabarovsk)",
    code: "KHV"
  },
  {
    AirportName: "Kristianstad",
    code: "KID"
  },
  {
    AirportName: "Niigata",
    code: "KIJ"
  },
  {
    AirportName: "Kirkuk",
    code: "KIK"
  },
  {
    AirportName: "Kimberley",
    code: "KIM"
  },
  {
    AirportName: "Kingston - Norman Manley",
    code: "KIN"
  },
  {
    AirportName: "Kerry County",
    code: "KIR"
  },
  {
    AirportName: "Chisinau - Chişinău International Airport",
    code: "KIV"
  },
  {
    AirportName: "Kitwe",
    code: "KIW"
  },
  {
    AirportName: "Osaka - Kansai International Airport",
    code: "KIX"
  },
  {
    AirportName: "Kirkenes",
    code: "KKN"
  },
  {
    AirportName: "Kalmar",
    code: "KLR"
  },
  {
    AirportName: "Klagenfurt",
    code: "KLU"
  },
  {
    AirportName: "Klawock (AK)",
    code: "KLW"
  },
  {
    AirportName: "Kalamata",
    code: "KLX"
  },
  {
    AirportName: "Kleinsee",
    code: "KLZ"
  },
  {
    AirportName: "Miyazaki",
    code: "KMI"
  },
  {
    AirportName: "Kumamoto",
    code: "KMJ"
  },
  {
    AirportName: "Keetmanshoop",
    code: "KMP"
  },
  {
    AirportName: "Komatsu",
    code: "KMQ"
  },
  {
    AirportName: "Medan - Kualanamu International",
    code: "KNO"
  },
  {
    AirportName: "King Island",
    code: "KNS"
  },
  {
    AirportName: "Kanpur",
    code: "KNU"
  },
  {
    AirportName: "Kununurra",
    code: "KNX"
  },
  {
    AirportName: "Kona (HI)",
    code: "KOA"
  },
  {
    AirportName: "Kagoshima",
    code: "KOJ"
  },
  {
    AirportName: "Kokkola/Pietarsaari",
    code: "KOK"
  },
  {
    AirportName: "Karumba",
    code: "KRB"
  },
  {
    AirportName: "Krakow (Cracow) - John Paul II International Airport",
    code: "KRK"
  },
  {
    AirportName: "Kiruna",
    code: "KRN"
  },
  {
    AirportName: "Karup",
    code: "KRP"
  },
  {
    AirportName: "Kristiansand",
    code: "KRS"
  },
  {
    AirportName: "Khartoum - Khartoum International Airport",
    code: "KRT"
  },
  {
    AirportName: "Karlstad",
    code: "KSD"
  },
  {
    AirportName: "Kassala",
    code: "KSL"
  },
  {
    AirportName: "Kristiansund",
    code: "KSU"
  },
  {
    AirportName: "Karratha",
    code: "KTA"
  },
  {
    AirportName: "Thorne Bay (AK)",
    code: "KTB"
  },
  {
    AirportName: "Kathmandu - Tribhuvan International Airport",
    code: "KTM"
  },
  {
    AirportName: "Ketchikan (AK)",
    code: "KTN"
  },
  {
    AirportName: "Katherine",
    code: "KTR"
  },
  {
    AirportName: "Kittilä",
    code: "KTT"
  },
  {
    AirportName: "Kuantan",
    code: "KUA"
  },
  {
    AirportName: "Samara - Kurumoch International Airport",
    code: "KUF"
  },
  {
    AirportName: "Kushiro",
    code: "KUH"
  },
  {
    AirportName: "Kuala Lumpur - International Airport",
    code: "KUL"
  },
  {
    AirportName: "Kuopio",
    code: "KUO"
  },
  {
    AirportName: "Kavalla",
    code: "KVA"
  },
  {
    AirportName: "Kuwait - Kuwait International",
    code: "KWI"
  },
  {
    AirportName: "Guilin - Liangjiang",
    code: "KWL"
  },
  {
    AirportName: "Kowanyama",
    code: "KWM"
  },
  {
    AirportName: "Konya",
    code: "KYA"
  },
  {
    AirportName: "Kars",
    code: "KYS"
  },
  {
    AirportName: "Kazan - Kazan International Airport",
    code: "KZN"
  },
  {
    AirportName: "Luanda - 4 de Fevereiro",
    code: "LAD"
  },
  {
    AirportName: "Lae - Lae Nadzab Airport",
    code: "LAE"
  },
  {
    AirportName: "Lafayette (IN)",
    code: "LAF"
  },
  {
    AirportName: "Lannion",
    code: "LAI"
  },
  {
    AirportName: "Lansing (MI)",
    code: "LAN"
  },
  {
    AirportName: "La Paz - Leon",
    code: "LAP"
  },
  {
    AirportName: "Laramie (WY)",
    code: "LAR"
  },
  {
    AirportName: "Las Vegas (NV)",
    code: "LAS"
  },
  {
    AirportName: "Lawton (OK)",
    code: "LAW"
  },
  {
    AirportName: "Los Angeles (CA) - International",
    code: "LAX"
  },
  {
    AirportName: "Lubbock (TX)",
    code: "LBB"
  },
  {
    AirportName: "Latrobe (PA)",
    code: "LBE"
  },
  {
    AirportName: "Paris - Le Bourget",
    code: "LBG"
  },
  {
    AirportName: "Albi",
    code: "LBI"
  },
  {
    AirportName: "Lambarene",
    code: "LBQ"
  },
  {
    AirportName: "Labuan",
    code: "LBU"
  },
  {
    AirportName: "Libreville",
    code: "LBV"
  },
  {
    AirportName: "Larnaca",
    code: "LCA"
  },
  {
    AirportName: "La Coruna",
    code: "LCG"
  },
  {
    AirportName: "Lake Charles (LA)",
    code: "LCH"
  },
  {
    AirportName: "Lindeman Island",
    code: "LDC"
  },
  {
    AirportName: "Lourdes/Tarbes",
    code: "LDE"
  },
  {
    AirportName: "Lidkoeping",
    code: "LDK"
  },
  {
    AirportName: "Learmouth (Exmouth)",
    code: "LEA"
  },
  {
    AirportName: "Lebanon (NH)",
    code: "LEB"
  },
  {
    AirportName: "St. Petersburg (Leningrad) - Pulkovo",
    code: "LED"
  },
  {
    AirportName: "Almeria",
    code: "LEI"
  },
  {
    AirportName: "Leipzig",
    code: "LEJ"
  },
  {
    AirportName: "Labe",
    code: "LEK"
  },
  {
    AirportName: "Leinster",
    code: "LER"
  },
  {
    AirportName: "Lexington (KY)",
    code: "LEX"
  },
  {
    AirportName: "Lelystad",
    code: "LEY"
  },
  {
    AirportName: "Lafayette, La",
    code: "LFT"
  },
  {
    AirportName: "Lome",
    code: "LFW"
  },
  {
    AirportName: "New York - LaGuardia (NY)",
    code: "LGA"
  },
  {
    AirportName: "Long Beach (CA)",
    code: "LGB"
  },
  {
    AirportName: "Liege",
    code: "LGG"
  },
  {
    AirportName: "Langkawi (islands)",
    code: "LGK"
  },
  {
    AirportName: "Lahore",
    code: "LHE"
  },
  {
    AirportName: "Lifou",
    code: "LIF"
  },
  {
    AirportName: "Limoges",
    code: "LIG"
  },
  {
    AirportName: "Lihue (HI)",
    code: "LIH"
  },
  {
    AirportName: "Long Island (AK)",
    code: "LIJ"
  },
  {
    AirportName: "Lille - Lille Airport",
    code: "LIL"
  },
  {
    AirportName: "Lima - J Chavez International",
    code: "LIM"
  },
  {
    AirportName: "Milan - Linate",
    code: "LIN"
  },
  {
    AirportName: "Lisala",
    code: "LIQ"
  },
  {
    AirportName: "Lisbon - Lisboa",
    code: "LIS"
  },
  {
    AirportName: "Little Rock (AR)",
    code: "LIT"
  },
  {
    AirportName: "Ljubljana - Brnik",
    code: "LJU"
  },
  {
    AirportName: "Lakselv",
    code: "LKL"
  },
  {
    AirportName: "Lucknow",
    code: "LKO"
  },
  {
    AirportName: "Lulea",
    code: "LLA"
  },
  {
    AirportName: "Lilongwe - Lilongwe International",
    code: "LLW"
  },
  {
    AirportName: "Los Mochis",
    code: "LMM"
  },
  {
    AirportName: "Lampedusa",
    code: "LMP"
  },
  {
    AirportName: "Klamath Fall (OR)",
    code: "LMT"
  },
  {
    AirportName: "Lincoln (NE)",
    code: "LNK"
  },
  {
    AirportName: "Leonora",
    code: "LNO"
  },
  {
    AirportName: "Lancaster (PA)",
    code: "LNS"
  },
  {
    AirportName: "Lanai City (HI)",
    code: "LNY"
  },
  {
    AirportName: "Linz - Hoersching",
    code: "LNZ"
  },
  {
    AirportName: "Lagos - Murtala Muhammed Airport",
    code: "LOS"
  },
  {
    AirportName: "Las Palmas",
    code: "LPA"
  },
  {
    AirportName: "La Paz - El Alto",
    code: "LPB"
  },
  {
    AirportName: "Lappeenranta",
    code: "LPP"
  },
  {
    AirportName: "Laredo (TX)",
    code: "LRD"
  },
  {
    AirportName: "Longreach",
    code: "LRE"
  },
  {
    AirportName: "Jacksonville (AR)  Little Rock AFB",
    code: "LRF"
  },
  {
    AirportName: "La Rochelle",
    code: "LRH"
  },
  {
    AirportName: "Casa de Campo - La Romana International Airport",
    code: "LRM"
  },
  {
    AirportName: "Lorient",
    code: "LRT"
  },
  {
    AirportName: "La Crosse (WI)",
    code: "LSE"
  },
  {
    AirportName: "Launceston",
    code: "LST"
  },
  {
    AirportName: "Lismore",
    code: "LSY"
  },
  {
    AirportName: "Losinj - Losinj Arpt",
    code: "LSZ"
  },
  {
    AirportName: "Loreto",
    code: "LTO"
  },
  {
    AirportName: "Luederitz",
    code: "LUD"
  },
  {
    AirportName: "Lugano",
    code: "LUG"
  },
  {
    AirportName: "Lusisiki",
    code: "LUJ"
  },
  {
    AirportName: "Luxi - Mangshi",
    code: "LUM"
  },
  {
    AirportName: "Lusaka - Lusaka International Airport",
    code: "LUN"
  },
  {
    AirportName: "Luxembourg",
    code: "LUX"
  },
  {
    AirportName: "Laverton",
    code: "LVO"
  },
  {
    AirportName: "Greenbrier/Lewisburg (WV)",
    code: "LWB"
  },
  {
    AirportName: "Lvov (Lwow, Lemberg)",
    code: "LWO"
  },
  {
    AirportName: "Lewiston (ID)",
    code: "LWS"
  },
  {
    AirportName: "Lewistown (MT)",
    code: "LWT"
  },
  {
    AirportName: "Luxor",
    code: "LXR"
  },
  {
    AirportName: "Lynchburg (VA)",
    code: "LYH"
  },
  {
    AirportName: "Lyons (KS) - Rice County Municipal",
    code: "LYO"
  },
  {
    AirportName: "Faisalabad",
    code: "LYP"
  },
  {
    AirportName: "Longyearbyen - Svalbard",
    code: "LYR"
  },
  {
    AirportName: "Lyon - Lyon-Saint Exupéry Airport",
    code: "LYS"
  },
  {
    AirportName: "Lazaro Cardenas",
    code: "LZC"
  },
  {
    AirportName: "Lizard Island",
    code: "LZR"
  },
  {
    AirportName: "Chennai (Madras)",
    code: "MAA"
  },
  {
    AirportName: "Madras (Chennai) - Chennai International Airport",
    code: "MAA"
  },
  {
    AirportName: "Madrid - Barajas Airport",
    code: "MAD"
  },
  {
    AirportName: "Midland/Odessa (TX)",
    code: "MAF"
  },
  {
    AirportName: "Mahon",
    code: "MAH"
  },
  {
    AirportName: "Manaus - Eduardo Gomes International Airport",
    code: "MAO"
  },
  {
    AirportName: "Maracaibo - La Chinita International",
    code: "MAR"
  },
  {
    AirportName: "Maupiti",
    code: "MAU"
  },
  {
    AirportName: "Mayaguez",
    code: "MAZ"
  },
  {
    AirportName: "Mombasa - Moi International",
    code: "MBA"
  },
  {
    AirportName: "Maryborough",
    code: "MBH"
  },
  {
    AirportName: "Montego Bay - Sangster International",
    code: "MBJ"
  },
  {
    AirportName: "Mkambati",
    code: "MBM"
  },
  {
    AirportName: "Saginaw/Bay City/Midland (MI)",
    code: "MBS"
  },
  {
    AirportName: "Maribor",
    code: "MBX"
  },
  {
    AirportName: "Merced (CA)",
    code: "MCE"
  },
  {
    AirportName: "Kansas City (MO) - Kansas City International Airport",
    code: "MCI"
  },
  {
    AirportName: "Mt. McKinley (AK)",
    code: "MCL"
  },
  {
    AirportName: "Macon (GA)",
    code: "MCN"
  },
  {
    AirportName: "Orlando - International Airport (FL)",
    code: "MCO"
  },
  {
    AirportName: "Macapa - Alberto Alcolumbre International Airport",
    code: "MCP"
  },
  {
    AirportName: "Muscat - Seeb",
    code: "MCT"
  },
  {
    AirportName: "Mason City IA",
    code: "MCW"
  },
  {
    AirportName: "Sunshine Coast",
    code: "MCY"
  },
  {
    AirportName: "Maceio - Zumbi dos Palmares International Airport",
    code: "MCZ"
  },
  {
    AirportName: "Manado",
    code: "MDC"
  },
  {
    AirportName: "Medellin - José María Córdova International",
    code: "MDE"
  },
  {
    AirportName: "Mandalay - Mandalay-Annisaton Airport",
    code: "MDL"
  },
  {
    AirportName: "Mar del Plata",
    code: "MDQ"
  },
  {
    AirportName: "Harrisburg (PA) - Harrisburg International",
    code: "MDT"
  },
  {
    AirportName: "Chicago (IL), Midway",
    code: "MDW"
  },
  {
    AirportName: "Midway Island - Sand Island Field",
    code: "MDY"
  },
  {
    AirportName: "Mendoza",
    code: "MDZ"
  },
  {
    AirportName: "Madinah (Medina) - Mohammad Bin Abdulaziz",
    code: "MED"
  },
  {
    AirportName: "Medina",
    code: "MED"
  },
  {
    AirportName: "Mare",
    code: "MEE"
  },
  {
    AirportName: "Meridian (MS)",
    code: "MEI"
  },
  {
    AirportName: "Melbourne - Melbourne Airport (Tullamarine)",
    code: "MEL"
  },
  {
    AirportName: "Memphis (TN)",
    code: "MEM"
  },
  {
    AirportName: "Medan - Polania Int'l (now Soewondo AFB)",
    code: "MES"
  },
  {
    AirportName: "Mexico City - Mexico City International Airport",
    code: "MEX"
  },
  {
    AirportName: "Mexico City - Juarez International",
    code: "MEX"
  },
  {
    AirportName: "Messina",
    code: "MEZ"
  },
  {
    AirportName: "McAllen (TX)",
    code: "MFE"
  },
  {
    AirportName: "Moanda",
    code: "MFF"
  },
  {
    AirportName: "Muzaffarabad",
    code: "MFG"
  },
  {
    AirportName: "Macau - Macau International Airport",
    code: "MFM"
  },
  {
    AirportName: "Milford Sound",
    code: "MFN"
  },
  {
    AirportName: "Manguna",
    code: "MFO"
  },
  {
    AirportName: "Maradi",
    code: "MFQ"
  },
  {
    AirportName: "Medford (OR)",
    code: "MFR"
  },
  {
    AirportName: "Mfuwe",
    code: "MFU"
  },
  {
    AirportName: "Managua - Augusto C Sandino",
    code: "MGA"
  },
  {
    AirportName: "Mount Gambier",
    code: "MGB"
  },
  {
    AirportName: "Margate",
    code: "MGH"
  },
  {
    AirportName: "Montgomery (AL) - Montgomery Regional Airport",
    code: "MGM"
  },
  {
    AirportName: "Mogadishu",
    code: "MGQ"
  },
  {
    AirportName: "Morgantown (WV)",
    code: "MGW"
  },
  {
    AirportName: "Mitchell (SD)",
    code: "MHE"
  },
  {
    AirportName: "Marsh Harbour",
    code: "MHH"
  },
  {
    AirportName: "Mariehamn (Maarianhamina)",
    code: "MHQ"
  },
  {
    AirportName: "Manchester (NH)",
    code: "MHT"
  },
  {
    AirportName: "Miami (FL)",
    code: "MIA"
  },
  {
    AirportName: "Merida",
    code: "MID"
  },
  {
    AirportName: "Mikkeli",
    code: "MIK"
  },
  {
    AirportName: "Milan",
    code: "MIL"
  },
  {
    AirportName: "Merimbula",
    code: "MIM"
  },
  {
    AirportName: "Monastir",
    code: "MIR"
  },
  {
    AirportName: "Man",
    code: "MJC"
  },
  {
    AirportName: "Moenjodaro",
    code: "MJD"
  },
  {
    AirportName: "Mouila",
    code: "MJL"
  },
  {
    AirportName: "Majunga",
    code: "MJN"
  },
  {
    AirportName: "Jackson,  MN",
    code: "MJQ"
  },
  {
    AirportName: "Mytilene (Lesbos)",
    code: "MJT"
  },
  {
    AirportName: "Murcia",
    code: "MJV"
  },
  {
    AirportName: "Milwaukee (WI)",
    code: "MKE"
  },
  {
    AirportName: "Muskegon (MI)",
    code: "MKG"
  },
  {
    AirportName: "Kaunakakai (HI)",
    code: "MKK"
  },
  {
    AirportName: "Jackson (TN) - Mckellar",
    code: "MKL"
  },
  {
    AirportName: "Meekatharra",
    code: "MKR"
  },
  {
    AirportName: "Mackay",
    code: "MKY"
  },
  {
    AirportName: "Luga",
    code: "MLA"
  },
  {
    AirportName: "Melbourne (FL)",
    code: "MLB"
  },
  {
    AirportName: "Male - Velana International Airport",
    code: "MLE"
  },
  {
    AirportName: "Mulhouse",
    code: "MLH"
  },
  {
    AirportName: "Moline/Quad Cities (IL)",
    code: "MLI"
  },
  {
    AirportName: "Morelia",
    code: "MLM"
  },
  {
    AirportName: "Miles City (MT)",
    code: "MLS"
  },
  {
    AirportName: "Monroe (LA)",
    code: "MLU"
  },
  {
    AirportName: "Monrovia - Metropolitan Area",
    code: "MLW"
  },
  {
    AirportName: "Malatya",
    code: "MLX"
  },
  {
    AirportName: "Malmo (Malmoe)",
    code: "MMA"
  },
  {
    AirportName: "Mount Magnet",
    code: "MMG"
  },
  {
    AirportName: "Matsumoto, Nagano",
    code: "MMJ"
  },
  {
    AirportName: "Murmansk",
    code: "MMK"
  },
  {
    AirportName: "Middlemount",
    code: "MMM"
  },
  {
    AirportName: "Malmo (Malmö) - Malmö Airport",
    code: "MMX"
  },
  {
    AirportName: "Miyako Jima (Ryuku Islands) - Hirara",
    code: "MMY"
  },
  {
    AirportName: "Manila - Ninoy Aquino International",
    code: "MNL"
  },
  {
    AirportName: "Mobile (AL) - Pascagoula (MS)",
    code: "MOB"
  },
  {
    AirportName: "Modesto (CA)",
    code: "MOD"
  },
  {
    AirportName: "Minot (ND)",
    code: "MOT"
  },
  {
    AirportName: "Moranbah",
    code: "MOV"
  },
  {
    AirportName: "Moscow - Metropolitan Area",
    code: "MOW"
  },
  {
    AirportName: "Moorea",
    code: "MOZ"
  },
  {
    AirportName: "Katima Mulilo/Mpacha",
    code: "MPA"
  },
  {
    AirportName: "Sindhri",
    code: "MPD"
  },
  {
    AirportName: "Montpellier - Montpellier–Méditerranée Airport",
    code: "MPL"
  },
  {
    AirportName: "Maputo - Maputo International",
    code: "MPM"
  },
  {
    AirportName: "Mildura",
    code: "MQL"
  },
  {
    AirportName: "Mardin",
    code: "MQM"
  },
  {
    AirportName: "Nelspruit - Kruger Mpumalanga International Airport",
    code: "MQP"
  },
  {
    AirportName: "Moundou",
    code: "MQQ"
  },
  {
    AirportName: "Marquette (MI)",
    code: "MQT"
  },
  {
    AirportName: "Martinsburg (WV)",
    code: "MRB"
  },
  {
    AirportName: "Marseille - Marseille Provence Airport",
    code: "MRS"
  },
  {
    AirportName: "Mauritius - S.Seewoosagur Ram International",
    code: "MRU"
  },
  {
    AirportName: "Mineralnye Vody",
    code: "MRV"
  },
  {
    AirportName: "Monterey (CA)",
    code: "MRY"
  },
  {
    AirportName: "Moree",
    code: "MRZ"
  },
  {
    AirportName: "Muscle Shoals (AL)",
    code: "MSL"
  },
  {
    AirportName: "Madison (WI) - Dane County Regional Airport",
    code: "MSN"
  },
  {
    AirportName: "Missula (MT)",
    code: "MSO"
  },
  {
    AirportName: "Minneapolis - St. Paul International Airport (MN)",
    code: "MSP"
  },
  {
    AirportName: "Minsk, International",
    code: "MSQ"
  },
  {
    AirportName: "Mus",
    code: "MSR"
  },
  {
    AirportName: "Maastricht/Aachen",
    code: "MST"
  },
  {
    AirportName: "Maseru - Moshoeshoe International",
    code: "MSU"
  },
  {
    AirportName: "New Orleans, La",
    code: "MSY"
  },
  {
    AirportName: "Marathon (FL)",
    code: "MTH"
  },
  {
    AirportName: "Montrose/Tellruide (CO)",
    code: "MTJ"
  },
  {
    AirportName: "Maitland",
    code: "MTL"
  },
  {
    AirportName: "Metlakatla (AK)",
    code: "MTM"
  },
  {
    AirportName: "Mattoon (IL)",
    code: "MTO"
  },
  {
    AirportName: "Manzini - Matsapha International",
    code: "MTS"
  },
  {
    AirportName: "Minatitlan",
    code: "MTT"
  },
  {
    AirportName: "Monterrey - Gen. Mariano Escobedo",
    code: "MTY"
  },
  {
    AirportName: "Maun",
    code: "MUB"
  },
  {
    AirportName: "Muenchen (Munich) - Franz Josef Strauss",
    code: "MUC"
  },
  {
    AirportName: "Kamuela (HI)",
    code: "MUE"
  },
  {
    AirportName: "Marsa Matrah (Marsa Matruh)",
    code: "MUH"
  },
  {
    AirportName: "Multan",
    code: "MUX"
  },
  {
    AirportName: "Mvengue",
    code: "MVB"
  },
  {
    AirportName: "Montevideo - Carrasco International Airport",
    code: "MVD"
  },
  {
    AirportName: "Maroua",
    code: "MVR"
  },
  {
    AirportName: "Martha's Vineyard (MA)",
    code: "MVY"
  },
  {
    AirportName: "Masvingo",
    code: "MVZ"
  },
  {
    AirportName: "Mianwali",
    code: "MWD"
  },
  {
    AirportName: "Moses Lake (WA)",
    code: "MWH"
  },
  {
    AirportName: "Mexicali",
    code: "MXL"
  },
  {
    AirportName: "Milan - Malpensa",
    code: "MXP"
  },
  {
    AirportName: "Moruya",
    code: "MYA"
  },
  {
    AirportName: "Malindi",
    code: "MYD"
  },
  {
    AirportName: "Matsuyama",
    code: "MYJ"
  },
  {
    AirportName: "Mysore",
    code: "MYQ"
  },
  {
    AirportName: "Myrtle Beach (SC) - Myrtle Beach AFB",
    code: "MYR"
  },
  {
    AirportName: "Miri",
    code: "MYY"
  },
  {
    AirportName: "Mzamba",
    code: "MZF"
  },
  {
    AirportName: "Makung",
    code: "MZG"
  },
  {
    AirportName: "Metz -  Frescaty",
    code: "MZM"
  },
  {
    AirportName: "Mazatlan",
    code: "MZT"
  },
  {
    AirportName: "Mossel Bay",
    code: "MZY"
  },
  {
    AirportName: "Narrabri",
    code: "NAA"
  },
  {
    AirportName: "Nagpur",
    code: "NAG"
  },
  {
    AirportName: "Nakhichevan",
    code: "NAJ"
  },
  {
    AirportName: "Nadi",
    code: "NAN"
  },
  {
    AirportName: "Naples - Naples Capodichino Airport",
    code: "NAP"
  },
  {
    AirportName: "Bahamas - Lynden Pindling International Airport",
    code: "NAS"
  },
  {
    AirportName: "Nassau",
    code: "NAS"
  },
  {
    AirportName: "Natal - Augusto Severo International Airport",
    code: "NAT"
  },
  {
    AirportName: "Beijing - Nanyuan Airport",
    code: "NAY"
  },
  {
    AirportName: "Nairobi",
    code: "NBO"
  },
  {
    AirportName: "Nice - Cote D'Azur Airport",
    code: "NCE"
  },
  {
    AirportName: "Newcastle",
    code: "NCS"
  },
  {
    AirportName: "Annecy",
    code: "NCY"
  },
  {
    AirportName: "Nouadhibou",
    code: "NDB"
  },
  {
    AirportName: "N'Djamena",
    code: "NDJ"
  },
  {
    AirportName: "Rundu",
    code: "NDU"
  },
  {
    AirportName: "Nevis",
    code: "NEV"
  },
  {
    AirportName: "N'Gaoundere",
    code: "NGE"
  },
  {
    AirportName: "Nagoya - Komaki AFB",
    code: "NGO"
  },
  {
    AirportName: "Nagasaki",
    code: "NGS"
  },
  {
    AirportName: "Nicosia",
    code: "NIC"
  },
  {
    AirportName: "Niamey",
    code: "NIM"
  },
  {
    AirportName: "Jacksonville (FL) Jacksonville NAS",
    code: "NIP"
  },
  {
    AirportName: "Nouakchott",
    code: "NKC"
  },
  {
    AirportName: "N'Dola",
    code: "NLA"
  },
  {
    AirportName: "Nuevo Laredo",
    code: "NLD"
  },
  {
    AirportName: "Norfolk Island",
    code: "NLK"
  },
  {
    AirportName: "Nelspruit",
    code: "NLP"
  },
  {
    AirportName: "Mexico City - Santa Lucia",
    code: "NLU"
  },
  {
    AirportName: "Nikolaev",
    code: "NLV"
  },
  {
    AirportName: "Nanning",
    code: "NNG"
  },
  {
    AirportName: "Knock",
    code: "NOC"
  },
  {
    AirportName: "Mactan Island - Nab",
    code: "NOP"
  },
  {
    AirportName: "Noumea",
    code: "NOU"
  },
  {
    AirportName: "Narrandera",
    code: "NRA"
  },
  {
    AirportName: "Norrkoeping",
    code: "NRK"
  },
  {
    AirportName: "Tokyo - Narita",
    code: "NRT"
  },
  {
    AirportName: "Noosa",
    code: "NSA"
  },
  {
    AirportName: "Nelson",
    code: "NSN"
  },
  {
    AirportName: "Scone",
    code: "NSO"
  },
  {
    AirportName: "Nakhon Si Thammarat",
    code: "NST"
  },
  {
    AirportName: "Nantes - Nantes Atlantique Airport",
    code: "NTE"
  },
  {
    AirportName: "Newcastle - Williamtown",
    code: "NTL"
  },
  {
    AirportName: "Monterrey - Aeropuerto Del Norte",
    code: "NTR"
  },
  {
    AirportName: "Pilanesberg/Sun City",
    code: "NTY"
  },
  {
    AirportName: "Nürnberg (Nuremberg)",
    code: "NUE"
  },
  {
    AirportName: "New York (NY)",
    code: "NYC"
  },
  {
    AirportName: "Jacksonville (FL) - Cecil Field NAS",
    code: "NZC"
  },
  {
    AirportName: "Orange",
    code: "OAG"
  },
  {
    AirportName: "Jacksonville (NC)",
    code: "OAJ"
  },
  {
    AirportName: "Oakland (CA)",
    code: "OAK"
  },
  {
    AirportName: "Oaxaca - Xoxocotlan",
    code: "OAX"
  },
  {
    AirportName: "Ouadda",
    code: "ODA"
  },
  {
    AirportName: "Cordoba",
    code: "ODB"
  },
  {
    AirportName: "Odense",
    code: "ODE"
  },
  {
    AirportName: "Odessa",
    code: "ODS"
  },
  {
    AirportName: "Kahului (HI)",
    code: "OGG"
  },
  {
    AirportName: "Ohrid",
    code: "OHD"
  },
  {
    AirportName: "Kohat",
    code: "OHT"
  },
  {
    AirportName: "Oita",
    code: "OIT"
  },
  {
    AirportName: "Okinawa, Ryukyo Island - Naha",
    code: "OKA"
  },
  {
    AirportName: "Oklahoma City (OK) - Will Rogers World",
    code: "OKC"
  },
  {
    AirportName: "Sapporo - Okadama",
    code: "OKD"
  },
  {
    AirportName: "Okayama",
    code: "OKJ"
  },
  {
    AirportName: "Mokuti",
    code: "OKU"
  },
  {
    AirportName: "Olbia",
    code: "OLB"
  },
  {
    AirportName: "Wolf Point (MT)",
    code: "OLF"
  },
  {
    AirportName: "Olympic Dam",
    code: "OLP"
  },
  {
    AirportName: "Omaha (NE)",
    code: "OMA"
  },
  {
    AirportName: "Oranjemund",
    code: "OMD"
  },
  {
    AirportName: "Nome (AK)",
    code: "OME"
  },
  {
    AirportName: "Urmiehm (Orumieh)",
    code: "OMH"
  },
  {
    AirportName: "Mostar",
    code: "OMO"
  },
  {
    AirportName: "Ondangwa",
    code: "OND"
  },
  {
    AirportName: "Ontario (CA)",
    code: "ONT"
  },
  {
    AirportName: "Gold Coast",
    code: "OOL"
  },
  {
    AirportName: "Cooma",
    code: "OOM"
  },
  {
    AirportName: "Porto",
    code: "OPO"
  },
  {
    AirportName: "Oerebro",
    code: "ORB"
  },
  {
    AirportName: "Chicago (IL), O'Hare International Airport",
    code: "ORD"
  },
  {
    AirportName: "Norfolk/Virginia Beach (VA)",
    code: "ORF"
  },
  {
    AirportName: "Worcester (MA)",
    code: "ORH"
  },
  {
    AirportName: "Cork",
    code: "ORK"
  },
  {
    AirportName: "Orlando Metropolitan Area (FL)",
    code: "ORL"
  },
  {
    AirportName: "Oran (Ouahran)",
    code: "ORN"
  },
  {
    AirportName: "Orpheus Island",
    code: "ORS"
  },
  {
    AirportName: "Paris - Orly",
    code: "ORY"
  },
  {
    AirportName: "Osaka, Metropolitan Area",
    code: "OSA"
  },
  {
    AirportName: "Oshkosh (WI)",
    code: "OSH"
  },
  {
    AirportName: "Osijek",
    code: "OSI"
  },
  {
    AirportName: "Oslo - Oslo Airport, Gardermoen",
    code: "OSL"
  },
  {
    AirportName: "Mosul",
    code: "OSM"
  },
  {
    AirportName: "North Bend (OR)",
    code: "OTH"
  },
  {
    AirportName: "Bucharest - Henri Coandă International Airport",
    code: "OTP"
  },
  {
    AirportName: "Kotzbue (AK)",
    code: "OTZ"
  },
  {
    AirportName: "Ouagadougou",
    code: "OUA"
  },
  {
    AirportName: "Oujda",
    code: "OUD"
  },
  {
    AirportName: "Oudtshoorn",
    code: "OUH"
  },
  {
    AirportName: "Oulu",
    code: "OUL"
  },
  {
    AirportName: "Zouerate",
    code: "OUZ"
  },
  {
    AirportName: "Novosibirsk - Tolmachevo Airport",
    code: "OVB"
  },
  {
    AirportName: "Oviedo",
    code: "OVD"
  },
  {
    AirportName: "Owensboro (KY)",
    code: "OWB"
  },
  {
    AirportName: "Oxnard (CA)",
    code: "OXR"
  },
  {
    AirportName: "Ouarzazate",
    code: "OZZ"
  },
  {
    AirportName: "Paderborn/Lippstadt",
    code: "PAD"
  },
  {
    AirportName: "Paducah (KY)",
    code: "PAH"
  },
  {
    AirportName: "Port au Prince",
    code: "PAP"
  },
  {
    AirportName: "Paris",
    code: "PAR"
  },
  {
    AirportName: "Patna",
    code: "PAT"
  },
  {
    AirportName: "Puebla",
    code: "PBC"
  },
  {
    AirportName: "Paro",
    code: "PBH"
  },
  {
    AirportName: "West Palm Beach (FL)",
    code: "PBI"
  },
  {
    AirportName: "Paramaribo - Zanderij International",
    code: "PBM"
  },
  {
    AirportName: "Paraburdoo",
    code: "PBO"
  },
  {
    AirportName: "Plettenberg Bay",
    code: "PBZ"
  },
  {
    AirportName: "Ponta Delgada",
    code: "PDL"
  },
  {
    AirportName: "Pendelton (OR)",
    code: "PDT"
  },
  {
    AirportName: "Portland International (OR)",
    code: "PDX"
  },
  {
    AirportName: "Perugia",
    code: "PEG"
  },
  {
    AirportName: "Pereira",
    code: "PEI"
  },
  {
    AirportName: "Beijing",
    code: "PEK"
  },
  {
    AirportName: "Penang International",
    code: "PEN"
  },
  {
    AirportName: "Perth International",
    code: "PER"
  },
  {
    AirportName: "Peshawar",
    code: "PEW"
  },
  {
    AirportName: "Panama City (FL)",
    code: "PFN"
  },
  {
    AirportName: "Paphos",
    code: "PFO"
  },
  {
    AirportName: "Page/Lake Powell (AZ)",
    code: "PGA"
  },
  {
    AirportName: "Perpignan",
    code: "PGF"
  },
  {
    AirportName: "Greenville (NC)",
    code: "PGV"
  },
  {
    AirportName: "Port Harcourt",
    code: "PHC"
  },
  {
    AirportName: "Port Hedland",
    code: "PHE"
  },
  {
    AirportName: "Newport News/Williamsburg (VA)",
    code: "PHF"
  },
  {
    AirportName: "Philadelphia (PA) - International",
    code: "PHL"
  },
  {
    AirportName: "Phalaborwa",
    code: "PHW"
  },
  {
    AirportName: "Phoenix (AZ) - Sky Harbor International",
    code: "PHX"
  },
  {
    AirportName: "Peoria/Bloomington (IL)",
    code: "PIA"
  },
  {
    AirportName: "Laurel/Hattisburg (MS)",
    code: "PIB"
  },
  {
    AirportName: "Pocatello (ID)",
    code: "PIH"
  },
  {
    AirportName: "Pierre (SD)",
    code: "PIR"
  },
  {
    AirportName: "Poitiers - Biard",
    code: "PIS"
  },
  {
    AirportName: "Pittsburgh International Airport (PA)",
    code: "PIT"
  },
  {
    AirportName: "Panjgur",
    code: "PJG"
  },
  {
    AirportName: "Pakersburg (WV) /Marietta (OH)",
    code: "PKB"
  },
  {
    AirportName: "Selibi Phikwe",
    code: "PKW"
  },
  {
    AirportName: "Plattsburgh (NY)",
    code: "PLB"
  },
  {
    AirportName: "Pellston (MI)",
    code: "PLN"
  },
  {
    AirportName: "Port Lincoln",
    code: "PLO"
  },
  {
    AirportName: "Port Elizabeth",
    code: "PLZ"
  },
  {
    AirportName: "Palmdale/Lancaster (CA)",
    code: "PMD"
  },
  {
    AirportName: "Palma de Mallorca",
    code: "PMI"
  },
  {
    AirportName: "Palermo - Punta Raisi",
    code: "PMO"
  },
  {
    AirportName: "Palmerston North",
    code: "PMR"
  },
  {
    AirportName: "Margerita",
    code: "PMV"
  },
  {
    AirportName: "Palmas",
    code: "PMW"
  },
  {
    AirportName: "Phnom Penh - Pochentong",
    code: "PNH"
  },
  {
    AirportName: "Pohnpei",
    code: "PNI"
  },
  {
    AirportName: "Pantelleria",
    code: "PNL"
  },
  {
    AirportName: "Pune",
    code: "PNQ"
  },
  {
    AirportName: "Pointe Noire",
    code: "PNR"
  },
  {
    AirportName: "Pensacola (FL)",
    code: "PNS"
  },
  {
    AirportName: "Porto Alegre - Salgado Filho International Airport",
    code: "POA"
  },
  {
    AirportName: "Port Gentil",
    code: "POG"
  },
  {
    AirportName: "Port Moresby - Jackson Field",
    code: "POM"
  },
  {
    AirportName: "Puerto Plata",
    code: "POP"
  },
  {
    AirportName: "Pori",
    code: "POR"
  },
  {
    AirportName: "Port of Spain - Piarco International",
    code: "POS"
  },
  {
    AirportName: "Poughkeepsie (NY)",
    code: "POU"
  },
  {
    AirportName: "Poznan, Lawica",
    code: "POZ"
  },
  {
    AirportName: "Pago Pago",
    code: "PPG"
  },
  {
    AirportName: "Prosperpine",
    code: "PPP"
  },
  {
    AirportName: "Papeete - Faaa",
    code: "PPT"
  },
  {
    AirportName: "Presque Island (ME)",
    code: "PQI"
  },
  {
    AirportName: "Port Macquarie",
    code: "PQQ"
  },
  {
    AirportName: "Prague - Václav Havel Airport (formerly Ruzyne)",
    code: "PRG"
  },
  {
    AirportName: "Pristina",
    code: "PRN"
  },
  {
    AirportName: "Pretoria - Wonderboom Apt.",
    code: "PRY"
  },
  {
    AirportName: "Pisa - Galileo Galilei",
    code: "PSA"
  },
  {
    AirportName: "Pasco (WA)",
    code: "PSC"
  },
  {
    AirportName: "Port Said",
    code: "PSD"
  },
  {
    AirportName: "Ponce",
    code: "PSE"
  },
  {
    AirportName: "Petersburg (AK)",
    code: "PSG"
  },
  {
    AirportName: "Pasni",
    code: "PSI"
  },
  {
    AirportName: "Palm Springs (CA)",
    code: "PSP"
  },
  {
    AirportName: "Pescara",
    code: "PSR"
  },
  {
    AirportName: "Pietersburg",
    code: "PTG"
  },
  {
    AirportName: "Portland",
    code: "PTJ"
  },
  {
    AirportName: "Basse-Terre - Pointe-à-Pitre International Airport",
    code: "PTP"
  },
  {
    AirportName: "Pointe a Pitre",
    code: "PTP"
  },
  {
    AirportName: "Panama City - Tocumen International",
    code: "PTY"
  },
  {
    AirportName: "Pueblo (CO)",
    code: "PUB"
  },
  {
    AirportName: "Pau",
    code: "PUF"
  },
  {
    AirportName: "Port Augusta",
    code: "PUG"
  },
  {
    AirportName: "Punta Cana - Punta Cana International",
    code: "PUJ"
  },
  {
    AirportName: "Punta Arenas - Presidente Carlos Ibáñez del Campo",
    code: "PUQ"
  },
  {
    AirportName: "Pu San (Busan) - Gimhae International Airport",
    code: "PUS"
  },
  {
    AirportName: "Pullman (WA)",
    code: "PUW"
  },
  {
    AirportName: "Pula",
    code: "PUY"
  },
  {
    AirportName: "Providence (RI)",
    code: "PVD"
  },
  {
    AirportName: "Shanghai - Pu Dong",
    code: "PVG"
  },
  {
    AirportName: "Porto Velho",
    code: "PVH"
  },
  {
    AirportName: "Preveza/Lefkas",
    code: "PVK"
  },
  {
    AirportName: "Puerto Vallarta",
    code: "PVR"
  },
  {
    AirportName: "Portland (ME)",
    code: "PWM"
  },
  {
    AirportName: "Puerto Escondido",
    code: "PXM"
  },
  {
    AirportName: "Porto Santo",
    code: "PXO"
  },
  {
    AirportName: "Jeypore - Jeypore Airport",
    code: "PYB"
  },
  {
    AirportName: "Pattaya",
    code: "PYX"
  },
  {
    AirportName: "Pietermaritzburg",
    code: "PZB"
  },
  {
    AirportName: "Zhob",
    code: "PZH"
  },
  {
    AirportName: "Puerto Ordaz",
    code: "PZO"
  },
  {
    AirportName: "Chiba City",
    code: "QCB"
  },
  {
    AirportName: "Montenegro",
    code: "QGF"
  },
  {
    AirportName: "Limassol",
    code: "QLI"
  },
  {
    AirportName: "Mirpur",
    code: "QML"
  },
  {
    AirportName: "Anand",
    code: "QNB"
  },
  {
    AirportName: "Novi Sad",
    code: "QND"
  },
  {
    AirportName: "Singapore - Paya Lebar",
    code: "QPG"
  },
  {
    AirportName: "Tallinn - Pirita Harbour",
    code: "QUF"
  },
  {
    AirportName: "Praia - Nelson Mandela International Airport",
    code: "RAI"
  },
  {
    AirportName: "Rajkot",
    code: "RAJ"
  },
  {
    AirportName: "Marrakesh - Menara Airport",
    code: "RAK"
  },
  {
    AirportName: "Rapid City (SD)",
    code: "RAP"
  },
  {
    AirportName: "Rarotonga",
    code: "RAR"
  },
  {
    AirportName: "Rawala Kot",
    code: "RAZ"
  },
  {
    AirportName: "Rabat - Rabat-Salé Airport",
    code: "RBA"
  },
  {
    AirportName: "Rio Branco - Plácido de Castro International Airport",
    code: "RBR"
  },
  {
    AirportName: "Richards Bay",
    code: "RCB"
  },
  {
    AirportName: "Redding (CA)",
    code: "RDD"
  },
  {
    AirportName: "Reading (PA)",
    code: "RDG"
  },
  {
    AirportName: "Redmond (OR)",
    code: "RDM"
  },
  {
    AirportName: "Raleigh/Durham (NC)",
    code: "RDU"
  },
  {
    AirportName: "Rodez",
    code: "RDZ"
  },
  {
    AirportName: "Recife - Guararapes-Gilberto Freyre International",
    code: "REC"
  },
  {
    AirportName: "Reggio Calabria",
    code: "REG"
  },
  {
    AirportName: "Reykjavik - Metropolitan Area",
    code: "REK"
  },
  {
    AirportName: "Reus",
    code: "REU"
  },
  {
    AirportName: "Rockford (IL)",
    code: "RFD"
  },
  {
    AirportName: "Raiatea",
    code: "RFP"
  },
  {
    AirportName: "Rangiroa",
    code: "RGI"
  },
  {
    AirportName: "Rangoon (Yangon) - Mingaladon",
    code: "RGN"
  },
  {
    AirportName: "Yangon (Rangoon) - Mingaladon",
    code: "RGN"
  },
  {
    AirportName: "Rhinelander (WI)",
    code: "RHI"
  },
  {
    AirportName: "Rhodos",
    code: "RHO"
  },
  {
    AirportName: "Richmond (VA)",
    code: "RIC"
  },
  {
    AirportName: "Rio de Janeiro",
    code: "RIO"
  },
  {
    AirportName: "Riga",
    code: "RIX"
  },
  {
    AirportName: "Rijeka",
    code: "RJK"
  },
  {
    AirportName: "Rockland (ME)",
    code: "RKD"
  },
  {
    AirportName: "Rock Springs (WY)",
    code: "RKS"
  },
  {
    AirportName: "Ras al Khaymah (Ras al Khaimah)",
    code: "RKT"
  },
  {
    AirportName: "Arlit",
    code: "RLT"
  },
  {
    AirportName: "Marsa Alam",
    code: "RMF"
  },
  {
    AirportName: "Rimini",
    code: "RMI"
  },
  {
    AirportName: "Ronneby",
    code: "RNB"
  },
  {
    AirportName: "Roanne",
    code: "RNE"
  },
  {
    AirportName: "Roenne",
    code: "RNN"
  },
  {
    AirportName: "Reno (NV)",
    code: "RNO"
  },
  {
    AirportName: "Rennes",
    code: "RNS"
  },
  {
    AirportName: "Roanoke (VA)",
    code: "ROA"
  },
  {
    AirportName: "Monrovia - Roberts International",
    code: "ROB"
  },
  {
    AirportName: "Rochester (NY)",
    code: "ROC"
  },
  {
    AirportName: "Rockhampton",
    code: "ROK"
  },
  {
    AirportName: "Rome",
    code: "ROM"
  },
  {
    AirportName: "Rosario",
    code: "ROS"
  },
  {
    AirportName: "Rotorua",
    code: "ROT"
  },
  {
    AirportName: "Ruse",
    code: "ROU"
  },
  {
    AirportName: "Rostov-on-Don - Platov International Airport",
    code: "ROV"
  },
  {
    AirportName: "Rodrigues Island",
    code: "RRG"
  },
  {
    AirportName: "Santa Rosa",
    code: "RSA"
  },
  {
    AirportName: "Rock Sound",
    code: "RSD"
  },
  {
    AirportName: "Rochester (MN)",
    code: "RST"
  },
  {
    AirportName: "Fort Myers, Southwest Florida Reg (FL)",
    code: "RSW"
  },
  {
    AirportName: "Roatan",
    code: "RTB"
  },
  {
    AirportName: "Rotterdam",
    code: "RTM"
  },
  {
    AirportName: "Riyadh - King Khaled International",
    code: "RUH"
  },
  {
    AirportName: "Saint Denis - Roland Garros Airport",
    code: "RUN"
  },
  {
    AirportName: "Rostov-on-Don - Rostov-on-Don Airport",
    code: "RVI"
  },
  {
    AirportName: "Rovaniemi",
    code: "RVN"
  },
  {
    AirportName: "Rocky Mount - Wilson (NC)",
    code: "RWI"
  },
  {
    AirportName: "Rawalpindi",
    code: "RWP"
  },
  {
    AirportName: "Rahim Yar Khan - Shaikh Zayed International Airport",
    code: "RYK"
  },
  {
    AirportName: "Sanaa (Sana'a) - Sana'a International",
    code: "SAH"
  },
  {
    AirportName: "San Salvador",
    code: "SAL"
  },
  {
    AirportName: "San Diego - Lindberg Field International (CA)",
    code: "SAN"
  },
  {
    AirportName: "Sao Paulo",
    code: "SAO"
  },
  {
    AirportName: "San Pedro Sula",
    code: "SAP"
  },
  {
    AirportName: "San Antonio (TX)",
    code: "SAT"
  },
  {
    AirportName: "Savannah (GA)",
    code: "SAV"
  },
  {
    AirportName: "Istanbul - Sabiha Gokcen",
    code: "SAW"
  },
  {
    AirportName: "Salisbury",
    code: "SAY"
  },
  {
    AirportName: "Santa Barbara (CA)",
    code: "SBA"
  },
  {
    AirportName: "Saint Brieuc",
    code: "SBK"
  },
  {
    AirportName: "South Bend (IN)",
    code: "SBN"
  },
  {
    AirportName: "San Luis Obisco (CA)",
    code: "SBP"
  },
  {
    AirportName: "Springbok",
    code: "SBU"
  },
  {
    AirportName: "Sibu",
    code: "SBW"
  },
  {
    AirportName: "Salisbury (MD)",
    code: "SBY"
  },
  {
    AirportName: "Prudhoe Bay (AK)",
    code: "SCC"
  },
  {
    AirportName: "State College/Belefonte (PA)",
    code: "SCE"
  },
  {
    AirportName: "Scottsdale (AZ)",
    code: "SCF"
  },
  {
    AirportName: "Stockton (CA)",
    code: "SCK"
  },
  {
    AirportName: "Santiago de Chile - Arturo Merino Benitez",
    code: "SCL"
  },
  {
    AirportName: "Saarbruecken",
    code: "SCN"
  },
  {
    AirportName: "Santiago de Compostela",
    code: "SCQ"
  },
  {
    AirportName: "Santiago - Antonio Maceo Airport",
    code: "SCU"
  },
  {
    AirportName: "Louisville (KY)",
    code: "SDF"
  },
  {
    AirportName: "Santa Rosa, Copan",
    code: "SDH"
  },
  {
    AirportName: "Sendai",
    code: "SDJ"
  },
  {
    AirportName: "Sundsvall",
    code: "SDL"
  },
  {
    AirportName: "Santo Domingo",
    code: "SDQ"
  },
  {
    AirportName: "Santander",
    code: "SDR"
  },
  {
    AirportName: "Sado Shima",
    code: "SDS"
  },
  {
    AirportName: "Saidu Sharif",
    code: "SDT"
  },
  {
    AirportName: "Rio de Janeiro - Santos Dumont",
    code: "SDU"
  },
  {
    AirportName: "Sidney (MT)",
    code: "SDY"
  },
  {
    AirportName: "Seattle/Tacoma (WA)",
    code: "SEA"
  },
  {
    AirportName: "Sehba",
    code: "SEB"
  },
  {
    AirportName: "Seoul - Kimpo",
    code: "SEL"
  },
  {
    AirportName: "Siwa",
    code: "SEW"
  },
  {
    AirportName: "Mahe - Seychelles International",
    code: "SEZ"
  },
  {
    AirportName: "Sfax",
    code: "SFA"
  },
  {
    AirportName: "St. Martin",
    code: "SFG"
  },
  {
    AirportName: "Soendre Stroemfjord",
    code: "SFJ"
  },
  {
    AirportName: "San Francisco - International Airport, SA",
    code: "SFO"
  },
  {
    AirportName: "Soenderborg",
    code: "SGD"
  },
  {
    AirportName: "Springfield (MO)",
    code: "SGF"
  },
  {
    AirportName: "Ho Chi Minh City (Saigon) - Tan Son Nhat International",
    code: "SGN"
  },
  {
    AirportName: "Saigon (Ho Chi Minh City) - Tan Son Nhat International",
    code: "SGN"
  },
  {
    AirportName: "St. George (UT)",
    code: "SGU"
  },
  {
    AirportName: "Skagway (AK)",
    code: "SGY"
  },
  {
    AirportName: "Shanghai - Hongqiao",
    code: "SHA"
  },
  {
    AirportName: "Shenandoah Valley/Stauton (VA)",
    code: "SHD"
  },
  {
    AirportName: "Shenyang",
    code: "SHE"
  },
  {
    AirportName: "Sharjah",
    code: "SHJ"
  },
  {
    AirportName: "Sheridan (WY)",
    code: "SHR"
  },
  {
    AirportName: "Shreveport, La",
    code: "SHV"
  },
  {
    AirportName: "Sal",
    code: "SID"
  },
  {
    AirportName: "Singapore - Changi",
    code: "SIN"
  },
  {
    AirportName: "Simferopol",
    code: "SIP"
  },
  {
    AirportName: "Sishen",
    code: "SIS"
  },
  {
    AirportName: "Sitka (AK)",
    code: "SIT"
  },
  {
    AirportName: "Singleton",
    code: "SIX"
  },
  {
    AirportName: "San Jose (CA)",
    code: "SJC"
  },
  {
    AirportName: "Los Cabos",
    code: "SJD"
  },
  {
    AirportName: "San Jose Cabo",
    code: "SJD"
  },
  {
    AirportName: "Sarajevo",
    code: "SJJ"
  },
  {
    AirportName: "San Jose",
    code: "SJO"
  },
  {
    AirportName: "San Angelo (TX)",
    code: "SJT"
  },
  {
    AirportName: "San Juan - Luis Munoz Marin International Airport",
    code: "SJU"
  },
  {
    AirportName: "Seinaejoki",
    code: "SJY"
  },
  {
    AirportName: "Basseterre - Robert L. Bradshaw International Airport",
    code: "SKB"
  },
  {
    AirportName: "St. Kitts",
    code: "SKB"
  },
  {
    AirportName: "Samarkand - Samarkand International Airport",
    code: "SKD"
  },
  {
    AirportName: "Saloniki",
    code: "SKG"
  },
  {
    AirportName: "Thessaloniki - Makedonia Apt.",
    code: "SKG"
  },
  {
    AirportName: "Skopje",
    code: "SKP"
  },
  {
    AirportName: "Skrydstrup",
    code: "SKS"
  },
  {
    AirportName: "Santa Katarina - Mount Sinai",
    code: "SKV"
  },
  {
    AirportName: "Saransk - Saransk Airport",
    code: "SKX"
  },
  {
    AirportName: "Sukkur",
    code: "SKZ"
  },
  {
    AirportName: "Salta, Gen Belgrano",
    code: "SLA"
  },
  {
    AirportName: "Salt Lake City (UT)",
    code: "SLC"
  },
  {
    AirportName: "Salem (OR)",
    code: "SLE"
  },
  {
    AirportName: "Salalah",
    code: "SLL"
  },
  {
    AirportName: "San Luis Potosi",
    code: "SLP"
  },
  {
    AirportName: "Silistra",
    code: "SLS"
  },
  {
    AirportName: "Castries - George F. L. Charles Airport",
    code: "SLU"
  },
  {
    AirportName: "St. Lucia Vigle",
    code: "SLU"
  },
  {
    AirportName: "Sao Luis - Marechal Cunha Machado International",
    code: "SLZ"
  },
  {
    AirportName: "Santa Maria",
    code: "SMA"
  },
  {
    AirportName: "Sacramento (CA)",
    code: "SMF"
  },
  {
    AirportName: "Samos",
    code: "SMI"
  },
  {
    AirportName: "Santa Maria (CA)",
    code: "SMX"
  },
  {
    AirportName: "Orange County (Santa Ana) (CA)",
    code: "SNA"
  },
  {
    AirportName: "Santa Ana - John Wayne Airport (CA)",
    code: "SNA"
  },
  {
    AirportName: "Salinas",
    code: "SNC"
  },
  {
    AirportName: "Shannon (Limerick)",
    code: "SNN"
  },
  {
    AirportName: "Salinas (CA)",
    code: "SNS"
  },
  {
    AirportName: "Sofia - Vrazhdebna",
    code: "SOF"
  },
  {
    AirportName: "Sogndal",
    code: "SOG"
  },
  {
    AirportName: "South Molle Island",
    code: "SOI"
  },
  {
    AirportName: "Santo",
    code: "SON"
  },
  {
    AirportName: "Sodankylae",
    code: "SOT"
  },
  {
    AirportName: "Santa Cruz de la Palma",
    code: "SPC"
  },
  {
    AirportName: "Springfield (IL)",
    code: "SPI"
  },
  {
    AirportName: "Sapporo",
    code: "SPK"
  },
  {
    AirportName: "Saipan",
    code: "SPN"
  },
  {
    AirportName: "Wichita Falls (TX)",
    code: "SPS"
  },
  {
    AirportName: "Split",
    code: "SPU"
  },
  {
    AirportName: "San Pedro",
    code: "SPY"
  },
  {
    AirportName: "Santa Rosa",
    code: "SRA"
  },
  {
    AirportName: "Santa Rosa",
    code: "SRB"
  },
  {
    AirportName: "Santa Rosalia",
    code: "SRL"
  },
  {
    AirportName: "Sarasota/Bradenton (FL)",
    code: "SRQ"
  },
  {
    AirportName: "Santa Cruz de la Sierra",
    code: "SRZ"
  },
  {
    AirportName: "Salvador - Salvador International Airport",
    code: "SSA"
  },
  {
    AirportName: "Malabo - Malabo International Airport",
    code: "SSG"
  },
  {
    AirportName: "Sharm El Sheikh",
    code: "SSH"
  },
  {
    AirportName: "Santa Rosalia",
    code: "SSL"
  },
  {
    AirportName: "St. Louis (MO) Lambert–St. Louis International Airport",
    code: "STL"
  },
  {
    AirportName: "Stockholm Metropolitan Area",
    code: "STO"
  },
  {
    AirportName: "Stuttgart - Echterdingen",
    code: "STR"
  },
  {
    AirportName: "Santa Rosa (CA)",
    code: "STS"
  },
  {
    AirportName: "St. Thomas",
    code: "STT"
  },
  {
    AirportName: "Surat",
    code: "STV"
  },
  {
    AirportName: "St. Croix",
    code: "STX"
  },
  {
    AirportName: "Surabaya - Juanda",
    code: "SUB"
  },
  {
    AirportName: "Lamezia Terme",
    code: "SUF"
  },
  {
    AirportName: "Sui",
    code: "SUL"
  },
  {
    AirportName: "Agana (Hagåtña)",
    code: "SUM"
  },
  {
    AirportName: "Sun Valley (ID)",
    code: "SUN"
  },
  {
    AirportName: "Nausori",
    code: "SUV"
  },
  {
    AirportName: "Suva - Nausori Airport (Luvuluvu)",
    code: "SUV"
  },
  {
    AirportName: "Sioux City IA",
    code: "SUX"
  },
  {
    AirportName: "Kingstown - E. T. Joshua Airport",
    code: "SVD"
  },
  {
    AirportName: "St. Vincent",
    code: "SVD"
  },
  {
    AirportName: "Stavanger",
    code: "SVG"
  },
  {
    AirportName: "Savonlinna",
    code: "SVL"
  },
  {
    AirportName: "Moscow - Sheremetyevo",
    code: "SVO"
  },
  {
    AirportName: "Sevilla",
    code: "SVQ"
  },
  {
    AirportName: "Yekaterinburg - Koltsovo Airport",
    code: "SVX"
  },
  {
    AirportName: "Newburgh (NY)",
    code: "SWF"
  },
  {
    AirportName: "Swakopmund",
    code: "SWP"
  },
  {
    AirportName: "Strasbourg - Strasbourg Airport",
    code: "SXB"
  },
  {
    AirportName: "Berlin, Schoenefeld",
    code: "SXF"
  },
  {
    AirportName: "Sligo",
    code: "SXL"
  },
  {
    AirportName: "St. Marteen",
    code: "SXM"
  },
  {
    AirportName: "Srinagar",
    code: "SXR"
  },
  {
    AirportName: "Sydney - Sydney Airport",
    code: "SYD"
  },
  {
    AirportName: "Syracuse (NY)",
    code: "SYR"
  },
  {
    AirportName: "Kuala Lumpur - Sultan Abdul Aziz Shah",
    code: "SZB"
  },
  {
    AirportName: "Samsun",
    code: "SZF"
  },
  {
    AirportName: "Salzburg - W.A. Mozart",
    code: "SZG"
  },
  {
    AirportName: "Skukuza",
    code: "SZK"
  },
  {
    AirportName: "Shenzhen - Shenzhen Bao'an International",
    code: "SZX"
  },
  {
    AirportName: "Stettin",
    code: "SZZ"
  },
  {
    AirportName: "Scarborough - Crown Point International",
    code: "TAB"
  },
  {
    AirportName: "Tobago",
    code: "TAB"
  },
  {
    AirportName: "Takamatsu",
    code: "TAK"
  },
  {
    AirportName: "Tampico - Gen. F. Javier Mina",
    code: "TAM"
  },
  {
    AirportName: "Qingdao",
    code: "TAO"
  },
  {
    AirportName: "Tashkent - International",
    code: "TAS"
  },
  {
    AirportName: "Taipei - Sung Shan",
    code: "TAY"
  },
  {
    AirportName: "Tbilisi - Novo Alexeyevka",
    code: "TBS"
  },
  {
    AirportName: "Nuku'alofa - Fua'Amotu International",
    code: "TBU"
  },
  {
    AirportName: "Tennant Creek",
    code: "TCA"
  },
  {
    AirportName: "Treasure Cay",
    code: "TCB"
  },
  {
    AirportName: "Tenerife",
    code: "TCI"
  },
  {
    AirportName: "Tuscaloosa (AL)",
    code: "TCL"
  },
  {
    AirportName: "Thaba'Nchu",
    code: "TCU"
  },
  {
    AirportName: "Thisted",
    code: "TED"
  },
  {
    AirportName: "Temora",
    code: "TEM"
  },
  {
    AirportName: "Tekirdag - Corlu",
    code: "TEQ"
  },
  {
    AirportName: "Terceira",
    code: "TER"
  },
  {
    AirportName: "Te Anau",
    code: "TEU"
  },
  {
    AirportName: "Telluride (CO)",
    code: "TEX"
  },
  {
    AirportName: "Los Rodeos",
    code: "TFN"
  },
  {
    AirportName: "Tenerife - Norte Los Rodeos",
    code: "TFN"
  },
  {
    AirportName: "Reina Sofia",
    code: "TFS"
  },
  {
    AirportName: "Tenerife - Sur Reina Sofia",
    code: "TFS"
  },
  {
    AirportName: "Podgorica",
    code: "TGD"
  },
  {
    AirportName: "Tegucigalpa",
    code: "TGU"
  },
  {
    AirportName: "Targovishte",
    code: "TGV"
  },
  {
    AirportName: "Tuxtla Gutierrez",
    code: "TGZ"
  },
  {
    AirportName: "Teresina",
    code: "THE"
  },
  {
    AirportName: "Berlin, Tempelhof (ceased operating in 2008)",
    code: "THF"
  },
  {
    AirportName: "Tehran (Teheran) - Mehrabad",
    code: "THR"
  },
  {
    AirportName: "Tirana - Rinas",
    code: "TIA"
  },
  {
    AirportName: "Taif",
    code: "TIF"
  },
  {
    AirportName: "Tijuana - Rodriguez",
    code: "TIJ"
  },
  {
    AirportName: "Tripoli - Tripoli International",
    code: "TIP"
  },
  {
    AirportName: "Thursday Island",
    code: "TIS"
  },
  {
    AirportName: "Tivat",
    code: "TIV"
  },
  {
    AirportName: "Talkeetna (AK)",
    code: "TKA"
  },
  {
    AirportName: "Tokushima",
    code: "TKS"
  },
  {
    AirportName: "Turku",
    code: "TKU"
  },
  {
    AirportName: "Tallahassee (FL)",
    code: "TLH"
  },
  {
    AirportName: "Tallinn - Ulemiste",
    code: "TLL"
  },
  {
    AirportName: "Toulouse - Blagnac Airport",
    code: "TLS"
  },
  {
    AirportName: "Tel Aviv - Ben Gurion International",
    code: "TLV"
  },
  {
    AirportName: "Tampere",
    code: "TMP"
  },
  {
    AirportName: "Sao Tome",
    code: "TMS"
  },
  {
    AirportName: "Tamworth",
    code: "TMW"
  },
  {
    AirportName: "Termez (Termes)",
    code: "TMZ"
  },
  {
    AirportName: "Jinan",
    code: "TNA"
  },
  {
    AirportName: "Tangier - Boukhalef",
    code: "TNG"
  },
  {
    AirportName: "Antananarivo (Tanannarive) - Ivato International Airport",
    code: "TNR"
  },
  {
    AirportName: "Tioman",
    code: "TOD"
  },
  {
    AirportName: "Toledo (OH)",
    code: "TOL"
  },
  {
    AirportName: "Tromsoe",
    code: "TOS"
  },
  {
    AirportName: "Touho",
    code: "TOU"
  },
  {
    AirportName: "Tortola",
    code: "TOV"
  },
  {
    AirportName: "Toyama",
    code: "TOY"
  },
  {
    AirportName: "Tampa - International (FL)",
    code: "TPA"
  },
  {
    AirportName: "Taipei - Chiang Kai Shek",
    code: "TPE"
  },
  {
    AirportName: "Tom Price",
    code: "TPR"
  },
  {
    AirportName: "Trapani",
    code: "TPS"
  },
  {
    AirportName: "Trondheim",
    code: "TRD"
  },
  {
    AirportName: "Oslo - Sandefjord",
    code: "TRF"
  },
  {
    AirportName: "Tri-Cities Regional (TN) /VA",
    code: "TRI"
  },
  {
    AirportName: "Turin",
    code: "TRN"
  },
  {
    AirportName: "Taree",
    code: "TRO"
  },
  {
    AirportName: "Trieste",
    code: "TRS"
  },
  {
    AirportName: "Thiruvananthapuram",
    code: "TRV"
  },
  {
    AirportName: "Tiruchirapally",
    code: "TRZ"
  },
  {
    AirportName: "Tsumeb",
    code: "TSB"
  },
  {
    AirportName: "Astana - Astana International Airport",
    code: "TSE"
  },
  {
    AirportName: "Treviso",
    code: "TSF"
  },
  {
    AirportName: "Tianjin",
    code: "TSN"
  },
  {
    AirportName: "Townsville",
    code: "TSV"
  },
  {
    AirportName: "Trenton/Princeton (NJ)",
    code: "TTN"
  },
  {
    AirportName: "Turbat",
    code: "TUK"
  },
  {
    AirportName: "Tulsa (OK)",
    code: "TUL"
  },
  {
    AirportName: "Tunis - Carthage",
    code: "TUN"
  },
  {
    AirportName: "Tulepo (MS)",
    code: "TUP"
  },
  {
    AirportName: "Tucson (AZ)",
    code: "TUS"
  },
  {
    AirportName: "Tabuk",
    code: "TUU"
  },
  {
    AirportName: "Traverse City (MI)",
    code: "TVC"
  },
  {
    AirportName: "Thief River Falls (MN)",
    code: "TVF"
  },
  {
    AirportName: "Lake Tahoe (CA)",
    code: "TVL"
  },
  {
    AirportName: "Toowoomba",
    code: "TWB"
  },
  {
    AirportName: "Twin Falls (ID)",
    code: "TWF"
  },
  {
    AirportName: "Tawau",
    code: "TWU"
  },
  {
    AirportName: "Texarkana (AR)",
    code: "TXK"
  },
  {
    AirportName: "Berlin, Tegel",
    code: "TXL"
  },
  {
    AirportName: "Taiyuan",
    code: "TYN"
  },
  {
    AirportName: "Tokyo",
    code: "TYO"
  },
  {
    AirportName: "Tyler (TX)",
    code: "TYR"
  },
  {
    AirportName: "Knoxville (TN)",
    code: "TYS"
  },
  {
    AirportName: "Trabzon",
    code: "TZX"
  },
  {
    AirportName: "Ua Huka",
    code: "UAH"
  },
  {
    AirportName: "Narsarsuaq",
    code: "UAK"
  },
  {
    AirportName: "Ua Pou",
    code: "UAP"
  },
  {
    AirportName: "Uberaba",
    code: "UBA"
  },
  {
    AirportName: "Ube",
    code: "UBJ"
  },
  {
    AirportName: "Ubon Ratchathani - Muang Ubon Airport",
    code: "UBP"
  },
  {
    AirportName: "Utica (NY) - Oneida County Airport",
    code: "UCA"
  },
  {
    AirportName: "Ukhta",
    code: "UCT"
  },
  {
    AirportName: "Uden - Volkel Airport",
    code: "UDE"
  },
  {
    AirportName: "Uberlandia - Eduardo Gomes Airport",
    code: "UDI"
  },
  {
    AirportName: "Uzhgorod",
    code: "UDJ"
  },
  {
    AirportName: "Udaipur - Dabok Airport",
    code: "UDR"
  },
  {
    AirportName: "Queenstown",
    code: "UEE"
  },
  {
    AirportName: "Quetta",
    code: "UET"
  },
  {
    AirportName: "Ufa",
    code: "UFA"
  },
  {
    AirportName: "Urgench",
    code: "UGC"
  },
  {
    AirportName: "Uige",
    code: "UGO"
  },
  {
    AirportName: "Uherske Hradiste",
    code: "UHE"
  },
  {
    AirportName: "Utila",
    code: "UII"
  },
  {
    AirportName: "Quincy (IL)",
    code: "UIN"
  },
  {
    AirportName: "Quito - Mariscal Sucre International Airport",
    code: "UIO"
  },
  {
    AirportName: "Quimper",
    code: "UIP"
  },
  {
    AirportName: "Jaluit Island",
    code: "UIT"
  },
  {
    AirportName: "Kobe",
    code: "UKB"
  },
  {
    AirportName: "Ukiah (CA)",
    code: "UKI"
  },
  {
    AirportName: "Kyoto",
    code: "UKY"
  },
  {
    AirportName: "Ulei",
    code: "ULB"
  },
  {
    AirportName: "Ulundi",
    code: "ULD"
  },
  {
    AirportName: "Ulaanbaatar - Buyant Uhaa Airport",
    code: "ULN"
  },
  {
    AirportName: "Gulu",
    code: "ULU"
  },
  {
    AirportName: "Uummannaq",
    code: "UMD"
  },
  {
    AirportName: "Umea",
    code: "UME"
  },
  {
    AirportName: "Woomera",
    code: "UMR"
  },
  {
    AirportName: "Union Island",
    code: "UNI"
  },
  {
    AirportName: "Unalakleet (AK)",
    code: "UNK"
  },
  {
    AirportName: "Ujung Pandang - Hasanudin Airport",
    code: "UPG"
  },
  {
    AirportName: "Upala",
    code: "UPL"
  },
  {
    AirportName: "Uruapan",
    code: "UPN"
  },
  {
    AirportName: "Upolu Point (HI)",
    code: "UPP"
  },
  {
    AirportName: "Urubupunga - Ernesto Pochler Airport",
    code: "URB"
  },
  {
    AirportName: "Urumqi",
    code: "URC"
  },
  {
    AirportName: "Uruguaiana - Ruben Berta Airport",
    code: "URG"
  },
  {
    AirportName: "Uriman",
    code: "URM"
  },
  {
    AirportName: "Uruzgan",
    code: "URZ"
  },
  {
    AirportName: "Ushuaia - Islas Malvinas Airport",
    code: "USH"
  },
  {
    AirportName: "Ulsan",
    code: "USN"
  },
  {
    AirportName: "Udon Thani",
    code: "UTH"
  },
  {
    AirportName: "Upington",
    code: "UTN"
  },
  {
    AirportName: "Utapao (Pattaya)",
    code: "UTP"
  },
  {
    AirportName: "Umtata",
    code: "UTT"
  },
  {
    AirportName: "Ulan-Ude",
    code: "UUD"
  },
  {
    AirportName: "Oyem",
    code: "UVE"
  },
  {
    AirportName: "St. Lucia Hewanorra",
    code: "UVF"
  },
  {
    AirportName: "Kharga - New Valley",
    code: "UVL"
  },
  {
    AirportName: "New Valley - Kharga",
    code: "UVL"
  },
  {
    AirportName: "Vaasa",
    code: "VAA"
  },
  {
    AirportName: "Van - Ferit Melen",
    code: "VAN"
  },
  {
    AirportName: "Valparaiso",
    code: "VAP"
  },
  {
    AirportName: "Varna",
    code: "VAR"
  },
  {
    AirportName: "Sivas",
    code: "VAS"
  },
  {
    AirportName: "Brescia, Montichiari",
    code: "VBS"
  },
  {
    AirportName: "Verona (Brescia) Montichiari",
    code: "VBS"
  },
  {
    AirportName: "Visby",
    code: "VBY"
  },
  {
    AirportName: "Venice - Marco Polo",
    code: "VCE"
  },
  {
    AirportName: "Sao Paulo - Viracopos",
    code: "VCP"
  },
  {
    AirportName: "Elat, Ovula",
    code: "VDA"
  },
  {
    AirportName: "Valverde",
    code: "VDE"
  },
  {
    AirportName: "Valdez (AK)",
    code: "VDZ"
  },
  {
    AirportName: "Vernal (UT)",
    code: "VEL"
  },
  {
    AirportName: "Veracruz",
    code: "VER"
  },
  {
    AirportName: "Victoria Falls",
    code: "VFA"
  },
  {
    AirportName: "Vigo",
    code: "VGO"
  },
  {
    AirportName: "Vidin",
    code: "VID"
  },
  {
    AirportName: "Wien (Vienna) - Vienna International",
    code: "VIE"
  },
  {
    AirportName: "Virgin Gorda",
    code: "VIJ"
  },
  {
    AirportName: "Visalia (CA)",
    code: "VIS"
  },
  {
    AirportName: "Vitoria",
    code: "VIT"
  },
  {
    AirportName: "Vitoria - Eurico de Aguiar Salles Airport",
    code: "VIX"
  },
  {
    AirportName: "Moscow - Vnukovo",
    code: "VKO"
  },
  {
    AirportName: "Valencia",
    code: "VLC"
  },
  {
    AirportName: "Valdosta (GA)",
    code: "VLD"
  },
  {
    AirportName: "Port Vila",
    code: "VLI"
  },
  {
    AirportName: "Valladolid",
    code: "VLL"
  },
  {
    AirportName: "Valencia",
    code: "VLN"
  },
  {
    AirportName: "Velikiye Luki (Welikije Luki)",
    code: "VLU"
  },
  {
    AirportName: "Vilnius",
    code: "VNO"
  },
  {
    AirportName: "Wilna (Vilnius)",
    code: "VNO"
  },
  {
    AirportName: "Varanasi",
    code: "VNS"
  },
  {
    AirportName: "Fort Walton Beach (FL)",
    code: "VPS"
  },
  {
    AirportName: "Varadero",
    code: "VRA"
  },
  {
    AirportName: "Vero Beach/Ft. Pierce (FL)",
    code: "VRB"
  },
  {
    AirportName: "Varkaus",
    code: "VRK"
  },
  {
    AirportName: "Verona",
    code: "VRN"
  },
  {
    AirportName: "Villahermosa",
    code: "VSA"
  },
  {
    AirportName: "Vasteras",
    code: "VST"
  },
  {
    AirportName: "Vientiane - Wattay",
    code: "VTE"
  },
  {
    AirportName: "Vaexjoe",
    code: "VXO"
  },
  {
    AirportName: "Vryheid",
    code: "VYD"
  },
  {
    AirportName: "Washington DC",
    code: "WAS"
  },
  {
    AirportName: "Warsaw - Frédéric Chopin",
    code: "WAW"
  },
  {
    AirportName: "Windhoek - Hosea Kutako International",
    code: "WDH"
  },
  {
    AirportName: "Weipa",
    code: "WEI"
  },
  {
    AirportName: "Welkom",
    code: "WEL"
  },
  {
    AirportName: "Wagga",
    code: "WGA"
  },
  {
    AirportName: "Whakatane",
    code: "WHK"
  },
  {
    AirportName: "Wickham",
    code: "WHM"
  },
  {
    AirportName: "Wiesbaden, Air Base",
    code: "WIE"
  },
  {
    AirportName: "Labouchere Bay (AK)",
    code: "WLB"
  },
  {
    AirportName: "Wellington",
    code: "WLG"
  },
  {
    AirportName: "Wallis",
    code: "WLS"
  },
  {
    AirportName: "Warrnambool",
    code: "WMB"
  },
  {
    AirportName: "Nawab Shah",
    code: "WNS"
  },
  {
    AirportName: "Wollongong",
    code: "WOL"
  },
  {
    AirportName: "Whangarei",
    code: "WRE"
  },
  {
    AirportName: "Wrangell (AK)",
    code: "WRG"
  },
  {
    AirportName: "Worland (WY)",
    code: "WRL"
  },
  {
    AirportName: "Wuhan",
    code: "WUH"
  },
  {
    AirportName: "Wiluna",
    code: "WUN"
  },
  {
    AirportName: "Walvis Bay",
    code: "WVB"
  },
  {
    AirportName: "Whyalla",
    code: "WYA"
  },
  {
    AirportName: "Wyndham",
    code: "WYN"
  },
  {
    AirportName: "West Yellowstone (MT)",
    code: "WYS"
  },
  {
    AirportName: "Xi'an - Xianyang",
    code: "XIY"
  },
  {
    AirportName: "Lac Brochet, MB",
    code: "XLB"
  },
  {
    AirportName: "Manihi",
    code: "XMH"
  },
  {
    AirportName: "Xiamen",
    code: "XMN"
  },
  {
    AirportName: "Pukatawagan",
    code: "XPK"
  },
  {
    AirportName: "Jerez de la Frontera/Cadiz - La Parra",
    code: "XRY"
  },
  {
    AirportName: "South Indian Lake, MB",
    code: "XSI"
  },
  {
    AirportName: "Singapore - Seletar",
    code: "XSP"
  },
  {
    AirportName: "Yakutat (AK)",
    code: "YAK"
  },
  {
    AirportName: "Yaounde",
    code: "YAO"
  },
  {
    AirportName: "Attawapiskat, NT",
    code: "YAT"
  },
  {
    AirportName: "Uranium City",
    code: "YBE"
  },
  {
    AirportName: "Cambridge Bay",
    code: "YCB"
  },
  {
    AirportName: "Deer Lake/Corner Brook",
    code: "YDF"
  },
  {
    AirportName: "Edmonton",
    code: "YEA"
  },
  {
    AirportName: "Edmonton, International",
    code: "YEG"
  },
  {
    AirportName: "Inuvik",
    code: "YEV"
  },
  {
    AirportName: "Fort Albert",
    code: "YFA"
  },
  {
    AirportName: "Iqaluit (Frobisher Bay)",
    code: "YFB"
  },
  {
    AirportName: "Fredericton",
    code: "YFC"
  },
  {
    AirportName: "Flin Flon",
    code: "YFO"
  },
  {
    AirportName: "La Grande",
    code: "YGL"
  },
  {
    AirportName: "Kuujjuarapik",
    code: "YGW"
  },
  {
    AirportName: "Gillam",
    code: "YGX"
  },
  {
    AirportName: "Hamilton",
    code: "YHM"
  },
  {
    AirportName: "Harrington Harbour, PQ",
    code: "YHR"
  },
  {
    AirportName: "Halifax International",
    code: "YHZ"
  },
  {
    AirportName: "St. Augustin, PQ",
    code: "YIF"
  },
  {
    AirportName: "Yichang",
    code: "YIH"
  },
  {
    AirportName: "Kamloops, BC",
    code: "YKA"
  },
  {
    AirportName: "Yakima (WA)",
    code: "YKM"
  },
  {
    AirportName: "Yakutsk",
    code: "YKS"
  },
  {
    AirportName: "Leaf Rapids",
    code: "YLR"
  },
  {
    AirportName: "Kelowna, BC",
    code: "YLW"
  },
  {
    AirportName: "Fort McMurray",
    code: "YMM"
  },
  {
    AirportName: "Montreal",
    code: "YMQ"
  },
  {
    AirportName: "Montreal - Mirabel",
    code: "YMX"
  },
  {
    AirportName: "Yanbu",
    code: "YNB"
  },
  {
    AirportName: "Yokohama",
    code: "YOK"
  },
  {
    AirportName: "Rainbow Lake, AB",
    code: "YOP"
  },
  {
    AirportName: "Ottawa - Hull",
    code: "YOW"
  },
  {
    AirportName: "Port Menier, PQ",
    code: "YPN"
  },
  {
    AirportName: "Prince Rupert/Digby Island",
    code: "YPR"
  },
  {
    AirportName: "Quebec - Quebec International",
    code: "YQB"
  },
  {
    AirportName: "The Pas",
    code: "YQD"
  },
  {
    AirportName: "Windsor Ontario",
    code: "YQG"
  },
  {
    AirportName: "Moncton",
    code: "YQM"
  },
  {
    AirportName: "Regina",
    code: "YQR"
  },
  {
    AirportName: "Thunder Bay",
    code: "YQT"
  },
  {
    AirportName: "Gander",
    code: "YQX"
  },
  {
    AirportName: "Resolute Bay",
    code: "YRB"
  },
  {
    AirportName: "Saint John",
    code: "YSJ"
  },
  {
    AirportName: "Fort Smith",
    code: "YSM"
  },
  {
    AirportName: "Nanisivik",
    code: "YSR"
  },
  {
    AirportName: "Thompson",
    code: "YTH"
  },
  {
    AirportName: "Toronto",
    code: "YTO"
  },
  {
    AirportName: "Toronto - Billy Bishop Toronto City Airport",
    code: "YTZ"
  },
  {
    AirportName: "Umiujaq",
    code: "YUD"
  },
  {
    AirportName: "Montreal - Dorval (Montréal-Trudeau)",
    code: "YUL"
  },
  {
    AirportName: "Yuma (AZ)",
    code: "YUM"
  },
  {
    AirportName: "Hall Beach",
    code: "YUX"
  },
  {
    AirportName: "Bonaventure, PQ",
    code: "YVB"
  },
  {
    AirportName: "Val d'Or",
    code: "YVO"
  },
  {
    AirportName: "Kuujjuaq (FortChimo)",
    code: "YVP"
  },
  {
    AirportName: "Norman Wells",
    code: "YVQ"
  },
  {
    AirportName: "Vancouver - Vancouver International",
    code: "YVR"
  },
  {
    AirportName: "Winnipeg International",
    code: "YWG"
  },
  {
    AirportName: "Wabush",
    code: "YWK"
  },
  {
    AirportName: "Edmonton, Municipal",
    code: "YXD"
  },
  {
    AirportName: "Saskatoon",
    code: "YXE"
  },
  {
    AirportName: "Fort St. John",
    code: "YXJ"
  },
  {
    AirportName: "Whale Cove, NT",
    code: "YXN"
  },
  {
    AirportName: "Prince George",
    code: "YXS"
  },
  {
    AirportName: "Terrace",
    code: "YXT"
  },
  {
    AirportName: "London",
    code: "YXU"
  },
  {
    AirportName: "Whitehorse",
    code: "YXY"
  },
  {
    AirportName: "Calgary - Calgary International Airport",
    code: "YYC"
  },
  {
    AirportName: "Smithers",
    code: "YYD"
  },
  {
    AirportName: "Victoria",
    code: "YYJ"
  },
  {
    AirportName: "Churchill",
    code: "YYQ"
  },
  {
    AirportName: "Goose Bay",
    code: "YYR"
  },
  {
    AirportName: "St. John's",
    code: "YYT"
  },
  {
    AirportName: "Toronto - Toronto Pearson International Airport",
    code: "YYZ"
  },
  {
    AirportName: "Yellowknife",
    code: "YZF"
  },
  {
    AirportName: "Sandspit",
    code: "YZP"
  },
  {
    AirportName: "Zadar",
    code: "ZAD"
  },
  {
    AirportName: "Zagreb - Zagreb Airport Pleso",
    code: "ZAG"
  },
  {
    AirportName: "Zaragoza",
    code: "ZAZ"
  },
  {
    AirportName: "Bowen",
    code: "ZBO"
  },
  {
    AirportName: "Zacatecas",
    code: "ZCL"
  },
  {
    AirportName: "Berne, Railway Service",
    code: "ZDJ"
  },
  {
    AirportName: "Ixtapa/Zihuatenejo",
    code: "ZIH"
  },
  {
    AirportName: "Hong Kong - Chek Lap Kok",
    code: "ZJK"
  },
  {
    AirportName: "Kaschechawan, PQ",
    code: "ZKE"
  },
  {
    AirportName: "Manzanillo",
    code: "ZLO"
  },
  {
    AirportName: "Zinder",
    code: "ZND"
  },
  {
    AirportName: "Newman",
    code: "ZNE"
  },
  {
    AirportName: "Queenstown",
    code: "ZQN"
  },
  {
    AirportName: "Zurich (Zürich) - Kloten",
    code: "ZRH"
  },
  {
    AirportName: "San Salvador",
    code: "ZSA"
  },
  {
    AirportName: "Sassandra",
    code: "ZSS"
  },
  {
    AirportName: "Zakynthos",
    code: "ZTH"
  },
  {
    AirportName: "Shamattawa, MB",
    code: "ZTM"
  },
  {
    AirportName: "Sylhet",
    code: "ZYL"
  }
],
  destinationSearchResults: [],
  chosenDeparturePoint: null,
  chosenDestinationPoint: null
})

export const mutations = {
  changeSection(state, section){
    state[section] = !state[section]
  },
  updateDepartureSearchResults(state, results){
    state.departureSearchResults = results
  },
  updateDestinationSearchResults(state, results){
    state.destinationSearchResults = results
  },
  updateChosenDeparturePoint(state, departurePoint){
    state.chosenDeparturePoint = departurePoint
  },
  updateChosenDestinationPoint(state, destinationPoint){
    state.chosenDestinationPoint = destinationPoint
  }
}

export const actions = {
  changeSection(context, section){
    context.commit('changeSection', section)
  },
  queryDepartures({state, commit}, query){
    let results = null
    if(query !== ''){
      commit('updateChosenDeparturePoint', null)
      results = state.departures.filter(departure => {
        return (departure.AirportName.toLowerCase().includes(query.toLowerCase()) || departure.DepCode.toLowerCase().includes(query.toLowerCase()))
      })
    } else {
      results = []
    }
    commit('updateDepartureSearchResults', results)
  },
  queryDestinations({state, commit}, query){
    let results = null
    if(query !== ''){
      commit('updateChosenDestinationPoint', null)
      results = state.destinations.filter(destination => {
        return destination.AirportName.toLowerCase().includes(query.toLowerCase()) || destination.code.toLowerCase().includes(query.toLowerCase())
      })
    } else {
      results = []
    }
    commit('updateDestinationSearchResults', results)
  },
  chooseDeparturePoint({state, commit}, { DepCode }){
    const depPoint = state.departures.find(departure => departure.DepCode === DepCode)
    if(depPoint){
      commit('updateChosenDeparturePoint', depPoint)
    }
  },
  chooseDestinationPoint({state, commit}, { code }){
    const destPoint = state.destinations.find(destination => destination.code === code)
    if(destPoint){
      commit('updateChosenDestinationPoint', destPoint)
    }
  },
  removeDeparturePoint({state, commit}){
    commit('updateChosenDeparturePoint', null)
  },
  removeDestinationPoint({state, commit}){
    commit('updateChosenDestinationPoint', null)
  }
}

export const getters = {
  departureSearchResults: (state) => {
    if(state.chosenDeparturePoint){
      return []
    } else {
      return state.departureSearchResults
    }
  },
  destinationSearchResults: (state) => {
    if(state.chosenDestinationPoint){
      return []
    } else {
      return state.destinationSearchResults
    }
  },
  departurePoint: (state) => {
    return state.chosenDeparturePoint
  },
  destinationPoint: (state) => {
    return state.chosenDestinationPoint
  },
  travelPointsSet: ({chosenDeparturePoint, chosenDestinationPoint}) => {
    return chosenDeparturePoint && chosenDestinationPoint
  }
}
