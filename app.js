const readline = require('readline')
const downloader = require('./src/downloader.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var main = function () {
  console.log('Youtube Downloader (type \'q\' or CTRL+C to exit)')
  rl.question('Enter Youtube Video ID (e.g. Q9yn1DpZkHQ): ', async (id) => {
    if (id == 'q') 
      return rl.close()
    console.log('Downloading...')
    await downloader(id)
    main()
  })
}

main()