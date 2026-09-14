---
title: "BreadCrumb"
description: "CNN Component Detector"
cover: "./cover.png"
startDate: "2026-03"
endDate: "2026-04"
tags: ["machine learning"]
skills: ["python", "pytorch"]
featured: true
gallery:
  - type: "pdf"
    src: "/docs/bread.pdf"
    caption: "Please read the report."
githubUrl: "https://github.com/liuandy1207/BreadCrumb/tree/main"
---

## What It Does
Counts and classifies breadboard components from an image. 

## How It Works
I gathered and labelled my own dataset to train a CNN classfier for breadboard components pre-trained on ImageNet. Each image is split into patches that the classifier runs on. Bounding boxes are drawn and overlapping ones are merged to account for large components. 

## Challenges & Solutions
Since many components can be on a single image in close proximity to each other, it was quite difficult to get accurate bounding boxes and patch sizes so that large components weren't overcounted and small components undercounted. The solution was to try different patch sizes to see which ones could capture the small components well enough such that those that were close to each other would be counted seperately. Then to merge patches with overlapping bounding boxes for the bigger components so that they were not double counted. 

## Results & Takeaways
I learned to always match the criterion to the actual use case and not always default to classification accuracy. 