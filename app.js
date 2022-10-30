const fs = require('fs')
const path = require('path')

const testArr = fs.readdirSync(path.join(__dirname + '/_worldclock'))

testArr.forEach(e => {
  fs.appendFileSync('_worldclock/' + e, `
  **Related Keywords**

  <ul class='relatedKeyword'>
    <li>worldclock</li>
    <li>now time</li>
    <li>timezone</li>
    <li>est time now</li>
    <li>utc time now</li>
    <li>pst time now</li>
    <li>cst time now</li>
    <li>gmt time now</li>
    <li>cet time now</li>
    <li>sunset time today</li>
    <li>eastern time zone</li>
    <li>central time zone</li>
    <li>ist time now</li>
    <li>pacific time now</li>
    <li>edt time now</li>
    <li>est now</li>
    <li>pdt time now</li>
    <li>pst time right now</li>
    <li>time right now</li>
    <li>pacific time zone</li>
    <li>gmt time zone</li>
	  <li>central time now</li>
	  <li>timezones</li>
	  <li>mst time now</li>
	  <li>my time zone</li>
	  <li>ist now</li>
	  <li>pst now</li>
	  <li>bst time now</li>
	  <li>cdt time now</li>
	  <li>sunrise time today</li>
	  <li>aest time now</li>
    <li>world clock time</li>
  </ul>
  `)
})