console.log('Hello, Arial Unicode MS');

// git tag v0.1

// convert fonts
const Fontmin = require('fontmin');

const filename = 'Arial-Unicode-Bold.ttf';

const fontmin = new Fontmin()
                  .src(filename)
                  .dest('build')
                  .use(Fontmin.ttf2woff({
                    deflate: true
                  }));

console.log('converting');
fontmin.run((err, files) => {
  if (err) throw err;

  console.log('converted ', files);
});