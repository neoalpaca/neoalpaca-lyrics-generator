const lyrics = [
    "War, Famine, Death, Conquest",
    "Wuhan's market",
    "Italy",
    "The Venice canal ducks",
    "Chinese Oppenheimer",
    "Ego sum Alpha et Omega",
    "Principium et finis",
    "Dicit Dominus Deus",
    "Qui est et qui erat et qui venturus,",
    "Est Omnipotens et habebat in dextera sua stellas septem,",
    "Et de ore eius gladius utraque parte acutus exiebat,",
    "Et facies eius sicut sol lucet in virtute sua",
    "DEATH AT HOME",
    "Llevamos cinco semanas aislados",
    "Me cago en Madrid",
    "Me cago en su puta agua",
    "Que sabe a puto pus",
    "Son todos tontos",
    "Y hacen laísmo",
    "Me cago en puto Madrid",
    "Me cago en el sistema de herencia feudal que reparte el territorio entre los hijos igual que en las sociedades germánicas tribales",
    "Cristo murió por nuestros pecados",
    "Crucificado en la cruz de los romanos",
    "Al tercer día resucitó de entre los muertos",
    "Y entre medio cagó dos fiordos",
    "Que cobraron vida propia",
    "Y la forma de los titanes",
    "Jesús los dejó a su suerte",
    "Su destino era la muerte",
    "Por copromaquia",
    "Copromaquia, copromaquia",
    "No pudieron evitar el triste sino",
    "Murieron como lo que eran",
    "Un pedazo pino",
    "En una cueva oscura del infierno",
    "El poderoso Satanás parió",
    "Con esfuerzo, maldad, y con pasión",
    "El fornite, a su imagen monumento",
    "Dejó tras de sí cien mil niños muertos",
    "Un rastro de excreción y destrucción",
    "Sobre el hombre perpetua maldición",
    "Eternamente del fornite presos",
    "Mas un erudito les encauzó",
    "Por las reverenciadas magnas sendas",
    "Y a los pueblos condenados unió",
    "Destruyó el Fornite, y cogió las riendas",
    "Contra el portador de luz batalló",
    "Y sus hazañas se hicieron leyendas",
    "Mear pa dentro",
    "Cagar pa dentro",
    "Eyacular pa dentro",
    "Vomitar pa dentro",
    "Excreción",
    "Destrucción",
    "Apocalipsis gastrointestinal",
    "Unha meiga malvada",
    "Custodia a ponte",
    "É má",
    "Lanza pocións más ós transeúntes",
    "E é xitana",
    "E é",
    "Xitana",
    "Unha meiga malvada custodia a ponte e asalta ás xentes",
    "Un mostro colosal",
    "Vive nas montañas",
    "Nunha cova",
    "Esta triste siempre",
    "Está siempre triste",
    "Chora á lúa",
    "Ninguén sabe o porqué",
    "É un cabronazo",
    "Vint i cinc de desembre",
    "Santa Claus es proxeneta",
    "Te penetra analmente",
    "Navidad, navidad",
    "Vint i cinc de desembre",
    "Fum fum fum",
    "Santa Claus es proxeneta",
    "Te penetra analmente",
    "Brigada Ecoterrista Groenlandesa Independentista de Noise",
    "Orina",
    "Calentita",
    "Como dentro del culo",
    "Carepicha hijueputa",
    "De Stephen Hawking",
    "Orina calentita",
    "Escucha",
    "Mi nuevo",
    "Ukelele",
    "Es de oro",
    "Y de sangre",
    "Escucha mi nuevo ukelele",
    "En el desierto",
    "Viven las tribus",
    "Te van a robar violar y matar",
    "Si no tienes cuidado",
    "Y tienen doce patas",
    "Así que ten cuidado",
    "Mientras vayas por el desierto",
    "Pavlov y los perros",
    "Pavlov y los putos perros",
    "Conductivismo",
    "Me cago en Pavlov",
    "Me cago en los perros",
    "Pavlov y los perros de mierda",
    "Hubiérose antaño",
    "Interfaz disfuncional",
    "De ermitaño propiedad",
    "Y sonido infernal",
    "Nárrase en mitos y leyendas",
    "Que un dia a la vida volverá",
    "Y el sabio por las magnas sendas",
    "Triunfante la alpaca seguirá",
    "Kazajistán greatest country in the world",
    "uranio",
    "Destruir fetos",
    "Está bien",
    "Si la madre no los quiere",
    "Para que vivirlos",
    "Legaliza",
    "El aborto",
    "Destruir fetos esta de puta madre",
    "Des",
    "Pa",
    "Cito",
    "Gonorrea",
    "Anal",
    "Apresteza",
    "Subcontinente",
    "Indio",
    "Disputa territorial",
    "Mao Zedong maricon",
    "Me cago en la puta india",
    "En el mar",
    "Hay ballenas",
    "Que vuelan",
    "Son espaciales",
    "Y comen",
    "Zooplancton",
    "Hay mucho más",
    "En el mar azul",
    "En el bosque",
    "Había un Mercader",
    "Que tenía",
    "La alpaca",
    "Dorada",
    "Y la perdió",
    "Por maricón",
    "El mercader se llamaba lucriano",
    "Why can't we be sober",
    "Spiral out",
    "Keep going",
    "Spiral Out",
    "Keep going",
    "Fibonacci",
    "Judith",
    "Ojetelateralus",
    "El tiempo",
    "Ha sido",
    "Destruido",
    "El imperio",
    "Ha caído",
    "Ya no hay tiempo",
    "En la noche",
    "De Arabia",
    "Hay estrellas rojas",
    "Que dan luz",
    "Roja",
    "Me cago en las estrellas rojas",
]

