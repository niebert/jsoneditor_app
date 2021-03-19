const fs = require("fs");
const pkg = require("./package.json");
const b4c = require("build4code").codegen;
// <div id="version">1.2.3.4</div>
console.log("Set version for 'index.html' and 'index4menu.html' for '" + pkg.name + "' with version "+pkg.version);

function outTime(pNr) {
	var vOut = pNr;
	if (pNr == 0) {
		vOut = "00"
	}
	if (pNr<10) {
		vOut = "0"+pNr;
	};
	return vOut
}


function getDateTime() {
	var vNow = new Date();
	var vSep = "/"; // set separator for date
	var vOut = vNow.getFullYear() + vSep +outTime(vNow.getMonth()+1) + vSep + outTime(vNow.getDate());
  vOut += " "; // Separator between Date and Time
	vSep = ":"; // set separator for time
	vOut += vNow.getHours() + vSep + outTime(vNow.getMinutes()) + vSep + outTime(vNow.getSeconds());
	return vOut;
}


function replace_date_modified(data) {
	data = data.replace(/<div\s+id="datetime"\s+style[^<]+<\/div>/g,"<div id4marker=\"datetime\" style=\"display: inline-block\">"+getDateTime()+"</div>");
	data = data.replace(/<div\s+id4marker="datetime"\s+style[^<]+<\/div>/g,"<div id4marker=\"datetime\" style=\"display: inline-block\">"+getDateTime()+"</div>");
	data = data.replace(/<span\s+id="datetime"\s+style[^<]+<\/div>/g,"<span id4marker=\"datetime\">"+getDateTime()+"</span>");
	return data;
}

function replace_version(data) {
  data = replace_date_modified(data);
  data = data.replace(/<div\s+id="version">[^<]+<\/div>/g,"<div id4marker=\"version\">"+pkg.version+"</div>");
  data = data.replace(/<div\s+id4marker="version"[^<]+<\/div>/g,"<div id4marker=\"version\" style=\"display: inline-block\">"+pkg.version+"</div>");
	data = data.replace(/<span\s+id="version">[^<]+<\/span>/g,"<span id4marker=\"version\">"+pkg.version+"</span>");
  return data;
}

var outfile = "undefined content";
var outfile4menu = "undefined content";

  fs.readFile('index.html', 'utf8', function readFileCallback(err, data){
      if (err){
          console.log(err);
      } else {
        outfile = replace_version(data);
      }
    });

    fs.readFile('index4menu.html', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
          outfile4menu = replace_version(data);
    }
    });

setTimeout(function () {
  b4c.save_file('index.html', outfile);
  b4c.save_file('index4menu.html', outfile4menu);
},2000);
