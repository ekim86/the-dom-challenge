let timer = setInterval(incrementSeconds, 1000);
const counter = document.getElementById('counter');

function incrementSeconds() {
  let newCount = parseInt(counter.innerText);
  newCount++;
  counter.innerText = newCount;
}

const minusButton = document.getElementById('-');
const plusButton = document.getElementById('+');

minusButton.addEventListener('click', function (event) {
  let newCount = parseInt(counter.innerText);
  newCount--;
  counter.innerText = newCount;
});

plusButton.addEventListener('click', incrementSeconds);

const likeButton = document.getElementById('<3');


likeButton.addEventListener('click', function (event) {
  let currentCounter = counter.innerText;
  let li = document.getElementById(`${currentCounter}`);

  if (!li) {
    li = document.createElement("li");
    li.id = parseInt(currentCounter);
    const statement = `${currentCounter} has been liked 1 time`;
    li.innerText = statement;
    const ul = document.getElementsByClassName('likes')[0];
    ul.appendChild(li);
  } else {
    let likes = li.innerText.split(' ')[4];
    const statement = `${currentCounter} has been liked ${parseInt(likes) + 1} times`;
    li.innerText = statement;
  }

});

const pauseButton = document.getElementById('pause');
const submitButton = document.getElementById('submit');
const resumeButton = document.createElement('button');
resumeButton.innerText = "Resume";

pauseButton.addEventListener('click', function(event) {
  document.querySelectorAll('button').forEach (function(button){
    if (button.id !== 'pause')
    button.disabled = true;
  });
  clearInterval(timer);
  // pauseButton.innerText = "Resume";

  document.body.replaceChild(resumeButton, pauseButton)
  // minusButton.disabled = true;
  // plusButton.disabled = true;
  // likeButton.disabled = true;  
  // submitButton.disabled = true; 
 
});

resumeButton.addEventListener('click', function(event) {
  document.querySelectorAll('button').forEach (function(button){
    button.disabled = false;
  });
  timer = setInterval(incrementSeconds, 1000);
  // pauseButton.innerText = "Resume";

  document.body.replaceChild(pauseButton, resumeButton)
});

const commentDiv = document.getElementById('list')

const formSubmit = document.getElementById('comment-form')

formSubmit.addEventListener('submit', function(event) {
  event.preventDefault();
  const comment = formSubmit.comment.value;
  const commentP = document.createElement('p');
  commentP.innerText = comment;
  commentDiv.appendChild(commentP);
  formSubmit.reset();
})
