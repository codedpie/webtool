const
  input = document.getElementById('inputData'),
  output = document.getElementById('outputData'),
  selectInp = document.getElementById('selectInput'),
  selectOut = document.getElementById('selectOutput')

input.oninput = () => dataStorageConverter()
output.oninput = () => dataStorageConverterReverse()
selectInp.oninput = () => dataStorageConverter()
selectOut.oninput = () => dataStorageConverter()

input.setAttribute('placeholder', selectInp.value)
output.setAttribute('placeholder', selectOut.value)

function dataStorageConverter() {

  input.setAttribute('placeholder', selectInp.value)
  output.setAttribute('placeholder', selectOut.value)

  const
    iv = input.value,
    ov = output.value,
    si = selectInp.value,
    so = selectOut.value

  let val, res

  if (res == undefined) {
    res = 0
  }

  if (si === so) {
    res = iv
  }

  function bit() {
    if (si == 'b' && so == 'B') {
      val = 8
      res = iv / val
    }
    if (si == 'b' && so == 'kb') {
      val = 1000
      res = iv / val
    }
    if (si == 'b' && so == 'Kibit') {
      val = 1024
      res = iv / val
    }
    if (si == 'b' && so == 'KB') {
      val = 8000
      res = iv / val
    }
    if (si == 'b' && so == 'KiB') {
      val = 8192
      res = iv / val
    }
    if (si == 'b' && so == 'mb') {
      val = 1e+6
      res = iv / val
    }
    if (si == 'b' && so == 'Mibit') {
      val = 1.049e+6
      res = iv / val
    }
    if (si == 'b' && so == 'MB') {
      val = 8e+6
      res = iv / val
    }
    if (si == 'b' && so == 'MiB') {
      val = 8.389e+6
      res = iv / val
    }
    if (si == 'b' && so == 'gb') {
      val = 1e+9
      res = iv / val
    }
    if (si == 'b' && so == 'Gibit') {
      val = 1.074e+9
      res = iv / val
    }
    if (si == 'b' && so == 'GB') {
      val = 8e+9
      res = iv / val
    }
    if (si == 'b' && so == 'GiB') {
      val = 8.59e+9
      res = iv / val
    }
    if (si == 'b' && so == 'tb') {
      val = 1e+12
      res = iv / val
    }
    if (si == 'b' && so == 'Tebit') {
      val = 1.1e+12
      res = iv / val
    }
    if (si == 'b' && so == 'TB') {
      val = 8e+12
      res = iv / val
    }
    if (si == 'b' && so == 'TiB') {
      val = 8.796e+12
      res = iv / val
    }
    if (si == 'b' && so == 'pb') {
      val = 1e+15
      res = iv / val
    }
    if (si == 'b' && so == 'Pibit') {
      val = 1.126e+15
      res = iv / val
    }
    if (si == 'b' && so == 'PB') {
      val = 8e+15
      res = iv / val
    }
    if (si == 'b' && so == 'PiB') {
      val = 9.007e+15
      res = iv / val
    }

    if (res.toString().length >= 10 && si !== so) {
      output.value = res.toExponential(5)
    }
    else {
      output.value = res
    }
  }

  function byte() {
    if (si == 'B' && so == 'b') {
      val = 8
      res = iv * val
    }
    if (si == 'B' && so == 'kb') {
      val = 125
      res = iv / val
    }
    if (si == 'B' && so == 'Kibit') {
      val = 128
      res = iv / val
    }
    if (si == 'B' && so == 'KB') {
      val = 1000
      res = iv / val
    }
    if (si == 'B' && so == 'KiB') {
      val = 1024
      res = iv / val
    }
    if (si == 'B' && so == 'mb') {
      val = 125000
      res = iv / val
    }
    if (si == 'B' && so == 'Mibit') {
      val = 131100
      res = iv / val
    }
    if (si == 'B' && so == 'MB') {
      val = 1e+6
      res = iv / val
    }
    if (si == 'B' && so == 'MiB') {
      val = 1.049e+6
      res = iv / val
    }
    if (si == 'B' && so == 'gb') {
      val = 1.25e+8
      res = iv / val
    }
    if (si == 'B' && so == 'Gibit') {
      val = 1.342e+8
      res = iv / val
    }
    if (si == 'B' && so == 'GB') {
      val = 1e+9
      res = iv / val
    }
    if (si == 'B' && so == 'GiB') {
      val = 1.074e+9
      res = iv / val
    }
    if (si == 'B' && so == 'tb') {
      val = 1.25e+11
      res = iv / val
    }
    if (si == 'B' && so == 'Tebit') {
      val = 1.374e+11
      res = iv / val
    }
    if (si == 'B' && so == 'TB') {
      val = 1e+12
      res = iv / val
    }
    if (si == 'B' && so == 'TiB') {
      val = 1.1e+12
      res = iv / val
    }
    if (si == 'B' && so == 'pb') {
      val = 1.25e+14
      res = iv / val
    }
    if (si == 'B' && so == 'Pibit') {
      val = 1.407e+14
      res = iv / val
    }
    if (si == 'B' && so == 'PB') {
      val = 1e+15
      res = iv / val
    }
    if (si == 'B' && so == 'PiB') {
      val = 1.26e+15
      res = iv / val
    }

    if (res.toString().length >= 10 && si !== so) {
      output.value = res.toExponential(5)
    }
    else {
      output.value = res
    }
  }

  function kilobit() {
    if (si == 'kb' && so == 'b') {
      val = 1000
      res = iv * val
    }
    if (si == 'kb' && so == 'B') {
      val = 125
      res = iv * val
    }
    if (si == 'kb' && so == 'Kibit') {
      val = 1.024
      res = iv / val
    }
    if (si == 'kb' && so == 'KB') {
      val = 8
      res = iv / val
    }
    if (si == 'kb' && so == 'KiB') {
      val = 8.192
      res = iv / val
    }
    if (si == 'kb' && so == 'mb') {
      val = 1000
      res = iv / val
    }
    if (si == 'kb' && so == 'Mibit') {
      val = 1049
      res = iv / val
    }
    if (si == 'kb' && so == 'MB') {
      val = 8000
      res = iv / val
    }
    if (si == 'kb' && so == 'MiB') {
      val = 8389
      res = iv / val
    }
    if (si == 'kb' && so == 'gb') {
      val = 1e+6
      res = iv / val
    }
    if (si == 'kb' && so == 'Gibit') {
      val = 1.074e+6
      res = iv / val
    }
    if (si == 'kb' && so == 'GB') {
      val = 8e+6
      res = iv / val
    }
    if (si == 'kb' && so == 'GiB') {
      val = 8.59e+6
      res = iv / val
    }
    if (si == 'kb' && so == 'tb') {
      val = 1e+9
      res = iv / val
    }
    if (si == 'kb' && so == 'Tebit') {
      val = 1.1e+9
      res = iv / val
    }
    if (si == 'kb' && so == 'TB') {
      val = 8e+9
      res = iv / val
    }
    if (si == 'kb' && so == 'TiB') {
      val = 8.796e+9
      res = iv / val
    }
    if (si == 'kb' && so == 'pb') {
      val = 1e+12
      res = iv / val
    }
    if (si == 'kb' && so == 'Pibit') {
      val = 1.126e+12
      res = iv / val
    }
    if (si == 'kb' && so == 'PB') {
      val = 8e+12
      res = iv / val
    }
    if (si == 'kb' && so == 'PiB') {
      val = 9.007e+12
      res = iv / val
    }

    if (res.toString().length >= 10 && si !== so) {
      output.value = res.toExponential(5)
    }
    else {
      output.value = res
    }
  }

  function kibibit() {
    if (si == 'Kibit' && so == 'b') {
      val = 1024
      res = iv * val
    }
    if (si == 'Kibit' && so == 'B') {
      val = 128
      res = iv * val
    }
    if (si == 'Kibit' && so == 'kb') {
      val = 1.024
      res = iv * val
    }
    if (si == 'Kibit' && so == 'KB') {
      val = 7.812
      res = iv / val
    }
    if (si == 'Kibit' && so == 'KiB') {
      val = 8
      res = iv / val
    }
    if (si == 'Kibit' && so == 'mb') {
      val = 976.6
      res = iv / val
    }
    if (si == 'Kibit' && so == 'Mibit') {
      val = 1024
      res = iv / val
    }
    if (si == 'Kibit' && so == 'MB') {
      val = 7813
      res = iv / val
    }
    if (si == 'Kibit' && so == 'MiB') {
      val = 8192
      res = iv / val
    }
    if (si == 'Kibit' && so == 'gb') {
      val = 976600
      res = iv / val
    }
    if (si == 'Kibit' && so == 'Gibit') {
      val = 1.049e+6
      res = iv / val
    }
    if (si == 'Kibit' && so == 'GB') {
      val = 7.813e+6
      res = iv / val
    }
    if (si == 'Kibit' && so == 'GiB') {
      val = 8.389e+6
      res = iv / val
    }
    if (si == 'Kibit' && so == 'tb') {
      val = 9.766e+8
      res = iv / val
    }
    if (si == 'Kibit' && so == 'Tebit') {
      val = 1.074e+9
      res = iv / val
    }
    if (si == 'Kibit' && so == 'TB') {
      val = 7.813e+9
      res = iv / val
    }
    if (si == 'Kibit' && so == 'TiB') {
      val = 8.59e+9
      res = iv / val
    }
    if (si == 'Kibit' && so == 'pb') {
      val = 9.766e+11
      res = iv / val
    }
    if (si == 'Kibit' && so == 'Pibit') {
      val = 1.1e+12
      res = iv / val
    }
    if (si == 'Kibit' && so == 'PB') {
      val = 7.812e+12
      res = iv / val
    }
    if (si == 'Kibit' && so == 'PiB') {
      val = 8.796e+12
      res = iv / val
    }

    if (res.toString().length >= 10 && si !== so) {
      output.value = res.toExponential(5)
    }
    else {
      output.value = res
    }
  }

  function Kilobyte() {
    if (si == 'KB' && so == 'b') {
      val = 8000
      res = iv * val
    }
    if (si == 'KB' && so == 'B') {
      val = 1000
      res = iv * val
    }
    if (si == 'KB' && so == 'kb') {
      val = 8
      res = iv * val
    }
    if (si == 'KB' && so == 'Kibit') {
      val = 7.812
      res = iv * val
    }
    if (si == 'KB' && so == 'KiB') {
      val = 1.024
      res = iv / val
    }
    if (si == 'KB' && so == 'mb') {
      val = 125
      res = iv / val
    }
    if (si == 'KB' && so == 'Mibit') {
      val = 131.1
      res = iv / val
    }
    if (si == 'KB' && so == 'MB') {
      val = 1000
      res = iv / val
    }
    if (si == 'KB' && so == 'MiB') {
      val = 1049
      res = iv / val
    }
    if (si == 'KB' && so == 'gb') {
      val = 125000
      res = iv / val
    }
    if (si == 'KB' && so == 'Gibit') {
      val = 134200
      res = iv / val
    }
    if (si == 'KB' && so == 'GB') {
      val = 1e+6
      res = iv / val
    }
    if (si == 'KB' && so == 'GiB') {
      val = 1.074e+6
      res = iv / val
    }
    if (si == 'KB' && so == 'tb') {
      val = 1.25e+8
      res = iv / val
    }
    if (si == 'KB' && so == 'Tebit') {
      val = 1.374e+8
      res = iv / val
    }
    if (si == 'KB' && so == 'TB') {
      val = 1e+9
      res = iv / val
    }
    if (si == 'KB' && so == 'TiB') {
      val = 1.1e+9
      res = iv / val
    }
    if (si == 'KB' && so == 'pb') {
      val = 1.25e+11
      res = iv / val
    }
    if (si == 'KB' && so == 'Pibit') {
      val = 1.407e+11
      res = iv / val
    }
    if (si == 'KB' && so == 'PB') {
      val = 1e+12
      res = iv / val
    }
    if (si == 'KB' && so == 'PiB') {
      val = 1.126e+12
      res = iv / val
    }

    if (res.toString().length >= 10 && si !== so) {
      output.value = res.toExponential(5)
    }
    else {
      output.value = res
    }
  }

  function Kibibyte() {
    if (si == 'KiB' && so == 'b') {
      val = 8192
      res = iv * val
    }
    if (si == 'KiB' && so == 'B') {
      val = 1024
      res = iv * val
    }
    if (si == 'KiB' && so == 'kb') {
      val = 8.192
      res = iv * val
    }
    if (si == 'KiB' && so == 'Kibit') {
      val = 8
      res = iv * val
    }
    if (si == 'KiB' && so == 'KB') {
      val = 1.024
      res = iv * val
    }
    if (si == 'KiB' && so == 'mb') {
      val = 122.1
      res = iv / val
    }
    if (si == 'KiB' && so == 'Mibit') {
      val = 128
      res = iv / val
    }
    if (si == 'KiB' && so == 'MB') {
      val = 976.6
      res = iv / val
    }
    if (si == 'KiB' && so == 'MiB') {
      val = 1024
      res = iv / val
    }
    if (si == 'KiB' && so == 'gb') {
      val = 122100
      res = iv / val
    }
    if (si == 'KiB' && so == 'Gibit') {
      val = 131100
      res = iv / val
    }
    if (si == 'KiB' && so == 'GB') {
      val = 976600
      res = iv / val
    }
    if (si == 'KiB' && so == 'GiB') {
      val = 1.049e+6
      res = iv / val
    }
    if (si == 'KiB' && so == 'tb') {
      val = 1.221e+8
      res = iv / val
    }
    if (si == 'KiB' && so == 'Tebit') {
      val = 1.342e+8
      res = iv / val
    }
    if (si == 'KiB' && so == 'TB') {
      val = 9.766e+8
      res = iv / val
    }
    if (si == 'KiB' && so == 'TiB') {
      val = 1.074e+9
      res = iv / val
    }
    if (si == 'KiB' && so == 'pb') {
      val = 1.221e+11
      res = iv / val
    }
    if (si == 'KiB' && so == 'Pibit') {
      val = 1.374e+11
      res = iv / val
    }
    if (si == 'KiB' && so == 'PB') {
      val = 9.766e+11
      res = iv / val
    }
    if (si == 'KiB' && so == 'PiB') {
      val = 1.1e+12
      res = iv / val
    }

    if (res.toString().length >= 10 && si !== so) {
      output.value = res.toExponential(5)
    }
    else {
      output.value = res
    }
  }

  function Megabit() {
    if (si == 'mb' && so == 'b') {
      val = 1e+6
      res = iv * val
    }
    if (si == 'mb' && so == 'B') {
      val = 125000
      res = iv * val
    }
    if (si == 'mb' && so == 'kb') {
      val = 1000
      res = iv * val
    }
    if (si == 'mb' && so == 'Kibit') {
      val = 976.6
      res = iv * val
    }
    if (si == 'mb' && so == 'KB') {
      val = 125
      res = iv * val
    }
    if (si == 'mb' && so == 'KiB') {
      val = 122.1
      res = iv * val
    }
    if (si == 'mb' && so == 'Mibit') {
      val = 1.049
      res = iv / val
    }
    if (si == 'mb' && so == 'MB') {
      val = 8
      res = iv / val
    }
    if (si == 'mb' && so == 'MiB') {
      val = 8.389
      res = iv / val
    }
    if (si == 'mb' && so == 'gb') {
      val = 1000
      res = iv / val
    }
    if (si == 'mb' && so == 'Gibit') {
      val = 1074
      res = iv / val
    }
    if (si == 'mb' && so == 'GB') {
      val = 8000
      res = iv / val
    }
    if (si == 'mb' && so == 'GiB') {
      val = 8590
      res = iv / val
    }
    if (si == 'mb' && so == 'tb') {
      val = 1e+6
      res = iv / val
    }
    if (si == 'mb' && so == 'Tebit') {
      val = 1.1e+6
      res = iv / val
    }
    if (si == 'mb' && so == 'TB') {
      val = 8e+6
      res = iv / val
    }
    if (si == 'mb' && so == 'TiB') {
      val = 8.796e+6
      res = iv / val
    }
    if (si == 'mb' && so == 'pb') {
      val = 1e+9
      res = iv / val
    }
    if (si == 'mb' && so == 'Pibit') {
      val = 1.126e+9
      res = iv / val
    }
    if (si == 'mb' && so == 'PB') {
      val = 8e+9
      res = iv / val
    }
    if (si == 'mb' && so == 'PiB') {
      val = 9.007e+9
      res = iv / val
    }

    if (res.toString().length >= 10 && si !== so) {
      output.value = res.toExponential(5)
    }
    else {
      output.value = res
    }
  }

  function Mebibit() {
    if (si == 'Mibit' && so == 'b') {
      val = 1.049e+6
      res = iv * val
    }
    if (si == 'Mibit' && so == 'B') {
      val = 131100
      res = iv * val
    }
    if (si == 'Mibit' && so == 'kb') {
      val = 1049
      res = iv * val
    }
    if (si == 'Mibit' && so == 'Kibit') {
      val = 1024
      res = iv * val
    }
    if (si == 'Mibit' && so == 'KB') {
      val = 131.1
      res = iv * val
    }
    if (si == 'Mibit' && so == 'KiB') {
      val = 128
      res = iv * val
    }
    if (si == 'Mibit' && so == 'mb') {
      val = 1.049
      res = iv * val
    }
    if (si == 'Mibit' && so == 'MB') {
      val = 7.629
      res = iv / val
    }
    if (si == 'Mibit' && so == 'MiB') {
      val = 8
      res = iv / val
    }
    if (si == 'Mibit' && so == 'gb') {
      val = 953.7
      res = iv / val
    }
    if (si == 'Mibit' && so == 'Gibit') {
      val = 1024
      res = iv / val
    }
    if (si == 'Mibit' && so == 'GB') {
      val = 7629
      res = iv / val
    }
    if (si == 'Mibit' && so == 'GiB') {
      val = 8192
      res = iv / val
    }
    if (si == 'Mibit' && so == 'tb') {
      val = 953700
      res = iv / val
    }
    if (si == 'Mibit' && so == 'Tebit') {
      val = 1.049e+6
      res = iv / val
    }
    if (si == 'Mibit' && so == 'TB') {
      val = 7.629e+6
      res = iv / val
    }
    if (si == 'Mibit' && so == 'TiB') {
      val = 8.389e+6
      res = iv / val
    }
    if (si == 'Mibit' && so == 'pb') {
      val = 9.537e+8
      res = iv / val
    }
    if (si == 'Mibit' && so == 'Pibit') {
      val = 1.074e+9
      res = iv / val
    }
    if (si == 'Mibit' && so == 'PB') {
      val = 7.629e+9
      res = iv / val
    }
    if (si == 'Mibit' && so == 'PiB') {
      val = 8.59e+9
      res = iv / val
    }

    if (res.toString().length >= 10 && si !== so) {
      output.value = res.toExponential(5)
    }
    else {
      output.value = res
    }
  }

  function Megabyte() {
    if (si == 'MB' && so == 'b') {
      val = 8e+6
      res = iv * val
    }
    if (si == 'MB' && so == 'B') {
      val = 1e+6
      res = iv * val
    }
    if (si == 'MB' && so == 'kb') {
      val = 8000
      res = iv * val
    }
    if (si == 'MB' && so == 'Kibit') {
      val = 7813
      res = iv * val
    }
    if (si == 'MB' && so == 'KB') {
      val = 1000
      res = iv * val
    }
    if (si == 'MB' && so == 'KiB') {
      val = 976.6
      res = iv * val
    }
    if (si == 'MB' && so == 'mb') {
      val = 8
      res = iv * val
    }
    if (si == 'MB' && so == 'Mibit') {
      val = 7.629
      res = iv * val
    }
    if (si == 'MB' && so == 'MiB') {
      val = 1.049
      res = iv / val
    }
    if (si == 'MB' && so == 'gb') {
      val = 125
      res = iv / val
    }
    if (si == 'MB' && so == 'Gibit') {
      val = 134.2
      res = iv / val
    }
    if (si == 'MB' && so == 'GB') {
      val = 1000
      res = iv / val
    }
    if (si == 'MB' && so == 'GiB') {
      val = 1074
      res = iv / val
    }
    if (si == 'MB' && so == 'tb') {
      val = 125000
      res = iv / val
    }
    if (si == 'MB' && so == 'Tebit') {
      val = 137400
      res = iv / val
    }
    if (si == 'MB' && so == 'TB') {
      val = 1e+6
      res = iv / val
    }
    if (si == 'MB' && so == 'TiB') {
      val = 1.1e+6
      res = iv / val
    }
    if (si == 'MB' && so == 'pb') {
      val = 1.25e+8
      res = iv / val
    }
    if (si == 'MB' && so == 'Pibit') {
      val = 1.407e+8
      res = iv / val
    }
    if (si == 'MB' && so == 'PB') {
      val = 1e+9
      res = iv / val
    }
    if (si == 'MB' && so == 'PiB') {
      val = 1.126e+9
      res = iv / val
    }

    if (res.toString().length >= 10 && si !== so) {
      output.value = res.toExponential(5)
    }
    else {
      output.value = res
    }
  }

  function Mebibyte() {
    if (si == 'MiB' && so == 'b') {
      val = 8.389e+6
      res = iv * val
    }
    if (si == 'MiB' && so == 'B') {
      val = 1.049e+6
      res = iv * val
    }
    if (si == 'MiB' && so == 'kb') {
      val = 8389
      res = iv * val
    }
    if (si == 'MiB' && so == 'Kibit') {
      val = 8192
      res = iv * val
    }
    if (si == 'MiB' && so == 'KB') {
      val = 1049
      res = iv * val
    }
    if (si == 'MiB' && so == 'KiB') {
      val = 1024
      res = iv * val
    }
    if (si == 'MiB' && so == 'mb') {
      val = 8.389
      res = iv * val
    }
    if (si == 'MiB' && so == 'Mibit') {
      val = 8
      res = iv * val
    }
    if (si == 'MiB' && so == 'MB') {
      val = 1.049
      res = iv * val
    }
    if (si == 'MiB' && so == 'gb') {
      val = 119.2
      res = iv / val
    }
    if (si == 'MiB' && so == 'Gibit') {
      val = 128
      res = iv / val
    }
    if (si == 'MiB' && so == 'GB') {
      val = 953.7
      res = iv / val
    }
    if (si == 'MiB' && so == 'GiB') {
      val = 1024
      res = iv / val
    }
    if (si == 'MiB' && so == 'tb') {
      val = 119200
      res = iv / val
    }
    if (si == 'MiB' && so == 'Tebit') {
      val = 131100
      res = iv / val
    }
    if (si == 'MiB' && so == 'TB') {
      val = 953700
      res = iv / val
    }
    if (si == 'MiB' && so == 'TiB') {
      val = 1.049e+6
      res = iv / val
    }
    if (si == 'MiB' && so == 'pb') {
      val = 1.192e+8
      res = iv / val
    }
    if (si == 'MiB' && so == 'Pibit') {
      val = 1.342e+8
      res = iv / val
    }
    if (si == 'MiB' && so == 'PB') {
      val = 9.537e+8
      res = iv / val
    }
    if (si == 'MiB' && so == 'PiB') {
      val = 1.074e+9
      res = iv / val
    }

    if (res.toString().length >= 10 && si !== so) {
      output.value = res.toExponential(5)
    }
    else {
      output.value = res
    }
  }

  function Gigabit() {
    if (si == 'gb' && so == 'b') {
      val = 1e+9
      res = iv * val
    }
    if (si == 'gb' && so == 'B') {
      val = 1.25e+8
      res = iv * val
    }
    if (si == 'gb' && so == 'kb') {
      val = 1e+6
      res = iv * val
    }
    if (si == 'gb' && so == 'Kibit') {
      val = 976600
      res = iv * val
    }
    if (si == 'gb' && so == 'KB') {
      val = 125000
      res = iv * val
    }
    if (si == 'gb' && so == 'KiB') {
      val = 122100
      res = iv * val
    }
    if (si == 'gb' && so == 'mb') {
      val = 1000
      res = iv * val
    }
    if (si == 'gb' && so == 'Mibit') {
      val = 953.7
      res = iv * val
    }
    if (si == 'gb' && so == 'MB') {
      val = 125
      res = iv * val
    }
    if (si == 'gb' && so == 'MiB') {
      val = 119.2
      res = iv * val
    }
    if (si == 'gb' && so == 'Gibit') {
      val = 1.074
      res = iv / val
    }
    if (si == 'gb' && so == 'GB') {
      val = 8
      res = iv / val
    }
    if (si == 'gb' && so == 'GiB') {
      val = 8.59
      res = iv / val
    }
    if (si == 'gb' && so == 'tb') {
      val = 1000
      res = iv / val
    }
    if (si == 'gb' && so == 'Tebit') {
      val = 1100
      res = iv / val
    }
    if (si == 'gb' && so == 'TB') {
      val = 8000
      res = iv / val
    }
    if (si == 'gb' && so == 'TiB') {
      val = 8796
      res = iv / val
    }
    if (si == 'gb' && so == 'pb') {
      val = 1e+6
      res = iv / val
    }
    if (si == 'gb' && so == 'Pibit') {
      val = 1.126e+6
      res = iv / val
    }
    if (si == 'gb' && so == 'PB') {
      val = 8e+6
      res = iv / val
    }
    if (si == 'gb' && so == 'PiB') {
      val = 9.007e+6
      res = iv / val
    }

    if (res.toString().length >= 10 && si !== so) {
      output.value = res.toExponential(5)
    }
    else {
      output.value = res
    }
  }

  function Gibibit() {
    if (si == 'Gibit' && so == 'b') {
      val = 1.074e+9
      res = iv * val
    }
    if (si == 'Gibit' && so == 'B') {
      val = 1.342e+8
      res = iv * val
    }
    if (si == 'Gibit' && so == 'kb') {
      val = 1.074e+6
      res = iv * val
    }
    if (si == 'Gibit' && so == 'Kibit') {
      val = 1.049e+6
      res = iv * val
    }
    if (si == 'Gibit' && so == 'KB') {
      val = 134200
      res = iv * val
    }
    if (si == 'Gibit' && so == 'KiB') {
      val = 131100
      res = iv * val
    }
    if (si == 'Gibit' && so == 'mb') {
      val = 1074
      res = iv * val
    }
    if (si == 'Gibit' && so == 'Mibit') {
      val = 1024
      res = iv * val
    }
    if (si == 'Gibit' && so == 'MB') {
      val = 134.2
      res = iv * val
    }
    if (si == 'Gibit' && so == 'MiB') {
      val = 128
      res = iv * val
    }
    if (si == 'Gibit' && so == 'gb') {
      val = 1.074
      res = iv * val
    }
    if (si == 'Gibit' && so == 'GB') {
      val = 7.451
      res = iv / val
    }
    if (si == 'Gibit' && so == 'GiB') {
      val = 8
      res = iv / val
    }
    if (si == 'Gibit' && so == 'tb') {
      val = 931.3
      res = iv / val
    }
    if (si == 'Gibit' && so == 'Tebit') {
      val = 1024
      res = iv / val
    }
    if (si == 'Gibit' && so == 'TB') {
      val = 7451
      res = iv / val
    }
    if (si == 'Gibit' && so == 'TiB') {
      val = 8192
      res = iv / val
    }
    if (si == 'Gibit' && so == 'pb') {
      val = 931300
      res = iv / val
    }
    if (si == 'Gibit' && so == 'Pibit') {
      val = 1.049e+6
      res = iv / val
    }
    if (si == 'Gibit' && so == 'PB') {
      val = 7.451e+6
      res = iv / val
    }
    if (si == 'Gibit' && so == 'PiB') {
      val = 8.389e+6
      res = iv / val
    }

    if (res.toString().length >= 10 && si !== so) {
      output.value = res.toExponential(5)
    }
    else {
      output.value = res
    }
  }

  function Gigabyte() {
    if (si == 'GB' && so == 'b') {
      val = 8e+9
      res = iv * val
    }
    if (si == 'GB' && so == 'B') {
      val = 1e+9
      res = iv * val
    }
    if (si == 'GB' && so == 'kb') {
      val = 8e+6
      res = iv * val
    }
    if (si == 'GB' && so == 'Kibit') {
      val = 7.813e+6
      res = iv * val
    }
    if (si == 'GB' && so == 'KB') {
      val = 1e+6
      res = iv * val
    }
    if (si == 'GB' && so == 'KiB') {
      val = 976600
      res = iv * val
    }
    if (si == 'GB' && so == 'mb') {
      val = 8000
      res = iv * val
    }
    if (si == 'GB' && so == 'Mibit') {
      val = 7629
      res = iv * val
    }
    if (si == 'GB' && so == 'MB') {
      val = 1000
      res = iv * val
    }
    if (si == 'GB' && so == 'MiB') {
      val = 953.7
      res = iv * val
    }
    if (si == 'GB' && so == 'gb') {
      val = 8
      res = iv * val
    }
    if (si == 'GB' && so == 'Gibit') {
      val = 7.451
      res = iv * val
    }
    if (si == 'GB' && so == 'GiB') {
      val = 1.074
      res = iv / val
    }
    if (si == 'GB' && so == 'tb') {
      val = 125
      res = iv / val
    }
    if (si == 'GB' && so == 'Tebit') {
      val = 137.4
      res = iv / val
    }
    if (si == 'GB' && so == 'TB') {
      val = 1000
      res = iv / val
    }
    if (si == 'GB' && so == 'TiB') {
      val = 1100
      res = iv / val
    }
    if (si == 'GB' && so == 'pb') {
      val = 125000
      res = iv / val
    }
    if (si == 'GB' && so == 'Pibit') {
      val = 140700
      res = iv / val
    }
    if (si == 'GB' && so == 'PB') {
      val = 1e+6
      res = iv / val
    }
    if (si == 'GB' && so == 'PiB') {
      val = 1.126e+6
      res = iv / val
    }

    if (res.toString().length >= 10 && si !== so) {
      output.value = res.toExponential(5)
    }
    else {
      output.value = res
    }
  }

  function Gibibyte() {
    if (si == 'GiB' && so == 'b') {
      val = 8.59e+9
      res = iv * val
    }
    if (si == 'GiB' && so == 'B') {
      val = 1.074e+9
      res = iv * val
    }
    if (si == 'GiB' && so == 'kb') {
      val = 8.59e+6
      res = iv * val
    }
    if (si == 'GiB' && so == 'Kibit') {
      val = 8.389e+6
      res = iv * val
    }
    if (si == 'GiB' && so == 'KB') {
      val = 1.074e+6
      res = iv * val
    }
    if (si == 'GiB' && so == 'KiB') {
      val = 1.049e+6
      res = iv * val
    }
    if (si == 'GiB' && so == 'mb') {
      val = 8590
      res = iv * val
    }
    if (si == 'GiB' && so == 'Mibit') {
      val = 8192
      res = iv * val
    }
    if (si == 'GiB' && so == 'MB') {
      val = 1074
      res = iv * val
    }
    if (si == 'GiB' && so == 'MiB') {
      val = 1024
      res = iv * val
    }
    if (si == 'GiB' && so == 'gb') {
      val = 8.59
      res = iv * val
    }
    if (si == 'GiB' && so == 'Gibit') {
      val = 8
      res = iv * val
    }
    if (si == 'GiB' && so == 'GB') {
      val = 1.074
      res = iv * val
    }
    if (si == 'GiB' && so == 'tb') {
      val = 116.4
      res = iv / val
    }
    if (si == 'GiB' && so == 'Tebit') {
      val = 128
      res = iv / val
    }
    if (si == 'GiB' && so == 'TB') {
      val = 931.3
      res = iv / val
    }
    if (si == 'GiB' && so == 'TiB') {
      val = 1024
      res = iv / val
    }
    if (si == 'GiB' && so == 'pb') {
      val = 116400
      res = iv / val
    }
    if (si == 'GiB' && so == 'Pibit') {
      val = 131100
      res = iv / val
    }
    if (si == 'GiB' && so == 'PB') {
      val = 931300
      res = iv / val
    }
    if (si == 'GiB' && so == 'PiB') {
      val = 1.049e+6
      res = iv / val
    }

    if (res.toString().length >= 10 && si !== so) {
      output.value = res.toExponential(5)
    }
    else {
      output.value = res
    }
  }

  function Terabit() {
    if (si == 'tb' && so == 'b') {
      val = 1e+12
      res = iv * val
    }
    if (si == 'tb' && so == 'B') {
      val = 1.25e+11
      res = iv * val
    }
    if (si == 'tb' && so == 'kb') {
      val = 1e+9
      res = iv * val
    }
    if (si == 'tb' && so == 'Kibit') {
      val = 9.766e+8
      res = iv * val
    }
    if (si == 'tb' && so == 'KB') {
      val = 1.25e+8
      res = iv * val
    }
    if (si == 'tb' && so == 'KiB') {
      val = 1.221e+8
      res = iv * val
    }
    if (si == 'tb' && so == 'mb') {
      val = 1e+6
      res = iv * val
    }
    if (si == 'tb' && so == 'Mibit') {
      val = 953700
      res = iv * val
    }
    if (si == 'tb' && so == 'MB') {
      val = 125000
      res = iv * val
    }
    if (si == 'tb' && so == 'MiB') {
      val = 119200
      res = iv * val
    }
    if (si == 'tb' && so == 'gb') {
      val = 1000
      res = iv * val
    }
    if (si == 'tb' && so == 'Gibit') {
      val = 931.3
      res = iv * val
    }
    if (si == 'tb' && so == 'GB') {
      val = 125
      res = iv * val
    }
    if (si == 'tb' && so == 'GiB') {
      val = 116.4
      res = iv * val
    }
    if (si == 'tb' && so == 'Tebit') {
      val = 1.1
      res = iv / val
    }
    if (si == 'tb' && so == 'TB') {
      val = 8
      res = iv / val
    }
    if (si == 'tb' && so == 'TiB') {
      val = 8.796
      res = iv / val
    }
    if (si == 'tb' && so == 'pb') {
      val = 1000
      res = iv / val
    }
    if (si == 'tb' && so == 'Pibit') {
      val = 1126
      res = iv / val
    }
    if (si == 'tb' && so == 'PB') {
      val = 8000
      res = iv / val
    }
    if (si == 'tb' && so == 'PiB') {
      val = 9007
      res = iv / val
    }

    if (res.toString().length >= 10 && si !== so) {
      output.value = res.toExponential(5)
    }
    else {
      output.value = res
    }
  }

  function Tebibit() {
    if (si == 'Tebit' && so == 'b') {
      val = 1.1e+12
      res = iv * val
    }
    if (si == 'Tebit' && so == 'B') {
      val = 1.374e+11
      res = iv * val
    }
    if (si == 'Tebit' && so == 'kb') {
      val = 1.1e+9
      res = iv * val
    }
    if (si == 'Tebit' && so == 'Kibit') {
      val = 1.074e+9
      res = iv * val
    }
    if (si == 'Tebit' && so == 'KB') {
      val = 1.374e+8
      res = iv * val
    }
    if (si == 'Tebit' && so == 'KiB') {
      val = 1.342e+8
      res = iv * val
    }
    if (si == 'Tebit' && so == 'mb') {
      val = 1.1e+6
      res = iv * val
    }
    if (si == 'Tebit' && so == 'Mibit') {
      val = 1.049e+6
      res = iv * val
    }
    if (si == 'Tebit' && so == 'MB') {
      val = 137400
      res = iv * val
    }
    if (si == 'Tebit' && so == 'MiB') {
      val = 131100
      res = iv * val
    }
    if (si == 'Tebit' && so == 'gb') {
      val = 1100
      res = iv * val
    }
    if (si == 'Tebit' && so == 'Gibit') {
      val = 1024
      res = iv * val
    }
    if (si == 'Tebit' && so == 'GB') {
      val = 131.4
      res = iv * val
    }
    if (si == 'Tebit' && so == 'GiB') {
      val = 128
      res = iv * val
    }
    if (si == 'Tebit' && so == 'tb') {
      val = 1.1
      res = iv * val
    }
    if (si == 'Tebit' && so == 'TB') {
      val = 7.276
      res = iv / val
    }
    if (si == 'Tebit' && so == 'TiB') {
      val = 8
      res = iv / val
    }
    if (si == 'Tebit' && so == 'pb') {
      val = 909.5
      res = iv / val
    }
    if (si == 'Tebit' && so == 'Pibit') {
      val = 1024
      res = iv / val
    }
    if (si == 'Tebit' && so == 'PB') {
      val = 7276
      res = iv / val
    }
    if (si == 'Tebit' && so == 'PiB') {
      val = 8192
      res = iv / val
    }

    if (res.toString().length >= 10 && si !== so) {
      output.value = res.toExponential(5)
    }
    else {
      output.value = res
    }
  }

  function Terabyte() {
    if (si == 'TB' && so == 'b') {
      val = 8e+12
      res = iv * val
    }
    if (si == 'TB' && so == 'B') {
      val = 1e+12
      res = iv * val
    }
    if (si == 'TB' && so == 'kb') {
      val = 8e+9
      res = iv * val
    }
    if (si == 'TB' && so == 'Kibit') {
      val = 7.813e+9
      res = iv * val
    }
    if (si == 'TB' && so == 'KB') {
      val = 1e+9
      res = iv * val
    }
    if (si == 'TB' && so == 'KiB') {
      val = 9.766e+8
      res = iv * val
    }
    if (si == 'TB' && so == 'mb') {
      val = 8e+6
      res = iv * val
    }
    if (si == 'TB' && so == 'Mibit') {
      val = 7.629e+6
      res = iv * val
    }
    if (si == 'TB' && so == 'MB') {
      val = 1e+6
      res = iv * val
    }
    if (si == 'TB' && so == 'MiB') {
      val = 953700
      res = iv * val
    }
    if (si == 'TB' && so == 'gb') {
      val = 8000
      res = iv * val
    }
    if (si == 'TB' && so == 'Gibit') {
      val = 7451
      res = iv * val
    }
    if (si == 'TB' && so == 'GB') {
      val = 1000
      res = iv * val
    }
    if (si == 'TB' && so == 'GiB') {
      val = 931.3
      res = iv * val
    }
    if (si == 'TB' && so == 'tb') {
      val = 8
      res = iv * val
    }
    if (si == 'TB' && so == 'Tebit') {
      val = 7.276
      res = iv * val
    }
    if (si == 'TB' && so == 'TiB') {
      val = 1.1
      res = iv / val
    }
    if (si == 'TB' && so == 'pb') {
      val = 125
      res = iv / val
    }
    if (si == 'TB' && so == 'Pibit') {
      val = 140.7
      res = iv / val
    }
    if (si == 'TB' && so == 'PB') {
      val = 1000
      res = iv / val
    }
    if (si == 'TB' && so == 'PiB') {
      val = 1126
      res = iv / val
    }

    if (res.toString().length >= 10 && si !== so) {
      output.value = res.toExponential(5)
    }
    else {
      output.value = res
    }
  }

  function Tebibyte() {
    if (si == 'TiB' && so == 'b') {
      val = 8.796e+12
      res = iv * val
    }
    if (si == 'TiB' && so == 'B') {
      val = 1.1e+12
      res = iv * val
    }
    if (si == 'TiB' && so == 'kb') {
      val = 8.796e+9
      res = iv * val
    }
    if (si == 'TiB' && so == 'Kibit') {
      val = 8.59e+9
      res = iv * val
    }
    if (si == 'TiB' && so == 'KB') {
      val = 1.1e+9
      res = iv * val
    }
    if (si == 'TiB' && so == 'KiB') {
      val = 1.074e+9
      res = iv * val
    }
    if (si == 'TiB' && so == 'mb') {
      val = 8.796e+6
      res = iv * val
    }
    if (si == 'TiB' && so == 'Mibit') {
      val = 8.389e+6
      res = iv * val
    }
    if (si == 'TiB' && so == 'MB') {
      val = 1.1e+6
      res = iv * val
    }
    if (si == 'TiB' && so == 'MiB') {
      val = 1.049e+6
      res = iv * val
    }
    if (si == 'TiB' && so == 'gb') {
      val = 8796
      res = iv * val
    }
    if (si == 'TiB' && so == 'Gibit') {
      val = 8192
      res = iv * val
    }
    if (si == 'TiB' && so == 'GB') {
      val = 1100
      res = iv * val
    }
    if (si == 'TiB' && so == 'GiB') {
      val = 1024
      res = iv * val
    }
    if (si == 'TiB' && so == 'tb') {
      val = 8.796
      res = iv * val
    }
    if (si == 'TiB' && so == 'Tebit') {
      val = 8
      res = iv * val
    }
    if (si == 'TiB' && so == 'TB') {
      val = 1.1
      res = iv * val
    }
    if (si == 'TiB' && so == 'pb') {
      val = 113.7
      res = iv / val
    }
    if (si == 'TiB' && so == 'Pibit') {
      val = 128
      res = iv / val
    }
    if (si == 'TiB' && so == 'PB') {
      val = 909.5
      res = iv / val
    }
    if (si == 'TiB' && so == 'PiB') {
      val = 1024
      res = iv / val
    }

    if (res.toString().length >= 10 && si !== so) {
      output.value = res.toExponential(5)
    }
    else {
      output.value = res
    }
  }

  function Petabit() {
    if (si == 'pb' && so == 'b') {
      val = 1e+15
      res = iv * val
    }
    if (si == 'pb' && so == 'B') {
      val = 1.25e+14
      res = iv * val
    }
    if (si == 'pb' && so == 'kb') {
      val = 1e+12
      res = iv * val
    }
    if (si == 'pb' && so == 'Kibit') {
      val = 9.766e+11
      res = iv * val
    }
    if (si == 'pb' && so == 'KB') {
      val = 1.25e+11
      res = iv * val
    }
    if (si == 'pb' && so == 'KiB') {
      val = 1.221e+11
      res = iv * val
    }
    if (si == 'pb' && so == 'mb') {
      val = 1e+9
      res = iv * val
    }
    if (si == 'pb' && so == 'Mibit') {
      val = 9.537e+8
      res = iv * val
    }
    if (si == 'pb' && so == 'MB') {
      val = 1.25e+8
      res = iv * val
    }
    if (si == 'pb' && so == 'MiB') {
      val = 1.192e+8
      res = iv * val
    }
    if (si == 'pb' && so == 'gb') {
      val = 1e+6
      res = iv * val
    }
    if (si == 'pb' && so == 'Gibit') {
      val = 931300
      res = iv * val
    }
    if (si == 'pb' && so == 'GB') {
      val = 125000
      res = iv * val
    }
    if (si == 'pb' && so == 'GiB') {
      val = 116400
      res = iv * val
    }
    if (si == 'pb' && so == 'tb') {
      val = 1000
      res = iv * val
    }
    if (si == 'pb' && so == 'Tebit') {
      val = 909.5
      res = iv * val
    }
    if (si == 'pb' && so == 'TB') {
      val = 125
      res = iv * val
    }
    if (si == 'pb' && so == 'TiB') {
      val = 113.7
      res = iv * val
    }
    if (si == 'pb' && so == 'Pibit') {
      val = 1.126
      res = iv / val
    }
    if (si == 'pb' && so == 'PB') {
      val = 8
      res = iv / val
    }
    if (si == 'pb' && so == 'PiB') {
      val = 9.007
      res = iv / val
    }

    if (res.toString().length >= 10 && si !== so) {
      output.value = res.toExponential(5)
    }
    else {
      output.value = res
    }
  }

  function Pebibit() {
    if (si == 'Pibit' && so == 'b') {
      val = 1.126e+15
      res = iv * val
    }
    if (si == 'Pibit' && so == 'B') {
      val = 1.407e+14
      res = iv * val
    }
    if (si == 'Pibit' && so == 'kb') {
      val = 1.126e+12
      res = iv * val
    }
    if (si == 'Pibit' && so == 'Kibit') {
      val = 1.1e+12
      res = iv * val
    }
    if (si == 'Pibit' && so == 'KB') {
      val = 1.407e+11
      res = iv * val
    }
    if (si == 'Pibit' && so == 'KiB') {
      val = 1.374e+11
      res = iv * val
    }
    if (si == 'Pibit' && so == 'mb') {
      val = 1.126e+9
      res = iv * val
    }
    if (si == 'Pibit' && so == 'Mibit') {
      val = 1.074e+9
      res = iv * val
    }
    if (si == 'Pibit' && so == 'MB') {
      val = 1.407e+8
      res = iv * val
    }
    if (si == 'Pibit' && so == 'MiB') {
      val = 1.342e+8
      res = iv * val
    }
    if (si == 'Pibit' && so == 'gb') {
      val = 1.126e+6
      res = iv * val
    }
    if (si == 'Pibit' && so == 'Gibit') {
      val = 1.049e+6
      res = iv * val
    }
    if (si == 'Pibit' && so == 'GB') {
      val = 140700
      res = iv * val
    }
    if (si == 'Pibit' && so == 'GiB') {
      val = 131100
      res = iv * val
    }
    if (si == 'Pibit' && so == 'tb') {
      val = 1126
      res = iv * val
    }
    if (si == 'Pibit' && so == 'Tebit') {
      val = 1024
      res = iv * val
    }
    if (si == 'Pibit' && so == 'TB') {
      val = 140.7
      res = iv * val
    }
    if (si == 'Pibit' && so == 'TiB') {
      val = 128
      res = iv * val
    }
    if (si == 'Pibit' && so == 'pb') {
      val = 1.126
      res = iv * val
    }
    if (si == 'Pibit' && so == 'PB') {
      val = 7.105
      res = iv / val
    }
    if (si == 'Pibit' && so == 'PiB') {
      val = 8
      res = iv / val
    }

    if (res.toString().length >= 10 && si !== so) {
      output.value = res.toExponential(5)
    }
    else {
      output.value = res
    }
  }

  function Petabyte() {
    if (si == 'PB' && so == 'b') {
      val = 8e+15
      res = iv * val
    }
    if (si == 'PB' && so == 'B') {
      val = 1e+15
      res = iv * val
    }
    if (si == 'PB' && so == 'kb') {
      val = 8e+12
      res = iv * val
    }
    if (si == 'PB' && so == 'Kibit') {
      val = 7.813e+12
      res = iv * val
    }
    if (si == 'PB' && so == 'KB') {
      val = 1e+12
      res = iv * val
    }
    if (si == 'PB' && so == 'KiB') {
      val = 9.766e+11
      res = iv * val
    }
    if (si == 'PB' && so == 'mb') {
      val = 8e+9
      res = iv * val
    }
    if (si == 'PB' && so == 'Mibit') {
      val = 7.629e+9
      res = iv * val
    }
    if (si == 'PB' && so == 'MB') {
      val = 1e+9
      res = iv * val
    }
    if (si == 'PB' && so == 'MiB') {
      val = 9.537e+8
      res = iv * val
    }
    if (si == 'PB' && so == 'gb') {
      val = 8e+6
      res = iv * val
    }
    if (si == 'PB' && so == 'Gibit') {
      val = 7.451e+6
      res = iv * val
    }
    if (si == 'PB' && so == 'GB') {
      val = 1e+6
      res = iv * val
    }
    if (si == 'PB' && so == 'GiB') {
      val = 931300
      res = iv * val
    }
    if (si == 'PB' && so == 'tb') {
      val = 8000
      res = iv * val
    }
    if (si == 'PB' && so == 'Tebit') {
      val = 7276
      res = iv * val
    }
    if (si == 'PB' && so == 'TB') {
      val = 1000
      res = iv * val
    }
    if (si == 'PB' && so == 'TiB') {
      val = 909.5
      res = iv * val
    }
    if (si == 'PB' && so == 'pb') {
      val = 8
      res = iv * val
    }
    if (si == 'PB' && so == 'Pibit') {
      val = 7.105
      res = iv * val
    }
    if (si == 'PB' && so == 'PiB') {
      val = 1.126
      res = iv / val
    }

    if (res.toString().length >= 10 && si !== so) {
      output.value = res.toExponential(5)
    }
    else {
      output.value = res
    }
  }

  function Pebibyte() {
    if (si == 'PiB' && so == 'b') {
      val = 9.007e+15
      res = iv * val
    }
    if (si == 'PiB' && so == 'B') {
      val = 1.126e+15
      res = iv * val
    }
    if (si == 'PiB' && so == 'kb') {
      val = 9.007e+12
      res = iv * val
    }
    if (si == 'PiB' && so == 'Kibit') {
      val = 8.796e+12
      res = iv * val
    }
    if (si == 'PiB' && so == 'KB') {
      val = 1.126e+12
      res = iv * val
    }
    if (si == 'PiB' && so == 'KiB') {
      val = 1.126e+12
      res = iv * val
    }
    if (si == 'PiB' && so == 'mb') {
      val = 9.007e+9
      res = iv * val
    }
    if (si == 'PiB' && so == 'Mibit') {
      val = 8.59e+9
      res = iv * val
    }
    if (si == 'PiB' && so == 'MB') {
      val = 1.126e+9
      res = iv * val
    }
    if (si == 'PiB' && so == 'MiB') {
      val = 1.074e+9
      res = iv * val
    }
    if (si == 'PiB' && so == 'gb') {
      val = 9.007e+6
      res = iv * val
    }
    if (si == 'PiB' && so == 'Gibit') {
      val = 8.389e+6
      res = iv * val
    }
    if (si == 'PiB' && so == 'GB') {
      val = 1.126e+6
      res = iv * val
    }
    if (si == 'PiB' && so == 'GiB') {
      val = 1.049e+6
      res = iv * val
    }
    if (si == 'PiB' && so == 'tb') {
      val = 9007
      res = iv * val
    }
    if (si == 'PiB' && so == 'Tebit') {
      val = 8192
      res = iv * val
    }
    if (si == 'PiB' && so == 'TB') {
      val = 1126
      res = iv * val
    }
    if (si == 'PiB' && so == 'TiB') {
      val = 1024
      res = iv * val
    }
    if (si == 'PiB' && so == 'pb') {
      val = 9.007
      res = iv * val
    }
    if (si == 'PiB' && so == 'Pibit') {
      val = 8
      res = iv * val
    }
    if (si == 'PiB' && so == 'PB') {
      val = 1.126
      res = iv * val
    }

    if (res.toString().length >= 10 && si !== so) {
      output.value = res.toExponential(5)
    }
    else {
      output.value = res
    }
  }

  bit()
  byte()
  kilobit()
  kibibit()
  Kilobyte()
  Kibibyte()
  Megabit()
  Mebibit()
  Megabyte()
  Mebibyte()
  Gigabit()
  Gibibit()
  Gigabyte()
  Gibibyte()
  Terabit()
  Tebibit()
  Terabyte()
  Tebibyte()
  Petabit()
  Pebibit()
  Petabyte()
  Pebibyte()
}


