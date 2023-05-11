# [Get to the Code](https://mervedespaillat.github.io/get-to-the-code/)
:tired_face:
    Get ready to help a lazy and tired coder in this fun and exciting game! 
    The character needs to reach their desk and laptop to start coding, but the journey won't be easy. Along the way, there are distractions like Instagram, Facebook, and Twitter that can slow them down or even stop them in their tracks. The character will need to avoid these distractions by jumping over them or destroying them to make their way to the finish line. But don't worry, there are power-ups like coffee to help the character stay energized and earn extra points. With simple arrow key movements and space bar and a fun and engaging environment, this game will keep you entertained for hours as you help the character beat the distractions and reach their goal.


## Functionality & MVPs

1. Control a character using arrow keys and space jump over or destroy distractions like social media icons, emails, and cute cat videos.
2. Collect power-ups like coffee and energy bars to boost their energy levels and earn extra points.
3. Score points for collecting power-ups and avoiding distractions, with a high score leaderboard to keep track of their progress.
4. Enjoy an engaging game environment, with background music and sound effects that make the game more fun and immersive.

## Wireframe

![Image 5-5-23 at 12 06 AM](https://user-images.githubusercontent.com/102131320/236465297-d768a079-c8a4-4616-943f-ffbf83dbecae.jpg)
![gameGif](https://github.com/mervedespaillat/get-to-the-code/assets/102131320/61ed9cde-ac79-494d-b943-81e90b7de460) 
![chrome-capture-2023-4-11 (1)](https://github.com/mervedespaillat/get-to-the-code/assets/102131320/38287860-f137-451e-8582-a7fd5d61c635)



## Technologies and Libraries:

-Javascript
-Canvas
-HTML
-CSS   

## How to collect coffees
  drinkCoffee() {
    for (let i = 0; i < this.powers.length; i++) {
      const coffee = this.powers[i];
      if (
        this.face.dimensions.y + this.face.height ===
          coffee.y + coffee.height &&
        this.face.dimensions.x + this.face.width / 2 > coffee.x &&
        this.face.dimensions.x + this.face.width / 2 < coffee.x + coffee.width
      ) {
        this.powers = this.powers.slice(0, i).concat(this.powers.slice(i + 1));
        this.score += 50;
      }
    }
  }
