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
  let val

  if (res == undefined) {
    res = 0
  }

  if (si === so) {
    res = iv
  }

  function nanometer() {
    if (si == 'nm' && so == 'μm') {
      val = 1000
      res = iv / val
    }
    if (si == 'nm' && so == 'mm') {
      val = 1e+6
      res = iv / val
    }
    if (si == 'nm' && so == 'cm') {
      val = 1e+7
      res = iv / val
    }
    if (si == 'nm' && so == 'in') {
      val = 2.54e+7
      res = iv / val
    }
    if (si == 'nm' && so == 'ft') {
      val = 3.048e+8
      res = iv / val
    }
    if (si == 'nm' && so == 'yd') {
      val = 9.144e+8
      res = iv / val
    }
    if (si == 'nm' && so == 'm') {
      val = 1e+9
      res = iv / val
    }
    if (si == 'nm' && so == 'km') {
      val = 1e+12
      res = iv / val
    }
    if (si == 'nm' && so == 'mi') {
      val = 1.609e+12
      res = iv / val
    }
    if (si == 'nm' && so == 'nmi') {
      val = 1.852e+12
      res = iv / val
    }

    if (res.toString().length >= 10) {
      outputValue.value = res.toExponential(5)
    }
    else {
      outputValue.value = res
    }
  }

  function micrometer() {
    if (si == 'μm' && so == 'nm') {
      val = 1000
      res = iv * val
    }
    if (si == 'μm' && so == 'mm') {
      val = 1000
      res = iv / val
    }
    if (si == 'μm' && so == 'cm') {
      val = 10000
      res = iv / val
    }
    if (si == 'μm' && so == 'in') {
      val = 25400
      res = iv / val
    }
    if (si == 'μm' && so == 'ft') {
      val = 304800
      res = iv / val
    }
    if (si == 'μm' && so == 'yd') {
      val = 914400
      res = iv / val
    }
    if (si == 'μm' && so == 'm') {
      val = 1e+6
      res = iv / val
    }
    if (si == 'μm' && so == 'km') {
      val = 1e+9
      res = iv / val
    }
    if (si == 'μm' && so == 'mi') {
      val = 1.609e+9
      res = iv / val
    }
    if (si == 'μm' && so == 'nmi') {
      val = 1.852e+9
      res = iv / val
    }

    if (res.toString().length >= 10) {
      outputValue.value = res.toExponential(5)
    }
    else {
      outputValue.value = res
    }
  }

  function millimeter() {
    if (si == 'mm' && so == 'nm') {
      val = 1e+6
      res = iv * val
    }
    if (si == 'mm' && so == 'μm') {
      val = 1000
      res = iv * val
    }
    if (si == 'mm' && so == 'cm') {
      val = 10
      res = iv / val
    }
    if (si == 'mm' && so == 'in') {
      val = 25.4
      res = iv / val
    }
    if (si == 'mm' && so == 'ft') {
      val = 304.8
      res = iv / val
    }
    if (si == 'mm' && so == 'yd') {
      val = 914.4
      res = iv / val
    }
    if (si == 'mm' && so == 'm') {
      val = 1000
      res = iv / val
    }
    if (si == 'mm' && so == 'km') {
      val = 1e+6
      res = iv / val
    }
    if (si == 'mm' && so == 'mi') {
      val = 1.609e+6
      res = iv / val
    }
    if (si == 'mm' && so == 'nmi') {
      val = 1.852e+6
      res = iv / val
    }

    if (res.toString().length >= 10) {
      outputValue.value = res.toExponential(5)
    }
    else {
      outputValue.value = res
    }
  }

  function centimeter() {
    if (si == 'cm' && so == 'nm') {
      val = 1e+7
      res = iv * val
    }
    if (si == 'cm' && so == 'μm') {
      val = 100000
      res = iv * val
    }
    if (si == 'cm' && so == 'mm') {
      val = 10
      res = iv * val
    }
    if (si == 'cm' && so == 'in') {
      val = 2.54
      res = iv / val
    }
    if (si == 'cm' && so == 'ft') {
      val = 30.48
      res = iv / val
    }
    if (si == 'cm' && so == 'yd') {
      val = 91.44
      res = iv / val
    }
    if (si == 'cm' && so == 'm') {
      val = 100
      res = iv / val
    }
    if (si == 'cm' && so == 'km') {
      val = 100000
      res = iv / val
    }
    if (si == 'cm' && so == 'mi') {
      val = 160900
      res = iv / val
    }
    if (si == 'cm' && so == 'nmi') {
      val = 185200
      res = iv / val
    }

    if (res.toString().length >= 10) {
      outputValue.value = res.toExponential(5)
    }
    else {
      outputValue.value = res
    }
  }

  function inch() {
    if (si == 'in' && so == 'nm') {
      val = 2.54e+7
      res = iv * val
    }
    if (si == 'in' && so == 'μm') {
      val = 25400
      res = iv * val
    }
    if (si == 'in' && so == 'mm') {
      val = 25.4
      res = iv * val
    }
    if (si == 'in' && so == 'cm') {
      val = 2.54
      res = iv * val
    }
    if (si == 'in' && so == 'ft') {
      val = 12
      res = iv / val
    }
    if (si == 'in' && so == 'yd') {
      val = 36
      res = iv / val
    }
    if (si == 'in' && so == 'm') {
      val = 39.37
      res = iv / val
    }
    if (si == 'in' && so == 'km') {
      val = 39370
      res = iv / val
    }
    if (si == 'in' && so == 'mi') {
      val = 63360
      res = iv / val
    }
    if (si == 'in' && so == 'nmi') {
      val = 72910
      res = iv / val
    }

    if (res.toString().length >= 10) {
      outputValue.value = res.toExponential(5)
    }
    else {
      outputValue.value = res
    }
  }

  function foot() {
    if (si == 'ft' && so == 'nm') {
      val = 3.048e+8
      res = iv * val
    }
    if (si == 'ft' && so == 'μm') {
      val = 304800
      res = iv * val
    }
    if (si == 'ft' && so == 'mm') {
      val = 304.8
      res = iv * val
    }
    if (si == 'ft' && so == 'cm') {
      val = 30.4
      res = iv * val
    }
    if (si == 'ft' && so == 'in') {
      val = 12
      res = iv * val
    }
    if (si == 'ft' && so == 'yd') {
      val = 3
      res = iv / val
    }
    if (si == 'ft' && so == 'm') {
      val = 3.281
      res = iv / val
    }
    if (si == 'ft' && so == 'km') {
      val = 3281
      res = iv / val
    }
    if (si == 'ft' && so == 'mi') {
      val = 5280
      res = iv / val
    }
    if (si == 'ft' && so == 'nmi') {
      val = 6076
      res = iv / val
    }
    if (res.toString().length >= 10) {
      outputValue.value = res.toExponential(5)
    }
    else {
      outputValue.value = res
    }
  }

  function yard() {
    if (si == 'yd' && so == 'nm') {
      val = 9.144e+8
      res = iv * val
    }
    if (si == 'yd' && so == 'μm') {
      val = 914400
      res = iv * val
    }
    if (si == 'yd' && so == 'mm') {
      val = 914.4
      res = iv * val
    }
    if (si == 'yd' && so == 'cm') {
      val = 91.44
      res = iv * val
    }
    if (si == 'yd' && so == 'in') {
      val = 36
      res = iv * val
    }
    if (si == 'yd' && so == 'ft') {
      val = 3
      res = iv * val
    }
    if (si == 'yd' && so == 'm') {
      val = 1.094
      res = iv / val
    }
    if (si == 'yd' && so == 'km') {
      val = 1094
      res = iv / val
    }
    if (si == 'yd' && so == 'mi') {
      val = 1760
      res = iv / val
    }
    if (si == 'yd' && so == 'nmi') {
      val = 2025
      res = iv / val
    }
    if (res.toString().length >= 10) {
      outputValue.value = res.toExponential(5)
    }
    else {
      outputValue.value = res
    }
  }

  function meter() {
    if (si == 'm' && so == 'nm') {
      val = 1e+9
      res = iv * val
    }
    if (si == 'm' && so == 'μm') {
      val = 1e+6
      res = iv * val
    }
    if (si == 'm' && so == 'mm') {
      val = 1000
      res = iv * val
    }
    if (si == 'm' && so == 'cm') {
      val = 100
      res = iv * val
    }
    if (si == 'm' && so == 'in') {
      val = 39.37
      res = iv * val
    }
    if (si == 'm' && so == 'ft') {
      val = 3.281
      res = iv * val
    }
    if (si == 'm' && so == 'yd') {
      val = 1.094
      res = iv * val
    }
    if (si == 'm' && so == 'km') {
      val = 1000
      res = iv / val
    }
    if (si == 'm' && so == 'mi') {
      val = 1609
      res = iv / val
    }
    if (si == 'm' && so == 'nmi') {
      val = 1852
      res = iv / val
    }

    if (res.toString().length >= 10) {
      outputValue.value = res.toExponential(5)
    }
    else {
      outputValue.value = res
    }
  }

  function killometer() {
    if (si == 'km' && so == 'nm') {
      val = 1e+12
      res = iv * val
    }
    if (si == 'km' && so == 'μm') {
      val = 1e+9
      res = iv * val
    }
    if (si == 'km' && so == 'mm') {
      val = 1e+6
      res = iv * val
    }
    if (si == 'km' && so == 'cm') {
      val = 100000
      res = iv * val
    }
    if (si == 'km' && so == 'in') {
      val = 39370
      res = iv * val
    }
    if (si == 'km' && so == 'ft') {
      val = 3281
      res = iv * val
    }
    if (si == 'km' && so == 'yd') {
      val = 1094
      res = iv * val
    }
    if (si == 'km' && so == 'm') {
      val = 1000
      res = iv * val
    }
    if (si == 'km' && so == 'mi') {
      val = 1.609
      res = iv / val
    }
    if (si == 'km' && so == 'nmi') {
      val = 1.852
      res = iv / val
    }

    if (res.toString().length >= 10) {
      outputValue.value = res.toExponential(5)
    }
    else {
      outputValue.value = res
    }
  }

  function mile() {
    if (si == 'mi' && so == 'nm') {
      val = 1.609e+12
      res = iv * val
    }
    if (si == 'mi' && so == 'μm') {
      val = 1.609e+9
      res = iv * val
    }
    if (si == 'mi' && so == 'mm') {
      val = 1.609e+6
      res = iv * val
    }
    if (si == 'mi' && so == 'cm') {
      val = 160900
      res = iv * val
    }
    if (si == 'mi' && so == 'in') {
      val = 63360
      res = iv * val
    }
    if (si == 'mi' && so == 'ft') {
      val = 5280
      res = iv * val
    }
    if (si == 'mi' && so == 'yd') {
      val = 1760
      res = iv * val
    }
    if (si == 'mi' && so == 'm') {
      val = 1609
      res = iv * val
    }
    if (si == 'mi' && so == 'km') {
      val = 1.609
      res = iv * val
    }
    if (si == 'mi' && so == 'nmi') {
      val = 1.151
      res = iv / val
    }

    if (res.toString().length >= 10) {
      outputValue.value = res.toExponential(5)
    }
    else {
      outputValue.value = res
    }
  }

  function nuauticalMile() {
    if (si == 'nmi' && so == 'nm') {
      val = 1.852e+12
      res = iv * val
    }
    if (si == 'nmi' && so == 'μm') {
      val = 1.852e+9
      res = iv * val
    }
    if (si == 'nmi' && so == 'mm') {
      val = 1.852e+6
      res = iv * val
    }
    if (si == 'nmi' && so == 'cm') {
      val = 185200
      res = iv * val
    }
    if (si == 'nmi' && so == 'in') {
      val = 72910
      res = iv * val
    }
    if (si == 'nmi' && so == 'ft') {
      val = 6076
      res = iv * val
    }
    if (si == 'nmi' && so == 'yd') {
      val = 2025
      res = iv * val
    }
    if (si == 'nmi' && so == 'm') {
      val = 1852
      res = iv * val
    }
    if (si == 'nmi' && so == 'km') {
      val = 1.852
      res = iv * val
    }
    if (si == 'nmi' && so == 'mi') {
      val = 1.151
      res = iv * val
    }

    if (res.toString().length >= 10) {
      outputValue.value = res.toExponential(5)
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
      res = ov * 1000
    }
    if (si == 'nm' && so == 'mm') {
      res = ov * 1e+6
    }
    if (si == 'nm' && so == 'cm') {
      res = ov * 1e+7
    }
    if (si == 'nm' && so == 'in') {
      res = ov * 2.54e+7
    }
    if (si == 'nm' && so == 'ft') {
      res = ov * 3.048e+8
    }
    if (si == 'nm' && so == 'yd') {
      res = ov * 9.144e+8
    }
    if (si == 'nm' && so == 'm') {
      res = ov * 1e+9
    }
    if (si == 'nm' && so == 'km') {
      res = ov * 1e+12
    }
    if (si == 'nm' && so == 'mi') {
      res = ov * 1.609e+12
    }
    if (si == 'nm' && so == 'nmi') {
      res = ov * 1.852e+12
    }

    if (res.toString().length >= 10) {
      inputValue.value = res.toExponential(5)
    }
    else {
      inputValue.value = res
    }
  }

  function millimeter() {
    if (si == 'mm' && so == 'nm') {
      res = ov / 1e+6
    }
    if (si == 'mm' && so == 'μm') {
      res = ov / 1000
    }
    if (si == 'mm' && so == 'cm') {
      res = ov * 10
    }
    if (si == 'mm' && so == 'in') {
      res = ov * 25.4
    }
    if (si == 'mm' && so == 'ft') {
      res = ov * 304.8
    }
    if (si == 'mm' && so == 'yd') {
      res = ov * 914.4
    }
    if (si == 'mm' && so == 'm') {
      res = ov * 1000
    }
    if (si == 'mm' && so == 'km') {
      res = ov * 1e+6
    }
    if (si == 'mm' && so == 'mi') {
      res = ov * 1.609e+6
    }
    if (si == 'mm' && so == 'nmi') {
      res = ov * 1.852e+6
    }

    if (res.toString().length >= 10) {
      inputValue.value = res.toExponential(5)
    }
    else {
      inputValue.value = res
    }
  }


  function micrometer() {
    if (si == 'μm' && so == 'nm') {
      res = ov / 1000
    }
    if (si == 'μm' && so == 'mm') {
      res = ov * 1000
    }
    if (si == 'μm' && so == 'cm') {
      res = ov * 10000
    }
    if (si == 'μm' && so == 'in') {
      res = ov * 25400
    }
    if (si == 'μm' && so == 'ft') {
      res = ov * 304800
    }
    if (si == 'μm' && so == 'yd') {
      res = ov * 914400
    }
    if (si == 'μm' && so == 'm') {
      res = ov * 1e+6
    }
    if (si == 'μm' && so == 'km') {
      res = ov * 1e+9
    }
    if (si == 'μm' && so == 'mi') {
      res = ov * 1.609e+9
    }
    if (si == 'μm' && so == 'nmi') {
      res = ov * 1.852e+9
    }

    if (res.toString().length >= 10) {
      inputValue.value = res.toExponential(5)
    }
    else {
      inputValue.value = res
    }
  }

  function centimeter() {
    if (si == 'cm' && so == 'nm') {
      res = ov / 1e+7
    }
    if (si == 'cm' && so == 'μm') {
      res = ov / 100000
    }
    if (si == 'cm' && so == 'mm') {
      res = ov / 10
    }
    if (si == 'cm' && so == 'in') {
      res = ov * 2.54
    }
    if (si == 'cm' && so == 'ft') {
      res = ov * 30.48
    }
    if (si == 'cm' && so == 'yd') {
      res = ov * 91.44
    }
    if (si == 'cm' && so == 'm') {
      res = ov * 100
    }
    if (si == 'cm' && so == 'km') {
      res = ov * 100000
    }
    if (si == 'cm' && so == 'mi') {
      res = ov * 160900
    }
    if (si == 'cm' && so == 'nmi') {
      res = ov * 185200
    }

    if (res.toString().length >= 10) {
      inputValue.value = res.toExponential(5)
    }
    else {
      inputValue.value = res
    }
  }

  function inch() {
    if (si == 'in' && so == 'nm') {
      res = ov / 2.54e+7
    }
    if (si == 'in' && so == 'μm') {
      res = ov / 25400
    }
    if (si == 'in' && so == 'mm') {
      res = ov / 25.4
    }
    if (si == 'in' && so == 'cm') {
      res = ov / 2.54
    }
    if (si == 'in' && so == 'ft') {
      res = ov * 12
    }
    if (si == 'in' && so == 'yd') {
      res = ov * 36
    }
    if (si == 'in' && so == 'm') {
      res = ov * 39.37
    }
    if (si == 'in' && so == 'km') {
      res = ov * 39370
    }
    if (si == 'in' && so == 'mi') {
      res = ov * 63360
    }
    if (si == 'in' && so == 'nmi') {
      res = ov * 72910
    }

    if (res.toString().length >= 10) {
      inputValue.value = res.toExponential(5)
    }
    else {
      inputValue.value = res
    }
  }

  function foot() {
    if (si == 'ft' && so == 'nm') {
      res = ov / 3.048e+8
    }
    if (si == 'ft' && so == 'μm') {
      res = ov / 304800
    }
    if (si == 'ft' && so == 'mm') {
      res = ov / 304.8
    }
    if (si == 'ft' && so == 'cm') {
      res = ov / 30.4
    }
    if (si == 'ft' && so == 'in') {
      res = ov / 12
    }
    if (si == 'ft' && so == 'yd') {
      res = ov * 3
    }
    if (si == 'ft' && so == 'm') {
      res = ov * 3.281
    }
    if (si == 'ft' && so == 'km') {
      res = ov * 3281
    }
    if (si == 'ft' && so == 'mi') {
      res = ov * 5280
    }
    if (si == 'ft' && so == 'nmi') {
      res = ov * 6076
    }

    if (res.toString().length >= 10) {
      inputValue.value = res.toExponential(5)
    }
    else {
      inputValue.value = res
    }
  }

  function yard() {
    if (si == 'yd' && so == 'nm') {
      res = ov / 9.144e+8
    }
    if (si == 'yd' && so == 'μm') {
      res = ov / 914400
    }
    if (si == 'yd' && so == 'mm') {
      res = ov / 914.4
    }
    if (si == 'yd' && so == 'cm') {
      res = ov / 91.44
    }
    if (si == 'yd' && so == 'in') {
      res = ov / 36
    }
    if (si == 'yd' && so == 'ft') {
      res = ov / 3
    }
    if (si == 'yd' && so == 'm') {
      res = ov * 1.094
    }
    if (si == 'yd' && so == 'km') {
      res = ov * 1094
    }
    if (si == 'yd' && so == 'mi') {
      res = ov * 1760
    }
    if (si == 'yd' && so == 'nmi') {
      res = ov * 2025
    }

    if (res.toString().length >= 10) {
      inputValue.value = res.toExponential(5)
    }
    else {
      inputValue.value = res
    }
  }

  function meter() {
    if (si == 'm' && so == 'nm') {
      res = ov / 1e+9
    }
    if (si == 'm' && so == 'μm') {
      res = ov / 1e+6
    }
    if (si == 'm' && so == 'mm') {
      res = ov / 1000
    }
    if (si == 'm' && so == 'cm') {
      res = ov / 100
    }
    if (si == 'm' && so == 'in') {
      res = ov / 39.37
    }
    if (si == 'm' && so == 'ft') {
      res = ov / 3.281
    }
    if (si == 'm' && so == 'yd') {
      res = ov / 1.094
    }
    if (si == 'm' && so == 'km') {
      res = ov * 1000
    }
    if (si == 'm' && so == 'mi') {
      res = ov * 1609
    }
    if (si == 'm' && so == 'nmi') {
      res = ov * 1852
    }

    if (res.toString().length >= 10) {
      inputValue.value = res.toExponential(5)
    }
    else {
      inputValue.value = res
    }
  }

  function killometer() {
    if (si == 'km' && so == 'nm') {
      res = ov / 1e+12
    }
    if (si == 'km' && so == 'μm') {
      res = ov / 1e+9
    }
    if (si == 'km' && so == 'mm') {
      res = ov / 1e+6
    }
    if (si == 'km' && so == 'cm') {
      res = ov / 100000
    }
    if (si == 'km' && so == 'in') {
      res = ov / 39370
    }
    if (si == 'km' && so == 'ft') {
      res = ov / 3281
    }
    if (si == 'km' && so == 'yd') {
      res = ov / 1094
    }
    if (si == 'km' && so == 'm') {
      res = ov / 1000
    }
    if (si == 'km' && so == 'mi') {
      res = ov * 1.609
    }
    if (si == 'km' && so == 'nmi') {
      res = ov * 1.852
    }

    if (res.toString().length >= 10) {
      inputValue.value = res.toExponential(5)
    }
    else {
      inputValue.value = res
    }
  }

  function mile() {
    if (si == 'mi' && so == 'nm') {
      res = ov / 1.609e+12
    }
    if (si == 'mi' && so == 'μm') {
      res = ov / 1.609e+9
    }
    if (si == 'mi' && so == 'mm') {
      res = ov / 1.609e+6
    }
    if (si == 'mi' && so == 'cm') {
      res = ov / 160900
    }
    if (si == 'mi' && so == 'in') {
      res = ov / 63360
    }
    if (si == 'mi' && so == 'ft') {
      res = ov / 5280
    }
    if (si == 'mi' && so == 'yd') {
      res = ov / 1760
    }
    if (si == 'mi' && so == 'm') {
      res = ov / 1000
    }
    if (si == 'mi' && so == 'km') {
      res = ov / 1.609
    }
    if (si == 'mi' && so == 'nmi') {
      res = ov * 1.151
    }

    if (res.toString().length >= 10) {
      inputValue.value = res.toExponential(5)
    }
    else {
      inputValue.value = res
    }
  }

  function nuauticalMile() {
    if (si == 'nmi' && so == 'nm') {
      res = ov / 1.852e+12
    }
    if (si == 'nmi' && so == 'μm') {
      res = ov / 1.852e+9
    }
    if (si == 'nmi' && so == 'mm') {
      res = ov / 1.852e+6
    }
    if (si == 'nmi' && so == 'cm') {
      res = ov / 185200
    }
    if (si == 'nmi' && so == 'in') {
      res = ov / 72910
    }
    if (si == 'nmi' && so == 'ft') {
      res = ov / 6076
    }
    if (si == 'nmi' && so == 'yd') {
      res = ov / 2025
    }
    if (si == 'nmi' && so == 'm') {
      res = ov / 1852
    }
    if (si == 'nmi' && so == 'km') {
      res = ov / 1.852
    }
    if (si == 'nmi' && so == 'mi') {
      res = ov / 1.151
    }

    if (res.toString().length >= 10) {
      inputValue.value = res.toExponential(5)
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