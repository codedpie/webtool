---
layout: dataStorage
title: Byte to Kilobit
value: 125
inShort: B-to-kb
switch: Kilobit-to-Byte
categories: Byte
---

Using Data storage Conversion tool you can converte **Byte (B)** to **Byte (B)** or vice versa. Check 1 Byte and Kilobit value given below and also check quick conversion tables.

## Formula
*Divide the Digital Storage value by {{page.value}}*

## Byte
*Symbol:* **B**

## Kilobit
*Symbol:* **kb**

## How to Convert Byte to Kilobit?

1 B = {{ 1.0 | divided_by: page.value }} kb

1 kb = {{page.value}} B


## Byte to Kilobit Convertion Table :

| Byte (B) | Kilobit (kb) |
| ---- | ---- |
| 0.01 B | {{ 0.01 | divided_by: page.value | round: 12 }} kb |
| 0.1 B | {{ 0.1 | divided_by: page.value | round: 12 }} kb |
| 0.25 B | {{ 0.25 | divided_by: page.value | round: 12 }} kb |
| 0.5 B | {{ 0.50 | divided_by: page.value | round: 12 }} kb |
| 1 B | {{ 1.0 | divided_by: page.value | round: 12 }} kb |
| 2 B | {{ 2.0 | divided_by: page.value | round: 12 }} kb |
| 3 B | {{ 3.0 | divided_by: page.value | round: 12 }} kb |
| 5 B | {{ 5.0 | divided_by: page.value | round: 12 }} kb |
| 10 B | {{ 10.0 | divided_by: page.value | round: 12 }} kb |
| 100 B | {{ 100.0 | divided_by: page.value | round: 12 }} kb |

## Kilobit to Byte Convertion Table :

| Kilobit (kb) | Byte (B) |
| ---- | ---- |
| 0.01 kb | {{ 0.01 | times: page.value | round: 12 }} B |
| 0.1 kb | {{ 0.1 | times: page.value | round: 12 }} B |
| 0.25 kb | {{ 0.25 | times: page.value | round: 12 }} B |
| 0.5 kb | {{ 0.50 | times: page.value | round: 12 }} B |
| 1 kb | {{ 1.0 | times: page.value | round: 12 }} B |
| 2 kb | {{ 2.0 | times: page.value | round: 12 }} B |
| 3 kb | {{ 3.0 | times: page.value | round: 12 }} B |
| 5 kb | {{ 5.0 | times: page.value | round: 12 }} B |
| 10 kb | {{ 10.0 | times: page.value | round: 12 }} B |
| 100 kb | {{ 100.0 | times: page.value | round: 12 }} B |


<script>
document.getElementById('selectInput')[1].selected = true
document.getElementById('selectOutput')[2].selected = true
</script>
