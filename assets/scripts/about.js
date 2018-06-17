btnToIndex = document.querySelector('#btnToIndex');

  btnToIndex.addEventListener('click', () => {
      window.location.href = "index.html";
  });

  var tipsIni = {
      "начальная страница": "index.jpg",
      "страница об игре": "about.jpg",      
      "сцена боя": "fight.jpg",
      "выбор действия": "action.jpg",
      "арифметическая задача": "arithmetic.jpg",
      "задача на перевод": "translate.jpg",
      "задача написать что на картинке": "what-image.jpg",
      "логическая задача": "logic.jpg",
      "таблица очков": "score.jpg",
  };

  // --- Render Tips ---
  function renderItems(tips) {
  var i = 0;

  var componentMain = document.querySelector('.component-main');
  var buttonNext = document.querySelector('#previous');
  var buttonUl = document.createElement('ul');

  buttonUl.className = "nav-btns";
  
  for (var tip in tips) {
      var value = tips[tip];
      var componentInfo = document.createElement('div');
      componentInfo.className = "component-info";

      var buttonLi = document.createElement('li');
      buttonLi.className = "slide-nav-btn";
      buttonLi.setAttribute('data-slide', i);
      
      i++;
      if( i == 1 ) {
      componentInfo.className = "component-info showing";
      buttonLi.className = "slide-nav-btn current";
      }

      var tipTitle = document.createElement('strong');
      tipTitle.className = "info-title";
      tipTitle.textContent = tip;

      var tipInfo = document.createElement('img');
      tipInfo.className = "info-txt";
      tipInfo.setAttribute("src","assets/images/game-preview/" + value);

      //tipInfo.textContent = value;

      componentInfo.appendChild(tipTitle);
      componentInfo.appendChild(tipInfo);
      componentMain.appendChild(componentInfo);    

      buttonUl.appendChild(buttonLi);
      
  }
  
  buttonNext.parentNode.insertBefore(buttonUl, buttonNext.nextSibling);
  }

  renderItems(tipsIni);



  // --- navigation ---
  var tips = document.querySelectorAll('.component-main .component-info');
  var currentTip = 0;

  var dots = document.querySelectorAll('.slide-nav-btn');
  var currentDot = 0;


  function goToTip(n){
  tips[currentTip].className = 'component-info';
  currentTip = (n+tips.length)%tips.length;
  tips[currentTip].className = 'component-info showing';

  dots[currentDot].className = 'slide-nav-btn';
  currentDot = (n+dots.length)%dots.length;

  var current = document.querySelector('[data-slide="' + n + '"]'); 
  current.className = "slide-nav-btn current";
  }

  function nextTip() {
  var cntTips = document.querySelectorAll(".nav-btns li");

  if( currentTip+1 == cntTips.length )
      goToTip(0);
  else
      goToTip(currentTip+1);
  }

  function previousTip() {
  var cntTips = document.querySelectorAll(".nav-btns li");
  
  if( currentTip-1 == -1 ) 
      goToTip(cntTips.length-1);
  else
      goToTip(currentTip-1);
  }

  var next = document.getElementById('next');
  var previous = document.getElementById('previous');

  next.onclick = function() {
      nextTip();
  };

  previous.onclick = function() {
      previousTip();
  };


  // --- navi dots ---
  var links = document.querySelectorAll(".nav-btns li");

  for (var i = 0; i < links.length; ++i) {
  var link = links[i];

  link.addEventListener("click", function (e) {
      var index = parseInt(this.getAttribute("data-slide"), 10);
      
      goToTip(index);
  });
  }