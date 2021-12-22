firstCards = () =>{
    fetch(window.location.href+'data.json')
    .then(res => res.json())
    .then(data => {
        var main = document.getElementById("main-panel");
        var second = document.getElementById("second-panel");
        var datas = data.stadistics;
        for (var i in datas){
            var typePublic = "followers";
            var tit_over = 'Page Views';
            var followincre = '';
            var followresult = datas[i]["increase"];
            var followincrease = 'increase';
            var followarrow = 'up';
            var viewincre = '';
            var viewresult = datas[i]["views-increase"];
            var viewincrease = 'increase';
            var viewarrow = 'up'; 
            var likeincre = '';
            var likeresult = datas[i]["likes-increase"];
            var likeincrease = 'increase';
            var likearrow = 'up';
            if(datas[i].network == "youtube") {
                typePublic = "subscribers";
                tit_over = "Total Views";
            } else if(datas[i].network == "instagram") {
                tit_over = "Profile Views";
            } else if (datas[i].network == "twitter") {
                tit_over = "Retweets";
            }
            followincre = datas[i].increase;
            if(followincre.includes('-')) {
                followresult = followincre.replace('-','');
                followincrease = "decrease";
                followarrow = 'down';
            }
            viewincre = datas[i]["views-increase"];
            if(viewincre.includes('-')) {
                viewresult = viewincre.replace('-','');
                viewincrease = "decrease";
                viewarrow = 'down';
            }
            likeincre = datas[i]["likes-increase"];
            if(likeincre.includes('-')) {
                likeresult = likeincre.replace('-','');
                likeincrease = "decrease";
                likearrow = 'down';
            }
            var content = "\
                            <div class='bg-card-light card-b rounded-2 text-center'>\
                                <div class='mt-4'>\
                                <img class='rounded-1' src='images/icon-"+datas[i].network+".svg' alt=''>\
                                <span>"+data.user+"</span>\
                                </div>\
                                <span class='d-block fs-55px fw-bold'>"+datas[i].followers+"</span>\
                                <span class='d-block follow'>"+typePublic+"</span>\
                                <span class='d-block "+followincrease+"'><img src='images/icon-"+viewarrow+".svg'> "+followresult+" Today</span>\
                            </div>\
            ";
            var overview = "\
                            <div class='overv'>\
                                <div class='bg-card-light card-b-s rounded-2 p-4'>\
                                    <div class='d-flex mb-2'>\
                                        <span class='w-75 text-start title-today'>"+tit_over+"</span>\
                                        <div class='w-25 text-end'>\
                                        <img class='rounded-1' src='images/icon-"+datas[i].network+".svg' alt='icon facebook'>\
                                        </div>\
                                    </div>\
                                    <div class='d-flex'>\
                                        <span class='w-50 text-start fs-1 fw-bold'>"+datas[i].views+"</span>\
                                        <span class='w-50 text-end align-self-center "+viewincrease+"'><img src='images/icon-"+viewarrow+".svg'/> "+viewresult+"</span>\
                                    </div>\
                                </div>\
                                <div class='bg-card-light card-b-s rounded-2 p-4'>\
                                    <div class='d-flex mb-2'>\
                                        <span class='w-75 text-start title-today'>Likes</span>\
                                        <div class='w-25 text-end'>\
                                        <img class='rounded-1' src='images/icon-"+datas[i].network+".svg' alt='icon facebook'>\
                                        </div>\
                                    </div>\
                                    <div class='d-flex'>\
                                        <span class='w-50 text-start fs-1 fw-bold'>"+datas[i].likes+"</span>\
                                        <span class='w-50 text-end align-self-center "+likeincrease+"'><img src='images/icon-"+likearrow+".svg'/> "+likeresult+"</span>\
                                    </div>\
                                </div>\
                            </div>\
            ";
            main.innerHTML = main.innerHTML + content;
            second.innerHTML = second.innerHTML + overview;
        }
    })
}
firstCards();
darkTheme = () =>{
    var content = document.getElementById("content-theme");
    var btn = document.getElementById('btn-theme');
    var sheetStyle = document.getElementById('style');

    if(content.dataset.state == "true") {
        content.style.transform = "rotateY(0deg)";
        btn.style.fill = "hsl(228, 12%, 44%)";
        sheetStyle.href = "css/style.css";
        content.dataset.state = "false";
        console.log("white");
    } else {
        content.style.transform = "rotateY(180deg)";
        btn.style.fill = "url(#gradient)";
        sheetStyle.href = "css/style-dark.css";
        content.dataset.state = "true";
        console.log('dark');
    }

}