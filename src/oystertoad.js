/*!
* OysterToad JavaScript Library v 0.1
* https://github.com/EricRohlfs/OysterToad
* 
* Copyright Eric Rohlfs
* Released under the MIT license
*
* Date: 2018-08-11
*/

Vue.component('asp-image', {
    props: ['imageurl', 'id', 'cssclass'],
    template: '<img v-bind:id="id" v-bind:src="imageurl" v-bind:class="cssclass"/>'
});

Vue.component('asp-label', {
    props: ['text', 'cssclass', 'associatedcontrolid'],
    template: '<label v-bind:class="cssclass" v-bind:for="associatedcontrolid">{{text}}</label>'
});

Vue.component('asp-textbox', {
    props: ['cssclass','text'],
    template: '<input type="text" v-bind:class="cssclass" v-bind:value="text"></input>'
});

Vue.component('asp-button', {
    props: ['text', 'cssclass','onclick'],
    template: '<button type="button" v-bind:class="cssclass" v-bind:onclick="onclick">{{text}}</button>'
});

(function () {
    //delete the code behind at the top of the page.
    codeBehind = document.querySelector("body").childNodes[0];
    codeBehind.parentNode.removeChild(codeBehind)

    //convert asp:tagName to asp-tagname (vue does not support namespaces)
    formId = document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "asp:form")[0].getAttribute('id');
    newContent = document.querySelector('#' + formId).innerHTML.replace(/asp:/gi, 'asp-');
    var form2 = Vue.compile('<div>'+ newContent + '</div>');
    new Vue({
        el: '#' + formId,
        render: form2.render,
        staticRenderFns: form2.staticRenderFns
    });
})();
