let magicians: string[] = ["Penn & Teller", "Derren Brown", "Dai Vernon", "Lance Burton", "Black Herman"];


function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

show_magicians(magicians); // shows each magician

function make_great(magicians: string[]) {
  return magicians.map( magician => `${magician} the great`);
}

magicians = make_great(magicians);

show_magicians(magicians); // update each magician by add "the great" 


