let input = document.querySelector('input');
let btn = document.querySelector('button');
let avatar = document.getElementById('avatar');
let avaImg = document.createElement('img');

avatar.appendChild(avaImg);

btn.onclick = function () {
  fetch('https://api.github.com/users/' + input.value).then(
    (reponse) => {
      if (reponse.ok) {
        reponse.json().then((data) => {
          avaImg.src = data.avatar_url;
        })
      } else {
        console.log('error: ' + reponse.status + ' ' + reponse.statusText);
      }
    }
  ).catch(() => {
    alert('出现错误');
  }
  )
}