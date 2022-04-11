function showScore(score){
            let ret = "";

            for (let i = 0; i < score; i++) {
                ret += "<span class='icon-wrapper'><i class='fa-solid fa-star'></i></span>";
            }
            return ret;
        }