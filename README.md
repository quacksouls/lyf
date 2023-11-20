# Coo template

This is a template for using the Jekyll theme [Coo][coo] to create online
documentation.  Coo is a fork of the Jekyll theme [Chirpy][chirpy] with some
modifications to make it easy for creating online documentation.  This template
is based on the [Chirpy starter][chirpyStarter] template.  You might find the
[Chirpy documentation][chirpyDoc] useful to help you get started on Chirpy.

## Prerequisites

The Jekyll project has [detailed instruction][jekyllInstall] on how to setup
Jekyll and Ruby.  [Git][git] is required as part of your development
environment.  You might find [GitHub Desktop][githubDesktop] (or its
[Linux version][githubDesktopLinux]) to be a friendly graphical interface to Git
and GitHub.

## Installation

### Ruby and Jekyll

Sign into GitHub and navigate to the template [home page][tekyll].  Click on
<kbd>Use this template</kbd>, then click on <kbd>Create a new repository</kbd>
to create a repository based on the template.  Use Git or GitHub Desktop to
clone your newly created repository to your local machine.  At the top-level
directory of the repository, run the command:

```sh
$ bundle
```

This would setup the Ruby and Jekyll environment for your repository.

### Make

The software [Make][make] is recommended, but not required, to automate the
building of your site.  Under a Linux environment, you might want to install
[GNU Make][gnuMake].  On Windows, install Make as part of the [Cygwin][cygwin]
environment.

Feel free to use a build automation utility of your choice.

## Usage

See the [website of the template][tekyllSite].  You might also find the
documentation of the [Chirpy template][chirpyDoc] useful.

### Configuration

See the file [`_config.yml`][config].

## License

This work is covered by the MIT license.  It is based on the Chirpy template by:

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
[quack]: https://github.com/quacksouls
[tekyll]: https://github.com/quacksouls/tekyll
[tekyllSite]: https://quacksouls.github.io/tekyll/
