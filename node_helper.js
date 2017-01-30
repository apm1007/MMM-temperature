'use strict';

/*
 * Node Helper: MMM-temperature
 * Author: Sebastian Wiedling - bAstimc
 * www.one-4-u.de
 */


var NodeHelper = require("node_helper");
var execPhp = require("exec-php");

module.exports = NodeHelper.create({
	start: function() {
		console.log("Starting module: "+this.name);
		this.started = false;
	},
	socketNotificationReceived: function(notification, payload) {
		const self = this;
		if(notification === 'CONFIG') {
			this.config = payload
			self.sendSocketNotification("DEVICE", this.config.device);
		} else if(notification === 'GET_TEMPERATURE') {
			self.getTemperature();
		}
	},
	getTemperature: function() {
		this.temperature = '';
		var self = this;
		execPhp(self.config.url, '/usr/bin/php', function(error, php, output) {
			php.get_temperature(self.config.device, function(err, result, output, printed) {
				self.sendSocketNotification("TEMPERATURE", result);
		   	});
		});
	}
});
