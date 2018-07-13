
<h1 align="center"> Face analytics </h1> <br>
<p align="center">
  <img alt="gif xiaomi band and slide" title="mi band 2 script pc" src="https://raw.githubusercontent.com/NoRoboto/face-analytics/master/faces-header.jpg?token=AID74VSaC19ff-CQ99sD71EpwISCWWIlks5bUlAhwA%3D%3D" width="450">
</p>
<p align="center">
Jdmoar - # Happy Selfie <a href="https://www.flickr.com/photos/jdmoar/">flickr<a/>
</p>

<p align="center">
React native integration with <a href="https://www.kairos.com">Kairos API</a> :older_man:
</p>

## Table of Contents

- [Introduction](#introduction)
- [Requirements](#requirements)
- [Install](#install)
- [Features](#features)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## Introduction

Simple React Native kairos api integration. Kairos provides a  free I.A  face analysis, take a selfie and see the result [Security & Privacy](https://www.kairos.com/faq#security-privacy)

## Requirements

#### <i class="icon-list"></i> We need

> - [Nodejs](https://nodejs.org/en/) => 8.x.x
> - [NPM](https://www.npmjs.com/) >= 5.x.x 
> - (Optional) [Yarn](https://yarnpkg.com/en/)

add a new file called config.js in api folder, then add your api key and app key, like this:

```
export  default {
	appId:  "xxxxxxx",
	appKey:  "xxxxx"
}
```

## Install

```
yarn
or
npm install
```
to run: yarn start or npm start

## Features

 1. Face Detection (required to advance).
 2. Use swipe to handle ux more easy.
 3. Send on the fly pic for analysis (Kairos API)
 4. Free usage.
 5. Detect multiple faces.
 6. Data summary: Age, Ethnicity, Skin, Gender, Glasses.

## Acknowledgments

Thanks to kairos team.

## License
The MIT License (MIT) 2018.
