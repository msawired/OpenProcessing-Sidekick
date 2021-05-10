# OpenProcessing-Sidekick

 Sidekick is a helper library that extends the functionality of sketches on OpenProcessing by allowing sketches to communicate with the website itself.

 ## Setup
 You can enable Sidekick for P5js projects easily in the OpenProcessing code editor under libraries.

 ![Screenshot of Library Enabled](https://github.com/msawired/OpenProcessing-Sidekick/blob/main/screenshot.png?raw=true)

 If you are using HTML/CSS mode, you can add it to your html using below:
``` 
 <script src="https://cdn.jsdelivr.net/gh/msawired/OpenProcessing-Sidekick@latest/sidekick.js">
```

## Functions

### requestDeviceMotion
Allows sketches to access device motion properties, to be used with [P5js Acceleration Events](https://p5js.org/reference/#EventsAcceleration). This function requests OpenProcessing to enable deviceMotion API and pass any observed events to the sketch window.
```
OpenProcessing.requestDeviceMotion();
 circle(x, y, radius);



OpenProcessing.requestUserInfo(['fullname'], 'I wanna keep score')
.then(function(data){ print(data)})
.catch(function(){ print('rejected')}); 
