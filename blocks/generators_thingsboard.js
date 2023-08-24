Blockly.Python['Token'] = function(block) {
    var value_token = Blockly.Python.valueToCode(block, 'token', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_thingsboard'] = 'import thingsboard';
    var code = `client = thingsboard.TBDeviceMqttClient('iot1.wsa.cloud', access_token=${value_token})\nclient.connect()\n`;
    return code;
  };
  Blockly.Python['Publish'] = function(block) {
    var code = `sht31value = {'temperature': temp, 'humidity': hum}\nclient.publish_data( "v1/devices/me/telemetry",sht31value)\n`;
    return code;
  };