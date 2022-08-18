---
layout: dataStorage
title: Byte to Mebibyte
value: 1049000
inShort: B-to-MiB
switch: Mebibyte-to-Byte
categories: Byte
---

Using Data storage Conversion tool you can converte **Byte (B)** to **Byte (B)** or vice versa. Check 1 Byte and Mebibyte value given below and also check quick conversion tables.

## Formula
*Divide the Digital Storage value by {{page.value}}*

## Byte
*Symbol:* **B**

## Mebibyte
*Symbol:* **MiB**

## How to Convert Byte to Mebibyte?

1 B = {{ 1.0 | divided_by: page.value }} MiB

1 MiB = {{page.value}} B


## Byte to Mebibyte Convertion Table :

| Byte (B) | Mebibyte (MiB) |
| ---- | ---- |
| 0.01 B | {{ 0.01 | divided_by: page.value | round: 12 }} MiB |
| 0.1 B | {{ 0.1 | divided_by: page.value | round: 12 }} MiB |
| 0.25 B | {{ 0.25 | divided_by: page.value | round: 12 }} MiB |
| 0.5 B | {{ 0.50 | divided_by: page.value | round: 12 }} MiB |
| 1 B | {{ 1.0 | divided_by: page.value | round: 12 }} MiB |
| 2 B | {{ 2.0 | divided_by: page.value | round: 12 }} MiB |
| 3 B | {{ 3.0 | divided_by: page.value | round: 12 }} MiB |
| 5 B | {{ 5.0 | divided_by: page.value | round: 12 }} MiB |
| 10 B | {{ 10.0 | divided_by: page.value | round: 12 }} MiB |
| 100 B | {{ 100.0 | divided_by: page.value | round: 12 }} MiB |

## Mebibyte to Byte Convertion Table :

| Mebibyte (MiB) | Byte (B) |
| ---- | ---- |
| 0.01 MiB | {{ 0.01 | times: page.value | round: 12 }} B |
| 0.1 MiB | {{ 0.1 | times: page.value | round: 12 }} B |
| 0.25 MiB | {{ 0.25 | times: page.value | round: 12 }} B |
| 0.5 MiB | {{ 0.50 | times: page.value | round: 12 }} B |
| 1 MiB | {{ 1.0 | times: page.value | round: 12 }} B |
| 2 MiB | {{ 2.0 | times: page.value | round: 12 }} B |
| 3 MiB | {{ 3.0 | times: page.value | round: 12 }} B |
| 5 MiB | {{ 5.0 | times: page.value | round: 12 }} B |
| 10 MiB | {{ 10.0 | times: page.value | round: 12 }} B |
| 100 MiB | {{ 100.0 | times: page.value | round: 12 }} B |


<script>
document.getElementById('selectInput')[1].selected = true
document.getElementById('selectOutput')[9].selected = true
</script>
