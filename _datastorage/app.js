const fs = require("fs");

const sym = [
  "b",
  "B",
  "kb",
  "Kibit",
  "KB",
  "KiB",
  "mb",
  "Mibit",
  "MB",
  "MiB",
  "gb",
  "Gibit",
  "GB",
  "GiB",
  "tb",
  "Tebit",
  "TB",
  "TiB",
  "pb",
  "Pibit",
  "PB",
  "PiB",
];

const name = [
  "bit",
  "Byte",
  "Kilobit",
  "Kibibit",
  "Kilobyte",
  "Kibibyte",
  "Megabit",
  "Mebibit",
  "Megabyte",
  "Mebibyte",
  "Gigabit",
  "Gibibit",
  "Gigabyte",
  "Gibibyte",
  "Terabit",
  "Tebibit",
  "Terabyte",
  "Tebibyte",
  "Petabit",
  "Pebibit",
  "Petabyte",
  "Pebibyte",
];

for (let n = 0; n < name.length; n++) {
  for (let i = 0; i < name.length; i++) {

    let val
    if (sym[n] == "b" && sym[i] == "B") {
      val = 8;
    }
    if (sym[n] == "b" && sym[i] == "kb") {
      val = 1000;
    }
    if (sym[n] == "b" && sym[i] == "Kibit") {
      val = 1024;
    }
    if (sym[n] == "b" && sym[i] == "KB") {
      val = 8000;
    }
    if (sym[n] == "b" && sym[i] == "KiB") {
      val = 8192;
    }
    if (sym[n] == "b" && sym[i] == "mb") {
      val = 1e6;
    }
    if (sym[n] == "b" && sym[i] == "Mibit") {
      val = 1.049e6;
    }
    if (sym[n] == "b" && sym[i] == "MB") {
      val = 8e6;
    }
    if (sym[n] == "b" && sym[i] == "MiB") {
      val = 8.389e6;
    }
    if (sym[n] == "b" && sym[i] == "gb") {
      val = 1e9;
    }
    if (sym[n] == "b" && sym[i] == "Gibit") {
      val = 1.074e9;
    }
    if (sym[n] == "b" && sym[i] == "GB") {
      val = 8e9;
    }
    if (sym[n] == "b" && sym[i] == "GiB") {
      val = 8.59e9;
    }
    if (sym[n] == "b" && sym[i] == "tb") {
      val = 1e12;
    }
    if (sym[n] == "b" && sym[i] == "Tebit") {
      val = 1.1e12;
    }
    if (sym[n] == "b" && sym[i] == "TB") {
      val = 8e12;
    }
    if (sym[n] == "b" && sym[i] == "TiB") {
      val = 8.796e12;
    }
    if (sym[n] == "b" && sym[i] == "pb") {
      val = 1e15;
    }
    if (sym[n] == "b" && sym[i] == "Pibit") {
      val = 1.126e15;
    }
    if (sym[n] == "b" && sym[i] == "PB") {
      val = 8e15;
    }
    if (sym[n] == "b" && sym[i] == "PiB") {
      val = 9.007e15;
    }
    if (sym[n] == "B" && sym[i] == "b") {
      val = 8;
    }
    if (sym[n] == "B" && sym[i] == "kb") {
      val = 125;
    }
    if (sym[n] == "B" && sym[i] == "Kibit") {
      val = 128;
    }
    if (sym[n] == "B" && sym[i] == "KB") {
      val = 1000;
    }
    if (sym[n] == "B" && sym[i] == "KiB") {
      val = 1024;
    }
    if (sym[n] == "B" && sym[i] == "mb") {
      val = 125000;
    }
    if (sym[n] == "B" && sym[i] == "Mibit") {
      val = 131100;
    }
    if (sym[n] == "B" && sym[i] == "MB") {
      val = 1e6;
    }
    if (sym[n] == "B" && sym[i] == "MiB") {
      val = 1.049e6;
    }
    if (sym[n] == "B" && sym[i] == "gb") {
      val = 1.25e8;
    }
    if (sym[n] == "B" && sym[i] == "Gibit") {
      val = 1.342e8;
    }
    if (sym[n] == "B" && sym[i] == "GB") {
      val = 1e9;
    }
    if (sym[n] == "B" && sym[i] == "GiB") {
      val = 1.074e9;
    }
    if (sym[n] == "B" && sym[i] == "tb") {
      val = 1.25e11;
    }
    if (sym[n] == "B" && sym[i] == "Tebit") {
      val = 1.374e11;
    }
    if (sym[n] == "B" && sym[i] == "TB") {
      val = 1e12;
    }
    if (sym[n] == "B" && sym[i] == "TiB") {
      val = 1.1e12;
    }
    if (sym[n] == "B" && sym[i] == "pb") {
      val = 1.25e14;
    }
    if (sym[n] == "B" && sym[i] == "Pibit") {
      val = 1.407e14;
    }
    if (sym[n] == "B" && sym[i] == "PB") {
      val = 1e15;
    }
    if (sym[n] == "B" && sym[i] == "PiB") {
      val = 1.26e15;
    }
    if (sym[n] == "kb" && sym[i] == "b") {
      val = 1000;
    }
    if (sym[n] == "kb" && sym[i] == "B") {
      val = 125;
    }
    if (sym[n] == "kb" && sym[i] == "Kibit") {
      val = 1.024;
    }
    if (sym[n] == "kb" && sym[i] == "KB") {
      val = 8;
    }
    if (sym[n] == "kb" && sym[i] == "KiB") {
      val = 8.192;
    }
    if (sym[n] == "kb" && sym[i] == "mb") {
      val = 1000;
    }
    if (sym[n] == "kb" && sym[i] == "Mibit") {
      val = 1049;
    }
    if (sym[n] == "kb" && sym[i] == "MB") {
      val = 8000;
    }
    if (sym[n] == "kb" && sym[i] == "MiB") {
      val = 8389;
    }
    if (sym[n] == "kb" && sym[i] == "gb") {
      val = 1e6;
    }
    if (sym[n] == "kb" && sym[i] == "Gibit") {
      val = 1.074e6;
    }
    if (sym[n] == "kb" && sym[i] == "GB") {
      val = 8e6;
    }
    if (sym[n] == "kb" && sym[i] == "GiB") {
      val = 8.59e6;
    }
    if (sym[n] == "kb" && sym[i] == "tb") {
      val = 1e9;
    }
    if (sym[n] == "kb" && sym[i] == "Tebit") {
      val = 1.1e9;
    }
    if (sym[n] == "kb" && sym[i] == "TB") {
      val = 8e9;
    }
    if (sym[n] == "kb" && sym[i] == "TiB") {
      val = 8.796e9;
    }
    if (sym[n] == "kb" && sym[i] == "pb") {
      val = 1e12;
    }
    if (sym[n] == "kb" && sym[i] == "Pibit") {
      val = 1.126e12;
    }
    if (sym[n] == "kb" && sym[i] == "PB") {
      val = 8e12;
    }
    if (sym[n] == "kb" && sym[i] == "PiB") {
      val = 9.007e12;
    }
    if (sym[n] == "Kibit" && sym[i] == "b") {
      val = 1024;
    }
    if (sym[n] == "Kibit" && sym[i] == "B") {
      val = 128;
    }
    if (sym[n] == "Kibit" && sym[i] == "kb") {
      val = 1.024;
    }
    if (sym[n] == "Kibit" && sym[i] == "KB") {
      val = 7.812;
    }
    if (sym[n] == "Kibit" && sym[i] == "KiB") {
      val = 8;
    }
    if (sym[n] == "Kibit" && sym[i] == "mb") {
      val = 976.6;
    }
    if (sym[n] == "Kibit" && sym[i] == "Mibit") {
      val = 1024;
    }
    if (sym[n] == "Kibit" && sym[i] == "MB") {
      val = 7813;
    }
    if (sym[n] == "Kibit" && sym[i] == "MiB") {
      val = 8192;
    }
    if (sym[n] == "Kibit" && sym[i] == "gb") {
      val = 976600;
    }
    if (sym[n] == "Kibit" && sym[i] == "Gibit") {
      val = 1.049e6;
    }
    if (sym[n] == "Kibit" && sym[i] == "GB") {
      val = 7.813e6;
    }
    if (sym[n] == "Kibit" && sym[i] == "GiB") {
      val = 8.389e6;
    }
    if (sym[n] == "Kibit" && sym[i] == "tb") {
      val = 9.766e8;
    }
    if (sym[n] == "Kibit" && sym[i] == "Tebit") {
      val = 1.074e9;
    }
    if (sym[n] == "Kibit" && sym[i] == "TB") {
      val = 7.813e9;
    }
    if (sym[n] == "Kibit" && sym[i] == "TiB") {
      val = 8.59e9;
    }
    if (sym[n] == "Kibit" && sym[i] == "pb") {
      val = 9.766e11;
    }
    if (sym[n] == "Kibit" && sym[i] == "Pibit") {
      val = 1.1e12;
    }
    if (sym[n] == "Kibit" && sym[i] == "PB") {
      val = 7.812e12;
    }
    if (sym[n] == "Kibit" && sym[i] == "PiB") {
      val = 8.796e12;
    }
    if (sym[n] == "KB" && sym[i] == "b") {
      val = 8000;
    }
    if (sym[n] == "KB" && sym[i] == "B") {
      val = 1000;
    }
    if (sym[n] == "KB" && sym[i] == "kb") {
      val = 8;
    }
    if (sym[n] == "KB" && sym[i] == "Kibit") {
      val = 7.812;
    }
    if (sym[n] == "KB" && sym[i] == "KiB") {
      val = 1.024;
    }
    if (sym[n] == "KB" && sym[i] == "mb") {
      val = 125;
    }
    if (sym[n] == "KB" && sym[i] == "Mibit") {
      val = 131.1;
    }
    if (sym[n] == "KB" && sym[i] == "MB") {
      val = 1000;
    }
    if (sym[n] == "KB" && sym[i] == "MiB") {
      val = 1049;
    }
    if (sym[n] == "KB" && sym[i] == "gb") {
      val = 125000;
    }
    if (sym[n] == "KB" && sym[i] == "Gibit") {
      val = 134200;
    }
    if (sym[n] == "KB" && sym[i] == "GB") {
      val = 1e6;
    }
    if (sym[n] == "KB" && sym[i] == "GiB") {
      val = 1.074e6;
    }
    if (sym[n] == "KB" && sym[i] == "tb") {
      val = 1.25e8;
    }
    if (sym[n] == "KB" && sym[i] == "Tebit") {
      val = 1.374e8;
    }
    if (sym[n] == "KB" && sym[i] == "TB") {
      val = 1e9;
    }
    if (sym[n] == "KB" && sym[i] == "TiB") {
      val = 1.1e9;
    }
    if (sym[n] == "KB" && sym[i] == "pb") {
      val = 1.25e11;
    }
    if (sym[n] == "KB" && sym[i] == "Pibit") {
      val = 1.407e11;
    }
    if (sym[n] == "KB" && sym[i] == "PB") {
      val = 1e12;
    }
    if (sym[n] == "KB" && sym[i] == "PiB") {
      val = 1.126e12;
    }
    if (sym[n] == "KiB" && sym[i] == "b") {
      val = 8192;
    }
    if (sym[n] == "KiB" && sym[i] == "B") {
      val = 1024;
    }
    if (sym[n] == "KiB" && sym[i] == "kb") {
      val = 8.192;
    }
    if (sym[n] == "KiB" && sym[i] == "Kibit") {
      val = 8;
    }
    if (sym[n] == "KiB" && sym[i] == "KB") {
      val = 1.024;
    }
    if (sym[n] == "KiB" && sym[i] == "mb") {
      val = 122.1;
    }
    if (sym[n] == "KiB" && sym[i] == "Mibit") {
      val = 128;
    }
    if (sym[n] == "KiB" && sym[i] == "MB") {
      val = 976.6;
    }
    if (sym[n] == "KiB" && sym[i] == "MiB") {
      val = 1024;
    }
    if (sym[n] == "KiB" && sym[i] == "gb") {
      val = 122100;
    }
    if (sym[n] == "KiB" && sym[i] == "Gibit") {
      val = 131100;
    }
    if (sym[n] == "KiB" && sym[i] == "GB") {
      val = 976600;
    }
    if (sym[n] == "KiB" && sym[i] == "GiB") {
      val = 1.049e6;
    }
    if (sym[n] == "KiB" && sym[i] == "tb") {
      val = 1.221e8;
    }
    if (sym[n] == "KiB" && sym[i] == "Tebit") {
      val = 1.342e8;
    }
    if (sym[n] == "KiB" && sym[i] == "TB") {
      val = 9.766e8;
    }
    if (sym[n] == "KiB" && sym[i] == "TiB") {
      val = 1.074e9;
    }
    if (sym[n] == "KiB" && sym[i] == "pb") {
      val = 1.221e11;
    }
    if (sym[n] == "KiB" && sym[i] == "Pibit") {
      val = 1.374e11;
    }
    if (sym[n] == "KiB" && sym[i] == "PB") {
      val = 9.766e11;
    }
    if (sym[n] == "KiB" && sym[i] == "PiB") {
      val = 1.1e12;
    }
    if (sym[n] == "mb" && sym[i] == "b") {
      val = 1e6;
    }
    if (sym[n] == "mb" && sym[i] == "B") {
      val = 125000;
    }
    if (sym[n] == "mb" && sym[i] == "kb") {
      val = 1000;
    }
    if (sym[n] == "mb" && sym[i] == "Kibit") {
      val = 976.6;
    }
    if (sym[n] == "mb" && sym[i] == "KB") {
      val = 125;
    }
    if (sym[n] == "mb" && sym[i] == "KiB") {
      val = 122.1;
    }
    if (sym[n] == "mb" && sym[i] == "Mibit") {
      val = 1.049;
    }
    if (sym[n] == "mb" && sym[i] == "MB") {
      val = 8;
    }
    if (sym[n] == "mb" && sym[i] == "MiB") {
      val = 8.389;
    }
    if (sym[n] == "mb" && sym[i] == "gb") {
      val = 1000;
    }
    if (sym[n] == "mb" && sym[i] == "Gibit") {
      val = 1074;
    }
    if (sym[n] == "mb" && sym[i] == "GB") {
      val = 8000;
    }
    if (sym[n] == "mb" && sym[i] == "GiB") {
      val = 8590;
    }
    if (sym[n] == "mb" && sym[i] == "tb") {
      val = 1e6;
    }
    if (sym[n] == "mb" && sym[i] == "Tebit") {
      val = 1.1e6;
    }
    if (sym[n] == "mb" && sym[i] == "TB") {
      val = 8e6;
    }
    if (sym[n] == "mb" && sym[i] == "TiB") {
      val = 8.796e6;
    }
    if (sym[n] == "mb" && sym[i] == "pb") {
      val = 1e9;
    }
    if (sym[n] == "mb" && sym[i] == "Pibit") {
      val = 1.126e9;
    }
    if (sym[n] == "mb" && sym[i] == "PB") {
      val = 8e9;
    }
    if (sym[n] == "mb" && sym[i] == "PiB") {
      val = 9.007e9;
    }
    if (sym[n] == "Mibit" && sym[i] == "b") {
      val = 1.049e6;
    }
    if (sym[n] == "Mibit" && sym[i] == "B") {
      val = 131100;
    }
    if (sym[n] == "Mibit" && sym[i] == "kb") {
      val = 1049;
    }
    if (sym[n] == "Mibit" && sym[i] == "Kibit") {
      val = 1024;
    }
    if (sym[n] == "Mibit" && sym[i] == "KB") {
      val = 131.1;
    }
    if (sym[n] == "Mibit" && sym[i] == "KiB") {
      val = 128;
    }
    if (sym[n] == "Mibit" && sym[i] == "mb") {
      val = 1.049;
    }
    if (sym[n] == "Mibit" && sym[i] == "MB") {
      val = 7.629;
    }
    if (sym[n] == "Mibit" && sym[i] == "MiB") {
      val = 8;
    }
    if (sym[n] == "Mibit" && sym[i] == "gb") {
      val = 953.7;
    }
    if (sym[n] == "Mibit" && sym[i] == "Gibit") {
      val = 1024;
    }
    if (sym[n] == "Mibit" && sym[i] == "GB") {
      val = 7629;
    }
    if (sym[n] == "Mibit" && sym[i] == "GiB") {
      val = 8192;
    }
    if (sym[n] == "Mibit" && sym[i] == "tb") {
      val = 953700;
    }
    if (sym[n] == "Mibit" && sym[i] == "Tebit") {
      val = 1.049e6;
    }
    if (sym[n] == "Mibit" && sym[i] == "TB") {
      val = 7.629e6;
    }
    if (sym[n] == "Mibit" && sym[i] == "TiB") {
      val = 8.389e6;
    }
    if (sym[n] == "Mibit" && sym[i] == "pb") {
      val = 9.537e8;
    }
    if (sym[n] == "Mibit" && sym[i] == "Pibit") {
      val = 1.074e9;
    }
    if (sym[n] == "Mibit" && sym[i] == "PB") {
      val = 7.629e9;
    }
    if (sym[n] == "Mibit" && sym[i] == "PiB") {
      val = 8.59e9;
    }
    if (sym[n] == "MB" && sym[i] == "b") {
      val = 8e6;
    }
    if (sym[n] == "MB" && sym[i] == "B") {
      val = 1e6;
    }
    if (sym[n] == "MB" && sym[i] == "kb") {
      val = 8000;
    }
    if (sym[n] == "MB" && sym[i] == "Kibit") {
      val = 7813;
    }
    if (sym[n] == "MB" && sym[i] == "KB") {
      val = 1000;
    }
    if (sym[n] == "MB" && sym[i] == "KiB") {
      val = 976.6;
    }
    if (sym[n] == "MB" && sym[i] == "mb") {
      val = 8;
    }
    if (sym[n] == "MB" && sym[i] == "Mibit") {
      val = 7.629;
    }
    if (sym[n] == "MB" && sym[i] == "MiB") {
      val = 1.049;
    }
    if (sym[n] == "MB" && sym[i] == "gb") {
      val = 125;
    }
    if (sym[n] == "MB" && sym[i] == "Gibit") {
      val = 134.2;
    }
    if (sym[n] == "MB" && sym[i] == "GB") {
      val = 1000;
    }
    if (sym[n] == "MB" && sym[i] == "GiB") {
      val = 1074;
    }
    if (sym[n] == "MB" && sym[i] == "tb") {
      val = 125000;
    }
    if (sym[n] == "MB" && sym[i] == "Tebit") {
      val = 137400;
    }
    if (sym[n] == "MB" && sym[i] == "TB") {
      val = 1e6;
    }
    if (sym[n] == "MB" && sym[i] == "TiB") {
      val = 1.1e6;
    }
    if (sym[n] == "MB" && sym[i] == "pb") {
      val = 1.25e8;
    }
    if (sym[n] == "MB" && sym[i] == "Pibit") {
      val = 1.407e8;
    }
    if (sym[n] == "MB" && sym[i] == "PB") {
      val = 1e9;
    }
    if (sym[n] == "MB" && sym[i] == "PiB") {
      val = 1.126e9;
    }
    if (sym[n] == "MiB" && sym[i] == "b") {
      val = 8.389e6;
    }
    if (sym[n] == "MiB" && sym[i] == "B") {
      val = 1.049e6;
    }
    if (sym[n] == "MiB" && sym[i] == "kb") {
      val = 8389;
    }
    if (sym[n] == "MiB" && sym[i] == "Kibit") {
      val = 8192;
    }
    if (sym[n] == "MiB" && sym[i] == "KB") {
      val = 1049;
    }
    if (sym[n] == "MiB" && sym[i] == "KiB") {
      val = 1024;
    }
    if (sym[n] == "MiB" && sym[i] == "mb") {
      val = 8.389;
    }
    if (sym[n] == "MiB" && sym[i] == "Mibit") {
      val = 8;
    }
    if (sym[n] == "MiB" && sym[i] == "MB") {
      val = 1.049;
    }
    if (sym[n] == "MiB" && sym[i] == "gb") {
      val = 119.2;
    }
    if (sym[n] == "MiB" && sym[i] == "Gibit") {
      val = 128;
    }
    if (sym[n] == "MiB" && sym[i] == "GB") {
      val = 953.7;
    }
    if (sym[n] == "MiB" && sym[i] == "GiB") {
      val = 1024;
    }
    if (sym[n] == "MiB" && sym[i] == "tb") {
      val = 119200;
    }
    if (sym[n] == "MiB" && sym[i] == "Tebit") {
      val = 131100;
    }
    if (sym[n] == "MiB" && sym[i] == "TB") {
      val = 953700;
    }
    if (sym[n] == "MiB" && sym[i] == "TiB") {
      val = 1.049e6;
    }
    if (sym[n] == "MiB" && sym[i] == "pb") {
      val = 1.192e8;
    }
    if (sym[n] == "MiB" && sym[i] == "Pibit") {
      val = 1.342e8;
    }
    if (sym[n] == "MiB" && sym[i] == "PB") {
      val = 9.537e8;
    }
    if (sym[n] == "MiB" && sym[i] == "PiB") {
      val = 1.074e9;
    }
    if (sym[n] == "gb" && sym[i] == "b") {
      val = 1e9;
    }
    if (sym[n] == "gb" && sym[i] == "B") {
      val = 1.25e8;
    }
    if (sym[n] == "gb" && sym[i] == "kb") {
      val = 1e6;
    }
    if (sym[n] == "gb" && sym[i] == "Kibit") {
      val = 976600;
    }
    if (sym[n] == "gb" && sym[i] == "KB") {
      val = 125000;
    }
    if (sym[n] == "gb" && sym[i] == "KiB") {
      val = 122100;
    }
    if (sym[n] == "gb" && sym[i] == "mb") {
      val = 1000;
    }
    if (sym[n] == "gb" && sym[i] == "Mibit") {
      val = 953.7;
    }
    if (sym[n] == "gb" && sym[i] == "MB") {
      val = 125;
    }
    if (sym[n] == "gb" && sym[i] == "MiB") {
      val = 119.2;
    }
    if (sym[n] == "gb" && sym[i] == "Gibit") {
      val = 1.074;
    }
    if (sym[n] == "gb" && sym[i] == "GB") {
      val = 8;
    }
    if (sym[n] == "gb" && sym[i] == "GiB") {
      val = 8.59;
    }
    if (sym[n] == "gb" && sym[i] == "tb") {
      val = 1000;
    }
    if (sym[n] == "gb" && sym[i] == "Tebit") {
      val = 1100;
    }
    if (sym[n] == "gb" && sym[i] == "TB") {
      val = 8000;
    }
    if (sym[n] == "gb" && sym[i] == "TiB") {
      val = 8796;
    }
    if (sym[n] == "gb" && sym[i] == "pb") {
      val = 1e6;
    }
    if (sym[n] == "gb" && sym[i] == "Pibit") {
      val = 1.126e6;
    }
    if (sym[n] == "gb" && sym[i] == "PB") {
      val = 8e6;
    }
    if (sym[n] == "gb" && sym[i] == "PiB") {
      val = 9.007e6;
    }
    if (sym[n] == "Gibit" && sym[i] == "b") {
      val = 1.074e9;
    }
    if (sym[n] == "Gibit" && sym[i] == "B") {
      val = 1.342e8;
    }
    if (sym[n] == "Gibit" && sym[i] == "kb") {
      val = 1.074e6;
    }
    if (sym[n] == "Gibit" && sym[i] == "Kibit") {
      val = 1.049e6;
    }
    if (sym[n] == "Gibit" && sym[i] == "KB") {
      val = 134200;
    }
    if (sym[n] == "Gibit" && sym[i] == "KiB") {
      val = 131100;
    }
    if (sym[n] == "Gibit" && sym[i] == "mb") {
      val = 1074;
    }
    if (sym[n] == "Gibit" && sym[i] == "Mibit") {
      val = 1024;
    }
    if (sym[n] == "Gibit" && sym[i] == "MB") {
      val = 134.2;
    }
    if (sym[n] == "Gibit" && sym[i] == "MiB") {
      val = 128;
    }
    if (sym[n] == "Gibit" && sym[i] == "gb") {
      val = 1.074;
    }
    if (sym[n] == "Gibit" && sym[i] == "GB") {
      val = 7.451;
    }
    if (sym[n] == "Gibit" && sym[i] == "GiB") {
      val = 8;
    }
    if (sym[n] == "Gibit" && sym[i] == "tb") {
      val = 931.3;
    }
    if (sym[n] == "Gibit" && sym[i] == "Tebit") {
      val = 1024;
    }
    if (sym[n] == "Gibit" && sym[i] == "TB") {
      val = 7451;
    }
    if (sym[n] == "Gibit" && sym[i] == "TiB") {
      val = 8192;
    }
    if (sym[n] == "Gibit" && sym[i] == "pb") {
      val = 931300;
    }
    if (sym[n] == "Gibit" && sym[i] == "Pibit") {
      val = 1.049e6;
    }
    if (sym[n] == "Gibit" && sym[i] == "PB") {
      val = 7.451e6;
    }
    if (sym[n] == "Gibit" && sym[i] == "PiB") {
      val = 8.389e6;
    }
    if (sym[n] == "GB" && sym[i] == "b") {
      val = 8e9;
    }
    if (sym[n] == "GB" && sym[i] == "B") {
      val = 1e9;
    }
    if (sym[n] == "GB" && sym[i] == "kb") {
      val = 8e6;
    }
    if (sym[n] == "GB" && sym[i] == "Kibit") {
      val = 7.813e6;
    }
    if (sym[n] == "GB" && sym[i] == "KB") {
      val = 1e6;
    }
    if (sym[n] == "GB" && sym[i] == "KiB") {
      val = 976600;
    }
    if (sym[n] == "GB" && sym[i] == "mb") {
      val = 8000;
    }
    if (sym[n] == "GB" && sym[i] == "Mibit") {
      val = 7629;
    }
    if (sym[n] == "GB" && sym[i] == "MB") {
      val = 1000;
    }
    if (sym[n] == "GB" && sym[i] == "MiB") {
      val = 953.7;
    }
    if (sym[n] == "GB" && sym[i] == "gb") {
      val = 8;
    }
    if (sym[n] == "GB" && sym[i] == "Gibit") {
      val = 7.451;
    }
    if (sym[n] == "GB" && sym[i] == "GiB") {
      val = 1.074;
    }
    if (sym[n] == "GB" && sym[i] == "tb") {
      val = 125;
    }
    if (sym[n] == "GB" && sym[i] == "Tebit") {
      val = 137.4;
    }
    if (sym[n] == "GB" && sym[i] == "TB") {
      val = 1000;
    }
    if (sym[n] == "GB" && sym[i] == "TiB") {
      val = 1100;
    }
    if (sym[n] == "GB" && sym[i] == "pb") {
      val = 125000;
    }
    if (sym[n] == "GB" && sym[i] == "Pibit") {
      val = 140700;
    }
    if (sym[n] == "GB" && sym[i] == "PB") {
      val = 1e6;
    }
    if (sym[n] == "GB" && sym[i] == "PiB") {
      val = 1.126e6;
    }
    if (sym[n] == "GiB" && sym[i] == "b") {
      val = 8.59e9;
    }
    if (sym[n] == "GiB" && sym[i] == "B") {
      val = 1.074e9;
    }
    if (sym[n] == "GiB" && sym[i] == "kb") {
      val = 8.59e6;
    }
    if (sym[n] == "GiB" && sym[i] == "Kibit") {
      val = 8.389e6;
    }
    if (sym[n] == "GiB" && sym[i] == "KB") {
      val = 1.074e6;
    }
    if (sym[n] == "GiB" && sym[i] == "KiB") {
      val = 1.049e6;
    }
    if (sym[n] == "GiB" && sym[i] == "mb") {
      val = 8590;
    }
    if (sym[n] == "GiB" && sym[i] == "Mibit") {
      val = 8192;
    }
    if (sym[n] == "GiB" && sym[i] == "MB") {
      val = 1074;
    }
    if (sym[n] == "GiB" && sym[i] == "MiB") {
      val = 1024;
    }
    if (sym[n] == "GiB" && sym[i] == "gb") {
      val = 8.59;
    }
    if (sym[n] == "GiB" && sym[i] == "Gibit") {
      val = 8;
    }
    if (sym[n] == "GiB" && sym[i] == "GB") {
      val = 1.074;
    }
    if (sym[n] == "GiB" && sym[i] == "tb") {
      val = 116.4;
    }
    if (sym[n] == "GiB" && sym[i] == "Tebit") {
      val = 128;
    }
    if (sym[n] == "GiB" && sym[i] == "TB") {
      val = 931.3;
    }
    if (sym[n] == "GiB" && sym[i] == "TiB") {
      val = 1024;
    }
    if (sym[n] == "GiB" && sym[i] == "pb") {
      val = 116400;
    }
    if (sym[n] == "GiB" && sym[i] == "Pibit") {
      val = 131100;
    }
    if (sym[n] == "GiB" && sym[i] == "PB") {
      val = 931300;
    }
    if (sym[n] == "GiB" && sym[i] == "PiB") {
      val = 1.049e6;
    }
    if (sym[n] == "tb" && sym[i] == "b") {
      val = 1e12;
    }
    if (sym[n] == "tb" && sym[i] == "B") {
      val = 1.25e11;
    }
    if (sym[n] == "tb" && sym[i] == "kb") {
      val = 1e9;
    }
    if (sym[n] == "tb" && sym[i] == "Kibit") {
      val = 9.766e8;
    }
    if (sym[n] == "tb" && sym[i] == "KB") {
      val = 1.25e8;
    }
    if (sym[n] == "tb" && sym[i] == "KiB") {
      val = 1.221e8;
    }
    if (sym[n] == "tb" && sym[i] == "mb") {
      val = 1e6;
    }
    if (sym[n] == "tb" && sym[i] == "Mibit") {
      val = 953700;
    }
    if (sym[n] == "tb" && sym[i] == "MB") {
      val = 125000;
    }
    if (sym[n] == "tb" && sym[i] == "MiB") {
      val = 119200;
    }
    if (sym[n] == "tb" && sym[i] == "gb") {
      val = 1000;
    }
    if (sym[n] == "tb" && sym[i] == "Gibit") {
      val = 931.3;
    }
    if (sym[n] == "tb" && sym[i] == "GB") {
      val = 125;
    }
    if (sym[n] == "tb" && sym[i] == "GiB") {
      val = 116.4;
    }
    if (sym[n] == "tb" && sym[i] == "Tebit") {
      val = 1.1;
    }
    if (sym[n] == "tb" && sym[i] == "TB") {
      val = 8;
    }
    if (sym[n] == "tb" && sym[i] == "TiB") {
      val = 8.796;
    }
    if (sym[n] == "tb" && sym[i] == "pb") {
      val = 1000;
    }
    if (sym[n] == "tb" && sym[i] == "Pibit") {
      val = 1126;
    }
    if (sym[n] == "tb" && sym[i] == "PB") {
      val = 8000;
    }
    if (sym[n] == "tb" && sym[i] == "PiB") {
      val = 9007;
    }
    if (sym[n] == "Tebit" && sym[i] == "b") {
      val = 1.1e12;
    }
    if (sym[n] == "Tebit" && sym[i] == "B") {
      val = 1.374e11;
    }
    if (sym[n] == "Tebit" && sym[i] == "kb") {
      val = 1.1e9;
    }
    if (sym[n] == "Tebit" && sym[i] == "Kibit") {
      val = 1.074e9;
    }
    if (sym[n] == "Tebit" && sym[i] == "KB") {
      val = 1.374e8;
    }
    if (sym[n] == "Tebit" && sym[i] == "KiB") {
      val = 1.342e8;
    }
    if (sym[n] == "Tebit" && sym[i] == "mb") {
      val = 1.1e6;
    }
    if (sym[n] == "Tebit" && sym[i] == "Mibit") {
      val = 1.049e6;
    }
    if (sym[n] == "Tebit" && sym[i] == "MB") {
      val = 137400;
    }
    if (sym[n] == "Tebit" && sym[i] == "MiB") {
      val = 131100;
    }
    if (sym[n] == "Tebit" && sym[i] == "gb") {
      val = 1100;
    }
    if (sym[n] == "Tebit" && sym[i] == "Gibit") {
      val = 1024;
    }
    if (sym[n] == "Tebit" && sym[i] == "GB") {
      val = 131.4;
    }
    if (sym[n] == "Tebit" && sym[i] == "GiB") {
      val = 128;
    }
    if (sym[n] == "Tebit" && sym[i] == "tb") {
      val = 1.1;
    }
    if (sym[n] == "Tebit" && sym[i] == "TB") {
      val = 7.276;
    }
    if (sym[n] == "Tebit" && sym[i] == "TiB") {
      val = 8;
    }
    if (sym[n] == "Tebit" && sym[i] == "pb") {
      val = 909.5;
    }
    if (sym[n] == "Tebit" && sym[i] == "Pibit") {
      val = 1024;
    }
    if (sym[n] == "Tebit" && sym[i] == "PB") {
      val = 7276;
    }
    if (sym[n] == "Tebit" && sym[i] == "PiB") {
      val = 8192;
    }
    if (sym[n] == "TB" && sym[i] == "b") {
      val = 8e12;
    }
    if (sym[n] == "TB" && sym[i] == "B") {
      val = 1e12;
    }
    if (sym[n] == "TB" && sym[i] == "kb") {
      val = 8e9;
    }
    if (sym[n] == "TB" && sym[i] == "Kibit") {
      val = 7.813e9;
    }
    if (sym[n] == "TB" && sym[i] == "KB") {
      val = 1e9;
    }
    if (sym[n] == "TB" && sym[i] == "KiB") {
      val = 9.766e8;
    }
    if (sym[n] == "TB" && sym[i] == "mb") {
      val = 8e6;
    }
    if (sym[n] == "TB" && sym[i] == "Mibit") {
      val = 7.629e6;
    }
    if (sym[n] == "TB" && sym[i] == "MB") {
      val = 1e6;
    }
    if (sym[n] == "TB" && sym[i] == "MiB") {
      val = 953700;
    }
    if (sym[n] == "TB" && sym[i] == "gb") {
      val = 8000;
    }
    if (sym[n] == "TB" && sym[i] == "Gibit") {
      val = 7451;
    }
    if (sym[n] == "TB" && sym[i] == "GB") {
      val = 1000;
    }
    if (sym[n] == "TB" && sym[i] == "GiB") {
      val = 931.3;
    }
    if (sym[n] == "TB" && sym[i] == "tb") {
      val = 8;
    }
    if (sym[n] == "TB" && sym[i] == "Tebit") {
      val = 7.276;
    }
    if (sym[n] == "TB" && sym[i] == "TiB") {
      val = 1.1;
    }
    if (sym[n] == "TB" && sym[i] == "pb") {
      val = 125;
    }
    if (sym[n] == "TB" && sym[i] == "Pibit") {
      val = 140.7;
    }
    if (sym[n] == "TB" && sym[i] == "PB") {
      val = 1000;
    }
    if (sym[n] == "TB" && sym[i] == "PiB") {
      val = 1126;
    }
    if (sym[n] == "TiB" && sym[i] == "b") {
      val = 8.796e12;
    }
    if (sym[n] == "TiB" && sym[i] == "B") {
      val = 1.1e12;
    }
    if (sym[n] == "TiB" && sym[i] == "kb") {
      val = 8.796e9;
    }
    if (sym[n] == "TiB" && sym[i] == "Kibit") {
      val = 8.59e9;
    }
    if (sym[n] == "TiB" && sym[i] == "KB") {
      val = 1.1e9;
    }
    if (sym[n] == "TiB" && sym[i] == "KiB") {
      val = 1.074e9;
    }
    if (sym[n] == "TiB" && sym[i] == "mb") {
      val = 8.796e6;
    }
    if (sym[n] == "TiB" && sym[i] == "Mibit") {
      val = 8.389e6;
    }
    if (sym[n] == "TiB" && sym[i] == "MB") {
      val = 1.1e6;
    }
    if (sym[n] == "TiB" && sym[i] == "MiB") {
      val = 1.049e6;
    }
    if (sym[n] == "TiB" && sym[i] == "gb") {
      val = 8796;
    }
    if (sym[n] == "TiB" && sym[i] == "Gibit") {
      val = 8192;
    }
    if (sym[n] == "TiB" && sym[i] == "GB") {
      val = 1100;
    }
    if (sym[n] == "TiB" && sym[i] == "GiB") {
      val = 1024;
    }
    if (sym[n] == "TiB" && sym[i] == "tb") {
      val = 8.796;
    }
    if (sym[n] == "TiB" && sym[i] == "Tebit") {
      val = 8;
    }
    if (sym[n] == "TiB" && sym[i] == "TB") {
      val = 1.1;
    }
    if (sym[n] == "TiB" && sym[i] == "pb") {
      val = 113.7;
    }
    if (sym[n] == "TiB" && sym[i] == "Pibit") {
      val = 128;
    }
    if (sym[n] == "TiB" && sym[i] == "PB") {
      val = 909.5;
    }
    if (sym[n] == "TiB" && sym[i] == "PiB") {
      val = 1024;
    }
    if (sym[n] == "pb" && sym[i] == "b") {
      val = 1e15;
    }
    if (sym[n] == "pb" && sym[i] == "B") {
      val = 1.25e14;
    }
    if (sym[n] == "pb" && sym[i] == "kb") {
      val = 1e12;
    }
    if (sym[n] == "pb" && sym[i] == "Kibit") {
      val = 9.766e11;
    }
    if (sym[n] == "pb" && sym[i] == "KB") {
      val = 1.25e11;
    }
    if (sym[n] == "pb" && sym[i] == "KiB") {
      val = 1.221e11;
    }
    if (sym[n] == "pb" && sym[i] == "mb") {
      val = 1e9;
    }
    if (sym[n] == "pb" && sym[i] == "Mibit") {
      val = 9.537e8;
    }
    if (sym[n] == "pb" && sym[i] == "MB") {
      val = 1.25e8;
    }
    if (sym[n] == "pb" && sym[i] == "MiB") {
      val = 1.192e8;
    }
    if (sym[n] == "pb" && sym[i] == "gb") {
      val = 1e6;
    }
    if (sym[n] == "pb" && sym[i] == "Gibit") {
      val = 931300;
    }
    if (sym[n] == "pb" && sym[i] == "GB") {
      val = 125000;
    }
    if (sym[n] == "pb" && sym[i] == "GiB") {
      val = 116400;
    }
    if (sym[n] == "pb" && sym[i] == "tb") {
      val = 1000;
    }
    if (sym[n] == "pb" && sym[i] == "Tebit") {
      val = 909.5;
    }
    if (sym[n] == "pb" && sym[i] == "TB") {
      val = 125;
    }
    if (sym[n] == "pb" && sym[i] == "TiB") {
      val = 113.7;
    }
    if (sym[n] == "pb" && sym[i] == "Pibit") {
      val = 1.126;
    }
    if (sym[n] == "pb" && sym[i] == "PB") {
      val = 8;
    }
    if (sym[n] == "pb" && sym[i] == "PiB") {
      val = 9.007;
    }
    if (sym[n] == "Pibit" && sym[i] == "b") {
      val = 1.126e15;
    }
    if (sym[n] == "Pibit" && sym[i] == "B") {
      val = 1.407e14;
    }
    if (sym[n] == "Pibit" && sym[i] == "kb") {
      val = 1.126e12;
    }
    if (sym[n] == "Pibit" && sym[i] == "Kibit") {
      val = 1.1e12;
    }
    if (sym[n] == "Pibit" && sym[i] == "KB") {
      val = 1.407e11;
    }
    if (sym[n] == "Pibit" && sym[i] == "KiB") {
      val = 1.374e11;
    }
    if (sym[n] == "Pibit" && sym[i] == "mb") {
      val = 1.126e9;
    }
    if (sym[n] == "Pibit" && sym[i] == "Mibit") {
      val = 1.074e9;
    }
    if (sym[n] == "Pibit" && sym[i] == "MB") {
      val = 1.407e8;
    }
    if (sym[n] == "Pibit" && sym[i] == "MiB") {
      val = 1.342e8;
    }
    if (sym[n] == "Pibit" && sym[i] == "gb") {
      val = 1.126e6;
    }
    if (sym[n] == "Pibit" && sym[i] == "Gibit") {
      val = 1.049e6;
    }
    if (sym[n] == "Pibit" && sym[i] == "GB") {
      val = 140700;
    }
    if (sym[n] == "Pibit" && sym[i] == "GiB") {
      val = 131100;
    }
    if (sym[n] == "Pibit" && sym[i] == "tb") {
      val = 1126;
    }
    if (sym[n] == "Pibit" && sym[i] == "Tebit") {
      val = 1024;
    }
    if (sym[n] == "Pibit" && sym[i] == "TB") {
      val = 140.7;
    }
    if (sym[n] == "Pibit" && sym[i] == "TiB") {
      val = 128;
    }
    if (sym[n] == "Pibit" && sym[i] == "pb") {
      val = 1.126;
    }
    if (sym[n] == "Pibit" && sym[i] == "PB") {
      val = 7.105;
    }
    if (sym[n] == "Pibit" && sym[i] == "PiB") {
      val = 8;
    }
    if (sym[n] == "PB" && sym[i] == "b") {
      val = 8e15;
    }
    if (sym[n] == "PB" && sym[i] == "B") {
      val = 1e15;
    }
    if (sym[n] == "PB" && sym[i] == "kb") {
      val = 8e12;
    }
    if (sym[n] == "PB" && sym[i] == "Kibit") {
      val = 7.813e12;
    }
    if (sym[n] == "PB" && sym[i] == "KB") {
      val = 1e12;
    }
    if (sym[n] == "PB" && sym[i] == "KiB") {
      val = 9.766e11;
    }
    if (sym[n] == "PB" && sym[i] == "mb") {
      val = 8e9;
    }
    if (sym[n] == "PB" && sym[i] == "Mibit") {
      val = 7.629e9;
    }
    if (sym[n] == "PB" && sym[i] == "MB") {
      val = 1e9;
    }
    if (sym[n] == "PB" && sym[i] == "MiB") {
      val = 9.537e8;
    }
    if (sym[n] == "PB" && sym[i] == "gb") {
      val = 8e6;
    }
    if (sym[n] == "PB" && sym[i] == "Gibit") {
      val = 7.451e6;
    }
    if (sym[n] == "PB" && sym[i] == "GB") {
      val = 1e6;
    }
    if (sym[n] == "PB" && sym[i] == "GiB") {
      val = 931300;
    }
    if (sym[n] == "PB" && sym[i] == "tb") {
      val = 8000;
    }
    if (sym[n] == "PB" && sym[i] == "Tebit") {
      val = 7276;
    }
    if (sym[n] == "PB" && sym[i] == "TB") {
      val = 1000;
    }
    if (sym[n] == "PB" && sym[i] == "TiB") {
      val = 909.5;
    }
    if (sym[n] == "PB" && sym[i] == "pb") {
      val = 8;
    }
    if (sym[n] == "PB" && sym[i] == "Pibit") {
      val = 7.105;
    }
    if (sym[n] == "PB" && sym[i] == "PiB") {
      val = 1.126;
    }
    if (sym[n] == "PiB" && sym[i] == "b") {
      val = 9.007e15;
    }
    if (sym[n] == "PiB" && sym[i] == "B") {
      val = 1.126e15;
    }
    if (sym[n] == "PiB" && sym[i] == "kb") {
      val = 9.007e12;
    }
    if (sym[n] == "PiB" && sym[i] == "Kibit") {
      val = 8.796e12;
    }
    if (sym[n] == "PiB" && sym[i] == "KB") {
      val = 1.126e12;
    }
    if (sym[n] == "PiB" && sym[i] == "KiB") {
      val = 1.126e12;
    }
    if (sym[n] == "PiB" && sym[i] == "mb") {
      val = 9.007e9;
    }
    if (sym[n] == "PiB" && sym[i] == "Mibit") {
      val = 8.59e9;
    }
    if (sym[n] == "PiB" && sym[i] == "MB") {
      val = 1.126e9;
    }
    if (sym[n] == "PiB" && sym[i] == "MiB") {
      val = 1.074e9;
    }
    if (sym[n] == "PiB" && sym[i] == "gb") {
      val = 9.007e6;
    }
    if (sym[n] == "PiB" && sym[i] == "Gibit") {
      val = 8.389e6;
    }
    if (sym[n] == "PiB" && sym[i] == "GB") {
      val = 1.126e6;
    }
    if (sym[n] == "PiB" && sym[i] == "GiB") {
      val = 1.049e6;
    }
    if (sym[n] == "PiB" && sym[i] == "tb") {
      val = 9007;
    }
    if (sym[n] == "PiB" && sym[i] == "Tebit") {
      val = 8192;
    }
    if (sym[n] == "PiB" && sym[i] == "TB") {
      val = 1126;
    }
    if (sym[n] == "PiB" && sym[i] == "TiB") {
      val = 1024;
    }
    if (sym[n] == "PiB" && sym[i] == "pb") {
      val = 9.007;
    }
    if (sym[n] == "PiB" && sym[i] == "Pibit") {
      val = 8;
    }
    if (sym[n] == "PiB" && sym[i] == "PB") {
      val = 1.126;
    }

    let DorM,sol,sol2,howto,howto2
    if (n > i) {
      DorM = 'Multiply'
      sol = 'times'
      sol2 = 'divided_by'
      howto = '{{page.value}}'
      howto2 = '{{ 1.0 | divided_by: page.value }}'
    }
    else {
      DorM = 'Divide'
      sol = 'divided_by'
      sol2 = 'times'
      howto = '{{ 1.0 | divided_by: page.value }}'
      howto2 = '{{page.value}}'
    }

    const template = `---
layout: dataStorage
title: ${name[n]} to ${name[i]}
value: ${val}
inShort: ${sym[n]}-to-${sym[i]}
switch: ${name[i]}-to-${name[n]}
categories: ${name[n]}
---

Using Data storage Conversion tool you can converte **${name[n]} (${sym[n]})** to **${name[n]} (${sym[n]})** or vice versa. Check 1 ${name[n]} and ${name[i]} value given below and also check quick conversion tables.

## Formula
*${DorM} the Digital Storage value by {{page.value}}*

## ${name[n]}
*Symbol:* **${sym[n]}**

## ${name[i]}
*Symbol:* **${sym[i]}**

## How to Convert ${name[n]} to ${name[i]}?

1 ${sym[n]} = ${howto} ${sym[i]}

1 ${sym[i]} = ${howto2} ${sym[n]}


## ${name[n]} to ${name[i]} Convertion Table :

| ${name[n]} (${sym[n]}) | ${name[i]} (${sym[i]}) |
| ---- | ---- |
| 0.01 ${sym[n]} | {{ 0.01 | ${sol}: page.value | round: 12 }} ${sym[i]} |
| 0.1 ${sym[n]} | {{ 0.1 | ${sol}: page.value | round: 12 }} ${sym[i]} |
| 0.25 ${sym[n]} | {{ 0.25 | ${sol}: page.value | round: 12 }} ${sym[i]} |
| 0.5 ${sym[n]} | {{ 0.50 | ${sol}: page.value | round: 12 }} ${sym[i]} |
| 1 ${sym[n]} | {{ 1.0 | ${sol}: page.value | round: 12 }} ${sym[i]} |
| 2 ${sym[n]} | {{ 2.0 | ${sol}: page.value | round: 12 }} ${sym[i]} |
| 3 ${sym[n]} | {{ 3.0 | ${sol}: page.value | round: 12 }} ${sym[i]} |
| 5 ${sym[n]} | {{ 5.0 | ${sol}: page.value | round: 12 }} ${sym[i]} |
| 10 ${sym[n]} | {{ 10.0 | ${sol}: page.value | round: 12 }} ${sym[i]} |
| 100 ${sym[n]} | {{ 100.0 | ${sol}: page.value | round: 12 }} ${sym[i]} |

## ${name[i]} to ${name[n]} Convertion Table :

| ${name[i]} (${sym[i]}) | ${name[n]} (${sym[n]}) |
| ---- | ---- |
| 0.01 ${sym[i]} | {{ 0.01 | ${sol2}: page.value | round: 12 }} ${sym[n]} |
| 0.1 ${sym[i]} | {{ 0.1 | ${sol2}: page.value | round: 12 }} ${sym[n]} |
| 0.25 ${sym[i]} | {{ 0.25 | ${sol2}: page.value | round: 12 }} ${sym[n]} |
| 0.5 ${sym[i]} | {{ 0.50 | ${sol2}: page.value | round: 12 }} ${sym[n]} |
| 1 ${sym[i]} | {{ 1.0 | ${sol2}: page.value | round: 12 }} ${sym[n]} |
| 2 ${sym[i]} | {{ 2.0 | ${sol2}: page.value | round: 12 }} ${sym[n]} |
| 3 ${sym[i]} | {{ 3.0 | ${sol2}: page.value | round: 12 }} ${sym[n]} |
| 5 ${sym[i]} | {{ 5.0 | ${sol2}: page.value | round: 12 }} ${sym[n]} |
| 10 ${sym[i]} | {{ 10.0 | ${sol2}: page.value | round: 12 }} ${sym[n]} |
| 100 ${sym[i]} | {{ 100.0 | ${sol2}: page.value | round: 12 }} ${sym[n]} |


<script>
document.getElementById('selectInput')[${n}].selected = true
document.getElementById('selectOutput')[${i}].selected = true
</script>
`;

    if (name[n] != name[i]) {
      fs.writeFile(
        `2022-08-15-${name[n]}-to-${name[i]}.md`,
        template,
        (err) => console.log(err)
      );
    }
  }
}
