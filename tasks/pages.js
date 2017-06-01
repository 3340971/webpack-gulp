import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('pages',()=>{
  return gulp.src('src/views/**/*.ejs')
    .pipe(gulp.dest('dist/views'))
    .pipe(gulpif(args.watch,livereload()))
})
