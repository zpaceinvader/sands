# Planck
[ ![Codeship Status for DekodeInteraktiv/planck](https://app.codeship.com/projects/a29bfca0-90eb-0135-350b-0e41edeb2b8b/status?branch=master)](https://app.codeship.com/projects/250356)

A home for our new Dekode starter theme.

>The Planck constant (denoted h, also called Planck's constant) is a physical
constant that is the quantum of action, central to quantum mechanics. Planck
length also defines the absolute smallest physical distance in space-time.

## Directory Structure

```shell
themes/theme-name/
├── inc/
│   ├── assets.php (for asset enqueueing)
│   ├── class-planck-wrapper.php (includes the base.php file for each page template)
│   ├── extras.php (theme functions that do not print, including hooked functions)
│   ├── helpers.php (for theme helper functions, like ret and inc)
│   ├── setup.php (set theme supports and defaults and bootstrap includes)
│   ├── template-tags.php (theme functions that print)
│   ├── titles.php (handles title display)
├── src/
│   ├── fonts/
│   │   ├── circular/
│   │   │   ├── circular.woff
│   │   │   ├── circular.otf
│   │   │   └── circular.ttf
│   │   ├── arial/
│   │   │   └── arial.woff
│   ├── images/
│   │   ├── logo.svg
│   │   └── pattern.png
│   ├── js/
│   │   └── global.js (for any JS that transcends a module)
│   ├── main.scss (include all Sass module partials here, both no Sass declarations)
│   ├── main.js
│   ├── media/
│   │   └── file.mp4
│   ├── scss/ (for any SCSS that transcends a module)
│   │   ├── global.scss
│   │   ├── rtl.scss
│   │   ├── settings.scss
│   │   └── typography.scss
│   ├── vendor/ (any vendor SCSS, JS, etc. that is not otherwise managed)
│   │   └── polyfills/
├── template-parts/
│   ├── components/
│   │   ├── button/
│   │   │   ├── button.php
│   │   │   ├── button.scss
│   │   │   ├── button.js
│   │   ├── forms/
│   │   │   ├── forms.php
│   │   │   ├── forms.scss
│   │   │   ├── forms.js
│   ├── modules/
│   │   ├── card/
│   │   │   ├── card.php
│   │   │   ├── card.scss
│   │   │   ├── card.js
│   │   ├── footer/
│   │   │   ├── footer.php
│   │   │   ├── footer.scss
│   │   │   ├── footer.js
│   │   ├── search-form/
│   │   │   ├── search-form.php
│   │   │   ├── search-form.scss
│   │   │   ├── search-form.js
```

## Frontend
### Getting started
1. Make sure you have `node` and `yarn` installed.
2. Make sure you are in the theme directory.
3. Run `yarn install`
4. Make sure the `proxy` field in `package.json` matches your local development domain.
5. Execute `yarn start` or any other [available script](#available-scripts).
6. Open [`localhost:3000`](http://localhost:3000/) in your browser.

To create a production build use [yarn build](#yarn-build).

### Available Scripts
In the theme directory, you can run:

#### `yarn start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

#### `yarn test`
Launches the test runner in the interactive watch mode.

#### `yarn build`
Builds the app for production to the `dist` folder.

The build script will create a separate file for each entry point defined in
`package.json`. Additionally it creates a `commons.js` file, consisting of
common modules shared between all entry points.

The build is minified and the filenames include the hashes.

### Heisenberg
Planck uses [Heisenberg](https://github.com/DekodeInteraktiv/heisenberg) as a
build tool for all the frontend code. See [Heisenbergs documentation](https://github.com/DekodeInteraktiv/heisenberg/blob/master/README.md#table-of-contents)
for more documentation.

## A Fork of Underscores
## Directory Structure
Planck is built to be as modular as possible while following WordPress
best-practice theme structure.

## Root-Level Files
The directory structure begins at the theme root, with *full-page templates*
such as 404.php, page.php, index.php, page-*slug*.php, etc. These root-level
files should ideally contain **no markup whatsoever**, but rather include
modules from within the `template-parts` directory.

## Template Parts
Template parts can be thought of as PHP modules consisting almost entirely of
markup and output. These can include markup parts as small as an opening or a
closing `div`, or as large as the entire content of a page or post type.

### Directories Inside Template Parts
There are only two directory levels inside this folder: (1) root-level files
and (2) module bundles. If a page template requires only one file to render
content, you may create it and leave it as `template-parts/yourfile.php`. A
simple example is the content of the 404 page, which would be
`template-parts/content-404.php`.

If a page template requires more than one module, create a directory for those
modules. For example, the `search.php` template may load
`template-parts/search/searchform.php`,
`template-parts/search/search-error-message.php`, etc.

Any module that can be loaded on *more than one page template* should be left in
the `template-parts/global` directory. This directory contains, by default,
`header.php`, `head.php` (for meta tags and the `wp_head()` function),
`footer.php` and other elements. For example, an email subscribe callout box may
appear on pages and posts, in which case the markup would appear in a file in
the `global` directory.

## The inc Function
In `inc/helpers.php`, we have included a helpful template inclusion function,
with the following signature: `inc( $type, $component, $value = null,
$component_type = '', $path = 'template-parts' )`. This function is more useful
than `locate_template()` or other baked-in functions in that it more easily
accomodates our directory structure and allows passing variables between
template parts.

This function (like the theme as a whole) is namespaced like so:
`Dekode\Planck`. For a couple of examples of template part inclusion, see
`page.php` in the theme root.

Then, update the stylesheet header in `style.css` and the links in `footer.php`
with your own information. Next, update or delete this readme.

Now you're ready to go! The next step is easy to say, but harder to do: make an
awesome WordPress theme. :)

Good luck!

TODOs:
* Steps to get started
* Where to put widgets
* Where to find code snippets (e.g., customizer.php)
* Where to put CPTs and ACF
