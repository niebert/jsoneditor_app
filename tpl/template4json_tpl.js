vDataJSON.tpl["template4json"] = `
## Javascript Class: \`{{name}}\`

{{{comment}}}
* created with [ClassEditorUML](https://niebert.github.io/ClassEditorUML) - Date: {{data.reposinfo.created}}
* last modifications at {{data.reposinfo.modified}}
* URL Class Editor for UML: https://niebert.github.io/ClassEditorUML
* File: \`js/{{name}}.js\`
* UML-File: \`jscc/{{name}}_uml.json\` - open with [ClassEditorUML](https://niebert.github.io/ClassEditorUML)
{{#ifcond data.superclassname "!=" " "}}
* Superclass: \`{{data.superclassname}}\` - code generation in \`ClassEditorUML\` can insert the require-commands automatically. For the settings expand the \`Repository Info\` in ClassEditorUML. You can set \`Require Classes NPM:\` to \`Yes\` and \`ClassEditorUML\` will include require command for super class. ClassEditorUML assumes, that the super class is a locally available.
\`\`\`javascript
const {{data.superclassname}} = require('./{{filename data.superclassname}}');
\`\`\`
The require command assumes the file \`{{filename data.classname}}.js\` in the same directory as \`{{filename data.superclassname}}.js\`.
{{/ifcond}}

### Diagram

|  {{name}}               |
| ---------------------------- |
| {{{attribs_uml attributes}}} |
| {{{methods_uml methods}}}    |

### Create Instance of Class
Instances of the class \`{{name}}\` can be generated with:
\`\`\`javascript
    var v{{name}} = new {{name}}();
\`\`\`

### Definition Methods - 2 Approaches
* If you want to assign definitions of methods for single instances individually, defined the method the following way. This approach allows to overwrite the method definition of single instances dynamically.
\`\`\`javascript
    this.my_method = function (pPar1,pPar2)
\`\`\`
* A prototype definition of methods for \`{{name}}\` will be set the definition as prototye for all instances of the class. Alteration of the prototye definition with change the method definition of all instances of  \`{{name}}\`. Use the following prototype definition for methods name for '{{name}}'.
\`\`\`javascript
    {{name}}.prototype.my_method = function (pPar1,pPar2)
\`\`\`
The prototype definition for methods consumes less memory for instances.

### Attributes: \`{{name}}\`
For class \`{{name}}\` the following attributes are defined:
{{#foreach attributes this}}

#### Attribute \`{{name}} : Object\`
{{{comment}}}
* Visibility: \`{{visibility}}\`
* Class: \`{{class}}\`
{{#ifcond visibility "==" "public"}}
* Default Init: \`{{{init}}}\` set by
\`\`\`javascript
       my_instance.{{name}} = {{{init}}};
\`\`\`
* Access of attribute in the code of methods by
\`\`\`javascript
      this.{{name}} = {{{init}}};
\`\`\`
{{/ifcond}}
{{#ifcond visibility "==" "private"}}
* Default Init: \`{{{init}}}\` set inside class by
\`\`\`javascript
       {{name}} = {{{init}}};
 \`\`\`
* Access of attribute in the code of methods by
\`\`\`javascript
       {{name}} = {{{init}}};
 \`\`\`
{{/ifcond}}
{{/foreach}}

### Methods: \`{{name}}\`
For class \`{{name}}\` the following methods are defined:
{{#foreach methods this}}

#### Method \`{{name}}({{#paramcall parameter}}{{/paramcall}})\`
{{{comment}}}
* Visibility: \`{{visibility}}\`
{{#ifcond return "!=" " "}}
{{#ifcond return "!=" ""}}
* Returns: \`{{return}}\`
{{#ifcond visibility "==" "public"}}
* Call: \`var v{{return}}Ret = v{{name}}.{{name}}({{#paramcall parameter}}{{/paramcall}});\` where \`v{{name}} = new {{name}}()\` is an instance of the class \`= {{name}}\`.
{{/ifcond}}
{{#ifcond visibility "==" "private"}}
* Call: \`var v{{return}}Ret = {{name}}({{#paramcall parameter}}{{/paramcall}});\`
{{/ifcond}}
{{/ifcond}}
{{/ifcond}}
{{#ifcond return "==" " "}}
{{#ifcond return "==" ""}}
{{#ifcond visibility "==" "public"}}
* Call: \`v{{name}}.{{name}}({{#paramcall parameter}}{{/paramcall}});\` where \`v{{name}} = new {{name}}()\` is an instance of the class \`{{name}}\`.
{{/ifcond}}
{{#ifcond visibility "==" "private"}}
* Call: \`{{name}}({{#paramcall parameter}}{{/paramcall}});\`
{{/ifcond}}
{{/ifcond}}
{{/ifcond}}
* Parameter List:
{{#each parameter}}
   * \`{{name}}:{{class}}\` {{{removereturn comment}}}
{{/each}}
{{/foreach}}
`;

// NodeJS: uncomment modules.export in last line
// module.export = {{classname}};
