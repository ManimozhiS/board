# board

dashboard 
1. create a folder in desktop and open the same in vs code
2. create a react app in that folder by typing the following command in terminal
npx create-react-app .
(or using yarn)
3.remove the unneccessary files in src folder  like app.test.js logo.svg setuptests.js
4.remove the content in App.js folder and replace it with the code in this repository App.js file (available inside client folder of this repo)
5.do the same for App.css file (step 4)
6.create a folder named Components under src section and add 3 new files - LineChart.js BarChart.js DoughnutChart.js and add the codes in here(inside client folder) for the given files.
7.create a Home.js, Home.css , Header.js, Header.css and replace with the code given in this repository.

7.install the following dependencies using terminal in vscode:
npm install  react-chartjs-2 chart.js --save
npm install react-router-dom
npm install @material-ui/core
npm install @material-ui/icons

8.start the react app by typing in the following command:

npm start 
or 
yarn start

you should be able to view the webpage in localhost:3000 or whatever server available
