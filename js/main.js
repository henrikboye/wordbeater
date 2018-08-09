window.addEventListener('load', init)

// Globals

// Available Levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 1
}

// To change level
const currentLevel = levels.medium

let time = currentLevel
let score = 0
let isPlaying

// DOM Elements
const wordInput = document.querySelector('#word-input')
const currentWord = document.querySelector('#current-word')
const scoreDisplay = document.querySelector('#score')
const timeDisplay = document.querySelector('#time')
const message = document.querySelector('#message')
const seconds = document.querySelector('#seconds')

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
]

// Initialize Game
function init () {
  // Load word from array
  showWord(words)
}

function showWord (words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length)
  // Output random word
  currentWord.innerHTML = words[randIndex]
}

