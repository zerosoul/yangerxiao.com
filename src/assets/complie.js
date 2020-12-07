var sass = require('node-sass')
var fs = require('fs')
sass.render(
  {
    file: './scss/main.scss'
  },
  function (err, result) {
    if (err) {
      console.log({ err })
    }
    console.log({ result })
    fs.writeFile('./scss/main.min.css', result.css, function (err) {
      if (!err) {
        //file written on disk
        console.log('ok')
      }
    })
  }
)
// OR
// var result = sass.renderSync({
//   file: './scss/main.scss',
//   //   data: 'body{background:blue; a{color:black;}}',
//   outputStyle: 'compressed',
//   outFile: './scss/main.min.css'
// })
