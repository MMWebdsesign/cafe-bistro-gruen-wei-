export type MenuItem = {
  number?: string;
  name: string;
  price: string;
  description?: string;
  note?: string;
};

export type MenuCategory = {
  title: string;
  intro?: string;
  items: MenuItem[];
};

export type DrinkCategory = {
  title: string;
  intro?: string;
  items: MenuItem[];
};

export type EventEntry = {
  title: string;
  dateLabel: string;
  startDate: string;
  image: string;
  fallbackImage?: string;
  description: string[];
  ctaLabel?: string;
  ctaHref?: string;
};

export const restaurant = {
  name: 'Café-bistro Grün-weiß',
  tagline: 'Ein kluger Mensch wird übers Essen, das Trinken nicht vergessen.',
  intro:
    'Bei uns sind alle herzlich willkommen, Hunde ebenso. Ob Kaffee und Kuchen auf unserer sonnigen Terrasse mitten im Kurpark, ein leckeres Mittagessen am Wochenende oder ein gemütliches Abendessen - wir verwöhnen euch in freundschaftlicher Atmosphäre.',
  welcomeLine: 'Herzlich Willkommen im Herzen des Kurparks, im Café-bistro Grün-weiß',
  address: ['Parkstraße 16', 'TC Unna 02 Grün-Weiß', '59425 Unna', 'Deutschland'],
  phone: '+49 1575 3665472',
  email: 'cafebistro.gruenweiss@gmail.com',
  reservationPhone: '+49 1575 3665472',
  paymentMethods: ['Barzahlung'],
  services: ['Barrierefrei', 'Büfett', 'Catering', 'Außenbereich', 'Parkplätze', 'Private Veranstaltungen', 'Essen zum Mitnehmen', 'Beheizte Terrasse', 'Haustiere erlaubt'],
  hours: [
    { day: 'Montag', time: 'Geschlossen' },
    { day: 'Dienstag', time: '17:00 – 22:00', kitchen: '17:00 – 21:30' },
    { day: 'Mittwoch', time: '17:00 – 22:00', kitchen: '17:00 – 21:30' },
    { day: 'Donnerstag', time: '17:00 – 22:00', kitchen: '17:00 – 21:30' },
    { day: 'Freitag', time: '17:00 – 22:00', kitchen: '17:00 – 21:30' },
    { day: 'Samstag', time: '17:00 – 22:00', kitchen: '17:00 – 21:30' },
    { day: 'Sonntag', time: '12:00 – 21:00', kitchen: '12:00 – 20:00' },
  ],
};

export const heroImages = [
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
];

export const galleryImages = [
  { title: 'Kommt rein gemütliche Atmosphäre', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Biergarten im Sommer', image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Unser Sonnenplatz', image: 'https://images.unsplash.com/photo-1529692236671-f1efb3c5b6d0?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Gastraum', image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Frischer Spargel mit Schweinefiletmedaillons', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Champignon-Rahm-Schnitzel', image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb36?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Hirschgulasch mit Rotkohl', image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80' },
];

