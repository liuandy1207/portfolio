---
title: "Silent Night"
description: "IoT Smart Pillow"
cover: "./pillow.jpg"
startDate: "2024-02-18"
tags: ["embedded"]
skills: ["arduino", "esp32"]
featured: true
award: "Smart Home Theme Prize"
gallery:
  - type: "youtube"
    url: "https://youtu.be/ueHbpWJ-ifI"
  - type: "image"
    image: "pillow.jpg"
    caption: "Smart pillow prototype using cardboard as the pillow."
  - type: "video"
    src: "/videos/pillopw.mp4"
    caption: "Servo tests."
  - type: "image"
    image: "./win.PNG"
    caption: "Me at the closing ceremony with our team's winnings."
  - type: "image"
    image: "./prize.JPG"
    caption: "Amazon Echo Dots"
githubUrl: "https://github.com/liuandy1207/makeuoft2024"
devpostUrl: "https://devpost.com/software/pillowburgerking"
---

## Context
This was my team's submission to MakeUofT 2024, Canada's largest hardware hackathon, where we took home the Smart Home theme prize for this project.

## What It Does
It acts as a pillow that adjusts sleeping posture to keep the user upright using force sensors and servos (this is a demo build). It also has live dashboard also tracks other factors like temperature, humidity, and light.

## How It Works
In theory, the user lies down on the pillow (cardboard, in this demo). Force sensors placed across three sections detect where the user's weight is concentrated. The user starts centered, facing up, and if they tilt to one side, the corresponding left or right force sensor picks up the increase in pressure, and that side's servo raises to push the user back to center. Everything runs on an ESP32, programmed through the Arduino IDE.

## My Role
I worked on the wiring and implementation of the sensors (DHT, photoresistor, force sensors) and servos, and helped get data flowing to the dashboard. Though I couldn't get the dashboard fully working on my own initially.

## Challenges & Solutions
The biggest challenge was sending sensor values to the dashboard over WiFi. Part of the difficulty was that we were limited to a mobile hotspot, since the school's WiFi didn't allow this kind of device connection. I tried several approaches without success, but a teammate eventually solved it using the WebServer.h and ArduinoJson.h libraries. Unfortunately, the work two of my teammates did on the front end UX/UI had to go to waste because it wasn't directly compatible with our implementation of the live dashboard. 

## Results & Takeaways
This was my first hackathon and my first win. Our final pitch went okay, but the team was pretty disheartened about our chances. Delay after delay, most of us didn't want to stick around for the closing ceremony, which was understandable. But I held out hope and believed in us, and it paid off. 
We actually won, though my teammates had already left (which is why the photo only has me in it).

My main takeaway is to have an honest, grounded assessment of my own chances. Believing in myself when things are genuinely still winnable, without swinging into unfounded pessimism because things didn't go perfectly. 
