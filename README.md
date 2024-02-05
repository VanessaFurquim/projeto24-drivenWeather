# DrivenWeather: Levo Um Casaquinho?

## 1. About

Interface application to which the user can resort to check weather conditions and forecast. The platform humorously advices between bringing a coat or not, according to the temperature during the day.

## 2. Deploy

click the link to access the application on your browser: [Deploy link](https://projeto24-driven-weather.vercel.app/)

## 3. Description

There are three main features on the application: the current weather conditions, the detailed information about the day's weather, and the weather forecast for the next five days, exhibited in a chart.
The information displayed is determined by a location: the user may search a city by name and acquire the desired data. The city of São Paulo is set as the default location.

### Page Elements and Style:

- **Side Panel**:
   ![Alt text](image.png)

   - | title and logo
   - | search bar: search by city name that triggers a drop-down list of suggested cities registered in the database.
   - | current temperature and icon: temperature in celsius degrees and dynamic icon and font color that changes to create a better experience for the user.
   - | weather simple description: few-word description of the current weather conditions.
   - | current date: showcases the current date and the weekday.


- **Main Panel**:
    ![Alt text](image-1.png)

   - | searched location information: city name and its coordenates.
   - | day's weather conditions' detailed information: minimum and maximum temperatures, humindity in percentage, and wind seep in meters per second.
   - | advice statement: a sentence that instructs the user to bring a coat when outdoors - in the case of either the current, minimum, or maximum temperatures are lower than 17°C - or tells them that a coat is not necessary.
   - | weather forecast chart: line chart that shows the user the temperature projection, in relation to the date, from the current moment into the next five days, in intervals of three hours: mid-night, 3am, 6am, 9am, noon, 3pm, 6pm, and 9pm. For a better visualization, the user can hover the cursor over an specific dot and a box will exhibit the date and the temperature expected for that time.

## 3. Technologies

- JavaScript
- React
- Vite
- Axios

## 4. How To Run The Application:

This application utilizes the free version, open API from openWeatherMap to fetch its weather information.

1. Create an account on their official [openWeatherMap](https://home.openweathermap.org/) website.

2. In "Princing", on the top navegation bar, you can find the free version of the API:
![Alt text](image-2.png)

3. After clicking on "Get API Key", you will be redirected to the following page. Generate a key here:
![Alt text](image-3.png)

4. Now you should set your environment, you can base your file on the .env.example. In the file, attibute the value of the key you generated to the variable "VITE_API_KEY".

5. In the terminal, run the command to install all dependencies:
    ```bash
    npm install
    ```
6. The application will be running on an open terminal after you run the following command:
    ```bash
    npm run dev
    ```
    The preview for the application should open automatically on your default browser.