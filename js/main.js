// Menu
function showMenu(){
    let menu = document.querySelector("nav.menu");
    menu.classList.toggle("show");

    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible")
}

// Sliders
var space_marineSlides = document.querySelectorAll('#space-marines-slider .slide');
var space_marineCurrent = 0;

function moveSpaceMarines(direction) {
    space_marineSlides[space_marineCurrent].classList.remove('active');
    space_marineCurrent = (space_marineCurrent + direction + space_marineSlides.length) % space_marineSlides.length;
    space_marineSlides[space_marineCurrent].classList.add('active');
}

// --- Black Templars ---
var black_templarsSlides = document.querySelectorAll('#black-templars-slider .slide');
var black_templarsCurrent = 0;
function moveBlackTemplars(direction) {
    black_templarsSlides[black_templarsCurrent].classList.remove('active');
    black_templarsCurrent = (black_templarsCurrent + direction + black_templarsSlides.length) % black_templarsSlides.length;
    black_templarsSlides[black_templarsCurrent].classList.add('active');
}

// --- Blood Angels ---
var blood_angelsSlides = document.querySelectorAll('#blood-angels-slider .slide');
var blood_angelsCurrent = 0;
function moveBloodAngels(direction) {
    blood_angelsSlides[blood_angelsCurrent].classList.remove('active');
    blood_angelsCurrent = (blood_angelsCurrent + direction + blood_angelsSlides.length) % blood_angelsSlides.length;
    blood_angelsSlides[blood_angelsCurrent].classList.add('active');
}

// --- Dark Angels ---
var dark_angelsSlides = document.querySelectorAll('#dark-angels-slider .slide');
var dark_angelsCurrent = 0;
function moveDarkAngels(direction) {
    dark_angelsSlides[dark_angelsCurrent].classList.remove('active');
    dark_angelsCurrent = (dark_angelsCurrent + direction + dark_angelsSlides.length) % dark_angelsSlides.length;
    dark_angelsSlides[dark_angelsCurrent].classList.add('active');
}

// --- Grey Knights ---
var grey_knightsSlides = document.querySelectorAll('#grey-knights-slider .slide');
var grey_knightsCurrent = 0;
function moveGreyKnights(direction) {
    grey_knightsSlides[grey_knightsCurrent].classList.remove('active');
    grey_knightsCurrent = (grey_knightsCurrent + direction + grey_knightsSlides.length) % grey_knightsSlides.length;
    grey_knightsSlides[grey_knightsCurrent].classList.add('active');
}

// --- Space Wolves ---
var space_wolvesSlides = document.querySelectorAll('#space-wolves-slider .slide');
var space_wolvesCurrent = 0;
function moveSpaceWolves(direction) {
    space_wolvesSlides[space_wolvesCurrent].classList.remove('active');
    space_wolvesCurrent = (space_wolvesCurrent + direction + space_wolvesSlides.length) % space_wolvesSlides.length;
    space_wolvesSlides[space_wolvesCurrent].classList.add('active');
}

// --- Adepta Sororitas ---
var sororitasSlides = document.querySelectorAll('#sororitas-slider .slide');
var sororitasCurrent = 0;
function moveSororitas(direction) {
    sororitasSlides[sororitasCurrent].classList.remove('active');
    sororitasCurrent = (sororitasCurrent + direction + sororitasSlides.length) % sororitasSlides.length;
    sororitasSlides[sororitasCurrent].classList.add('active');
}

// --- Adeptus Custodes ---
var custodesSlides = document.querySelectorAll('#custodes-slider .slide');
var custodesCurrent = 0;
function moveCustodes(direction) {
    custodesSlides[custodesCurrent].classList.remove('active');
    custodesCurrent = (custodesCurrent + direction + custodesSlides.length) % custodesSlides.length;
    custodesSlides[custodesCurrent].classList.add('active');
}

// --- Adeptus Mechanicus ---
var mechanicusSlides = document.querySelectorAll('#mechanicus-slider .slide');
var mechanicusCurrent = 0;
function moveMechanicus(direction) {
    mechanicusSlides[mechanicusCurrent].classList.remove('active');
    mechanicusCurrent = (mechanicusCurrent + direction + mechanicusSlides.length) % mechanicusSlides.length;
    mechanicusSlides[mechanicusCurrent].classList.add('active');
}