function dataStorageConverterReverse() {

  input.setAttribute('placeholder', selectInp.value)
  output.setAttribute('placeholder', selectOut.value)

  const
    iv = input.value,
    ov = output.value,
    si = selectInp.value,
    so = selectOut.value

  let val, res

  if (res == undefined) {
    res = 0
  }

  if (si === so) {
    res = ov
  }
  if (si == 'b' && so == 'B') {
    val = 8
    res = ov * val
  }
  if (si == 'b' && so == 'kb') {
    val = 1000
    res = ov * val
  }
  if (si == 'b' && so == 'Kibit') {
    val = 1024
    res = ov * val
  }
  if (si == 'b' && so == 'KB') {
    val = 8000
    res = ov * val
  }
  if (si == 'b' && so == 'KiB') {
    val = 8192
    res = ov * val
  }
  if (si == 'b' && so == 'mb') {
    val = 1e+6
    res = ov * val
  }
  if (si == 'b' && so == 'Mibit') {
    val = 1.049e+6
    res = ov * val
  }
  if (si == 'b' && so == 'MB') {
    val = 8e+6
    res = ov * val
  }
  if (si == 'b' && so == 'MiB') {
    val = 8.389e+6
    res = ov * val
  }
  if (si == 'b' && so == 'gb') {
    val = 1e+9
    res = ov * val
  }
  if (si == 'b' && so == 'Gibit') {
    val = 1.074e+9
    res = ov * val
  }
  if (si == 'b' && so == 'GB') {
    val = 8e+9
    res = ov * val
  }
  if (si == 'b' && so == 'GiB') {
    val = 8.59e+9
    res = ov * val
  }
  if (si == 'b' && so == 'tb') {
    val = 1e+12
    res = ov * val
  }
  if (si == 'b' && so == 'Tebit') {
    val = 1.1e+12
    res = ov * val
  }
  if (si == 'b' && so == 'TB') {
    val = 8e+12
    res = ov * val
  }
  if (si == 'b' && so == 'TiB') {
    val = 8.796e+12
    res = ov * val
  }
  if (si == 'b' && so == 'pb') {
    val = 1e+15
    res = ov * val
  }
  if (si == 'b' && so == 'Pibit') {
    val = 1.126e+15
    res = ov * val
  }
  if (si == 'b' && so == 'PB') {
    val = 8e+15
    res = ov * val
  }
  if (si == 'b' && so == 'PiB') {
    val = 9.007e+15
    res = ov * val
  }
  if (si == 'B' && so == 'b') {
    val = 8
    res = ov / val
  }
  if (si == 'B' && so == 'kb') {
    val = 125
    res = ov * val
  }
  if (si == 'B' && so == 'Kibit') {
    val = 128
    res = ov * val
  }
  if (si == 'B' && so == 'KB') {
    val = 1000
    res = ov * val
  }
  if (si == 'B' && so == 'KiB') {
    val = 1024
    res = ov * val
  }
  if (si == 'B' && so == 'mb') {
    val = 125000
    res = ov * val
  }
  if (si == 'B' && so == 'Mibit') {
    val = 131100
    res = ov * val
  }
  if (si == 'B' && so == 'MB') {
    val = 1e+6
    res = ov * val
  }
  if (si == 'B' && so == 'MiB') {
    val = 1.049e+6
    res = ov * val
  }
  if (si == 'B' && so == 'gb') {
    val = 1.25e+8
    res = ov * val
  }
  if (si == 'B' && so == 'Gibit') {
    val = 1.342e+8
    res = ov * val
  }
  if (si == 'B' && so == 'GB') {
    val = 1e+9
    res = ov * val
  }
  if (si == 'B' && so == 'GiB') {
    val = 1.074e+9
    res = ov * val
  }
  if (si == 'B' && so == 'tb') {
    val = 1.25e+11
    res = ov * val
  }
  if (si == 'B' && so == 'Tebit') {
    val = 1.374e+11
    res = ov * val
  }
  if (si == 'B' && so == 'TB') {
    val = 1e+12
    res = ov * val
  }
  if (si == 'B' && so == 'TiB') {
    val = 1.1e+12
    res = ov * val
  }
  if (si == 'B' && so == 'pb') {
    val = 1.25e+14
    res = ov * val
  }
  if (si == 'B' && so == 'Pibit') {
    val = 1.407e+14
    res = ov * val
  }
  if (si == 'B' && so == 'PB') {
    val = 1e+15
    res = ov * val
  }
  if (si == 'B' && so == 'PiB') {
    val = 1.26e+15
    res = ov * val
  }
  if (si == 'kb' && so == 'b') {
    val = 1000
    res = ov / val
  }
  if (si == 'kb' && so == 'B') {
    val = 125
    res = ov / val
  }
  if (si == 'kb' && so == 'Kibit') {
    val = 1.024
    res = ov * val
  }
  if (si == 'kb' && so == 'KB') {
    val = 8
    res = ov * val
  }
  if (si == 'kb' && so == 'KiB') {
    val = 8.192
    res = ov * val
  }
  if (si == 'kb' && so == 'mb') {
    val = 1000
    res = ov * val
  }
  if (si == 'kb' && so == 'Mibit') {
    val = 1049
    res = ov * val
  }
  if (si == 'kb' && so == 'MB') {
    val = 8000
    res = ov * val
  }
  if (si == 'kb' && so == 'MiB') {
    val = 8389
    res = ov * val
  }
  if (si == 'kb' && so == 'gb') {
    val = 1e+6
    res = ov * val
  }
  if (si == 'kb' && so == 'Gibit') {
    val = 1.074e+6
    res = ov * val
  }
  if (si == 'kb' && so == 'GB') {
    val = 8e+6
    res = ov * val
  }
  if (si == 'kb' && so == 'GiB') {
    val = 8.59e+6
    res = ov * val
  }
  if (si == 'kb' && so == 'tb') {
    val = 1e+9
    res = ov * val
  }
  if (si == 'kb' && so == 'Tebit') {
    val = 1.1e+9
    res = ov * val
  }
  if (si == 'kb' && so == 'TB') {
    val = 8e+9
    res = ov * val
  }
  if (si == 'kb' && so == 'TiB') {
    val = 8.796e+9
    res = ov * val
  }
  if (si == 'kb' && so == 'pb') {
    val = 1e+12
    res = ov * val
  }
  if (si == 'kb' && so == 'Pibit') {
    val = 1.126e+12
    res = ov * val
  }
  if (si == 'kb' && so == 'PB') {
    val = 8e+12
    res = ov * val
  }
  if (si == 'kb' && so == 'PiB') {
    val = 9.007e+12
    res = ov * val
  }
  if (si == 'Kibit' && so == 'b') {
    val = 1024
    res = ov / val
  }
  if (si == 'Kibit' && so == 'B') {
    val = 128
    res = ov / val
  }
  if (si == 'Kibit' && so == 'kb') {
    val = 1.024
    res = ov / val
  }
  if (si == 'Kibit' && so == 'KB') {
    val = 7.812
    res = ov * val
  }
  if (si == 'Kibit' && so == 'KiB') {
    val = 8
    res = ov * val
  }
  if (si == 'Kibit' && so == 'mb') {
    val = 976.6
    res = ov * val
  }
  if (si == 'Kibit' && so == 'Mibit') {
    val = 1024
    res = ov * val
  }
  if (si == 'Kibit' && so == 'MB') {
    val = 7813
    res = ov * val
  }
  if (si == 'Kibit' && so == 'MiB') {
    val = 8192
    res = ov * val
  }
  if (si == 'Kibit' && so == 'gb') {
    val = 976600
    res = ov * val
  }
  if (si == 'Kibit' && so == 'Gibit') {
    val = 1.049e+6
    res = ov * val
  }
  if (si == 'Kibit' && so == 'GB') {
    val = 7.813e+6
    res = ov * val
  }
  if (si == 'Kibit' && so == 'GiB') {
    val = 8.389e+6
    res = ov * val
  }
  if (si == 'Kibit' && so == 'tb') {
    val = 9.766e+8
    res = ov * val
  }
  if (si == 'Kibit' && so == 'Tebit') {
    val = 1.074e+9
    res = ov * val
  }
  if (si == 'Kibit' && so == 'TB') {
    val = 7.813e+9
    res = ov * val
  }
  if (si == 'Kibit' && so == 'TiB') {
    val = 8.59e+9
    res = ov * val
  }
  if (si == 'Kibit' && so == 'pb') {
    val = 9.766e+11
    res = ov * val
  }
  if (si == 'Kibit' && so == 'Pibit') {
    val = 1.1e+12
    res = ov * val
  }
  if (si == 'Kibit' && so == 'PB') {
    val = 7.812e+12
    res = ov * val
  }
  if (si == 'Kibit' && so == 'PiB') {
    val = 8.796e+12
    res = ov * val
  }
  if (si == 'KB' && so == 'b') {
    val = 8000
    res = ov / val
  }
  if (si == 'KB' && so == 'B') {
    val = 1000
    res = ov / val
  }
  if (si == 'KB' && so == 'kb') {
    val = 8
    res = ov / val
  }
  if (si == 'KB' && so == 'Kibit') {
    val = 7.812
    res = ov / val
  }
  if (si == 'KB' && so == 'KiB') {
    val = 1.024
    res = ov * val
  }
  if (si == 'KB' && so == 'mb') {
    val = 125
    res = ov * val
  }
  if (si == 'KB' && so == 'Mibit') {
    val = 131.1
    res = ov * val
  }
  if (si == 'KB' && so == 'MB') {
    val = 1000
    res = ov * val
  }
  if (si == 'KB' && so == 'MiB') {
    val = 1049
    res = ov * val
  }
  if (si == 'KB' && so == 'gb') {
    val = 125000
    res = ov * val
  }
  if (si == 'KB' && so == 'Gibit') {
    val = 134200
    res = ov * val
  }
  if (si == 'KB' && so == 'GB') {
    val = 1e+6
    res = ov * val
  }
  if (si == 'KB' && so == 'GiB') {
    val = 1.074e+6
    res = ov * val
  }
  if (si == 'KB' && so == 'tb') {
    val = 1.25e+8
    res = ov * val
  }
  if (si == 'KB' && so == 'Tebit') {
    val = 1.374e+8
    res = ov * val
  }
  if (si == 'KB' && so == 'TB') {
    val = 1e+9
    res = ov * val
  }
  if (si == 'KB' && so == 'TiB') {
    val = 1.1e+9
    res = ov * val
  }
  if (si == 'KB' && so == 'pb') {
    val = 1.25e+11
    res = ov * val
  }
  if (si == 'KB' && so == 'Pibit') {
    val = 1.407e+11
    res = ov * val
  }
  if (si == 'KB' && so == 'PB') {
    val = 1e+12
    res = ov * val
  }
  if (si == 'KB' && so == 'PiB') {
    val = 1.126e+12
    res = ov * val
  }
  if (si == 'KiB' && so == 'b') {
    val = 8192
    res = ov / val
  }
  if (si == 'KiB' && so == 'B') {
    val = 1024
    res = ov / val
  }
  if (si == 'KiB' && so == 'kb') {
    val = 8.192
    res = ov / val
  }
  if (si == 'KiB' && so == 'Kibit') {
    val = 8
    res = ov / val
  }
  if (si == 'KiB' && so == 'KB') {
    val = 1.024
    res = ov / val
  }
  if (si == 'KiB' && so == 'mb') {
    val = 122.1
    res = ov * val
  }
  if (si == 'KiB' && so == 'Mibit') {
    val = 128
    res = ov * val
  }
  if (si == 'KiB' && so == 'MB') {
    val = 976.6
    res = ov * val
  }
  if (si == 'KiB' && so == 'MiB') {
    val = 1024
    res = ov * val
  }
  if (si == 'KiB' && so == 'gb') {
    val = 122100
    res = ov * val
  }
  if (si == 'KiB' && so == 'Gibit') {
    val = 131100
    res = ov * val
  }
  if (si == 'KiB' && so == 'GB') {
    val = 976600
    res = ov * val
  }
  if (si == 'KiB' && so == 'GiB') {
    val = 1.049e+6
    res = ov * val
  }
  if (si == 'KiB' && so == 'tb') {
    val = 1.221e+8
    res = ov * val
  }
  if (si == 'KiB' && so == 'Tebit') {
    val = 1.342e+8
    res = ov * val
  }
  if (si == 'KiB' && so == 'TB') {
    val = 9.766e+8
    res = ov * val
  }
  if (si == 'KiB' && so == 'TiB') {
    val = 1.074e+9
    res = ov * val
  }
  if (si == 'KiB' && so == 'pb') {
    val = 1.221e+11
    res = ov * val
  }
  if (si == 'KiB' && so == 'Pibit') {
    val = 1.374e+11
    res = ov * val
  }
  if (si == 'KiB' && so == 'PB') {
    val = 9.766e+11
    res = ov * val
  }
  if (si == 'KiB' && so == 'PiB') {
    val = 1.1e+12
    res = ov * val
  }
  if (si == 'mb' && so == 'b') {
    val = 1e+6
    res = ov / val
  }
  if (si == 'mb' && so == 'B') {
    val = 125000
    res = ov / val
  }
  if (si == 'mb' && so == 'kb') {
    val = 1000
    res = ov / val
  }
  if (si == 'mb' && so == 'Kibit') {
    val = 976.6
    res = ov / val
  }
  if (si == 'mb' && so == 'KB') {
    val = 125
    res = ov / val
  }
  if (si == 'mb' && so == 'KiB') {
    val = 122.1
    res = ov / val
  }
  if (si == 'mb' && so == 'Mibit') {
    val = 1.049
    res = ov * val
  }
  if (si == 'mb' && so == 'MB') {
    val = 8
    res = ov * val
  }
  if (si == 'mb' && so == 'MiB') {
    val = 8.389
    res = ov * val
  }
  if (si == 'mb' && so == 'gb') {
    val = 1000
    res = ov * val
  }
  if (si == 'mb' && so == 'Gibit') {
    val = 1074
    res = ov * val
  }
  if (si == 'mb' && so == 'GB') {
    val = 8000
    res = ov * val
  }
  if (si == 'mb' && so == 'GiB') {
    val = 8590
    res = ov * val
  }
  if (si == 'mb' && so == 'tb') {
    val = 1e+6
    res = ov * val
  }
  if (si == 'mb' && so == 'Tebit') {
    val = 1.1e+6
    res = ov * val
  }
  if (si == 'mb' && so == 'TB') {
    val = 8e+6
    res = ov * val
  }
  if (si == 'mb' && so == 'TiB') {
    val = 8.796e+6
    res = ov * val
  }
  if (si == 'mb' && so == 'pb') {
    val = 1e+9
    res = ov * val
  }
  if (si == 'mb' && so == 'Pibit') {
    val = 1.126e+9
    res = ov * val
  }
  if (si == 'mb' && so == 'PB') {
    val = 8e+9
    res = ov * val
  }
  if (si == 'mb' && so == 'PiB') {
    val = 9.007e+9
    res = ov * val
  }
  if (si == 'Mibit' && so == 'b') {
    val = 1.049e+6
    res = ov / val
  }
  if (si == 'Mibit' && so == 'B') {
    val = 131100
    res = ov / val
  }
  if (si == 'Mibit' && so == 'kb') {
    val = 1049
    res = ov / val
  }
  if (si == 'Mibit' && so == 'Kibit') {
    val = 1024
    res = ov / val
  }
  if (si == 'Mibit' && so == 'KB') {
    val = 131.1
    res = ov / val
  }
  if (si == 'Mibit' && so == 'KiB') {
    val = 128
    res = ov / val
  }
  if (si == 'Mibit' && so == 'mb') {
    val = 1.049
    res = ov / val
  }
  if (si == 'Mibit' && so == 'MB') {
    val = 7.629
    res = ov * val
  }
  if (si == 'Mibit' && so == 'MiB') {
    val = 8
    res = ov * val
  }
  if (si == 'Mibit' && so == 'gb') {
    val = 953.7
    res = ov * val
  }
  if (si == 'Mibit' && so == 'Gibit') {
    val = 1024
    res = ov * val
  }
  if (si == 'Mibit' && so == 'GB') {
    val = 7629
    res = ov * val
  }
  if (si == 'Mibit' && so == 'GiB') {
    val = 8192
    res = ov * val
  }
  if (si == 'Mibit' && so == 'tb') {
    val = 953700
    res = ov * val
  }
  if (si == 'Mibit' && so == 'Tebit') {
    val = 1.049e+6
    res = ov * val
  }
  if (si == 'Mibit' && so == 'TB') {
    val = 7.629e+6
    res = ov * val
  }
  if (si == 'Mibit' && so == 'TiB') {
    val = 8.389e+6
    res = ov * val
  }
  if (si == 'Mibit' && so == 'pb') {
    val = 9.537e+8
    res = ov * val
  }
  if (si == 'Mibit' && so == 'Pibit') {
    val = 1.074e+9
    res = ov * val
  }
  if (si == 'Mibit' && so == 'PB') {
    val = 7.629e+9
    res = ov * val
  }
  if (si == 'Mibit' && so == 'PiB') {
    val = 8.59e+9
    res = ov * val
  }
  if (si == 'MB' && so == 'b') {
    val = 8e+6
    res = ov / val
  }
  if (si == 'MB' && so == 'B') {
    val = 1e+6
    res = ov / val
  }
  if (si == 'MB' && so == 'kb') {
    val = 8000
    res = ov / val
  }
  if (si == 'MB' && so == 'Kibit') {
    val = 7813
    res = ov / val
  }
  if (si == 'MB' && so == 'KB') {
    val = 1000
    res = ov / val
  }
  if (si == 'MB' && so == 'KiB') {
    val = 976.6
    res = ov / val
  }
  if (si == 'MB' && so == 'mb') {
    val = 8
    res = ov / val
  }
  if (si == 'MB' && so == 'Mibit') {
    val = 7.629
    res = ov / val
  }
  if (si == 'MB' && so == 'MiB') {
    val = 1.049
    res = ov * val
  }
  if (si == 'MB' && so == 'gb') {
    val = 125
    res = ov * val
  }
  if (si == 'MB' && so == 'Gibit') {
    val = 134.2
    res = ov * val
  }
  if (si == 'MB' && so == 'GB') {
    val = 1000
    res = ov * val
  }
  if (si == 'MB' && so == 'GiB') {
    val = 1074
    res = ov * val
  }
  if (si == 'MB' && so == 'tb') {
    val = 125000
    res = ov * val
  }
  if (si == 'MB' && so == 'Tebit') {
    val = 137400
    res = ov * val
  }
  if (si == 'MB' && so == 'TB') {
    val = 1e+6
    res = ov * val
  }
  if (si == 'MB' && so == 'TiB') {
    val = 1.1e+6
    res = ov * val
  }
  if (si == 'MB' && so == 'pb') {
    val = 1.25e+8
    res = ov * val
  }
  if (si == 'MB' && so == 'Pibit') {
    val = 1.407e+8
    res = ov * val
  }
  if (si == 'MB' && so == 'PB') {
    val = 1e+9
    res = ov * val
  }
  if (si == 'MB' && so == 'PiB') {
    val = 1.126e+9
    res = ov * val
  }
  if (si == 'MiB' && so == 'b') {
    val = 8.389e+6
    res = ov / val
  }
  if (si == 'MiB' && so == 'B') {
    val = 1.049e+6
    res = ov / val
  }
  if (si == 'MiB' && so == 'kb') {
    val = 8389
    res = ov / val
  }
  if (si == 'MiB' && so == 'Kibit') {
    val = 8192
    res = ov / val
  }
  if (si == 'MiB' && so == 'KB') {
    val = 1049
    res = ov / val
  }
  if (si == 'MiB' && so == 'KiB') {
    val = 1024
    res = ov / val
  }
  if (si == 'MiB' && so == 'mb') {
    val = 8.389
    res = ov / val
  }
  if (si == 'MiB' && so == 'Mibit') {
    val = 8
    res = ov / val
  }
  if (si == 'MiB' && so == 'MB') {
    val = 1.049
    res = ov / val
  }
  if (si == 'MiB' && so == 'gb') {
    val = 119.2
    res = ov * val
  }
  if (si == 'MiB' && so == 'Gibit') {
    val = 128
    res = ov * val
  }
  if (si == 'MiB' && so == 'GB') {
    val = 953.7
    res = ov * val
  }
  if (si == 'MiB' && so == 'GiB') {
    val = 1024
    res = ov * val
  }
  if (si == 'MiB' && so == 'tb') {
    val = 119200
    res = ov * val
  }
  if (si == 'MiB' && so == 'Tebit') {
    val = 131100
    res = ov * val
  }
  if (si == 'MiB' && so == 'TB') {
    val = 953700
    res = ov * val
  }
  if (si == 'MiB' && so == 'TiB') {
    val = 1.049e+6
    res = ov * val
  }
  if (si == 'MiB' && so == 'pb') {
    val = 1.192e+8
    res = ov * val
  }
  if (si == 'MiB' && so == 'Pibit') {
    val = 1.342e+8
    res = ov * val
  }
  if (si == 'MiB' && so == 'PB') {
    val = 9.537e+8
    res = ov * val
  }
  if (si == 'MiB' && so == 'PiB') {
    val = 1.074e+9
    res = ov * val
  }
  if (si == 'gb' && so == 'b') {
    val = 1e+9
    res = ov / val
  }
  if (si == 'gb' && so == 'B') {
    val = 1.25e+8
    res = ov / val
  }
  if (si == 'gb' && so == 'kb') {
    val = 1e+6
    res = ov / val
  }
  if (si == 'gb' && so == 'Kibit') {
    val = 976600
    res = ov / val
  }
  if (si == 'gb' && so == 'KB') {
    val = 125000
    res = ov / val
  }
  if (si == 'gb' && so == 'KiB') {
    val = 122100
    res = ov / val
  }
  if (si == 'gb' && so == 'mb') {
    val = 1000
    res = ov / val
  }
  if (si == 'gb' && so == 'Mibit') {
    val = 953.7
    res = ov / val
  }
  if (si == 'gb' && so == 'MB') {
    val = 125
    res = ov / val
  }
  if (si == 'gb' && so == 'MiB') {
    val = 119.2
    res = ov / val
  }
  if (si == 'gb' && so == 'Gibit') {
    val = 1.074
    res = ov * val
  }
  if (si == 'gb' && so == 'GB') {
    val = 8
    res = ov * val
  }
  if (si == 'gb' && so == 'GiB') {
    val = 8.59
    res = ov * val
  }
  if (si == 'gb' && so == 'tb') {
    val = 1000
    res = ov * val
  }
  if (si == 'gb' && so == 'Tebit') {
    val = 1100
    res = ov * val
  }
  if (si == 'gb' && so == 'TB') {
    val = 8000
    res = ov * val
  }
  if (si == 'gb' && so == 'TiB') {
    val = 8796
    res = ov * val
  }
  if (si == 'gb' && so == 'pb') {
    val = 1e+6
    res = ov * val
  }
  if (si == 'gb' && so == 'Pibit') {
    val = 1.126e+6
    res = ov * val
  }
  if (si == 'gb' && so == 'PB') {
    val = 8e+6
    res = ov * val
  }
  if (si == 'gb' && so == 'PiB') {
    val = 9.007e+6
    res = ov * val
  }
  if (si == 'Gibit' && so == 'b') {
    val = 1.074e+9
    res = ov / val
  }
  if (si == 'Gibit' && so == 'B') {
    val = 1.342e+8
    res = ov / val
  }
  if (si == 'Gibit' && so == 'kb') {
    val = 1.074e+6
    res = ov / val
  }
  if (si == 'Gibit' && so == 'Kibit') {
    val = 1.049e+6
    res = ov / val
  }
  if (si == 'Gibit' && so == 'KB') {
    val = 134200
    res = ov / val
  }
  if (si == 'Gibit' && so == 'KiB') {
    val = 131100
    res = ov / val
  }
  if (si == 'Gibit' && so == 'mb') {
    val = 1074
    res = ov / val
  }
  if (si == 'Gibit' && so == 'Mibit') {
    val = 1024
    res = ov / val
  }
  if (si == 'Gibit' && so == 'MB') {
    val = 134.2
    res = ov / val
  }
  if (si == 'Gibit' && so == 'MiB') {
    val = 128
    res = ov / val
  }
  if (si == 'Gibit' && so == 'gb') {
    val = 1.074
    res = ov / val
  }
  if (si == 'Gibit' && so == 'GB') {
    val = 7.451
    res = ov * val
  }
  if (si == 'Gibit' && so == 'GiB') {
    val = 8
    res = ov * val
  }
  if (si == 'Gibit' && so == 'tb') {
    val = 931.3
    res = ov * val
  }
  if (si == 'Gibit' && so == 'Tebit') {
    val = 1024
    res = ov * val
  }
  if (si == 'Gibit' && so == 'TB') {
    val = 7451
    res = ov * val
  }
  if (si == 'Gibit' && so == 'TiB') {
    val = 8192
    res = ov * val
  }
  if (si == 'Gibit' && so == 'pb') {
    val = 931300
    res = ov * val
  }
  if (si == 'Gibit' && so == 'Pibit') {
    val = 1.049e+6
    res = ov * val
  }
  if (si == 'Gibit' && so == 'PB') {
    val = 7.451e+6
    res = ov * val
  }
  if (si == 'Gibit' && so == 'PiB') {
    val = 8.389e+6
    res = ov * val
  }
  if (si == 'GB' && so == 'b') {
    val = 8e+9
    res = ov / val
  }
  if (si == 'GB' && so == 'B') {
    val = 1e+9
    res = ov / val
  }
  if (si == 'GB' && so == 'kb') {
    val = 8e+6
    res = ov / val
  }
  if (si == 'GB' && so == 'Kibit') {
    val = 7.813e+6
    res = ov / val
  }
  if (si == 'GB' && so == 'KB') {
    val = 1e+6
    res = ov / val
  }
  if (si == 'GB' && so == 'KiB') {
    val = 976600
    res = ov / val
  }
  if (si == 'GB' && so == 'mb') {
    val = 8000
    res = ov / val
  }
  if (si == 'GB' && so == 'Mibit') {
    val = 7629
    res = ov / val
  }
  if (si == 'GB' && so == 'MB') {
    val = 1000
    res = ov / val
  }
  if (si == 'GB' && so == 'MiB') {
    val = 953.7
    res = ov / val
  }
  if (si == 'GB' && so == 'gb') {
    val = 8
    res = ov / val
  }
  if (si == 'GB' && so == 'Gibit') {
    val = 7.451
    res = ov / val
  }
  if (si == 'GB' && so == 'GiB') {
    val = 1.074
    res = ov * val
  }
  if (si == 'GB' && so == 'tb') {
    val = 125
    res = ov * val
  }
  if (si == 'GB' && so == 'Tebit') {
    val = 137.4
    res = ov * val
  }
  if (si == 'GB' && so == 'TB') {
    val = 1000
    res = ov * val
  }
  if (si == 'GB' && so == 'TiB') {
    val = 1100
    res = ov * val
  }
  if (si == 'GB' && so == 'pb') {
    val = 125000
    res = ov * val
  }
  if (si == 'GB' && so == 'Pibit') {
    val = 140700
    res = ov * val
  }
  if (si == 'GB' && so == 'PB') {
    val = 1e+6
    res = ov * val
  }
  if (si == 'GB' && so == 'PiB') {
    val = 1.126e+6
    res = ov * val
  }
  if (si == 'GiB' && so == 'b') {
    val = 8.59e+9
    res = ov / val
  }
  if (si == 'GiB' && so == 'B') {
    val = 1.074e+9
    res = ov / val
  }
  if (si == 'GiB' && so == 'kb') {
    val = 8.59e+6
    res = ov / val
  }
  if (si == 'GiB' && so == 'Kibit') {
    val = 8.389e+6
    res = ov / val
  }
  if (si == 'GiB' && so == 'KB') {
    val = 1.074e+6
    res = ov / val
  }
  if (si == 'GiB' && so == 'KiB') {
    val = 1.049e+6
    res = ov / val
  }
  if (si == 'GiB' && so == 'mb') {
    val = 8590
    res = ov / val
  }
  if (si == 'GiB' && so == 'Mibit') {
    val = 8192
    res = ov / val
  }
  if (si == 'GiB' && so == 'MB') {
    val = 1074
    res = ov / val
  }
  if (si == 'GiB' && so == 'MiB') {
    val = 1024
    res = ov / val
  }
  if (si == 'GiB' && so == 'gb') {
    val = 8.59
    res = ov / val
  }
  if (si == 'GiB' && so == 'Gibit') {
    val = 8
    res = ov / val
  }
  if (si == 'GiB' && so == 'GB') {
    val = 1.074
    res = ov / val
  }
  if (si == 'GiB' && so == 'tb') {
    val = 116.4
    res = ov * val
  }
  if (si == 'GiB' && so == 'Tebit') {
    val = 128
    res = ov * val
  }
  if (si == 'GiB' && so == 'TB') {
    val = 931.3
    res = ov * val
  }
  if (si == 'GiB' && so == 'TiB') {
    val = 1024
    res = ov * val
  }
  if (si == 'GiB' && so == 'pb') {
    val = 116400
    res = ov * val
  }
  if (si == 'GiB' && so == 'Pibit') {
    val = 131100
    res = ov * val
  }
  if (si == 'GiB' && so == 'PB') {
    val = 931300
    res = ov * val
  }
  if (si == 'GiB' && so == 'PiB') {
    val = 1.049e+6
    res = ov * val
  }
  if (si == 'tb' && so == 'b') {
    val = 1e+12
    res = ov / val
  }
  if (si == 'tb' && so == 'B') {
    val = 1.25e+11
    res = ov / val
  }
  if (si == 'tb' && so == 'kb') {
    val = 1e+9
    res = ov / val
  }
  if (si == 'tb' && so == 'Kibit') {
    val = 9.766e+8
    res = ov / val
  }
  if (si == 'tb' && so == 'KB') {
    val = 1.25e+8
    res = ov / val
  }
  if (si == 'tb' && so == 'KiB') {
    val = 1.221e+8
    res = ov / val
  }
  if (si == 'tb' && so == 'mb') {
    val = 1e+6
    res = ov / val
  }
  if (si == 'tb' && so == 'Mibit') {
    val = 953700
    res = ov / val
  }
  if (si == 'tb' && so == 'MB') {
    val = 125000
    res = ov / val
  }
  if (si == 'tb' && so == 'MiB') {
    val = 119200
    res = ov / val
  }
  if (si == 'tb' && so == 'gb') {
    val = 1000
    res = ov / val
  }
  if (si == 'tb' && so == 'Gibit') {
    val = 931.3
    res = ov / val
  }
  if (si == 'tb' && so == 'GB') {
    val = 125
    res = ov / val
  }
  if (si == 'tb' && so == 'GiB') {
    val = 116.4
    res = ov / val
  }
  if (si == 'tb' && so == 'Tebit') {
    val = 1.1
    res = ov * val
  }
  if (si == 'tb' && so == 'TB') {
    val = 8
    res = ov * val
  }
  if (si == 'tb' && so == 'TiB') {
    val = 8.796
    res = ov * val
  }
  if (si == 'tb' && so == 'pb') {
    val = 1000
    res = ov * val
  }
  if (si == 'tb' && so == 'Pibit') {
    val = 1126
    res = ov * val
  }
  if (si == 'tb' && so == 'PB') {
    val = 8000
    res = ov * val
  }
  if (si == 'tb' && so == 'PiB') {
    val = 9007
    res = ov * val
  }
  if (si == 'Tebit' && so == 'b') {
    val = 1.1e+12
    res = ov / val
  }
  if (si == 'Tebit' && so == 'B') {
    val = 1.374e+11
    res = ov / val
  }
  if (si == 'Tebit' && so == 'kb') {
    val = 1.1e+9
    res = ov / val
  }
  if (si == 'Tebit' && so == 'Kibit') {
    val = 1.074e+9
    res = ov / val
  }
  if (si == 'Tebit' && so == 'KB') {
    val = 1.374e+8
    res = ov / val
  }
  if (si == 'Tebit' && so == 'KiB') {
    val = 1.342e+8
    res = ov / val
  }
  if (si == 'Tebit' && so == 'mb') {
    val = 1.1e+6
    res = ov / val
  }
  if (si == 'Tebit' && so == 'Mibit') {
    val = 1.049e+6
    res = ov / val
  }
  if (si == 'Tebit' && so == 'MB') {
    val = 137400
    res = ov / val
  }
  if (si == 'Tebit' && so == 'MiB') {
    val = 131100
    res = ov / val
  }
  if (si == 'Tebit' && so == 'gb') {
    val = 1100
    res = ov / val
  }
  if (si == 'Tebit' && so == 'Gibit') {
    val = 1024
    res = ov / val
  }
  if (si == 'Tebit' && so == 'GB') {
    val = 131.4
    res = ov / val
  }
  if (si == 'Tebit' && so == 'GiB') {
    val = 128
    res = ov / val
  }
  if (si == 'Tebit' && so == 'tb') {
    val = 1.1
    res = ov / val
  }
  if (si == 'Tebit' && so == 'TB') {
    val = 7.276
    res = ov * val
  }
  if (si == 'Tebit' && so == 'TiB') {
    val = 8
    res = ov * val
  }
  if (si == 'Tebit' && so == 'pb') {
    val = 909.5
    res = ov * val
  }
  if (si == 'Tebit' && so == 'Pibit') {
    val = 1024
    res = ov * val
  }
  if (si == 'Tebit' && so == 'PB') {
    val = 7276
    res = ov * val
  }
  if (si == 'Tebit' && so == 'PiB') {
    val = 8192
    res = ov * val
  }
  if (si == 'TB' && so == 'b') {
    val = 8e+12
    res = ov / val
  }
  if (si == 'TB' && so == 'B') {
    val = 1e+12
    res = ov / val
  }
  if (si == 'TB' && so == 'kb') {
    val = 8e+9
    res = ov / val
  }
  if (si == 'TB' && so == 'Kibit') {
    val = 7.813e+9
    res = ov / val
  }
  if (si == 'TB' && so == 'KB') {
    val = 1e+9
    res = ov / val
  }
  if (si == 'TB' && so == 'KiB') {
    val = 9.766e+8
    res = ov / val
  }
  if (si == 'TB' && so == 'mb') {
    val = 8e+6
    res = ov / val
  }
  if (si == 'TB' && so == 'Mibit') {
    val = 7.629e+6
    res = ov / val
  }
  if (si == 'TB' && so == 'MB') {
    val = 1e+6
    res = ov / val
  }
  if (si == 'TB' && so == 'MiB') {
    val = 953700
    res = ov / val
  }
  if (si == 'TB' && so == 'gb') {
    val = 8000
    res = ov / val
  }
  if (si == 'TB' && so == 'Gibit') {
    val = 7451
    res = ov / val
  }
  if (si == 'TB' && so == 'GB') {
    val = 1000
    res = ov / val
  }
  if (si == 'TB' && so == 'GiB') {
    val = 931.3
    res = ov / val
  }
  if (si == 'TB' && so == 'tb') {
    val = 8
    res = ov / val
  }
  if (si == 'TB' && so == 'Tebit') {
    val = 7.276
    res = ov / val
  }
  if (si == 'TB' && so == 'TiB') {
    val = 1.1
    res = ov * val
  }
  if (si == 'TB' && so == 'pb') {
    val = 125
    res = ov * val
  }
  if (si == 'TB' && so == 'Pibit') {
    val = 140.7
    res = ov * val
  }
  if (si == 'TB' && so == 'PB') {
    val = 1000
    res = ov * val
  }
  if (si == 'TB' && so == 'PiB') {
    val = 1126
    res = ov * val
  }
  if (si == 'TiB' && so == 'b') {
    val = 8.796e+12
    res = ov / val
  }
  if (si == 'TiB' && so == 'B') {
    val = 1.1e+12
    res = ov / val
  }
  if (si == 'TiB' && so == 'kb') {
    val = 8.796e+9
    res = ov / val
  }
  if (si == 'TiB' && so == 'Kibit') {
    val = 8.59e+9
    res = ov / val
  }
  if (si == 'TiB' && so == 'KB') {
    val = 1.1e+9
    res = ov / val
  }
  if (si == 'TiB' && so == 'KiB') {
    val = 1.074e+9
    res = ov / val
  }
  if (si == 'TiB' && so == 'mb') {
    val = 8.796e+6
    res = ov / val
  }
  if (si == 'TiB' && so == 'Mibit') {
    val = 8.389e+6
    res = ov / val
  }
  if (si == 'TiB' && so == 'MB') {
    val = 1.1e+6
    res = ov / val
  }
  if (si == 'TiB' && so == 'MiB') {
    val = 1.049e+6
    res = ov / val
  }
  if (si == 'TiB' && so == 'gb') {
    val = 8796
    res = ov / val
  }
  if (si == 'TiB' && so == 'Gibit') {
    val = 8192
    res = ov / val
  }
  if (si == 'TiB' && so == 'GB') {
    val = 1100
    res = ov / val
  }
  if (si == 'TiB' && so == 'GiB') {
    val = 1024
    res = ov / val
  }
  if (si == 'TiB' && so == 'tb') {
    val = 8.796
    res = ov / val
  }
  if (si == 'TiB' && so == 'Tebit') {
    val = 8
    res = ov / val
  }
  if (si == 'TiB' && so == 'TB') {
    val = 1.1
    res = ov / val
  }
  if (si == 'TiB' && so == 'pb') {
    val = 113.7
    res = ov * val
  }
  if (si == 'TiB' && so == 'Pibit') {
    val = 128
    res = ov * val
  }
  if (si == 'TiB' && so == 'PB') {
    val = 909.5
    res = ov * val
  }
  if (si == 'TiB' && so == 'PiB') {
    val = 1024
    res = ov * val
  }
  if (si == 'pb' && so == 'b') {
    val = 1e+15
    res = ov / val
  }
  if (si == 'pb' && so == 'B') {
    val = 1.25e+14
    res = ov / val
  }
  if (si == 'pb' && so == 'kb') {
    val = 1e+12
    res = ov / val
  }
  if (si == 'pb' && so == 'Kibit') {
    val = 9.766e+11
    res = ov / val
  }
  if (si == 'pb' && so == 'KB') {
    val = 1.25e+11
    res = ov / val
  }
  if (si == 'pb' && so == 'KiB') {
    val = 1.221e+11
    res = ov / val
  }
  if (si == 'pb' && so == 'mb') {
    val = 1e+9
    res = ov / val
  }
  if (si == 'pb' && so == 'Mibit') {
    val = 9.537e+8
    res = ov / val
  }
  if (si == 'pb' && so == 'MB') {
    val = 1.25e+8
    res = ov / val
  }
  if (si == 'pb' && so == 'MiB') {
    val = 1.192e+8
    res = ov / val
  }
  if (si == 'pb' && so == 'gb') {
    val = 1e+6
    res = ov / val
  }
  if (si == 'pb' && so == 'Gibit') {
    val = 931300
    res = ov / val
  }
  if (si == 'pb' && so == 'GB') {
    val = 125000
    res = ov / val
  }
  if (si == 'pb' && so == 'GiB') {
    val = 116400
    res = ov / val
  }
  if (si == 'pb' && so == 'tb') {
    val = 1000
    res = ov / val
  }
  if (si == 'pb' && so == 'Tebit') {
    val = 909.5
    res = ov / val
  }
  if (si == 'pb' && so == 'TB') {
    val = 125
    res = ov / val
  }
  if (si == 'pb' && so == 'TiB') {
    val = 113.7
    res = ov / val
  }
  if (si == 'pb' && so == 'Pibit') {
    val = 1.126
    res = ov * val
  }
  if (si == 'pb' && so == 'PB') {
    val = 8
    res = ov * val
  }
  if (si == 'pb' && so == 'PiB') {
    val = 9.007
    res = ov * val
  }
  if (si == 'Pibit' && so == 'b') {
    val = 1.126e+15
    res = ov / val
  }
  if (si == 'Pibit' && so == 'B') {
    val = 1.407e+14
    res = ov / val
  }
  if (si == 'Pibit' && so == 'kb') {
    val = 1.126e+12
    res = ov / val
  }
  if (si == 'Pibit' && so == 'Kibit') {
    val = 1.1e+12
    res = ov / val
  }
  if (si == 'Pibit' && so == 'KB') {
    val = 1.407e+11
    res = ov / val
  }
  if (si == 'Pibit' && so == 'KiB') {
    val = 1.374e+11
    res = ov / val
  }
  if (si == 'Pibit' && so == 'mb') {
    val = 1.126e+9
    res = ov / val
  }
  if (si == 'Pibit' && so == 'Mibit') {
    val = 1.074e+9
    res = ov / val
  }
  if (si == 'Pibit' && so == 'MB') {
    val = 1.407e+8
    res = ov / val
  }
  if (si == 'Pibit' && so == 'MiB') {
    val = 1.342e+8
    res = ov / val
  }
  if (si == 'Pibit' && so == 'gb') {
    val = 1.126e+6
    res = ov / val
  }
  if (si == 'Pibit' && so == 'Gibit') {
    val = 1.049e+6
    res = ov / val
  }
  if (si == 'Pibit' && so == 'GB') {
    val = 140700
    res = ov / val
  }
  if (si == 'Pibit' && so == 'GiB') {
    val = 131100
    res = ov / val
  }
  if (si == 'Pibit' && so == 'tb') {
    val = 1126
    res = ov / val
  }
  if (si == 'Pibit' && so == 'Tebit') {
    val = 1024
    res = ov / val
  }
  if (si == 'Pibit' && so == 'TB') {
    val = 140.7
    res = ov / val
  }
  if (si == 'Pibit' && so == 'TiB') {
    val = 128
    res = ov / val
  }
  if (si == 'Pibit' && so == 'pb') {
    val = 1.126
    res = ov / val
  }
  if (si == 'Pibit' && so == 'PB') {
    val = 7.105
    res = ov * val
  }
  if (si == 'Pibit' && so == 'PiB') {
    val = 8
    res = ov * val
  }
  if (si == 'PB' && so == 'b') {
    val = 8e+15
    res = ov / val
  }
  if (si == 'PB' && so == 'B') {
    val = 1e+15
    res = ov / val
  }
  if (si == 'PB' && so == 'kb') {
    val = 8e+12
    res = ov / val
  }
  if (si == 'PB' && so == 'Kibit') {
    val = 7.813e+12
    res = ov / val
  }
  if (si == 'PB' && so == 'KB') {
    val = 1e+12
    res = ov / val
  }
  if (si == 'PB' && so == 'KiB') {
    val = 9.766e+11
    res = ov / val
  }
  if (si == 'PB' && so == 'mb') {
    val = 8e+9
    res = ov / val
  }
  if (si == 'PB' && so == 'Mibit') {
    val = 7.629e+9
    res = ov / val
  }
  if (si == 'PB' && so == 'MB') {
    val = 1e+9
    res = ov / val
  }
  if (si == 'PB' && so == 'MiB') {
    val = 9.537e+8
    res = ov / val
  }
  if (si == 'PB' && so == 'gb') {
    val = 8e+6
    res = ov / val
  }
  if (si == 'PB' && so == 'Gibit') {
    val = 7.451e+6
    res = ov / val
  }
  if (si == 'PB' && so == 'GB') {
    val = 1e+6
    res = ov / val
  }
  if (si == 'PB' && so == 'GiB') {
    val = 931300
    res = ov / val
  }
  if (si == 'PB' && so == 'tb') {
    val = 8000
    res = ov / val
  }
  if (si == 'PB' && so == 'Tebit') {
    val = 7276
    res = ov / val
  }
  if (si == 'PB' && so == 'TB') {
    val = 1000
    res = ov / val
  }
  if (si == 'PB' && so == 'TiB') {
    val = 909.5
    res = ov / val
  }
  if (si == 'PB' && so == 'pb') {
    val = 8
    res = ov / val
  }
  if (si == 'PB' && so == 'Pibit') {
    val = 7.105
    res = ov / val
  }
  if (si == 'PB' && so == 'PiB') {
    val = 1.126
    res = ov * val
  }
  if (si == 'PiB' && so == 'b') {
    val = 9.007e+15
    res = ov / val
  }
  if (si == 'PiB' && so == 'B') {
    val = 1.126e+15
    res = ov / val
  }
  if (si == 'PiB' && so == 'kb') {
    val = 9.007e+12
    res = ov / val
  }
  if (si == 'PiB' && so == 'Kibit') {
    val = 8.796e+12
    res = ov / val
  }
  if (si == 'PiB' && so == 'KB') {
    val = 1.126e+12
    res = ov / val
  }
  if (si == 'PiB' && so == 'KiB') {
    val = 1.126e+12
    res = ov / val
  }
  if (si == 'PiB' && so == 'mb') {
    val = 9.007e+9
    res = ov / val
  }
  if (si == 'PiB' && so == 'Mibit') {
    val = 8.59e+9
    res = ov / val
  }
  if (si == 'PiB' && so == 'MB') {
    val = 1.126e+9
    res = ov / val
  }
  if (si == 'PiB' && so == 'MiB') {
    val = 1.074e+9
    res = ov / val
  }
  if (si == 'PiB' && so == 'gb') {
    val = 9.007e+6
    res = ov / val
  }
  if (si == 'PiB' && so == 'Gibit') {
    val = 8.389e+6
    res = ov / val
  }
  if (si == 'PiB' && so == 'GB') {
    val = 1.126e+6
    res = ov / val
  }
  if (si == 'PiB' && so == 'GiB') {
    val = 1.049e+6
    res = ov / val
  }
  if (si == 'PiB' && so == 'tb') {
    val = 9007
    res = ov / val
  }
  if (si == 'PiB' && so == 'Tebit') {
    val = 8192
    res = ov / val
  }
  if (si == 'PiB' && so == 'TB') {
    val = 1126
    res = ov / val
  }
  if (si == 'PiB' && so == 'TiB') {
    val = 1024
    res = ov / val
  }
  if (si == 'PiB' && so == 'pb') {
    val = 9.007
    res = ov / val
  }
  if (si == 'PiB' && so == 'Pibit') {
    val = 8
    res = ov / val
  }
  if (si == 'PiB' && so == 'PB') {
    val = 1.126
    res = ov / val
  }
  if (res.toString().length >= 10 && si !== so) {
    input.value = res.toExponential(5)
  }
  else {
    input.value = res
  }
}
