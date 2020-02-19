var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("autoprefixer");

gulp.task("sass", function() {
  return gulp
    .src("src/styles/scss/**/*.scss")
    .pipe(sass({outputStyle: "compressed"}))
    .pipe(gulp.dest("src/styles/css"));
});
