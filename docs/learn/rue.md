# Runtime Unity Editor (RUE)
!!! info "RUE Description"
    Runtime Unity Editor is an In-game inspector, editor and interactive console for applications made with Unity3D game engine. It's designed for debugging and modding Unity games, but can also be used as a universal trainer.

When applied to BeatSaber; RUE can be used to interact with objects in loaded scenes. <br> Not only can this be helpful for modders, but it can also benefit environment artists, providing an easy way to find specific objects and inspect them.

!!! question
    **Looking for something more modern?**

    If you're looking for a **more modern tool**, check out [**Unity Explorer**](https://cdn.discordapp.com/attachments/864240224400572467/1314041476807655475/UnityExplorer.zip?ex=6867d7bd&is=6866863d&hm=207f333cea3538d20afd2b8275f5dce3a3144aa225c06a293029eca27138e2d9&) (Ported to BSIPA..  Originally Developed by Sinai.)
    
    Specifically for BeatSaber, Unity Explorer offers a more intuitive UI all over, and allows you to navigate scenes more efficiently.
    
    > RUE is still useful and works well with Beat Saber, especially if you're using mods like Chroma or Noodle.

    > This guide focuses on **Runtime Unity Editor (RUE)** for those sticking with that workflow, however both aren't much different.

---

### Features Covered

- Modifying GameObject transform  
- Destroying / Changing activity of GameObjects  
- Inspecting / Modifying components of GameObjects  

> RUE is made up of **modules**.  
> For this page, we will only be covering the `Object Browser` and `Inspector` modules, along with small/extra features.

> **PSA:** This repo was specifically made with Chroma and Noodle in mind, so not *all* features that RUE offers will be covered—just in-depth explanations of the most helpful features.

---

## Installation

