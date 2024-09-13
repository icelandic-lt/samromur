# Samrómur


![Version](https://img.shields.io/badge/master-darkgreen)
![NPM](https://img.shields.io/badge/npm-blue?logo=npm&logoColor=white)
[![Build](https://github.com/icelandic-lt/samromur/actions/workflows/build.yaml/badge.svg)](https://github.com/icelandic-lt/samromur/actions/workflows/build.yaml)
[![Prettier](https://github.com/icelandic-lt/samromur/actions/workflows/prettierformat.yaml/badge.svg)](https://github.com/icelandic-lt/samromur/actions/workflows/prettierformat.yaml)
![Docker](https://img.shields.io/badge/Docker-[unavailable]-red)

Samrómur is a crowdsourcing voice data collection platform for Icelandic written in Node.js. You can find a running instance of this application at [samromur.is](https://samromur.is/).

## Overview

This repository has been created by the [Language and Voice Lab](https://lvl.ru.is/) at Reykjavík University and is
part of the [Icelandic Language Technology Programme](https://github.com/icelandic-lt/icelandic-lt).

- **Category:** [ASR](https://github.com/icelandic-lt/icelandic-lt/blob/main/doc/asr.md)
- **Domain:** Server
- **Languages/Frameworks:** Javascript/ECMAScript, Node.js, React
- **Language Version/Dialect:**
    - Node.js version 12+
- **Audience**: Developers, Researchers
- **Origin:** [samromur](https://github.com/cadia-lvl/samromur)

## Status
![Development](https://img.shields.io/badge/Development-darkviolet)

This project needs you to have a MySQL database installed and an Amazon S3 bucket configured with appropriate access credentials.<br>
Also, you should replace hardcoded URLs inside the code with either your own URLs or localhost in case of development. For sending Emails, you need to have a Sendgrid account and an API key.

## System Requirements
- Operating System: Linux, Windows, MacOS
- Database: MySQL 8.0.19
- Node.js version 12+
- ffmpeg
- EMail: [Sendgrid](https://sendgrid.com/en-us) via API key

## Description

Samrómur aims to collect icelandic voice data which can be used to train voice-recognition software. Data collected via Samrómur is GDPR compliant. The dataset consists of multiple wav files containing the voice clips and the corresponding written text files along with demographic data about the speakers. 

The application is written in Typescript and uses React to built the website. It has a frontend for the data collection and a backend for API calls and data storage.

## History
[Samromur v1](https://github.com/aime-island/raddvefur 'Raddvefur repository') was a fork from [Mozilla Common Voice](https://github.com/mozilla/common-voice/ 'Mozilla Common Voice repository').
This project (Samromur v2) is instead build from the ground up but it is greatly influenced by Mozilla Common Voice.

## Technologies
* Next.js - The minimalistic framework for server-rendered React applications.
* next-pwa - A zero config Progressive Web App (PWA) plugin for Next.js
* jwt - User authentication and sessions with jsonwebtokens
* i18n - Internationalization framework.
* Typescript - Superset of JavaScript which primarily provides optional static typing, classes and interfaces.
* Redux - A predictable state container for JavaScript applications.
* typesafe-actions - Typesafe utilities designed to reduce types verbosity and complexity in Redux Architecture.
* Babel - The compiler for next generation JavaScript.
* Styled Components - Style components directly using template literals.

## Development

**Note:** This project uses [prettier](https://prettier.io/ 'Prettier Home Page'), an opinionated code formatter, to automatically format the code for a uniform codeset. It is warmly recommended to use the prettier plugin for the IDE you are using.

### *Configuration*
You will need to populate two configuration files **config.json** and **database.json**. 2 sample files are included in the root directory of the project: [sample-config.json](sample-config.json) and [sample-database.json](sample-database.json).
* The file **config.json** includes setup for the Database, Server port, S3 bucket and Email server.
* The file **database.json** is necessary for database migrations to work but should include similar data as the database in **config.json**.

Please refer to the sample versions of these files to analyze its structure. You should be familiar with setting up The structure of these files can be found in the corresponding sample versions.

### *S3*
The application uses S3 buckets for clip and metadata storage. If you are setting this project up from scratch you will need to setup your own S3 instance. For more information about how to do that visit the [AWS docs](https://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html 'Creating a S3 bucket').

### *Database*
After you have installed MySQL you will need to setup a database. If you are setting this project up from scratch you will need to setup your own database instance and root user. The database migration tool will then create the necessary tables and columns for you when you start up the application for the first time.

### *Sendgrid*
You need to have a Sendgrid account and an API key to send emails from the application. You can find more information about how to set up Sendgrid [here](https://sendgrid.com/docs/for-developers/sending-email/api-getting-started/ 'Sendgrid API getting started').

### *Setup*
* Clone the project
* Create and populate **config.json** and **database.json**. 
* Run the following commands:
```
npm install
npm run dev
```
* Done! Happy coding.

**Please note:** PWA support is disabled in development
## Production
The only difference in setup between development and production is the npm commands to run.
Follow the development steps for **Requirements, Configuration, S3, Database** and **Setup** but instead run these commands.
* The start command injects *NODE_ENV=production* on the fly and there is a separate command for starting on Windows because of a slightly different syntax doing that.

```
npm run build
npm run start | npm run start:windows
```

## License
[MIT License](/LICENSE)
