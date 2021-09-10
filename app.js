const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

const img = document.getElementById("currentImg");
const list = document.getElementById("list");

const testArray = [
  {
    img: "/img/zone1m.png",
    ent: ["Aids", "Herpes", "Scurvy"],
    lnk: ["#", "#", "#"],
  },
  {
    img: "/img/zone2m.png",
    ent: ["Shit Block", "Hairiness", "Scallywag"],
    lnk: ["#", "#", "#"],
  },
  {
    img: "/img/zone3m.png",
    ent: ["Hairiness", "Aids", "curvy"],
    lnk: ["#", "#", "#"],
  },
  {
    img: "/img/zone4m.png",
    ent: ["Shit Block", "Herpes", "Aids"],
    lnk: ["#", "#", "#"],
  },
  {
    img: "/img/zone5m.png",
    ent: ["Shit Block", "Scallywag", "Herpes"],
    lnk: ["#", "#", "#"],
  },
  {
    img: "/img/zone6m.png",
    ent: ["Hairiness", "curvy", "Shit Block"],
    lnk: ["#", "#", "#"],
  },
  {
    img: "/img/zone7m.png",
    ent: ["a", "Herpes", "Hairiness"],
    lnk: ["#", "#", "#"],
  },
  { img: "/img/zone8m.png", ent: ["a", "b", "b"], lnk: ["#", "#", "#"] },
  {
    img: "/img/zone9m.png",
    ent: ["Scallywag", "curvy", "Aids"],
    lnk: ["#", "#", "#"],
  },
];

let idx = 0;

function changeImage() {
  if (idx > testArray.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = testArray.length - 1;
  }
  img.src = testArray[idx].img;
  updateList(testArray[idx].ent, testArray[idx].lnk);
}

function updateList(ent, lnk) {
  list.innerHTML = "";
  for (i = 0; i < ent.length; i++) {
    list.innerHTML += `<li><a href="${lnk[i]}">${ent[i]}<a/></li>`;
  }
}

rightBtn.addEventListener("click", () => {
  idx++;
  changeImage();
});

leftBtn.addEventListener("click", () => {
  idx--;
  changeImage();
});
