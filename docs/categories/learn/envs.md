# Environments
(Pending rewrite)

This page covers everything about Environments! From lighting to full-on custom environments. Even simple aspects such as Environment Removal.

## Introduction to Beatsaber Environments
Ever want to add a couple of extra lasers to an environment? Do you not like the Timbaland logo? Did you ever want to create a fully custom environment? Having environment knowledge is one of the basic skills that makes you an amazing map creator... Well, you're in luck! This page will provide as much information as your tiny or big brain can handle!

## Environment (Chroma) IDs
One of the main things you must learn when modifying environments is the basic understanding of how objects in Beatsaber can be modified. We do this by their ID. IDs are created by the Chroma mod so you can use the IDs to modify the object the ID represents, properties that you can modify are [here](https://heck.aeroluna.dev/environment/environment/#environment-enhancements).

### Chroma ID Structure
Chroma IDs may seem complicated for some at first, but rest assured they are incredibly easy to read. Here is an example with an explanation:

```BTSEnvironment.[0]Environment.[9]NarrowGameHUD.[1]LeftPanel.[0]ComboPanel.[0]ComboText```

Look at this ID. Can you tell what object this represents? Perhaps what environment this object is in? 

If you answered the BTS Environment and the "COMBO" text, you are correct! **MOST** IDs consist of the environment ID/name at the beginning and the object name at the end. Some IDs may start with `GameCore`, there doesn't seem to be a pattern of which environments have this or don't, but common ones are Timbaland, Crab Rave, Skrillex, etc. (Perhaps its older environments).
But that's not the best way to look at it.

For a deeper understanding, think about the actual object in the scene. ComboText is the child of the ComboPanel, ComboPanel is the child of LeftPanel, LeftPanel is the child of NarrowGameHUD, etc... This is how Chroma creates the IDs, by reading every single object in the environments hierarchy and assigning it a unique ID. A child object has the ID of its parent object along with its own.

To prove this works, if you set ```BTSEnvironment.[0]Environment``` active to false, everything in the environment is a child to this object so everything will be inactive. However, if you do the same for a more specific object like ```BTSEnvironment.[0]Environment.[6]PlayersPlace```, the PlayersPlace including its children will be inactive.

<hr>

## Environment Modification
In this section, you will learn how to modify an object's properties such as its transform data, set its active state, apply noodle tracks, the different types of lookup methods, and more!

For starters, let's explain the structure of the Environment array in the difficulty file (Taken from heck wiki):
```json
  "environment": [
    {
      "id": "^.*\\[\\d*[13579]\\]BigTrackLaneRing\\(Clone\\)$",
      "lookupMethod": "Regex",
      "scale": [0.1, 0.1, 0.1]
    }
  ]
```

The environment array in the difficulty file contains all environment enhancement actions. In the example above, you may see some properties (id, lookupMethod, and scale). All properties are defined in the [Environment section of the heck wiki](https://heck.aeroluna.dev/environment/environment/#adding-commands). 

This example finds the object that ID ```^.*\\[\\d*[13579]\\]BigTrackLaneRing\\(Clone\\)$``` represents using Regex, and sets its scale on all axis by 0.1.

## Lookup Methods
Lookup Methods are methods of finding an ID in a string of every single ID for the environment. [(Chroma logs are a great way to represent this process)](https://github.com/UGEcko/Chroodle/blob/main/ChromaLogs/1.29.1/V2/BTSEnvironment.log).

Below are some definitions and examples for the 5 different lookup methods using this ID: 
<br>
``GameCore.[7]PairLaserTrackLaneRing(Clone).[5]RotatingLasersPair`` 

**Regex (Regular/Rational Expression)** <br>: This method utilizes many different symbols like `$`,`*`,`\`, and more to locate patterns in the chroma logs to find what you're looking for. This has some advantages like being more future-proof compared to methods like `Exact`, and finding more than one ID at a time. You may use websites like https://regex101.com to cook up some regular expressions for IDs. | ``7]PairLaserTrackLaneRing\(Clone\).\[5]RotatingLasersPair$``

**Exact** <br>: This method behaves like the name states. Type in the exact ID to find the object. | ``GameCore.[7]PairLaserTrackLaneRing(Clone).[5]RotatingLasersPair``

**Contains** <br>: This method finds every ID that contains a specific string of text. For example, using `Environment` will result in everything being found, as every ID contains Environment. | ```[7]PairLaserTrackLaneRing(Clone).[5]RotatingLasersPair``` (Has to be specific since there are many instances of [5]RotatingLasersPair).

**StartsWith** <br>: This method compares a string of text with every ID by its starting text. A string of text with 10 characters would be compared with the first 10 characters of every single ID. | ```GameCore.[7]PairLaserTrackLaneRing(Clone).[5]```

**EndsWith** <br>: This method is exactly like StartsWith, however instead of being found by starting with a substring, it's found by the ID ending with a specific substring. | ```[7]PairLaserTrackLaneRing(Clone).[5]RotatingLasersPair```

<hr>

## Components
Ever wonder how lights get their IDs and Types.. or how some lights may have more or less bloom than others, or even how fog is controlled? Components are all behind it! (Components are fairly limited at this time to 3 components listed on the [Heck wiki](https://heck.aeroluna.dev/environment/environment/#components). We will go through and explain all 3).

If components specifically in Beatsaber seem confusing to you right now, think about components as branches of a Gameobject, and that branch contains values that control an aspect of the Gameobject in some way. For example, the `BloomFogEnvironment` component located only on the `Environment` parent Gameobject contains values that control the environment's fog (Attenuation, Height, StartY, and Offset). 

As said before, the components that you are able to modify is limited to 3. Those being:

**BloomFogEnvironment** <br> : The component located only on the Environment object that controls the fog properties.

**ILightWithId** <br>: The component that defines the LightID and Type of the light.

**TubeBloomPrePassLight** <br>: The component that lets you multiply the `colorAlpha`, and `bloomFogIntensity` properties of a light (The visibility of the lightbox, and the bloom intensity of the laser/light).


Example: A duplicated laser with ID 100 and type 3, with a bloom multiplier of 3.
```json
{
  "id": "LaserIDUsingExactLookup",
  "duplicate" : 1,
  "lookupMethod": "Exact",
  "components": {
    "ILightWithId": {
      "lightID" : 100,
      "type": 3
    },
    "TubeBloomPrePassLight" : {
      "bloomFogIntensityMultiplier": 3
    }
  }
}
```

Ever want to animate the fog attenuation? Or do you want to slowly increase a lasers colorAlphaMultiplier over time? You can do that by animating components using the [AnimateComponent](https://heck.aeroluna.dev/animation/additional-events/#animatecomponent) custom event (Only requires chroma!)