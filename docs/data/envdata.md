<style>
.copy-list {
    max-height: 525px;
    overflow-y: auto;
    padding: 1em;
    border: 1px solid #ccc;
    border-color: rgb(141, 146, 255);
    border-radius: 8px;

    overscroll-behavior-y: contain;
}


.copy-link {
  display: block;
  margin-bottom: 0.5em;
  transition: transform 0.2s ease;
}

.copy-link:hover {
    transform: scale(1.005)
}


.action-link {
  display: none;
  margin-bottom: 0.5em;
  transition: transform 0.2s ease;
}

.action-link:hover {
    transform: scale(1.005)
}



#copy-status {
  padding: 0.5em 1em;
  border-radius: 6px;
  color:rgb(141, 146, 255);
  display: none;
}
</style>

# Environment Data
A directory housing extensive BeatSaber Environment information

## Select your environment

First, click on your desired environment from the list. <br>Then, download the file or view basic environment information below the list.


> NOTE: 1.43.0 is the only sampled version for EnvData.

<div class="copy-list">
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'BTS'); return false;">BTS</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'BigMirror'); return false;">BigMirror</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'Billie'); return false;">Billie</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'Britney'); return false;">Britney</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'Coldplay'); return false;">Coldplay</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'Collider'); return false;">Collider</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'CrabRave'); return false;">CrabRave</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'DaftPunk'); return false;">DaftPunk</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'Default'); return false;">TheFirst (Default)</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'Dragons2'); return false;">Dragons2</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'Dragons'); return false;">Dragons</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'EDM'); return false;">EDM</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'FitBeat'); return false;">FitBeat</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'Gaga'); return false;">Gaga</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'GlassDesert'); return false;">GlassDesert</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'GreenDay'); return false;">GreenDay</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'GreenDayGrenade'); return false;">GreenDayGrenade</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'Grid'); return false;">Cube (Grid)</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'Halloween'); return false;">Halloween</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'Halloween2'); return false;">Halloween2</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'HipHop'); return false;">HipHopMixtape</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'Interscope'); return false;">Interscope</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'KDA'); return false;">KDA</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'Kaleidoscope'); return false;">Kaleidoscope</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'Lattice'); return false;">Lattice</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'LinkinPark'); return false;">LinkinPark</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'LinkinPark2'); return false;">LinkinPark2</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'Lizzo'); return false;">Lizzo</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'Metallica'); return false;">Metallica</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'Monstercat'); return false;">Monstercat</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'Monstercat2'); return false;">Monstercat2</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'Nice'); return false;">Nice</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'Origins'); return false;">Origins</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'Panic'); return false;">Panic</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'Panic2'); return false;">Panic2</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'Prodigy'); return false;">Prodigy</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'Pyro'); return false;">Pyro</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'Queen'); return false;">Queen</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'RockMixtape'); return false;">RockMixtape</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'Rocket'); return false;">Rocket</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'Skrillex'); return false;">Skrillex</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'TheRollingStones'); return false;">RollingStones</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'TheSecond'); return false;">TheSecond</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'TheWeeknd'); return false;">TheWeeknd</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'Timbaland'); return false;">Timbaland</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'Triangle'); return false;">Triangle</a>
      <a class="copy-link" href="#" onclick="setEnvDataParameters('1.43.0', 'Weave'); return false;">Weave</a>
      
    </div>

<a class="action-link" id="dlEnvData" href="#" onclick="downloadFromGithub(); return false;">Download EnvData</a>

<a class="action-link" id="viewEnvData" href="#" onclick="OpenEnvUtilityWindow(); return false;">View EnvData</a>

<hr>

