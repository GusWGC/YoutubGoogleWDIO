# YoutubGoogleWDIO

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd YoutubGoogleWDIO
npm install
```

## Run Instructions

To execute tests, use the following command:

```bash
npx wdio run wdio.conf.ts
```

To run a specific feature file (example: youtube.feature):

```bash
npx wdio run wdio.conf.ts --spec features/youtube.feature
```

## Project Structure

- `features/` - Contains feature files for Cucumber tests
- `pageobjects/` - Page Object Model files
- `step-definitions/` - Step definitions for Cucumber
- `wdio.conf.ts` - WebdriverIO configuration file

## Notes

- Make sure Chrome or another supported browser is installed.
- You can customize capabilities and settings in `wdio.conf.ts`.

---
For more information, see [WebdriverIO Documentation](https://webdriver.io/docs/gettingstarted/).