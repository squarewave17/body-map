const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const img = document.getElementById('currentImg');
const list = document.getElementById('list');
let dataSet;
let newDataSet;
fetch('data.json')
  .then((response) => response.json())
  .then((data) => (dataSet = data))
  .then(() => console.log(dataSet))
  .then(
    () =>
      (newDataSet = dataSet.filter(function (item) {
        return item.ACF.body_area != null;
      }))
  )
  .then(() => console.log(newDataSet));

const controlArray = [
  {
    img: '/img/zone1m.png',
    zone: 'zone1',
  },
  {
    img: '/img/zone2m.png',
    zone: 'zone2',
  },
  {
    img: '/img/zone3m.png',
    zone: 'zone3',
  },
  {
    img: '/img/zone4m.png',
    zone: 'zone4',
  },
  {
    img: '/img/zone5m.png',
    zone: 'zone5',
  },
  {
    img: '/img/zone6m.png',
    zone: 'zone6',
  },
  {
    img: '/img/zone7m.png',
    zone: 'zone7',
  },
  {
    img: '/img/zone8m.png',
    zone: 'zone8',
  },
  {
    img: '/img/zone9m.png',
    zone: 'zone9',
  },
];

let idx = 0;

function changeImage() {
  if (idx > controlArray.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = controlArray.length - 1;
  }
  img.src = controlArray[idx].img;
  updateList(controlArray[idx].zone);
}

function updateList(zone) {
  let currentSet;
  list.innerHTML = '';
  currentSet = newDataSet.filter(function (item) {
    return item.ACF.body_area.includes(zone);
  });

  for (i = 0; i < currentSet.length; i++) {
    list.innerHTML += `<li><a href="${currentSet[i].slug}">${currentSet[i].title.rendered}<a/></li>`;
  }
}

rightBtn.addEventListener('click', () => {
  idx++;
  changeImage();
});

leftBtn.addEventListener('click', () => {
  idx--;
  changeImage();
});
