# Bar Hero
This project was intially created to help with accountabilty at large arcade style bars. The focus was to create a simple ui that managers could use to check off common upkeep tasks and repairs of machines. This means availability to take pictures and save them, check off tasks, and when urgent repairs are complete, all management will get an email.

I had built this app quickly to get a prototype available to pitch to the client.

## Quick Overview

After login, this app will bring you to the urgen tasks page. This page shows anyone that may have noticed something that needs repairs, or needs attention. When something from the urgent list is checked off, it will email everyone on the email list. 

The rest of the app is the different rooms in the bar, you go through each checklist, and make notes, and take pictures.
If anything is urgent, or needs attention, it will be added to the database, and the urgent page.

### Prerequisites

Npm, Bar Hero Api, and Firebase. 

### Installing

Pretty simple setup, just use npm to install dependencies. Follow the instructions with the api and you will be good to go.
```
Npm i
```
```
Npm start
```
## Issues
*The tasks are in the firebase database, which is relatively user friendly, but it would be nice to add the feature of editing them in the app

*This project was built with functionality in mind first, so it isn't quite responsive yet, other than on ipads.

*Right now it emails a hard coded user in the back end, getting email options would be great.

*You have to click the checkbox AFTER you do all the actions on each checklist. This needs to be fixed.

*The login functionality is not built yet.

*Its not very pretty

## Built With

* [React](https://github.com/facebook/create-react-app) - Creat-React-App
* [Firebase](https://firebase.google.com/docs/firestore/quickstart) - An easy to use NoSQL Database solution
* [React-Image-Upload](https://www.npmjs.com/package/react-images-upload) - Used to upload images
* [Material-Ui](https://material-ui.com/) - Utiltizing Googles Material Design

## Contributing
I am more than happy to take contributions to this project! Just fork, and send a pull request. If you happened to work on one of the above issues. I would be elated! Beers on me if you live in Chicago!


## Author

* **Branden LaCour** - (https://github.com/BrandenLaCour/)

## Acknowledgments

* My buddy Jonny Caron for the idea
* The disorganization of the bar industry!