> **Note:** While you can refer to the [Official repo](https://github.com/ManlyMarco/RuntimeUnityEditor) for further documentation, you cannot install the repo version as it’s designed for other mod loaders like MelonLoader. We use a modified version of IPA for BeatSaber (BSIPA).

The installation process of RUE is the same as a typical BeatSaber plugin:

1. Download the RUE `.zip` file from the [BSMG Discord `pc-mod-dev` channel](https://discord.com/channels/441805394323439646/443146108420620318/1234067170040741938), or click [here](https://cdn.discordapp.com/attachments/443146108420620318/1234067169726435358/RUE.zip?ex=6878135d&is=6876c1dd&hm=fc01b0efcfaba9b33a29c90cce391af41b2c266a40a69974160c44e1ea8ac049&) to directly download.
2. Open the zip, and drag both `Libs` and `Plugins` folders into your BeatSaber root folder.
3. Done! Launch BeatSaber and move on to the **Navigation** section below.

---

## Navigation

To open RUE, press the `G` key in-game. This opens the RUE UI (it may have some tabs already open).

Focus on the bottom UI area — this displays all the available RUE modules. Toward the right are additional toggles and tools.

We’ll start with **Time**, then cover the key modules.

---

## Time

`Time` allows you to manipulate the Unity scene's timescale.

- Higher values = **faster** animations and movement  
- Lower values = **slower** animations and movement  

Two buttons are included:  
- `>` resets time to `1.00`  
- ⏸️ Sets time to `0` (pauses time) — press `>` to unpause

> **Note:** `Time` does *not* affect the speed of songs/maps.

---

## Modules

RUE includes several modules: Clipboard, Inspector, Object Browser, Profile, REPL Console, Viewer.

We’ll only cover the **[Object Browser](rue.md#object-browser)** and the **[Inspector](rue.md#inspector)**.

---

## Object Browser

- Lists **all** GameObjects in the scene  
- Allows editing of transform properties (Position, Scale, Rotation, etc.)  
- Lists all components tied to that object, allowing you to edit their properties in the Inspector.

### Object Browser Anatomy

> Click on each colored section to learn about it!

<img src="https://github.com/user-attachments/assets/905f109f-026c-4366-b267-f9e0e916b54a" usemap="#objbr-map">

<map name="objbr-map">
    <area target="" alt="Search Options" title="Search Options" href="#search" coords="2,12,302,60" shape="rect">
    <area target="" alt="Object List" title="Object List" href="#object-list" coords="2,58,302,365" shape="rect">
    <area target="" alt="Transform Properties" title="Transform Properties" href="#transform-properties" coords="1,364,302,541" shape="rect">
    <area target="" alt="Component List" title="Component List" href="#components" coords="0,542,302,887" shape="rect">
</map>


---

### 🟨 – Search

- Where you are able to search and filter through the GameObject list
- Filter Options:
    - **Names** (Search by object name, default filter)
    - **Components** (Search by specific component type)  
    - Properties and Statics *(not relevant)*
- `Clear` — Clear search filter
- `Dump Obj` — Not relevant

---

### 🟩 – Object List

- Lists all GameObjects
- Click to select an object
- Grey boxes indicate an expandable parent object
- Greyed-out objects indicate the object is inactive
- Selected objects are highlighted blue
- Right click to open the context menu, pretty much the transform properties

---

### 🟥 – Transform Properties

Shows transform properties of the selected GameObject:

- Toggle object active/inactive
- Transform Control
    - Position, LocalPosition
    - Scale (LossyScale, LocalScale)
    - Rotation (EulerAngles, LocalEulerAngles)  
- `Inspect` button — sends object to Inspector  
- ❌ — destroys the GameObject  

> LossyScale (Read-only) - Accumulated scale of an object to the hierarchy
> LocalScale: Scale of the object relative to it's parent (USE THIS)

!!! warning
    **For RUE Users**: Some transform sliders like rotation will behave in a strange way. <br>If this is an issue for you, I'd recommend using Unity Explorer.

---

### 🟦 – Components

- Lists all components on the selected GameObject
- Click a component to open it in the **Inspector**
- Click the grey box to enable/disable the component
- Includes a search filter like the main search bar

---

!!! warning "NOTICE"
    Environment Objects (including the player) use the normal unity transform units of 1 meter. <br> However, Gameplay objects (notes, bombs, etc..) use **Noodle Units** which is 0.6 meters for the convenience of making notemods. Learn more about this on the [conversion ratios page](../data/reftable.md#unity-units-noodle-units).

## Inspector

Used to **inspect and modify** GameObjects or their components.

Component properies like attenuation on the BloomFogEnvironment component can be changed here!

### Inspector Anatomy

> Click on each colored section to learn about it!

<img src="https://github.com/user-attachments/assets/cc93e8e0-1d6d-4906-a689-a1e1fc203d2c" usemap="#inspector-map">

<map name="inspector-map">
    <area target="" alt="Search filters" title="Search filters" href="#filters" coords="4,16,569,40" shape="rect">
    <area target="" alt="Tabs and member lists" title="Tabs and member lists" href="#tabs-member-list" coords="4,44,746,91" shape="rect">
    <area target="" alt="Properties view" title="Properties view" href="#property-view" coords="4,96,746,663" shape="rect">
</map>

---

### 🟥 – Filters

- Textbox + checkboxes  
- `Only Declared` — filters out likely useless properties  
- `Fields` — may be relevant (example shown below)

---

### 🟩 – Tabs & Member List

- Tabs represent selected GameObjects/components  
- Member list shows deeper inspected objects  
- Tabs = parent  
- Members = children  
- Selected tabs/members = blue  
- Use tabs to organize multiple inspections

!!! tip
    If you have an overwhelming amount of tabs, click the "Close all tabs" button located in the top right of the inspector to clear the list.

---

### 🟧 – Property View

Where all modifications are made:

- **Value/Return Type** — Type of property  
- **Member Name** — Name of the property  
- **Value** — Current value that you can modify

!!! example

    ```csharp
    bool active = true;
    ```

    Appears in the inspector as:s

    - Type: `System.Boolean`
    - Member Name: `active`
    - Value: `true`

<br>

Fields can appear as buttons (sub-class) — click to inspect deeper.


Example of a useful field: `_fogParams`, which controlls the fog.

!!! example "Example for _fogParams"
    ```csharp
    BloomFogEnvironmentParams _fogParams;
    ```
    OR

    * Type: `BloomFogEnvironmentParams`
    * Member Name: `_fogParams`


Modifying the fog in game is a great way to get a feel for finding specific objects in different ways, and modifying component properties. Watch a video on how to do this with RUE [here](https://streamable.com/94gohd).


## Usage Examples
Here are some examples to get you going with RUE. <br> I recommend to follow along in-game to get the hang of it! 
> Since there is dialogue missing from the videos, there are some explanations to some things you may have questions about. <br> Just click on the title of the card to see the video and expand it for explanations.

> I used "spells" published by Swifter as the map for the examples, check it out [here](https://beatsaver.com/maps/35a0b)!

??? info "[Find and modify the fog in a map (Component searching)](https://streamable.com/94gohd)"
    To change fog in BeatSaber, you must modify the parameters in the `BloomFogEnvironment` component. (Chroma taps into this component when you wish to change the fog on your map.)

    Because there is only one BloomFogEnvironment component in the scene, we can search for it using the Component filter.
    > We *could* use "environment" as the search since its the parent object name, but component searching is more concrete, and sometimes quicker.

??? info "[Find and modify lasers (Component searching)](https://streamable.com/m82zjh)"
    Lasers in BeatSaber have the `TubeBloomPrePassLight` component on them – This is to control their visual behavior. <br>
    If you have ever modified a laser, or even a geometry light you may have heard of this component to modify specific properties like `colorAlphaMultiplier` and `bloomFogIntensityMultiplier`.

    Because there are a ton of lights in this map, it takes some time to find the laser but not long.
---

That about covers the installation and basics for RUE!
