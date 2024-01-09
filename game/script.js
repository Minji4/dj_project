//사용할 클래스, 아이디를 변수에 저장해놓기
//querySelector는 class, id 등 css를 지정한다.
const square = document.querySelectorAll('.square');
const mozzie = document.querySelectorAll('.fire');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');


//불을 끌 때 마다 올라가는 스코어를 위해
let result = 0;

//현재 타임은 미리 html에 60을 적어놓아서 textContent로 currentTime에 저장
let currentTime = timeLeft.textContent;

//클릭 된 위치와 비교 될 변수
let hitPosition;

//불을 랜덤한 위치에 만들어 주는 함수
function randomSquare() {
  //모든 위치에서 불을 지워주는 반복문을 forEach로 실행
  //불이 한 개씩 나오기 때문에 항상 리셋해주는 것
  square.forEach(className => {
    className.classList.remove('fire');
  })

  //0~15까지 16개의 정수를 만들어 square에 저장
  let randomPosition = square[Math.floor(Math.random() * 16)];

  //해당 위치에 classList로 'fire' 클래스를 만들어준다.
  //예를들어 square[5]가 앞에 저장됬으면 해당 square[5] class='fire'가 되는것
  randomPosition.classList.add('fire');

  //앞의 예를 이어서 square[5]면 square에 id 6이 저장된다. 배열은 0부터 시작하니까
  hitPosition = randomPosition.id;
}

//클릭된 곳이 불이 있으면 점수를 올려주는 부분
square.forEach(id => {

  //네모에 클릭이 되면 실행되는 이벤트
  id.addEventListener('mouseup', () =>{

    //id의 id와 앞에서 저장된 불의 위치가 같으면 밑의 내용을 실행
    if(id.id === hitPosition) {

      //result에 1을 올리고, 보여지게 될 score에 입력
      result = result + 1;
      score.textContent = result;

      //잡은 불은 화면에서 없애준다.
      id.classList.remove('fire');
    }
  })
})

//timerId 변수를 만들어주고
let timerId = null;

//앞에까진 함수만 넣은거고 이제는 지정된 시간마다 불이 나오게 도와줄 함수
function fireMove() {

  //1000(1초) 마다 randomSquare(), countDown()실행.
  timerId = setInterval(function() {
    randomSquare();
    countDown();
  }, 1000);
  
}

//카운트다운 해주는 함수
function countDown() {

  //1 빼주고. textContent를 이용해서 화면에 출력
  //위의 fireMove()에서 1초에 한번씩 실행하라고 했으니 계속 1씩 마이너스
  currentTime--;
  timeLeft.textContent = currentTime;

  //1초씩 빠지다가 0에 도달하면 실행
  if(currentTime === 0){
    
    //1초씩 실행하는 Interval을 없애주는 clearInterval
    clearInterval(timerId);

    //전체 얻은 점수를 alert에 띄운다
    alert('Game over. Your score is ' + result);
  }

}

let isGameRunning = false;

// 게임 다시 시작 버튼 클릭 시 초기화 및 게임 재시작
const restartButton = document.querySelector('#restart-button');
restartButton.addEventListener('click', () => {
  // 게임이 진행 중이 아닐 때만 게임을 시작
  if (!isGameRunning) {
    result = 0;
    score.textContent = result;
    currentTime = 10;
    timeLeft.textContent = currentTime;

    // 여기에서 isGameRunning을 true로 설정하여 게임이 시작되도록 함
    isGameRunning = true;

    fireMove();
  }
});


