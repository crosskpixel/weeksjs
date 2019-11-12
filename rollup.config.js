import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from "rollup-plugin-uglify";
import uglifyES from 'rollup-plugin-uglify-es';
import pkg from './package.json';

export default [
	{
		input: 'src/main.js',
		output: {
			name: 'weeksjs',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
			resolve(),
			commonjs(),
			uglify()
		]
	},
	{
		input: 'src/main.js',
		external: [], // insert anothers libs for this lib.
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		],
		plugins: [
			uglifyES()
		]
	}
];