export const menuCategories: MenuCategory[] = [
  {
    title: 'Vorspeisen',
    intro: 'Perfekt zum Teilen und als Einstieg in unsere Küche.',
    items: [
      { number: '1', name: 'Kleiner gemischter Salat', price: '5,50', description: 'mit hauseigener Vinaigrette' },
      { number: '2', name: 'Bruschetta à la Toskana', price: '9,70', description: 'Cocktail-/Cherrytomaten-Knoblauch-Mix auf angeröstetem frischen Ciabatta', note: 'zum Teilen + 1 Stück +1,00' },
      { number: '3', name: 'Räucherlachs', price: '15,90', description: 'an Rösti, buntem Salat und selbst gemachter Senf-Dill-Sauce' },
      { number: '4', name: 'Gebackener Schafskäse', price: '15,50', description: 'mit Cherrytomaten, roten Zwiebeln und Oliven, dazu frisches Ciabatta' },
    ],
  },
  {
    title: 'Hauptgerichte',
    intro: 'Saftige Schnitzel, klassische Tellergerichte und beliebte Bistro-Gerichte.',
    items: [
      { number: '5', name: 'Schnitzel „Wiener-Art“', price: 'Senior 13,60 / 15,60', description: 'dazu Pommes Frites' },
      { number: '6', name: 'Schnitzel „Ungarischer“-Art', price: 'Senior 16,70 / 18,70', description: 'in pikanter Paprikasauce dazu Pommes Frites' },
      { number: '7', name: 'Champignon-Rahm Schnitzel', price: 'Senior 17,90 / 19,90', description: 'mit Champignon-Rahmsoße nach Art des Hauses, frischen braunen Champignons und Pommes Frites' },
      { number: '8', name: 'Pfefferschnitzel', price: 'Senior 18,80 / 21,80', description: 'in Cognac-Pfeffersoße mit ganzem Amazonas-Pfeffer, dazu Bratkartoffeln mit Zwiebeln & Speck' },
      { number: '9', name: 'Kurpark-Schnitzel', price: 'Senior 19,90 / 22,90', description: 'mit Röstzwiebeln, gebratenen Champignons und Sauce Béarnaise, dazu Bratkartoffeln mit Zwiebeln & Speck' },
      { number: '10', name: 'Putenbrustsalat', price: '18,50', description: 'großer, bunter Salat mit hausgemachter Vinaigrette und zart gegrillten Putenbruststreifen, dazu frisches Ciabatta' },
      { number: '11', name: 'Tagliatelle „aglio e olio“', price: '18,90', description: 'mit Scampi, Cherrytomaten, Zucchini, Paprika, roten Zwiebeln und Knoblauch' },
      { number: '12', name: 'Tagliatelle al Salmone', price: '20,50', description: 'in cremiger Sahnesoße mit gewürfeltem Lachsfilet und Brokkoli' },
      { number: '13', name: 'Schweinefiletmedaillons', price: '23,90', description: 'in Cognac-Pfeffersoße mit ganzem Amazonas-Pfeffer, dazu Bratkartoffeln mit Zwiebeln & Speck und einem Beilagensalat' },
      { number: '14', name: 'Matjesfilets', price: '14,90', description: 'mit Zwiebelringen und Remoulade, dazu Bratkartoffeln mit Zwiebeln & Speck' },
      { number: '15', name: 'Bunter Salat „Rustica“', price: '15,90', description: 'mit gebratenen braunen Champignons, hausgemachter Vinaigrette und frischem Ciabatta' },
      { number: '16', name: 'Bratkartoffeln', price: '12,50', description: 'mit Zwiebeln & Speck, darauf zwei Spiegeleier' },
      { number: '17', name: 'Leberkäse', price: '15,50 / +1 Ei 17,40', description: 'dazu Bratkartoffeln mit Zwiebeln & Speck' },
      { number: '18', name: 'Mediterrane Bratkartoffel-Pfanne', price: '17,50', description: 'mit Speck, Datteltomaten und Schafskäse' },
      { number: '25', name: 'Rumpsteak „Natur“', price: '31,00', description: 'ca. 230 g, dazu Pommes Frites und Kräuterbutter' },
      { number: '26', name: 'Rumpsteak „Buenos Aires“', price: '33,00', description: 'mit geschmorten Zwiebeln und Kräuterbutter, dazu Pommes Frites' },
      { number: '27', name: 'Rumpsteak „Amazonas“', price: '36,00', description: 'auf Cognac-Pfeffersoße mit ganzem Amazonas-Pfeffer, dazu Bratkartoffeln mit Zwiebeln & Speck' },
      { number: '28', name: 'Omas Hähnchenbrustfilet', price: '24,90', description: 'gegrilltes Hähnchenbrustfilet auf cremiger Cognac-Pfeffersoße mit Kaisergemüse und goldbraunen Röstinchen' },
      { number: '29', name: 'Salat „INA“', price: '20,60', description: 'zart gegrilltes, pikant mariniertes Lachsfilet auf einem großen, bunten Salat mit hauseigener Vinaigrette, dazu Ciabatta' },
      { number: '30', name: 'Bauernsülze', price: '14,90', description: 'mit Petersilienrand, Zwiebelringen und Remoulade, dazu Bratkartoffeln mit Zwiebeln & Speck' },
    ],
  },
  {
    title: 'Für den kleinen Hunger',
    items: [
      { number: '19', name: 'Krosse & frische Pommes Frites', price: '4,90', description: 'wahlweise mit Ketchup oder Mayonnaise' },
      { number: '20', name: 'Currywurst', price: '11,50', description: 'dazu Pommes Frites' },
      { number: '21', name: 'Hähnchennuggets', price: '11,50', description: 'dazu Pommes Frites' },
      { number: '22', name: 'Gebackener Camembert', price: '13,50', description: 'auf Toast mit Preiselbeeren, garniert mit Früchten & Sahne' },
    ],
  },
  {
    title: 'Desserts',
    items: [
      { number: '24', name: 'Palatschinken', price: '7,70 / doppelt 11,70', description: 'mit Vanille-Eis und Schokoladen-Sauce, dekoriert mit Früchten' },
      { number: 'Spezial', name: 'Eis Spezial', price: '6,90', description: 'Geschmack: Kokosnuss, Orange oder Zitrone jeweils in ihrer Hülle serviert, dazu Sahne und Schoko-Soße' },
      { name: 'Schokoladensoufflé', price: '8,60', description: 'kleiner Schokokuchen mit flüssigem Kern auf Himbeer-Erdbeerpüree, dazu Vanille-Eis und Früchte' },
      { name: 'Kleiner Camembert', price: '8,90', description: 'auf Toast mit Preiselbeeren, garniert mit Früchten & Sahne' },
      { name: 'Zabione', price: '12,90', description: 'aufgeschlagener Sektschaum aus Eigelb auf Vanilleeis, flambiert und garniert mit Früchten', note: 'auf Nachfrage bei der Küche' },
    ],
  },
  {
    title: 'Service & Feierlichkeiten',
    intro: 'Partyservice und Geschirrverleih für Anlässe außerhalb der regulären Karte.',
    items: [
      { name: 'Partyservice & Geschirrverleih', price: 'auf Anfrage', description: 'Für Feiern bei uns oder extern. Bitte direkt an unser Personal oder an den Chef wenden.', note: 'Nur im Zeitraum ca. 01.10. – 30.04.' },
    ],
  },
];

