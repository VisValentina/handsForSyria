# handsForSyria

## Description
Inspired by the work of Bryan James for [Species in Pieces](http://www.species-in-pieces.com/#),
Hands For Syria was a proof-of-concept of how to combine transforming CSS clip-paths with their own background image.

## Concept
Hand gestures are used to represent the Syrian Refugee crisis. In four short scenes,
the hands tell the story of the transition between beauty - laughter - violence - despair.

## Technical Details
* 74 pieces make up each hand shape. Each individual piece has 4 points used to create its shape. For clip-path transitions to work properly,
each piece must have the exact same number of points.
* Each touching point was tracked so that edges lined up exactly. This was a very tedious step - but it was the only work-around found to remove gaps between pieces. As of writing, clip-paths with background images do not allow for borders to hide gaps.
* Percentages were used to calculate the position coordinates.
* Scene Array consists of every single coordinate, which is then looped through in the changeScene function

A collaboration between myself and [Armand](https://github.com/apaquino)
