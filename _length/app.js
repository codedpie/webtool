const fs = require('fs')

let para = ['nm', 'μm', 'mm', 'cm', 'in', 'ft', 'yd', 'm', 'km', 'mi', 'nmi'];
let paraFull = ['Nanometer', 'Micrometer', 'Millimeter', 'Centimeter', 'Inch', 'Foot', 'Yard', 'Meter', 'Kilometer', 'Mile', 'NauticalMile'];

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
    if (para[n] == 'nm' && para[i] == 'μm') {
      val = 1000
    }
    if (para[n] == 'nm' && para[i] == 'mm') {
      val = 1e+6
    }
    if (para[n] == 'nm' && para[i] == 'cm') {
      val = 1e+7
    }
    if (para[n] == 'nm' && para[i] == 'in') {
      val = 2.54e+7
    }
    if (para[n] == 'nm' && para[i] == 'ft') {
      val = 3.048e+8
    }
    if (para[n] == 'nm' && para[i] == 'yd') {
      val = 9.144e+8
    }
    if (para[n] == 'nm' && para[i] == 'm') {
      val = 1e+9
    }
    if (para[n] == 'nm' && para[i] == 'km') {
      val = 1e+12
    }
    if (para[n] == 'nm' && para[i] == 'mi') {
      val = 1.609e+12
    }
    if (para[n] == 'nm' && para[i] == 'nmi') {
      val = 1.852e+12
    }
    if (para[n] == 'μm' && para[i] == 'nm') {
      val = 1000
    }
    if (para[n] == 'μm' && para[i] == 'mm') {
      val = 1000
    }
    if (para[n] == 'μm' && para[i] == 'cm') {
      val = 10000
    }
    if (para[n] == 'μm' && para[i] == 'in') {
      val = 25400
    }
    if (para[n] == 'μm' && para[i] == 'ft') {
      val = 304800
    }
    if (para[n] == 'μm' && para[i] == 'yd') {
      val = 914400
    }
    if (para[n] == 'μm' && para[i] == 'm') {
      val = 1e+6
    }
    if (para[n] == 'μm' && para[i] == 'km') {
      val = 1e+9
    }
    if (para[n] == 'μm' && para[i] == 'mi') {
      val = 1.609e+9
    }
    if (para[n] == 'μm' && para[i] == 'nmi') {
      val = 1.852e+9
    }
    if (para[n] == 'mm' && para[i] == 'nm') {
      val = 1e+6
    }
    if (para[n] == 'mm' && para[i] == 'μm') {
      val = 1000
    }
    if (para[n] == 'mm' && para[i] == 'cm') {
      val = 10
    }
    if (para[n] == 'mm' && para[i] == 'in') {
      val = 25.4
    }
    if (para[n] == 'mm' && para[i] == 'ft') {
      val = 304.8
    }
    if (para[n] == 'mm' && para[i] == 'yd') {
      val = 914.4
    }
    if (para[n] == 'mm' && para[i] == 'm') {
      val = 1000
    }
    if (para[n] == 'mm' && para[i] == 'km') {
      val = 1e+6
    }
    if (para[n] == 'mm' && para[i] == 'mi') {
      val = 1.609e+6
    }
    if (para[n] == 'mm' && para[i] == 'nmi') {
      val = 1.852e+6
    }
    if (para[n] == 'cm' && para[i] == 'nm') {
      val = 1e+7
    }
    if (para[n] == 'cm' && para[i] == 'μm') {
      val = 100000
    }
    if (para[n] == 'cm' && para[i] == 'mm') {
      val = 10
    }
    if (para[n] == 'cm' && para[i] == 'in') {
      val = 2.54
    }
    if (para[n] == 'cm' && para[i] == 'ft') {
      val = 30.48
    }
    if (para[n] == 'cm' && para[i] == 'yd') {
      val = 91.44
    }
    if (para[n] == 'cm' && para[i] == 'm') {
      val = 100
    }
    if (para[n] == 'cm' && para[i] == 'km') {
      val = 100000
    }
    if (para[n] == 'cm' && para[i] == 'mi') {
      val = 160900
    }
    if (para[n] == 'cm' && para[i] == 'nmi') {
      val = 185200
    }
    if (para[n] == 'in' && para[i] == 'nm') {
      val = 2.54e+7
    }
    if (para[n] == 'in' && para[i] == 'μm') {
      val = 25400
    }
    if (para[n] == 'in' && para[i] == 'mm') {
      val = 25.4
    }
    if (para[n] == 'in' && para[i] == 'cm') {
      val = 2.54
    }
    if (para[n] == 'in' && para[i] == 'ft') {
      val = 12
    }
    if (para[n] == 'in' && para[i] == 'yd') {
      val = 36
    }
    if (para[n] == 'in' && para[i] == 'm') {
      val = 39.37
    }
    if (para[n] == 'in' && para[i] == 'km') {
      val = 39370
    }
    if (para[n] == 'in' && para[i] == 'mi') {
      val = 63360
    }
    if (para[n] == 'in' && para[i] == 'nmi') {
      val = 72910
    }
    if (para[n] == 'ft' && para[i] == 'nm') {
      val = 3.048e+8
    }
    if (para[n] == 'ft' && para[i] == 'μm') {
      val = 304800
    }
    if (para[n] == 'ft' && para[i] == 'mm') {
      val = 304.8
    }
    if (para[n] == 'ft' && para[i] == 'cm') {
      val = 30.4
    }
    if (para[n] == 'ft' && para[i] == 'in') {
      val = 12
    }
    if (para[n] == 'ft' && para[i] == 'yd') {
      val = 3
    }
    if (para[n] == 'ft' && para[i] == 'm') {
      val = 3.281
    }
    if (para[n] == 'ft' && para[i] == 'km') {
      val = 3281
    }
    if (para[n] == 'ft' && para[i] == 'mi') {
      val = 5280
    }
    if (para[n] == 'ft' && para[i] == 'nmi') {
      val = 6076
    }
    if (para[n] == 'yd' && para[i] == 'nm') {
      val = 9.144e+8
    }
    if (para[n] == 'yd' && para[i] == 'μm') {
      val = 914400
    }
    if (para[n] == 'yd' && para[i] == 'mm') {
      val = 914.4
    }
    if (para[n] == 'yd' && para[i] == 'cm') {
      val = 91.44
    }
    if (para[n] == 'yd' && para[i] == 'in') {
      val = 36
    }
    if (para[n] == 'yd' && para[i] == 'ft') {
      val = 3
    }
    if (para[n] == 'yd' && para[i] == 'm') {
      val = 1.094
    }
    if (para[n] == 'yd' && para[i] == 'km') {
      val = 1094
    }
    if (para[n] == 'yd' && para[i] == 'mi') {
      val = 1760
    }
    if (para[n] == 'yd' && para[i] == 'nmi') {
      val = 2025
    }
    if (para[n] == 'm' && para[i] == 'nm') {
      val = 1e+9
    }
    if (para[n] == 'm' && para[i] == 'μm') {
      val = 1e+6
    }
    if (para[n] == 'm' && para[i] == 'mm') {
      val = 1000
    }
    if (para[n] == 'm' && para[i] == 'cm') {
      val = 100
    }
    if (para[n] == 'm' && para[i] == 'in') {
      val = 39.37
    }
    if (para[n] == 'm' && para[i] == 'ft') {
      val = 3.281
    }
    if (para[n] == 'm' && para[i] == 'yd') {
      val = 1.094
    }
    if (para[n] == 'm' && para[i] == 'km') {
      val = 1000
    }
    if (para[n] == 'm' && para[i] == 'mi') {
      val = 1609
    }
    if (para[n] == 'm' && para[i] == 'nmi') {
      val = 1852
    }
    if (para[n] == 'km' && para[i] == 'nm') {
      val = 1e+12
    }
    if (para[n] == 'km' && para[i] == 'μm') {
      val = 1e+9
    }
    if (para[n] == 'km' && para[i] == 'mm') {
      val = 1e+6
    }
    if (para[n] == 'km' && para[i] == 'cm') {
      val = 100000
    }
    if (para[n] == 'km' && para[i] == 'in') {
      val = 39370
    }
    if (para[n] == 'km' && para[i] == 'ft') {
      val = 3281
    }
    if (para[n] == 'km' && para[i] == 'yd') {
      val = 1094
    }
    if (para[n] == 'km' && para[i] == 'm') {
      val = 1000
    }
    if (para[n] == 'km' && para[i] == 'mi') {
      val = 1.609
    }
    if (para[n] == 'km' && para[i] == 'nmi') {
      val = 1.852
    }
    if (para[n] == 'mi' && para[i] == 'nm') {
      val = 1.609e+12
    }
    if (para[n] == 'mi' && para[i] == 'μm') {
      val = 1.609e+9
    }
    if (para[n] == 'mi' && para[i] == 'mm') {
      val = 1.609e+6
    }
    if (para[n] == 'mi' && para[i] == 'cm') {
      val = 160900
    }
    if (para[n] == 'mi' && para[i] == 'in') {
      val = 63360
    }
    if (para[n] == 'mi' && para[i] == 'ft') {
      val = 5280
    }
    if (para[n] == 'mi' && para[i] == 'yd') {
      val = 1760
    }
    if (para[n] == 'mi' && para[i] == 'm') {
      val = 1609
    }
    if (para[n] == 'mi' && para[i] == 'km') {
      val = 1.609
    }
    if (para[n] == 'mi' && para[i] == 'nmi') {
      val = 1.151
    }
    if (para[n] == 'nmi' && para[i] == 'nm') {
      val = 1.852e+12
    }
    if (para[n] == 'nmi' && para[i] == 'μm') {
      val = 1.852e+9
    }
    if (para[n] == 'nmi' && para[i] == 'mm') {
      val = 1.852e+6
    }
    if (para[n] == 'nmi' && para[i] == 'cm') {
      val = 185200
    }
    if (para[n] == 'nmi' && para[i] == 'in') {
      val = 72910
    }
    if (para[n] == 'nmi' && para[i] == 'ft') {
      val = 6076
    }
    if (para[n] == 'nmi' && para[i] == 'yd') {
      val = 2025
    }
    if (para[n] == 'nmi' && para[i] == 'm') {
      val = 1852
    }
    if (para[n] == 'nmi' && para[i] == 'km') {
      val = 1.852
    }
    if (para[n] == 'nmi' && para[i] == 'mi') {
      val = 1.151
    }

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
*Symbol*: ${para[n]}

### ${paraFull[i]}
*Symbol*: ${para[i]}

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
