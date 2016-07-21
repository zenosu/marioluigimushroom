var expect = require("chai").expect;
var converter = require("../app/converter");

describe("Color Code Converter", function (){
  describe("RGB to Hex convertion", function(){
    it("converts the basic colors", function() { 
      var redHex = converter.rgbToHex(255,0,0);
      var greenHex = converter.rgbToHex(0,255,0);
      var blueHex = converter.rgbToHex(0,0,255);
      
      expect(redHex).to.eql("ff0000");
      expect(greenHex).to.eql("00ff00");
      expect(blueHex).to.eql("0000ff");
    });  
  });  
  describe("Hex to RGB convertion", function(){
    it("converts the basic colors", function(){
      var red = converter.hexToRgb("ff0000");
      var green = converter.hexToRgb("00ff00");
      var blue = converter.hexToRgb("0000ff");
    
      expect(red).to.deep.eql([255, 0, 0]);
      expect(green).to.deep.eql([0, 255, 0]);
      expect(blue).to.deep.eql([0, 0, 255]);
    });  
  });
});