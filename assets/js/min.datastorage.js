const input=document.getElementById("inputData"),output=document.getElementById("outputData"),selectInp=document.getElementById("selectInput"),selectOut=document.getElementById("selectOutput");function dataStorageConverter(){input.setAttribute("placeholder",selectInp.value),output.setAttribute("placeholder",selectOut.value);const i=input.value,b=(output.value,selectInp.value),B=selectOut.value;let e,t;null==t&&(t=0),b===B&&(t=i),"b"==b&&"B"==B&&(e=8,t=i/e),"b"==b&&"kb"==B&&(e=1e3,t=i/e),"b"==b&&"Kibit"==B&&(e=1024,t=i/e),"b"==b&&"KB"==B&&(e=8e3,t=i/e),"b"==b&&"KiB"==B&&(e=8192,t=i/e),"b"==b&&"mb"==B&&(e=1e6,t=i/e),"b"==b&&"Mibit"==B&&(e=1049e3,t=i/e),"b"==b&&"MB"==B&&(e=8e6,t=i/e),"b"==b&&"MiB"==B&&(e=8389e3,t=i/e),"b"==b&&"gb"==B&&(e=1e9,t=i/e),"b"==b&&"Gibit"==B&&(e=1074e6,t=i/e),"b"==b&&"GB"==B&&(e=8e9,t=i/e),"b"==b&&"GiB"==B&&(e=859e7,t=i/e),"b"==b&&"tb"==B&&(e=1e12,t=i/e),"b"==b&&"Tebit"==B&&(e=11e11,t=i/e),"b"==b&&"TB"==B&&(e=8e12,t=i/e),"b"==b&&"TiB"==B&&(e=8796e9,t=i/e),"b"==b&&"pb"==B&&(e=1e15,t=i/e),"b"==b&&"Pibit"==B&&(e=1126e12,t=i/e),"b"==b&&"PB"==B&&(e=8e15,t=i/e),"b"==b&&"PiB"==B&&(e=9007e12,t=i/e),"B"==b&&"b"==B&&(e=8,t=i*e),"B"==b&&"kb"==B&&(e=125,t=i/e),"B"==b&&"Kibit"==B&&(e=128,t=i/e),"B"==b&&"KB"==B&&(e=1e3,t=i/e),"B"==b&&"KiB"==B&&(e=1024,t=i/e),"B"==b&&"mb"==B&&(e=125e3,t=i/e),"B"==b&&"Mibit"==B&&(e=131100,t=i/e),"B"==b&&"MB"==B&&(e=1e6,t=i/e),"B"==b&&"MiB"==B&&(e=1049e3,t=i/e),"B"==b&&"gb"==B&&(e=125e6,t=i/e),"B"==b&&"Gibit"==B&&(e=1342e5,t=i/e),"B"==b&&"GB"==B&&(e=1e9,t=i/e),"B"==b&&"GiB"==B&&(e=1074e6,t=i/e),"B"==b&&"tb"==B&&(e=125e9,t=i/e),"B"==b&&"Tebit"==B&&(e=1374e8,t=i/e),"B"==b&&"TB"==B&&(e=1e12,t=i/e),"B"==b&&"TiB"==B&&(e=11e11,t=i/e),"B"==b&&"pb"==B&&(e=125e12,t=i/e),"B"==b&&"Pibit"==B&&(e=1407e11,t=i/e),"B"==b&&"PB"==B&&(e=1e15,t=i/e),"B"==b&&"PiB"==B&&(e=126e13,t=i/e),"kb"==b&&"b"==B&&(e=1e3,t=i*e),"kb"==b&&"B"==B&&(e=125,t=i*e),"kb"==b&&"Kibit"==B&&(e=1.024,t=i/e),"kb"==b&&"KB"==B&&(e=8,t=i/e),"kb"==b&&"KiB"==B&&(e=8.192,t=i/e),"kb"==b&&"mb"==B&&(e=1e3,t=i/e),"kb"==b&&"Mibit"==B&&(e=1049,t=i/e),"kb"==b&&"MB"==B&&(e=8e3,t=i/e),"kb"==b&&"MiB"==B&&(e=8389,t=i/e),"kb"==b&&"gb"==B&&(e=1e6,t=i/e),"kb"==b&&"Gibit"==B&&(e=1074e3,t=i/e),"kb"==b&&"GB"==B&&(e=8e6,t=i/e),"kb"==b&&"GiB"==B&&(e=859e4,t=i/e),"kb"==b&&"tb"==B&&(e=1e9,t=i/e),"kb"==b&&"Tebit"==B&&(e=11e8,t=i/e),"kb"==b&&"TB"==B&&(e=8e9,t=i/e),"kb"==b&&"TiB"==B&&(e=8796e6,t=i/e),"kb"==b&&"pb"==B&&(e=1e12,t=i/e),"kb"==b&&"Pibit"==B&&(e=1126e9,t=i/e),"kb"==b&&"PB"==B&&(e=8e12,t=i/e),"kb"==b&&"PiB"==B&&(e=9007e9,t=i/e),"Kibit"==b&&"b"==B&&(e=1024,t=i*e),"Kibit"==b&&"B"==B&&(e=128,t=i*e),"Kibit"==b&&"kb"==B&&(e=1.024,t=i*e),"Kibit"==b&&"KB"==B&&(e=7.812,t=i/e),"Kibit"==b&&"KiB"==B&&(e=8,t=i/e),"Kibit"==b&&"mb"==B&&(e=976.6,t=i/e),"Kibit"==b&&"Mibit"==B&&(e=1024,t=i/e),"Kibit"==b&&"MB"==B&&(e=7813,t=i/e),"Kibit"==b&&"MiB"==B&&(e=8192,t=i/e),"Kibit"==b&&"gb"==B&&(e=976600,t=i/e),"Kibit"==b&&"Gibit"==B&&(e=1049e3,t=i/e),"Kibit"==b&&"GB"==B&&(e=7813e3,t=i/e),"Kibit"==b&&"GiB"==B&&(e=8389e3,t=i/e),"Kibit"==b&&"tb"==B&&(e=9766e5,t=i/e),"Kibit"==b&&"Tebit"==B&&(e=1074e6,t=i/e),"Kibit"==b&&"TB"==B&&(e=7813e6,t=i/e),"Kibit"==b&&"TiB"==B&&(e=859e7,t=i/e),"Kibit"==b&&"pb"==B&&(e=9766e8,t=i/e),"Kibit"==b&&"Pibit"==B&&(e=11e11,t=i/e),"Kibit"==b&&"PB"==B&&(e=7812e9,t=i/e),"Kibit"==b&&"PiB"==B&&(e=8796e9,t=i/e),"KB"==b&&"b"==B&&(e=8e3,t=i*e),"KB"==b&&"B"==B&&(e=1e3,t=i*e),"KB"==b&&"kb"==B&&(e=8,t=i*e),"KB"==b&&"Kibit"==B&&(e=7.812,t=i*e),"KB"==b&&"KiB"==B&&(e=1.024,t=i/e),"KB"==b&&"mb"==B&&(e=125,t=i/e),"KB"==b&&"Mibit"==B&&(e=131.1,t=i/e),"KB"==b&&"MB"==B&&(e=1e3,t=i/e),"KB"==b&&"MiB"==B&&(e=1049,t=i/e),"KB"==b&&"gb"==B&&(e=125e3,t=i/e),"KB"==b&&"Gibit"==B&&(e=134200,t=i/e),"KB"==b&&"GB"==B&&(e=1e6,t=i/e),"KB"==b&&"GiB"==B&&(e=1074e3,t=i/e),"KB"==b&&"tb"==B&&(e=125e6,t=i/e),"KB"==b&&"Tebit"==B&&(e=1374e5,t=i/e),"KB"==b&&"TB"==B&&(e=1e9,t=i/e),"KB"==b&&"TiB"==B&&(e=11e8,t=i/e),"KB"==b&&"pb"==B&&(e=125e9,t=i/e),"KB"==b&&"Pibit"==B&&(e=1407e8,t=i/e),"KB"==b&&"PB"==B&&(e=1e12,t=i/e),"KB"==b&&"PiB"==B&&(e=1126e9,t=i/e),"KiB"==b&&"b"==B&&(e=8192,t=i*e),"KiB"==b&&"B"==B&&(e=1024,t=i*e),"KiB"==b&&"kb"==B&&(e=8.192,t=i*e),"KiB"==b&&"Kibit"==B&&(e=8,t=i*e),"KiB"==b&&"KB"==B&&(e=1.024,t=i*e),"KiB"==b&&"mb"==B&&(e=122.1,t=i/e),"KiB"==b&&"Mibit"==B&&(e=128,t=i/e),"KiB"==b&&"MB"==B&&(e=976.6,t=i/e),"KiB"==b&&"MiB"==B&&(e=1024,t=i/e),"KiB"==b&&"gb"==B&&(e=122100,t=i/e),"KiB"==b&&"Gibit"==B&&(e=131100,t=i/e),"KiB"==b&&"GB"==B&&(e=976600,t=i/e),"KiB"==b&&"GiB"==B&&(e=1049e3,t=i/e),"KiB"==b&&"tb"==B&&(e=1221e5,t=i/e),"KiB"==b&&"Tebit"==B&&(e=1342e5,t=i/e),"KiB"==b&&"TB"==B&&(e=9766e5,t=i/e),"KiB"==b&&"TiB"==B&&(e=1074e6,t=i/e),"KiB"==b&&"pb"==B&&(e=1221e8,t=i/e),"KiB"==b&&"Pibit"==B&&(e=1374e8,t=i/e),"KiB"==b&&"PB"==B&&(e=9766e8,t=i/e),"KiB"==b&&"PiB"==B&&(e=11e11,t=i/e),"mb"==b&&"b"==B&&(e=1e6,t=i*e),"mb"==b&&"B"==B&&(e=125e3,t=i*e),"mb"==b&&"kb"==B&&(e=1e3,t=i*e),"mb"==b&&"Kibit"==B&&(e=976.6,t=i*e),"mb"==b&&"KB"==B&&(e=125,t=i*e),"mb"==b&&"KiB"==B&&(e=122.1,t=i*e),"mb"==b&&"Mibit"==B&&(e=1.049,t=i/e),"mb"==b&&"MB"==B&&(e=8,t=i/e),"mb"==b&&"MiB"==B&&(e=8.389,t=i/e),"mb"==b&&"gb"==B&&(e=1e3,t=i/e),"mb"==b&&"Gibit"==B&&(e=1074,t=i/e),"mb"==b&&"GB"==B&&(e=8e3,t=i/e),"mb"==b&&"GiB"==B&&(e=8590,t=i/e),"mb"==b&&"tb"==B&&(e=1e6,t=i/e),"mb"==b&&"Tebit"==B&&(e=11e5,t=i/e),"mb"==b&&"TB"==B&&(e=8e6,t=i/e),"mb"==b&&"TiB"==B&&(e=8796e3,t=i/e),"mb"==b&&"pb"==B&&(e=1e9,t=i/e),"mb"==b&&"Pibit"==B&&(e=1126e6,t=i/e),"mb"==b&&"PB"==B&&(e=8e9,t=i/e),"mb"==b&&"PiB"==B&&(e=9007e6,t=i/e),"Mibit"==b&&"b"==B&&(e=1049e3,t=i*e),"Mibit"==b&&"B"==B&&(e=131100,t=i*e),"Mibit"==b&&"kb"==B&&(e=1049,t=i*e),"Mibit"==b&&"Kibit"==B&&(e=1024,t=i*e),"Mibit"==b&&"KB"==B&&(e=131.1,t=i*e),"Mibit"==b&&"KiB"==B&&(e=128,t=i*e),"Mibit"==b&&"mb"==B&&(e=1.049,t=i*e),"Mibit"==b&&"MB"==B&&(e=7.629,t=i/e),"Mibit"==b&&"MiB"==B&&(e=8,t=i/e),"Mibit"==b&&"gb"==B&&(e=953.7,t=i/e),"Mibit"==b&&"Gibit"==B&&(e=1024,t=i/e),"Mibit"==b&&"GB"==B&&(e=7629,t=i/e),"Mibit"==b&&"GiB"==B&&(e=8192,t=i/e),"Mibit"==b&&"tb"==B&&(e=953700,t=i/e),"Mibit"==b&&"Tebit"==B&&(e=1049e3,t=i/e),"Mibit"==b&&"TB"==B&&(e=7629e3,t=i/e),"Mibit"==b&&"TiB"==B&&(e=8389e3,t=i/e),"Mibit"==b&&"pb"==B&&(e=9537e5,t=i/e),"Mibit"==b&&"Pibit"==B&&(e=1074e6,t=i/e),"Mibit"==b&&"PB"==B&&(e=7629e6,t=i/e),"Mibit"==b&&"PiB"==B&&(e=859e7,t=i/e),"MB"==b&&"b"==B&&(e=8e6,t=i*e),"MB"==b&&"B"==B&&(e=1e6,t=i*e),"MB"==b&&"kb"==B&&(e=8e3,t=i*e),"MB"==b&&"Kibit"==B&&(e=7813,t=i*e),"MB"==b&&"KB"==B&&(e=1e3,t=i*e),"MB"==b&&"KiB"==B&&(e=976.6,t=i*e),"MB"==b&&"mb"==B&&(e=8,t=i*e),"MB"==b&&"Mibit"==B&&(e=7.629,t=i*e),"MB"==b&&"MiB"==B&&(e=1.049,t=i/e),"MB"==b&&"gb"==B&&(e=125,t=i/e),"MB"==b&&"Gibit"==B&&(e=134.2,t=i/e),"MB"==b&&"GB"==B&&(e=1e3,t=i/e),"MB"==b&&"GiB"==B&&(e=1074,t=i/e),"MB"==b&&"tb"==B&&(e=125e3,t=i/e),"MB"==b&&"Tebit"==B&&(e=137400,t=i/e),"MB"==b&&"TB"==B&&(e=1e6,t=i/e),"MB"==b&&"TiB"==B&&(e=11e5,t=i/e),"MB"==b&&"pb"==B&&(e=125e6,t=i/e),"MB"==b&&"Pibit"==B&&(e=1407e5,t=i/e),"MB"==b&&"PB"==B&&(e=1e9,t=i/e),"MB"==b&&"PiB"==B&&(e=1126e6,t=i/e),"MiB"==b&&"b"==B&&(e=8389e3,t=i*e),"MiB"==b&&"B"==B&&(e=1049e3,t=i*e),"MiB"==b&&"kb"==B&&(e=8389,t=i*e),"MiB"==b&&"Kibit"==B&&(e=8192,t=i*e),"MiB"==b&&"KB"==B&&(e=1049,t=i*e),"MiB"==b&&"KiB"==B&&(e=1024,t=i*e),"MiB"==b&&"mb"==B&&(e=8.389,t=i*e),"MiB"==b&&"Mibit"==B&&(e=8,t=i*e),"MiB"==b&&"MB"==B&&(e=1.049,t=i*e),"MiB"==b&&"gb"==B&&(e=119.2,t=i/e),"MiB"==b&&"Gibit"==B&&(e=128,t=i/e),"MiB"==b&&"GB"==B&&(e=953.7,t=i/e),"MiB"==b&&"GiB"==B&&(e=1024,t=i/e),"MiB"==b&&"tb"==B&&(e=119200,t=i/e),"MiB"==b&&"Tebit"==B&&(e=131100,t=i/e),"MiB"==b&&"TB"==B&&(e=953700,t=i/e),"MiB"==b&&"TiB"==B&&(e=1049e3,t=i/e),"MiB"==b&&"pb"==B&&(e=1192e5,t=i/e),"MiB"==b&&"Pibit"==B&&(e=1342e5,t=i/e),"MiB"==b&&"PB"==B&&(e=9537e5,t=i/e),"MiB"==b&&"PiB"==B&&(e=1074e6,t=i/e),"gb"==b&&"b"==B&&(e=1e9,t=i*e),"gb"==b&&"B"==B&&(e=125e6,t=i*e),"gb"==b&&"kb"==B&&(e=1e6,t=i*e),"gb"==b&&"Kibit"==B&&(e=976600,t=i*e),"gb"==b&&"KB"==B&&(e=125e3,t=i*e),"gb"==b&&"KiB"==B&&(e=122100,t=i*e),"gb"==b&&"mb"==B&&(e=1e3,t=i*e),"gb"==b&&"Mibit"==B&&(e=953.7,t=i*e),"gb"==b&&"MB"==B&&(e=125,t=i*e),"gb"==b&&"MiB"==B&&(e=119.2,t=i*e),"gb"==b&&"Gibit"==B&&(e=1.074,t=i/e),"gb"==b&&"GB"==B&&(e=8,t=i/e),"gb"==b&&"GiB"==B&&(e=8.59,t=i/e),"gb"==b&&"tb"==B&&(e=1e3,t=i/e),"gb"==b&&"Tebit"==B&&(e=1100,t=i/e),"gb"==b&&"TB"==B&&(e=8e3,t=i/e),"gb"==b&&"TiB"==B&&(e=8796,t=i/e),"gb"==b&&"pb"==B&&(e=1e6,t=i/e),"gb"==b&&"Pibit"==B&&(e=1126e3,t=i/e),"gb"==b&&"PB"==B&&(e=8e6,t=i/e),"gb"==b&&"PiB"==B&&(e=9007e3,t=i/e),"Gibit"==b&&"b"==B&&(e=1074e6,t=i*e),"Gibit"==b&&"B"==B&&(e=1342e5,t=i*e),"Gibit"==b&&"kb"==B&&(e=1074e3,t=i*e),"Gibit"==b&&"Kibit"==B&&(e=1049e3,t=i*e),"Gibit"==b&&"KB"==B&&(e=134200,t=i*e),"Gibit"==b&&"KiB"==B&&(e=131100,t=i*e),"Gibit"==b&&"mb"==B&&(e=1074,t=i*e),"Gibit"==b&&"Mibit"==B&&(e=1024,t=i*e),"Gibit"==b&&"MB"==B&&(e=134.2,t=i*e),"Gibit"==b&&"MiB"==B&&(e=128,t=i*e),"Gibit"==b&&"gb"==B&&(e=1.074,t=i*e),"Gibit"==b&&"GB"==B&&(e=7.451,t=i/e),"Gibit"==b&&"GiB"==B&&(e=8,t=i/e),"Gibit"==b&&"tb"==B&&(e=931.3,t=i/e),"Gibit"==b&&"Tebit"==B&&(e=1024,t=i/e),"Gibit"==b&&"TB"==B&&(e=7451,t=i/e),"Gibit"==b&&"TiB"==B&&(e=8192,t=i/e),"Gibit"==b&&"pb"==B&&(e=931300,t=i/e),"Gibit"==b&&"Pibit"==B&&(e=1049e3,t=i/e),"Gibit"==b&&"PB"==B&&(e=7451e3,t=i/e),"Gibit"==b&&"PiB"==B&&(e=8389e3,t=i/e),"GB"==b&&"b"==B&&(e=8e9,t=i*e),"GB"==b&&"B"==B&&(e=1e9,t=i*e),"GB"==b&&"kb"==B&&(e=8e6,t=i*e),"GB"==b&&"Kibit"==B&&(e=7813e3,t=i*e),"GB"==b&&"KB"==B&&(e=1e6,t=i*e),"GB"==b&&"KiB"==B&&(e=976600,t=i*e),"GB"==b&&"mb"==B&&(e=8e3,t=i*e),"GB"==b&&"Mibit"==B&&(e=7629,t=i*e),"GB"==b&&"MB"==B&&(e=1e3,t=i*e),"GB"==b&&"MiB"==B&&(e=953.7,t=i*e),"GB"==b&&"gb"==B&&(e=8,t=i*e),"GB"==b&&"Gibit"==B&&(e=7.451,t=i*e),"GB"==b&&"GiB"==B&&(e=1.074,t=i/e),"GB"==b&&"tb"==B&&(e=125,t=i/e),"GB"==b&&"Tebit"==B&&(e=137.4,t=i/e),"GB"==b&&"TB"==B&&(e=1e3,t=i/e),"GB"==b&&"TiB"==B&&(e=1100,t=i/e),"GB"==b&&"pb"==B&&(e=125e3,t=i/e),"GB"==b&&"Pibit"==B&&(e=140700,t=i/e),"GB"==b&&"PB"==B&&(e=1e6,t=i/e),"GB"==b&&"PiB"==B&&(e=1126e3,t=i/e),"GiB"==b&&"b"==B&&(e=859e7,t=i*e),"GiB"==b&&"B"==B&&(e=1074e6,t=i*e),"GiB"==b&&"kb"==B&&(e=859e4,t=i*e),"GiB"==b&&"Kibit"==B&&(e=8389e3,t=i*e),"GiB"==b&&"KB"==B&&(e=1074e3,t=i*e),"GiB"==b&&"KiB"==B&&(e=1049e3,t=i*e),"GiB"==b&&"mb"==B&&(e=8590,t=i*e),"GiB"==b&&"Mibit"==B&&(e=8192,t=i*e),"GiB"==b&&"MB"==B&&(e=1074,t=i*e),"GiB"==b&&"MiB"==B&&(e=1024,t=i*e),"GiB"==b&&"gb"==B&&(e=8.59,t=i*e),"GiB"==b&&"Gibit"==B&&(e=8,t=i*e),"GiB"==b&&"GB"==B&&(e=1.074,t=i*e),"GiB"==b&&"tb"==B&&(e=116.4,t=i/e),"GiB"==b&&"Tebit"==B&&(e=128,t=i/e),"GiB"==b&&"TB"==B&&(e=931.3,t=i/e),"GiB"==b&&"TiB"==B&&(e=1024,t=i/e),"GiB"==b&&"pb"==B&&(e=116400,t=i/e),"GiB"==b&&"Pibit"==B&&(e=131100,t=i/e),"GiB"==b&&"PB"==B&&(e=931300,t=i/e),"GiB"==b&&"PiB"==B&&(e=1049e3,t=i/e),"tb"==b&&"b"==B&&(e=1e12,t=i*e),"tb"==b&&"B"==B&&(e=125e9,t=i*e),"tb"==b&&"kb"==B&&(e=1e9,t=i*e),"tb"==b&&"Kibit"==B&&(e=9766e5,t=i*e),"tb"==b&&"KB"==B&&(e=125e6,t=i*e),"tb"==b&&"KiB"==B&&(e=1221e5,t=i*e),"tb"==b&&"mb"==B&&(e=1e6,t=i*e),"tb"==b&&"Mibit"==B&&(e=953700,t=i*e),"tb"==b&&"MB"==B&&(e=125e3,t=i*e),"tb"==b&&"MiB"==B&&(e=119200,t=i*e),"tb"==b&&"gb"==B&&(e=1e3,t=i*e),"tb"==b&&"Gibit"==B&&(e=931.3,t=i*e),"tb"==b&&"GB"==B&&(e=125,t=i*e),"tb"==b&&"GiB"==B&&(e=116.4,t=i*e),"tb"==b&&"Tebit"==B&&(e=1.1,t=i/e),"tb"==b&&"TB"==B&&(e=8,t=i/e),"tb"==b&&"TiB"==B&&(e=8.796,t=i/e),"tb"==b&&"pb"==B&&(e=1e3,t=i/e),"tb"==b&&"Pibit"==B&&(e=1126,t=i/e),"tb"==b&&"PB"==B&&(e=8e3,t=i/e),"tb"==b&&"PiB"==B&&(e=9007,t=i/e),"Tebit"==b&&"b"==B&&(e=11e11,t=i*e),"Tebit"==b&&"B"==B&&(e=1374e8,t=i*e),"Tebit"==b&&"kb"==B&&(e=11e8,t=i*e),"Tebit"==b&&"Kibit"==B&&(e=1074e6,t=i*e),"Tebit"==b&&"KB"==B&&(e=1374e5,t=i*e),"Tebit"==b&&"KiB"==B&&(e=1342e5,t=i*e),"Tebit"==b&&"mb"==B&&(e=11e5,t=i*e),"Tebit"==b&&"Mibit"==B&&(e=1049e3,t=i*e),"Tebit"==b&&"MB"==B&&(e=137400,t=i*e),"Tebit"==b&&"MiB"==B&&(e=131100,t=i*e),"Tebit"==b&&"gb"==B&&(e=1100,t=i*e),"Tebit"==b&&"Gibit"==B&&(e=1024,t=i*e),"Tebit"==b&&"GB"==B&&(e=131.4,t=i*e),"Tebit"==b&&"GiB"==B&&(e=128,t=i*e),"Tebit"==b&&"tb"==B&&(e=1.1,t=i*e),"Tebit"==b&&"TB"==B&&(e=7.276,t=i/e),"Tebit"==b&&"TiB"==B&&(e=8,t=i/e),"Tebit"==b&&"pb"==B&&(e=909.5,t=i/e),"Tebit"==b&&"Pibit"==B&&(e=1024,t=i/e),"Tebit"==b&&"PB"==B&&(e=7276,t=i/e),"Tebit"==b&&"PiB"==B&&(e=8192,t=i/e),"TB"==b&&"b"==B&&(e=8e12,t=i*e),"TB"==b&&"B"==B&&(e=1e12,t=i*e),"TB"==b&&"kb"==B&&(e=8e9,t=i*e),"TB"==b&&"Kibit"==B&&(e=7813e6,t=i*e),"TB"==b&&"KB"==B&&(e=1e9,t=i*e),"TB"==b&&"KiB"==B&&(e=9766e5,t=i*e),"TB"==b&&"mb"==B&&(e=8e6,t=i*e),"TB"==b&&"Mibit"==B&&(e=7629e3,t=i*e),"TB"==b&&"MB"==B&&(e=1e6,t=i*e),"TB"==b&&"MiB"==B&&(e=953700,t=i*e),"TB"==b&&"gb"==B&&(e=8e3,t=i*e),"TB"==b&&"Gibit"==B&&(e=7451,t=i*e),"TB"==b&&"GB"==B&&(e=1e3,t=i*e),"TB"==b&&"GiB"==B&&(e=931.3,t=i*e),"TB"==b&&"tb"==B&&(e=8,t=i*e),"TB"==b&&"Tebit"==B&&(e=7.276,t=i*e),"TB"==b&&"TiB"==B&&(e=1.1,t=i/e),"TB"==b&&"pb"==B&&(e=125,t=i/e),"TB"==b&&"Pibit"==B&&(e=140.7,t=i/e),"TB"==b&&"PB"==B&&(e=1e3,t=i/e),"TB"==b&&"PiB"==B&&(e=1126,t=i/e),"TiB"==b&&"b"==B&&(e=8796e9,t=i*e),"TiB"==b&&"B"==B&&(e=11e11,t=i*e),"TiB"==b&&"kb"==B&&(e=8796e6,t=i*e),"TiB"==b&&"Kibit"==B&&(e=859e7,t=i*e),"TiB"==b&&"KB"==B&&(e=11e8,t=i*e),"TiB"==b&&"KiB"==B&&(e=1074e6,t=i*e),"TiB"==b&&"mb"==B&&(e=8796e3,t=i*e),"TiB"==b&&"Mibit"==B&&(e=8389e3,t=i*e),"TiB"==b&&"MB"==B&&(e=11e5,t=i*e),"TiB"==b&&"MiB"==B&&(e=1049e3,t=i*e),"TiB"==b&&"gb"==B&&(e=8796,t=i*e),"TiB"==b&&"Gibit"==B&&(e=8192,t=i*e),"TiB"==b&&"GB"==B&&(e=1100,t=i*e),"TiB"==b&&"GiB"==B&&(e=1024,t=i*e),"TiB"==b&&"tb"==B&&(e=8.796,t=i*e),"TiB"==b&&"Tebit"==B&&(e=8,t=i*e),"TiB"==b&&"TB"==B&&(e=1.1,t=i*e),"TiB"==b&&"pb"==B&&(e=113.7,t=i/e),"TiB"==b&&"Pibit"==B&&(e=128,t=i/e),"TiB"==b&&"PB"==B&&(e=909.5,t=i/e),"TiB"==b&&"PiB"==B&&(e=1024,t=i/e),"pb"==b&&"b"==B&&(e=1e15,t=i*e),"pb"==b&&"B"==B&&(e=125e12,t=i*e),"pb"==b&&"kb"==B&&(e=1e12,t=i*e),"pb"==b&&"Kibit"==B&&(e=9766e8,t=i*e),"pb"==b&&"KB"==B&&(e=125e9,t=i*e),"pb"==b&&"KiB"==B&&(e=1221e8,t=i*e),"pb"==b&&"mb"==B&&(e=1e9,t=i*e),"pb"==b&&"Mibit"==B&&(e=9537e5,t=i*e),"pb"==b&&"MB"==B&&(e=125e6,t=i*e),"pb"==b&&"MiB"==B&&(e=1192e5,t=i*e),"pb"==b&&"gb"==B&&(e=1e6,t=i*e),"pb"==b&&"Gibit"==B&&(e=931300,t=i*e),"pb"==b&&"GB"==B&&(e=125e3,t=i*e),"pb"==b&&"GiB"==B&&(e=116400,t=i*e),"pb"==b&&"tb"==B&&(e=1e3,t=i*e),"pb"==b&&"Tebit"==B&&(e=909.5,t=i*e),"pb"==b&&"TB"==B&&(e=125,t=i*e),"pb"==b&&"TiB"==B&&(e=113.7,t=i*e),"pb"==b&&"Pibit"==B&&(e=1.126,t=i/e),"pb"==b&&"PB"==B&&(e=8,t=i/e),"pb"==b&&"PiB"==B&&(e=9.007,t=i/e),"Pibit"==b&&"b"==B&&(e=1126e12,t=i*e),"Pibit"==b&&"B"==B&&(e=1407e11,t=i*e),"Pibit"==b&&"kb"==B&&(e=1126e9,t=i*e),"Pibit"==b&&"Kibit"==B&&(e=11e11,t=i*e),"Pibit"==b&&"KB"==B&&(e=1407e8,t=i*e),"Pibit"==b&&"KiB"==B&&(e=1374e8,t=i*e),"Pibit"==b&&"mb"==B&&(e=1126e6,t=i*e),"Pibit"==b&&"Mibit"==B&&(e=1074e6,t=i*e),"Pibit"==b&&"MB"==B&&(e=1407e5,t=i*e),"Pibit"==b&&"MiB"==B&&(e=1342e5,t=i*e),"Pibit"==b&&"gb"==B&&(e=1126e3,t=i*e),"Pibit"==b&&"Gibit"==B&&(e=1049e3,t=i*e),"Pibit"==b&&"GB"==B&&(e=140700,t=i*e),"Pibit"==b&&"GiB"==B&&(e=131100,t=i*e),"Pibit"==b&&"tb"==B&&(e=1126,t=i*e),"Pibit"==b&&"Tebit"==B&&(e=1024,t=i*e),"Pibit"==b&&"TB"==B&&(e=140.7,t=i*e),"Pibit"==b&&"TiB"==B&&(e=128,t=i*e),"Pibit"==b&&"pb"==B&&(e=1.126,t=i*e),"Pibit"==b&&"PB"==B&&(e=7.105,t=i/e),"Pibit"==b&&"PiB"==B&&(e=8,t=i/e),"PB"==b&&"b"==B&&(e=8e15,t=i*e),"PB"==b&&"B"==B&&(e=1e15,t=i*e),"PB"==b&&"kb"==B&&(e=8e12,t=i*e),"PB"==b&&"Kibit"==B&&(e=7813e9,t=i*e),"PB"==b&&"KB"==B&&(e=1e12,t=i*e),"PB"==b&&"KiB"==B&&(e=9766e8,t=i*e),"PB"==b&&"mb"==B&&(e=8e9,t=i*e),"PB"==b&&"Mibit"==B&&(e=7629e6,t=i*e),"PB"==b&&"MB"==B&&(e=1e9,t=i*e),"PB"==b&&"MiB"==B&&(e=9537e5,t=i*e),"PB"==b&&"gb"==B&&(e=8e6,t=i*e),"PB"==b&&"Gibit"==B&&(e=7451e3,t=i*e),"PB"==b&&"GB"==B&&(e=1e6,t=i*e),"PB"==b&&"GiB"==B&&(e=931300,t=i*e),"PB"==b&&"tb"==B&&(e=8e3,t=i*e),"PB"==b&&"Tebit"==B&&(e=7276,t=i*e),"PB"==b&&"TB"==B&&(e=1e3,t=i*e),"PB"==b&&"TiB"==B&&(e=909.5,t=i*e),"PB"==b&&"pb"==B&&(e=8,t=i*e),"PB"==b&&"Pibit"==B&&(e=7.105,t=i*e),"PB"==b&&"PiB"==B&&(e=1.126,t=i/e),"PiB"==b&&"b"==B&&(e=9007e12,t=i*e),"PiB"==b&&"B"==B&&(e=1126e12,t=i*e),"PiB"==b&&"kb"==B&&(e=9007e9,t=i*e),"PiB"==b&&"Kibit"==B&&(e=8796e9,t=i*e),"PiB"==b&&"KB"==B&&(e=1126e9,t=i*e),"PiB"==b&&"KiB"==B&&(e=1126e9,t=i*e),"PiB"==b&&"mb"==B&&(e=9007e6,t=i*e),"PiB"==b&&"Mibit"==B&&(e=859e7,t=i*e),"PiB"==b&&"MB"==B&&(e=1126e6,t=i*e),"PiB"==b&&"MiB"==B&&(e=1074e6,t=i*e),"PiB"==b&&"gb"==B&&(e=9007e3,t=i*e),"PiB"==b&&"Gibit"==B&&(e=8389e3,t=i*e),"PiB"==b&&"GB"==B&&(e=1126e3,t=i*e),"PiB"==b&&"GiB"==B&&(e=1049e3,t=i*e),"PiB"==b&&"tb"==B&&(e=9007,t=i*e),"PiB"==b&&"Tebit"==B&&(e=8192,t=i*e),"PiB"==b&&"TB"==B&&(e=1126,t=i*e),"PiB"==b&&"TiB"==B&&(e=1024,t=i*e),"PiB"==b&&"pb"==B&&(e=9.007,t=i*e),"PiB"==b&&"Pibit"==B&&(e=8,t=i*e),"PiB"==b&&"PB"==B&&(e=1.126,t=i*e),t.toString().length>=10&&b!==B?output.value=t.toExponential(5):output.value=t}function dataStorageConverterReverse(){input.setAttribute("placeholder",selectInp.value),output.setAttribute("placeholder",selectOut.value);input.value;const i=output.value,b=selectInp.value,B=selectOut.value;let e,t;null==t&&(t=0),b===B&&(t=i),"b"==b&&"B"==B&&(e=8,t=i*e),"b"==b&&"kb"==B&&(e=1e3,t=i*e),"b"==b&&"Kibit"==B&&(e=1024,t=i*e),"b"==b&&"KB"==B&&(e=8e3,t=i*e),"b"==b&&"KiB"==B&&(e=8192,t=i*e),"b"==b&&"mb"==B&&(e=1e6,t=i*e),"b"==b&&"Mibit"==B&&(e=1049e3,t=i*e),"b"==b&&"MB"==B&&(e=8e6,t=i*e),"b"==b&&"MiB"==B&&(e=8389e3,t=i*e),"b"==b&&"gb"==B&&(e=1e9,t=i*e),"b"==b&&"Gibit"==B&&(e=1074e6,t=i*e),"b"==b&&"GB"==B&&(e=8e9,t=i*e),"b"==b&&"GiB"==B&&(e=859e7,t=i*e),"b"==b&&"tb"==B&&(e=1e12,t=i*e),"b"==b&&"Tebit"==B&&(e=11e11,t=i*e),"b"==b&&"TB"==B&&(e=8e12,t=i*e),"b"==b&&"TiB"==B&&(e=8796e9,t=i*e),"b"==b&&"pb"==B&&(e=1e15,t=i*e),"b"==b&&"Pibit"==B&&(e=1126e12,t=i*e),"b"==b&&"PB"==B&&(e=8e15,t=i*e),"b"==b&&"PiB"==B&&(e=9007e12,t=i*e),"B"==b&&"b"==B&&(e=8,t=i/e),"B"==b&&"kb"==B&&(e=125,t=i*e),"B"==b&&"Kibit"==B&&(e=128,t=i*e),"B"==b&&"KB"==B&&(e=1e3,t=i*e),"B"==b&&"KiB"==B&&(e=1024,t=i*e),"B"==b&&"mb"==B&&(e=125e3,t=i*e),"B"==b&&"Mibit"==B&&(e=131100,t=i*e),"B"==b&&"MB"==B&&(e=1e6,t=i*e),"B"==b&&"MiB"==B&&(e=1049e3,t=i*e),"B"==b&&"gb"==B&&(e=125e6,t=i*e),"B"==b&&"Gibit"==B&&(e=1342e5,t=i*e),"B"==b&&"GB"==B&&(e=1e9,t=i*e),"B"==b&&"GiB"==B&&(e=1074e6,t=i*e),"B"==b&&"tb"==B&&(e=125e9,t=i*e),"B"==b&&"Tebit"==B&&(e=1374e8,t=i*e),"B"==b&&"TB"==B&&(e=1e12,t=i*e),"B"==b&&"TiB"==B&&(e=11e11,t=i*e),"B"==b&&"pb"==B&&(e=125e12,t=i*e),"B"==b&&"Pibit"==B&&(e=1407e11,t=i*e),"B"==b&&"PB"==B&&(e=1e15,t=i*e),"B"==b&&"PiB"==B&&(e=126e13,t=i*e),"kb"==b&&"b"==B&&(e=1e3,t=i/e),"kb"==b&&"B"==B&&(e=125,t=i/e),"kb"==b&&"Kibit"==B&&(e=1.024,t=i*e),"kb"==b&&"KB"==B&&(e=8,t=i*e),"kb"==b&&"KiB"==B&&(e=8.192,t=i*e),"kb"==b&&"mb"==B&&(e=1e3,t=i*e),"kb"==b&&"Mibit"==B&&(e=1049,t=i*e),"kb"==b&&"MB"==B&&(e=8e3,t=i*e),"kb"==b&&"MiB"==B&&(e=8389,t=i*e),"kb"==b&&"gb"==B&&(e=1e6,t=i*e),"kb"==b&&"Gibit"==B&&(e=1074e3,t=i*e),"kb"==b&&"GB"==B&&(e=8e6,t=i*e),"kb"==b&&"GiB"==B&&(e=859e4,t=i*e),"kb"==b&&"tb"==B&&(e=1e9,t=i*e),"kb"==b&&"Tebit"==B&&(e=11e8,t=i*e),"kb"==b&&"TB"==B&&(e=8e9,t=i*e),"kb"==b&&"TiB"==B&&(e=8796e6,t=i*e),"kb"==b&&"pb"==B&&(e=1e12,t=i*e),"kb"==b&&"Pibit"==B&&(e=1126e9,t=i*e),"kb"==b&&"PB"==B&&(e=8e12,t=i*e),"kb"==b&&"PiB"==B&&(e=9007e9,t=i*e),"Kibit"==b&&"b"==B&&(e=1024,t=i/e),"Kibit"==b&&"B"==B&&(e=128,t=i/e),"Kibit"==b&&"kb"==B&&(e=1.024,t=i/e),"Kibit"==b&&"KB"==B&&(e=7.812,t=i*e),"Kibit"==b&&"KiB"==B&&(e=8,t=i*e),"Kibit"==b&&"mb"==B&&(e=976.6,t=i*e),"Kibit"==b&&"Mibit"==B&&(e=1024,t=i*e),"Kibit"==b&&"MB"==B&&(e=7813,t=i*e),"Kibit"==b&&"MiB"==B&&(e=8192,t=i*e),"Kibit"==b&&"gb"==B&&(e=976600,t=i*e),"Kibit"==b&&"Gibit"==B&&(e=1049e3,t=i*e),"Kibit"==b&&"GB"==B&&(e=7813e3,t=i*e),"Kibit"==b&&"GiB"==B&&(e=8389e3,t=i*e),"Kibit"==b&&"tb"==B&&(e=9766e5,t=i*e),"Kibit"==b&&"Tebit"==B&&(e=1074e6,t=i*e),"Kibit"==b&&"TB"==B&&(e=7813e6,t=i*e),"Kibit"==b&&"TiB"==B&&(e=859e7,t=i*e),"Kibit"==b&&"pb"==B&&(e=9766e8,t=i*e),"Kibit"==b&&"Pibit"==B&&(e=11e11,t=i*e),"Kibit"==b&&"PB"==B&&(e=7812e9,t=i*e),"Kibit"==b&&"PiB"==B&&(e=8796e9,t=i*e),"KB"==b&&"b"==B&&(e=8e3,t=i/e),"KB"==b&&"B"==B&&(e=1e3,t=i/e),"KB"==b&&"kb"==B&&(e=8,t=i/e),"KB"==b&&"Kibit"==B&&(e=7.812,t=i/e),"KB"==b&&"KiB"==B&&(e=1.024,t=i*e),"KB"==b&&"mb"==B&&(e=125,t=i*e),"KB"==b&&"Mibit"==B&&(e=131.1,t=i*e),"KB"==b&&"MB"==B&&(e=1e3,t=i*e),"KB"==b&&"MiB"==B&&(e=1049,t=i*e),"KB"==b&&"gb"==B&&(e=125e3,t=i*e),"KB"==b&&"Gibit"==B&&(e=134200,t=i*e),"KB"==b&&"GB"==B&&(e=1e6,t=i*e),"KB"==b&&"GiB"==B&&(e=1074e3,t=i*e),"KB"==b&&"tb"==B&&(e=125e6,t=i*e),"KB"==b&&"Tebit"==B&&(e=1374e5,t=i*e),"KB"==b&&"TB"==B&&(e=1e9,t=i*e),"KB"==b&&"TiB"==B&&(e=11e8,t=i*e),"KB"==b&&"pb"==B&&(e=125e9,t=i*e),"KB"==b&&"Pibit"==B&&(e=1407e8,t=i*e),"KB"==b&&"PB"==B&&(e=1e12,t=i*e),"KB"==b&&"PiB"==B&&(e=1126e9,t=i*e),"KiB"==b&&"b"==B&&(e=8192,t=i/e),"KiB"==b&&"B"==B&&(e=1024,t=i/e),"KiB"==b&&"kb"==B&&(e=8.192,t=i/e),"KiB"==b&&"Kibit"==B&&(e=8,t=i/e),"KiB"==b&&"KB"==B&&(e=1.024,t=i/e),"KiB"==b&&"mb"==B&&(e=122.1,t=i*e),"KiB"==b&&"Mibit"==B&&(e=128,t=i*e),"KiB"==b&&"MB"==B&&(e=976.6,t=i*e),"KiB"==b&&"MiB"==B&&(e=1024,t=i*e),"KiB"==b&&"gb"==B&&(e=122100,t=i*e),"KiB"==b&&"Gibit"==B&&(e=131100,t=i*e),"KiB"==b&&"GB"==B&&(e=976600,t=i*e),"KiB"==b&&"GiB"==B&&(e=1049e3,t=i*e),"KiB"==b&&"tb"==B&&(e=1221e5,t=i*e),"KiB"==b&&"Tebit"==B&&(e=1342e5,t=i*e),"KiB"==b&&"TB"==B&&(e=9766e5,t=i*e),"KiB"==b&&"TiB"==B&&(e=1074e6,t=i*e),"KiB"==b&&"pb"==B&&(e=1221e8,t=i*e),"KiB"==b&&"Pibit"==B&&(e=1374e8,t=i*e),"KiB"==b&&"PB"==B&&(e=9766e8,t=i*e),"KiB"==b&&"PiB"==B&&(e=11e11,t=i*e),"mb"==b&&"b"==B&&(e=1e6,t=i/e),"mb"==b&&"B"==B&&(e=125e3,t=i/e),"mb"==b&&"kb"==B&&(e=1e3,t=i/e),"mb"==b&&"Kibit"==B&&(e=976.6,t=i/e),"mb"==b&&"KB"==B&&(e=125,t=i/e),"mb"==b&&"KiB"==B&&(e=122.1,t=i/e),"mb"==b&&"Mibit"==B&&(e=1.049,t=i*e),"mb"==b&&"MB"==B&&(e=8,t=i*e),"mb"==b&&"MiB"==B&&(e=8.389,t=i*e),"mb"==b&&"gb"==B&&(e=1e3,t=i*e),"mb"==b&&"Gibit"==B&&(e=1074,t=i*e),"mb"==b&&"GB"==B&&(e=8e3,t=i*e),"mb"==b&&"GiB"==B&&(e=8590,t=i*e),"mb"==b&&"tb"==B&&(e=1e6,t=i*e),"mb"==b&&"Tebit"==B&&(e=11e5,t=i*e),"mb"==b&&"TB"==B&&(e=8e6,t=i*e),"mb"==b&&"TiB"==B&&(e=8796e3,t=i*e),"mb"==b&&"pb"==B&&(e=1e9,t=i*e),"mb"==b&&"Pibit"==B&&(e=1126e6,t=i*e),"mb"==b&&"PB"==B&&(e=8e9,t=i*e),"mb"==b&&"PiB"==B&&(e=9007e6,t=i*e),"Mibit"==b&&"b"==B&&(e=1049e3,t=i/e),"Mibit"==b&&"B"==B&&(e=131100,t=i/e),"Mibit"==b&&"kb"==B&&(e=1049,t=i/e),"Mibit"==b&&"Kibit"==B&&(e=1024,t=i/e),"Mibit"==b&&"KB"==B&&(e=131.1,t=i/e),"Mibit"==b&&"KiB"==B&&(e=128,t=i/e),"Mibit"==b&&"mb"==B&&(e=1.049,t=i/e),"Mibit"==b&&"MB"==B&&(e=7.629,t=i*e),"Mibit"==b&&"MiB"==B&&(e=8,t=i*e),"Mibit"==b&&"gb"==B&&(e=953.7,t=i*e),"Mibit"==b&&"Gibit"==B&&(e=1024,t=i*e),"Mibit"==b&&"GB"==B&&(e=7629,t=i*e),"Mibit"==b&&"GiB"==B&&(e=8192,t=i*e),"Mibit"==b&&"tb"==B&&(e=953700,t=i*e),"Mibit"==b&&"Tebit"==B&&(e=1049e3,t=i*e),"Mibit"==b&&"TB"==B&&(e=7629e3,t=i*e),"Mibit"==b&&"TiB"==B&&(e=8389e3,t=i*e),"Mibit"==b&&"pb"==B&&(e=9537e5,t=i*e),"Mibit"==b&&"Pibit"==B&&(e=1074e6,t=i*e),"Mibit"==b&&"PB"==B&&(e=7629e6,t=i*e),"Mibit"==b&&"PiB"==B&&(e=859e7,t=i*e),"MB"==b&&"b"==B&&(e=8e6,t=i/e),"MB"==b&&"B"==B&&(e=1e6,t=i/e),"MB"==b&&"kb"==B&&(e=8e3,t=i/e),"MB"==b&&"Kibit"==B&&(e=7813,t=i/e),"MB"==b&&"KB"==B&&(e=1e3,t=i/e),"MB"==b&&"KiB"==B&&(e=976.6,t=i/e),"MB"==b&&"mb"==B&&(e=8,t=i/e),"MB"==b&&"Mibit"==B&&(e=7.629,t=i/e),"MB"==b&&"MiB"==B&&(e=1.049,t=i*e),"MB"==b&&"gb"==B&&(e=125,t=i*e),"MB"==b&&"Gibit"==B&&(e=134.2,t=i*e),"MB"==b&&"GB"==B&&(e=1e3,t=i*e),"MB"==b&&"GiB"==B&&(e=1074,t=i*e),"MB"==b&&"tb"==B&&(e=125e3,t=i*e),"MB"==b&&"Tebit"==B&&(e=137400,t=i*e),"MB"==b&&"TB"==B&&(e=1e6,t=i*e),"MB"==b&&"TiB"==B&&(e=11e5,t=i*e),"MB"==b&&"pb"==B&&(e=125e6,t=i*e),"MB"==b&&"Pibit"==B&&(e=1407e5,t=i*e),"MB"==b&&"PB"==B&&(e=1e9,t=i*e),"MB"==b&&"PiB"==B&&(e=1126e6,t=i*e),"MiB"==b&&"b"==B&&(e=8389e3,t=i/e),"MiB"==b&&"B"==B&&(e=1049e3,t=i/e),"MiB"==b&&"kb"==B&&(e=8389,t=i/e),"MiB"==b&&"Kibit"==B&&(e=8192,t=i/e),"MiB"==b&&"KB"==B&&(e=1049,t=i/e),"MiB"==b&&"KiB"==B&&(e=1024,t=i/e),"MiB"==b&&"mb"==B&&(e=8.389,t=i/e),"MiB"==b&&"Mibit"==B&&(e=8,t=i/e),"MiB"==b&&"MB"==B&&(e=1.049,t=i/e),"MiB"==b&&"gb"==B&&(e=119.2,t=i*e),"MiB"==b&&"Gibit"==B&&(e=128,t=i*e),"MiB"==b&&"GB"==B&&(e=953.7,t=i*e),"MiB"==b&&"GiB"==B&&(e=1024,t=i*e),"MiB"==b&&"tb"==B&&(e=119200,t=i*e),"MiB"==b&&"Tebit"==B&&(e=131100,t=i*e),"MiB"==b&&"TB"==B&&(e=953700,t=i*e),"MiB"==b&&"TiB"==B&&(e=1049e3,t=i*e),"MiB"==b&&"pb"==B&&(e=1192e5,t=i*e),"MiB"==b&&"Pibit"==B&&(e=1342e5,t=i*e),"MiB"==b&&"PB"==B&&(e=9537e5,t=i*e),"MiB"==b&&"PiB"==B&&(e=1074e6,t=i*e),"gb"==b&&"b"==B&&(e=1e9,t=i/e),"gb"==b&&"B"==B&&(e=125e6,t=i/e),"gb"==b&&"kb"==B&&(e=1e6,t=i/e),"gb"==b&&"Kibit"==B&&(e=976600,t=i/e),"gb"==b&&"KB"==B&&(e=125e3,t=i/e),"gb"==b&&"KiB"==B&&(e=122100,t=i/e),"gb"==b&&"mb"==B&&(e=1e3,t=i/e),"gb"==b&&"Mibit"==B&&(e=953.7,t=i/e),"gb"==b&&"MB"==B&&(e=125,t=i/e),"gb"==b&&"MiB"==B&&(e=119.2,t=i/e),"gb"==b&&"Gibit"==B&&(e=1.074,t=i*e),"gb"==b&&"GB"==B&&(e=8,t=i*e),"gb"==b&&"GiB"==B&&(e=8.59,t=i*e),"gb"==b&&"tb"==B&&(e=1e3,t=i*e),"gb"==b&&"Tebit"==B&&(e=1100,t=i*e),"gb"==b&&"TB"==B&&(e=8e3,t=i*e),"gb"==b&&"TiB"==B&&(e=8796,t=i*e),"gb"==b&&"pb"==B&&(e=1e6,t=i*e),"gb"==b&&"Pibit"==B&&(e=1126e3,t=i*e),"gb"==b&&"PB"==B&&(e=8e6,t=i*e),"gb"==b&&"PiB"==B&&(e=9007e3,t=i*e),"Gibit"==b&&"b"==B&&(e=1074e6,t=i/e),"Gibit"==b&&"B"==B&&(e=1342e5,t=i/e),"Gibit"==b&&"kb"==B&&(e=1074e3,t=i/e),"Gibit"==b&&"Kibit"==B&&(e=1049e3,t=i/e),"Gibit"==b&&"KB"==B&&(e=134200,t=i/e),"Gibit"==b&&"KiB"==B&&(e=131100,t=i/e),"Gibit"==b&&"mb"==B&&(e=1074,t=i/e),"Gibit"==b&&"Mibit"==B&&(e=1024,t=i/e),"Gibit"==b&&"MB"==B&&(e=134.2,t=i/e),"Gibit"==b&&"MiB"==B&&(e=128,t=i/e),"Gibit"==b&&"gb"==B&&(e=1.074,t=i/e),"Gibit"==b&&"GB"==B&&(e=7.451,t=i*e),"Gibit"==b&&"GiB"==B&&(e=8,t=i*e),"Gibit"==b&&"tb"==B&&(e=931.3,t=i*e),"Gibit"==b&&"Tebit"==B&&(e=1024,t=i*e),"Gibit"==b&&"TB"==B&&(e=7451,t=i*e),"Gibit"==b&&"TiB"==B&&(e=8192,t=i*e),"Gibit"==b&&"pb"==B&&(e=931300,t=i*e),"Gibit"==b&&"Pibit"==B&&(e=1049e3,t=i*e),"Gibit"==b&&"PB"==B&&(e=7451e3,t=i*e),"Gibit"==b&&"PiB"==B&&(e=8389e3,t=i*e),"GB"==b&&"b"==B&&(e=8e9,t=i/e),"GB"==b&&"B"==B&&(e=1e9,t=i/e),"GB"==b&&"kb"==B&&(e=8e6,t=i/e),"GB"==b&&"Kibit"==B&&(e=7813e3,t=i/e),"GB"==b&&"KB"==B&&(e=1e6,t=i/e),"GB"==b&&"KiB"==B&&(e=976600,t=i/e),"GB"==b&&"mb"==B&&(e=8e3,t=i/e),"GB"==b&&"Mibit"==B&&(e=7629,t=i/e),"GB"==b&&"MB"==B&&(e=1e3,t=i/e),"GB"==b&&"MiB"==B&&(e=953.7,t=i/e),"GB"==b&&"gb"==B&&(e=8,t=i/e),"GB"==b&&"Gibit"==B&&(e=7.451,t=i/e),"GB"==b&&"GiB"==B&&(e=1.074,t=i*e),"GB"==b&&"tb"==B&&(e=125,t=i*e),"GB"==b&&"Tebit"==B&&(e=137.4,t=i*e),"GB"==b&&"TB"==B&&(e=1e3,t=i*e),"GB"==b&&"TiB"==B&&(e=1100,t=i*e),"GB"==b&&"pb"==B&&(e=125e3,t=i*e),"GB"==b&&"Pibit"==B&&(e=140700,t=i*e),"GB"==b&&"PB"==B&&(e=1e6,t=i*e),"GB"==b&&"PiB"==B&&(e=1126e3,t=i*e),"GiB"==b&&"b"==B&&(e=859e7,t=i/e),"GiB"==b&&"B"==B&&(e=1074e6,t=i/e),"GiB"==b&&"kb"==B&&(e=859e4,t=i/e),"GiB"==b&&"Kibit"==B&&(e=8389e3,t=i/e),"GiB"==b&&"KB"==B&&(e=1074e3,t=i/e),"GiB"==b&&"KiB"==B&&(e=1049e3,t=i/e),"GiB"==b&&"mb"==B&&(e=8590,t=i/e),"GiB"==b&&"Mibit"==B&&(e=8192,t=i/e),"GiB"==b&&"MB"==B&&(e=1074,t=i/e),"GiB"==b&&"MiB"==B&&(e=1024,t=i/e),"GiB"==b&&"gb"==B&&(e=8.59,t=i/e),"GiB"==b&&"Gibit"==B&&(e=8,t=i/e),"GiB"==b&&"GB"==B&&(e=1.074,t=i/e),"GiB"==b&&"tb"==B&&(e=116.4,t=i*e),"GiB"==b&&"Tebit"==B&&(e=128,t=i*e),"GiB"==b&&"TB"==B&&(e=931.3,t=i*e),"GiB"==b&&"TiB"==B&&(e=1024,t=i*e),"GiB"==b&&"pb"==B&&(e=116400,t=i*e),"GiB"==b&&"Pibit"==B&&(e=131100,t=i*e),"GiB"==b&&"PB"==B&&(e=931300,t=i*e),"GiB"==b&&"PiB"==B&&(e=1049e3,t=i*e),"tb"==b&&"b"==B&&(e=1e12,t=i/e),"tb"==b&&"B"==B&&(e=125e9,t=i/e),"tb"==b&&"kb"==B&&(e=1e9,t=i/e),"tb"==b&&"Kibit"==B&&(e=9766e5,t=i/e),"tb"==b&&"KB"==B&&(e=125e6,t=i/e),"tb"==b&&"KiB"==B&&(e=1221e5,t=i/e),"tb"==b&&"mb"==B&&(e=1e6,t=i/e),"tb"==b&&"Mibit"==B&&(e=953700,t=i/e),"tb"==b&&"MB"==B&&(e=125e3,t=i/e),"tb"==b&&"MiB"==B&&(e=119200,t=i/e),"tb"==b&&"gb"==B&&(e=1e3,t=i/e),"tb"==b&&"Gibit"==B&&(e=931.3,t=i/e),"tb"==b&&"GB"==B&&(e=125,t=i/e),"tb"==b&&"GiB"==B&&(e=116.4,t=i/e),"tb"==b&&"Tebit"==B&&(e=1.1,t=i*e),"tb"==b&&"TB"==B&&(e=8,t=i*e),"tb"==b&&"TiB"==B&&(e=8.796,t=i*e),"tb"==b&&"pb"==B&&(e=1e3,t=i*e),"tb"==b&&"Pibit"==B&&(e=1126,t=i*e),"tb"==b&&"PB"==B&&(e=8e3,t=i*e),"tb"==b&&"PiB"==B&&(e=9007,t=i*e),"Tebit"==b&&"b"==B&&(e=11e11,t=i/e),"Tebit"==b&&"B"==B&&(e=1374e8,t=i/e),"Tebit"==b&&"kb"==B&&(e=11e8,t=i/e),"Tebit"==b&&"Kibit"==B&&(e=1074e6,t=i/e),"Tebit"==b&&"KB"==B&&(e=1374e5,t=i/e),"Tebit"==b&&"KiB"==B&&(e=1342e5,t=i/e),"Tebit"==b&&"mb"==B&&(e=11e5,t=i/e),"Tebit"==b&&"Mibit"==B&&(e=1049e3,t=i/e),"Tebit"==b&&"MB"==B&&(e=137400,t=i/e),"Tebit"==b&&"MiB"==B&&(e=131100,t=i/e),"Tebit"==b&&"gb"==B&&(e=1100,t=i/e),"Tebit"==b&&"Gibit"==B&&(e=1024,t=i/e),"Tebit"==b&&"GB"==B&&(e=131.4,t=i/e),"Tebit"==b&&"GiB"==B&&(e=128,t=i/e),"Tebit"==b&&"tb"==B&&(e=1.1,t=i/e),"Tebit"==b&&"TB"==B&&(e=7.276,t=i*e),"Tebit"==b&&"TiB"==B&&(e=8,t=i*e),"Tebit"==b&&"pb"==B&&(e=909.5,t=i*e),"Tebit"==b&&"Pibit"==B&&(e=1024,t=i*e),"Tebit"==b&&"PB"==B&&(e=7276,t=i*e),"Tebit"==b&&"PiB"==B&&(e=8192,t=i*e),"TB"==b&&"b"==B&&(e=8e12,t=i/e),"TB"==b&&"B"==B&&(e=1e12,t=i/e),"TB"==b&&"kb"==B&&(e=8e9,t=i/e),"TB"==b&&"Kibit"==B&&(e=7813e6,t=i/e),"TB"==b&&"KB"==B&&(e=1e9,t=i/e),"TB"==b&&"KiB"==B&&(e=9766e5,t=i/e),"TB"==b&&"mb"==B&&(e=8e6,t=i/e),"TB"==b&&"Mibit"==B&&(e=7629e3,t=i/e),"TB"==b&&"MB"==B&&(e=1e6,t=i/e),"TB"==b&&"MiB"==B&&(e=953700,t=i/e),"TB"==b&&"gb"==B&&(e=8e3,t=i/e),"TB"==b&&"Gibit"==B&&(e=7451,t=i/e),"TB"==b&&"GB"==B&&(e=1e3,t=i/e),"TB"==b&&"GiB"==B&&(e=931.3,t=i/e),"TB"==b&&"tb"==B&&(e=8,t=i/e),"TB"==b&&"Tebit"==B&&(e=7.276,t=i/e),"TB"==b&&"TiB"==B&&(e=1.1,t=i*e),"TB"==b&&"pb"==B&&(e=125,t=i*e),"TB"==b&&"Pibit"==B&&(e=140.7,t=i*e),"TB"==b&&"PB"==B&&(e=1e3,t=i*e),"TB"==b&&"PiB"==B&&(e=1126,t=i*e),"TiB"==b&&"b"==B&&(e=8796e9,t=i/e),"TiB"==b&&"B"==B&&(e=11e11,t=i/e),"TiB"==b&&"kb"==B&&(e=8796e6,t=i/e),"TiB"==b&&"Kibit"==B&&(e=859e7,t=i/e),"TiB"==b&&"KB"==B&&(e=11e8,t=i/e),"TiB"==b&&"KiB"==B&&(e=1074e6,t=i/e),"TiB"==b&&"mb"==B&&(e=8796e3,t=i/e),"TiB"==b&&"Mibit"==B&&(e=8389e3,t=i/e),"TiB"==b&&"MB"==B&&(e=11e5,t=i/e),"TiB"==b&&"MiB"==B&&(e=1049e3,t=i/e),"TiB"==b&&"gb"==B&&(e=8796,t=i/e),"TiB"==b&&"Gibit"==B&&(e=8192,t=i/e),"TiB"==b&&"GB"==B&&(e=1100,t=i/e),"TiB"==b&&"GiB"==B&&(e=1024,t=i/e),"TiB"==b&&"tb"==B&&(e=8.796,t=i/e),"TiB"==b&&"Tebit"==B&&(e=8,t=i/e),"TiB"==b&&"TB"==B&&(e=1.1,t=i/e),"TiB"==b&&"pb"==B&&(e=113.7,t=i*e),"TiB"==b&&"Pibit"==B&&(e=128,t=i*e),"TiB"==b&&"PB"==B&&(e=909.5,t=i*e),"TiB"==b&&"PiB"==B&&(e=1024,t=i*e),"pb"==b&&"b"==B&&(e=1e15,t=i/e),"pb"==b&&"B"==B&&(e=125e12,t=i/e),"pb"==b&&"kb"==B&&(e=1e12,t=i/e),"pb"==b&&"Kibit"==B&&(e=9766e8,t=i/e),"pb"==b&&"KB"==B&&(e=125e9,t=i/e),"pb"==b&&"KiB"==B&&(e=1221e8,t=i/e),"pb"==b&&"mb"==B&&(e=1e9,t=i/e),"pb"==b&&"Mibit"==B&&(e=9537e5,t=i/e),"pb"==b&&"MB"==B&&(e=125e6,t=i/e),"pb"==b&&"MiB"==B&&(e=1192e5,t=i/e),"pb"==b&&"gb"==B&&(e=1e6,t=i/e),"pb"==b&&"Gibit"==B&&(e=931300,t=i/e),"pb"==b&&"GB"==B&&(e=125e3,t=i/e),"pb"==b&&"GiB"==B&&(e=116400,t=i/e),"pb"==b&&"tb"==B&&(e=1e3,t=i/e),"pb"==b&&"Tebit"==B&&(e=909.5,t=i/e),"pb"==b&&"TB"==B&&(e=125,t=i/e),"pb"==b&&"TiB"==B&&(e=113.7,t=i/e),"pb"==b&&"Pibit"==B&&(e=1.126,t=i*e),"pb"==b&&"PB"==B&&(e=8,t=i*e),"pb"==b&&"PiB"==B&&(e=9.007,t=i*e),"Pibit"==b&&"b"==B&&(e=1126e12,t=i/e),"Pibit"==b&&"B"==B&&(e=1407e11,t=i/e),"Pibit"==b&&"kb"==B&&(e=1126e9,t=i/e),"Pibit"==b&&"Kibit"==B&&(e=11e11,t=i/e),"Pibit"==b&&"KB"==B&&(e=1407e8,t=i/e),"Pibit"==b&&"KiB"==B&&(e=1374e8,t=i/e),"Pibit"==b&&"mb"==B&&(e=1126e6,t=i/e),"Pibit"==b&&"Mibit"==B&&(e=1074e6,t=i/e),"Pibit"==b&&"MB"==B&&(e=1407e5,t=i/e),"Pibit"==b&&"MiB"==B&&(e=1342e5,t=i/e),"Pibit"==b&&"gb"==B&&(e=1126e3,t=i/e),"Pibit"==b&&"Gibit"==B&&(e=1049e3,t=i/e),"Pibit"==b&&"GB"==B&&(e=140700,t=i/e),"Pibit"==b&&"GiB"==B&&(e=131100,t=i/e),"Pibit"==b&&"tb"==B&&(e=1126,t=i/e),"Pibit"==b&&"Tebit"==B&&(e=1024,t=i/e),"Pibit"==b&&"TB"==B&&(e=140.7,t=i/e),"Pibit"==b&&"TiB"==B&&(e=128,t=i/e),"Pibit"==b&&"pb"==B&&(e=1.126,t=i/e),"Pibit"==b&&"PB"==B&&(e=7.105,t=i*e),"Pibit"==b&&"PiB"==B&&(e=8,t=i*e),"PB"==b&&"b"==B&&(e=8e15,t=i/e),"PB"==b&&"B"==B&&(e=1e15,t=i/e),"PB"==b&&"kb"==B&&(e=8e12,t=i/e),"PB"==b&&"Kibit"==B&&(e=7813e9,t=i/e),"PB"==b&&"KB"==B&&(e=1e12,t=i/e),"PB"==b&&"KiB"==B&&(e=9766e8,t=i/e),"PB"==b&&"mb"==B&&(e=8e9,t=i/e),"PB"==b&&"Mibit"==B&&(e=7629e6,t=i/e),"PB"==b&&"MB"==B&&(e=1e9,t=i/e),"PB"==b&&"MiB"==B&&(e=9537e5,t=i/e),"PB"==b&&"gb"==B&&(e=8e6,t=i/e),"PB"==b&&"Gibit"==B&&(e=7451e3,t=i/e),"PB"==b&&"GB"==B&&(e=1e6,t=i/e),"PB"==b&&"GiB"==B&&(e=931300,t=i/e),"PB"==b&&"tb"==B&&(e=8e3,t=i/e),"PB"==b&&"Tebit"==B&&(e=7276,t=i/e),"PB"==b&&"TB"==B&&(e=1e3,t=i/e),"PB"==b&&"TiB"==B&&(e=909.5,t=i/e),"PB"==b&&"pb"==B&&(e=8,t=i/e),"PB"==b&&"Pibit"==B&&(e=7.105,t=i/e),"PB"==b&&"PiB"==B&&(e=1.126,t=i*e),"PiB"==b&&"b"==B&&(e=9007e12,t=i/e),"PiB"==b&&"B"==B&&(e=1126e12,t=i/e),"PiB"==b&&"kb"==B&&(e=9007e9,t=i/e),"PiB"==b&&"Kibit"==B&&(e=8796e9,t=i/e),"PiB"==b&&"KB"==B&&(e=1126e9,t=i/e),"PiB"==b&&"KiB"==B&&(e=1126e9,t=i/e),"PiB"==b&&"mb"==B&&(e=9007e6,t=i/e),"PiB"==b&&"Mibit"==B&&(e=859e7,t=i/e),"PiB"==b&&"MB"==B&&(e=1126e6,t=i/e),"PiB"==b&&"MiB"==B&&(e=1074e6,t=i/e),"PiB"==b&&"gb"==B&&(e=9007e3,t=i/e),"PiB"==b&&"Gibit"==B&&(e=8389e3,t=i/e),"PiB"==b&&"GB"==B&&(e=1126e3,t=i/e),"PiB"==b&&"GiB"==B&&(e=1049e3,t=i/e),"PiB"==b&&"tb"==B&&(e=9007,t=i/e),"PiB"==b&&"Tebit"==B&&(e=8192,t=i/e),"PiB"==b&&"TB"==B&&(e=1126,t=i/e),"PiB"==b&&"TiB"==B&&(e=1024,t=i/e),"PiB"==b&&"pb"==B&&(e=9.007,t=i/e),"PiB"==b&&"Pibit"==B&&(e=8,t=i/e),"PiB"==b&&"PB"==B&&(e=1.126,t=i/e),t.toString().length>=10&&b!==B?input.value=t.toExponential(5):input.value=t}input.oninput=()=>dataStorageConverter(),output.oninput=()=>dataStorageConverterReverse(),selectInp.oninput=()=>dataStorageConverter(),selectOut.oninput=()=>dataStorageConverter(),input.setAttribute("placeholder",selectInp.value),output.setAttribute("placeholder",selectOut.value);