// --- Astra Militarum ---
var astra_militarumSlides = document.querySelectorAll('#astra-militarum-slider .slide');
var astra_militarumCurrent = 0;
function moveAstraMilitarum(direction) {
    astra_militarumSlides[astra_militarumCurrent].classList.remove('active');
    astra_militarumCurrent = (astra_militarumCurrent + direction + astra_militarumSlides.length) % astra_militarumSlides.length;
    astra_militarumSlides[astra_militarumCurrent].classList.add('active');
}

// --- Imperial Agents ---
var imperial_agentsSlides = document.querySelectorAll('#imperial-agents-slider .slide');
var imperial_agentsCurrent = 0;
function moveImperialAgents(direction) {
    imperial_agentsSlides[imperial_agentsCurrent].classList.remove('active');
    imperial_agentsCurrent = (imperial_agentsCurrent + direction + imperial_agentsSlides.length) % imperial_agentsSlides.length;
    imperial_agentsSlides[imperial_agentsCurrent].classList.add('active');
}

// --- Imperial Knights ---
var imperial_knightsSlides = document.querySelectorAll('#imperial-knights-slider .slide');
var imperial_knightsCurrent = 0;
function moveImperialKnights(direction) {
    imperial_knightsSlides[imperial_knightsCurrent].classList.remove('active');
    imperial_knightsCurrent = (imperial_knightsCurrent + direction + imperial_knightsSlides.length) % imperial_knightsSlides.length;
    imperial_knightsSlides[imperial_knightsCurrent].classList.add('active');
}

// --- Chaos Demons ---
var chaos_demonsSlides = document.querySelectorAll('#chaos-demons-slider .slide');
var chaos_demonsCurrent = 0;
function moveChaosDemons(direction) {
    chaos_demonsSlides[chaos_demonsCurrent].classList.remove('active');
    chaos_demonsCurrent = (chaos_demonsCurrent + direction + chaos_demonsSlides.length) % chaos_demonsSlides.length;
    chaos_demonsSlides[chaos_demonsCurrent].classList.add('active');
}

// --- Chaos Knights ---
var chaos_knightsSlides = document.querySelectorAll('#chaos-knights-slider .slide');
var chaos_knightsCurrent = 0;
function moveChaosKnights(direction) {
    chaos_knightsSlides[chaos_knightsCurrent].classList.remove('active');
    chaos_knightsCurrent = (chaos_knightsCurrent + direction + chaos_knightsSlides.length) % chaos_knightsSlides.length;
    chaos_knightsSlides[chaos_knightsCurrent].classList.add('active');
}

// --- Chaos Space Marines ---
var chaos_space_marinesSlides = document.querySelectorAll('#chaos-space-marines-slider .slide');
var chaos_space_marinesCurrent = 0;
function moveChaosSpaceMarines(direction) {
    chaos_space_marinesSlides[chaos_space_marinesCurrent].classList.remove('active');
    chaos_space_marinesCurrent = (chaos_space_marinesCurrent + direction + chaos_space_marinesSlides.length) % chaos_space_marinesSlides.length;
    chaos_space_marinesSlides[chaos_space_marinesCurrent].classList.add('active');
}

// --- Death Guard ---
var death_guardSlides = document.querySelectorAll('#death-guard-slider .slide');
var death_guardCurrent = 0;
function moveDeathGuard(direction) {
    death_guardSlides[death_guardCurrent].classList.remove('active');
    death_guardCurrent = (death_guardCurrent + direction + death_guardSlides.length) % death_guardSlides.length;
    death_guardSlides[death_guardCurrent].classList.add('active');
}

// --- Emperor's Children ---
var emperors_childrenSlides = document.querySelectorAll('#emperors-children-slider .slide');
var emperors_childrenCurrent = 0;
function moveEmperorsChildren(direction) {
    emperors_childrenSlides[emperors_childrenCurrent].classList.remove('active');
    emperors_childrenCurrent = (emperors_childrenCurrent + direction + emperors_childrenSlides.length) % emperors_childrenSlides.length;
    emperors_childrenSlides[emperors_childrenCurrent].classList.add('active');
}

