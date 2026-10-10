export interface Building {
  name: string;
  meta: string;
  anchor: string;
  slug: string;
  slot: string;
  placeholder: string;
  full: boolean;
  src?: string;
  credit?: string;
  creditHref?: string;
  blurb: string;
  tags: string[];
}

export const buildings: Building[] = [
  {
    name: 'La Borda',
    meta: 'Barcelona · 2018',
    anchor: 'laborda',
    slug: 'la-borda',
    slot: 'atlas-laborda',
    placeholder: 'La Borda — photo needed',
    full: true,
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/La%20Borda%20building%20-%20front%20facade%202.jpg?width=1400',
    credit: 'via Wikimedia Commons',
    creditHref: 'https://commons.wikimedia.org/wiki/File:La_Borda_building_-_front_facade_2.jpg',
    blurb:
      "28 cooperative homes around a covered patio, on a 75-year public land lease. A close look at how circulation, shared rooms and resident decisions can meet.",
    tags: ['cooperative', 'new build', 'courtyard', 'ground-floor public'],
  },
  {
    name: 'Kalkbreite',
    meta: 'Zürich · 2014',
    anchor: 'kalkbreite',
    slug: 'kalkbreite',
    slot: 'atlas-kalkbreite',
    placeholder: 'Kalkbreite — photo needed',
    full: true,
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kalkbreite.jpg?width=1400',
    credit: 'Bub37 · CC BY-SA 4.0',
    creditHref: 'https://commons.wikimedia.org/wiki/File:Kalkbreite.jpg',
    blurb:
      "Housing above a working tram depot, with a public courtyard and resident roof terraces. A striking example of different uses sharing the same piece of city.",
    tags: ['cooperative', 'new build', 'courtyard', 'roof garden', 'ground-floor public'],
  },
  {
    name: 'Spreefeld',
    meta: 'Berlin · 2010s',
    anchor: 'spreefeld',
    slug: 'spreefeld',
    slot: 'atlas-spreefeld',
    placeholder: 'Spreefeld — photo needed',
    full: true,
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mitte%20Wilhelmine-Gemberg-Weg-001.jpg?width=1400',
    credit: 'Fridolin freudenfett · CC BY-SA 4.0',
    creditHref: 'https://commons.wikimedia.org/wiki/File:Mitte_Wilhelmine-Gemberg-Weg-001.jpg',
    blurb:
      "Three cooperative buildings, cluster apartments and adaptable ground-floor rooms beside an accessible riverbank. The useful shared space is also between buildings.",
    tags: ['cooperative', 'new build', 'courtyard', 'roof garden', 'ground-floor public'],
  },
  {
    name: 'R50',
    meta: 'Berlin-Kreuzberg · 2013',
    anchor: 'r50',
    slug: 'r50',
    slot: 'atlas-r50',
    placeholder: 'R50 — photo needed',
    full: true,
    blurb:
      "19 homes, shared rooms and a continuous balcony in Berlin. A compact group-commissioned building that opens questions about privacy, thresholds and collective decisions.",
    tags: ['resident-led', 'new build', 'roof garden'],
  },
  {
    name: 'Sargfabrik',
    meta: 'Vienna · 1996 + 2000',
    anchor: 'sargfabrik',
    slug: 'sargfabrik',
    slot: 'atlas-sargfabrik',
    placeholder: 'Sargfabrik — photo needed',
    full: true,
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Wien-Penzing%20-%20Wohn-%20und%20Kulturprojekt%20Sargfabrik%20-%2010%20-%20Dachgarten.jpg?width=1400',
    credit: 'Haeferl · CC BY-SA 3.0',
    creditHref:
      'https://commons.wikimedia.org/wiki/File:Wien-Penzing_-_Wohn-_und_Kulturprojekt_Sargfabrik_-_10_-_Dachgarten.jpg',
    blurb:
      "73 homes in Sargfabrik (1996), plus 39 in Miss Sargfabrik (2000). Housing, culture and shared facilities on a former coffin-factory site.",
    tags: ['cooperative', 'reuse', 'courtyard', 'roof garden', 'ground-floor public'],
  },
  {
    name: 'Brutopia',
    meta: 'Brussels · cohousing',
    anchor: 'brutopia',
    slug: 'brutopia',
    slot: 'atlas-brutopia',
    placeholder: 'Brutopia — photo needed',
    full: true,
    blurb:
      "29 homes and ground-floor workspaces in a resident-led Brussels cohousing project. The interesting design material here includes collective decisions.",
    tags: ['cooperative', 'new build', 'courtyard'],
  },
  {
    name: 'Bijgaardehof',
    meta: 'Ghent',
    anchor: 'bijgaardehof',
    slug: 'bijgaardehof',
    slot: 'atlas-bijgaardehof',
    placeholder: 'Bijgaardehof — photo needed',
    full: true,
    blurb:
      "59 homes, three cohousing groups and a neighborhood health center in Ghent. An example of sharing a place without making every decision at the same scale.",
    tags: ['cooperative', 'reuse', 'courtyard', 'ground-floor public'],
  },
  {
    name: 'Village Homes',
    meta: 'Davis, CA · 1980s',
    anchor: 'village-homes',
    slug: 'village-homes',
    slot: 'atlas-village-homes',
    placeholder: 'Village Homes — photo needed',
    full: true,
    blurb:
      "A Davis neighborhood of houses, apartments, greenways, orchards and shared facilities. A lower-rise relative with lessons about tending common land.",
    tags: ['courtyard'],
  },
  {
    name: "Swan's Market",
    meta: 'Oakland · 2000',
    anchor: 'swans',
    slug: 'swans-market',
    slot: 'atlas-swans',
    placeholder: "Swan's Market — photo needed",
    full: true,
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/10th%20Street%20Market%2C%20Oakland%2C%20CA%2C%20at%20sunset.jpg?width=1400',
    credit: 'Dreamyshade · CC BY-SA 4.0',
    creditHref: 'https://commons.wikimedia.org/wiki/File:10th_Street_Market,_Oakland,_CA,_at_sunset.jpg',
    blurb:
      "Historic market reuse, cohousing, affordable rentals and businesses in Old Oakland. A local precedent with a genuinely complex delivery story.",
    tags: ['reuse', 'courtyard', 'ground-floor public'],
  },
  {
    name: 'Vauban',
    meta: 'Freiburg · district',
    anchor: 'vauban',
    slug: 'vauban',
    slot: 'atlas-vauban',
    placeholder: 'Vauban — photo needed',
    full: true,
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Freiburg%20-%20Vauban.jpg?width=1400',
    credit: 'via Wikimedia Commons',
    creditHref: 'https://commons.wikimedia.org/wiki/File:Freiburg_-_Vauban.jpg',
    blurb:
      "A Freiburg district with green spaces, low-energy requirements and tram service. A reminder that the spaces between projects—and the trip beyond them—matter.",
    tags: ['new build', 'ground-floor public'],
  },
  {
    name: 'Mehr als Wohnen — Hunziker Areal',
    meta: 'Zürich · 2015',
    anchor: 'hunziker',
    slug: 'hunziker-areal',
    slot: 'atlas-hunziker',
    placeholder: 'Hunziker Areal — photo needed',
    full: true,
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/HAL%20014243.jpg?width=1400',
    credit: 'Haller Juliet · CC BY-SA 4.0',
    creditHref: 'https://commons.wikimedia.org/wiki/File:HAL_014243.jpg',
    blurb:
      "13 buildings and about 370 homes within a cooperative neighborhood. Different housing types, shared facilities and a published account of what the experiment taught its organizers.",
    tags: ['cooperative', 'new build', 'courtyard', 'ground-floor public'],
  },
  {
    name: 'Gleis 21',
    meta: 'Vienna · 2019',
    anchor: 'gleis21',
    slug: 'gleis-21',
    slot: 'atlas-gleis21',
    placeholder: 'Gleis 21 — photo needed',
    full: true,
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sonnwendviertel%20Gleis%2021.jpg?width=1400',
    credit: 'Linie29 · CC BY-SA 4.0',
    creditHref: 'https://commons.wikimedia.org/wiki/File:Sonnwendviertel_Gleis_21.jpg',
    blurb:
      "34 homes, ground-floor cultural uses and resident shared spaces in Vienna. A useful lesson in different degrees of openness within one building.",
    tags: ['cooperative', 'new build', 'roof garden', 'ground-floor public'],
  },
  {
    name: 'La Balma',
    meta: 'Barcelona · 2021',
    anchor: 'labalma',
    slug: 'la-balma',
    slot: 'atlas-labalma',
    placeholder: 'La Balma — photo needed',
    full: true,
    blurb:
      "20 cooperative homes with shared rooms distributed through the building and a flexible room system. A sibling to La Borda with different design decisions.",
    tags: ['cooperative', 'new build', 'courtyard'],
  },
];

