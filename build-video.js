/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const FFmpeg = require('fluent-ffmpeg');

const gify = new FFmpeg({ source: path.resolve(__dirname, 'src/public/images/spinner/Ripple-1s-200px.gif') });

gify.clone()
  .withVideoCodec('libx264')
  .withFps(25)
  .toFormat('mp4')
  .saveToFile(path.resolve(__dirname, 'src/public/images/spinner/Ripple-1s-200px.mp4'));

gify.clone()
  .withFps(25)
  .toFormat('webm')
  .saveToFile(path.resolve(__dirname, 'src/public/images/spinner/Ripple-1s-200px.webm'));
