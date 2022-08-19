---
layout: dataStorage
title: bit to Byte
value: 8
inShort: b-to-B
switch: Byte-to-bit
categories: bit
---

Using Data storage Conversion tool you can converte **bit (b)** to **bit (b)** or vice versa. Check 1 bit and Byte value given below and also check quick conversion tables.

## Formula
`Divide the Digital Storage value by {{page.value}}`

## bit
*Symbol:* **b**

## Byte
*Symbol:* **B**

## How to Convert bit to Byte?

1 b = {{ 1.0 | divided_by: page.value }} B

1 B = {{page.value}} b


## bit to Byte Convertion Table :

| bit (b) | Byte (B) |
| ---- | ---- |
| 0.01 b | {{ 0.01 | divided_by: page.value }} B |
| 0.1 b | {{ 0.1 | divided_by: page.value }} B |
| 0.25 b | {{ 0.25 | divided_by: page.value }} B |
| 0.5 b | {{ 0.50 | divided_by: page.value }} B |
| 1 b | {{ 1.0 | divided_by: page.value }} B |
| 2 b | {{ 2.0 | divided_by: page.value }} B |
| 3 b | {{ 3.0 | divided_by: page.value }} B |
| 5 b | {{ 5.0 | divided_by: page.value }} B |
| 10 b | {{ 10.0 | divided_by: page.value }} B |
| 100 b | {{ 100.0 | divided_by: page.value }} B |

## Byte to bit Convertion Table :

| Byte (B) | bit (b) |
| ---- | ---- |
| 0.01 B | {{ 0.01 | times: page.value }} b |
| 0.1 B | {{ 0.1 | times: page.value }} b |
| 0.25 B | {{ 0.25 | times: page.value }} b |
| 0.5 B | {{ 0.50 | times: page.value }} b |
| 1 B | {{ 1.0 | times: page.value }} b |
| 2 B | {{ 2.0 | times: page.value }} b |
| 3 B | {{ 3.0 | times: page.value }} b |
| 5 B | {{ 5.0 | times: page.value }} b |
| 10 B | {{ 10.0 | times: page.value }} b |
| 100 B | {{ 100.0 | times: page.value }} b |


<script>
document.getElementById('selectInput')[0].selected = true
document.getElementById('selectOutput')[1].selected = true
</script>