export const filterChips = [
  'all',
  'cooperative',
  'resident-led',
  'new build',
  'reuse',
  'courtyard',
  'ground-floor public',
  'roof garden',
];

export const fabric = [
  {
    name: 'Berlin Gründerzeit',
    slot: 'fabric-berlin',
    placeholder: 'Hinterhof — photo needed',
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Berlin%20H%C3%B6fe%20%28575693267%29.jpg?width=1400',
    credit: 'Wolfgang Staudt · CC BY 2.0',
    creditHref: 'https://commons.wikimedia.org/wiki/File:Berlin_H%C3%B6fe_(575693267).jpg',
    blurb:
      'Look at the sequence from street to passage to interior court. Historic fabric is context, not a claim that every court offered good housing conditions.',
  },
  {
    name: 'Vienna Gemeindebau',
    slot: 'fabric-vienna',
    placeholder: 'Gemeindebau Hof — photo needed',
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Karl-Marx-Hof%20Sept%202020%204.jpg?width=1400',
    credit: 'Kasa Fue · CC BY-SA 4.0',
    creditHref: 'https://commons.wikimedia.org/wiki/File:Karl-Marx-Hof_Sept_2020_4.jpg',
    blurb:
      'Municipal housing around shared courts. Read the spaces alongside the institutions that provide and maintain the homes; the architecture is one part of the system.',
  },
  {
    name: 'Barcelona Eixample',
    slot: 'fabric-eixample',
    placeholder: 'Eixample block — photo needed',
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Aerial%20view%20of%20Barcelona%2C%20Spain%20%2851227309370%29.jpg?width=1400',
    credit: 'dronepicr · CC BY 2.0',
    creditHref: 'https://commons.wikimedia.org/wiki/File:Aerial_view_of_Barcelona,_Spain_(51227309370).jpg',
    blurb:
      "Chamfered corners and block interiors: a useful scale comparison with the small cooperative projects in this atlas. The access and use of each interior varies.",
  },
  {
    name: 'Amsterdam hofjes',
    slot: 'fabric-amsterdam',
    placeholder: 'Hofje — photo needed',
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Amsterdam-Beginenhof-2025-msu-8893-.jpg?width=1400',
    credit: 'Matthias Süßen · CC BY-SA 4.0',
    creditHref: 'https://commons.wikimedia.org/wiki/File:Amsterdam-Beginenhof-2025-msu-8893-.jpg',
    blurb:
      'Smaller shared courts reached through a street threshold. Look at the transition between public and quiet space; respect posted visitor rules and residents’ privacy.',
  },
];
