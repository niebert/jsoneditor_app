      function el(pID) {
        return document.getElementById(pID);
      }

      // Hook up the submit button to log to the console
      el('submit').addEventListener('click',function() {
        // Get the value from the editor
        var vContent = JSON.stringify(editor.getValue(),null,4);
        console.log("JSON Data:\n"+vContent);
      });

      // Hook up the Restore to Default button
      el('restore').addEventListener('click',function() {
        editor.setValue(starting_value);
      });

      // Hook up the enable/disable button
      el('enable_disable').addEventListener('click',function() {
        // Enable form
        if(!editor.isEnabled()) {
          editor.enable();
        }
        // Disable form
        else {
          editor.disable();
        }
      });

      // Hook up the submit button to export JSON
      el('bExportJSON').addEventListener('click',function() {
        // Get the value from the editor
        var vJSON = editor.getValue();
        var vContent = JSON.stringify(vJSON,null,4);
        var vFile = el("jsonfile").value;
        saveFile2HDD(vFile,vContent);
        console.log("JSON output '"+vFile+"':\n"+vContent);
      });

      // Hook up the submit button to export JSON Schema
      el('bExportSchemaJSON').addEventListener('click',function() {
        // Get the value from the editor
        console.log("BEFORE editor.schema:\n"+JSON.stringify(editor.schema,null,4));
        var vJSON = editor.schema;
        var vContent = JSON.stringify(vJSON,null,4);
        var vFile = "json4schema.json";
        console.log("JSON Schema output '"+vFile+"':\n"+vContent);
        saveFile2HDD(vFile,vContent);
      });

      function getBaseFileName() {
        var vFile = el("jsonfile").value;
        if (vFile.indexOf(".")>0) {
          vFile = vFile.substr(0,vFile.indexOf("."));
        }
        return vFile;
      }

      el('bExportOutput').addEventListener('click',function() {
        // Get the value from the editor
        console.log("button 'bExportOutput' pressed");
        var vJSON = editor.getValue();
        var vTplID = "template4json";
        var vTemplate = vDataJSON.tpl[vTplID];
        console.log("vTemplate="+vTemplate.subtr(0,250)+"...");
        //var vContent = Handlebars4Code.compile_code(vTplID,vJSON);
        var vCompiler = Handlebars4Code.create_compiler4template(vTemplate);
        var vContent = vCompiler(vJSON);
        var vFile = getBaseFileName();
        vFile += el("tExtension").value;
        saveFile2HDD(vFile,vContent);
        console.log("JSON Template Output stored in '"+vFile+"'"+vContent);
      });
