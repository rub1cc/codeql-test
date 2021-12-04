// import express and libxmljs
var express = require("express");
var libxmljs = require("libxmljs");

// upload and parsing to xml
var app = express();
app.use(express.bodyParser());
app.post("/", function (req, res) {
  var xml = req.body.xml;
  var doc = libxmljs.parseXml(xml);
  var root = doc.root();
  var to = root.get("ToUserName").text();
  var from = root.get("FromUserName").text();
  var content = root.get("Content").text();
  var msgType = root.get("MsgType").text();
  var createTime = root.get("CreateTime").text();
  var msgId = root.get("MsgId").text();
  var xml =
    "<xml><ToUserName><![CDATA[" +
    from +
    "]]></ToUserName><FromUserName><![CDATA[" +
    to +
    "]]></FromUserName><CreateTime>" +
    createTime +
    "</CreateTime><MsgType><![CDATA[" +
    msgType +
    "]]></MsgType><Content><![CDATA[" +
    content +
    "]]></Content></xml>";
  res.send(xml);
});
app.listen(611);
