const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

// app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
// request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
// request.open('GET', 'https://launchlibrary.net/1.3/agency/NASA', true);
// request.open('GET', 'https://launchlibrary.net/1.3/agency', true);
request.open('GET', 'https://launchlibrary.net/1.3/launch/next/5', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  // if (request.status >= 200 && request.status < 400) {
  //   data.agencies.forEach(agency => {
  //     // console.log(agency);

  //     const card = document.createElement('div');
  //     card.setAttribute('class', 'card');

  //     const h1 = document.createElement('h1');
  //     h1.textContent = agency.name;

  //     const p = document.createElement('p');
  //     // agency.countryCode = agency.countryCode.substring(0, 300);
  //     // p.textContent = `${agency.countryCode}`;

  //     agency.wikiURL = agency.wikiURL.substring(0, 300);
  //     p.textContent = `${agency.wikiURL}`;

  //     container.appendChild(card);
  //     card.appendChild(h1);
  //     card.appendChild(p);
  //   });
  // } 
  console.log(data);
if (request.status >= 200 && request.status < 400) {
    data.launches.forEach(launch => {
      console.log(launch);
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = launch.name;

      const p = document.createElement('p');
      launch.windowstart = launch.windowstart.substring(0, 300);
      launch.location.countryCode = launch.location.countryCode.substring(0, 300);
      p.textContent = `${launch.windowstart} \n${launch.location.countryCode}`;

      // const k = document.createElement('k');
      // launch.location.countryCode = launch.location.countryCode.substring(0, 300);
      // k.textContent = `${launch.location.countryCode}`;

      // agency.wikiURL = agency.wikiURL.substring(0, 300);
      // p.textContent = `${agency.wikiURL}`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      // card.appendChild(k);
    });
} else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage); 
  }
}

request.send();
