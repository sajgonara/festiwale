// Festiwale w Polsce 2026 — dane zebrane 2026-07-30 (research + kalendarze branżowe)
// verified:true  = termin potwierdzony w źródle zebranym podczas researchu
// verified:false = termin orientacyjny (zwykle "zwyczajowy" tydzień roku) — sprawdź na stronie organizatora
// free:true      = wstęp wolny na główną część wydarzenia
// lat/lng        = środek miejscowości (nie dokładny teren festiwalu)
const FESTIWALE = [

  /* ===== MUZYKA ===== */
  { name:"SnowFest Festival", city:"Szczyrk", lat:49.7180, lng:19.0330, start:"2026-03-06", end:"2026-03-07",
    category:"muzyka", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:true, note:"Elektronika i hip-hop w scenerii zimowej" },

  { name:"Mystic Festival", city:"Gdańsk", lat:54.3520, lng:18.6466, start:"2026-06-03", end:"2026-06-06",
    category:"muzyka", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:true, note:"Metal i hardcore na terenie Stoczni Gdańskiej" },

  { name:"TAURON Nowa Muzyka", city:"Katowice", lat:50.2649, lng:19.0238, start:"2026-06-04", end:"2026-06-07",
    category:"muzyka", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:true, note:"Elektronika, jazz, ambient, eksperyment — Strefa Kultury" },

  { name:"LAS Festival", city:"Lubawka", lat:50.6970, lng:16.0000, start:"2026-06-24", end:"2026-06-29",
    category:"muzyka", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:true, note:"Elektronika, performance i sztuka w lesie" },

  { name:"Open'er Festival", city:"Gdynia", lat:54.5189, lng:18.5305, start:"2026-07-01", end:"2026-07-04",
    category:"muzyka", free:false, priceMin:null, pricePass:1149, priceNote:"Karnet 4-dniowy 1149 zł",
    website:null, verified:true, note:"Lotnisko Gdynia-Kosakowo; największy polski festiwal wielogatunkowy" },

  { name:"Audioriver Festival", city:"Łódź", lat:51.7592, lng:19.4560, start:"2026-07-10", end:"2026-07-12",
    category:"muzyka", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:true, note:"Elektronika; po przeprowadzce z Płocka" },

  { name:"Jarocin Festival", city:"Jarocin", lat:51.9740, lng:17.5060, start:"2026-07-16", end:"2026-07-19",
    category:"muzyka", free:false, priceMin:199, pricePass:null, priceNote:"Bilety jednodniowe od 199 zł",
    website:null, verified:true, note:"Rock alternatywny i polski rock" },

  { name:"Pol'and'Rock Festival", city:"Czaplinek", lat:53.5560, lng:16.2340, start:"2026-07-30", end:"2026-08-01",
    category:"muzyka", free:true, priceMin:0, pricePass:0, priceNote:"Wstęp wolny",
    website:null, verified:true, note:"Największa darmowa impreza muzyczna w Polsce (d. Przystanek Woodstock)" },

  { name:"Sunrise Festival", city:"Kołobrzeg", lat:54.1758, lng:15.5830, start:"2026-07-31", end:"2026-08-02",
    category:"muzyka", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:true, note:"Elektronika nad morzem" },

  { name:"OFF Festival", city:"Katowice", lat:50.2649, lng:19.0238, start:"2026-08-07", end:"2026-08-09",
    category:"muzyka", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:true, note:"Alternatywa i muzyka niezależna, Dolina Trzech Stawów" },

  { name:"BitterSweet Festival", city:"Poznań", lat:52.4064, lng:16.9252, start:"2026-08-13", end:"2026-08-15",
    category:"muzyka", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:true, note:"Poznańska Cytadela; duże światowe nazwiska" },

  { name:"Wisłoujście Festival", city:"Gdańsk", lat:54.3520, lng:18.6466, start:"2026-08-21", end:"2026-08-23",
    category:"muzyka", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:true, note:"Kameralny festiwal w Twierdzy Wisłoujście" },

  { name:"Wratislavia Cantans", city:"Wrocław", lat:51.1079, lng:17.0385, start:"2026-09-05", end:"2026-09-20",
    category:"muzyka", free:false, priceMin:null, pricePass:null, priceNote:"Część koncertów bezpłatna",
    website:null, verified:false, note:"Oratoria i muzyka chóralna; wrzesień — dokładny termin do potwierdzenia" },

  { name:"Fest Festival", city:"Chorzów", lat:50.2970, lng:18.9540, start:"2026-08-14", end:"2026-08-16",
    category:"muzyka", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, note:"Park Śląski; termin orientacyjny" },

  { name:"Kraków Live Festival", city:"Kraków", lat:50.0647, lng:19.9450, start:"2026-08-21", end:"2026-08-22",
    category:"muzyka", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, note:"Lotnisko Czyżyny; termin orientacyjny" },

  { name:"Ostróda Reggae Festival", city:"Ostróda", lat:53.6960, lng:19.9650, start:"2026-08-06", end:"2026-08-09",
    category:"muzyka", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, note:"Największy festiwal reggae w Polsce; termin orientacyjny" },

  { name:"Cieszanów Rock Festiwal", city:"Cieszanów", lat:50.2540, lng:23.1300, start:"2026-08-13", end:"2026-08-16",
    category:"muzyka", free:false, priceMin:null, pricePass:null, priceNote:"Jeden z tańszych karnetów w kraju",
    website:null, verified:false, note:"Termin orientacyjny" },

  { name:"Slot Art Festival", city:"Lubiąż", lat:51.2600, lng:16.4200, start:"2026-07-07", end:"2026-07-11",
    category:"muzyka", free:false, priceMin:null, pricePass:null, priceNote:"Tani karnet z warsztatami w cenie",
    website:null, verified:false, note:"Poklasztorny kompleks w Lubiążu; muzyka + kilkaset warsztatów" },

  { name:"Unsound", city:"Kraków", lat:50.0647, lng:19.9450, start:"2026-10-04", end:"2026-10-11",
    category:"muzyka", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, note:"Muzyka eksperymentalna; termin orientacyjny" },

  { name:"Sacrum Profanum", city:"Kraków", lat:50.0647, lng:19.9450, start:"2026-10-09", end:"2026-10-17",
    category:"muzyka", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, note:"Muzyka współczesna; termin orientacyjny" },

  { name:"Jazz nad Odrą", city:"Wrocław", lat:51.1079, lng:17.0385, start:"2026-04-18", end:"2026-04-26",
    category:"muzyka", free:false, priceMin:null, pricePass:null, priceNote:"Część wydarzeń w klubach bezpłatna",
    website:null, verified:false, note:"Jeden z najstarszych festiwali jazzowych w Europie; termin orientacyjny" },

  { name:"Chopin i jego Europa", city:"Warszawa", lat:52.2297, lng:21.0122, start:"2026-08-14", end:"2026-08-31",
    category:"muzyka", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, note:"Muzyka klasyczna; termin orientacyjny" },

  { name:"Jazz Jamboree", city:"Warszawa", lat:52.2297, lng:21.0122, start:"2026-10-22", end:"2026-10-25",
    category:"muzyka", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, note:"Termin orientacyjny" },

  /* ===== FILM ===== */
  { name:"MFF ZOOM–ZBLIŻENIA", city:"Jelenia Góra", lat:50.9044, lng:15.7194, start:"2026-03-02", end:"2026-03-08",
    category:"film", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:true, note:"Kino niezależne, dokument, animacja" },

  { name:"Let's Doc", city:"Warszawa", lat:52.2297, lng:21.0122, start:"2026-03-21", end:"2026-03-28",
    category:"film", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:true, note:"Film dokumentalny i edukacja filmowa" },

  { name:"Timeless Film Festival Warsaw", city:"Warszawa", lat:52.2297, lng:21.0122, start:"2026-04-17", end:"2026-04-27",
    category:"film", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:true, note:"Klasyka kina, retrospektywy, spotkania autorskie" },

  { name:"Millennium Docs Against Gravity", city:"Warszawa", lat:52.2297, lng:21.0122, start:"2026-05-08", end:"2026-05-17",
    category:"film", free:false, priceMin:null, pricePass:null, priceNote:"Wersja online 19.05–01.06",
    website:null, verified:true, note:"Równolegle: Wrocław, Gdynia, Poznań, Katowice, Łódź, Bydgoszcz" },

  { name:"Krakowski Festiwal Filmowy", city:"Kraków", lat:50.0647, lng:19.9450, start:"2026-05-31", end:"2026-06-07",
    category:"film", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:true, note:"Dokument, animacja, film krótkometrażowy" },

  { name:"TAURON Nowe Horyzonty", city:"Wrocław", lat:51.1079, lng:17.0385, start:"2026-07-23", end:"2026-08-02",
    category:"film", free:false, priceMin:null, pricePass:null, priceNote:"Część online do 09.08",
    website:"https://www.nowehoryzonty.pl/", verified:true, note:"Kino artystyczne i eksperymentalne" },

  { name:"EnergaCAMERIMAGE", city:"Toruń", lat:53.0138, lng:18.5984, start:"2026-11-07", end:"2026-11-14",
    category:"film", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:true, note:"Światowy festiwal sztuki operatorskiej" },

  { name:"Festiwal Polskich Filmów Fabularnych", city:"Gdynia", lat:54.5189, lng:18.5305, start:"2026-09-14", end:"2026-09-19",
    category:"film", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, note:"Termin 2026 nie był ogłoszony w momencie zbierania danych" },

  { name:"Warszawski Festiwal Filmowy", city:"Warszawa", lat:52.2297, lng:21.0122, start:"2026-10-09", end:"2026-10-18",
    category:"film", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, note:"Termin orientacyjny" },

  { name:"Mastercard OFF CAMERA", city:"Kraków", lat:50.0647, lng:19.9450, start:"2026-04-24", end:"2026-05-03",
    category:"film", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, note:"Kino niezależne; termin orientacyjny" },

  { name:"Etiuda & Anima", city:"Kraków", lat:50.0647, lng:19.9450, start:"2026-11-20", end:"2026-11-27",
    category:"film", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, note:"Etiudy studenckie i animacja; termin orientacyjny" },

  { name:"Lubuskie Lato Filmowe", city:"Łagów", lat:52.3350, lng:15.3000, start:"2026-06-20", end:"2026-06-27",
    category:"film", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, note:"Najstarszy festiwal filmowy w Polsce; termin orientacyjny" },

  /* ===== FOLK / TRADYCJA ===== */
  { name:"Festiwal Wszystkie Mazurki Świata", city:"Warszawa", lat:52.2297, lng:21.0122, start:"2026-04-22", end:"2026-04-25",
    category:"folk", free:false, priceMin:null, pricePass:null, priceNote:"Część potańcówek i warsztatów bezpłatna",
    website:null, verified:true, note:"Muzyka tradycyjna, potańcówki wiejskie" },

  { name:"Festiwal Folkowy Polskiego Radia „Nowa Tradycja”", city:"Warszawa", lat:52.2297, lng:21.0122, start:"2026-05-21", end:"2026-05-24",
    category:"folk", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:true, note:"Konkurs folkowy Polskiego Radia" },

  { name:"Ogólnopolski Festiwal Kapel i Śpiewaków Ludowych", city:"Kazimierz Dolny", lat:51.3220, lng:21.9520, start:"2026-06-25", end:"2026-06-28",
    category:"folk", free:true, priceMin:0, pricePass:0, priceNote:"Wstęp wolny",
    website:null, verified:true, note:"Jubileuszowa 60. edycja; kapele wiejskie z całej Polski" },

  { name:"EtnoBaltica — Festiwal Twórczości Ludowej", city:"Swołowo", lat:54.4667, lng:17.0333, start:"2026-07-03", end:"2026-07-05",
    category:"folk", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:true, note:"Warsztaty tańca, garncarstwa, EtnoWioska Dziecięca" },

  { name:"Globaltica World Cultures Festival", city:"Gdynia", lat:54.4900, lng:18.5600, start:"2026-07-17", end:"2026-07-19",
    category:"folk", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:true, note:"Muzyka świata, Park Kolibki w Gdyni Orłowie" },

  { name:"Festiwal Kultury Kresowej", city:"Mrągowo", lat:53.8670, lng:21.3040, start:"2026-08-06", end:"2026-08-09",
    category:"folk", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:true, note:"Kultura Kresów Wschodnich" },

  { name:"Re:tradycja — Jarmark Jagielloński", city:"Lublin", lat:51.2465, lng:22.5684, start:"2026-08-21", end:"2026-08-23",
    category:"folk", free:true, priceMin:0, pricePass:0, priceNote:"Wstęp wolny",
    website:null, verified:true, note:"Targi sztuki ludowej, koncerty, potańcówki, warsztaty na Starym Mieście" },

  { name:"MFF Ziem Górskich", city:"Zakopane", lat:49.2992, lng:19.9496, start:"2026-08-21", end:"2026-08-27",
    category:"folk", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:true, note:"Międzynarodowy festiwal folkloru ziem górskich" },

  { name:"Pannonica Festival", city:"Stary Sącz", lat:49.5620, lng:20.6350, start:"2026-08-22", end:"2026-08-24",
    category:"folk", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:true, note:"Muzyka bałkańska, romska i karpacka" },

  { name:"Skrzyżowanie Kultur", city:"Warszawa", lat:52.2297, lng:21.0122, start:"2026-09-18", end:"2026-09-22",
    category:"folk", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, note:"Muzyka świata; termin orientacyjny (ok. 18–22.09)" },

  { name:"Mikołajki Folkowe", city:"Lublin", lat:51.2465, lng:22.5684, start:"2026-12-11", end:"2026-12-14",
    category:"folk", free:false, priceMin:null, pricePass:null, priceNote:"Część wydarzeń bezpłatna",
    website:null, verified:true, note:"Najstarszy festiwal folkowy w Polsce; koncerty i warsztaty" },

  { name:"Festiwal Folkloru Górali Polskich", city:"Żywiec", lat:49.6853, lng:19.1922, start:"2026-08-01", end:"2026-08-05",
    category:"folk", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, note:"Sierpień 2026 — dokładny termin do potwierdzenia" },

  { name:"Tydzień Kultury Beskidzkiej", city:"Wisła", lat:49.6560, lng:18.8600, start:"2026-07-25", end:"2026-08-02",
    category:"folk", free:false, priceMin:null, pricePass:null, priceNote:"Wiele koncertów plenerowych bezpłatnych",
    website:null, verified:false, note:"Równolegle Szczyrk, Żywiec, Maków Podhalański; przełom lipca i sierpnia" },

  { name:"Łemkowska Watra", city:"Zdynia", lat:49.5170, lng:21.2670, start:"2026-07-17", end:"2026-07-19",
    category:"folk", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, note:"Kultura łemkowska; III/IV tydzień lipca" },

  { name:"Święto Dzieci Gór", city:"Nowy Sącz", lat:49.6210, lng:20.6970, start:"2026-07-26", end:"2026-08-01",
    category:"folk", free:false, priceMin:null, pricePass:null, priceNote:"Korowody i koncerty plenerowe bezpłatne",
    website:null, verified:false, note:"Dziecięce zespoły regionalne; ostatni tydzień lipca" },

  { name:"Folkowisko — Festiwal Kultury Pogranicza", city:"Gorajec", lat:50.2670, lng:23.1500, start:"2026-07-10", end:"2026-07-12",
    category:"folk", free:false, priceMin:null, pricePass:null, priceNote:"Tani karnet, klimat wiejskiego podwórka",
    website:null, verified:false, note:"Lipiec 2026 — termin orientacyjny" },

  { name:"MF Piosenki i Kultury Romów", city:"Ciechocinek", lat:52.8800, lng:18.7900, start:"2026-07-17", end:"2026-07-19",
    category:"folk", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, note:"Połowa lipca; termin orientacyjny" },

  { name:"Kurpiowskie Miodobranie", city:"Myszyniec", lat:53.3800, lng:21.3500, start:"2026-09-05", end:"2026-09-06",
    category:"folk", free:true, priceMin:0, pricePass:0, priceNote:"Wstęp wolny",
    website:null, verified:false, note:"Tradycje kurpiowskie, bartnictwo; wrzesień" },

  { name:"MF Koronki Klockowej", city:"Bobowa", lat:49.7000, lng:20.9400, start:"2026-10-03", end:"2026-10-04",
    category:"folk", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, note:"Rękodzieło i koronczarstwo; październik" },

  /* ===== HISTORIA / REKONSTRUKCJE ===== */
  { name:"Festiwal Słowian i Wikingów", city:"Wolin", lat:53.8450, lng:14.6120, start:"2026-08-07", end:"2026-08-09",
    category:"historia", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, note:"Największa rekonstrukcja wczesnośredniowieczna w Polsce; I weekend sierpnia" },

  { name:"Dni Grunwaldu", city:"Grunwald", lat:53.4870, lng:20.0870, start:"2026-07-16", end:"2026-07-19",
    category:"historia", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, note:"Inscenizacja bitwy pod Grunwaldem; termin orientacyjny (rocznica 15.07)" },

  { name:"Oblężenie Malborka", city:"Malbork", lat:54.0359, lng:19.0266, start:"2026-07-24", end:"2026-07-26",
    category:"historia", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, note:"Rekonstrukcja oblężenia zamku; termin orientacyjny" },

  { name:"Festyn Archeologiczny w Biskupinie", city:"Biskupin", lat:52.7860, lng:17.7360, start:"2026-09-19", end:"2026-09-27",
    category:"historia", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, note:"Najstarszy festyn archeologiczny w Europie; wrzesień" },

  /* ===== TEATR / SZTUKA ULICY ===== */
  { name:"Malta Festival", city:"Poznań", lat:52.4064, lng:16.9252, start:"2026-06-19", end:"2026-06-28",
    category:"teatr", free:false, priceMin:null, pricePass:null, priceNote:"Znaczna część programu plenerowego bezpłatna",
    website:null, verified:false, note:"Teatr, muzyka i sztuka w przestrzeni miasta; termin orientacyjny" },

  { name:"FETA — MF Teatrów Plenerowych i Ulicznych", city:"Gdańsk", lat:54.3520, lng:18.6466, start:"2026-07-09", end:"2026-07-12",
    category:"teatr", free:true, priceMin:0, pricePass:0, priceNote:"Wstęp wolny",
    website:null, verified:false, note:"Teatr uliczny na Dolnym Mieście; termin orientacyjny" },

  { name:"Carnaval Sztukmistrzów", city:"Lublin", lat:51.2465, lng:22.5684, start:"2026-07-23", end:"2026-07-26",
    category:"teatr", free:true, priceMin:0, pricePass:0, priceNote:"Wstęp wolny",
    website:null, verified:false, note:"Nowy cyrk i sztuka uliczna; termin orientacyjny" },

  { name:"MF Teatrów Ulicznych", city:"Jelenia Góra", lat:50.9044, lng:15.7194, start:"2026-08-27", end:"2026-08-30",
    category:"teatr", free:true, priceMin:0, pricePass:0, priceNote:"Wstęp wolny",
    website:null, verified:false, note:"Termin orientacyjny" },

  { name:"Boska Komedia", city:"Kraków", lat:50.0647, lng:19.9450, start:"2026-12-05", end:"2026-12-13",
    category:"teatr", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, note:"Przegląd najlepszych polskich spektakli sezonu; termin orientacyjny" },

  { name:"Festiwal Kontakt", city:"Toruń", lat:53.0138, lng:18.5984, start:"2026-05-22", end:"2026-05-29",
    category:"teatr", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, note:"Międzynarodowy festiwal teatralny; termin orientacyjny" },

  /* ===== JARMARKI / JEDZENIE ===== */
  { name:"Jarmark św. Dominika", city:"Gdańsk", lat:54.3520, lng:18.6466, start:"2026-07-25", end:"2026-08-16",
    category:"jarmark", free:true, priceMin:0, pricePass:0, priceNote:"Wstęp wolny",
    website:null, verified:false, note:"Trzy tygodnie handlu, koncertów i ulicznych scen; termin orientacyjny" },

  { name:"Jarmark Świętojański", city:"Poznań", lat:52.4064, lng:16.9252, start:"2026-06-13", end:"2026-06-28",
    category:"jarmark", free:true, priceMin:0, pricePass:0, priceNote:"Wstęp wolny",
    website:null, verified:false, note:"Stary Rynek; rękodzieło i jedzenie; termin orientacyjny" },

  { name:"Betlejem Poznańskie (jarmark bożonarodzeniowy)", city:"Poznań", lat:52.4064, lng:16.9252, start:"2026-11-27", end:"2026-12-23",
    category:"jarmark", free:true, priceMin:0, pricePass:0, priceNote:"Wstęp wolny",
    website:null, verified:false, note:"Termin orientacyjny" },

  { name:"Jarmark Bożonarodzeniowy na Rynku Głównym", city:"Kraków", lat:50.0647, lng:19.9450, start:"2026-11-27", end:"2026-12-26",
    category:"jarmark", free:true, priceMin:0, pricePass:0, priceNote:"Wstęp wolny",
    website:null, verified:false, note:"Termin orientacyjny" },

  { name:"Europejski Festiwal Smaku", city:"Lublin", lat:51.2465, lng:22.5684, start:"2026-09-04", end:"2026-09-06",
    category:"jedzenie", free:true, priceMin:0, pricePass:0, priceNote:"Wstęp wolny, płacisz za jedzenie",
    website:null, verified:false, note:"Termin orientacyjny" },

  { name:"Wrocławski Festiwal Dobrego Piwa", city:"Wrocław", lat:51.1079, lng:17.0385, start:"2026-06-12", end:"2026-06-14",
    category:"jedzenie", free:false, priceMin:null, pricePass:null, priceNote:"Bilet wstępu + osobno piwo",
    website:null, verified:false, note:"Największy festiwal piw rzemieślniczych w Polsce; termin orientacyjny" },

  { name:"Małopolski Festiwal Smaku", city:"Kraków", lat:50.0647, lng:19.9450, start:"2026-08-29", end:"2026-08-30",
    category:"jedzenie", free:true, priceMin:0, pricePass:0, priceNote:"Wstęp wolny",
    website:null, verified:false, note:"Finał na Rynku Głównym; termin orientacyjny" },

  /* ===== LITERATURA / IDEE ===== */
  { name:"Big Book Festival", city:"Warszawa", lat:52.2297, lng:21.0122, start:"2026-06-19", end:"2026-06-21",
    category:"literatura", free:false, priceMin:null, pricePass:null, priceNote:"Część spotkań bezpłatna",
    website:null, verified:false, note:"Termin orientacyjny" },

  { name:"Góry Literatury", city:"Nowa Ruda", lat:50.5800, lng:16.5000, start:"2026-07-09", end:"2026-07-19",
    category:"literatura", free:false, priceMin:null, pricePass:null, priceNote:"Wiele spotkań bezpłatnych",
    website:null, verified:false, note:"Festiwal Olgi Tokarczuk w Kotlinie Kłodzkiej; termin orientacyjny" },

  { name:"Festiwal Conrada", city:"Kraków", lat:50.0647, lng:19.9450, start:"2026-10-19", end:"2026-10-25",
    category:"literatura", free:true, priceMin:0, pricePass:0, priceNote:"Większość spotkań bezpłatna",
    website:null, verified:false, note:"Termin orientacyjny" },

  /* ===== INNE / MIEJSKIE ===== */
  { name:"Wianki nad Wisłą", city:"Kraków", lat:50.0647, lng:19.9450, start:"2026-06-20", end:"2026-06-20",
    category:"inne", free:true, priceMin:0, pricePass:0, priceNote:"Wstęp wolny",
    website:null, verified:false, note:"Noc Świętojańska nad Wisłą; termin orientacyjny" },

  { name:"Pyrkon", city:"Poznań", lat:52.4064, lng:16.9252, start:"2026-05-15", end:"2026-05-17",
    category:"inne", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, note:"Największy festiwal fantastyki w Polsce, MTP; termin orientacyjny" },

  { name:"Juwenalia", city:"Wrocław", lat:51.1079, lng:17.0385, start:"2026-05-14", end:"2026-05-17",
    category:"inne", free:false, priceMin:null, pricePass:null, priceNote:"Pochód i część koncertów bezpłatne",
    website:null, verified:false, note:"Termin orientacyjny" },

  { name:"Festiwal Górski", city:"Lądek-Zdrój", lat:50.3450, lng:16.8800, start:"2026-09-17", end:"2026-09-20",
    category:"inne", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, note:"Filmy i spotkania górskie; termin orientacyjny" }
,

  /* ===== EDYCJE 2027 (oszacowane: +364 dni od edycji 2026, ten sam dzień tygodnia) =====
     Wygenerowane automatycznie, żeby domyślne okno "365 dni od dziś" nie urywało się na Sylwestrze.
     Wszystkie mają estimated:true — w UI dostają badge ~termin. Po ogłoszeniu prawdziwych dat: podmień. */

  { name:"SnowFest Festival", city:"Szczyrk", lat:49.718, lng:19.033, start:"2027-03-05", end:"2027-03-06",
    category:"muzyka", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Elektronika i hip-hop w scenerii zimowej" },

  { name:"Mystic Festival", city:"Gdańsk", lat:54.352, lng:18.6466, start:"2027-06-02", end:"2027-06-05",
    category:"muzyka", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Metal i hardcore na terenie Stoczni Gdańskiej" },

  { name:"TAURON Nowa Muzyka", city:"Katowice", lat:50.2649, lng:19.0238, start:"2027-06-03", end:"2027-06-06",
    category:"muzyka", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Elektronika, jazz, ambient, eksperyment — Strefa Kultury" },

  { name:"LAS Festival", city:"Lubawka", lat:50.697, lng:16, start:"2027-06-23", end:"2027-06-28",
    category:"muzyka", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Elektronika, performance i sztuka w lesie" },

  { name:"Open'er Festival", city:"Gdynia", lat:54.5189, lng:18.5305, start:"2027-06-30", end:"2027-07-03",
    category:"muzyka", free:false, priceMin:null, pricePass:1149, priceNote:"Karnet 4-dniowy 1149 zł",
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Lotnisko Gdynia-Kosakowo; największy polski festiwal wielogatunkowy" },

  { name:"Audioriver Festival", city:"Łódź", lat:51.7592, lng:19.456, start:"2027-07-09", end:"2027-07-11",
    category:"muzyka", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Elektronika; po przeprowadzce z Płocka" },

  { name:"Jarocin Festival", city:"Jarocin", lat:51.974, lng:17.506, start:"2027-07-15", end:"2027-07-18",
    category:"muzyka", free:false, priceMin:199, pricePass:null, priceNote:"Bilety jednodniowe od 199 zł",
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Rock alternatywny i polski rock" },

  { name:"Pol'and'Rock Festival", city:"Czaplinek", lat:53.556, lng:16.234, start:"2027-07-29", end:"2027-07-31",
    category:"muzyka", free:true, priceMin:0, pricePass:0, priceNote:"Wstęp wolny",
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Największa darmowa impreza muzyczna w Polsce (d. Przystanek Woodstock)" },

  { name:"Sunrise Festival", city:"Kołobrzeg", lat:54.1758, lng:15.583, start:"2027-07-30", end:"2027-08-01",
    category:"muzyka", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Elektronika nad morzem" },

  { name:"Slot Art Festival", city:"Lubiąż", lat:51.26, lng:16.42, start:"2027-07-06", end:"2027-07-10",
    category:"muzyka", free:false, priceMin:null, pricePass:null, priceNote:"Tani karnet z warsztatami w cenie",
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Poklasztorny kompleks w Lubiążu; muzyka + kilkaset warsztatów" },

  { name:"Jazz nad Odrą", city:"Wrocław", lat:51.1079, lng:17.0385, start:"2027-04-17", end:"2027-04-25",
    category:"muzyka", free:false, priceMin:null, pricePass:null, priceNote:"Część wydarzeń w klubach bezpłatna",
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Jeden z najstarszych festiwali jazzowych w Europie; termin orientacyjny" },

  { name:"MFF ZOOM–ZBLIŻENIA", city:"Jelenia Góra", lat:50.9044, lng:15.7194, start:"2027-03-01", end:"2027-03-07",
    category:"film", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Kino niezależne, dokument, animacja" },

  { name:"Let's Doc", city:"Warszawa", lat:52.2297, lng:21.0122, start:"2027-03-20", end:"2027-03-27",
    category:"film", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Film dokumentalny i edukacja filmowa" },

  { name:"Timeless Film Festival Warsaw", city:"Warszawa", lat:52.2297, lng:21.0122, start:"2027-04-16", end:"2027-04-26",
    category:"film", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Klasyka kina, retrospektywy, spotkania autorskie" },

  { name:"Millennium Docs Against Gravity", city:"Warszawa", lat:52.2297, lng:21.0122, start:"2027-05-07", end:"2027-05-16",
    category:"film", free:false, priceMin:null, pricePass:null, priceNote:"Wersja online 19.05–01.06",
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Równolegle: Wrocław, Gdynia, Poznań, Katowice, Łódź, Bydgoszcz" },

  { name:"Krakowski Festiwal Filmowy", city:"Kraków", lat:50.0647, lng:19.945, start:"2027-05-30", end:"2027-06-06",
    category:"film", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Dokument, animacja, film krótkometrażowy" },

  { name:"TAURON Nowe Horyzonty", city:"Wrocław", lat:51.1079, lng:17.0385, start:"2027-07-22", end:"2027-08-01",
    category:"film", free:false, priceMin:null, pricePass:null, priceNote:"Część online do 09.08",
    website:"https://www.nowehoryzonty.pl/", verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Kino artystyczne i eksperymentalne" },

  { name:"Mastercard OFF CAMERA", city:"Kraków", lat:50.0647, lng:19.945, start:"2027-04-23", end:"2027-05-02",
    category:"film", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Kino niezależne; termin orientacyjny" },

  { name:"Lubuskie Lato Filmowe", city:"Łagów", lat:52.335, lng:15.3, start:"2027-06-19", end:"2027-06-26",
    category:"film", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Najstarszy festiwal filmowy w Polsce; termin orientacyjny" },

  { name:"Festiwal Wszystkie Mazurki Świata", city:"Warszawa", lat:52.2297, lng:21.0122, start:"2027-04-21", end:"2027-04-24",
    category:"folk", free:false, priceMin:null, pricePass:null, priceNote:"Część potańcówek i warsztatów bezpłatna",
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Muzyka tradycyjna, potańcówki wiejskie" },

  { name:"Festiwal Folkowy Polskiego Radia „Nowa Tradycja”", city:"Warszawa", lat:52.2297, lng:21.0122, start:"2027-05-20", end:"2027-05-23",
    category:"folk", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Konkurs folkowy Polskiego Radia" },

  { name:"Ogólnopolski Festiwal Kapel i Śpiewaków Ludowych", city:"Kazimierz Dolny", lat:51.322, lng:21.952, start:"2027-06-24", end:"2027-06-27",
    category:"folk", free:true, priceMin:0, pricePass:0, priceNote:"Wstęp wolny",
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Jubileuszowa 60. edycja; kapele wiejskie z całej Polski" },

  { name:"EtnoBaltica — Festiwal Twórczości Ludowej", city:"Swołowo", lat:54.4667, lng:17.0333, start:"2027-07-02", end:"2027-07-04",
    category:"folk", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Warsztaty tańca, garncarstwa, EtnoWioska Dziecięca" },

  { name:"Globaltica World Cultures Festival", city:"Gdynia", lat:54.49, lng:18.56, start:"2027-07-16", end:"2027-07-18",
    category:"folk", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Muzyka świata, Park Kolibki w Gdyni Orłowie" },

  { name:"Tydzień Kultury Beskidzkiej", city:"Wisła", lat:49.656, lng:18.86, start:"2027-07-24", end:"2027-08-01",
    category:"folk", free:false, priceMin:null, pricePass:null, priceNote:"Wiele koncertów plenerowych bezpłatnych",
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Równolegle Szczyrk, Żywiec, Maków Podhalański; przełom lipca i sierpnia" },

  { name:"Łemkowska Watra", city:"Zdynia", lat:49.517, lng:21.267, start:"2027-07-16", end:"2027-07-18",
    category:"folk", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Kultura łemkowska; III/IV tydzień lipca" },

  { name:"Święto Dzieci Gór", city:"Nowy Sącz", lat:49.621, lng:20.697, start:"2027-07-25", end:"2027-07-31",
    category:"folk", free:false, priceMin:null, pricePass:null, priceNote:"Korowody i koncerty plenerowe bezpłatne",
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Dziecięce zespoły regionalne; ostatni tydzień lipca" },

  { name:"Folkowisko — Festiwal Kultury Pogranicza", city:"Gorajec", lat:50.267, lng:23.15, start:"2027-07-09", end:"2027-07-11",
    category:"folk", free:false, priceMin:null, pricePass:null, priceNote:"Tani karnet, klimat wiejskiego podwórka",
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Lipiec 2026 — termin orientacyjny" },

  { name:"MF Piosenki i Kultury Romów", city:"Ciechocinek", lat:52.88, lng:18.79, start:"2027-07-16", end:"2027-07-18",
    category:"folk", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Połowa lipca; termin orientacyjny" },

  { name:"Dni Grunwaldu", city:"Grunwald", lat:53.487, lng:20.087, start:"2027-07-15", end:"2027-07-18",
    category:"historia", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Inscenizacja bitwy pod Grunwaldem; termin orientacyjny (rocznica 15.07)" },

  { name:"Oblężenie Malborka", city:"Malbork", lat:54.0359, lng:19.0266, start:"2027-07-23", end:"2027-07-25",
    category:"historia", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Rekonstrukcja oblężenia zamku; termin orientacyjny" },

  { name:"Malta Festival", city:"Poznań", lat:52.4064, lng:16.9252, start:"2027-06-18", end:"2027-06-27",
    category:"teatr", free:false, priceMin:null, pricePass:null, priceNote:"Znaczna część programu plenerowego bezpłatna",
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Teatr, muzyka i sztuka w przestrzeni miasta; termin orientacyjny" },

  { name:"FETA — MF Teatrów Plenerowych i Ulicznych", city:"Gdańsk", lat:54.352, lng:18.6466, start:"2027-07-08", end:"2027-07-11",
    category:"teatr", free:true, priceMin:0, pricePass:0, priceNote:"Wstęp wolny",
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Teatr uliczny na Dolnym Mieście; termin orientacyjny" },

  { name:"Carnaval Sztukmistrzów", city:"Lublin", lat:51.2465, lng:22.5684, start:"2027-07-22", end:"2027-07-25",
    category:"teatr", free:true, priceMin:0, pricePass:0, priceNote:"Wstęp wolny",
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Nowy cyrk i sztuka uliczna; termin orientacyjny" },

  { name:"Festiwal Kontakt", city:"Toruń", lat:53.0138, lng:18.5984, start:"2027-05-21", end:"2027-05-28",
    category:"teatr", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Międzynarodowy festiwal teatralny; termin orientacyjny" },

  { name:"Jarmark św. Dominika", city:"Gdańsk", lat:54.352, lng:18.6466, start:"2027-07-24", end:"2027-08-15",
    category:"jarmark", free:true, priceMin:0, pricePass:0, priceNote:"Wstęp wolny",
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Trzy tygodnie handlu, koncertów i ulicznych scen; termin orientacyjny" },

  { name:"Jarmark Świętojański", city:"Poznań", lat:52.4064, lng:16.9252, start:"2027-06-12", end:"2027-06-27",
    category:"jarmark", free:true, priceMin:0, pricePass:0, priceNote:"Wstęp wolny",
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Stary Rynek; rękodzieło i jedzenie; termin orientacyjny" },

  { name:"Wrocławski Festiwal Dobrego Piwa", city:"Wrocław", lat:51.1079, lng:17.0385, start:"2027-06-11", end:"2027-06-13",
    category:"jedzenie", free:false, priceMin:null, pricePass:null, priceNote:"Bilet wstępu + osobno piwo",
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Największy festiwal piw rzemieślniczych w Polsce; termin orientacyjny" },

  { name:"Big Book Festival", city:"Warszawa", lat:52.2297, lng:21.0122, start:"2027-06-18", end:"2027-06-20",
    category:"literatura", free:false, priceMin:null, pricePass:null, priceNote:"Część spotkań bezpłatna",
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Termin orientacyjny" },

  { name:"Góry Literatury", city:"Nowa Ruda", lat:50.58, lng:16.5, start:"2027-07-08", end:"2027-07-18",
    category:"literatura", free:false, priceMin:null, pricePass:null, priceNote:"Wiele spotkań bezpłatnych",
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Festiwal Olgi Tokarczuk w Kotlinie Kłodzkiej; termin orientacyjny" },

  { name:"Wianki nad Wisłą", city:"Kraków", lat:50.0647, lng:19.945, start:"2027-06-19", end:"2027-06-19",
    category:"inne", free:true, priceMin:0, pricePass:0, priceNote:"Wstęp wolny",
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Noc Świętojańska nad Wisłą; termin orientacyjny" },

  { name:"Pyrkon", city:"Poznań", lat:52.4064, lng:16.9252, start:"2027-05-14", end:"2027-05-16",
    category:"inne", free:false, priceMin:null, pricePass:null, priceNote:null,
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Największy festiwal fantastyki w Polsce, MTP; termin orientacyjny" },

  { name:"Juwenalia", city:"Wrocław", lat:51.1079, lng:17.0385, start:"2027-05-13", end:"2027-05-16",
    category:"inne", free:false, priceMin:null, pricePass:null, priceNote:"Pochód i część koncertów bezpłatne",
    website:null, verified:false, estimated:true, note:"Edycja 2027 — termin oszacowany jako ten sam tydzień co w 2026; potwierdź u organizatora. Termin orientacyjny" }

];
const FESTIWALE_UPDATED = "2026-07-30";
