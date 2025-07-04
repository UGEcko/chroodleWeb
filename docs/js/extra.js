function copyChromaGit(el, version, environment) {
    var lnk = createGitLink(version, environment);
    console.log("Finding: " + lnk);
    fetch(lnk)
      .then(response => response.text())
      .then(text => {
        navigator.clipboard.writeText(text).then(() => {
          document.getElementById('copy-status').textContent = "Latest copy: " +  environment + "Environment | " + version;
        });

        el.classList.remove('beat');
        void el.offsetWidth;
        el.classList.add('beat');
      })
      .catch(err => {
        alert("Failed to fetch file");
        console.error(err);
      });
}

function createGitLink(version, env) {
    // ex: https://raw.githubusercontent.com/UGEcko/Chroodle/refs/heads/main/ChromaLogs/1.29.1/Group%20Lighting/RockMixtapeEnvironment.log
    var strVer = "V2"
    if (v3Envs.includes(env)) {
        strVer = "Group%20Lighting"
    }
    return `https://raw.githubusercontent.com/UGEcko/Chroodle/refs/heads/main/ChromaLogs/${version}/${strVer}/${env}Environment.log`
}

const v2Envs = [
    "Default",
    "Triangle",
    "Nice",
    "BigMirror",
    "KDA",
    "Monstercat",
    "CrabRave",
    "Dragons",
    "Origins",
    "Panic",
    "Rocket",
    "GreenDay",
    "GreenDayGrenade",
    "Timbaland",
    "FitBeat",
    "LinkinPark",
    "BTS",
    "Kaleidoscope",
    "Interscope",
    "Skrillex",
    "Billie",
    "Halloween",
    "Gaga"
]

const v3Envs = [
    "Weave",
    "Pyro",
    "EDM",
    "TheSecond",
    "Lizzo",
    "TheWeeknd",
    "RockMixtape",
    "Dragons2",
    "Panic2",
    "Queen",
    "LinkinPark2",
    "TheRollingStones",
    "Lattice",
    "DaftPunk",
    "HipHop",
    "Collider",
    "Britney",
    "Monstercat2",
    "Metallica"
]


// Environment Data


// Man why does this have to be so complicated??????????

function downloadFromGithub(version, env) {
    fetch(`https://raw.githubusercontent.com/UGEcko/Chroodle/refs/heads/main/EnvironmentData/${version}/EnvInfo_${env}.json`)
      .then(response => response.blob())
      .then(blob => {
        const filename = `EnvInfo_${env}_${version}.json`
        const blobURL = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobURL;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobURL);

        document.getElementById('copy-status').textContent = "Latest download: EnvData for " +  env + " on Version " + version;
      })
      .catch(err => {
        alert('Download failed');
        console.error(err);
      });
}