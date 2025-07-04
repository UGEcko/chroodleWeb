# Geometry Reference Table 

### Primitive Types

- Sphere
- Capsule
- Cylinder
- Cube
- Plane
- Quad
- Triangle


### Shaders

- Standard
- OpaqueLight
- TransparentLight
- BaseWater
- BillieWater
- BTSPillar
- InterscopeConcrete
- Interscope Car
- Obstacle (Broken)
- WaterfallMirror

<hr>

## Geometry JSON examples

Material: 
```json
"materials": {
  "White_Pillar": {
    "shader": "BTSPillar",
    "color": [1,1,1],
    "shaderKeywords": [],
    "track": "exampleTrack1",
  }
}
```

Reference:
```json
"environment": [
    {
      "geometry": {
        "type": "Cube",
        "material": "White_Pillar"
       }
    }
]
```

<hr>

Explicit:
```json
{
  "geometry": {
    "type": "Cube",
    "material": {
      "shader": "BTSPillar",
      "color": [1,1,1],
      "shaderKeywords": [],
      "track": "exampleTrack1",
      }
   }
}
```



