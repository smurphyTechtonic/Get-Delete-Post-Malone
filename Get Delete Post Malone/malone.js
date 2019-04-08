//API URL + GLOBAL COMMENT ARRAY
const newUrl = 'https://us-central1-fir-cb-backend.cloudfunctions.net/api/comment/';
var allComments;




//GET
//EVENT LISTENER TO SHOW BUTTON, RUNS FETCH COMMENTS
document.getElementById('showBtn').addEventListener('click', function(e) {
    e.preventDefault();
    fetchComments();
});


//FETCH COMMENTS GETS JSON AND CALLS CREATEDATA
function fetchComments(url) {
    fetch(newUrl)
        .then(res => res.json())
        .then(data => createData(data));
}


//CREATE UI
function createData(data) {
    let newComment = document.getElementById("comments");
    for (let i = 0; i < data.length; i++) {
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = '🗑️';
        deleteBtn.addEventListener('click', () => deleteComment(data[i]._id));
        let newUl = document.createElement('ul');
        let author = document.createElement('li');
        let comment = document.createElement('li');
        let img = document.createElement('IMG');
        // let comId = document.createElement('li');
        // comID.innerText = data[i]._id;
        author.innerText = data[i].author;
        comment.innerText = data[i].comment
        if (data[i].comment === "delete post malone") {
            $(".deleteSave").fadeIn(1000);
            $("#killBtn").fadeIn(1000);
            $("#saveBtn").fadeIn(1000);
            $("#buttons").fadeOut(0);
            $("#namefield").fadeOut(0);
            $("#commentfield").fadeOut(0);
        };
        // if (data[i].comment === "get karl malone") {
        //     let dImg = document.createElement('IMG');
        //     dImg.setAttribute("src", "https://pbs.twimg.com/profile_images/378800000183722704/d0ea2896a48cc72ea171e2726dfe029a_400x400.jpeg");
        //     dImg.setAttribute("width", "200px");
        //     dImg.setAttribute("height", "200px");
        //     newUl.append(dImg);
        //     newUl.setAttribute("height", "50px")
        // }
        console.log(data[i]);
        newUl.append(author);
        newUl.append(comment);
        newComment.append(deleteBtn);
        // newUl.append(comId);
        newComment.append(newUl);
    }
}




//POST
//ADD EVENT LISTENER TO SUBMIT BUTTON
document.getElementById('submitBtn').addEventListener('click', function(e) {
    e.preventDefault();
    addComment();
    initialBoard();
});


// ADD COMMENT FUNCTION
function addComment(url = 'https://us-central1-fir-cb-backend.cloudfunctions.net/api/comment/', data = getData()) {
    return fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify(data)
        })
        .then(function(response) {
            response.json();
            initialBoard();
        })
        .catch((err) => console.log(err))
}


//GET COMMENT DATA HELPER FUNCTION
function getData() {
    if (document.getElementById("commentinput").value === "get karl malone") {
        fadeToKarl();
    } else if (document.getElementById("commentinput").value === "get post malone") {
        location.reload();
        initialBoard();
    } else if (document.getElementById("commentinput").value === "get kevin post malone") {
        fadeToKevinPost();
    } else if (document.getElementById("commentinput").value === "get kevin malone") {
        fadeToKevin();
    } else if (document.getElementById("commentinput").value === "delete post malone") {
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
    }
    return {
        name: document.getElementById("nameinput").value,
        comment: document.getElementById("commentinput").value,
    };
}




//DELETE COMMENT FUNCTION
function deleteComment(id) {
    return fetch(url = `https://us-central1-fir-cb-backend.cloudfunctions.net/api/comment/${id}`, {
            method: 'DELETE',
            mode: 'cors',
            cache: 'no-cache',
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify()
        })
        .then(function(response) {
            initialBoard();
            // response.json();
        })
        .catch((err) => console.log(err))
        document.getElementById(id).remove();
}




























//INITIALBOARD
function initialBoard(url) {
    fetch(newUrl)
        .then(res => res.json())
        .then(data => blankData(data));
}

//BLANKDATA
function blankData(data) {
    let newComment = document.getElementById("comments");
    for (let i = 0; i < data.length; i++) {
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = '🗑️';
        deleteBtn.addEventListener('click', () => deleteComment(data[i]._id));
        let newUl = document.createElement('ul');
        let author = document.createElement('li');
        let comment = document.createElement('li');
        let img = document.createElement('IMG')
        // let comId = document.createElement('li');
        // comID.innerText = data[i]._id;
        author.innerText = data[i].author;
        comment.innerText = data[i].comment;
        newComment.append(deleteBtn);
        if (data[i].comment === "get karl malone") {
          $( "#comments ul li:nth-child(2)").css('background-image', 'url("https://cdn.dribbble.com/users/75302/screenshots/2713686/utahjazz_logos_b.gif")');
          $( "#comments").css('width', '80%');
          // else {
          // $( "#comments ul li:nth-child(2)").css("background-color", "white");
          // }
          // let dImg = document.createElement('IMG');
          // dImg.setAttribute("src", "https://pbs.twimg.com/profile_images/378800000183722704/d0ea2896a48cc72ea171e2726dfe029a_400x400.jpeg");
          // dImg.setAttribute("width", "25%");
          // dImg.setAttribute("height", "25%");
          // newUl.appendChild(dImg);
          // newUl.setAttribute("height", "50px")
          // $( "#comments ul li:nth-child(2)").css("background-color", "black")
        }
        console.log(data[i]);
        newUl.append(author);
        newUl.append(comment);
        // newUl.append(comId);

        newComment.append(newUl);
    }
}
