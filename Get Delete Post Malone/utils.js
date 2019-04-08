//INIT
$(document).ready(function() {
    initialBoard();
    var bgArray = ['Post_Malone_Shot_02.jpg', 'post-bottom-min.jpg', 'post-malone-live-sept-13-2017-billboard-1548.jpg', 'postmalone-hero.jpg', 'post-malone-death-threats-on-twitter-plane-landing.jpg', 'post-malone-image-1-497ccf5d-6256-46c8-b042-0470aa53f6ad.jpg', 'post-malone-live-sept-13-2017-billboard-1548.jpg', ];
    var bg = bgArray[Math.floor(Math.random() * bgArray.length)];
    var path = 'bgimages/';
    var imageUrl = path + bg;
    $('#jumbo').css('background-image', 'url(' + imageUrl + ')');
});




//FADETOKARL
function fadeToKarl() {
    $("#jumbo").css('background-image', 'url("https://66.media.tumblr.com/1e54a28b50bb6c4ac9cdca1758012def/tumblr_p579yxjKHF1sdydefo1_400.gif")');
    $("#title").css('color', 'white');
}

//FADETOKEVIN
function fadeToKevin() {
    $("#jumbo").css('background-image', 'url("https://media.giphy.com/media/QItLfsafwiRS8/giphy.gif")');
    $("#title").css('color', 'white');
}

//FADETOKEVIN
function fadeToKevinPost() {
    $("#jumbo").css('background-image', 'url("https://preview.redd.it/cb1o8h64rga21.jpg?width=960&crop=smart&auto=webp&s=fa6299511a62b0597a68acaed023f6c4e94351c2")');
    $("#title").css('color', 'white');
}


//SAVEPOSTMALONE
document.getElementById('saveBtn').addEventListener('click', function(e) {
    $("#jumbo").css('background-image', 'url("https://media.giphy.com/media/3ohs7QyaPeg1tMszfi/giphy.gif")');
    $("#youSaved").delay(0).fadeIn(1000);
    $("h1").fadeOut(0);
    $("#returnBtn").fadeIn(2000);
    $("h2").fadeOut(0);
    $(".deleteSave").fadeOut(0);
    $("#killBtn").fadeOut(0);
    $("#saveBtn").fadeOut(0);
});


//DELETEPOSTMALONE
document.getElementById('killBtn').addEventListener('click', function(e) {
    $("#youDeleted").fadeIn(2000);
    $("h1").fadeOut(0);
    $("h2").fadeOut(0);
    $(".deleteSave").fadeOut(0);
    $("#killBtn").fadeOut(0);
    $("#saveBtn").fadeOut(0);
    $("#jumbo").css('background-image', 'url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgICAgICAcHCAgIBwoHBgYHBw8ICQcKFREWFhURExMYHCggGBolGxMTITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0OFQ8NFS0ZFxkrLSstNy0rKys3KysrLSstNzctLSsrKysrKystKy0rNysrLSsrKy0tNysrKysrKysrK//AABEIASwAqAMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIDB//EABoQAQEBAQEBAQAAAAAAAAAAAAABEQJBMQP/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A9xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAS1U9BQAAAAAAAAAAAAASkMUAAAEgKy0AAAAAAAAAAAAAAlBQAAAAAAAAAAAAAAAAAAAAAAABIoAAAAAAAAAAAAAAAAAACKAAAJ6qSAoAAAAAAAAAAAAAAAAAAAAAAAAAJFIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIoAAAAAAAAAAAAAAAACeqkUAAAAAAAAAAAAAAAAAAAEoEUAAAAAAQALclqcXRGgBQAAAAAAABFAAAAAAAEUBj9PmLzMjWAmAAoAAAAAAAAIoAAAAAAAAAxe41KCiaoAAAAAAAAAAAAAAAADHe+NpglcOeLu12+RrChJjlN11ZkaSKAKAAAAAAAAAAAAAAAACWqlBJWkigAAAAAA//Z")');
    $("h1").fadeOut(1000);
    $("#buttons").fadeIn(500);
    $("#namefield").fadeIn(500);
    $("#commentfield").fadeIn(500);
});

document.getElementById('returnBtn').addEventListener('click', function(e) {
    location.reload();
    initialBoard();

});




//CLEARS INPUT FIELD ON FOCUS
function clearField(input) {
    input.placeholder = " ";
    $("#submitBtn").fadeIn(1500);
}




$("#comments").click(function() {
  $("#comments button").animate({zoom: '50%'}, "fast");
  $("#comments button").animate({zoom: '-50%'}, "fast");
  // $( "deleteBtn" ).parent(fadeOut(500));
  });








// SCROLL TO COMMENTS
// $("button").click(function() {
//     $('html,body').animate({
//         scrollTop: $(".comments").offset().top},
//         'slow');
// });
// $('#clickMe').on('click', function() {
//     $('#changeMe').css('background-image', 'url(http://placehold.it/200x200/ff0000)');
// })
