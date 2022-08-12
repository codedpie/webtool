const
  inputValue = document.getElementById('inputValue'),
  outputValue = document.getElementById('outputValue'),
  selectInput = document.getElementById('selectInput'),
  selectOutput = document.getElementById('selectOutput');

inputValue.oninput = () => inputValueEnter()
outputValue.oninput = () => outputValueEnter()
selectInput.oninput = () => inputValueEnter()
selectOutput.oninput = () => inputValueEnter()

inputValue.setAttribute('placeholder', selectInput.value)
outputValue.setAttribute('placeholder', selectOutput.value)

function inputValueEnter() {
  let
    si = selectInput.value,
    so = selectOutput.value,
    iv = inputValue.value

  inputValue.setAttribute('placeholder', si)
  outputValue.setAttribute('placeholder', so)

  let res

  if (res == undefined) {
    res = 0
  }

  if (si === so) {
    res = iv
  }

  function nanometer() {
    if (si == 'nm' && so == 'μm') {
      res = iv / 1000
    }
    if (si == 'nm' && so == 'mm') {
      res = iv / 1e+6
    }
    if (si == 'nm' && so == 'cm') {
      res = iv / 1e+7
    }
    if (si == 'nm' && so == 'in') {
      res = iv / 2.54e+7
    }
    if (si == 'nm' && so == 'ft') {
      res = iv / 3.048e+8
    }
    if (si == 'nm' && so == 'yd') {
      res = iv / 9.144e+8
    }
    if (si == 'nm' && so == 'm') {
      res = iv / 1e+9
    }
    if (si == 'nm' && so == 'km') {
      res = iv / 1e+12
    }
    if (si == 'nm' && so == 'mi') {
      res = iv / 1.609e+12
    }
    if (si == 'nm' && so == 'nmi') {
      res = iv / 1.852e+12
    }

    if (res.toString().length >= 8) {
      outputValue.value = res.toExponential(4)
    }
    else {
      outputValue.value = res
    }
  }

  function micrometer() {
    if (si == 'μm' && so == 'nm') {
      res = iv * 1000
    }
    if (si == 'μm' && so == 'mm') {
      res = iv / 1000
    }
    if (si == 'μm' && so == 'cm') {
      res = iv / 10000
    }
    if (si == 'μm' && so == 'in') {
      res = iv / 25400
    }
    if (si == 'μm' && so == 'ft') {
      res = iv / 304800
    }
    if (si == 'μm' && so == 'yd') {
      res = iv / 914400
    }
    if (si == 'μm' && so == 'm') {
      res = iv / 1e+6
    }
    if (si == 'μm' && so == 'km') {
      res = iv / 1e+9
    }
    if (si == 'μm' && so == 'mi') {
      res = iv / 1.609e+9
    }
    if (si == 'μm' && so == 'nmi') {
      res = iv / 1.852e+9
    }

    if (res.toString().length >= 8) {
      outputValue.value = res.toExponential(4)
    }
    else {
      outputValue.value = res
    }
  }

  function millimeter() {
    if (si == 'mm' && so == 'nm') {
      res = iv * 1e+6
    }
    if (si == 'mm' && so == 'μm') {
      res = iv * 1000
    }
    if (si == 'mm' && so == 'cm') {
      res = iv / 10
    }
    if (si == 'mm' && so == 'in') {
      res = iv / 25.4
    }
    if (si == 'mm' && so == 'ft') {
      res = iv / 304.8
    }
    if (si == 'mm' && so == 'yd') {
      res = iv / 914.4
    }
    if (si == 'mm' && so == 'm') {
      res = iv / 1000
    }
    if (si == 'mm' && so == 'km') {
      res = iv / 1e+6
    }
    if (si == 'mm' && so == 'mi') {
      res = iv / 1.609e+6
    }
    if (si == 'mm' && so == 'nmi') {
      res = iv / 1.852e+6
    }

    if (res.toString().length >= 8) {
      outputValue.value = res.toExponential(4)
    }
    else {
      outputValue.value = res
    }
  }

  function centimeter() {
    if (si == 'cm' && so == 'nm') {
      res = iv * 1e+7
    }
    if (si == 'cm' && so == 'μm') {
      res = iv * 100000
    }
    if (si == 'cm' && so == 'mm') {
      res = iv * 10
    }
    if (si == 'cm' && so == 'in') {
      res = iv / 2.54
    }
    if (si == 'cm' && so == 'ft') {
      res = iv / 30.48
    }
    if (si == 'cm' && so == 'yd') {
      res = iv / 91.44
    }
    if (si == 'cm' && so == 'm') {
      res = iv / 100
    }
    if (si == 'cm' && so == 'km') {
      res = iv / 100000
    }
    if (si == 'cm' && so == 'mi') {
      res = iv / 160900
    }
    if (si == 'cm' && so == 'nmi') {
      res = iv / 185200
    }

    if (res.toString().length >= 8) {
      outputValue.value = res.toExponential(4)
    }
    else {
      outputValue.value = res
    }
  }

  function inch() {
    if (si == 'in' && so == 'nm') {
      res = iv * 2.54e+7
    }
    if (si == 'in' && so == 'μm') {
      res = iv * 25400
    }
    if (si == 'in' && so == 'mm') {
      res = iv * 25.4
    }
    if (si == 'in' && so == 'cm') {
      res = iv * 2.54
    }
    if (si == 'in' && so == 'ft') {
      res = iv / 12
    }
    if (si == 'in' && so == 'yd') {
      res = iv / 36
    }
    if (si == 'in' && so == 'm') {
      res = iv / 39.37
    }
    if (si == 'in' && so == 'km') {
      res = iv / 39370
    }
    if (si == 'in' && so == 'mi') {
      res = iv / 63360
    }
    if (si == 'in' && so == 'nmi') {
      res = iv / 72910
    }

    if (res.toString().length >= 8) {
      outputValue.value = res.toExponential(4)
    }
    else {
      outputValue.value = res
    }
  }

  function foot() {
    if (si == 'ft' && so == 'nm') {
      res = iv * 3.048e+8
    }
    if (si == 'ft' && so == 'μm') {
      res = iv * 304800
    }
    if (si == 'ft' && so == 'mm') {
      res = iv * 304.8
    }
    if (si == 'ft' && so == 'cm') {
      res = iv * 30.4
    }
    if (si == 'ft' && so == 'in') {
      res = iv * 12
    }
    if (si == 'ft' && so == 'yd') {
      res = iv / 3
    }
    if (si == 'ft' && so == 'm') {
      res = iv / 3.281
    }
    if (si == 'ft' && so == 'km') {
      res = iv / 3281
    }
    if (si == 'ft' && so == 'mi') {
      res = iv / 5280
    }
    if (si == 'ft' && so == 'nmi') {
      res = iv / 6076
    }
    if (res.toString().length >= 8) {
      outputValue.value = res.toExponential(4)
    }
    else {
      outputValue.value = res
    }
  }

  function yard() {
    if (si == 'yd' && so == 'nm') {
      res = iv * 9.144e+8
    }
    if (si == 'yd' && so == 'μm') {
      res = iv * 914400
    }
    if (si == 'yd' && so == 'mm') {
      res = iv * 914.4
    }
    if (si == 'yd' && so == 'cm') {
      res = iv * 91.44
    }
    if (si == 'yd' && so == 'in') {
      res = iv * 36
    }
    if (si == 'yd' && so == 'ft') {
      res = iv * 3
    }
    if (si == 'yd' && so == 'm') {
      res = iv / 1.094
    }
    if (si == 'yd' && so == 'km') {
      res = iv / 1094
    }
    if (si == 'yd' && so == 'mi') {
      res = iv / 1760
    }
    if (si == 'yd' && so == 'nmi') {
      res = iv / 2025
    }
    if (res.toString().length >= 8) {
      outputValue.value = res.toExponential(4)
    }
    else {
      outputValue.value = res
    }
  }

  function meter() {
    if (si == 'm' && so == 'nm') {
      res = iv * 1e+9
    }
    if (si == 'm' && so == 'μm') {
      res = iv * 1e+6
    }
    if (si == 'm' && so == 'mm') {
      res = iv * 1000
    }
    if (si == 'm' && so == 'cm') {
      res = iv * 100
    }
    if (si == 'm' && so == 'in') {
      res = iv * 39.37
    }
    if (si == 'm' && so == 'ft') {
      res = iv * 3.281
    }
    if (si == 'm' && so == 'yd') {
      res = iv * 1.094
    }
    if (si == 'm' && so == 'km') {
      res = iv / 1000
    }
    if (si == 'm' && so == 'mi') {
      res = iv / 1609
    }
    if (si == 'm' && so == 'nmi') {
      res = iv / 1852
    }

    if (res.toString().length >= 8) {
      outputValue.value = res.toExponential(4)
    }
    else {
      outputValue.value = res
    }
  }

  function killometer() {
    if (si == 'km' && so == 'nm') {
      res = iv * 1e+12
    }
    if (si == 'km' && so == 'μm') {
      res = iv * 1e+9
    }
    if (si == 'km' && so == 'mm') {
      res = iv * 1e+6
    }
    if (si == 'km' && so == 'cm') {
      res = iv * 100000
    }
    if (si == 'km' && so == 'in') {
      res = iv * 39370
    }
    if (si == 'km' && so == 'ft') {
      res = iv * 3281
    }
    if (si == 'km' && so == 'yd') {
      res = iv * 1094
    }
    if (si == 'km' && so == 'm') {
      res = iv * 1000
    }
    if (si == 'km' && so == 'mi') {
      res = iv / 1.609
    }
    if (si == 'km' && so == 'nmi') {
      res = iv / 1.852
    }

    if (res.toString().length >= 8) {
      outputValue.value = res.toExponential(4)
    }
    else {
      outputValue.value = res
    }
  }

  function mile() {
    if (si == 'mi' && so == 'nm') {
      res = iv * 1.609e+12
    }
    if (si == 'mi' && so == 'μm') {
      res = iv * 1.609e+9
    }
    if (si == 'mi' && so == 'mm') {
      res = iv * 1.609e+6
    }
    if (si == 'mi' && so == 'cm') {
      res = iv * 160900
    }
    if (si == 'mi' && so == 'in') {
      res = iv * 63360
    }
    if (si == 'mi' && so == 'ft') {
      res = iv * 5280
    }
    if (si == 'mi' && so == 'yd') {
      res = iv * 1760
    }
    if (si == 'mi' && so == 'm') {
      res = iv * 1609
    }
    if (si == 'mi' && so == 'km') {
      res = iv * 1.609
    }
    if (si == 'mi' && so == 'nmi') {
      res = iv / 1.151
    }

    if (res.toString().length >= 8) {
      outputValue.value = res.toExponential(4)
    }
    else {
      outputValue.value = res
    }
  }

  function nuauticalMile() {
    if (si == 'nmi' && so == 'nm') {
      res = iv * 1.852e+12
    }
    if (si == 'nmi' && so == 'μm') {
      res = iv * 1.852e+9
    }
    if (si == 'nmi' && so == 'mm') {
      res = iv * 1.852e+6
    }
    if (si == 'nmi' && so == 'cm') {
      res = iv * 185200
    }
    if (si == 'nmi' && so == 'in') {
      res = iv * 72910
    }
    if (si == 'nmi' && so == 'ft') {
      res = iv * 6076
    }
    if (si == 'nmi' && so == 'yd') {
      res = iv * 2025
    }
    if (si == 'nmi' && so == 'm') {
      res = iv * 1852
    }
    if (si == 'nmi' && so == 'km') {
      res = iv * 1.852
    }
    if (si == 'nmi' && so == 'mi') {
      res = iv * 1.151
    }

    if (res.toString().length >= 8) {
      outputValue.value = res.toExponential(4)
    }
    else {
      outputValue.value = res
    }
  }

  nanometer()
  micrometer()
  millimeter()
  centimeter()
  inch()
  foot()
  yard()
  meter()
  killometer()
  mile()
  nuauticalMile()
}

