---
layout: dataStorage
title: Byte to Kibibyte
value: 1024
inShort: B-to-KiB
switch: Kibibyte-to-Byte
categories: Byte
---

Using Data storage Conversion tool you can converte **Byte (B)** to **Byte (B)** or vice versa. Check 1 Byte and Kibibyte value given below and also check quick conversion tables.

## Formula
*Divide the Digital Storage value by {{page.value}}*

## Byte
*Symbol:* **B**

## Kibibyte
*Symbol:* **KiB**

## How to Convert Byte to Kibibyte?

1 B = {{ 1.0 | divided_by: page.value }} KiB

1 KiB = {{page.value}} B


## Byte to Kibibyte Convertion Table :

| Byte (B) | Kibibyte (KiB) |
| ---- | ---- |
| 0.01 B | {{ 0.01 | divided_by: page.value }} KiB |
| 0.1 B | {{ 0.1 | divided_by: page.value }} KiB |
| 0.25 B | {{ 0.25 | divided_by: page.value }} KiB |
| 0.5 B | {{ 0.50 | divided_by: page.value }} KiB |
| 1 B | {{ 1.0 | divided_by: page.value }} KiB |
| 2 B | {{ 2.0 | divided_by: page.value }} KiB |
| 3 B | {{ 3.0 | divided_by: page.value }} KiB |
| 5 B | {{ 5.0 | divided_by: page.value }} KiB |
| 10 B | {{ 10.0 | divided_by: page.value }} KiB |
| 100 B | {{ 100.0 | divided_by: page.value }} KiB |

## Kibibyte to Byte Convertion Table :

| Kibibyte (KiB) | Byte (B) |
| ---- | ---- |
| 0.01 KiB | {{ 0.01 | times: page.value }} B |
| 0.1 KiB | {{ 0.1 | times: page.value }} B |
| 0.25 KiB | {{ 0.25 | times: page.value }} B |
| 0.5 KiB | {{ 0.50 | times: page.value }} B |
| 1 KiB | {{ 1.0 | times: page.value }} B |
| 2 KiB | {{ 2.0 | times: page.value }} B |
| 3 KiB | {{ 3.0 | times: page.value }} B |
| 5 KiB | {{ 5.0 | times: page.value }} B |
| 10 KiB | {{ 10.0 | times: page.value }} B |
| 100 KiB | {{ 100.0 | times: page.value }} B |


<script>
document.getElementById('selectInput')[1].selected = true
document.getElementById('selectOutput')[5].selected = true
</script>
