
    var lf4d = new LoadFile4DOM();
    var options = {
      "debug": false
    };
    lf4d.init(document,options);
    //---------------------------------------------------
    //----- Create a new Loader with ID "myjsonfile" ----
    //---------------------------------------------------
    // we load the JSON as text file without parsing.
    // the
    var txtfile = lf4d.get_loader_options("myjsonfile","json");
    // Define what to do with the loaded data
    console.log("txtfile="+JSON.stringify(txtfile,null,4));
    txtfile.onload = function (data,err) {
      if (err) {
        // do something on error, perr contains error message
        console.error(err);
        alert("ERROR: Parse JSON was not successful - " + err);
      } else {
        // do something with the file content in data e.g. store  in a HTML textarea (e.g. <textarea id="mytextarea" ...>
        console.log("CALL: txtfile.onload() store the JSON as text file copy into textarea 'jsonstring'");
        // data is now a JSON file that will be converted into string with indent 4 and stored into textarea.
        //window.document.getElementById("jsonstring").value = JSON.stringify(data,null,4);
        if (editor) {
          var vJSON = null;
          try {
            vJSON = JSON.parse(data);
          } catch(e) {
            console.error("ERROR Parse JSON: "+e);
          };
          editor.setValue(vJSON);
        } else {
          console.error("ERROR: JSON Editor 'editor' is not defined");
        }
      }
    };
    // create the loader txtfile
    lf4d.create_load_dialog(txtfile);
    //-----------------------------------------------
