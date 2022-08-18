---
layout: dataStorage
title: Byte to Megabyte
value: 1000000
inShort: B-to-MB
switch: Megabyte-to-Byte
categories: Byte
---

Using Data storage Conversion tool you can converte **Byte (B)** to **Byte (B)** or vice versa. Check 1 Byte and Megabyte value given below and also check quick conversion tables.

## Formula
*Divide the Digital Storage value by {{page.value}}*

## Byte
*Symbol:* **B**

## Megabyte
*Symbol:* **MB**

## How to Convert Byte to Megabyte?

1 B = {{ 1.0 | divided_by: page.value }} MB

1 MB = {{page.value}} B


## Byte to Megabyte Convertion Table :

| Byte (B) | Megabyte (MB) |
| ---- | ---- |
| 0.01 B | {{ 0.01 | divided_by: page.value | round: 12 }} MB |
| 0.1 B | {{ 0.1 | divided_by: page.value | round: 12 }} MB |
| 0.25 B | {{ 0.25 | divided_by: page.value | round: 12 }} MB |
| 0.5 B | {{ 0.50 | divided_by: page.value | round: 12 }} MB |
| 1 B | {{ 1.0 | divided_by: page.value | round: 12 }} MB |
| 2 B | {{ 2.0 | divided_by: page.value | round: 12 }} MB |
| 3 B | {{ 3.0 | divided_by: page.value | round: 12 }} MB |
| 5 B | {{ 5.0 | divided_by: page.value | round: 12 }} MB |
| 10 B | {{ 10.0 | divided_by: page.value | round: 12 }} MB |
| 100 B | {{ 100.0 | divided_by: page.value | round: 12 }} MB |

## Megabyte to Byte Convertion Table :

| Megabyte (MB) | Byte (B) |
| ---- | ---- |
| 0.01 MB | {{ 0.01 | times: page.value | round: 12 }} B |
| 0.1 MB | {{ 0.1 | times: page.value | round: 12 }} B |
| 0.25 MB | {{ 0.25 | times: page.value | round: 12 }} B |
| 0.5 MB | {{ 0.50 | times: page.value | round: 12 }} B |
| 1 MB | {{ 1.0 | times: page.value | round: 12 }} B |
| 2 MB | {{ 2.0 | times: page.value | round: 12 }} B |
| 3 MB | {{ 3.0 | times: page.value | round: 12 }} B |
| 5 MB | {{ 5.0 | times: page.value | round: 12 }} B |
| 10 MB | {{ 10.0 | times: page.value | round: 12 }} B |
| 100 MB | {{ 100.0 | times: page.value | round: 12 }} B |


<script>
document.getElementById('selectInput')[1].selected = true
document.getElementById('selectOutput')[8].selected = true
</script>
