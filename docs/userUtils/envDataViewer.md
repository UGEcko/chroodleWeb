<script>
  document.addEventListener("DOMContentLoaded", function() {
    const p = readParams();

    jsonFromGithub(p.ver,p.env)
    .then(data => {
            if (data) displayData(data);
    });

  });

  function readParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const env = urlParams.get('env');
    const version = urlParams.get('ver');

    return {env: env, ver: version};
  }

  function jsonFromGithub(version, env) {
    return fetch(`https://raw.githubusercontent.com/UGEcko/Chroodle/refs/heads/main/EnvironmentData/${version}/EnvInfo_${env}Environment.json`)
        .then(response => {
          if (!response.ok) throw new Error("Failed to fetch JSON");
          return response.json();
        })
        .catch(err => {
          alert('Download failed.');
          console.error(err);
        });
    }

  function to255(rgb) {
    return `${rgb[0] * 255}, ${rgb[1] * 255}, ${rgb[2] * 255}`;
  }

  function displayData(data) {
    const titleData = JSON.stringify(data.environmentData.environmentTitle, null, 2) || "unsupported";
    const idData = JSON.stringify(data.environmentData.environmentId, null, 2) || "unsupported";

    // Color
    const colorObj = data.environmentData.colorScheme;
    const leftColor = colorObj.colorLeft;
    const rightColor = colorObj.colorRight;
    const leftEnvColor = colorObj.envColorLeft;
    const rightEnvColor = colorObj.envColorRight;
    const obstacleColor = colorObj.obstacleColor;
    const leftEnvBoostColor = colorObj.envColorLeftBoost;
    const rightEnvBoostColor = colorObj.envColorRightBoost;

    // Set the text and colors
    document.getElementById("env-d-envColorScheme-lc").innerHTML = `<br> Left Note Color : ${JSON.stringify(leftColor, null, 2)}`;
    document.getElementById("lcColor").style.backgroundColor = `rgb(${to255(leftColor)})`;

    document.getElementById("env-d-envColorScheme-rc").innerHTML = `<br> Right Note Color : ${JSON.stringify(rightColor, null, 2)}`;
    document.getElementById("rcColor").style.backgroundColor = `rgb(${to255(rightColor)})`;

    document.getElementById("env-d-envColorScheme-lec").innerHTML = `<br> Left Light Color : ${JSON.stringify(leftEnvColor, null, 2)}`;
    document.getElementById("lecColor").style.backgroundColor = `rgb(${to255(leftEnvColor)})`;

    document.getElementById("env-d-envColorScheme-rec").innerHTML = `<br> Right Light Color : ${JSON.stringify(rightEnvColor, null, 2)}`;
    document.getElementById("recColor").style.backgroundColor = `rgb(${to255(rightEnvColor)})`;

    document.getElementById("env-d-envColorScheme-oc").innerHTML = `<br> Obstacle Color : ${JSON.stringify(obstacleColor, null, 2)}`;
    document.getElementById("ocColor").style.backgroundColor = `rgb(${to255(obstacleColor)})`;
    
    document.getElementById("env-d-envColorScheme-lebc").innerHTML = `<br> Left Light Boost Color : ${JSON.stringify(leftEnvBoostColor, null, 2)}`;
    document.getElementById("lebcColor").style.backgroundColor = `rgb(${to255(leftEnvBoostColor)})`;

    document.getElementById("env-d-envColorScheme-rebc").innerHTML = `<br> Right Light Boost Color : ${JSON.stringify(rightEnvBoostColor, null, 2)}`;
    document.getElementById("rebcColor").style.backgroundColor = `rgb(${to255(rightEnvBoostColor)})`;
    
    // Fog
    const fogObj = data.environmentData.fogParams;
    const attenuation = `<br> attenuation : ${JSON.stringify(fogObj.attenuation, null, 2)}`;
    const offset = `<br> offset : ${JSON.stringify(fogObj.offset, null, 2)}`;
    const height = `<br> height : ${JSON.stringify(fogObj.height, null, 2)}`;
    const startY = `<br> startY : ${JSON.stringify(fogObj.startY, null, 2)}`;

    document.getElementById("env-d-envTitle").innerHTML += ` : ${titleData}`;
    document.getElementById("env-d-envId").innerHTML += ` : ${idData}`;
    document.getElementById("env-d-fogParams").innerHTML += ` <br> ${attenuation} <br> ${offset} <br> ${height} <br> ${startY} <br> `;
  }
</script>


<style>
.color-box {
  width: 700px;
  height: 10px;
  border-radius: 5px;
  margin: 0 auto;
  margin-right: 8px;
}

.copy-code {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  opacity: 0.75;
  display: inline-block;
  transition: opacity 0.3s ease;
  transition: transform 0.35s ease-out;
}

.copy-code:hover {
  opacity: 1;
  transform: scale(1.1);
}
</style>


# Environment Data Viewer (WIP)

<div id="env-d" style="background: #1a1a1aff; padding: 1em; border-radius: 6px; width: 750px; text-align: center;">

<div id="env-d-envTitle"><b>Environment Title</b></div>

<hr>

<div id="env-d-envId"><b>Environment ID</b></div>

<hr>

<div id="env-d-envColorScheme">
<b>Environment Color Scheme (RGB)</b>
<br>

<div id="env-d-envColorScheme-lc">Loading...</div>

<div class="color-box" id="lcColor" style ="background-color: rgb(100,100,100);"></div>

<div id = "env-d-envColorScheme-rc">Loading...</div>

<div class="color-box" id="rcColor" style ="background-color: rgb(100,100,100);"></div>

<div id = "env-d-envColorScheme-lec">Loading...</div>

<div class="color-box" id="lecColor" style ="background-color: rgb(100,100,100);"></div>

<div id = "env-d-envColorScheme-rec">Loading...</div>

<div class="color-box" id="recColor" style ="background-color: rgb(100,100,100);"></div>

<div id = "env-d-envColorScheme-oc">Loading...</div>

<div class="color-box" id="ocColor" style ="background-color: rgb(100,100,100);"></div>

<div id = "env-d-envColorScheme-lebc">Loading...</div>

<div class="color-box" id="lebcColor" style ="background-color: rgb(100,100,100);"></div>

<div id = "env-d-envColorScheme-rebc">Loading...</div>

<div class="color-box" id="rebcColor" style ="background-color: rgb(100,100,100);"></div>

</div>

<hr>

<div id="env-d-fogParams"><b>Environment Default Fog Parameters</b></div>

</div>