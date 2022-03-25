  do{
  
  var human = 0;

    var cpu = 0;

    do {
        
        var rand = Math.floor(Math.random() * 10) + 1

        var cpu = cpu + rand

        alert(`the cpu got ${cpu}. Please press "enter" to continue`)



    } while( cpu < 16 )

    do {
        
        var rand = Math.floor(Math.random() * 10) + 1
        
        var human = human + rand

        alert(`You got ${human} and the cpu got ${cpu}. Please press "enter" to continue`)

        

    } while( human < 16 )

    if (( human > cpu ) && (cpu <= 20) && (human <= 20)) {

    alert(`you win`)

    }

    else if (( human < cpu ) && (cpu <= 20) && (human <= 20)) {

        alert(`you lose`)
        
    }

    else if (( human > cpu ) && (cpu <= 20) && (human > 20)) {

        alert(`you lose`)
        
    }

    else if (( human < cpu ) && (cpu > 20) && (human <= 20)) {

        alert(`you win`)
        
    }

    else if (( human == cpu ) && (cpu == 20) && (human == 20)) {

        alert(`you tied`)
        
    }

    else if (( human > cpu ) && (cpu > 20) && (human > 20)) {

        alert(`you tied`)
        
    }

    else if (( human < cpu ) && (cpu > 20) && (human > 20)) {

        alert(`you both lose`)
        
    }

    var again = prompt(`If you would like to play again, please press "Y". If you would not like to play again, please press "N".`) 

} while(again == "y" && again != "n")