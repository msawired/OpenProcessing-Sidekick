let OpenProcessing = {
	'requestDeviceMotion': function () {
		return new Promise((resolve, reject) => {
			OpenProcessing.deviceMotionAuthorized = function (data) {
				if (data) {
					resolve();
				} else {
					reject();
				}
			}
			window.parent.postMessage({	'messageType': 'requestDeviceMotion'}, '*');
		})
	},
	'requestUserInfo': function (requests = [], reason = '') {
		return new Promise((resolve, reject) => {
			OpenProcessing.userAuthorized = function (data) {
				if (data) {
					resolve(data);
				} else {
					reject();
				}
			}
			window.parent.postMessage({ 'messageType': 'authUser', 'message': { 'requests': requests, 'reason': reason } }, '*');

		});
	}
};