var gulp = require('gulp');
var connect = require('gulp-connect');


// # Connect
gulp.task('connect', function()
{
    connect.server();
});

// Default task
gulp.task('default', ['connect']);
