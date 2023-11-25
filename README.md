# Coo template

This is a template for using the Jekyll theme [Coo][coo] to create online
documentation. Coo is a fork of the Jekyll theme [Chirpy][chirpy] with some
modifications to make it easy for creating online documentation. This template
is based on the [Chirpy starter][chirpyStarter] template. You might find the
[Chirpy documentation][chirpyDoc] useful to help you get started on Chirpy.

## Prerequisites

The Jekyll project has [detailed instruction][jekyllInstall] on how to setup
Jekyll and Ruby. [Git][git] is required as part of your development
environment. You might find [GitHub Desktop][githubDesktop] (or its
[Linux version][githubDesktopLinux]) to be a friendly graphical interface to Git
and GitHub.

## Installation

### Ruby and Jekyll

Sign into GitHub and navigate to the template [home page][tekyll]. Click on
<kbd>Use this template</kbd>, then click on <kbd>Create a new repository</kbd>
to create a repository based on the template. Use Git or GitHub Desktop to
clone your newly created repository to your local machine. At the top-level
directory of the repository, run the command:

```sh
$ bundle
```

The above assumes root access. Without root access, you would not be able to
install Ruby gems in the system-wide directory. That is OK. Use the commands
below to install all required gems under the top-level directory of the
repository.

```sh
$ bundle config set --local path 'vendor/bundle'
$ bundle install
```

The above commands would setup the Ruby and Jekyll environment for your
repository.

### Make

The software [Make][make] is recommended, but not required, to automate the
building of your site. Under a Linux environment, you might want to install
[GNU Make][gnuMake]. On Windows, install Make as part of the [Cygwin][cygwin]
environment.

Feel free to use a build automation utility of your choice.

### npm (optional)

The package you want is [Prettier][prettier], which can automatically indent and
format Markdown files. Feel free to use another tool to lint/format/indent the
Markdown files in your project.

## Usage

See the [website of the template][tekyllSite]. You might also find the
documentation of the [Chirpy template][chirpyDoc] useful.

### Configuration

See the file [`_config.yml`][config].

### Home page

At the top-level directory of your repository, create a file called `index.html`
if it does yet exist. This is the first page that shows up when someone visits
your site. See the [index page][tekyllIndex] of tekyll for an example.

### Contents

#### Sections or chapters

To start writing contents for your site, create a directory named `doc/` (if it
does not yet exist) at the top-level directory of your repository. All textual
contents for your document should be placed under the directory `doc/`. Each
section or chapter of your entire document should be a separate Markdown file.
Refer to the directory [`doc/`][tekyllDoc] of tekyll for sample contents.

#### Summary

You also need to create a YAML file called `_data/summary.yml` (if it does not
yet exist). Note that the summary must be located under the directory `_data/`.
The summary file shows the structure of your entire document. In particular:

- The summary file shows the location of each section or chapter of your
  document. Recall that each section or chapter should be a separate Markdown
  file located under the directory `doc/`.
- The summary file shows the order in which each section or chapter should
  appear when you build your site. The ordering of the section/chapter will be
  used to generate the table of contents in the sidebar.

Refer to the [summary file][summary] of tekyll for an example.

#### Images

Images should be placed under `assets/img/` (the default directory used by
tekyll) or another location of your choice. If you use a content delivery
network (CDN) for images, ensure you set the URL of the CDN in the file
`_config.yml`. The images used by the [tekyll site][tekyllSite] are hosted by
GitHub, as can be seen in the following lines of the configuration file shipped
with tekyll:

```yml
# The CDN endpoint for images.
# Notice that once it is assigned, the URL of the CDN will be added to all
# image (site avatar and images of each page) paths starting with '/'.
#
# e.g. 'https://cdn.com'
img_cdn: https://raw.githubusercontent.com/quacksouls/tekyll/main/assets/img/
```

### Build

Feel free to use a build automation utility of your choice. The default build
automation tool used by this Jekyll template (i.e. tekyll) is [Make][make]. The
description below refers to the `Makefile` shipped with tekyll.

The `Makefile` controls all aspects of the build process. Refer to the
[`Makefile`][makefile] of tekyll for an example. The following explains how the
`Makefile` of tekyll works. Note that the `Makefile` uses scripts under the
directory `util/`.

- `build` -- This builds a local copy of your entire site. Use the command:

  ```sh
  $ make build
  ```

  to build your local copy.

- `clean` -- Cleanup various junk files. Use the command:

  ```sh
  $ make clean
  ```

  to perform the cleanup.

- `pretty` -- Use [Prettier][prettier] to automatically format and indent
  Markdown files. Use the command:

  ```sh
  $ make pretty
  ```

  to run Prettier on the Markdown files under `doc/`.

- `view` -- Useful for viewing a draft of your site on your local machine. This
  builds a local copy of your entire site. It also starts a local web server to
  allow you to view your site on your local machine. Use the command:

  ```sh
  $ make view
  ```

  to build a local copy of your site and start a local server. Open a web
  browser and navigate to the address `http://127.0.0.1:4000` to view your
  site.

## License

This work is covered by the MIT license. It is based on the Chirpy template by:

Copyright (c) 2021 [Cotes Chung][CotesChung]

Modification by:

Copyright (c) 2023 [Duck McSouls][quack]

[chirpy]: https://github.com/cotes2020/jekyll-theme-chirpy
[chirpyDoc]: https://chirpy.cotes.page
[chirpyStarter]: https://github.com/cotes2020/chirpy-starter
[config]: ./_config.yml
[coo]: https://github.com/quacksouls/jekyll-theme-coo
[CotesChung]: https://github.com/cotes2020
[cygwin]: https://cygwin.com
[git]: https://git-scm.com
[githubDesktop]: https://desktop.github.com
[githubDesktopLinux]: https://github.com/shiftkey/desktop
[gnuMake]: https://www.gnu.org/software/make/
[jekyllInstall]: https://jekyllrb.com/docs/installation/
[make]: https://en.wikipedia.org/wiki/Make_(software)
[makefile]: https://github.com/quacksouls/tekyll/blob/main/Makefile
[prettier]: https://prettier.io
[quack]: https://github.com/quacksouls
[summary]: https://github.com/quacksouls/tekyll/blob/main/_data/summary.yml
[tekyll]: https://github.com/quacksouls/tekyll
[tekyllDoc]: https://github.com/quacksouls/tekyll/tree/main/doc
[tekyllIndex]: https://github.com/quacksouls/tekyll/blob/main/index.html
[tekyllSite]: https://tekyllcoo.github.io
