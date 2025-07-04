# Geometry

Here you can learn the basics of Geometry in your maps.

## Why?
Before Geometry was added into Chroma, artists had to target environment objects that were able to be easily manipulated into a cube, then further scaled into objects to create environments. Common objects that were effective in this approach were the `BTSPillar` and `BackCube` from Gaga.

After a couple years, Aeroluna the G.O.A.T decided to make creating such environments simpler, giving artists access to unity's native primitives in the same fashion (Plus the triangle of course). 
<br> This gave us a concrete way of creating environments for ALL game versions, aswell as providing a series of materials to make environments more interesting!

??? example "Take a peek at the differences between the Environment and Geometry approaches"
    
    === "Environment"
        When using environment "cubes", you must add an offset/multiplier to the    transform to get a cube that is scaled to 1 unit. Any animations must   factor   this in aswell.
        ```json
        "environment": [
          {
            "id": "BTSPillarWhateverID",
            "lookupMethod": "Regex",
            "scale": [0.285714, 0.008868, 0.285714],
            "position": [0, 0.4999, 0]
          }
        ]
        ```
    === "Geometry"
        Geometry provides primitives that are already scaled to 1 unit, and will    scale uniformly.
        ```json
        "environment": [
            {
              "geometry": {
                "type": "Cube",
                "material": {
                  "shader": "BTSPillar" // Use the same shader as the BTS Pillar
                }
              }
            }
          ]
        ```

<hr>

## Basics

Creating Geometry in your maps JSON is very similar to manipulating environment objects, just with a few changes.

To kick it off, Geometry MUST be defined with **type** and **material**.
<br>

- The `type` is the primtive mesh you will be using. Like I mentioned above, all unity primitives plus triangles are included.

- The `material` is what defines the graphical looks of the Geometry. <br> This includes the `color`, `shader`, and `shader keywords` properties (aswell as `track` for animating the `color`.)


The types of Geometry are as follows:

- Sphere
- Capsule
- Cylinder
- Cube
- Plane
- Quad
- Triangle

!!! warning
    Unfortunately, there is a limitation that could be no issue, or could impact you.
    <br> If you choose to create a large (sphere/capsule/cylinder), you may notice you can see the individual vertices on the object. <br> This is because at such a size there arent enough subdivisions done to the object to make it *smooooth*. There really isnt an easy way to get around this without turning to Vivify to create your own model.

<hr>

## Materials

Say you want to create a black cube that reflects NO light, or you want to create a yellow shiny sphere. You do that with Geometry Materials!

Geometry materials can be created in two different ways:

**Directly in the geometry JSON** <br> : You define the material properties in the **geometry object** (Preferably when you arent pooling materials).

**Creating a geometry material** <br> : Create a geometry material and reference the name in the geometry material property (Like a point definition but for materials).

When you create a geometry material, it should be placed in the `materials` object in the difficulty file:

Materials:
```json
"materials": {
  "PillarMaterialWhite": {
    "shader": "BTSPillar",
    "color": [1,1,1],
    "shaderKeywords": []
  }
}
```

Geometry referencing the material:

```json
"geometry": {
  "type": "Cube",
  "material": "PillarMaterialWhite"
}
```
<br>

If you are making a singular object, it may be in your best interest to just directly define the material in the geometry in the `material` object:

```json
"geometry": {
  "type": "Cube",
  "material": {
    "shader": "BTSPillar",
    "color": [1,1,1],
    "shaderKeywords": []
  }
}
```

<hr>

### Shaders

Unfortunately, you cannot use any 3rd party shaders, however one of the provided shaders should do the trick.

Provided Shaders:

- Standard
- OpaqueLight
- TransparentLight
- BaseWater
- BillieWater
- BTSPillar
- InterscopeConcrete
- WaterfallMirror
- Obstacle (DON'T USE IT *WILL* CRASH YOUR GAME INTO THE VOID)

These shaders aren't exclusive to specific environments, so `BillieWater` will work on any environment, however some shaders have different circumstances so they may look off in other environments.

<br>

#### Shader Keywords

Shader Keywords allow you to enable/disable certain features inside of a shader.
<br>
This includes but isn't limited to:

* Reflections
* Fog
* Rim Lighting

Shader Keywords can be set by the programmer for various usages and combonations while using the same shader.


With Geometry, the provided shaders have Shader Keywords, hence the option to change them.

> Check out the shader keywords available to be enabled for select shaders [here]().

<hr>

### Components
You can (and sometimes are required to) use components on geometry aswell! 

Components work the same way on Geometry as they do on environment objects.

!!! example
    Say you are creating a light with Geometry. How do you define which lightID and lightType the light is set to be lit? 
    <br>
    Did you say COMPONENTS? *(Extra points if you said the ILightWithId component :D)*

    In this case, you would use the ILightWithId component when defining the JSON for your Geometry to define the lights' properties:

    ??? example "Working 'ILightWithId' Example"
        ```json
        "environment": [
          {
            "geometry": {
              "type": "Cube",
              "material": {
                "shader": "OpaqueLight"
              }
            },
            "components": {
              "ILightWithId": {
                "lightId": 69,
                "type": 0
              }
            },
            "scale": [10,1,1],
            "position": [0,0,10]
          }
        ]
        ```
        > Wanna try it? Create a light event with a lightID of 69, and a type of 0.
