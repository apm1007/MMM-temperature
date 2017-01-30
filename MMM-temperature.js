/*
 * Magic Mirror
 * Module: temperature
 * Author: Sebastian Wiedling - bAstimc
 * www.one-4-u.de
 */

Module.register("MMM-temperature",{
	defaults: {
		device: "",
		url: "temperature.php"
	},
	start: function() {
		var self = this;
		this.temperature = "Lade...";
		var url = "temperature.php?device="+this.config.device;
		this.sendSocketNotification('CONFIG', this.config);

		this.updateTemp();
		this.scheduleUpdate();
	},
	socketNotificationReceived: function(notification, payload) {
		if(notification === "TEMPERATURE"){
			var self = this;
			self.processData(payload);
		}
	},
	updateTemp: function() {
		var self = this;
		var retry = true;

		this.sendSocketNotification('GET_TEMPERATURE');		
		self.scheduleUpdate();		
	},
	processData: function(data) {
		this.temperature = data+" &deg;";
		//this.loaded = true;
		this.updateDom();

	},
	scheduleUpdate: function() {
		var self = this;
		setTimeout(function() {
			self.updateTemp();
		}, 10000);
	},
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.temperature;
		return wrapper;
	},
	getScripts: function() {
    		return [
        		'https://code.jquery.com/jquery-2.2.3.min.js'
    		]
	}
});
