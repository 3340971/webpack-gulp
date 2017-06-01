import gulp from 'gulp';
import del from 'del';
import args from './util/args';

gulp.task('clean',()=>{
  return del(['dist/statics','dist/views'])
})
