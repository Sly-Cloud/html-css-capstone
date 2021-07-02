const menuToggle = document.querySelector('#menuToggle');
menuToggle.addEventListener('click', () => {
  const navigation = document.getElementById('myTopnav');
  if (navigation.className === 'topnav') {
    navigation.className += ' responsive';
  } else {
    navigation.className = 'topnav';
  }
});

const speakerList = document.querySelector('#speakers-list');

const createSpeaker = (speaker) => {
  const li = document.createElement('li');
  li.setAttribute('class', 'speakers-list-item');
  const img = document.createElement('img');
  img.setAttribute('src', speaker.photoUrl);
  img.setAttribute('class', 'image');
  img.setAttribute('alt', 'image');
  const div = document.createElement('div');
  div.setAttribute('class', 'speakers-list-item__info');
  const h2 = document.createElement('h2');
  h2.setAttribute('class', 'speakers-list-item__heading');
  h2.textContent = speaker.speakerName;
  const h3 = document.createElement('h3');
  h3.setAttribute('class', 'speakers-list-item__role');
  h3.textContent = speaker.role;
  const p = document.createElement('p');
  p.setAttribute('class', 'speakers-list-item__text');
  p.textContent = speaker.description;
  li.appendChild(img);
  div.appendChild(h2);
  div.appendChild(h3);
  div.appendChild(p);
  li.appendChild(div);
  return li;
};

if (speakerList) {
  const speakers = [
    {
      speakerName: 'Omoogun Ola',
      role: 'Vice Chancellor, LASU',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor unde, consectetur,',
      photoUrl: 'images/Jung.jpg',
    },
    {
      speakerName: 'Umeh Juliet',
      role: 'Clinical Psychologist',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor unde, consectetur,',
      photoUrl: 'images/Jung.jpg',
    },
    {
      speakerName: 'Zeenat Lawal',
      role: 'Adolescent Psychologist',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor unde, consectetur,',
      photoUrl: 'images/Jung.jpg',
    },
    {
      speakerName: 'Atueyi Steph',
      role: 'Sports Psychologist',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor unde, consectetur,',
      photoUrl: 'images/Jung.jpg',
    },
    {
      speakerName: 'Adonike Henry',
      role: 'Director of art center',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor unde, consectetur,',
      photoUrl: 'images/Jung.jpg',
    },
    {
      speakerName: 'Usman Suleiman',
      role: 'Software Psychologist',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor unde, consectetur,',
      photoUrl: 'images/Jung.jpg',
    },
  ];
  for (let i = 0; i < speakers.length; i += 1) {
    const speakerItem = createSpeaker(speakers[i]);
    speakerList.appendChild(speakerItem);
  }
}