??? info "Supported Components"
    Most objects will contain a Transform component.

    Please note this is a full list of every single component thats included, you will not need 95% of these.

    ### Unity

    * BoxCollider
    * CapsuleCollider
    * MeshCollider
    * SphereCollider
    * Animation
    * Animator
    * ArticulationBody
    * MeshFilter
    * MeshRenderer
    * ParticleSystem
    * RigidBody
    * SpringJoint
    * SpriteRenderer
    * Transform

    ### Light

    * ColorArrayLightWithIds
    * DirectionalLightWithId
    * DirectionalLightWithIds
    * DirectionalLightWithLightGroupIds
    * GlobalShaderColorLightWithIds
    * InstancedMaterialLightWithId
    * LightmapLightsWithIds
    * LightmapLightWithIds
    * MaterialLightWithId
    * MaterialLightWithIds
    * ParticleSystemLightWithId
    * PointLight
    * PointLightWithIds
    * RectangleFakeGlowLightWithLightId
    * SpriteArrayLightWithId
    * SpriteLightWithId
    * TubeBloomPrePassLightWithId
    * LightManager
    * LightWithIdManager
    * DirectionalLight
    * Parametric3SliceSpriteController
    * ParametricBoxController
    * RectangleFakeGlow
    * TubeBloomPrePassLight

    ### BloomFog

    * BloomPrePassBackgroundColorsGradientElementWithLightId
    * BloomPrePassBackgroundColorsGradientTintColorWithLightId
    * BloomPrePassBackgroundColorsGradientTintColorWithLightIds
    * BloomPrePassBackgroundLightWithId
    * BloomPrePassBackgroundColor
    * BloomPrePassBackgroundColorsGradient
    * BloomPrePassBackgroundColorsGradientFromColorSchemeColors
    * BloomPrePassBackgroundGradient
    * BloomPrePassBackgroundNonLightInstancedGroupRenderer
    * BloomPrePassBackgroundNonLightRenderer
    * BloomPrePassBackgroundNonLightRendererCore
    * BloomPrePassBackgroundParticleSystemRenderer
    * BloomPrePassBackgroundSpriteRenderer
    * BloomPrePassNonLightPass

    ### Effects

    * FloatFxGroupEffectManager
    * LightColorGroupEffectManager
    * LightRotationGroupEffectManager
    * LightTranslationGroupEffectManager
    * TriggerFloatFxGroupEffectManager
    * TrackLaneRingsPositionStepEffectSpawner
    * TrackLaneRingsRotationEffectSpawner
    * BurstFireEffect
    * ContinuousFireEffect
    * FloatFxGroupEffect
    * HydraulicCarJumpEffect
    * HydraulicCarSuspensionEffect
    * LightColorGroupEffect
    * LightRotationGroupEffect
    * TrackLaneRingsRotationEffect
    * TriggerFloatFxGroupEffect
    * TubeBloomPrePassLightCollisionEffect
    * TubeBloomPrePassLightReflectionEffect


    ### Event Effects

    * BackgroundTextureGradientSwitchEventEffect
    * ColliderEventEffect
    * GameObjectIntSwitchEventEffect
    * GameObjectSwitchEventEffect
    * LightPairRotationEventEffect
    * LightPairSinMoveEventEffect
    * LightSwitchEventEffect
    * LightRotationEventEffect
    * MeshRendererSwitchEventEffect
    * MovementBeatmapEventEffect
    * ParticleSystemContinuousEventEffect
    * ParticleSystemEmitEventEffect
    * ParticleSystemEventEffect
    * PhysicsPositionsMovementEventEffect
    * SmoothStepPositionEventEffect
    * SmoothStepPositionGroupEventEffect
    * TextureIntSwitchEventEffect


    ### Groups

    * AlphaFloatFxGroupEffectTarget
    * CombineGroupIdToVector4FloatFxGroupEffectTarget
    * FloatArrayMaterialPropertyEffectTarget
    * FloatFxGroupEffectCollectionTarget
    * FloatLocalScaleEffect
    * FloatMaterialPropertyEffectTarget
    * FloatSDFPointScaleEffect
    * FloatTextureProcessor3DMappingFloatEffectTarget
    * FloatTextureProcessor3DMappingVectorEffectTarget
    * FloatTextureProcessor3DMaterialSwitchEffectTarget
    * FloatTextureProcessor3DParameterEffectTarget
    * FloatTextureProcessor3DPresetEffectTarget
    * MoveInDirectionEffect
    * Parametric3SliceSpriteWidthEndFloatFxEffectTarget
    * SpectrogramMultiplierFloatFxEffectTarget
    * StepFloatMaterialPropertyEffectTarget
    * SwitchGameObjectArrayEffectTarget
    * SwitchGameObjectEffectTarget
    * VertexDisplacementFloatFxGroupEffectTarget
    * FloatFxGroup
    * LightColorGroup
    * LightGroupCircularLayouter
    * LightRotationGroup
    * LightTranslationGroup

    ### MaterialPropertyBlock

    * MaterialPropertyBlockColorSetter
    * MaterialPropertyBlockController
    * MaterialPropertyBlockControllerArrayRandomValueSetter
    * MaterialPropertyBlockControllerRandomValueSetter
    * MaterialPropertyBlockPositionUpdater
    * MaterialPropertyBlockRandomValueSetter

    ### Other

    * BakedLightsNormalizer
    * BakedReflectionProbe
    * CopyPosition
    * CustomBoundingBox
    * EnableRendererWithLightId
    * EnvironmentBrandingManager
    * Mirror
    * ObjectMesh
    * SDFArrayManager
    * SDFPoint
    * Spectrogram
    * SpectrogramRowPropertyAnimator
    * TextureProcessor3D
    * TrackLaneRing
    * TrackLaneRingsManager
    * TransformSpectrogram
