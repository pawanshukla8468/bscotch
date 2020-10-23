![Stitch (GameMaker Studio 2 Pipeline Development Kit) Logo](https://img.bscotch.net/fit-in/256x256/logos/stitch.png)

# Stitch: The GameMaker Studio 2 Pipeline Development Kit

GameMaker Studio 2 (<abbr title="GameMaker Studio 2">GMS2</abbr>) is a powerful game-making tool, but it does not generally have features for automating development or build tasks, or for creating asset pipelines. <dfn>Stitch</dfn> is a Pipeline Development Kit providing a collection of command-line tools and a Node.JS API for automating GMS2 project management by directly manipulating its project files.

Stitch is developed by [Butterscotch Shenanigans](https://www.bscotch.net) ("Bscotch").

*GameMaker Studio 2&reg; is the property of Yoyo Games&trade;. Butterscotch Shenanigans and Stitch are not affiliated with Yoyo Games.*

**⚠WARNING⚠ Use at your own risk.** Stitch could completely break your GameMaker project. To help keep you safe, Stitch will not run unless your project is in a git repo with a clean working directory, but you must also know how to use git to recover in case something goes wrong.

## GameMaker Studio Compatibility

This project will generally stay up to date with the most recent versions of GameMaker Studio 2. We typically use beta or even alpha versions of GMS2. We will not typically test new versions of Stitch against older versions of GameMaker Studio, and will make no effort to maintain backwards compatibility. We'll list any known compatibility issues here, and we welcome GitHub Issues for any compatibility problems you discover.

+ **GMS2 versions < 2.3.0.529** **will not work at all** with any version of Stitch.

## Setup <a id="setup">

### Requirements

+ [Node.JS v14+](https://nodejs.org/)
+ [Git](https://git-scm.com/) (if your project is not in a git repo, or your working tree is not clean, <strong>Stitch will refuse to run</strong> unless you use the "force" options (which you shouldn't do))
+ [GameMaker Studio 2.3+](https://www.yoyogames.com/gamemaker) projects
+ Windows 10 (other operating systems may work but are untested)

### Installation

Install/update globally with `npm install -g @bscotch/stitch@latest`. This will let you use the CLI commands anywhere on your system. To install a specific version of Stitch, replace `@latest` with `@x.y.z`, where `x.y.x` is the specific version.

Note that updates to Stitch are likely to introduce new features and change existing features, so update with caution and [check the changelog](./CHANGELOG.md) first.

If you are creating a pipeline in Node.JS, you may want to install locally (same as above, but without the `-g`) and import directly into your code. Using Stitch programmatically will look something like this:

```ts
// @file Some component of your Typescript pipeline
import {Gms2Project} from "@bscotch/stitch";

const projectPath = 'my/project';
// Open a project. If you don't specify the path,
// it will search for a .yyp file starting in the current working directory
const myProject = new Gms2Project('my/project');

// Manipulate the project (toy example showing a few available methods)
myProject
  .importModules('other/project',['my_module'])
  .addTextureGroupAssignment('Sprites/interface','interface')
  .addSounds('my/sounds/source')
  .addSprites('my/art/assets',{prefix:'sp_',case:'snake'})
  .addIncludedFiles('my/localization/files');
```

Note that the documentation is currently only within the code itself,
but will be surfaced for you with Typescript-aware IDEs
(such as Visual Studio Code). The examples here and below are all in
Typescript, but you can use plain Node.JS instead. The main difference
there will be in how you import Stitch: instead of
`import {Gms2Project} from "@bscotch/stitch"` you'd probably use
`const {Gms2Project} = require('"@bscotch/stitch')`.


### Preparing your GameMaker project for Stitch

<details>
<summary><b>Example file structure</b></summary>

```bash
project-root/ # folder containing all your project's stuff
project-root/.git # created by `git init` or `git clone`
project-root/package.json # (not required) created by `npm init`
project-root/project-name/ # e.g. the name of your game
project-root/project-name/project-name.yyp # main GMS2 project file (entrypoint)
project-root/project-name/stitch.config.json # Stitch configuration data (created by Stitch)
```

</details>

Yours doesn't have to look *exactly* like the example, but the general relationships should. For example, there must be a `.git` folder somewhere (created when you run `git init` or `git clone`), and your [`.yyp` file](#yyp) must either be in the same directory as that `.git` folder or in a subdirectory as shown above.

To start using Stitch with one of your GMS2 projects, do the following:

1. Open a terminal in your project's root (e.g. via Git Bash or PowerShell)
  + On Windows 10 with Git installed, you can open the folder in File Explorer, right-click somewhere, and then click "Git Bash here". Alternatively, open the terminal anywhere and `cd` to the root of your project.
1. Run `npm install -g @bscotch/gms2` for a *global* install of Stitch, allowing you to install it just once and use it for all projects. This causes the `gms2 ...` commands to become available in the terminal.
1. Run `gms2 --help` to see all the things you can do.

### Stitch Configuration File <a id="config-file"></a>

To keep things stable and automatable, Stitch uses a configuration file (`stitch.config.json`) to store things like Texture Page and Audio Group assignments. This file is stored alongside the [`.yyp` file](#yyp). You can edit it manually, but it's a better idea to use Stitch CLI commands (see the [Audio Groups](#audio-groups) and [Texture Pages](#texture-pages) sections for examples).

<details>
<summary><b>Config file example</b></summary>

```jsonc
{
  "texturePageAssignments":{
    "folder":"texturePageName",
    "folder/subfolder": "anotherTexturePageName"
  },
  "audioGroupAssignments":{
    "folder":"audioGroupName",
    "folder/subfolder": "anotherAudioGroupName"
  }
}
```

</details>

## Using the Command Line Interface <a id="cli"></a>

If you've installed Stitch globally, the Command Line Interface (CLI) is available as `stitch` in your terminal. If you've installed it locally and your terminal is in the same location, you can run it with `npx stitch`. (Global install is recommended for ease of use.)

Up to date CLI documentation is available with the `--help` or `-h` flags of CLI commands. For example, run `stitch -h` to see all commands, `stitch import -h` to see the import subcommands, and so on.

This README includes example CLI calls in the relevant sections, but should not be treated as the full CLI documentation.


## Features <a id="features"></a>

### Modules <a id="modules"></a>

GameMaker Studio has mechanisms to import assets from one GameMaker project into another, as well as an "extensions" system, but these can both be unwieldy to manage and have many drawbacks. We use a custom solution for this that we simply call "Modules". A "module" is a collection of assets that have a common folder name in their path. For example, for a module called "TitleScreen" and an asset hierarchy including:

+ `sprites/TitleScreen/{module content}`
+ `sounds/menus/TitleScreen/{module content}`
+ `TitleScreen/` (new to GMS2.3+, since previously you could not mix assets types in folders)

Everything inside those three "groups", starting at the "TitleScreen" level and including any subfolders, is included as a "TitleScreen" asset and can be imported together into another GameMaker 2 project.

This also works for Included Files.

Use case: At Bscotch, we have a separate GameMaker project for our shared asset library that includes our login system, a large script library, common objects, extensions for managing In-App Purchase, and more. We use the module system to import the required subsets of this shared library into each of our games as needed. This allows us to guarantee that all games have the same, up to date code, and allows us to test common features in a single project.

#### Module Import example

**CLI**

```sh
stitch import modules -h # Get help about importing modules
stitch import modules --source-project-path=path/to/your/modules-project --modules=my_module,my_other_module
```

**Typescript**

```ts
import {Gms2Project} from "@bscotch/stitch";
const myProject = new Gms2Project();
myProject.importModules('path/to/your/modules-project',['my_module','my_other_module']);
```

#### Module Import Notes <a id="modules-notes"></a>

+ **All data is overwritten** in the target for module assets. Any changes you've made that aren't also in the source module will be lost forever. The exception to this is Texture and Audio Group membership when you use Stitch's system to manage those.
+ Only **resources** (e.g. sprites, objects, scripts, etc. -- the things in the IDE's resource tree) and **Included Files** are importable as modules.
+ Module assets in the target that are *not* in the source are moved to a folder called "MODULE_CONFLICTS". This prevents data loss.
+ Failed imports may result in broken projects. Failures result from conflicts between the source and target, in particular when a resource in each has the same name but different type, or is in a different module.

### Import Assets <a id="import-asset"></a>

Managing art, audio, and file assets can be quite painful. GMS2 does not provide any batch-import or other pipeline tooling for converting external assets (like images, sounds, and other files) into GameMaker assets. Stitch provides such mechanisms, so that you can build pipelines appropriate to your technology stack.

For example, if your audio team dumps their files into a shared Dropbox folder, you can use the CLI to batch-import from that folder. This will update all existing sound assets and add any new ones, using the filenames as GameMaker asset names. No manual work required!

Same deal with sprites. Point the importer at a folder full of images to have them all automatically brought in as new or updated Sprites.

At Bscotch, we use importers for our sound, art, build, and localization pipelines, so that our game programmers do not need to manually find, import, or name assets created by other team members, and so that we can modify scripts and other assets prior to creating builds.

#### Import Images as Sprites

You can convert collections of images into GameMaker Sprites by first organizing
them into per-sprite folders, such that each folder contains a collection of images
that all have the exact same dimensions and that when sorted alphabetically are
in the order you want them in-game. You can then point Stitch at the root folder
containing all those sprite folders to automatically update/create in-game sprite
assets for each folder. During import, you can specify several options to map the
original art file names onto standardized sprite names.

**CLI**

```sh
stitch import sprites -h # Get help about importing sprites
stitch import sprites --source-path=path/to/your/sprites
```

**Typescript**

```ts
import {Gms2Project} from "@bscotch/stitch";
const myProject = new Gms2Project();
myProject.addSprites('path/to/your/sprites');
```

We have another tool, [Spritely](https://github.com/bscotch/spritely), that you
can use to batch-crop and batch-bleed your images prior to importing them into
GameMaker as sprites.

⚠WARNING⚠ Many changes you make to sprites imported via Stitch will be overwritten
the next time you run Stitch on those same sprites. In particular, changes to frames
or frame order will be undone, and any layers you've added will be deleted. Other
sprite properties (those not in the frame editor) will be maintained between imports.


#### Import Audio Files as Sounds

You can batch-import audio files into GameMaker as sound assets.

**CLI**

```sh
stitch import sounds -h # Get help about importing audio
stitch import sounds --source-path=path/to/your/sounds
```

**Typescript**

```ts
import {Gms2Project} from "@bscotch/stitch";
const myProject = new Gms2Project();
myProject.addSounds('path/to/your/sounds');
```

#### Import Files as "Included Files"

You can batch-import external files into your GameMaker project
as Included Files. This is useful for managing things like
localization data, or data that you want to add or remove
prior to making production builds. During import you can
put files into subfolders, and you can even create files on
the fly when using Stitch programmatically.

**CLI**

```sh
stitch import files -h # Get help about importing audio
# Add all txt and json files found in a folder (recursively)
stitch import files --source-path=path/to/your/files --allow-extensions=txt,json
# Add a specific file
stitch import files --source-path=path/to/your/file.txt
```

**Typescript**

```ts
import {Gms2Project} from "@bscotch/stitch";
const myProject = new Gms2Project();
// Add all txt and json files found in a folder (recursively)
myProject.addIncludedFiles('path/to/your/files',{allowExtensions:['txt','json']});
// Add a specific file
myProject.addIncludedFiles('path/to/your/file.txt');
// Create an included file on the fly
myProject.addIncludedFiles('path/to/your/new-file.txt',{content:'Here is the file content.'});
```

#### Create/Update Scripts

You can create scripts programmatically:

```ts
import {Gms2Project} from "@bscotch/stitch";
const myProject = new Gms2Project();
myProject.addScript('your/script/name','function(){}');
```

#### Create/Update Objects

You can create Objects programmatically:

```ts
import {Gms2Project} from "@bscotch/stitch";
const myProject = new Gms2Project();
myProject.addObject('your/object/name');
```

### Texture Group Management <a id="texture-pages"></a>

Texture group assignment of sprites via the GMS2 IDE is a fully manual, per-sprite process. Stitch allows you to map resource "Groups" (the folders in the GMS2 IDE) to Texture Groups, so that all sprites within a specified folder (recursing through subfolders) will be assigned to the same Texture Page. Groups with higher specificity take precedence.

For example, you might map the group `sprites/mainMenu/` to the texture page `mainMenuTexturePage`, so that *every* sprite inside the `sprites/mainMenu/` folder (recursive) will be put into the same texture page. You might then map the group `sprites/mainMenu/subMenu` to a different page `subMenuTexturePage`. In this case, all sprites within `sprites/mainMenu/` are first mapped to `mainMenuTexturePage`, and then all sprites within `sprites/mainMenu/subMenu` are remapped to `subMenuTexturePage` (since that group has one additional subfolder and is therefore more specific).

Texture Page assignments are stored in the [config file](#config-file) and can be modified via the CLI or by directly editing the configuration file.

If you've added sprites to a folder via the IDE (instead of via the Stitch sprite importer),
you'll need to run a Stitch command to ensure those sprites have their assignments changed.

**CLI**

```sh
stitch set texture-group -h # Get help assigning texture groups
stitch set texture-group --folder=folder/in/the/ide --group-name=nameOfYourTextureGroup
# Run the 'deborker' to ensure all assignments are correct,
# especially after making manual changes in the IDE.
stitch debork
```

**Typescript**

```ts
import {Gms2Project} from "@bscotch/stitch";
const myProject = new Gms2Project();
// Create a new Texture Group (without assigning anything to it)
myProject.addTextureGroup('nameOfYourTextureGroup');
// Assign a texture group to all sprites within an folder
// (the Texture Group will be created if it doesn't already exist)
myProject.addTextureGroupAssignment('folder/in/the/ide','nameOfYourTextureGroup');
```



### Audio Group Management <a id="audio-groups"></a>

Audio Group management is solved the [same way that Texture Groups are managed](#texture-pages).

**CLI**

```sh
stitch set audio-group -h # Get help assigning audio groups
stitch set audio-group --folder=folder/in/the/ide --group-name=nameOfYourAudioGroup
# Run the 'deborker' to ensure all assignments are correct,
# especially after making manual changes in the IDE.
stitch debork
```

**Typescript**

```ts
import {Gms2Project} from "@bscotch/stitch";
const myProject = new Gms2Project();
// Create a new Audio Group (without assigning anything to it)
myProject.addAudioGroup('nameOfYourAudioGroup');
// Assign a audio group to all sounds within an folder
// (the Audio Group will be created if it doesn't already exist)
myProject.addAudioGroupAssignment('folder/in/the/ide','nameOfYourAudioGroup');
```

### Programmatically Modifying Your Project and Assets

Stitch provides many ways to modify assets, allowing you write
scripts and pipelines that automate asset management in all kinds of ways.
For example, you may want to replace a script with different content,
set all sounds to have a different bitrate, and more.

Some modification methods have available batch functions at the `Gms2Project`
instance level, while others are available on instances representing
specific resources. The best way to find all available options is to
use a Typescript-aware IDE to view the documentation while creating a
project, but some samples are below:

```ts

import {Gms2Project} from "@bscotch/stitch";
const myProject = new Gms2Project();
myProject.version = "1.0.0"; // Set the version in all options files
myProject.deleteResourceByName('myCrappySprite');
myProject.deleteIncludedFileByName('secrets.txt');
myProject.addFolder('my/new/folder'); // Create new folders in the IDE
myProject.addConfig('develop');

const anObject = myProject.resources.findByName('myObject');
// -or-
const anObject = myProject.resources.objects.find(object=>object.name=='myObject');
anObject.spriteName = 'aDifferentSprite'; // Change the object's sprite

// Change the bitRate of all sounds
myProject.resources.sounds.forEach(sound=>{
  sounds.bitRate = 64;
})
```

Note that we add features on an as-needed basis, so some asset types
have more modification options than others (and some have none). If
you want to add new features, see [how you can contribute](#contribute).

## Contributing <a id="contribute"></a>

We would love to get your contributions to Stitch! This section details our expectations and requirements if you do want to contribute.

### Issues and Suggestions

If you discover bugs or missing features, please post them as GitHub issues. Be extremely detailed and thorough in your explanation of the issue/suggestion and why it's important to address it.

Note that it will not be a high priority for the Bscotch team to address issues and feature that we ourselves don't actively need. To make your own fixes/features, see the next section.

### Contributing Code

The fastest way to get fixes and features into Stitch is to submit them yourself! By forking this repo and making changes, you can have your own version of Stitch that works however you want.

If you want to bring your changes back into the main Stitch repo, you can make a pull request to do so. Note that your code will be under strict requirements to make sure that things don't turn into spaghetti:

+ Code must be fully typed Typescript (no `any` or `//ts-ignore` unless strictly necessary).
+ If adding a similar feature to something that already exists, the code must follow a similar pattern and re-use as much existing code as possible (no DRY violations).
+ Names of variables, methods, etc. must be consistent with those already in the project.
+ There must be test cases that cover your changes/additions (see `src/test/index.ts`). We don't require unit tests, just functional tests.
+ The pull request must be rebase-able on the HEAD of the `develop` branch without conflict.
+ Commit messages must follow the project conventions (below).

It is very likely that we will ask for minor changes to the code before accepting a pull request.

### Commit conventions

We follow the conventional-changelog Angular convention for commit messages,
namely formatting them as `<type>(<scope>): <subject>` where `type` is one of:

+ feat: A new feature
+ fix: A bug fix
+ docs: Documentation only changes
+ style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)
+ refactor: A code change that neither fixes a bug nor adds a feature
+ perf: A code change that improves performance
+ test: Adding missing or correcting existing tests
+ chore: Changes to the build process or auxiliary tools and libraries such as documentation generation



### Legend

+ ❌ something that is not yet completed
+ ✅ something that has been completed, in the context of other things that have not, to make it easier to track to-dos.
+ ⚠  something that the user should pay very close attention to in order to stay out of trouble