# Kontulari Weather: Technical Challenge

Welcome to Brazilian online accounting startup that is coming to the market to be a reference.

Kontulari is growing up and already has active customers! It was created by a large accounting company with more than 12 years in market. We want to impact lives of small companies, supporting them to organize finances and accounting of their business in a quick, practical and complete way. More about us: https://kontulari.com.br

Would you like to be part of this journey and help us build it?

Let's go!

## The Challenge

Let's take a look at the weather forecast? This challenge aims to add some features in **React.js** application, that consumes an API that we provided in the `server` subdirectory of this repository, to show the user the weather forecast for one or several locations.

You must implement these features:

- At least 5 more information to the WeatherCard.jsx
- Make the application responsive for at least two screens (smartphone and tablet)
- Create a light/dark mode (you can use a combinantion of these colors: coral (#FD657E ) blue(#002E46) green (#1DE9B6), white (#fff))

In addition, you must fix some bugs.

Others features will be welcome. We only will evaluate the front-end. Changes on `server` is not required.

We will evalute some criteria:

- Clean code
- Organization of commits
- Usability

## API

This API is a modified version from https://www.metaweather.com/. You should run the server on your localhost, according to the instructions posted below. The server will run on port 8080, and has a single endpoint, where you must pass as a parameter the location you want to fetch weather forecast data.

All locations supported can be found in https://www.metaweather.com/map/ or ./server/list.txt

Example URL with location:

`http://localhost:8080/?location=Salvador`

Example response: https://www.metaweather.com/api/location/455826/

#### Require

- Node.js (version 14.17 ou higher)
- Git (version 2.33 or higher)
- Yarn (version 1.22 or higher)

First of all, create a fork form this project, and clone for your local repository.

On subdirectory `server`, run `yarn` to downlload all the dependencies.
Then, run `yarn start`, will run in localhost, on port 8080.

On `client` directory, you can find all front-end for the challenge.

## Deadline

After receive, you have two days for conclude the challenge. Then, send a Pull Request to this repository link from the fork that was created.

## Attention

**This code is yours**. We will not use any code implemented in this challenge.

_Let's code!_
