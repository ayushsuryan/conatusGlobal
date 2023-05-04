let authenticator = localStorage.getItem('authentication');
let curr = window.location.href.split('/');
if (curr[curr.length - 1].split('?')[0] !== 'login.html') {
  if (authenticator === null || authenticator === false) {
    if (curr[curr.length - 2] === 'media' || curr[curr.length - 2] === 'Media') {
      window.location.href = '../login.html?dir=' + curr[curr.length - 2] + '&page=' + curr[curr.length - 1];
    }
    else {
      window.location.href = 'login.html?dir=&page=' + curr[curr.length - 1];

    }
  }
  else {
    console.log('ok!');
  }
}


function authenticate() {
  let accessKey = 'success';
  let userInput = document.getElementById('password').value;
  if (userInput === accessKey) {
    localStorage.setItem('authentication', true);
    let props = window.location.href.split('?')[1].split('&');
    let dir = props[0].split('=')[1] || '';
    let page = props[1].split('=')[1];
    if (dir === '') {
      window.location.href = page || '/';
    }
    else {
      window.location.href = dir + '/' + page;

    }
  }
  else {
    document.getElementById('error').innerHTML = 'Invalid Access Key!';
    localStorage.setItem('authentication', false)
  }
}