# React-Redux-Realworld.io

## General functionality:

* Authenticate users via JWT (login/signup pages + logout )
* CRU* users (sign up & settings page - no deleting required)
* CRUD Articles
* CR*D Comments on articles (no updating required)
* GET and display paginated lists of articles
* Favorite articles
* Follow other users

## The general page breakdown looks like this:

* Home page (URL: / )
* List of tags
* List of articles pulled from either Feed, Global, or by Tag
* Sign in/Sign up pages (URL: /login, /signup )
* Use JWT (store the token in localStorage)
* Settings page (URL: /settings )
* Editor page to create/edit articles 
* Article page (URL: /article/article-slug-here )
* Delete article button (only shown to article's author)
* Comments section at bottom of page
* Delete comment button (only shown to comment's author)
* Profile page 
* Show basic user info
* List of articles populated from author's created articles or author's favorited articles
 
## Demo

The site is deployed at ```https://react-redux-realworldio.herokuapp.com```

## Built With

* React.js
* Redux 

## HOW TO RUN ON LOCALHOST

* Clone The Repository
* run ```npm install``` to install all dependencies
* run ```npm start``` to run the server

## APP INFO
* Api ``` https://conduit.productionready.io/api```
* ```realworld.io```