function outputValueEnter() {
  let
    si = selectInput.value,
    so = selectOutput.value,
    ov = outputValue.value

  let res

  if (res == undefined) {
    res = 0
  }

  if (so === si) {
    res = ov
  }

  function nanometer() {
    if (si == 'nm' && so == 'μm') {
      res = ov / 1000
    }
    if (si == 'nm' && so == 'mm') {
      res = ov / 1e+6
    }
    if (si == 'nm' && so == 'cm') {
      res = ov / 1e+7
    }
    if (si == 'nm' && so == 'in') {
      res = ov / 2.54e+7
    }
    if (si == 'nm' && so == 'ft') {
      res = ov / 3.048e+8
    }
    if (si == 'nm' && so == 'yd') {
      res = ov / 9.144e+8
    }
    if (si == 'nm' && so == 'm') {
      res = ov / 1e+9
    }
    if (si == 'nm' && so == 'km') {
      res = ov / 1e+12
    }
    if (si == 'nm' && so == 'mi') {
      res = ov / 1.609e+12
    }
    if (si == 'nm' && so == 'nmi') {
      res = ov / 1.852e+12
    }

    if (res.toString().length >= 8) {
      inputValue.value = res.toExponential(4)
    }
    else {
      inputValue.value = res
    }
  }

  function millimeter() {
    if (si == 'mm' && so == 'nm') {
      res = ov * 1e+6
    }
    if (si == 'mm' && so == 'μm') {
      res = ov * 1000
    }
    if (si == 'mm' && so == 'cm') {
      res = ov / 10
    }
    if (si == 'mm' && so == 'in') {
      res = ov / 25.4
    }
    if (si == 'mm' && so == 'ft') {
      res = ov / 304.8
    }
    if (si == 'mm' && so == 'yd') {
      res = ov / 914.4
    }
    if (si == 'mm' && so == 'm') {
      res = ov / 1000
    }
    if (si == 'mm' && so == 'km') {
      res = ov / 1e+6
    }
    if (si == 'mm' && so == 'mi') {
      res = ov / 1.609e+6
    }
    if (si == 'mm' && so == 'nmi') {
      res = ov / 1.852e+6
    }

    if (res.toString().length >= 8) {
      inputValue.value = res.toExponential(4)
    }
    else {
      inputValue.value = res
    }
  }


  function micrometer() {
    if (si == 'μm' && so == 'nm') {
      res = ov * 1000
    }
    if (si == 'μm' && so == 'mm') {
      res = ov / 1000
    }
    if (si == 'μm' && so == 'cm') {
      res = ov / 10000
    }
    if (si == 'μm' && so == 'in') {
      res = ov / 25400
    }
    if (si == 'μm' && so == 'ft') {
      res = ov / 304800
    }
    if (si == 'μm' && so == 'yd') {
      res = ov / 914400
    }
    if (si == 'μm' && so == 'm') {
      res = ov / 1e+6
    }
    if (si == 'μm' && so == 'km') {
      res = ov / 1e+9
    }
    if (si == 'μm' && so == 'mi') {
      res = ov / 1.609e+9
    }
    if (si == 'μm' && so == 'nmi') {
      res = ov / 1.852e+9
    }

    if (res.toString().length >= 8) {
      inputValue.value = res.toExponential(4)
    }
    else {
      inputValue.value = res
    }
  }

  function centimeter() {
    if (si == 'cm' && so == 'nm') {
      res = ov * 1e+7
    }
    if (si == 'cm' && so == 'μm') {
      res = ov * 100000
    }
    if (si == 'cm' && so == 'mm') {
      res = ov * 10
    }
    if (si == 'cm' && so == 'in') {
      res = ov / 2.54
    }
    if (si == 'cm' && so == 'ft') {
      res = ov / 30.48
    }
    if (si == 'cm' && so == 'yd') {
      res = ov / 91.44
    }
    if (si == 'cm' && so == 'm') {
      res = ov / 100
    }
    if (si == 'cm' && so == 'km') {
      res = ov / 100000
    }
    if (si == 'cm' && so == 'mi') {
      res = ov / 160900
    }
    if (si == 'cm' && so == 'nmi') {
      res = ov / 185200
    }

    if (res.toString().length >= 8) {
      inputValue.value = res.toExponential(4)
    }
    else {
      inputValue.value = res
    }
  }

  function inch() {
    if (si == 'in' && so == 'nm') {
      res = ov * 2.54e+7
    }
    if (si == 'in' && so == 'μm') {
      res = ov * 25400
    }
    if (si == 'in' && so == 'mm') {
      res = ov * 25.4
    }
    if (si == 'in' && so == 'cm') {
      res = ov * 2.54
    }
    if (si == 'in' && so == 'ft') {
      res = ov / 12
    }
    if (si == 'in' && so == 'yd') {
      res = ov / 36
    }
    if (si == 'in' && so == 'm') {
      res = ov / 39.37
    }
    if (si == 'in' && so == 'km') {
      res = ov / 39370
    }
    if (si == 'in' && so == 'mi') {
      res = ov / 63360
    }
    if (si == 'in' && so == 'nmi') {
      res = ov / 72910
    }

    if (res.toString().length >= 8) {
      inputValue.value = res.toExponential(4)
    }
    else {
      inputValue.value = res
    }
  }

  function foot() {
    if (si == 'ft' && so == 'nm') {
      res = ov * 3.048e+8
    }
    if (si == 'ft' && so == 'μm') {
      res = ov * 304800
    }
    if (si == 'ft' && so == 'mm') {
      res = ov * 304.8
    }
    if (si == 'ft' && so == 'cm') {
      res = ov * 30.4
    }
    if (si == 'ft' && so == 'in') {
      res = ov * 12
    }
    if (si == 'ft' && so == 'yd') {
      res = ov / 3
    }
    if (si == 'ft' && so == 'm') {
      res = ov / 3.281
    }
    if (si == 'ft' && so == 'km') {
      res = ov / 3281
    }
    if (si == 'ft' && so == 'mi') {
      res = ov / 5280
    }
    if (si == 'ft' && so == 'nmi') {
      res = ov / 6076
    }

    if (res.toString().length >= 8) {
      inputValue.value = res.toExponential(4)
    }
    else {
      inputValue.value = res
    }
  }

  function yard() {
    if (si == 'yd' && so == 'nm') {
      res = ov * 9.144e+8
    }
    if (si == 'yd' && so == 'μm') {
      res = ov * 914400
    }
    if (si == 'yd' && so == 'mm') {
      res = ov * 914.4
    }
    if (si == 'yd' && so == 'cm') {
      res = ov * 91.44
    }
    if (si == 'yd' && so == 'in') {
      res = ov * 36
    }
    if (si == 'yd' && so == 'ft') {
      res = ov * 3
    }
    if (si == 'yd' && so == 'm') {
      res = ov / 1.094
    }
    if (si == 'yd' && so == 'km') {
      res = ov / 1094
    }
    if (si == 'yd' && so == 'mi') {
      res = ov / 1760
    }
    if (si == 'yd' && so == 'nmi') {
      res = ov / 2025
    }

    if (res.toString().length >= 8) {
      inputValue.value = res.toExponential(4)
    }
    else {
      inputValue.value = res
    }
  }

  function meter() {
    if (si == 'm' && so == 'nm') {
      res = ov * 1e+9
    }
    if (si == 'm' && so == 'μm') {
      res = ov * 1e+6
    }
    if (si == 'm' && so == 'mm') {
      res = ov * 1000
    }
    if (si == 'm' && so == 'cm') {
      res = ov * 100
    }
    if (si == 'm' && so == 'in') {
      res = ov * 39.37
    }
    if (si == 'm' && so == 'ft') {
      res = ov * 3.281
    }
    if (si == 'm' && so == 'yd') {
      res = ov * 1.094
    }
    if (si == 'm' && so == 'km') {
      res = ov / 1000
    }
    if (si == 'm' && so == 'mi') {
      res = ov / 1609
    }
    if (si == 'm' && so == 'nmi') {
      res = ov / 1852
    }

    if (res.toString().length >= 8) {
      inputValue.value = res.toExponential(4)
    }
    else {
      inputValue.value = res
    }
  }

  function killometer() {
    if (si == 'km' && so == 'nm') {
      res = ov * 1e+12
    }
    if (si == 'km' && so == 'μm') {
      res = ov * 1e+9
    }
    if (si == 'km' && so == 'mm') {
      res = ov * 1e+6
    }
    if (si == 'km' && so == 'cm') {
      res = ov * 100000
    }
    if (si == 'km' && so == 'in') {
      res = ov * 39370
    }
    if (si == 'km' && so == 'ft') {
      res = ov * 3281
    }
    if (si == 'km' && so == 'yd') {
      res = ov * 1094
    }
    if (si == 'km' && so == 'm') {
      res = ov * 1000
    }
    if (si == 'km' && so == 'mi') {
      res = ov / 1.609
    }
    if (si == 'km' && so == 'nmi') {
      res = ov / 1.852
    }

    if (res.toString().length >= 8) {
      inputValue.value = res.toExponential(4)
    }
    else {
      inputValue.value = res
    }
  }

  function mile() {
    if (si == 'mi' && so == 'nm') {
      res = ov * 1.609e+12
    }
    if (si == 'mi' && so == 'μm') {
      res = ov * 1.609e+9
    }
    if (si == 'mi' && so == 'mm') {
      res = ov * 1.609e+6
    }
    if (si == 'mi' && so == 'cm') {
      res = ov * 160900
    }
    if (si == 'mi' && so == 'in') {
      res = ov * 63360
    }
    if (si == 'mi' && so == 'ft') {
      res = ov * 5280
    }
    if (si == 'mi' && so == 'yd') {
      res = ov * 1760
    }
    if (si == 'mi' && so == 'm') {
      res = ov * 1000
    }
    if (si == 'mi' && so == 'km') {
      res = ov * 1.609
    }
    if (si == 'mi' && so == 'nmi') {
      res = ov / 1.151
    }

    if (res.toString().length >= 8) {
      inputValue.value = res.toExponential(4)
    }
    else {
      inputValue.value = res
    }
  }

  function nuauticalMile() {
    if (si == 'nmi' && so == 'nm') {
      res = ov * 1.852e+12
    }
    if (si == 'nmi' && so == 'μm') {
      res = ov * 1.852e+9
    }
    if (si == 'nmi' && so == 'mm') {
      res = ov * 1.852e+6
    }
    if (si == 'nmi' && so == 'cm') {
      res = ov * 185200
    }
    if (si == 'nmi' && so == 'in') {
      res = ov * 72910
    }
    if (si == 'nmi' && so == 'ft') {
      res = ov * 6076
    }
    if (si == 'nmi' && so == 'yd') {
      res = ov * 2025
    }
    if (si == 'nmi' && so == 'm') {
      res = ov * 1852
    }
    if (si == 'nmi' && so == 'km') {
      res = ov * 1.852
    }
    if (si == 'nmi' && so == 'mi') {
      res = ov * 1.151
    }

    if (res.toString().length >= 8) {
      inputValue.value = res.toExponential(4)
    }
    else {
      inputValue.value = res
    }
  }

  nanometer()
  micrometer()
  millimeter()
  centimeter()
  inch()
  foot()
  yard()
  meter()
  killometer()
  mile()
  nuauticalMile()
}