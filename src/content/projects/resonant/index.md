---
title: "Resonant Evil"
description: "Tactile Horror Game"
cover: "./cover.jpg"
startDate: "2025-02-16"
tags: ["embedded"]
skills: ["esp32", "arduino"]
featured: true
award: "Video Games Theme Prize"
gallery:
  - type: "youtube"
    url: "https://youtu.be/NuV8AJQIE48"
githubUrl: "https://github.com/liuandy1207/MakeUofT2025"
devpostUrl: "https://devpost.com/software/resonance-evil"
---

## Context
This is my project for MakeUofT 2025, Canada's largest hardware hackathon, which won the Video Games theme prize. I worked in a team of two as opposed to the typical team of four. 

## Gameplay
You are in a maze, a maze with a monster! But you cannot see the maze, you must navigate through sound. Luckily, the monster is also blind. You will hear a periodic noise whose frequency differs based on how close/far the monster is. If the monster is on you, then you have to hold your breath by pressing in the joystick and waiting for it to pass. Navigate through the maze, but be careful, because if you run into a wall, you'll make a noise and alert the monster!

## How It Works
Each level is randomly generated using BFS to guarantee solvability. In the code, the monster is always aware of where you are, so when you make a noise, it can use BFS again to find the shortest path to you and take a step in that direction. Otherwise, it moves randomly. Furthermore, each noise has an intensity that dictates how much through the maze it perforates, so the monster only uses the information that you are close when you make a noise close enough to ti. An ESP32 handles the processing, a piezo buzzer handle the noise, joystick for movement, and a tissue box was used to enclosed the device in a presentable manner. 

## My Role
I came up with the premise and the gameplay mechanics. I wired the hardware and designed the container. My partner wrote the algorithms for monster movement. 

## Challenges & Solutions
This project went rather smoothly. The only small challenge was finding a way to contain the device so that the joystick could move and take some force without breaking the box it was in, but I found a convienent way to pack it all together to achieve this. 

## Results & Takeaways
Our game was well received, winning us the Video Game Theme Prize for being something rather unique that makes good use of being hardware based. People especially liked the name I came up with.

I had a good time working on something much fun and creative as opposed to something more practical. I'd like to do more projects like this one in the future. 