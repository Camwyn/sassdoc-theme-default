module.exports = {
	allFiles: {
		src: 'scss/**/*.scss'
	},
	options: {
		compact: true,
		config: '.scss-lint.yml',
		colorizeOutput: true,
		exclude: [
			'node_modules'
		]
	}
};
