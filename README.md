# WheatonCS Status API
API backend for the WheatonCS Status project

Use **node.js**, **express** and **mongodb**.

It was scaffolded with [**generator-express**](https://github.com/petecoop/generator-express).

### Develop
To start developing with this project, follow these steps:

1. `git clone git@github.com:WheatonCollegeCSClub/status-api.git wheatoncs-status-api`
2. `npm install`
3. `grunt`

### Endpoints

``` GET /repos/```
get all the repos that belong to the organization

``` GET /repos/:repo```
get a specific repo

``` GET /repos/:repo/contributors```
get the contributors for a specific repo

### Github API
This project uses the [Github API](http://developer.github.com/v3) to get information for projects.

### Editor Config
This project uses [editor config](http://editorconfig.org/) to keep editor styles in sync. If you're using Sublime Text, you can download the plugin [here](https://github.com/sindresorhus/editorconfig-sublime). No other configuration is necessary.
