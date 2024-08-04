Movies Application:

-In this project Iam building a movies webapplication where I am able to see a group of movies which are in a slideshow with one of the posters of that movie in the background and another poster on the forground in a box with golden border.
-Every slideshow picture has a play button, when clicked will play the trailer of that movie in the same page.
-Similarly every slideshow picture has a reviews button once clicked will redirect to a page where I can see the old reviews enetered for the same movie at the bottom and also a blank text screen to enter a new review for that movie. Once entered a new review it will get store in the databse and we will be able to see our review below the text box along with old reviews.

Technology used:
-Java 17
-Spring boot
-React JS(with axios and bootstrap)
-Ngrok
-MongoDB

-We can run the backend normally and it will run in http://localhost:8080/
-We have to run the frontend with "npm start" coomand and it will run the code in http://localhost:3000/
-To hide the URl of the frontnend and also to redirect the backend url we have to use the ngrok, in cmd prompt we have to wrote "ngrok http http://localhost:8080"
(This will redirect the localhost link to the link which we will get from this.
-We initialized the Spring project using this link "https://start.spring.io/"
-The data for the mongodb is obtained externally from this link "https://github.com/fhsinchy/movieist/blob/master/_data/movies.json". This JSON file is stored and made it into collections for the MongoDB.
-We access the MongoDB atlas using this link "https://account.mongodb.com/account/login?n=https%3A%2F%2Fcloud.mongodb.com%2Fv2%2F65d063794cac581fba9441a3&nextHash=%23clusters&signedOut=true"
(If the password in the desktop MongoDb atlas for the Movie Db gets expired then we have to use the MongoDB website to renew the authentication)
-We reference the entire project from this link "https://www.youtube.com/watch?v=5PdEmeopJVQ&list=PLJLf67YAhhod0OMooE_QOYcU_D63d26_p&index=3"


 
