# Runtime Unity Editor (RUE)
!!! info "RUE Description"
    Runtime Unity Editor is an In-game inspector, editor and interactive console for applications made with Unity3D game engine. It's designed for debugging and modding Unity games, but can also be used as a universal trainer.

When applied to BeatSaber; RUE can be used to interact with objects in loaded scenes. <br> Not only can this be helpful for modders, but it can also benefit environment artists, providing an easy way to find specific objects and inspect them.

!!! question
    ### Looking for something more modern?

    If you're looking for a **more powerful and modern tool**, check out [**Unity Explorer**](https://cdn.discordapp.com/attachments/864240224400572467/1314041476807655475/UnityExplorer.zip?ex=6867d7bd&is=6866863d&hm=207f333cea3538d20afd2b8275f5dce3a3144aa225c06a293029eca27138e2d9&) (Ported to BSIPA..  Originally Developed by Sinai.)
    
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

1. Download the RUE `.zip` file from the [BSMG Discord `pc-mod-dev` channel](https://discord.com/channels/441805394323439646/443146108420620318/1234067170040741938).
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

We’ll only cover the **[Object Browser](https://github.com/UGEcko/Chroodle/wiki/Runtime-Unity-Editor-(RUE)#object-browser)** and the **[Inspector](https://github.com/UGEcko/Chroodle/wiki/Runtime-Unity-Editor-(RUE)#inspector)**.

---

### Object Browser

> Think of it like a runtime Hierarchy window from Unity.

- Lists **all** GameObjects in the scene  
- Allows editing of transform properties (Position, Scale, Rotation, etc.)  
- Lets you view and later modify components (via the Inspector)  

#### Object Browser Anatomy

![ObjectBrowser_img](https://github.com/user-attachments/assets/905f109f-026c-4366-b267-f9e0e916b54a)

---

#### 🟨 Yellow Section – Search

- Textbox + filter options:  
  ** **Names** *(default)*  
  ** **Components** (search by specific component type)  
  ** Properties and Statics *(not relevant)*  
- `Clear` — resets search  
- `Dump Obj` — not used

---

#### 🟩 Green Section – Object List

- Lists all GameObjects
- Click to select an object
- Grey box/button on the left = expandable parent object
- Greyed-out object = inactive object
- Selected = highlighted blue
- Right-click = context menu (mostly duplicated in Red section)

---

#### 🟥 Red Section – Transform Properties

Shows transform properties of the selected GameObject:

- Activity status  
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

#### 🟦 Cyan Section – Components

- Lists all components on the selected GameObject  
- Click a component to open it in the **Inspector**  
- Includes a searchable field like the main search bar

---

### Inspector

Used to **inspect and modify** GameObjects or their components.

Component properies like attenuation on the BloomFogEnvironment component can be changed here!

#### Inspector Anatomy

![Inspector_img](https://github.com/user-attachments/assets/cc93e8e0-1d6d-4906-a689-a1e1fc203d2c)

---

#### 🟥 Red Section – Filters

- Textbox + checkboxes  
- `Only Declared` — filters out likely useless properties  
- `Fields` — may be relevant (example shown below)

---

#### 🟩 Green Section – Tabs & Member List

- Tabs represent selected GameObjects/components  
- Member list shows deeper inspected objects  
- Tabs = parent  
- Members = children  
- Selected tabs/members = blue  
- Use tabs to organize multiple inspections

!!! tip
    If you have an overwhelming amount of tabs, click the "Close all tabs" button located in the top right of the inspector to clear the list.

---

#### 🟧 Orange Section – Property View

Where all modifications are made:

- **Value/Return Type** — data type of property  
- **Member Name** — name of the field/property  
- **Value** — current value you can modify

!!! example

    ```csharp
    bool active = true;
    ```

    Appears in the inspector as:

    - Type: `bool`  
    - Member Name: `active`  
    - Value: `true`

Fields can appear as buttons (sub-class) — click to inspect deeper.

Example of a useful field: `_bloomFog`

![image](https://github.com/user-attachments/assets/77db54a7-d87b-47bd-ab18-44a385b5f516)

This lets you modify fog settings in-game.

!!! example "Example for _bloomFog"
    ```csharp
    BloomFogSO _bloomFog;
    ```
    OR

    * Type: `BloomFogSO`
    * Member Name: `_bloomFog`

---

That about covers the installation and basics for RUE!
