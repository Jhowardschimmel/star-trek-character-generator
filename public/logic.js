$(document).ready(function() {
    $("#stat-button").on("click", function() {
        let randomStat = "";
        const dieRoller = {
        rollAbility() {
            const abilityArray = [];
            for (let i = 0; i < 4; i++) {
              let roll = Math.floor(Math.random() * 6) + 1;
              abilityArray.push(roll);
            }
            abilityArray.sort().shift();
            const ability = abilityArray.reduce((a, b) => a + b);
            console.log(ability);
            return ability;
          }
        }

        randomStat = dieRoller.rollAbility();
        $("#random-stat").empty().prepend(randomStat);

        
           
        
        
    })
});