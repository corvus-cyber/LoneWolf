# LoneWolf

# Table of Contents
1. [Description](#Description)
2. [Elevator Pitch](#Elevator_Pitch)
3. [User Story](#User_Story)
4. [Team](#Team)
5. [Credits](#Credits)
6. [Issues and Resolutions](#Issues_And_Resolutions)
7. [Future Development](#Future_Development)
8. [Wireframe](#Wireframe)
9. [Link](#Link)
10. [Screenshots](#Screenshots)

## Description 
LoneWolfStrong is a workout application built using MERN (MongoDB, Express, React and NodeJs) technologies. It serves as a guideline for bodyweight exercises that everyone can do at home with a gif and description for every exercise. It allows the user to easily build a customized workout based on muscle groups, as well as to track their progress such as weight, lean body mass, reps and time on a dynamically generated graph dashboard. With this application, we hope to make exercising during the pandemic more accessible and less confusing.

## Elevator_Pitch
Covid has had a variety of impacts on everyone. For some of us, the results can be seen by what is called the “covid-20”. You want to get back in shape, but with gyms being high risk infection areas and the cost of home-gym equipment skyrocketing, it can feel like your fitness goals are out of reach. LoneWolfStrong aims to fix this problem. A mobile-first website, we allow the user to create their own custom bodyweight program with guided walkthroughs. Our application lets the user track multiple facets of their fitness. First they can see which muscles they are targeting throughout their week, their long-term weight management goals and personal records, all from the comfort of their home.

## User_Story 
As an enduser
I want to be able to log into a mobile first application. 
When I am logged in, I want to be able to create a custom bodyweight workout so that I can achieve my fitness goals from home. After creating the workout and recording my results, I want to be able to track my progress on a data dashboard. This data dashboard should also allow me to see what progress I have made in my weight goals. 


## Team
1. Front End 
    * [Wyatt Hancock](https://github.com/corvus-cyber)  
2. Backend
    * [Dilan Li](https://github.com/DilanLi)

## Credits 
- [Auth0: which serves as the route through which our users log in](https://auth0.com/)
- [ReactStrap: which allowed us to build react-friendly toggles and displays](https://reactstrap.github.io/)
- [React-Vis: which allowed us to build our data dashboard so that users could track their progress](https://uber.github.io/react-vis/)

## Issues_And_Resolutions 
* It was difficult to find an identifier to show user-specific data on the dashboard, this was resolved by generating an unique id for each user upon registration of account 
* Needed to filter the dashboard data by user, date and muscle groups, npm packages such as lodash helped with sorting. 
* On the front end one of the issues that occurred was attempting to build a collapsible navbar and toggle buttons that would show collapsible using vanilla bootstrap documentation. This led to lots of wet code and the resulting product working not as clean as desired. 
    - In order to fix this, we learned how to incorporate pieces of react-strap into my components, swapping out the bootstrap navbar and toggle collapse buttons for it’s react-strap counterparts. This resulted in much drier code that cooperated with the desired layout. 
* Another issue that occurred was in the MuscleCard component when we tried to send the user’s desired selection of exercises to the MainWorkout, where it would be mapped out as a series of rows with the desired form and corresponding content.  
    - In order to make this work, we needed to have the user’s choices placed within an array in state. We then created a button that would take the user to the MainWorkout component, but made the button disabled so that if the user had not selected at least one exercise, they would not be able to travel to an empty component. From there we used location state to take the state of the chosen exercises, place them within the link/button so that when the user clicked it, it would map out the desired rows. 
* As a mobile-first application, it was vital that our images remain responsive, and it turned out that chrome tools was not always an accurate way to ensure this. While everything looked fine in the developer tools, upon deployment we noticed that the image meant to display which muscle the user was focusing on was being stretched on mobile devices, even though it was using the bootstrap class of img-fluid.
    - In order to fix this, we needed to establish a series of media queries that would confine the image to the desired size depending on screen size. This took quite a while to fix as the issue could not be seen in the developer tools, so it had to be tested after each deployment. 
* When it came time to deploy, we ran into one final issue: due to the many exercise gifs our application was too large to be sent to Heroku. 
    - To fix this, we ended up having to deploy the application to github. While this did not actually create a visible website, it did make it so that I could access the gifs via a url. From there, we made a .slugignore file that kept the gifs from being uploaded to the Heroku application. This resulted in the application loading onto heroku, but now without any gifs. To fix this one final issue all we needed to do was take the address of the github pages repo, and place it within the src of where the gifs would be mapped. This made it so that when the user clicked on a muscle group, it would pull the corresponding gifs from the github pages repo and place them within the desired cards.

## Future_Development
* Add preset workout options for people who just want to get started
* Add more exercise options and allow the user to target specific areas of a desired muscle (mid or rear delt, upper or lower chest, etc.).
* Add a way for the user to store and see progress pictures of themselves as an incentive to keep up the hard work. 
* Improve the lighting on some of the gifs so that they’ll be easier for the user to watch 
* Improve the manifest and service worker so that the app creates an icon/link on users’ phone screens
* Allow users to edit and delete their dashboard data


## Wireframe:
![Img of the wireframe](./client/public/assets/images/wireframe.png)

## Link: 
https://lonewolfstrong.herokuapp.com/

## Screenshots: 
![Img of the home](./client/public/assets/screenshots/home.png)
![Img of the dashboard](./client/public/assets/screenshots/datadashboard.png)
![Img of the weight page](./client/public/assets/screenshots/weight.png)
![Img of the selection page](./client/public/assets/screenshots/choose.png)
![Img of the customworkout page](./client/public/assets/screenshots/customworkout.png)