<?php
/*
 * Magic Mirror
 * Module: temperature
 * Author: Sebastian Wiedling - bAstimc
 * www.one-4-u.de
 */

function get_Temperature($device = false) {
	if(!$device) {
		return 'No device.';
	}
	$file = '/sys/devices/w1_bus_master1/'.$device.'/w1_slave';
	
	$lines = file($file);
	$temp = explode('=', $lines[1]);
	$temp = number_format($temp[1] / 1000, 1, '.', '');

	return $temp;
}

?>
