function select(elem) {
  return document.querySelector(elem);
}

let current = 0;
let isAnimating = false;

let user = [
  {
    profilepic:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displaypic:
      "https://images.unsplash.com/photo-1619946794135-5bc917a27793?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Shaloo",
    pendingmessage: 4,
    location: "Ahemadabad India",
    age: 23,
    interests: [
      {
        icon: `<i text- class="ri-book-open-fill"></i>`,
        interest: "Reading",
      },
      ,
      {
        icon: `<i class="ri-bowl-fill"></i>`,
        interest: "Cooking",
      },
      {
        icon: `<i class="ri-camera-3-line"></i>`,
        interest: "Photography",
      },
    ],
    bio: "fnosf Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur possimus sed provident voluptates facilis veritatis suscipit ab. Molestiae necessitatibus saepe asperiores iste reprehenderit temporibus eveniet atque",
    isFriend: null,
  },
  {
    profilepic:
      "https://images.unsplash.com/photo-1562904403-a5106bef8319?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displaypic:
      "https://images.unsplash.com/photo-1541823709867-1b206113eafd?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Roshni",
    pendingmessage: 44,
    location: "Surat",
    age: 26,
    interests: [
      {
        icon: `<i class="ri-playstation-line"></i>`,
        interest: "Gaming",
      },
      ,
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music",
      },
      {
        icon: `<i class="ri-movie-2-fill"></i>`,
        interest: "Cenema",
      },
    ],
    bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur possimus sed provident voluptates facilis veritatis suscipit ab. Molestiae necessitatibus saepe asperiores iste reprehenderit temporibus eveniet atque",
    isFriend: null,
  },
  {
    profilepic:
      "https://images.unsplash.com/photo-1499470932971-a90681ce8530?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displaypic:
      "https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Harshita",
    pendingmessage: 4,
    location: "Indore",
    age: 25,
    interests: [
      {
        icon: `<i class="ri-road-map-fill"></i>`,
        interest: "traveling",
      },
      ,
      {
        icon: `<i class="ri-computer-fill"></i>`,
        interest: "computers",
      },
      {
        icon: `<i class="ri-edit-2-fill"></i>`,
        interest: "writting",
      },
    ],
    bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur possimus sed provident voluptates facilis veritatis suscipit ab. Molestiae necessitatibus saepe asperiores iste reprehenderit temporibus eveniet atque",
    isFriend: null,
  },
  {
    profilepic:
      "https://images.unsplash.com/photo-1514161955277-4ea47eef2ff9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displaypic:
      "https://images.unsplash.com/photo-1527495666590-898fee64eb89?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Ayushi",
    pendingmessage: 8,
    location: "Delhi India",
    age: 22,
    interests: [
      {
        icon: `<i class="ri-bowl-fill"></i>`,
        interest: "Cooking",
      },
      ,
      {
        icon: `<i class="ri-movie-2-fill"></i>`,
        interest: "Cenema",
      },
      {
        icon: `<i class="ri-road-map-fill"></i>`,
        interest: "traveling",
      },
    ],
    bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur possimus sed provident voluptates facilis veritatis suscipit ab. Molestiae necessitatibus saepe asperiores iste reprehenderit temporibus eveniet atque",
    isFriend: null,
  },
];

function setdata(index) {
  select(".profileimage img").src = user[index].profilepic;
  select(".badge h5").textContent = user[index].pendingmessage;
  select(".location h3").textContent = user[index].location;
  select(".name h1:nth-child(1)").textContent = user[index].name;
  select(".name h1:nth-child(2)").textContent = user[index].age;

  var clutter = "";

  user[index].interests.forEach(function (elem) {
    clutter += `<div class="flex justify-center items-center gap-2 bg-white/40 px-3 py-1 rounded-full mt-3" >
                            ${elem.icon}
                            <h3 class=" tracking-tight text-sm">${elem.interest}</h3>
                        </div>`;
  });

  select(".tags").innerHTML = clutter;

  select(".bio p").textContent = user[index].bio;
}

(function setInitials() {
  select(".maincard img").src = user[current].displaypic;
  select(".incomingcard img").src = user[current + 1]?.displaypic;

  setdata(current);

  current = 2;
})();

function updateimage() {
  if (!isAnimating) {
    isAnimating = true;
    let tl = gsap.timeline({
      onComplete: function () {
        isAnimating = false;
        let main = select(".maincard");
        let incoming = select(".incomingcard");

        incoming.classList.remove("z-[2]");
        incoming.classList.add("z-[3]");
        incoming.classList.remove("incomingcard");

        main.classList.remove("z-[3]");
        main.classList.add("z-[2]");

        gsap.set(main, {
          scale: 1,
          opacity: 1,
        });

        if (current === user.length) current = 0;
        select(".maincard img").src = user[current].displaypic;
        current++;
        main.classList.remove("maincard");
        incoming.classList.add("maincard");
        main.classList.add("incomingcard");
      },
    });
    tl.to(
      ".maincard",
      {
        scale: 1.1,
        opacity: 0,
        ease: Circ,
        duration: 1.4,
      },
      "a"
    ).from(
      ".incomingcard",
      {
        scale: 0.9,
        opacity: 0,
        ease: Circ,
        duration: 1.4,
      },
      "a"
    );
  }
}

let deny = select(".deny");
let accept = select(".accept");

deny.addEventListener("click", function () {
  updateimage();
  setdata(current - 1);
  gsap.from(".details .elem", {
    y: "100%",
    opacity: "0",
    ease: Power4.easeInOut,
    duration: "1.5",
  });
});

accept.addEventListener("click", function () {
  updateimage();
  setdata(current - 1);
  gsap.from(".details .elem", {
    y: "100%",
    opacity: "0",
    ease: Power4.easeInOut,
    duration: "1.5",
  });
});

function containerCreater() {
  document.querySelectorAll(".elem").forEach(function (element) {
    let div = document.createElement("div");
    div.classList.add(`${element.classList[1]}container`, "overflow-hidden");

    div.appendChild(element);
    select(".details").appendChild(div);
  });
}

containerCreater();
