function getRandomColor() {
  const options = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += options[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default (name, avatarSrc) => {
  const avatarElm = document.createElement('div');
  avatarElm.className = 'avatar';
  avatarElm.style.background = getRandomColor();

  if (avatarSrc) {
    const avatarImg = document.createElement('img');
    avatarImg.src = avatarSrc;
    avatarElm.append(avatarImg);
  } else {
    const initials = name
      .split(' ')
      .map((n) => n[0].toUpperCase())
      .join('');

    const avatarText = document.createElement('span');
    avatarText.innerText = initials;
    avatarElm.append(avatarText);
  }
  return avatarElm;
};
