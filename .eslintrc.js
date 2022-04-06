module.exports = {
	env: {
		commonjs: true,
		es2021: true,
		node: true,
		jest: true,
		es6: true,
	},
	extends: ['airbnb-base', 'prettier'],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': ['error'],
	},
}
