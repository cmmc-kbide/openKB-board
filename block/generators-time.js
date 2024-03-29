module.exports = function (Blockly) {
	'use strict';

	Blockly.JavaScript['mcp7941_rtc_begin'] = function (block) {
		var number_sda = block.getFieldValue('SDA');
		var number_scl = block.getFieldValue('SCL');
		var code =
			`
	#EXTINC#include "MCP7941x.h"#END
	
	#VARIABLE
	MCP7941x rtc = MCP7941x();
	byte _second, _minute, _hour, _dayOfWeek, _dayOfMonth, _month, _year;
	#END
	
	Wire1.begin(${number_sda}, ${number_scl});
	#LOOP_EXT_CODE
	rtc.getDateTime(&_second, &_minute, &_hour, &_dayOfWeek, &_dayOfMonth, &_month, &_year);
	#END
	\n`;
		return code;
	};

	Blockly.JavaScript['mcp7941_rtc_set_datetime'] = function (block) {
		var dropdown_dayofweek= block.getFieldValue('DOW');
		var dropdown_year = block.getFieldValue('YEAR');
		var dropdown_month = block.getFieldValue('MONTH');
		var dropdown_day = block.getFieldValue('DAY');
		var dropdown_hour = block.getFieldValue('HOUR');
		var dropdown_minute = block.getFieldValue('MINUTE');
		var dropdown_secound = block.getFieldValue('SECOND');
		var code = `rtc.setDateTime(${dropdown_secound}, ${dropdown_minute}, ${dropdown_hour}, ${dropdown_dayofweek}, ${dropdown_day}, ${dropdown_month}, ${dropdown_year});\n`;
		return code;
	};

	Blockly.JavaScript['mcp7941_rtc_get_dayOfWeek'] = function (block) {
		var code = '_dayOfWeek';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};


	Blockly.JavaScript['mcp7941_rtc_get_hour'] = function (block) {
		var code = '_hour';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['mcp7941_rtc_get_minute'] = function (block) {
		var code = '_minute';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['mcp7941_rtc_get_second'] = function (block) {
		var code = '_second';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['mcp7941_rtc_get_day'] = function (block) {
		var code = '_dayOfMonth';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['mcp7941_rtc_get_month'] = function (block) {
		var code = '_month';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
	Blockly.JavaScript['mcp7941_rtc_get_year'] = function (block) {
		var code = '_year';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};



	// =============================================================================
	// not support rtc yet
	// =============================================================================
	/*Blockly.JavaScript['rtc_get'] = function(block) {
		return [
			'mcp7940n.get_datetime()',
			Blockly.JavaScript.ORDER_ATOMIC
		];
	};
	Blockly.JavaScript['rtc_get_date'] = function(block) {
		return [
			'mcp7940n.get_date()',
			Blockly.JavaScript.ORDER_ATOMIC
		];
	};
	Blockly.JavaScript['rtc_get_time'] = function(block) {
		return [
			'mcp7940n.get_time()',
			Blockly.JavaScript.ORDER_ATOMIC
		];
	};
	Blockly.JavaScript['rtc_get_day'] = function(block) {
		return [
			'mcp7940n.get(0)',
			Blockly.JavaScript.ORDER_ATOMIC
		];
	};
	Blockly.JavaScript['rtc_get_month'] = function(block) {
		return [
			'mcp7940n.get(1)',
			Blockly.JavaScript.ORDER_ATOMIC
		];
	};
	Blockly.JavaScript['rtc_get_year'] = function(block) {
		return [
			'mcp7940n.get(2)',
			Blockly.JavaScript.ORDER_ATOMIC
		];
	};
	Blockly.JavaScript['rtc_get_hour'] = function(block) {
		return [
			'mcp7940n.get(3)',
			Blockly.JavaScript.ORDER_ATOMIC
		];
	};
	Blockly.JavaScript['rtc_get_minute'] = function(block) {
		return [
			'mcp7940n.get(4)',
			Blockly.JavaScript.ORDER_ATOMIC
		];
	};
	Blockly.JavaScript['rtc_get_second'] = function(block) {
		return [
			'mcp7940n.get(5)',
			Blockly.JavaScript.ORDER_ATOMIC
		];
	};
	Blockly.JavaScript['rtc_cal'] = function(block) {
		return 'mcp7940n.cal(' + block.getFieldValue('VALUE') + ');\n';
	};
	Blockly.JavaScript['rtc_cal_coarse'] = function(block) {
		return 'mcp7940n.cal_coarse(' + block.getFieldValue('VALUE') + ');\n';
	};
	*/
};