function showLikes(likes){

    let ret = "";

    for (let i = 0; i < likes; i++) {
        ret += "<span class='icon-wrapper'><i class='fa-solid fa-thumbs-up'></i></span>";
    }

    return ret;      
}