setInterval(incrementSeconds, 1000);
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



// 3. As a user, i can like an individual number
//  of the counter. I should see the appropriate 
// number of likes associated with that particular number

// eventlistener on like button
// take the value of the counter at that time'
// create an li 
// li inner text will be the sentence
// record a way to see how many times its been clicked
// append to ul

// 4. As a user I can pause the game, which should
//  disable all buttons except the pause button, which 
// should now show the text 'resume'

// 5. As a user I can leave comments on my gameplay, 
// such as "Wow, what a fun game this is"