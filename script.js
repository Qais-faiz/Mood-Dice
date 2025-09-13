(() => {
  const moods = [
    { title: "Happy 😀", desc: "You're full of joy and sunshine!", color: "#facc15" },
    { title: "Chill 😌", desc: "Take it slow and enjoy the vibes.", color: "#22d3ee" },
    { title: "Focused 🎯", desc: "Laser sharp — time to crush tasks!", color: "#4ade80" },
    { title: "Silly 🤪", desc: "Laugh, joke, and goof around.", color: "#f472b6" },
    { title: "Adventurous 🏔️", desc: "Try something bold today!", color: "#f97316" },
    { title: "Calm 🌙", desc: "Peaceful and relaxed, like the night sky.", color: "#818cf8" },
    { title: "Curious 🕵️", desc: "Ask questions, explore, and learn something new!", color: "#38bdf8" },
  { title: "Creative 🎨", desc: "Your imagination is bursting with colors and ideas!", color: "#ec4899" },
  { title: "Energetic ⚡", desc: "You're buzzing with power and excitement!", color: "#facc15" },
  { title: "Romantic 💖", desc: "Love is in the air — share some kindness.", color: "#ef4444" },
  { title: "Playful 🧸", desc: "It’s time for games, fun, and laughter.", color: "#fb7185" },
  { title: "Dreamy ☁️", desc: "Lost in thoughts and fantasies.", color: "#a78bfa" },
  { title: "Motivated 🚀", desc: "Nothing can stop you today — push forward!", color: "#10b981" },
  { title: "Confident 🦁", desc: "Stand tall, speak boldly, and shine.", color: "#f59e0b" },
  { title: "Grateful 🙏", desc: "Appreciating the little things makes life beautiful.", color: "#84cc16" },
  { title: "Mysterious 🕶️", desc: "Not everything needs to be explained.", color: "#0f766e" },
  { title: "Funny 😂", desc: "Everything is a reason to laugh today.", color: "#eab308" },
  { title: "Lazy 🛋️", desc: "Sometimes doing nothing is the best thing.", color: "#9ca3af" },
  { title: "Excited 🎉", desc: "Something fun is just around the corner!", color: "#f43f5e" },
  { title: "Brave 🦸", desc: "Face challenges head-on without fear.", color: "#2563eb" },
  { title: "Hopeful 🌱", desc: "Better days are on the way — believe in it.", color: "#16a34a" },
   { title: "Zen 🪷", desc: "Centered, balanced, at peace with yourself.", color: "#1e293b" },
  { title: "Spooky 👻", desc: "Mysterious chills in the air.", color: "#0f172a" },
  { title: "Rebellious 🧨", desc: "Break the rules and make your own path.", color: "#7f1d1d" },
  { title: "Cozy 🧣", desc: "Warm blanket, tea, and comfort vibes.", color: "#292524" },
  { title: "Lonely 🥀", desc: "Quiet moments with yourself.", color: "#374151" },
  { title: "Magical ✨", desc: "Anything feels possible right now.", color: "#1e1b4b" },
  { title: "Savage 🐺", desc: "Fearless and bold, no apologies.", color: "#111827" },
  { title: "Nostalgic 📼", desc: "Memories of the good old times.", color: "#3f3f46" },
  { title: "Sleepy 😴", desc: "Heavy eyes, slow thoughts, ready to rest.", color: "#1e293b" },
  { title: "Lucky 🍀", desc: "The universe is on your side today.", color: "#065f46" },
  { title: "Moody 🌧️", desc: "Clouds hover above, but beauty remains.", color: "#334155" },
  { title: "Royal 👑", desc: "Carry yourself with pride and elegance.", color: "#4c1d95" },
  { title: "Epic 🗡️", desc: "Today feels like an adventure quest.", color: "#1e293b" },
  { title: "Dark 🌑", desc: "Silent, deep, and powerful energy.", color: "#0a0a0a" },
  { title: "Cheerful 🌈", desc: "Bright colors and high spirits.", color: "#6d28d9" },
  { title: "Serious 🧐", desc: "Focused and thoughtful decisions.", color: "#1e293b" },
  { title: "Fiery 🔥", desc: "Passion and determination burn within.", color: "#b91c1c" },
  { title: "Geeky 🤓", desc: "Excited about learning and tech stuff!", color: "#312e81" },
  { title: "Wild 🐒", desc: "No rules, just chaos and fun!", color: "#14532d" },
  { title: "Ghostly 🕯️", desc: "Soft and eerie presence.", color: "#1f2937" },
  { title: "Mellow 🍵", desc: "Smooth and laid-back like green tea.", color: "#374151" },
  { title: "Sad 😢", desc: "It’s okay to feel blue sometimes.", color: "#1e40af" },
  { title: "Witty 🦊", desc: "Sharp humor and clever thoughts.", color: "#78350f" },
  { title: "Romantic Dark 🌹", desc: "Passionate and mysterious love.", color: "#881337" },
  { title: "Determined 🛡️", desc: "Strong willpower to keep moving.", color: "#1e3a8a" },
  { title: "Lost 🧭", desc: "Wandering without direction.", color: "#1e293b" },
  { title: "Haunted 🕸️", desc: "A spooky aura surrounds you.", color: "#111827" },
  { title: "Blessed 🌸", desc: "Grateful and content with life’s gifts.", color: "#14532d" },
  { title: "Chaotic 🎢", desc: "Everything is crazy, but exciting!", color: "#27272a" },
  { title: "Wise 🦉", desc: "Calm and full of insight.", color: "#334155" },
  ];

  const rollBtn = document.getElementById("rollBtn");
  const copyBtn = document.getElementById("copyMood");
  const dice = document.getElementById("dice");
  const moodTitle = document.getElementById("moodTitle");
  const moodDesc = document.getElementById("moodDesc");

  function getRandomMood() {
    return moods[Math.floor(Math.random() * moods.length)];
  }

  function rollDice() {
    dice.textContent = "🎲";
    const mood = getRandomMood();

    // animate dice
    dice.animate(
      [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
      { duration: 600 }
    );

    setTimeout(() => {
      dice.textContent = mood.title.split(" ")[1]; // emoji only
      moodTitle.textContent = mood.title;
      moodDesc.textContent = mood.desc;
      document.body.style.background = mood.color;
    }, 600);
  }

  async function copyMood() {
    const text = `${moodTitle.textContent} — ${moodDesc.textContent}`;
    try {
      await navigator.clipboard.writeText(text);
      copyBtn.textContent = "Copied!";
      setTimeout(() => (copyBtn.textContent = "Copy Mood"), 1500);
    } catch (e) {
      copyBtn.textContent = "Failed";
    }
  }

  rollBtn.addEventListener("click", rollDice);
  copyBtn.addEventListener("click", copyMood);
})();