<hr>

## PAQ
Lets call this one "Potentially-Asked-Questions" because this just came public..
??? info "WHAT IS THIS?"
    "Environment Data" (Pending revolutionary rebranding) is a JSON file similar to chroma logs, but contains significantly more information.
    
    Have you ever wanted the position or rotation of a specific gameobject? 

    <hr>

    Each environment here is represented as a JSON file.
    <br> It consists of:

    **Environment Data** <br> : (Environment titles, colorScheme, fog parameters, sizeData, lightTracks, uniqueMaterials, and uniqueMeshes)

    **Object Data** <br> :  (Name, Chroma ID, activeSelf, layer, and a select-list of components)

    (Every object also has an instanceId)

    <hr>

    !!! example "EnvironmentData Schema"
        ```json
        {
          "environmentData": {
            "environmentTitle": "The First", // The name you see in-game
            "environmentId": "DefaultEnvironment", // The internal / json name
            "colorScheme": {
              "colorLeft": [float,float,float],
              "colorRight": [float,float,float],
              "envColorLeft": [float,float,float],
              "envColorRight": [float,float,float],
              "envColorWhite": [float,float,float],
              "obstacleColor": [float,float,float],
              "envColorLeftBoost": [float,float,float],
              "envColorRightBoost": [float,float,float],
              "envColorWhiteBoost": [float,float,float]
            },
            "fogParams": { // Default fog parameters for the environment
              "offset": float,
              "height": float,
              "startY": float,
              "attenuation": float,
              "autoExposureLimit": float,
            },
            "sizeData": { // Irrelevant
              "floorType": "",
              "ceilingType": "",
              "trackLaneType": ""
            },
            "lightTracks": { // Irrelevant
              "eventTracks": {},
              "groupPages": {}
            },
            "uniqueMaterials": [
              {
                "hash": "",
                "name": "",
                "shader": "",
                "color": [float,float,float,float],
                "enabledShaderKeywords": [string[]], // All enabled shader keywords on the material
                "shaderProperties": {} // Every shader property value specific to the material
              }
            ],
            "uniqueMeshes": [
              {
                "name": "",
                "hash": "",
                "boundsSize": [float,float,float],
                "boundsCenter": [float,float,float]
              }
            ]
          },
          "objects": [
            {
              "name": "GameObject Name",
              "id": "ChromaID",
              "activeSelf": bool, // If the object is active or not
              "layer": "", // The Unity object layer
              "components": {
                "Transform": {
                  "position": [float,float,float],
                  "localPosition": [float,float,float],
                  "rotation": [float,float,float],
                  "localRotation": [float,float,float],
                  "scale": [float,float,float]
                },
                "OtherComponent": {}
              }
            }
          ]
        }
        ```

        > Unfortunately, you will have to develop your own parser for the time being. <br> An API oroviding clean usage of this data inside of a script is still under development.
<hr>

??? warning "Download buttons dont work?"
    If the download button doesn't work for you, please refer to the [chroodle repository](https://github.com/UGEcko/Chroodle/tree/main/EnvironmentData) on github where the files are sourced from