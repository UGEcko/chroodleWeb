# Reference Tables

A page for stuff to reference/glance at.

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

## Conversion Ratios Table

### Unity Units <=> Noodle Units

1 meter (Unity Unit) => 0.6 meters (Noodle Unit)

??? info "Why?"
    Because Noodle Extensions focuses on manipulation of gameplay objects like notes, **the mod uses the width of a lane (0.6 meters) on the grid as 1 unit**.<br>This makes gameplay mods like note animations easier, as shifting a note to the left 1 unit would keep it in line with the grid.
    > This is why `offsetPosition` exists, to *offset* the gameplay object from the note grid.

    Environment Objects (Including the player) are normal Unity objects, so they use the normal 1 meter unit.

To Noodle: `xyz * 0.6`

To Unity (Environment/Player): `xyz / 0.6`