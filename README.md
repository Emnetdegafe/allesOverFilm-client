# The Project (AllesOverFilm)

**Alles Over Film** is an individual portfolio project I made after taking a 9 weeks long web development course at Codaussure. The idea of making a mobile app came from the owner of the review website. The owner, as a film collector himself, wanted the app to have the functionality of scanning a BLU RAY/DVD/UHD barcode when he is at shops and be able to compare prices with online stores such as Bol.com and Amazon. So the app is made to offer this functunality for users -- so this the main use story I tried to answer developing this app.


In this project, I am expected to showcase how well I implemented the technics and the tools I learned in the duration of the course. The main learning goals in making this project is using the skills I learned in building a well functioning Backend that can respond to requests from the frontend as well as an app that can provide the functionalities that respond to the user stories.
     # specific learning goals:
      - Write clean and clear code
      - structure data and tools well
      - use libraries well (learn how to use new ones)
      - communicate the workflow and process well
      - manage time better

# Description of the project

The project is a mobile app made using React Native for a Dutch film review website, Alles Over Film. The app, for the time being, is developed for android with the hope of extending it to IOS.

# Main features include:

- List film reviews with cover images, ratings, and other information - fetched from an API
- Barcode scanner functionality that responds with prices of the requested DVD/Blu ray from two online stores(Bol.com and Amazon.nl).

# Starting the app
- The app is made with React-Native using expo so you need expo to try the app(either on your android phone or an Android Studio Emulator)
- don't forget to run the backend so you can see the reviews and fetch prices


# Frontend
- Screens folder contains the 4 screens, home, barcodescanner, reviewDetail, pricesAndReview(the screen after scanning the barcode) and About.
- Router contains two stackNavigations(HomeStack and AboutStack) and DrowerNavigation file(see the image attached for further understanding of the app navigation)
- Images used are located in the images folder, rating hexagon, logo, and others.
- Components folder has the logo, BarcodeScanner Icon, and review list components, all these components are rendered in the HomeScreen and are Stack navigated.

# Essential links

[Wireframe](images/wireframe/page_1.png)
[Project Backlog Board](https://github.com/users/Emnetdegafe/projects/1)
[Frontend Repository](https://github.com/Emnetdegafe/allesOverFilm-client)
[Backend Repo link](https://github.com/Emnetdegafe/allesOverFilm-backend)

# Gifs of app screens

[AboutScreen](images/aboutScreen.gif)
[HomeScreen](images/homeScreen.gif)
[BarcodeScannerScreen](images/scanner.gif)
[ReviewDetailScreen](images/reviewDetail.gif)





