(function($) {

    $(document).ready(function() {

        data_Hash = new HashData({1:"cow", 2:"tiger", 3:"cat", 4:"monkey", 5:"horse", 6:"giraffe", 7:"hen", 8:"zebra", 9:"dolphin", 10:"pig", 11:"camel", 12:"crab", 13:"bear", 14:"sheep", 15:"goat", 16:"turtle", 17:"fox", 18:"walrus", 19:"elephant", 20:"dog"});
        correct_score = new HashData({1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0, 10:0, 11:0, 12:0, 13:0, 14:0, 15:0, 16:0, 17:0, 18:0, 19:0, 20:0});
        wrong_score = new HashData({1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0, 10:0, 11:0, 12:0, 13:0, 14:0, 15:0, 16:0, 17:0, 18:0, 19:0, 20:0});
        
        try {
            var recognition = new webkitSpeechRecognition();
        } catch(e) {
            var recognition = Object;
        }
        recognition.continuous = true;
        recognition.interimResults = true;
        
        var interimResult = '';
        
        $('#instructions').click(function(){
            sweetAlert("Instructions","1. Click on the image\n2. Say what the image is");
        });
        $('#scoring').click(function(){
            var score_text = "";
            for(var i = 1 ; i < 21 ; i++){
                score_text+=data_Hash.getText(i) + ": [# correct = " + correct_score.getText(i)+"] [# wrong = " + wrong_score.getText(i)+"] \n";
            }
            sweetAlert("Score",score_text);
        });


        $('.dog-mic').click(function(){  //data_Hash is the object created form the Hasmap class
            startRecognition();
        });

   

        var startRecognition = function() {
     
            recognition.start();
        };

        

       recognition.onresult = function (event) {
    for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
if(event.results[i][0].transcript == data_Hash.getText(currPic) || event.results[i][0].transcript == (data_Hash.getText(currPic) + " ") || event.results[i][0].transcript == (" " + data_Hash.getText(currPic))){
               
                correct_score.setText(currPic, correct_score.getText(currPic) + 1);
                sweetAlert("Good job!", "That was correct", "success");
                }else{
               
              
                wrong_score.setText(currPic, wrong_score.getText(currPic) + 1);
                sweetAlert("Oops!", "That was incorrect", "error");
                 var msg = new SpeechSynthesisUtterance(data_Hash.getText(currPic));
                
                 window.speechSynthesis.speak(msg);
              
               
           }
        }
    }
};

       
    });
})(jQuery);