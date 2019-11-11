var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "holiday"];
var binValue = [1, 2, 4, 8, 16, 32, 64, 128];

export default {
	getDaysOfWeek: function (insertValues) {
		return days.reduce(function (prev, day, i) {
			prev[String(day)] = {
				bin: binValue[i]
			};
			if (insertValues) {
				prev[String(day)].value = true;
			}
			return prev;
		}, {});
	},
	intToWeek: function (value, options) {
		if (!Number.isInteger(value) || Number(value) > 255 || Number(value < 0)) {
			console.warn("Week.js::Value must be in the range 0 to 255");
			return;
		}
		var splitedBinary = ((255 - value) >>> 0)
			.toString(2)
			.split('')
			.reverse();
		var days = this.getDaysOfWeek(true);
		var result = Object.keys(days).reduce(function (prev, next, i) {
			prev[next] = {
				value: !parseInt(splitedBinary[i]),
				bin: days[next].bin
			};
			return prev;
		}, {});

		if (options && options.array) {
			result = Object.keys(result).map(function (day) {
				var obj = {};
				obj[day] = day;
				obj["value"] = result[day].value;
				obj["bin"] = result[day].bin;
			}).sort(function (a, b) {
				return a.bin - b.bin;
			});
		}

		if (options && options.showBin == true) {
			return result;
		} else {
			if (typeof result == 'array') {
				return result.map(function (obj) {
					delete obj.bin
					return obj;
				})
			}
			return Object.keys(result).reduce(function (prev, cur) {
				prev[cur] = result[cur].value;
				return prev;
			}, {})
		}
	}
}