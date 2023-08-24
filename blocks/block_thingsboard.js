Blockly.defineBlocksWithJsonArray(
    [{
      "type": "Token",
      "message0": "Thingsboard Connect Auth Token: %1",
      "args0": [
        {
          "type": "input_value",
          "name": "token",
          "check": "String"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#3498DB",
      "tooltip": "",
      "helpUrl": ""
    },
    {
        "type": "Publish",
        "message0": "Publish to Thingsboard",
        "inputsInline": true,
        "colour": "#3498DB",
        "tooltip": "",
        "helpUrl": ""
      }]);