
       function showSentiment(sentiment){

        let ret = "";


            if(sentiment === "positive"){
            ret += "<span class='icon-wrapper'><i class='fa-solid fa-face-smile'></i></span>";
            }

            if(sentiment === "negative"){
            ret += "<span class='icon-wrapper'><i class='fa-solid fa-face-frown'></i></span>";
            }

            if(sentiment === "neutral"){
            ret += "<span class='icon-wrapper'><i class='fa-solid fa-face-meh'></i></span>";
            }


        

        return ret;      

       }
