import chess_1 from '../img/chess_1.jpg'
import maze_gif from '../img/maze_gif.gif'
import Meme from '../img/Meme.JPG'
import snake_gif from '../img/snake_gif.gif'
import reddit_wallpaper from '../img/reddit_wallpaper.jpg'
import project_1 from '../img/project_1.jpg'

export default [
    {
        title:'Maze + A*',
        points: ['🧩 Generators random mazes','🖥️ Uses pygame to display and interact with the maze','🖱️ Can draw (left-click) and erase (right-click) on the maze','⌨️ Pressing Space will automatically solve the maze using A* algorithm'],
        text:'Generators random mazes, allows users to draw on the board or press space to solve the maze using a popular algorithm called A*',
        tools:['Python','Pygame'],
        image: maze_gif,
        github:'https://github.com/FarsBein/Maze_A_Star'
    },
    {
        title:'Snake Game',
        points: ['🐍 a Snake game built in react using react hooks','🏃‍♂️ The game speeds up as you eat more apples','☠️ You die if you touch the edges','🔳 Double tap on the Play button to play'],
        text:'OG video game where the player maneuvers a line which grows in length, with the line itself and the walls  being a primary obstacle',
        tools:['ReactJs','Javascript','CSS'],
        image: snake_gif,
        github:'https://github.com/FarsBein/snake-js'
    },
    {
        title:'Chess Game',
        points: ['👌 Drag and drop to move pieces on pc','👇 Touch functionalities for mobile',],
        text:'A two-player strategy board game with 64 squares arranged in an 8×8 grid. UI with no chess rules logic',
        tools:['ReactJs','Javascript','CSS'],
        image: chess_1,
        github:'https://github.com/FarsBein/Maze_A_Star'
    },
    {
        title:'Random Meme Maker',
        points: ['⚛️ Built using react classes','🖼️ Fetches random funny images from memeAPI','📱 Mobile friendly'],
        text:'Meme maker that fitches random images from memeAPI. Images can be customized by captioning them with top and bottom texts',
        tools:['ReactJs','Javascript'],
        image: Meme,
        github:'https://github.com/FarsBein/Maze_A_Star'
    },
    {
        title:'TeemUp Hub',
        points: ['🔐 Registration and authentication functionalities','💬 Chat rooms and past conversation page','✍️ Can create and share new posts'],
        text:'online advertising service that operates as a centralized network of online communities for posting cooperation requests',
        tools:['ReactJs','Javascript','CSS'],
        image: project_1,
        github:'https://github.com/FarsBein/Maze_A_Star'
    },
    {
        title:'Reddit Api wallpaper',
        points: ['⛏️ Fetches the hottest images in wallpaper and wallpapers subreddit.','🖥️ Changes background image automatically'],
        text:'A simple script that changes the desktop wallpaper  to the hottest image on either wallpaper or wallpapers subreddit. Currently it only works on widows',
        tools:['Python'],
        image: reddit_wallpaper,
        github:'https://github.com/FarsBein/Maze_A_Star'
    }
]