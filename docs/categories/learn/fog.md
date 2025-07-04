# Introduction to BeatSaber fog
(Pending rewrite)

This page explains most if not all information behind fog and its properties.

## Basics

Fog in BeatSaber is a *little odd*, but it doesn't take much practice to learn
<hr>

### Fog Properties

**Attenuation** <br>: Defines the density of the fog (Only necessary to be from -1 to 1.)

**StartY** <br>: Defines the starting Y position of the fog gradient

**Height** <br>: Defines the length of the gradient of the fog (Can be negative to invert!)

**Offset** <br>: Defines the distance from the camera before the fog starts. The attenuation between the camera and fog is 0.

!!! tip
    Avoid setting attenuation to 0. Only in specific cases will this create a pleasing effect. Otherwise, your map will look terrible and will lack depth between overlapping objects.

??? example
    * `startY`: -5
    * `height`: 10

    Any objects under Y -5 will be faded, and the attenuation gradient is from -5 to 5 (10 units).

You can also visualize fog in desmos that replicates the math involved [here](https://www.desmos.com/calculator/c59280c826) (thanks swifter!)

### Fog Manipulation
To manipulate/modify fog in beatsaber, you must modify the Environments `BloomFogEnvironment` **component**. This is where all of the properties that manage the fog is placed. 
<br>For most (if not all) environments; this component is located in the environments base parent object. Look below for an example.

Luckily, Chroma recognizes a handful of components and lets you modify their properties in 2 ways depending on what you'd like to do.

!!! example
    **Static fog**

    If you are looking to change the fog once WITHOUT animating it or to set the initial values, you can fetch the environment object that holds the `BloomFogEnvironment` component and set the properties. <br> 

    ```json
    {
      "id": "BTSEnvironment.[0]Environment",
      "lookupMethod": "Exact",
      "components": {
        "BloomFogEnvironment": {
          "attenuation": 0.069
        }
      }
    }
    ```

    > Read about this approach further [here](https://heck.aeroluna.dev/environment/environment/#components)

    <hr>

    **Animated fog**

    If you are looking to animate the fog, or change the fog many times throughout the map, you can use the `AnimateComponent` event included with Chroma. <br> 

    ```json
    // Assign the "BTSEnvironment.[0]Environment" to the "fog" track.
    {
      "b": 5,
      "t": "AnimateComponent",
      "d": {
        "track": "fog",
        "duration": 10,
        "BloomFogEnvironment": {
          "attenuation": 
          [
            [0.069,0],
            [0,1]
          ]
        }
      }
    }
    ```

    > Learn more about the structure of the event [here](https://heck.aeroluna.dev/animation/additional-events/#animatecomponent)

<hr>


!!! tip
    # EXPERIMENT.

    The best way to get any effects you are looking for with fog is to experiment–You may even find another effect that you werent looking for at first. 

    To assist you, below is a simple and quick guide to modify the fog in-game in real time, for a more accurate representation of all properties of fog using **Runtime   Unity Editor**.
    > If you do NOT have RUE installed, please navigate to the [RUE page](../learn/rue.md) to get started with installation and the basics.

    ### Step 1:
    Run your Beatsaber map, and open RUE with the G key. At the top of the Object Browser, search for `Environment`, and hit enter. There should be at  least one result; click on the gameObject that just says `Environment`. 

    ![353894940-1fb506c4-aa2f-4232-8fa7-efa312c564ab](https://github.com/user-attachments/assets/f37cac65-5290-4b18-add1-56caf31ed8ac)


    You know its the correct object if it has `BloomFogEnvironment` in the **components** section.

    ### Step 2:
    Open the `BloomFogEnvironment` component in the inspector by left clicking on it. Next, find the `BloomFogEnvironmentParams` member with the name   **"_fogParams"** and click on it to inspect.
    
    This will lead you to the tab that holds all 4 of the fog parameters of the Environment. Change these by typing new values. 
    <br> To apply them, simply hit enter or click somewhere else in the inspector tab.
