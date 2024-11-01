# AngularTodo

This is a basic proof-of-concept project to create an Angular site displaying
a to-do list, with functionality for users to add items, toggle completion on
items, and delete items.

A live version of this site is available at 
https://addisonshunter.github.io/angular-todo/

## Assumptions in design

This site is designed with the assumption that users will be accessing this
site on a desktop device, and is not meant to work on mobile. This also assumes
a modern, up-to-date web browser as of October 31st, 2024. The site was tested
on Firefox 132.0, Microsoft Edge 130.0.2849.56, as well as Brave 1.71.121.

This is also developed as a quick app, with no unit tests provided or major
industry-standard quality scans run across it. There are also no
accessibility features, including screen reader or colorblind functionalities.

Finally, for the functionality itself, assumptions were made that IDs do not
need to be displayed to the user, and are instead private to the program itself,
and that no empty To-Do list items should be accepted. Hard deletes are also
assumed, so there is no soft delete functionality.

## Running the site locally

The following were used to build the application:
- NPM version 10.9.0
- Angular version 18.2.10

For best running, make sure to use these versions.

Clone the repository from github, then navigate into the directory and run:

`npm install`

Once this is finished, run:

`ng serve`

Then open a web browser to http://localhost:4200 to view and interact with the 
app.

## Deploying the site to Github Pages

With proper permissions to the Git repository, run the following commands:

`ng build`

`ng deploy --base-href=/angular-todo/`

This will deploy the site on https://addisonshunter.github.io/angular-todo
