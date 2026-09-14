---
title: "Yours, Eventually"
description: "A short one-liner about it."
cover: "./map.png"
startDate: "2026-08-08"
tags: ["web", "design"]
skills: ["javascript", "supabase", "openai"]
featured: true
award: "Best Use of Reve"
gallery:
  - type: "image"
    image: "./map.png"
    caption: "Map page. Legend for letter colors in the bottom left."
  - type: "image"
    image: "./write.png"
    caption: "Writing page. OpenAI moderation API flags illicit messages in a 3-tier system."
  - type: "image"
    image: "pocket.png"
    caption: "Pocket page. Shows the letters you currently hold and allows you to drop them."
  - type: "image"
    image: "dash.png"
    caption: "Dashboard page. For each anonymous user, they can see the letters they have written, view their stats, and see the journeys of the letters they have written (see next)."
  - type: "image"
    image: "journey.png"
    caption: "Sample journey of a letter."
  - type: "image"
    image: "writereact.png"
    caption: "Looking at a letter not authored by the user themselves. Non-authors can comment, react, and drop it at their location."
demoUrl: "https://summerhacks2026.onrender.com"
githubUrl: "https://github.com/liuandy1207/summerhacks2026"
devpostUrl: "https://devpost.com/software/yours-eventually"
---

## Context
This is a partner and me's project for SummerHacks2026, an outdoor hackathon in Toronto where we won Best Use of Reve, an AI visual generator. The theme of the hackathon was to create digital artifacts in the world that evolve over time. 

## What It Does
Users can write anonymous letters to strangers and drop them on the map in real-life. Other users can pick up the letters, leave a comment or a reaction, and pass them on to a new location. Users can hold up to 3 letters in their pockets (their own and those of others), and letters get dropped on a clock so you can't hold onto them forever. Authors can keep track of the journeys of their letters from their personal dash page where they can also see their total stats. 

## How It Works
The site is entirely coded in vanilla JS, HTML, and CSS. OpenAI's moderation API is used to flag illicit messages before they get put up in a 3-tier system: messages below the threshold pass, messages around the threshold are flagged for review, and messages above the threshold are disallowed. Furthermore, all of the data for letters is stored on Supabase, so unfortunately it goes offline when unused. Additionally, there is a "fog-of-war" feature that prevents you from seeing letters until they are within 2km and prevents you from picking them up until you are within 50 m. In the demo, you can click to move around the map, but in a final product you would have to move there physically. 

## My Role
I worked on the front-end, back-end, and the overall idea while my partner handled design aspects. 

## Challenges & Solutions
This process went incredibly smoothly once we had our idea, but there was a time where we felt like we had no more ideas to improve it. It was also difficult to get a lot of people to leave real messages to showcase during demo. 

## Results & Takeaway
My main takeaway is how quick and easy it is nowadays to scaffold an MVP for basically anything. 

Note: the demo url will fail because the supabase is offline.