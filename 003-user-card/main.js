const users = [
  {
    name: 'Helen Coppola',
    avatar: 'https://www.w3schools.com/w3images/avatar5.png',
  },
  {
    name: 'Nick Robins',
    avatar: 'https://www.w3schools.com/bootstrap4/img_avatar1.png',
  },
  {
    name: 'Chris Harris',
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
  },
  {
    name: 'Sandra Osborne',
    avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
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
    console.log(user);
  });
  appElm.append(listUserCards);
});
