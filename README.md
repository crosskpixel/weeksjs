### Motivation

-You should create a timetable for weekdays, for example, during a week, and set the times for public transit boarding points, but they will not occur every day of the week other than holidays. I worked out a way to know the days of the week using bank numbers, where you can retrieve an object with the days of the week beyond the number.



#### Install

`$ npm install --save weekjs`

#### ES6

```js
import React, {  useEffect } from 'react';
import weekjs from 'weekjs';

export default props => {

	useEffect(() => {
		console.log(weekjs.getDaysOfWeek());
		 // {
        //     friday: { bin: 32 }
        //     holiday: { bin: 128 }
        //     monday: { bin: 2 }
        //     saturday: { bin: 64 }
        //     sunday: { bin: 1 }
        //     thursday: { bin: 16 }
        //     tuesday: { bin: 4 }
        //     wednesday: { bin: 8 }
        // };
		console.log(weekjs.intToWeek(255));
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
		  
	}, []);

	return null;
}
```

#### Browser

```html
<!DOCTYPE html>
<html>
    <head>
        <mate charest="utf-8" />
        <title>WeekJS!</title>
    </head>
	<script src="./dist/weekjs.umd.js">
    </script>
    <script>

        // ---------- Function getDaysOfWeek ---------- 
        console.log(weekjs.getDaysOfWeek());
        // {
        //     friday: { bin: 32 }
        //     holiday: { bin: 128 }
        //     monday: { bin: 2 }
        //     saturday: { bin: 64 }
        //     sunday: { bin: 1 }
        //     thursday: { bin: 16 }
        //     tuesday: { bin: 4 }
        //     wednesday: { bin: 8 }
        // };


        // ---------- Function intToWeek ---------- 
        console.log(weekjs.intToWeek(63));
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
    </script>
</html>
```
                    
###Tables

| Functions | Description                    |
| ------------- | ------------------------------ |
| `getDaysOfWeek()`      |  return `{  "sunday" : { bin : 1 }, monday:{ bin: 2 },.. }`	 ]       |
| `intToWeek( sumBin, options )`   | Pass as the sum of your binaries and receive an object representing the days of the week  `{  "sunday" : true, monday:true,.. }`   |

| intToWeek | Description                    |
| ------------- | ------------------------------ |
| `sumBin`      |  The binary sum of the selected days |
| `options.showBin`   |  Returns the object the binary value of the day individually   |
| `options.array`   |  Returns the Object Result changed to Array[Object]    |


----

### Use case (lang: PT-br)


[![](https://i.ibb.co/JCJQjCr/print.png)](https://pandao.github.io/editor.md/examples/images/7.jpg "Olá Ônibus - Application for transport public in Campo Mourão City.")

> 图为：李健首张专辑《似水流年》封面
                
----

End, Thank you for getting here 