const Choice = [
  { name: "papel", emoji: "📃" },
  { name: "piedra", emoji: "🪨" },
  { name: "tijera", emoji: "✂️" },
];

const randomChoice = Choice[Math.floor(Math.random() * Choice.length)];
console.log(randomChoice.emoji);

export { Choice, randomChoice };
