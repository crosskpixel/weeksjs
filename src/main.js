var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "holiday"];
var binValue = [1, 2, 4, 8, 16, 32, 64, 128];
export default {
	_calc: function (arr) {
		return arr.reduce(function (pv, cur) {
			var i = days.indexOf(String(cur).toLowerCase());
			if (i === -1) throw new Error("Weeksjs::The given day is not supported\nVALUE INCORRECT=" + cur);
			pv += binValue[i];
			return pv;
		}, 0);
	},
	_dayWeeks: function () {
		return days.reduce(function (prev, d, i) {
			d = String(d)
			prev[d] = {
				bin: binValue[i]
			};
			prev[d].value = true;
			return prev;
		}, {});
	},
	getDaysOfWeek: function () {
		return days.map(function (d, i) {
			return {
				"day": d,
				"value": binValue[i]
			}
		});
	},
	_intToWeek: function (v, opt) {
		v = Number(v);
		if (!Number.isInteger(v) || v > 255 || v < 0) {
			throw new Error("Week.js::Value must be in the range 0 to 255");
		}
		var bin = ((255 - v) >>> 0)
			.toString(2)
			.split('')
			.reverse();
		var r = Object.keys(this._dayWeeks()).reduce(function (pv, cur, i) {
			pv[cur] = !parseInt(bin[i])
			return pv;
		}, {});
		if (opt && opt.array)
			return Object.keys(r).map(function (day) {
				var o = {};
				o["day"] = day;
				o["value"] = r[day];
				return o;
			})
		return r;
	},
	_weekToInt: function (arg) {
		if (Array.isArray(arg))
			return this._calc(arg);
		if (typeof arg == 'object')
			return this._calc(Object.keys(arg).filter(function (d) {
				return arg[d];
			}));

		throw new Error("Weeksjs::The given data type is not valid");
	},
	encode: function(arg) {
		return this._intToWeek(arg);
	},
	decode: function(arg) {
		return this._weekToInt(arg);
	}
}