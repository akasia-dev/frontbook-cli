!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./dist/src/index.js",n(n.s=3)}([function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function u(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}l((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getLocale=t.getLocaleCode=void 0;var a=i(n(7)),u=n(8);t.getLocaleCode=function(e){return r(void 0,void 0,void 0,(function(){var t;return o(this,(function(n){switch(n.label){case 0:t=e,n.label=1;case 1:return n.trys.push([1,3,,4]),[4,(0,a.default)()];case 2:return[2,n.sent().replace(/-\S+/g,"")];case 3:return n.sent(),[3,4];case 4:return[2,t]}}))}))};t.getLocale=function(e,n){return void 0===n&&(n={defaultLocaleCode:"en"}),r(void 0,void 0,void 0,(function(){return o(this,(function(r){switch(r.label){case 0:return e?[3,2]:[4,(0,t.getLocaleCode)(n.defaultLocaleCode)];case 1:e=r.sent(),r.label=2;case 2:return[2,(0,u.i18nObject)(e)]}}))}))},t.default=t.getLocale},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function u(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}l((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.confirm=t.input=t.choice=t.inquirer=void 0;var a=i(n(5));t.inquirer=a.default;var u=i(n(6));a.default.registerPrompt("search-list",u.default);t.choice=function(e){return new Promise((function(t){return r(void 0,void 0,void 0,(function(){return o(this,(function(n){return a.default.prompt([{type:"search-list",message:e.message,name:"selected",choices:e.items.map((function(e,t){return{name:e,value:e}})),validate:function(e){return!0}}]).then((function(n){var r=0;e.items.some((function(e,t){return e===n.selected&&(r=t,!0)})),t(e.items[r])})),[2]}))}))}))};t.input=function(e){return r(void 0,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,a.default.prompt({type:"input",name:"result",message:e.message,validate:e.validate})];case 1:return[2,t.sent().result]}}))}))};t.confirm=function(e){return r(void 0,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,a.default.prompt({type:"confirm",name:"result",message:e.message})];case 1:return[2,t.sent().result]}}))}))}},function(e,t){e.exports=require("chalk")},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function u(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}l((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(4)),u=i(n(18)),l=i(n(20));r(void 0,void 0,void 0,(function(){var e;return o(this,(function(t){switch(t.label){case 0:return[4,(0,u.default)()];case 1:return t.sent(),[4,(0,l.default)()];case 2:return e=t.sent(),[4,(0,a.default)(e)];case 3:return t.sent(),[2]}}))}))},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function u(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}l((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),u=i(n(0)),l=i(n(14)),c=n(16),s=n(17),f=i(n(2));t.default=function(e){return r(void 0,void 0,void 0,(function(){var t,n;return o(this,(function(r){switch(r.label){case 0:return[4,(0,u.default)()];case 1:return t=r.sent(),console.log(""),[4,(0,a.confirm)({message:t.shouldWeCreateAFolder()})];case 2:return r.sent()?[3,4]:0!==(0,s.readdirSync)(process.cwd()).length?(console.log("\n"+f.default.yellow(t.folderIsNotEmpty())),[2]):[4,(0,l.default)("git",["clone",e.url,"."])];case 3:return r.sent(),console.log("\n"+t.downloadedTemplate({path:process.cwd()})),[3,7];case 4:return console.log(""),[4,(0,a.input)({message:t.pleaseInputCloneFolderPath()})];case 5:return n=r.sent(),[4,(0,l.default)("git",["clone",e.url,n])];case 6:r.sent(),console.log("\n"+t.downloadedTemplate({path:(0,c.resolve)(process.cwd(),n)})),r.label=7;case 7:return[2]}}))}))}},function(e,t){e.exports=require("inquirer")},function(e,t){e.exports=require("inquirer-search-list")},function(e,t){e.exports=require("os-locale")},function(e,t,n){"use strict";var r=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.detectLocale=t.i18nString=t.i18n=t.i18nObject=t.getTranslationForLocale=t.locales=t.baseLocale=void 0;var i=n(9),a=n(10),u=n(11);t.baseLocale="en",t.locales=["en","ko"];var l=o(n(12)),c=o(n(13)),s={en:l.default,ko:c.default};t.getTranslationForLocale=function(e){return s[e]||s[t.baseLocale]};t.i18nObject=function(e){return(0,i.i18nObjectLoader)(e,t.getTranslationForLocale,u.initFormatters)};t.i18n=function(){return(0,i.i18n)(t.getTranslationForLocale,u.initFormatters)};t.i18nString=function(e){return(0,i.i18nString)(e,(0,u.initFormatters)(e))};t.detectLocale=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return a.detectLocale.apply(void 0,r([t.baseLocale,t.locales],e,!1))}},function(e,t){e.exports=require("typesafe-i18n")},function(e,t){e.exports=require("typesafe-i18n/detectors")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initFormatters=void 0;t.initFormatters=function(e){return{}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={nonInteractiveIncompatible:"This terminal is not compatible with the interactive CLI function.\nThe frontbook example download requires an interactive CLI.\n\nYou can still manually download the template\nfrom the GitHub from the link below.\nLink: https://git.io/JiYK2",pleaseSelectTemplate:"Please select the frontbook demo you want to clone it.\n",shouldWeCreateAFolder:"Shall we create a separate folder and create a template in it?\nIf you select No, it will be immediately clone to \nthe folder where the command was executed.",pleaseInputCloneFolderPath:"Please enter the folder name for the clone.",downloadedTemplate:"The template download has been completed.\nPath: {path:string}",folderIsNotEmpty:"The folder is not empty, so clone is not possible with that path.\nIf you want to clone the path right away,\nPlease empty all files in the path."}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={nonInteractiveIncompatible:"해당 터미널은 인터렉티브 CLI 기능을 호환하지 않습니다.\n프론트북 예시 다운로드에는 인터렉티브 CLI가 필요합니다.\n\n아래 링크에서 수동으로 깃허브에서 템플릿을 다운로드 하실 수 있습니다.\n링크: https://git.io/JiYK2",pleaseSelectTemplate:"복제 받고자 하는 프론트북 데모를 선택해주세요.\n",shouldWeCreateAFolder:"별도의 폴더를 생성하고 그 안에 템플릿을 생성할까요?\n아니요를 선택하시면 명령어가 실행된 폴더에 바로 클론 됩니다.",pleaseInputCloneFolderPath:"복제해올 폴더 명을 입력해주세요",downloadedTemplate:"템플릿 복제가 완료되었습니다.\n경로: {path}",folderIsNotEmpty:"폴더가 비어있지 않아 해당 경로로 복제가 불가능합니다.\n해당 경로에 바로 클론하길 원하는 경우 경로 내 모든 파일을 비워주세요."}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(15);t.default=function(e,t){return void 0===t&&(t=[]),new Promise((function(n){var o=(0,r.spawn)(e,t,{stdio:[process.stdin,process.stdout,"pipe"],cwd:process.cwd()});o.on("close",n),o.on("exit",n)}))}},function(e,t){e.exports=require("child_process")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("fs")},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function u(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}l((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(19)),u=i(n(2)),l=i(n(0));t.default=function(){return r(void 0,void 0,void 0,(function(){var e;return o(this,(function(t){switch(t.label){case 0:return[4,(0,l.default)()];case 1:return e=t.sent(),(0,a.default)()||(console.log(u.default.green(e.nonInteractiveIncompatible())),process.exit()),[2]}}))}))}},function(e,t){e.exports=require("is-interactive")},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function u(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}l((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(21),u=i(n(0)),l=n(1);t.default=function(){return r(void 0,void 0,void 0,(function(){var e,t;return o(this,(function(n){switch(n.label){case 0:return[4,(0,u.default)()];case 1:return e=n.sent(),[4,(0,l.choice)({message:e.pleaseSelectTemplate(),items:Object.keys(a.templateList)})];case 2:return t=n.sent(),[2,{name:a.templateList[t],url:a.templateList[t]}]}}))}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.templateList=void 0,t.templateList={"React Template":"https://github.com/akasia-dev/frontbook-react-example","Next.js Tempalte":"https://github.com/akasia-dev/frontbook-nextjs-example","React Styled-Jsx Template":"https://github.com/akasia-dev/frontbook-react-stylejsx-example","React Styled-Jsx Tailwind Template":"https://github.com/akasia-dev/frontbook-react-stylejsx-tailwind-example"}}]);