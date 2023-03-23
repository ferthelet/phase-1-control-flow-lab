function scuberGreetingForFeet(feet){
  // Write your code here! using if
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (feet <= 2000) {
    return 'That will be twenty bucks.';
  } else if (feet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  // Write your code here! using ternary
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  // Write your code here! using switch
  switch(tip) {
    case 'generous' :
      return 'Thank you so much.';
    case 'not as generous' :
      return 'Thank you.';
    default : return 'Bye.';
  }
}