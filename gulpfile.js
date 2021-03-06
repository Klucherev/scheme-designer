var gulp = require('gulp');
var ts = require('gulp-typescript');
var uglify = require('gulp-uglify');
var tsProject = ts.createProject("tsconfig.json");
var concat = require('gulp-concat');
var pump = require('pump');
var watch = require('gulp-watch');
var rename = require('gulp-rename');
var gulpSequence = require('gulp-sequence');

gulp.task('ts', function () {
    gulp.src('src/**/*.ts')
        .pipe(tsProject())
        .pipe(concat('scheme-designer.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('all', function (cb) {
    gulpSequence('ts', 'compress', cb)
});

gulp.task('compress', function(cb) {
    pump([
            gulp.src('dist/scheme-designer.js'),
            rename({suffix: '.min'}),
            uglify(),
            gulp.dest('dist')
        ],
        cb
    );
});

gulp.task('watch', function () {
    gulp.watch('src/**/*.ts', ['all']);
});


gulp.task('default', ['watch']);
