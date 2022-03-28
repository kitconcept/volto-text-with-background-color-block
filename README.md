# Volto Text With Background Color Block <img src="https://raw.githubusercontent.com/plone/pastanaga-icons/master/Icons/divide-horizontal.svg">

[![NPM](https://img.shields.io/npm/v/@kitconcept/volto-text-with-background-color-block.svg)](https://www.npmjs.com/package/@kitconcept/volto-text-with-background-color-block)
[![Build Status](https://github.com/kitconcept/volto-text-with-background-color-block/actions/workflows/code.yml/badge.svg)](https://github.com/kitconcept/volto-text-with-background-color-block/actions)
[![Build Status](https://github.com/kitconcept/volto-text-with-background-color-block/actions/workflows/unit.yml/badge.svg)](https://github.com/kitconcept/volto-text-with-background-color-block/actions)
[![Build Status](https://github.com/kitconcept/volto-text-with-background-color-block/actions/workflows/acceptance.yml/badge.svg)](https://github.com/kitconcept/volto-text-with-background-color-block/actions)

![kitconcept GmbH](https://github.com/kitconcept/volto-blocks/raw/master/kitconcept.png)

The Volto Text With Background Color Block allows editors to add text with a background color to a Volto page.

## Screenshot

![Text-With-Background-Color-Block](https://github.com/kitconcept/volto-text-with-background-color-block/raw/master/screenshot.png)

## Screencast

![Text-With-Background-Color-Block](https://github.com/kitconcept/volto-text-with-background-color-block/raw/master/screencast.gif)

## Installation

Create a new Volto project (you can skip this step if you already have one):

```
npm install -g yo @plone/generator-volto
yo @plone/volto my-volto-project --addon @kitconcept/volto-text-with-background-color-block
cd my-volto-project
```

Add `@kitconcept/volto-text-with-background-color-block`to your package.json:

```
"addons": [
    "@kitconcept/volto-text-with-background-color-block"
],

"dependencies": {
    "@kitconcept/volto-text-with-background-color-block": "*"
}
```

Download and install the new add-on by running:

```
yarn install
```

Start Volto with:

```
yarn start
```

Go to http://localhost:3000, login, create a new page. The text with background color block will show up in the Volto blocks chooser.

# Credits

<img alt="Forschungszentrum Jülich" src="https://github.com/kitconcept/volto-blocks/raw/master/fz-juelich.svg" width="200px" />

The development of this plugin has been kindly sponsored by [Forschungszentrum Jülich](https://fz-juelich.de).

# License

The project is licensed under the MIT license.
