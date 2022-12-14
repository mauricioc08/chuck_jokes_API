const btnJoke = document.querySelector('.btnJoker');
const description = document.querySelector('.description');

function jokeFetch(){
  fetch('https://api.chucknorris.io/jokes/random')
  .then(resolve => resolve.json())
  .then(joke => {
    description.innerText =  joke.value;
  })
}
jokeFetch();
btnJoke.addEventListener('click', jokeFetch);