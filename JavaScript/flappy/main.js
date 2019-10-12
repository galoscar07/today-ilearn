// Create our 'main' state that will contain the game
let previous_gap = 0;

var mainState = {
    preload: function() { 
        // Load the bird sprite
        game.load.image('bird', 'assets/bird.png');
        game.load.image('pipe', 'assets/pipe.png'); 
        game.load.audio('jump', 'assets/jump.wav'); 
    },
    create: function() { 
        // Change the background color of the game to blue
        game.stage.backgroundColor = '#71c5cf';

        // Group of pipes 
        this.pipes = game.add.group();

        // Add the jump sound
        this.jumpSound = game.add.audio('jump'); 

        // Set the physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);
    
        // Display the bird at the position x=100 and y=245
        this.bird = game.add.sprite(100, 300, 'bird');
    
        // Add physics to the bird
        // Needed for: movements, gravity, collisions, etc.
        game.physics.arcade.enable(this.bird);
    
        // Add gravity to the bird to make it fall
        this.bird.body.gravity.y = 900;  

        var spaceKey = game.input.keyboard.addKey(
            Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.jump, this);  
    
        // Call the 'jump' function when the spacekey is hit 
        var sprite1 = game.add.sprite(300, 800, 'mouse');
        var sprite2 = game.add.sprite(330, 800, 'mouse');
        var sprite3 = game.add.sprite(300, 830, 'mouse');
        var sprite4 = game.add.sprite(330, 830, 'mouse');
        var sprite5 = game.add.sprite(360, 800, 'mouse');
        var sprite6 = game.add.sprite(360, 830, 'mouse');
        sprite1.inputEnabled = true;
        sprite1.events.onInputDown.add(this.jump, this);
        sprite2.inputEnabled = true;
        sprite2.events.onInputDown.add(this.jump, this);
        sprite3.inputEnabled = true;
        sprite3.events.onInputDown.add(this.jump, this);
        sprite4.inputEnabled = true;
        sprite4.events.onInputDown.add(this.jump, this);
        sprite5.inputEnabled = true;
        sprite5.events.onInputDown.add(this.jump, this);
        sprite6.inputEnabled = true;
        sprite6.events.onInputDown.add(this.jump, this);
        game.input.mouse.capture = true;

        // Creation of the pipes at a interval
        this.timer = game.time.events.loop(1500, this.addRowOfPipes, this);
        
        this.score = 0;
        this.labelScore = game.add.text(20, 20, "Score: 0", 
                { font: "30px Arial", fill: "#ffffff" });   

         // Move the anchor to the left and downward
        this.bird.anchor.setTo(-0.2, 0.5); 
    },
    
    update: function() {
        // If the bird is out of the screen (too high or too low)
        // Call the 'restartGame' function
        if (this.bird.y < 0 || this.bird.y > 900)
            this.restartGame();

        game.physics.arcade.overlap(
            this.bird, this.pipes, this.hitPipe, null, this);  ;

        // Rotate the bird to give the impression of flying
        if (this.bird.angle < 20)
            this.bird.angle += 1; 
    },

    jump: function() {
        // In case the bird is dead don't let it jump
        if (this.bird.alive == false)
            return; 

        // Add a vertical velocity to the bird
        this.bird.body.velocity.y = -350;

        // Animation for the bird's flying
        // Create an animation on the bird
        var animation = game.add.tween(this.bird);

        // Change the angle of the bird to -20° in 100 milliseconds
        animation.to({angle: -20}, 100);

        // And start the animation
        animation.start(); 

        this.jumpSound.play(); 
    },
    
    // Restart the game
    restartGame: function() {
        // Start the 'main' state, which restarts the game
        game.state.start('main');
    },
    addOnePipe: function(x, y) {
        // Create a pipe at the position x and y
        var pipe = game.add.sprite(x, y, 'pipe');
    
        // Add the pipe to our previously created group
        this.pipes.add(pipe);
    
        // Enable physics on the pipe 
        game.physics.arcade.enable(pipe);
    
        // Add velocity to the pipe to make it move left
        pipe.body.velocity.x = -250; 
    
        // Automatically kill the pipe when it's no longer visible 
        pipe.checkWorldBounds = true;
        pipe.outOfBoundsKill = true;
    },
    addRowOfPipes: function() {
        // Randomly pick a number between 1 and 20
        // This will be the hole position
        var hole = Math.floor(Math.random() * 14);

        while (previous_gap - hole > 4 ) {
            var hole = Math.floor(Math.random() * 14);
        }
        previous_gap = hole
    
        // Add the 15 pipes 
        // With one big hole at position 'hole' and 'hole + 1'
        for (var i = 0; i < 14; i++)
            if (i != hole && i != hole + 1) 
                this.addOnePipe(700, i * 60 + 10);   
        
        // Mark everytime the user passed a level 
        this.score += 1;
        this.labelScore.text = "Score: " + this.score; 
    },
    hitPipe: function() {
        // If the bird has already hit a pipe, do nothing
        // It means the bird is already falling off the screen
        if (this.bird.alive == false)
            return;
    
        // Set the alive property of the bird to false
        this.bird.alive = false;
    
        // Prevent new pipes from appearing
        game.time.events.remove(this.timer);
    
        // Go through all the pipes, and stop their movement
        this.pipes.forEach(function(p){
            p.body.velocity.x = 0;
        }, this);
    }, 
};

// Initialize Phaser, and create a 400px by 490px game
var game = new Phaser.Game(900, 850);

// Add the 'mainState' and call it 'main'
game.state.add('main', mainState); 
document.addEventListener(cli)