export const drinkCategories: DrinkCategory[] = [
  {
    title: 'Empfehlung & Aperitifs',
    items: [
      { name: 'Aperol Spritz', price: '0,2l 6,90', description: 'Aperol, Prosecco & Soda' },
      { name: 'Kir Royal', price: '0,1l 4,90 / 0,2l 7,90', description: 'Crème de Cassis & Sekt' },
      { name: 'Hugo', price: '0,2l 6,90', description: 'Prosecco, Holunderblüte, Minze & Soda' },
      { name: 'Lillet Wild Berry', price: '0,2l 6,90', description: 'Lillet Blanc & Wild-Berry-Limonade' },
      { name: 'Sekt', price: '0,1l 3,50 / Flasche 0,75l 24,50', description: 'klassisch' },
    ],
  },
  {
    title: 'Alkoholfreie Getränke',
    items: [
      { name: 'Maracujáschorle', price: '0,2l 3,10 / 0,3l 3,90 / 0,4l 4,90' },
      { name: 'Prestaschorle (Orange-Maracujá)', price: '0,2l 2,80 / 0,3l 3,40 / 0,4l 4,30' },
      { name: 'Apfelschorle naturtrüb', price: '0,2l 2,80 / 0,3l 3,40 / 0,4l 4,30' },
      { name: 'Coca-Cola / Zero / Fanta / Sprite', price: '0,2l 2,80 / 0,3l 3,40 / 0,4l 4,30' },
      { name: 'Maracujasaft', price: '0,2l 3,60 / 0,3l 4,90' },
      { name: 'Apfelsaft', price: '0,2l 3,30 / 0,3l 4,70' },
      { name: 'Orangensaft', price: '0,2l 3,40 / 0,3l 4,80' },
      { name: 'Mineralwasser', price: '0,3l 2,70 / 0,75l 6,50' },
      { name: 'Mineralwasser still', price: '0,25l 2,70' },
      { name: 'Vita Malz', price: '0,33l 3,50' },
    ],
  },
  {
    title: 'Biere',
    items: [
      { name: 'Warsteiner Pils vom Fass', price: '0,25l 3,00 / 0,4l 4,30' },
      { name: 'Pott’s Landbier vom Fass', price: '0,25l 3,00 / 0,4l 4,30' },
      { name: 'Radler, Alster, Krefelder vom Fass', price: '0,25l 3,00 / 0,4l 4,30' },
      { name: 'Erdinger Weizen hell / dunkel', price: '0,5l 4,80' },
      { name: 'Bitburger glutenfrei', price: '0,33l 3,50' },
      { name: 'Schöfferhofer Grapefruit', price: '0,33l 3,50' },
      { name: 'Erdinger Weizen alkoholfrei', price: '0,5l 4,80' },
      { name: 'Warsteiner alkoholfrei', price: '0,33l 3,50' },
      { name: 'Radler, Alster, Krefelder alkoholfrei', price: '0,4l 4,50' },
    ],
  },
  {
    title: 'Spirituosen',
    items: [
      { name: 'Juliška / Šljivovic / Ouzo 12 gold / Grappa / Jägermeister / Sambuca / Herting Pörter', price: '2cl 2,80 / 4cl 5,00' },
      { name: 'Ramazzotti / Williams Birne / Cardinal Mendoza / Kruškovac / Baileys', price: '2cl 3,30 / 4cl 5,50' },
      { name: 'Linie', price: '2cl 3,50 / 4cl 6,00' },
      { name: 'Jack Daniel’s - single barrel', price: '2cl 4,50 / 4cl 8,00' },
      { name: 'Dimple - golden selection', price: '2cl 5,00 / 4cl 9,00' },
    ],
  },
  {
    title: 'Warme Getränke',
    items: [
      { name: 'Kaffee', price: '2,70' },
      { name: 'Cappuccino', price: '3,10' },
      { name: 'Milchkaffee', price: '3,40' },
      { name: 'Kakao mit Sahne', price: '3,40' },
      { name: 'Latte Macchiato', price: '4,10' },
      { name: 'Tee (div. Sorten)', price: '2,90' },
      { name: 'Espresso einfach', price: '2,50 / doppelt 3,00' },
      { name: 'Espresso Macchiato einfach', price: '3,00' },
      { name: 'Espresso Corretto (mit Grappa)', price: 'einfach 4,00 / doppelt 5,50' },
      { name: 'Espresso Affogato', price: '4,10' },
      { name: 'Espresso Spezial (mit Juliška & Sahne)', price: '4,90', description: 'unsere Empfehlung' },
    ],
  },
  {
    title: 'Weißwein',
    items: [
      { name: 'Perla Lugana DOC - trocken', price: 'Glas 0,2l 9 / Flasche 0,75l 32', description: 'Perla del Lugana, Italien, Lombardei. Elegant & stoffig-weich, mit Pfirsich, Ananas & Quitte. Passt zu Tagliatelle al Salmone & Salat „INA“.' },
      { name: 'Grauburgunder - trocken', price: 'Glas 0,2l 6 / Flasche 0,75l 22', description: 'Karl Pfaffmann, Deutschland, Pfalz. Fruchtig-mineralisch mit Aprikose & Melone. Passt zu Schnitzel, Salat & Räucherlachs.' },
      { name: '(Bio) Custoza DOC - trocken', price: 'Glas 0,2l 7 / Flasche 0,75l 26', description: 'Azienda Agricola Gorgo, Italien, Venetien. Leichtfüßig mit Birne & Apfel und mediterranen Kräutern. Passt zu Tagliatelle, Bruschetta & Schafskäse.' },
      { name: 'Weinschorle auf Basis vom Grauburgunder', price: 'Glas 0,2l 4,50' },
    ],
  },
  {
    title: 'Rosé & Rotwein',
    items: [
      { name: 'Thomas Bauer Rosé - feinherb', price: 'Glas 0,2l 6 / Flasche 0,75l 22', description: 'Weinbiet, Deutschland, Pfalz. Beerenaromen und elegante Fruchtsüße. Passt zu Salaten & leichten Gerichten.' },
      { name: 'Cellier des Vicomtes Merlot - trocken', price: 'Glas 0,2l 6', description: 'Alma Cersius, Frankreich, Languedoc. Weich & vollmundig mit fruchtigem Charakter und sanftem Abgang. Passt zu Rumpsteak & Pfefferschnitzel.' },
      { name: 'Spätburgunder - halbtrocken', price: 'Glas 0,2l 6 / Flasche 0,75l 22', description: 'Karl Pfaffmann, Deutschland, Pfalz. Cassis & Brombeere, würzig mit Kirschnote. Passt zu Schnitzel & Schweinefiletmedaillons.' },
    ],
  },
];

