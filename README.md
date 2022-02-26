(under construction)

### Motivation

I was supposed to create a list of the days of the week from which an event would happen and I needed something simple. I didn't find anything that pleased me, so I noticed that the binaries could help me, and I hope they help you too, this was all very new to me. , I did not believe this would be possible only with NxN relations to solve my problem, so with the help of colleagues and friends, we identified that operator BITWISE would solve our problem with the days of the week and a special holiday day.

### How Works

The library is given a number that is a sum of the active binaries relative to the table.

[![](https://pplware.sapo.pt/wp-content/uploads/2013/01/cidr_00_thumb.jpg)](https://pplware.sapo.pt/wp-content/uploads/2013/01/cidr_00_thumb.jpg "Public image")
> Table.

The days of the week are represented by each column of the table, the values ​​being Sunday = 1, Monday = 2, Tuesday = 4,
Wednesday = 8 ...
From this it is possible to use the bitwise operator to divide this integer, thus extracting the active days of the week.

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators


#### Install

`$ npm install --save weekjs`

#### ES6

```js
import React, {  useEffect } from 'react';
import weeksjs from 'weekjs';

export default props => {

	useEffect(() => {
		// ---------- Function getDaysOfWeek ---------- 
        console.log(weeksjs.getDaysOfWeek());
        // {
        // {day: "sunday", value: 1}
        // {day: "monday", value: 2}
        // {day: "tuesday", value: 4}
        // {day: "wednesday", value: 8}
        // {day: "thursday", value: 16}
        // {day: "friday", value: 32}
        // {day: "saturday", value: 64}
        // {day: "holiday", value: 128}
        // };


        // ---------- Function intToWeek ---------- 
        console.log(weeksjs.intToWeek(255);
        // {
        //     friday: true
        //     holiday: false
        //     monday: true
        //     saturday: false
        //     sunday: true
        //     thursday: true
        //     tuesday: true
        //     wednesday: true
        // } 
        console.log(weeksjs.weekToInt({
            monday: true,
            wednesday: true,
            saturday: true
        }));
        // //or
        console.log(weeksjs.weekToInt(["monday", "wednesday", "saturday"]));
	}, []);

	return null;
}
```

#### Browser

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charest="utf-8" />
        <title>WeeksJS!</title>
    </head>
	<script src="https://cdn.jsdelivr.net/npm/weeksjs@1.0.2/dist/weeksjs.umd.js">
    </script>
    <script>

        // ---------- Function getDaysOfWeek ---------- 
        console.log(weeksjs.getDaysOfWeek());
        // {
        //     sunday: { bin: 1 }
        //     monday: { bin: 2 }
        //     tuesday: { bin: 4 }
        //     wednesday: { bin: 8 }
        //     thursday: { bin: 16 }
        //     friday: { bin: 32 }
        //     saturday: { bin: 64 }
        //     holiday: { bin: 128 }
        // };

        

        // ---------- Function intToWeek ---------- 
        console.log(weeksjs.intToWeek(1+ 2 + 4 + 8 + 16 + 32, {
            array: true
        }));
        // {
        //     sunday: true
        //     monday: true
        //     tuesday: true
        //     wednesday: true
        //     thursday: true
        //     friday: true        
        //     saturday: false
        //     holiday: false
        // } 


        console.log(weeksjs.weekToInt({
            monday: true,
            wednesday: true,
            saturday: true
        }));
        // //or
        console.log(weeksjs.weekToInt(["monday", "wednesday", "saturday"]));
    </script>
</html>
```
                    
###Tables

| Functions | Description                    |
| ------------- | ------------------------------ |
| `getDaysOfWeek()`      |  return `{ "day" : "monday", value: 1 }`	     |
| `intToWeek( sum, options )`   | Pass as the sum of your binaries and receive an object representing the days of the week  `{  "sunday" : true, monday:true,.. }`   |
| `weekToInt( object || array )`   | Search the binary values ​​of the entered days and perform a sum.  `int`   |

| intToWeek | Description                    |
| ------------- | ------------------------------ |
| `sum`      |  The binary sum of the selected days |
| `options.array`   |  Returns the Object Result changed to Array[Object]    |

| weekToInt | Description                    |
| ------------- | ------------------------------ |
| `object`      |  { `{ "monday": true, "holiday": true} ` } |
| `array`   |  `["monday", "holiday"]`  |


----

### Use case (lang: PT-br)


[![](https://i.ibb.co/JCJQjCr/print.png)](https://i.ibb.co/JCJQjCr/print.png "Olá Ônibus - Application for transport public in Campo Mourão City.")
> Olá Ônibus - Application for transport public in Campo Mourão City.
                
----

> End, Thank you for getting here 
> Thanks Google translator
