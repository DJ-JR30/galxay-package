function KamaPos() {
  var Positions = ['The Teaspoons','Suplex','Standing','Stand and Carry','Spread Eagle','Spoons','Southern Exposure','Sockets','Sitting Bull','Sitting','Side-rider','Side to Side','See-Saw','Screw','Scissors','Scarf','Redeo','Riding the Face','Rear Entry','Pump','Prison Guard','Pirate’s Bounty','Pile Driver','Pie in the Sky','Peepshow','Pearly Gates','Oral Therapy','Twisted Missionary','Mirror of Pleasure','Mastery','Lunges','Lotus','Licking the flag pole','Leg Glider','Lap dance','Kneeling','Jockey','Jelly Fish','Jack hammer','Intersextion','Head to to','Games on','Fusion','Frog leap','Forbidden fruit','Face off','Ear muffs','Drive through','Down under'];
  
  let pickedPos = Positions[Math.floor(Math.random() * Positions.length)];
  
  return pickedPos;
}

module.exports.KamaPos = KamaPos;