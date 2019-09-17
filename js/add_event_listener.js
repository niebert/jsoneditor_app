
      // Hook up the submit button to log to the console
      document.getElementById('submit').addEventListener('click',function() {
        // Get the value from the editor
        var vContent = JSON.stringify(editor.getValue(),null,4);
        console.log("JSON Data:\n"+vContent);
      });

      // Hook up the Restore to Default button
      document.getElementById('restore').addEventListener('click',function() {
        editor.setValue(starting_value);
      });

      // Hook up the enable/disable button
      document.getElementById('enable_disable').addEventListener('click',function() {
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
      document.getElementById('bExportJSON').addEventListener('click',function() {
        // Get the value from the editor
        var vJSON = editor.getValue();
        var vContent = JSON.stringify(vJSON,null,4);
        var vFile = el("jsonfile").value;
        saveFile2HDD(vFile,vContent);
        console.log("JSON output '"+vFile+"':\n"+vContent);
      });

      // Hook up the submit button to export JSON Schema
      document.getElementById('bExportSchemaJSON').addEventListener('click',function() {
        // Get the value from the editor
        console.log("BEFORE editor.schema:\n"+JSON.stringify(editor.schema,null,4));
        var vJSON = editor.schema;
        var vContent = JSON.stringify(vJSON,null,4);
        var vFile = vFileBase+"_schema.json";
        console.log("JSON Schema output '"+vFile+"':\n"+vContent);
        saveFile2HDD(vFile,vContent);
      });
