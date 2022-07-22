const db = {
  chats:[
    'general',
    'support',
    'marketing',
    'thailand',
    'bali',
    'poland',
    'australia',
    'jobs',
    'startups',
    'italy',
    'freelance'
  ],
  users:{
    1:{
      name:'Orlando Diggs',
      avatar:'user1.jpg',
      status:1
    },
    2:{
      name:'Marie Jensen',
      avatar:'user2.jpg',
      status:0
    },
    3:{
      name:'Carmen Velasco',
      avatar:'user3.jpg',
      status:0
    },
    4:{
      name:'Alex Lee',
      avatar:'user4.jpg',
      status:0
    },
    5:{
      name:'Leo Gill',
      avatar:'user5.jpg',
      status:1
    },
    6:{
      name:'Britney Cooper',
      avatar:'user6.jpg',
      status:0
    }
    
  }
};



const chatsBody = document.querySelector(".chats__body"),
      usersBody = document.querySelector(".users__body"),
      chatsTitleList = document.querySelector(".title__chats"),
      usersTitleList = document.querySelector(".title__users");

  // Чаты
function showChats() {
  // Удаление элементов 
  chatsBody.querySelector('ul').innerHTML= "";
  // Заполнение элеметами из бд
  db.chats.forEach((item, i) => {
    if (i === 0) {
      chatsBody.querySelector('ul').insertAdjacentHTML('beforeend', `<a href="#" class="chat chat-active"># ${item}</a>`);
    } else {
      chatsBody.querySelector('ul').insertAdjacentHTML('beforeend', `<a href="#" class="chat "># ${item}</a>`);
    }

  });
} 
showChats();


// Пользователи канала
function showUsers() {
  // Удаление элеиентов
  usersBody.querySelector("ul").innerHTML = "";

  // Заполнение элементами
  for (let i = 1; i<Object.keys(db.users).length+1; i++) {

    if (db.users[i].status === 1) {
      usersBody.querySelector("ul").insertAdjacentHTML("beforeend", `<li class="user__item">
      <div class="status status-online"></div>
      <div class="avatar">
          <img src="img/users/${db.users[i].avatar}" alt="avatar">
      </div>
      <div class="name">${db.users[i].name}</div>
    </li>`);
    } else {
      usersBody.querySelector("ul").insertAdjacentHTML("beforeend", `<li class="user__item">
      <div class="status"></div>
      <div class="avatar">
          <img src="img/users/${db.users[i].avatar}" alt="avatar">
      </div>
      <div class="name">${db.users[i].name}</div>
    </li>`);
    }
    
  }

}
showUsers();


function setNameList(id, name) {
  if (id === 0) {
    chatsTitleList.querySelector('.name__list').innerText = Object.keys(db)[id];
    chatsTitleList.querySelector('.count__list').innerText = name.length;
  } else if (id === 1 ) {
    usersTitleList.querySelector(".name__list").innerText = Object.keys(db)[id];
    usersTitleList.querySelector(".count__list").innerText = Object.keys(name).length;
  } else {
    return "error";
  }

}



setNameList(0, db.chats);
setNameList(1, db.users);




