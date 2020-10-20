var imgArray = [];

function pegasus(APIkey, folderId, height="40vh", margin="2px") {
    var url = "https://www.googleapis.com/drive/v3/files?q='" + folderId + "'+in+parents&key=" + APIkey;

    var promise = $.getJSON( url, function( data, status){
        console.log("Connection to drive successfull");
    });

    promise.done(function( data ){
        data.files.forEach(function(file){
            imgArray.push("https://drive.google.com/uc?export=view&id="+file.id);
            var $div = $("<div>", {"class": "flex"});
            var $img = $("<img>", {"src": "https://drive.google.com/uc?export=view&id="+file.id, "loading": "lazy", "onclick": "modal('https://drive.google.com/uc?export=view&id="+file.id+"')"});
            $div.append($img);
            $("#pegasusGallery").append($div);
            /*var $div = $("<div>", {"class": "flex"});
            var $img = $("<img>", {"src": "/images/123.jpeg", "loading": "lazy", "onclick": "modal('/images/123.jpeg')"});
            $div.append($img);
            $("#pegasusGallery").append($div);
            var $div = $("<div>", {"class": "flex"});
            var $img = $("<img>", {"src": "/images/456.jpeg", "loading": "lazy", "onclick": "modal('/images/456.jpeg')"});      
            $div.append($img);
            $("#pegasusGallery").append($div);*/

            $(".flex").css("height", height);
        });
    }).fail(function(){
        console.log("Connection to drive failed");
    });

    var $div = $("<div>", {"id": "arrowRight","onclick": "changeRight()"});
    $("#modal").append($div);

    var $div = $("<div>", {"id": "arrowLeft","onclick": "changeLeft()"});
    $("#modal").append($div);

    $("#pegasusGallery").css("margin-left", margin);
    $(".flex").css("margin", "0 "+margin+" "+margin+" 0");
}

//imgArray=['/images/123.jpeg','/images/456.jpeg']

function modal(img) {
    $("#modal").css("display", "grid");
    $("#modalImg").attr("src", img);
    $("html").css("overflow", "hidden");
}

function hideModal() {
    $("#modal").css("display", "none");
    $("html").css("overflow", "auto");
}

function changeRight() {
    var currentImg = imgArray.indexOf($("#modalImg").attr("src"));
    if(currentImg < imgArray.length-1) {
        modal(imgArray[currentImg+1]);
    }
}

function changeLeft() {
    var currentImg = imgArray.indexOf($("#modalImg").attr("src"));
    if(currentImg > 0) {
        modal(imgArray[currentImg-1]);
    }
}
