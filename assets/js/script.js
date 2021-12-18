const takeMeUsuless = document.querySelector(".take-me-usuless");
const takeMeRelaxing = document.querySelector(".take-me-relaxing");

// usuless websites list from "The Usuless Web" - https://github.com/soops/the-useless-web
const usulessWebsites = [
    "http://heeeeeeeey.com/",
    "http://thatsthefinger.com/",
    "http://cant-not-tweet-this.com/",
    "http://eelslap.com/",
    "http://www.staggeringbeauty.com/",
    "http://burymewithmymoney.com/",
    "http://www.fallingfalling.com/",
    "http://ducksarethebest.com/",
    "http://www.trypap.com/",
    "http://www.republiquedesmangues.fr/",
    "http://www.movenowthinklater.com/",
    "http://www.partridgegetslucky.com/",
    "http://www.rrrgggbbb.com/",
    "http://beesbeesbees.com/",
    "http://www.sanger.dk/",
    "http://www.koalastothemax.com/",
    "http://www.everydayim.com/",
    "http://www.leduchamp.com/",
    "http://grandpanoclothes.com/",
    "http://www.haneke.net/",
    "http://randomcolour.com/",
    "http://cat-bounce.com/",
    "http://cachemonet.com/",
    "http://www.sadforjapan.com/",
    "http://chrismckenzie.com/",
    "http://hasthelargehadroncolliderdestroyedtheworldyet.com/",
    "http://ninjaflex.com/",
    "http://iloveyoulikeafatladylovesapples.com/",
    "http://ihasabucket.com/",
    "http://corndogoncorndog.com/",
    "http://giantbatfarts.com/",
    "http://www.pointerpointer.com/",
    "http://imaninja.com/",
    "http://willthefuturebeaweso.me/",
    "http://salmonofcapistrano.com/",
    "http://www.ismycomputeron.com/",
    "http://www.wwwdotcom.com/",
    "http://www.nullingthevoid.com/",
    "http://www.muchbetterthanthis.com/",
    "http://www.ouaismaisbon.ch/",
    "http://iamawesome.com/",
    "http://www.pleaselike.com/",
    "http://crouton.net/",
    "http://corgiorgy.com/",
    "http://www.electricboogiewoogie.com/",
    "http://www.nelson-haha.com/",
    "http://www.wutdafuk.com/",
    "http://unicodesnowmanforyou.com/",
    "http://tencents.info/",
    "http://intotime.com/",
    "http://minecraftstal.com/",
    "http://www.patience-is-a-virtue.org/",
    "http://whitetrash.nl/",
    "http://www.theendofreason.com/",
    "http://zombo.com",
    "http://secretsfornicotine.com/",
    "http://pixelsfighting.com/",
    "http://crapo.la/",
    "http://baconsizzling.com/",
    "http://isitwhite.com/",
    "http://noot.space/",
    "http://tomsdog.com/",
    "http://hardcoreprawnlawn.com/",
    "http://www.omfgdogs.com/",
];

const relaxingWebsites = [
    "https://mynoise.net/",
    "https://rainymood.com/",
    "https://raining.fm/",
    "http://weavesilk.com/",
    "https://asoftmurmur.com/",
    "https://musiclab.chromeexperiments.com/Song-Maker/",
    "https://www.freetetris.org/game.php",
    "https://www.incredibox.com/demo/v2",
    "https://quickdraw.withgoogle.com/"
];

takeMeUsuless.addEventListener("click", e => {
    e.preventDefault();
    window.open(usulessWebsites[Math.floor(Math.random() * usulessWebsites.length)]);
});

takeMeRelaxing.addEventListener("click", e => {
    e.preventDefault();
    window.open(relaxingWebsites[Math.floor(Math.random() * relaxingWebsites.length)]);
});

