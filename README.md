# Verify

## Introduction

VERIFY is a web application designed to validate South African RSA ID numbers entered by users through the user interface. South African ID numbers consist of 13 digits and follow a specific format: YYMMDDSSSSCAZ.

- The first six digits (YYMMDD) represent the date of birth. For example, 23 January 1988 is 880123.
- The next four digits (SSSS) indicate the gender, with females assigned numbers in the range 0000-4999 and males from 5000-9999.
- The following digit (C) denotes whether the individual is an SA citizen (0) or a permanent resident (1).
- The next digit (A) was previously used to indicate a person's race but has been eliminated, and old ID numbers have been reissued to remove this.
- The last digit (Z) serves as a checksum digit, which is used to validate the number sequence using the Luhn algorithm.

## Developer
- Sthembizo Molefi

## Tools
- ReactJS
- Bootstrap
- JavaScript
- CSS
- Firebase

## Live Page on GitHub Pages
Check out the live version of Verify by visiting the following link: [Verify Web App](https://sizxle.github.io/verify)

Feel free to use VERIFY to validate RSA ID numbers and provide feedback on your experience. Your input is invaluable as we continuously strive to enhance the application's performance and usability.

Stay verified!
