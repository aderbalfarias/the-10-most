# The 10 Most

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.

## Instructions on how to run the app

Clone the repository navigate to its folder and install node packages `npm install`<br>
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.<br>

## Explanation of the project structure
I used CLI to create a project with default structure and then I created the following folders:
- src/shared
- src/environment
- src/app/components
- src/app/models
- src/app/services

## What areas you focused on getting done
First thing I did it was retrieve the data from the API using RxJs then I moved on to UI where I tried to have something not too bad on the screen I was not able to get even close of the required design. CSS consumed most of my time I would say.

## Identify expected error cases that are unhandled
- If the API fail nothing will be showed to the user, not even a pop-up with a error message (my bad)
- I believe there are some missing colors and some are not accurate on Figma design but that is not a big deal
- Stack Overflow API has a throttling mechanism in place that limits the number of requests done by an IP it could make the API fail
- CSS I have implemented is not responsive for all screens at the moment

## Improvements in future iterations or with more time
- Add tests
- Adjust the structure to supporte growth of the application 
- Improve the CSS and make it more reusable
- Improve the responsiveness
- Improve the UX