let combinations = [
    ["rrrr", "rrrr"],
    ["arrr", "arrr"],
    ["rrra", "rrra"],
    ["arra", "arra"],
    ["abrr", "abrr"],
    ["rrab", "rrab"],
    ["abcd", "abcd"],
    ["aaaa", "aaaa"],
    ["aaaa", "bbbb"],
    ["rrr", "rrr"],
    ["arr", "arr"],
    ["rra", "rra"],
    ["ara", "ara"],
    ["abc", "abc"],
    ["aaa", "aaa"],
    ["aaa", "bbb"],
    ["rrrr", "rrrr", "rrrr"],
    ["arrr", "arrr", "arrr"],
    ["rrra", "rrra", "rrra"],
    ["arra", "arra", "arra"],
    ["abrr", "abrr", "abrr"],
    ["rrab", "rrab", "rrab"],
    ["abcd", "abcd", "abcd"],
    ["aaaa", "aaaa", "aaaa"],
    ["aaaa", "bbbb", "aaaa"],
    ["aaaa", "bbbb", "cccc"],
    ["rrr", "rrr", "rrr"],
    ["arr", "arr", "arr"],
    ["rra", "rra", "rra"],
    ["ara", "ara", "ara"],
    ["abc", "abc", "abc"],
    
]

let getRandLine = () => lyrics[Math.floor(Math.random() * lyrics.length)];
let getRandComb = () => combinations[Math.floor(Math.random() * combinations.length)];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function makeLyrics() {
    let randomComb = getRandComb();
    let rV;
    let aV = getRandLine();
    let bV = getRandLine();
    let cV = getRandLine();
    let dV = getRandLine();
    let lyricsText = []

    for (let e = 0; e < randomComb.length; e++) {
        for (let v = 0; v < randomComb[e].length; v++) {
            switch (randomComb[e][v]) {
                case 'r':
                    rV = getRandLine();
                    lyricsText.push(rV);
                    break;
                case 'a':
                    lyricsText.push(aV);
                    break;
                case 'b':
                    lyricsText.push(bV);
                    break;
                case 'c':
                    lyricsText.push(cV);
                    break;
                case 'd':
                    lyricsText.push(dV);
                    break;
            }
        }
        lyricsText.push("           ");
    }
    return lyricsText;
}

function renderLyrics(lyricsText) {
    document.getElementById("NOISE").innerHTML = lyricsText.join("<br>");
}

function makeNoise() {
    
    lyricsFinal = makeLyrics();
    renderLyrics(lyricsFinal)
    console.log("aaa")
}
