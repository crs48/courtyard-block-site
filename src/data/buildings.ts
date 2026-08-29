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
      "Lacol's 6-story, 28-home timber cooperative on 75-year leased public land. Cession-of-use tenure, a full-height glazed patio in the corrala tradition, access galleries, shared kitchen-dining at the street. The closest single-building match to this brief.",
    tags: ['cooperative', 'new build', 'courtyard', '5-7 stories', 'ground-floor public'],
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
      'A co-op block of roughly 97 apartments and 250 residents built over a working tram depot: shops, a cinema and offices at the street, a raised public garden courtyard of about 2,500 m², mixed incomes, city land leased to the cooperative.',
    tags: ['cooperative', 'new build', 'courtyard', 'roof garden', '5-7 stories', 'ground-floor public'],
  },
  {
    name: 'Spreefeld',
    meta: 'Berlin · 2014',
    anchor: 'spreefeld',
    slug: 'spreefeld',
    slot: 'atlas-spreefeld',
    placeholder: 'Spreefeld — photo needed',
    full: true,
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mitte%20Wilhelmine-Gemberg-Weg-001.jpg?width=1400',
    credit: 'Fridolin freudenfett · CC BY-SA 4.0',
    creditHref: 'https://commons.wikimedia.org/wiki/File:Mitte_Wilhelmine-Gemberg-Weg-001.jpg',
    blurb:
      "Three 7-story passive-house buildings forming a courtyard on the Spree; about 60 homes. The ground floor is kept free of housing — kindergarten, workshops, 'option rooms,' public river access. Cooperative, no speculative developer.",
    tags: ['cooperative', 'new build', 'courtyard', 'roof garden', '5-7 stories', 'ground-floor public'],
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
      'ifau + Jesko Fezer / Heide & von Beckerath. Six stories, 19 apartments, a Baugruppe. A wraparound balcony works as a continuous porch; garden, workshop, laundry, roof terrace. Proof the type works at small scale, inside an ordinary block.',
    tags: ['cooperative', 'new build', '5-7 stories', 'roof garden'],
  },
  {
    name: 'Sargfabrik',
    meta: 'Vienna · 1996',
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
      "A converted coffin factory: roughly 112 homes and 200 people in a self-managed association. Courtyard pond over a bathhouse; concert hall, restaurant, children's house and roof garden, parts of it open to the neighborhood. The warehouse-reuse model.",
    tags: ['cooperative', 'reuse', 'courtyard', 'roof garden', 'ground-floor public'],
  },
  {
    name: 'Brutopia',
    meta: 'Brussels · 2015',
    anchor: 'brutopia',
    slug: 'brutopia',
    slot: 'atlas-brutopia',
    placeholder: 'Brutopia — photo needed',
    full: true,
    blurb:
      'stekke + fraas. Twenty-nine apartments around a shared garden, ground-floor workspaces, units delivered as shells. The residents acted as their own developer — the margin went into the building.',
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
      'Factory reuse housing three cohousing groups around planted courtyard rooms, with a neighborhood health center at the ground floor. Several communities, one shared middle.',
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
      'Not mid-rise — the American ancestor. Clustered houses, shared productive landscape, walking paths instead of streets. Same instincts, wrong height: the density is too low to make a street wall or pay for a common ground floor.',
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
      'A 1917 market hall rebuilt around a courtyard: 20-unit cohousing plus affordable rentals, restaurants and offices. Two blocks from BART, about 15 minutes from Berkeley. The closest local cousin, even if lower-rise.',
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
      'Not one building but a district of them: mid-rise blocks, a tram in the street, shops, parking pushed to the edge, many Baugruppen. What a whole street of courtyard blocks feels like.',
    tags: ['new build', '5-7 stories', 'ground-floor public'],
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
      'Thirteen buildings by a coalition of Zurich co-ops on a former concrete plant — squares, workshops, guest houses, cluster apartments. The proof that the co-op courtyard logic scales to a neighborhood.',
    tags: ['cooperative', 'new build', 'courtyard', '5-7 stories', 'ground-floor public'],
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
      "A timber-hybrid Baugruppe in the Sonnwendviertel: media workshop, sauna, event room, library at the ground floor, open to the quarter. Vienna's building-group culture in current form.",
    tags: ['cooperative', 'new build', 'roof garden', '5-7 stories', 'ground-floor public'],
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
      "Lacol + LaBoqueria. Twenty homes in cession-of-use on public land in Poblenou — La Borda's sibling, showing the model repeats: same tenure, same galleries, a different lot.",
    tags: ['cooperative', 'new build', 'courtyard', '5-7 stories'],
  },
];

export const filterChips = [
  'all',
  'cooperative',
  'new build',
  'reuse',
  'courtyard',
  'ground-floor public',
  'roof garden',
  '5-7 stories',
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
      'The Mietskaserne and its Hinterhöfe: a height cap, a continuous cornice, courtyards all the way back. The fabric this site keeps pointing at.',
  },
  {
    name: 'Vienna Gemeindebau',
    slot: 'fabric-vienna',
    placeholder: 'Gemeindebau Hof — photo needed',
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Karl-Marx-Hof%20Sept%202020%204.jpg?width=1400',
    credit: 'Kasa Fue · CC BY-SA 4.0',
    creditHref: 'https://commons.wikimedia.org/wiki/File:Karl-Marx-Hof_Sept_2020_4.jpg',
    blurb:
      'Municipal superblocks around planted Höfe — kindergartens and laundries in the courtyard, a century of maintenance.',
  },
  {
    name: 'Barcelona Eixample',
    slot: 'fabric-eixample',
    placeholder: 'Eixample block — photo needed',
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Aerial%20view%20of%20Barcelona%2C%20Spain%20%2851227309370%29.jpg?width=1400',
    credit: 'dronepicr · CC BY 2.0',
    creditHref: 'https://commons.wikimedia.org/wiki/File:Aerial_view_of_Barcelona,_Spain_(51227309370).jpg',
    blurb:
      "Cerdà's chamfered blocks with interior courtyards; the corrala patio tradition La Borda modernizes.",
  },
  {
    name: 'Amsterdam hofjes',
    slot: 'fabric-amsterdam',
    placeholder: 'Hofje — photo needed',
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Amsterdam-Beginenhof-2025-msu-8893-.jpg?width=1400',
    credit: 'Matthias Süßen · CC BY-SA 4.0',
    creditHref: 'https://commons.wikimedia.org/wiki/File:Amsterdam-Beginenhof-2025-msu-8893-.jpg',
    blurb:
      'Canal-house rows hiding almshouse courtyards — hofjes — behind a single street door. The type at its quietest.',
  },
];
