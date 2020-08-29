<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->

<br />
<p align="center">
  <a href="git@github.com:alishabab/bheem-rpg.git">
    <p align="center"> <img src="https://user-images.githubusercontent.com/33728992/91640075-a37a7080-ea38-11ea-8b3d-d89850831a8e.PNG" alt="Bheem RPG" width="600" height="400"> </p>
  </a>

  <h2 align="center">Bheem RPG Game</h2>
  <h3 align="center">A RPG Game developed in JavaScript with Phaser library </h3>

  <p align="center">
    <a href="https://github.com/alishabab/bheem-rpg/issues">Report Bug</a>
    · 
    <a href="https://github.com/alishabab/bheem-rpg/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
* [Installation](#installation)
* [Control's](#CONTROL'S)
* [Live Link](#Live-Link)
* [Game Design](#game-design)
* [Game Play](#game-play)
* [Built With](#built-with)
* [Potential Future Updates](#potential-future-updates)
* [Contact](#Authors)
* [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->
## About The Project

In this project I have built a 2D RPG game in JavaScript with the help of Phaser libraray. The main character of game is Bheem, which is inspired by an Indian cartoon character.

Bheem has to collect chests and beat the enemies to increse the coins. An external api service is used to store the player names and scores. Top 5 players are displayed in game leaderboard.


<!-- CONTROL'S -->

## How to play

### Control's

- (←) left arrow key => Move left
- (→) right arrow key => Move right
- (↑) up arrow key => Mpve up
- (↓) down arrow key => Move down
- (Space) key => Attack enemy

<p align="center"> <img src="https://user-images.githubusercontent.com/33728992/91640795-bba0be80-ea3d-11ea-91b5-90c92d46f876.gif" alt="Bheem RPG Game" width="100%"> </p>

<!-- Live Link  -->

## Live Link

[Click here](https://alishabab.tech/bheem-rpg/)

<!-- INSTALLATION -->

## Installation

To run 'Bheem RPG' locally, clone the repository, navigate to it's directory.

#### Follow these commands step by step:-

```bash
git@github.com:alishabab/bheem-rpg.git
cd bheem-rpg
npm install
npm start
```

Now go to [localhost:8000](http://localhost:8000) in your browser.

<!-- BUILD WITH -->

## Built With

- HTML/CSS
- Phaser 3
- Webpack
- Eslint
- Stylelint
- Jest
- ES6
- NPM
- Github
- Github pages for deployment
- Leaderboard API service

<!-- Game Design -->

## Game Design

The game uses high-quality sprites to bring all scenes to life. User can expect well-designed animations and map textures. I used [Tiled](https://www.mapeditor.org/) to design the game map.

### Bheem

<div>
<div style="width: 200px">
<img style="float:left" width="80" height="100" src="https://user-images.githubusercontent.com/33728992/91641014-4930de00-ea3f-11ea-94b6-3305508728af.png">
</div>
- Role: Main Character </br>
- Health: 10 </br>
- Damage: 2 </br>
</div>


<!-- game play -->

## Game Play 

### Preload Screen

![preload](https://user-images.githubusercontent.com/33728992/91641051-8f863d00-ea3f-11ea-8e17-f30addee5354.PNG)

### Title Screen

![title](https://user-images.githubusercontent.com/33728992/91641084-c3f9f900-ea3f-11ea-9c08-f92058a12530.PNG)


### Game Play

<p align="center"> <img src="https://user-images.githubusercontent.com/33728992/91641137-10ddcf80-ea40-11ea-81cd-3cbaa359834c.PNG" alt="Bheem RPG Game" width="100%"> </p>


### Leaderboard 

![leaderboard](https://user-images.githubusercontent.com/33728992/91641244-b1cc8a80-ea40-11ea-96f8-fd965e2306e1.PNG)

<!-- Game development -->

## Game development

| DAYS  |              OBJECTIVE               |                                                                                                                                                                                  DESCRIPTION                                                                                                                                                                                   |                                                                                                                                 OUTCOME                                                                                                                                  | STATUS  |
| :---- | :----------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----: |
| Day 1 |        Learning Phaser         |                                                                                                                 I read the project requirements and started learning about Phaser library.                                                                      |                                                                                      By the end of the day, I had good understanding of Phaser.                                                                      | &#9745; |
| Day 2 |             Game Design             |              During the 1st half of day, I continue learned the phaser library. In the 2nd half I prepared the basic game template and the design of game.               |                                            By the end of day I had designed the game and basic UI for game.                                             | &#9745; |
| Day 3 |          Game Development            | I spent the entire day to write the actual code for game and logic|                                                      By the end of the day, I had developed the interactive game play with some bugs.                                                       | &#9745; |
| Day 4 |   Game Development and Testing   |                                                I spent this day to fix the bugs in gameplay, added leaderboard api and wrote unit test cases.                                                 | By the end of the day, I had an Interactive game play. | &#9745; |

<!-- potential future updates -->

# Potential Future Updates

- Add multiplayer functionality
- Saving the coins on server 
- Touch controls
- User authentication

<!-- CONTACT -->
## Authors

👤 **Shabab Ali** 
    
- [LinkedIn](https://www.linkedin.com/in/shababali/)
- [GitHub](https://github.com/alishabab)
- [Email](shababsaifi@gmail.com)

## Show your support

Give a ⭐️ if you like this project!

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/alishabab/bheem-rpg.svg?style=flat-square
[contributors-url]: https://github.com/alishabab/bheem-rpg/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/alishabab/bheem-rpg.svg?style=flat-square
[forks-url]: https://github.com/alishabab/bheem-rpg/network/members
[stars-shield]: https://img.shields.io/github/stars/alishabab/bheem-rpg.svg?style=flat-square
[stars-url]: https://github.com/alishabab/bheem-rpg/stargazers
[issues-shield]: https://img.shields.io/github/issues/alishabab/bheem-rpg.svg?style=flat-square
[issues-url]: https://github.com/alishabab/bheem-rpg/issues

## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.