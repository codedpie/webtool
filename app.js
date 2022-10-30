const fs = require('fs')
const path = require('path')

const testArr = fs.readdirSync(path.join(__dirname + '/_length'))

testArr.forEach(e => {
  fs.appendFileSync('_length/' + e, `
  **Related Keywords**

  <ul class='relatedKeyword'>
    <li>unit converter length</li>
    <li>length conversion calculator</li>
    <li>length conversion table</li>
    <li>dimension converter</li>
    <li>distance conversion table</li>
    <li>converter size</li>
    <li>1 square feet in cm length and width</li>
    <li>nanometer to angstrom</li>
    <li>dimension converter</li>
    <li>length conversion calculator</li>
  </ul>
  `)
})