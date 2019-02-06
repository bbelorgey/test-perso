let context;

function freqPlay() {
  context = new AudioContext()
  let o = context.createOscillator()
  let g = context.createGain()
  o.connect(g)
  g.connect(context.destination)
  o.start(0)

  var frequency = 440.0
  o.frequency.value = frequency

}

function freqStop() {
  g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.04)
}

// console.log(freqPlay());
