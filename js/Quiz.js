class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here
    

    //write code to show a heading for showing the result of Quiz
    textSize(30);
    text("Game Start",120,100);

    //call getContestantInfo( ) here
    contestant.getContestantInfo();

    //write condition to check if contestantInfor is not undefined
    if(allContestants!==undefined){
    fill("Blue");
    textSize(20);
       //write code to add a note here  
      text("*Note : Contestant who answered correct are highlighted in green color!",130,230);
    }
       //write code to highlight contest who answered correctly
       for(var plr in allContestants){
         var correctAns = "2";
        if(correctAns === allContestants[plr].answer)
        fill("green");
        else fill("red");
        display_position+=20
        textSize(15);
        text(allContestants[plr].name+": "+allContestants[plr].distance,120,display_position)
      }
   
    
  }

}
