var days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday","holiday"],binValue=[1,2,4,8,16,32,64,128],main={getDaysOfWeek:function(e){return days.reduce(function(n,r,t){return n[String(r)]={bin:binValue[t]},e&&(n[String(r)].value=!0),n},{})},intToWeek:function(e,n){if(!Number.isInteger(e)||Number(e)>255||Number(e<0))return void console.warn("Week.js::Value must be in the range 0 to 255");var r=(255-e>>>0).toString(2).split("").reverse(),t=this.getDaysOfWeek(!0),a=Object.keys(t).reduce(function(e,n,a){return e[n]={value:!parseInt(r[a]),bin:t[n].bin},e},{});return n&&n.array&&(a=Object.keys(a).map(function(e){var n={};n[e]=e,n.value=a[e].value,n.bin=a[e].bin}).sort(function(e,n){return e.bin-n.bin})),n&&1==n.showBin?a:"array"==typeof a?a.map(function(e){return delete e.bin,e}):Object.keys(a).reduce(function(e,n){return e[n]=a[n].value,e},{})}};export default main;