// --- Thousand Sons ---
var thousand_sonsSlides = document.querySelectorAll('#thousand-sons-slider .slide');
var thousand_sonsCurrent = 0;
function moveThousandSons(direction) {
    thousand_sonsSlides[thousand_sonsCurrent].classList.remove('active');
    thousand_sonsCurrent = (thousand_sonsCurrent + direction + thousand_sonsSlides.length) % thousand_sonsSlides.length;
    thousand_sonsSlides[thousand_sonsCurrent].classList.add('active');
}

// --- World Eaters ---
var world_eatersSlides = document.querySelectorAll('#world-eaters-slider .slide');
var world_eatersCurrent = 0;
function moveWorldEaters(direction) {
    world_eatersSlides[world_eatersCurrent].classList.remove('active');
    world_eatersCurrent = (world_eatersCurrent + direction + world_eatersSlides.length) % world_eatersSlides.length;
    world_eatersSlides[world_eatersCurrent].classList.add('active');
}

// --- Aeldari ---
var aeldariSlides = document.querySelectorAll('#aeldari-slider .slide');
var aeldariCurrent = 0;
function moveAeldari(direction) {
    aeldariSlides[aeldariCurrent].classList.remove('active');
    aeldariCurrent = (aeldariCurrent + direction + aeldariSlides.length) % aeldariSlides.length;
    aeldariSlides[aeldariCurrent].classList.add('active');
}

// --- Genestealer Cults ---
var genestealer_cultsSlides = document.querySelectorAll('#genestealer-cults-slider .slide');
var genestealer_cultsCurrent = 0;
function moveGenestealerCults(direction) {
    genestealer_cultsSlides[genestealer_cultsCurrent].classList.remove('active');
    genestealer_cultsCurrent = (genestealer_cultsCurrent + direction + genestealer_cultsSlides.length) % genestealer_cultsSlides.length;
    genestealer_cultsSlides[genestealer_cultsCurrent].classList.add('active');
}

// --- Leagues of Votann ---
var votannSlides = document.querySelectorAll('#votann-slider .slide');
var votannCurrent = 0;
function moveVotann(direction) {
    votannSlides[votannCurrent].classList.remove('active');
    votannCurrent = (votannCurrent + direction + votannSlides.length) % votannSlides.length;
    votannSlides[votannCurrent].classList.add('active');
}

// --- Necrons ---
var necronsSlides = document.querySelectorAll('#necrons-slider .slide');
var necronsCurrent = 0;
function moveNecrons(direction) {
    necronsSlides[necronsCurrent].classList.remove('active');
    necronsCurrent = (necronsCurrent + direction + necronsSlides.length) % necronsSlides.length;
    necronsSlides[necronsCurrent].classList.add('active');
}

// --- Orks ---
var orksSlides = document.querySelectorAll('#orks-slider .slide');
var orksCurrent = 0;
function moveOrks(direction) {
    orksSlides[orksCurrent].classList.remove('active');
    orksCurrent = (orksCurrent + direction + orksSlides.length) % orksSlides.length;
    orksSlides[orksCurrent].classList.add('active');
}

// --- T'au Empire ---
var tauSlides = document.querySelectorAll('#tau-slider .slide');
var tauCurrent = 0;
function moveTau(direction) {
    tauSlides[tauCurrent].classList.remove('active');
    tauCurrent = (tauCurrent + direction + tauSlides.length) % tauSlides.length;
    tauSlides[tauCurrent].classList.add('active');
}

// --- Tyranids ---
var tyranidsSlides = document.querySelectorAll('#tyranids-slider .slide');
var tyranidsCurrent = 0;
function moveTyranids(direction) {
    tyranidsSlides[tyranidsCurrent].classList.remove('active');
    tyranidsCurrent = (tyranidsCurrent + direction + tyranidsSlides.length) % tyranidsSlides.length;
    tyranidsSlides[tyranidsCurrent].classList.add('active');
}