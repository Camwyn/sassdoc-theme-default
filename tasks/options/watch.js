module.exports = {
	livereload: {
		files: ['sassdoc/assets/css/*.css'],
		options: {
			livereload: true
		}
	},
	css: {
		files: ['scss/*.scss'],
		tasks: ['css'],
		options: {
			debounceDelay: 500
		}
	}
};
