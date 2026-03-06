//1. 단락 평가
//효율성을 위해 "결과가 뻔하면 뒤쪽은 쳐다보지 않는 것 (조건문)"

// function returnFalse(){
//     console.log("False Func");
//     return false;
// }

// function returnTrue(){
//     console.log("True 함수");
//     return true;
// }

// console.log(returnFalse() && returnTrue());

//2. 단락평가 활용 사례

function printName(person){
    const name = person && person.name;

    console.log(name || "person 값이 없음");
    console.log(person);
}

printName();
printName({name: "정도윤"});