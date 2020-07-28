import getAvatar from './getAvatar.js';

const users = [
  {
    name: 'Helen Coppola',
    avatar: 'https://www.w3schools.com/w3images/avatar5.png',
  },
  {
    name: 'Nick Robins',
    avatar: '',
  },
  {
    name: 'Chris Harris',
    avatar: '',
  },
  {
    name: 'Sandra Osborne',
    avatar: '',
  },
  {
    name: 'Tim Johnson',
    avatar: 'https://www.w3schools.com/bootstrap4/img_avatar1.png',
  },
  {
    name: 'Antonette Martinez',
    avatar: 'https://www.w3schools.com/w3images/avatar5.png',
  },
];

document.addEventListener('DOMContentLoaded', function () {
  const appElm = document.getElementById('app');
  const listUserCards = document.createElement('div');
  users.forEach((user) => {
    const userCardElm = document.createElement('div');
    userCardElm.className = 'userCard';
    userCardElm.innerText = user.name;
    userCardElm.prepend(getAvatar(user.name, user.avatar));
    listUserCards.append(userCardElm);
  });
  appElm.append(listUserCards);
});
