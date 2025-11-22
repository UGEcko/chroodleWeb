# Reference Tables

A page to reference various 

## Geometry Reference Table

| Primitives | Shaders |
| :----------: | :-------: |
| Sphere     | Standard
| Capsule    | OpaqueLight
| Cylinder   | TransparentLight
| Cube       | BaseWater
| Plane      | BillieWater
| Quad       | BTSPillar
| Triangle   | InterscopeConcrete
|            | Interscope Car
|            | Obstacle (Broken)
|            | WaterfallMirror

<hr>

## Conversion Ratios

### Unity Units to Noodle Units

1 meter (Unity Unit) => 0.6 meters (Noodle Unit)

??? info "Why?"
    Because Noodle Extensions focuses on manipulation of gameplay objects like notes, **the mod uses the width of a lane (0.6 meters) on the grid as 1 unit**.<br>This makes gameplay mods like note animations easier, as shifting a note to the left 1 unit would keep it in line with the grid.
    > This is why `offsetPosition` exists, to *offset* the gameplay object from the note grid.

    Environment Objects (Including the player) are normal Unity objects, so they use the normal 1 meter unit.

To Noodle: `xyz * 0.6`

To Unity (Environment/Player): `xyz / 0.6`


## Heck Modifier Operations

* `opNone`
* `opAdd`
* `opSub`
* `opMul`
* `opDiv`

## Heck Base Properties

### Player

#### Head
* `baseHeadPosition` [x, y, z] - Players headset position in world space 
* `baseHeadLocalPosition` [x, y, z] - Players headset position in local space
* `baseHeadRotation` [x, y, z] - Players headset rotation in world space
* `baseHeadLocalRotation` [x, y, z] - Players headset rotation in local space
* `baseHeadLocalScale` [x, y, z] - Players headset scale

#### Hands
* `baseLeftHandPosition` [x, y, z] - Players Left Hand position in world space
* `baseLeftHandLocalPosition` [x, y, z] - Players Left Hand position in local space
* `baseLeftHandRotation` [x, y, z] - Players Left Hand rotation in world space
* `baseLeftHandLocalRotation` [x, y, z] - Players Left Hand rotation in world space
* `baseLeftHandLocalScale` [x, y, z] - Players Left Hand scale
* `baseRightHandPosition` [x, y, z] - Players Right Hand position in world space
* `baseRightHandLocalPosition` [x, y, z] - Players Right Hand position in local space
* `baseRightHandRotation` [x, y, z] - Players Right Hand rotation in world space
* `baseRightHandLocalRotation` [x, y, z] - Players Right Hand rotation in world space
* `baseRightHandLocalScale` [x, y, z] - Players Right Hand scale

### Colors
> These will return your maps colors. Although if the player has these values overidden, those will be returned instead.

* `baseNote0Color` [x, y, z, w] - Left/Red note color
* `baseNote1Color` [x, y, z, w] - Right/Blue note color
* `baseObstaclesColor` [x, y, z, w] - Wall color
* `baseSaberAColor` [x, y, z, w] - Left/Red saber color
* `baseSaberBColor` [x, y, z, w] - Right/Blue saber color
* `baseEnvironmentColor0` [x, y, z, w] - Left/Red light color
* `baseEnvironmentColor1` [x, y, z, w] - Right/Blue light color
* `baseEnvironmentColorW` [x, y, z, w] - White light color
* `baseEnvironmentColor0Boost` [x, y, z, w] - Left/Red light boost color
* `baseEnvironmentColor1Boost` [x, y, z, w] - Right/Blue light boost color
* `baseEnvironmentColorWBoost` [x, y, z, w] - White light boost color

### Scoring

* `baseCombo` [x] - Players combo
* `baseMultipliedScore` [x] - Players score (Ranges from 0 - infinity)
* `baseImmediateMaxPossibleMultipliedScore` [x] - Max possible score if all notes were hit perfectly up to the current time in the map
* `baseModifiedScore` [x] - Players score multiplied by gameplay modifiers (Ghost notes, fast song, etc..)
* `baseImmediateMaxPossibleModifiedScore` [x] - Immediate max possible score
* `baseRelativeScore` [x] - Players score percentage (Ranges from 0 - 1)
* `baseMultiplier` [x] - Players Multiplier (1,2,4,8)
* `baseEnergy` [x] - Players Energy (Ranges from 0 - 1)
* `baseSongTime` [x] - Current time in the map (seconds)
* `baseSongLength` [x] - Length of the map (seconds)

## Smoothing
Smoothing uses the `.s[x]` syntax after defining the base property. (Ex: `.s69`)

Lower values (like 5) smooth values **more** compared to higher values (like 25).

Decimals (like a smooth factor of 6.9) are represented as underscores. Ex: `s.6_9`