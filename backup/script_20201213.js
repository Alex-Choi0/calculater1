const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

let num1 = '', num2 = ''; // 첫번째 두번째 숫자 변수를 저장한다.
let boolNext = false; //첫번째 숫자가 끝나지 않을시 false, 두번째 숫자를 기록시 true
let oper = '';
let count = 0;

function calculate(n1, operator, n2) {
  let result = 0;
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.

  if(operator === '+'){
    return (Number(n1) + Number(n2)).toString();
  }

  else if(operator === '-'){
    return (Number(n1) - Number(n2)).toString();
  }

  else if(operator === '*'){
    return (Number(n1) * Number(n2)).toString();
  }

  else if(operator === '/'){
    console.log('n1' + '/' +'n2' + '=' + String(n1/n2));
    return (Number(n1) / Number(n2)).toString();
  }

  return String(result);
}

function delete0(numInput, numInd){// 입력한 숫자가 0이고 계산기에 나타나 있는 숫자가 0이면 0을 추가해서는 안된다.

  if(numInput !== '0' || numInd !== '0'){
    console.log('delete0 yes')
    return true;
    
  } 

  console.log('delete0 no');
  return false;
}

function deleteLast0(num){ // 정수 이상의 숫자의 가장 왼쪽에 0이 있을시 제거한다.

  let str = '', strCut = '', strLeft = '';

  if(num.includes('.'))
  {
    strCut = num.substring(0,num.indexOf('.'));
    strLeft = num.substring(num.indexOf('.'), num.length);
    console.log('strCut : ' + strCut);

    if(strCut.length > 1){

      if(strCut[0] === '0'){

        str = strCut.slice(1) + strLeft;
        return str;

      }

      else{
        return num;
      }

    }


    else{
      return num;
    }

  }

  else{
    if(strCut.length > 1){

      if(strCut[0] === '0'){

        str = strCut.slice(1) + strLeft;
        return str;

      }

      else{
        return num;
      }

    }


    else{
      return num;
    }

  }

}



function deleteDot(numInput, numInd){ // 소수점이 중복되지 못하도록 한다.

  if(numInd.includes('.'))
  {
    if(numInput === '.')
    {
      return numInd;
    }

    else
    {
      return  (numInd + numInput);
    }

  }

  else{
    return (numInd + numInput);
  }

}

// ! intermediate, advanced test를 위한 코드입니다. 도전하신다면 주석을 해제하세요.
// const display = document.querySelector('.calculator__display--intermediate'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
// let firstNum, intermediateOperator, previousKey, previousNum;

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 intermetiate & advanced 과제룰 풀어주세요.
  if (target.matches('button')) {
    if (action === 'number') { // 숫자를 누를시 인디게이터에 표시 한다.
      if(boolNext === false){ // 첫번째 숫자 입력
        if(delete0(num1, buttonContent)){ // 0이 중복되지 않게 하기 num1
          num1 += buttonContent; // 입력한 버튼을 문자열 변수에 추가하기
          document.querySelector('.calculator__display--intermediate').textContent = num1;
          console.log('delete0 참');
        }
      }

      else if(boolNext === true){
        if(delete0(num2, buttonContent)){ // 0이 중복되지 않게 하기 num1
          num2 += buttonContent; // 입력한 버튼을 문자열 변수에 추가하기
          document.querySelector('.calculator__display--intermediate').textContent = num2;
          console.log('num2 : ' + num2);
        } 
      }  
        

      
      //num1 += document.querySelector('.calculator__display--intermediate').textContent

      console.log('if(action === ' + 'number) : ' + num1);
    }
    if (action === 'operator') { // + - * /를 입력시 동작
      boolNext = true;
        oper = buttonContent;        
      console.log('operator = ' + oper);
    }
    if (action === 'decimal') {

      if(boolNext === false){
        document.querySelector('.calculator__display--intermediate').textContent = deleteDot('.',document.querySelector('.calculator__display--intermediate').textContent)
        num1 = document.querySelector('.calculator__display--intermediate').textContent;  
      }

      else if(boolNext === true){

        if(num2 !== ''){
          document.querySelector('.calculator__display--intermediate').textContent = deleteDot('.',document.querySelector('.calculator__display--intermediate').textContent)
          num2 = document.querySelector('.calculator__display--intermediate').textContent;
        }

        else if(num2 === ''){
          num2 += '0.';
          document.querySelector('.calculator__display--intermediate').textContent = num2;
        }

          
      }
      
    }
    if (action === 'clear') {
      num1 = '';
      num2 = '';
      oper = '';
      document.querySelector('.calculator__display--intermediate').textContent = '0';
      boolNext = false;
      count = 0;

    }

    if (action === 'calculate') {
      if(num2 !== ''){
        
        if(count === 0){
          count++
          document.querySelector('.calculator__display--intermediate').textContent= calculate(num1, oper, num2);
          console.log(calculate(num1, oper, num2));  
        }
        
        else{
          document.querySelector('.calculator__display--intermediate').textContent= calculate(document.querySelector('.calculator__display--intermediate').textContent, oper, num2);
          console.log(calculate(document.querySelector('.calculator__display--intermediate').textContent, oper, num2));
        }
      }  

      else if(num2 === ''){
        document.querySelector('.calculator__display--intermediate').textContent= calculate(document.querySelector('.calculator__display--intermediate').textContent, oper, num1);
        console.log(calculate(num1, oper, num2));
      }

      console.log('num1' + '=' + num1);
      console.log('num2' + '=' + num2);
    }
  }

});
