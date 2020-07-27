
vDataJSON.tpl.template4json = `
<UL class="itemlist">  <!-- Object: root -->
{{#with .}}
<LI class="item4list">
<UL class="itemlist">  <!-- Object: root.collector -->
{{#with collector}}
<LI class="item4list">  {{{firstname}}}
 <!-- String Format: text -->
</LI>
<LI class="item4list">  {{{lastname}}}
 <!-- String Format: text -->
</LI>
<LI class="item4list">  {{{email}}}
 <!-- String Format: text -->
</LI>
{{/with}}
</UL> <!-- Object: root.collector -->
</LI>
<LI class="item4list">
<OL class="enumlist">  <!-- Array: root.data -->
<!-- Array Path: root.data  -->
{{#each data}}
<LI class="item4list"> Sub-Type of Array Element: 'object'
<UL class="itemlist">  <!-- Object: root.data.* -->
{{#with this}}
<LI class="item4list">  {{{geolocation}}}
 <!-- String Format: text -->
</LI>
<LI class="item4list">  {{{temperature}}}
</LI>
{{/with}}
</UL> <!-- Object: root.data.* -->
</LI>
{{/each}}
{{#each data}}
<LI class="item4list"> Sub-Type of Array Element: 'object'
<UL class="itemlist">  <!-- Object: root.data.* -->
{{#with this}}
<LI class="item4list">  {{{geolocation}}}
 <!-- String Format: text -->
</LI>
<LI class="item4list">  {{{temperature}}}
</LI>
<LI class="item4list">  {{{ph}}}
</LI>
{{/with}}
</UL> <!-- Object: root.data.* -->
</LI>
{{/each}}
</OL> <!-- Array: root.data -->
</LI>
<LI class="item4list">
{{#if done}}
       <!--  root.done=true  -->
{{else}}
       <!--  root.done=false  -->
{{/if}}
</LI>
<LI class="item4list">  {{{color}}}
 <!-- String Format: color -->
</LI>
{{/with}}
</UL> <!-- Object: root -->
`;
