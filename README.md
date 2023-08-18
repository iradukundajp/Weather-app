# Get Albums

> A simple website allows the user to get albums.

## Table of contents

- [General info](#general-info)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features)
- [Status](#status)
- [Inspiration](#inspiration)
- [Contact](#contact)

## General info

> The objective of the project is to practice using get requests and apply separation of concerns.

## Screenshots

![Example screenshot](./assets/screenShot.png)

## Technologies

- JavaScript
- HTML5
- CSS3
- VSC code

## Setup

- clone the repo.
- `npm install`

## Code Examples

```js
const getAlbums = async () => {
  const url = 'https://jsonplaceholder.typicode.com/albums';
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch albums with status : ${res.status}`);
    }

    const albums = await res.json();
    return albums;
  } catch (err) {
    console.error(err);
  }
};

export default getAlbums;
```

## Features

List of features ready and Todos for future development

-
-
-

To-do list:

-
-

## Status

Project is: _in progress_
