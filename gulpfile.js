var gulp = require("gulp");
var webpack = require('gulp-webpack');
var zip = require("gulp-zip");
var forceDeploy = require("gulp-jsforce-deploy");
// var credentials = require("./jsforce.config.json");

/**** DEVELOPMENT ****/

gulp.task("develop", [
    'develop:staticresource-generate', 'develop:staticresource-upload'
], function() {});

gulp.task('develop:staticresource-generate', function() {
    return gulp.src('./front/src/index.js').pipe(webpack(require('./front/webpack.config.build.js'))).pipe(gulp.dest('./src/staticresources'));
});

gulp.task("develop:staticresource-upload", function() {
    gulp.src("./src/**", {base: "./"}).pipe(zip("./staticresources.zip")).pipe(forceDeploy({username: 'sfdc-ltg-redux-todo@jz.com', password: 'ba76acaHUtwHAY0Z55IoJNeuTtbJdkx4'}))
});
