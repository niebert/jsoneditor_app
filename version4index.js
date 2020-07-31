const fs = require("fs");
const pkg = require("./package.json");
const b4c = require("build4code").codegen;
// <div id="version">1.2.3.4</div>
console.log("Set version for 'index.html' and 'index4menu.html' for '" + pkg.name + "' with version "+pkg.version);

var outfile = "undefined content";
var outfile4menu = "undefined content";

  fs.readFile('index.html', 'utf8', function readFileCallback(err, data){
      if (err){
          console.log(err);
      } else {
        outfile = data.replace(/<div\s+id="version"\s+style[^<]+<\/div>/g,"<div id4marker=\"version\" style=\"display: inline-block\">"+pkg.version+"</div>");
        outfile = data.replace(/<div\s+id="version">[^<]+<\/div>/g,"<div id4marker=\"version\">"+pkg.version+"</div>");
        outfile = data.replace(/<div\s+id4marker="version"[^<]+<\/div>/g,"<div id4marker=\"version\" style=\"display: inline-block\">"+pkg.version+"</div>");

      }
    });

    fs.readFile('index4menu.html', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
          outfile4menu = data.replace(/<div\s+id="version"\s+style[^<]+<\/div>/g,"<div id4marker=\"version\" style=\"display: inline-block\">"+pkg.version+"</div>");
          outfile4menu = data.replace(/<div\s+id="version">[^<]+<\/div>/g,"<div id4marker=\"version\">"+pkg.version+"</div>");
          outfile4menu = data.replace(/<div\s+id4marker="version"[^<]+<\/div>/g,"<div id4marker=\"version\" style=\"display: inline-block\">"+pkg.version+"</div>");
    }
    });

setTimeout(function () {
  b4c.save_file('index.html', outfile);
  b4c.save_file('index4menu.html', outfile4menu);
},2000);