export const events: EventEntry[] = [
  {
    title: 'Herbstauszeit',
    dateLabel: '04. - 13. November',
    startDate: '2025-11-04',
    image: 'https://cdn.website.dish.co/media/26/93/9431607/Cafe-Bistro-Grun-Wei-Betriebsferien-herbst-jpg.jpg',
    description: [
      'Liebe Freunde, auch wir tanken neue Energie und genießen die Herbstruhe.',
      'Ab Freitag dem 14. November sind wir wieder mit frischer Kraft für Euch da.',
      'Platz zu Weihnachten reservieren nicht vergessen... ;D 25. & 26.12. von 12-22 Uhr geöffnet!',
      'Liebe Grüße Euer Team Café-Bistro Grün-Weiß',
    ],
    ctaLabel: 'Weihnachtsplatz sichern',
    ctaHref: '#reservation',
  },
  {
    title: 'Weihnachtstage 2025',
    dateLabel: '25.12. & 26.12.',
    startDate: '2025-12-25',
    image: 'https://cdn.website.dish.co/media/80/70/9249292/Cafe-Bistro-Grun-Wei-Weihnachten2024-jpg.jpg',
    description: [
      'Auch an Weihnachten sind wir für Euch da.',
      'Am 1. & 2. Weihnachtstag (12–22 Uhr) verwöhnen wir Euch mit à la carte, saftigen Steaks & feinem Wild und einem leckeren Süppchen zum Mittag.',
      'Wir freuen uns auf Euch! Euer Team Café-Bistro Grün-Weiß',
    ],
    ctaLabel: 'Festtage reservieren',
    ctaHref: '#reservation',
  },
  {
    title: 'Geschlossene Gesellschaft',
    dateLabel: '30.08. & 27.09',
    startDate: '2025-08-30',
    image: 'https://cdn.website.dish.co/media/7a/5d/9249287/Cafe-Bistro-Grun-Wei-geschlossene-gesellschaft-schild-jpg.jpg',
    description: [
      'An den genannten Tagen feiern wir zunächst ein gemütliches Grillen und anschließend das Saisonabschlussfest des TC Unna 02.',
      'Wir danken für Ihr Verständnis und freuen uns auf eine schöne Zeit!',
    ],
  },
  {
    title: 'Sommerpause 2025',
    dateLabel: '29.07. - 07.08.2025',
    startDate: '2025-07-29',
    image: 'https://cdn.website.dish.co/media/94/1d/9249279/Cafe-Bistro-Grun-Wei-Betriebsurlaub-web-4-jpg.jpg',
    description: [
      'Liebe Freunde, wir legen die Füße hoch und gönnen uns eine Sommerpause!',
      'Genießt die Sonne, grillt für uns mit – und ab dem 07.08.2024 sind wir wieder voller Energie für Euch da.',
      'Euer Team Café-Bistro Grün-Weiß',
    ],
  },
  {
    title: 'Öffnungszeiten',
    dateLabel: 'Weihnachten 2024',
    startDate: '2024-12-24',
    image: 'https://cdn.website.dish.co/media/af/66/8526746/Cafe-Bistro-Grun-Wei-Weihnachten2024-jpg.jpg',
    description: [
      'Liebe Freunde, auch diese Weihnachten haben wir geöffnet.',
      'Am 1. & 2. Weihnachtstag (12 - 22 Uhr) gibt es à la carte, Steaks, & Wild sowie ein kleines Dessert von uns.',
      'Euer Team Café-Bistro Grün-Weiß',
    ],
    ctaLabel: 'Ladet Eure Liebsten ein',
    ctaHref: '#reservation',
  },
  {
    title: 'Gänsekeulen auf Bestellung',
    dateLabel: '04.12; 05.12; 06.12.2024',
    startDate: '2024-12-04',
    image: 'https://cdn.website.dish.co/media/d9/2f/8526808/Cafe-Bistro-Grun-Wei-Gansekeule-jpg.jpg',
    description: [
      'Vom 04.-06.12.2024 haben wir Gänsekeulen auf Bestellung im Angebot.',
      'Reserviert Euch einen Platz. ;D Euer Team Café-Bistro Grün-Weiß',
    ],
    ctaLabel: 'Laden Sie Ihre Freunde ein',
    ctaHref: '#reservation',
  },
  {
    title: '!!!Dienstag-Schnitzeltag!!!',
    dateLabel: 'Ab dem 16.01.2024',
    startDate: '2024-01-16',
    image: 'https://cdn.website.dish.co/media/90/a4/7486230/Cafe-Bistro-Grun-Wei-Dienstag-Schnitzeltag-Website-jpg.jpg',
    description: [
      'Wir möchten uns herzlich bei Euch für das tolle Jahr 2023 bedanken!',
      'Deshalb startet bei uns wieder der Schnitzeltag: alle Schnitzel 3 € günstiger, egal welche Größe, jeden Dienstag, bis zum 30. April 2024.',
      'Euer Team Café-Bistro Grün Weiß',
    ],
    ctaLabel: 'Für Gruppe anmelden',
    ctaHref: '#reservation',
  },
  {
    title: 'Öffnungszeiten',
    dateLabel: 'Weihnachten 2023',
    startDate: '2023-12-24',
    image: 'https://cdn.website.dish.co/media/11/84/7208945/Cafe-Bistro-Grun-Wei-Weihnachten-jpg.jpg',
    description: [
      'Frühschoppen an Heiligabend (11 - 15 Uhr) nur mit Anmeldung (p.P. 12,90), familiäre Atmosphäre, belegte Brötchen, eine Suppe & etwas Süßes zum Nachtisch.',
      'Am 1. & 2. Weihnachtstag (12 - 22 Uhr) gibt es à la carte & Wildspezialitäten sowie ab 15 Uhr zu jedem Schnitzel einen Salat von uns.',
      'Euer Team Café-Bistro Grün-Weiß',
    ],
    ctaLabel: 'Ladet Eure Liebsten ein',
    ctaHref: '#reservation',
  },
  {
    title: 'Doppelkopf & Skat Turniere',
    dateLabel: '29.10.23 / 26.11.23',
    startDate: '2023-10-29',
    image: 'https://cdn.website.dish.co/media/42/49/5721871/Cafe-Bistro-Grun-Wei-64C863A5-C001-40B3-8661-2AE39CA41C14-jpeg.jpg',
    description: [
      'Vom Helden bis zum Anfänger, alle sind willkommen!',
      'Doppelkopf 29.10.23 ab 15Uhr, Skat 26.11.23 ab 18Uhr, Stargebühr 20€.',
      'Enthalten sind Wanderpokale, Kaffee & Kuchen und warmer Snack. Über Jobst Richter: 0173/5757058',
      'Euer Team Café-Bistro Grün-Weiß',
    ],
    ctaLabel: 'Laden Sie Ihre Freunde ein',
    ctaHref: 'https://tennisinunna.de/spiele-herbst/',
  },
  {
    title: 'Betriebsferien & Änderung Öffnungszeiten',
    dateLabel: '14.11.2023 - 22.11.2023',
    startDate: '2023-11-14',
    image: 'https://cdn.website.dish.co/media/6c/f3/7208957/Cafe-Bistro-Grun-Wei-Betriebsferien-herbst-jpg.jpg',
    description: [
      'Wir machen vom 14.11 - 22.11 Betriebsferien.',
      'Ab dem 23.11.2023 sind wir mit neuen Öffnungszeiten für die Wintersaison wieder für Euch da: Montag Ruhetag, Dienstag - Freitag 17h - 22h, Samstag & Sonntag 12h - 14:30 & 17h - 22h.',
      'Euer Team Café-Bistro Grün-Weiß',
    ],
    ctaLabel: 'Weitere Informationen',
    ctaHref: '#times',
  },
  {
    title: 'Grilabend',
    dateLabel: 'Am 02.09.2023 GESCHLOSSENE GESELLSCHAFT',
    startDate: '2023-09-02',
    image: 'https://cdn.website.dish.co/media/e8/65/7018175/Cafe-Bistro-Grun-Wei-2023-Turnierposter-png.jpg',
    description: [
      'Am 02.09 findet wieder unser jährlicher Grillabend für den MBC & Robinson Cup statt.',
      'Am 03.09 haben wir wie gewohnt geöffnet und laden auch herzlich ein, sich das Finale der beiden Turnier anzuschauen. Am Dienstag den 05.09.2023 haben wir außerordentlich geschlossen.',
      'Euer Team Café-Bistro Grün-Weiß',
    ],
  },
  {
    title: 'Geschlossene Gesellschaft',
    dateLabel: '23.09.2023 & 29.09.2023',
    startDate: '2023-09-23',
    image: 'https://cdn.website.dish.co/media/04/83/7084417/Cafe-Bistro-Grun-Wei-geschlossene-gesellschaft-schild-jpg.jpg',
    description: [
      'Am Samstag den 23.09 & Freitag 29.09 haben wir geschlossen.',
      'Wir sind an allen anderen Tagen zu den gewohnten Öffnungszeiten für Euch da. Euer Team Café-Bistro Grün-Weiß',
    ],
  },
  {
    title: 'Betriebsferien',
    dateLabel: '16.07.2023 - 30.07.2023',
    startDate: '2023-07-16',
    image: 'https://cdn.website.dish.co/media/c7/fd/7018309/Cafe-Bistro-Grun-Wei-Betriebsurlaub-web-4-jpg.jpg',
    description: [
      'Wir machen Betriebsferien und wünschen Euch allen einen schönen Sommer!!!',
      'Ab dem 01.08.2023 sind wir wieder für Euch da. Euer Team Café-Bistro Grün-Weiß',
    ],
  },
  {
    title: 'Tennisturnier & Doppelkopf-Turnier',
    dateLabel: 'Am 03.06 & 04.06.23 GESCHLOSSEN',
    startDate: '2023-06-03',
    image: 'https://cdn.website.dish.co/media/79/b0/6634740/Cafe-Bistro-Grun-Wei-geschlossene-gesellschaft-schild-jpg.jpg',
    description: [
      'Am 03.06 findet bei uns ein Tennisturnier und am 04.06 ein Doppelkopf-Turnier statt, daher bitten wir um Euer Verständnis.',
      'Liebe Grüße Euer Café-Bistro Grün-Weiß',
    ],
  },
  {
    title: 'Öffnungszeiten Pfingsten',
    dateLabel: 'Pfingsten',
    startDate: '2023-05-28',
    image: 'https://cdn.website.dish.co/media/36/70/6634731/Cafe-Bistro-Grun-Wei-pentecoste-jpg.jpg',
    description: [
      'Pfingstsonntag regulär geöffnet & ein paar Tische frei - am Pfingstmontag GESCHLOSSEN.',
      'Wir bedanken uns für Euer Verständnis und bis bald! Frohe Pfingsten Euer Team Café-Bistro Grün-Weiß',
    ],
    ctaLabel: 'Tisch reservieren',
    ctaHref: '#reservation',
  },
  {
    title: 'Vatertag',
    dateLabel: 'Am 18.05 haben wir geschlossen',
    startDate: '2023-05-18',
    image: 'https://cdn.website.dish.co/media/a6/5e/6584298/Cafe-Bistro-Grun-Wei-istockphoto-961354986-612x612-jpg.jpg',
    description: [
      'Wir wünschen allen Vätern einen schönen Vatertag! Vielen Dank fürs Verständnis.',
      'Euer Team Café-Bistro Grün-Weiß',
    ],
  },
  {
    title: 'Unsere Spargelkarte',
    dateLabel: 'Ab dem 07.05 auch bei uns!',
    startDate: '2023-05-07',
    image: 'https://cdn.website.dish.co/media/b9/d3/6634717/Cafe-Bistro-Grun-Wei-IMG-8559-png.jpg',
    description: [
      'Nach einem schönen Spaziergang im Kurpark den Abend mit frischem Spargel ausklingen lassen.',
      'Liebe Grüße Euer Team Café-Bistro Grün-Weiß',
    ],
    ctaLabel: 'Zur Spargelkarte',
    ctaHref: '#menu',
  },
  {
    title: 'Geschlossene Gesellschaft',
    dateLabel: 'Jahreshauptversammlung TC Unna 02',
    startDate: '2023-03-29',
    image: 'https://cdn.website.dish.co/media/49/09/6360983/Cafe-Bistro-Grun-Wei-geschlossene-gesellschaft-schild-jpg.jpg',
    description: [
      'Am 29.03.2023 findet die JHV des TC Unna 02 Grün-Weiß bei uns statt. Wir bitten um Verständnis.',
      'Viele Grüße Café-Bistro Grün-Weiß',
    ],
  },
  {
    title: 'Osterfeiertage',
    dateLabel: 'REGULÄR GEÖFFNET',
    startDate: '2023-04-10',
    image: 'https://cdn.website.dish.co/media/3c/ec/6360940/Cafe-Bistro-Grun-Wei-Ostern-2023-jpg.jpg',
    description: [
      'Ausnahme: Ostermontag 10.04. Geöffnet von 12:00 - 22:00.',
      'Euer Team Café-Bistro Grün-Weiß',
    ],
    ctaLabel: 'Für Reservationen',
    ctaHref: '#reservation',
  },
  {
    title: 'Betriebsferien',
    dateLabel: '18.04.2023 - 23.04.2023',
    startDate: '2023-04-18',
    image: 'https://cdn.website.dish.co/media/b1/5a/6330169/Zur-heien-Juliska-bayern-osterferien-jpg.jpg',
    description: [
      'Liebe Freunde, wir machen vom 18.04.2023 bis zum 23.04.2023 Betriebsferien.',
      'Ab dem 25.04.2023 sind wir wieder für Euch da. Euer Team Café-Bistro Grün-Weiß',
    ],
  },
  {
    title: 'Grünkohl- Sattessen',
    dateLabel: 'Am Freitag, den 20.01.2023',
    startDate: '2023-01-20',
    image: 'https://cdn.website.dish.co/media/b7/e7/5973551/Cafe-Bistro-Grun-Wei-GruenkohlaufTeller-jpg.jpg',
    description: [
      'Das wohl, für diese Saison, letzte Grünkohlessen in Unna. Grünkohl, Kassler, Mettwurst und Salzkartoffeln solange der Hunger reicht! Für 14€.',
      'Bitte reserviert euch vorher einen Tisch. Unter TEL.: 0157 53665472.',
      'Liebe Grüße Euer Team Café-Bistro Grün-Weiß',
    ],
    ctaLabel: 'Für Reservierungen',
    ctaHref: '#reservation',
  },
  {
    title: 'Wir wünschen Euch ein',
    dateLabel: 'Frohes neues Jahr',
    startDate: '2023-01-01',
    image: 'https://cdn.website.dish.co/media/56/7f/5925322/Cafe-Bistro-Grun-Wei-frohes-neues-2023-11-jpg.jpg',
    description: [
      'Wir hoffen Ihr seid gut und gesund ins neue Jahr gekommen. Auch in diesem Jahr freuen wir uns viele tolle Erinnerungen mit Euch zu schaffen.',
      'Bis bald! Euer Team Café-Bistro Grün-Weiß',
    ],
    ctaLabel: 'Für Reservierungen',
    ctaHref: '#reservation',
  },
  {
    title: 'Betriebsferien',
    dateLabel: '29.12.2022 - 09.01.2023',
    startDate: '2022-12-29',
    image: 'https://cdn.website.dish.co/media/c2/f1/5881787/Cafe-Bistro-Grun-Wei-ferien-jpg.jpg',
    description: [
      'Wir machen Betriebsferien und wünschen Euch allen einen guten Rutsch ins neue Jahr!!!',
      'Ab dem 10.01.2023 sind wir wieder für Euch da. Euer Team Café-Bistro Grün-Weiß',
    ],
  },
  {
    title: 'Frühschoppen an Heilig Abend',
    dateLabel: 'Bitte mit Anmeldung.',
    startDate: '2022-12-24',
    image: 'https://cdn.website.dish.co/media/04/96/5891415/Cafe-Bistro-Grun-Wei-Weihnachten-jpg.jpg',
    description: [
      'Zum festlichen Anlass laden wir Euch alle herzlich zum Frühschoppen ein.',
      'Wir öffnen für euch am 24.12.2022 von 11 Uhr bis 14:30 Uhr. Kleinigkeiten zu essen und gut was zu trinken - wir freuen uns!',
      'Für Reservationen: 0157/53665472. Euer Team Café-Bistro Grün-Weiß',
    ],
    ctaLabel: 'Rufen Sie an',
    ctaHref: '#contact',
  },
  {
    title: 'Weihnachtsfeier Weicken Architekten',
    dateLabel: 'Geschlossene Gesellschaft',
    startDate: '2022-12-22',
    image: 'https://cdn.website.dish.co/media/76/90/5881836/Cafe-Bistro-Grun-Wei-Weicken-png.jpg',
    description: [
      'Am 22.12.2022 begrüßen wir die Firma Weicken Architekten, zur jährlichen Weihnachtsfeier, bei uns in der Gaststätte.',
      'Wir bitten um Verständnis. Euer Team Café-Bistro Grün-Weiß',
    ],
  },
  {
    title: 'Unser Menü-Toni',
    dateLabel: 'Italienische Küche trifft den Balkan',
    startDate: '2022-10-19',
    image: 'https://cdn.website.dish.co/media/2f/3c/5897349/Cafe-Bistro-Grun-Wei-IMG-6147-JPG.jpg',
    description: [
      'Ein Hauch vom italienischen Sommerabend in den Nudelgerichten oder den deftigen Balkan in den Cevapcici - bei uns bekommt ihr beides zugleich.',
      'Besuchen Sie uns im Herzen des Kurparks und probiert unsere frische Küche. Euer Team Café-Bistro Grün-Weiß',
    ],
    ctaLabel: 'Zum Menü',
    ctaHref: '#menu',
  },
  {
    title: 'Doppelkopf & Skat Turniere',
    dateLabel: 'Geschlossene Gesellschaft nur mit Anmeldung',
    startDate: '2022-11-13',
    image: 'https://cdn.website.dish.co/media/42/49/5721871/Cafe-Bistro-Grun-Wei-64C863A5-C001-40B3-8661-2AE39CA41C14-jpeg.jpg',
    description: [
      'Vom Helden bis zum Anfänger, alle sind willkommen!',
      'Doppelkopf 13.11.22 ab 15Uhr, Skat 25.11.22 ab 18Uhr. Stargebühr 20€.',
      'Enthalten sind Wanderpokale, Kaffee & Kuchen und warmer Snack. Wir freuen uns auf Eure Anmeldung.',
      'Über Jobst Richter: 0173/5757058. Euer Team Café-Bistro Grün-Weiß',
    ],
    ctaLabel: 'weitere Events',
    ctaHref: 'http://tennisinunna.de',
  },
  {
    title: 'Neue Speisekarte ab dem 19.10.2022',
    dateLabel: 'Wir kochen alles frisch vom Messer!',
    startDate: '2022-10-19',
    image: 'https://cdn.website.dish.co/media/7a/a9/5715712/Cafe-Bistro-Grun-Wei-IMG-6191-richtig-jpg.jpg',
    description: [
      'Schauen Sie gerne in unsere neue Speisekarte. Von frischer Bruschetta bis zu Schweinefiletmedallions in Madagaskar-Pfeffersauce ist bei uns alles dabei.',
      'Sie kann mit einem Klick unten geöffnet werden. Teilen Sie es gerne mit euren Freunden und Familie. Euer Team Café-Bistro Grün-Weiß',
    ],
    ctaLabel: 'Zur Speisekarte',
    ctaHref: '#menu',
  },
];

export const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100086752786709' },
];

export const defaultFallbackImage = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80';
