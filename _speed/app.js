const fs = require('fs')

let para = [];
let symbol = ['']
let paraFull = ['']

let n = 0
const interval = setInterval(() => {
  for (let i = 0; i < para.length; i++) {

    let prop, sym, sym2, howto, howto2
    if (n > i) {
      prop = 'Multiply'
      sym = 'times'
      sym2 = 'divided_by'
      howto = '{{page.fom}}'
      howto2 = '{{ 1.0 | divided_by: page.fom }}'
    }
    else {
      prop = 'Divide'
      sym = 'divided_by'
      sym2 = 'times'
      howto = '{{ 1.0 | divided_by: page.fom }}'
      howto2 = '{{page.fom}}'
    }
    let val

    const fileText = `---
layout: length
title: ${paraFull[n]} to ${paraFull[i]} Converter
heading: ${para[n]} to ${para[i]}
switch: ${para[i]}-to-${para[n]}
fom: ${val}
---

## Formula
${prop} the length value by {{page.fom}}

### ${paraFull[n]}
*Symbol*: ${symbol[n]}

### ${paraFull[i]}
*Symbol*: ${symbol[i]}

## How to Convert ${paraFull[n]} to ${paraFull[i]}?
1 ${para[n]} = ${howto} ${para[i]}

1 ${para[i]} = ${howto2} ${para[n]}

## ${paraFull[n]} to ${paraFull[i]} Convertion Table :

| ${paraFull[n]} (${para[n]}) | ${paraFull[i]} (${para[i]}) |
| ---- | ---- |
| 0.01 ${para[n]} | {{ 0.01 | ${sym}: page.fom | round: 12 }} ${para[i]} |
| 0.1 ${para[n]} | {{ 0.1 | ${sym}: page.fom | round: 12 }} ${para[i]} |
| 1 ${para[n]} | {{ 1.0 | ${sym}: page.fom | round: 12 }} ${para[i]} |
| 2 ${para[n]} | {{ 2.0 | ${sym}: page.fom | round: 12 }} ${para[i]} |
| 3 ${para[n]} | {{ 3.0 | ${sym}: page.fom | round: 12 }} ${para[i]} |
| 5 ${para[n]} | {{ 5.0 | ${sym}: page.fom | round: 12 }} ${para[i]} |
| 10 ${para[n]} | {{ 10.0 | ${sym}: page.fom | round: 12 }} ${para[i]} |
| 100 ${para[n]} | {{ 100.0 | ${sym}: page.fom | round: 12 }} ${para[i]} |

## ${paraFull[i]} to ${paraFull[n]} Convertion Table :

| ${paraFull[i]} (${para[i]}) | ${paraFull[n]} (${para[n]}) |
| ---- | ---- |
| 0.01 ${para[i]} | {{ 0.01 | ${sym2}: page.fom | round: 12 }} ${para[n]} |
| 0.1 ${para[i]} | {{ 0.1 | ${sym2}: page.fom | round: 12 }} ${para[n]} |
| 1 ${para[i]} | {{ 1.0 | ${sym2}: page.fom | round: 12 }} ${para[n]} |
| 2 ${para[i]} | {{ 2.0 | ${sym2}: page.fom | round: 12 }} ${para[n]} |
| 3 ${para[i]} | {{ 3.0 | ${sym2}: page.fom | round: 12 }} ${para[n]} |
| 5 ${para[i]} | {{ 5.0 | ${sym2}: page.fom | round: 12 }} ${para[n]} |
| 10 ${para[i]} | {{ 10.0 | ${sym2}: page.fom | round: 12 }} ${para[n]} |
| 100 ${para[i]} | {{ 100.0 | ${sym2}: page.fom | round: 12 }} ${para[n]} |

<script>
selectInput[${n}].selected = true
selectOutput[${i}].selected = true
</script>
`

    if (para[n] != para[i]) {
      fs.writeFile(`2022-08-06-${para[n]}-to-${para[i]}.md`, fileText, (err) => console.log(err))
    }
  }
  n = n + 1

  if (n >= para.length) {
    clearInterval(interval)
  }
}, 1500)
