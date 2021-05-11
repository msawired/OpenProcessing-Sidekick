# OpenProcessing-Sidekick

 Sidekick is a helper library that extends the functionality of sketches on OpenProcessing by allowing sketches to communicate with the website itself.

 ## Setup
 You can enable Sidekick for P5js projects easily in the OpenProcessing code editor under libraries.

 ![Screenshot of Library Enabled](https://github.com/msawired/OpenProcessing-Sidekick/blob/main/docs/screenshot.png?raw=true)

 If you are using HTML/CSS mode, you can add it to your html using below:
``` 
 <script src="https://cdn.jsdelivr.net/gh/msawired/OpenProcessing-Sidekick@latest/sidekick.js">
```

## Functions

### requestDeviceMotion
Allows sketches to access device motion properties, to be used with [P5js Acceleration Events](https://p5js.org/reference/#EventsAcceleration). This function requests OpenProcessing to enable deviceMotion API and pass any observed events to the sketch window. If browser requires it, user will be prompted a dialog (or two) to confirm access by tapping on a button (or two). Currently, iOS 13+ will prompt users a two-step dialog for confirmation, others may also do in the future). 
Returns a promise object that is resolved once Device Motion access is granted. When resolved, callback function defined in "then" function is called. 
```
OpenProcessing.requestDeviceMotion()
	.then(function(){
		//Device motion access granted
		circle(rotateX*10, rotateY*10, 10);
	}); 
```
Note: You can also ignore the "then" function above, and simply use P5js Acceleration events and variables as usual in your code (they are set to zero values by default), and they will start filling with actual values once the device motion access is granted. 

Note2: Unfortunately, browsers do not send a clear "not allowed" error you can catch if user does not confirm the dialog. Therefore, do not rely on .catch function for the promise at the moment.


### requestUserInfo
Allows sketches to request and use user's "userID" and "fullname". Once granted, these could be used for purposes such as filling character names in games, keeping score, etc. Returns a promise object that is resolved when user grants access. It is rejected if users rejects.
A "reason" can be provided to clarify how this data will be used in sketch, and it will be displayed to the user in request-access dialog.
```
OpenProcessing.requestUserInfo(Array requests, String reason)
```
Example:
```
OpenProcessing.requestUserInfo(['fullname','userID'], 'This data will be used to keep score')
	.then(function(data){ 
		//access granted
		print(data);
		})
	.catch(function(){ 
		//access rejected
		print('rejected')
		});  
```

### More to Come
This library will expand with more features as needed. If you think of something, please let us know in the issues section.

