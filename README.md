# javascript-calculator-precourse

<br/>

#  프리코스 1주차 과제 (문자열 덧셈 계산기)

## ✅ 기능 요구 사항

입력한 문자열에서 숫자를 추출하여 더하는 계산기를 구현한다.

- 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한 각 숫자의 합을 반환한다.
  - 예시:
    - `""` => 0
    - `"1,2"` => 3
    - `"1,2,3"` => 6
    - `"1,2:3"` => 6
- 앞의 기본 구분자(쉼표, 콜론) 외에 커스텀 구분자를 지정할 수 있다.

  - 커스텀 구분자는 문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 사용한다.
  - 예를 들어 `"//;\n1;2;3"`과 같이 값을 입력할 경우 커스텀 구분자는 세미콜론(;)이며, 결과 값은 6이 반환되어야 한다.

- 사용자가 잘못된 값을 입력할 경우 `[ERROR]` 로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.

<br/>
<br/>

## ✅ 라이브러리

- [O] @woowacourse/mission-utils에서 제공하는 Console API를 사용하여 구현해야 한다.
- [O] 사용자의 값을 입력 및 출력하려면 Console.readLineAsync()와 Console.print()를 활용한다.

<br/>
<br/>

## ✅ 과제 요구 사항 체크리스트

- [O] 문자열 덧셈 계산기 저장소를 fork하고 clone하는 것으로 시작한다.
- [O] 기능을 구현하기 전 [README.md](http://README.md) 에 구현할 기능 목록을 정리해 추가한다.
- [O] Git의 커밋 단위는 앞 단계에서 [REAME.md](http://REAME.md) 에 정리한 **기능 목록 단위로 추가**한다.
  - [O] [AngularJS Git Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)을 참고해 커밋 메시지를 작성한다.

<br/>
<br/>

## ✅ 구현 기능 목록

### 1️⃣. 사용자 입력

- [O] **문자열 입력 메시지 출력**

  - 사용자에게 "덧셈할 문자열을 입력해 주세요" 메시지를 출력한다.

    > ❕입력 작업이 언제 완료될지 알 수 없기 때문에 사용자 문자열 입력을 "MissionUtils.Console.readLineAsync" 통해 비동기적으로 받는다.

### 2️⃣. 입력 처리

- [O] **사용자 문자열 입력**

  - 사용자로부터 문자열 입력을 받는다.

- [O] **입력값 유효성 확인**

  - 빈 문자열이 입력될 경우, 0을 반환한다.

    > ❕입력값이 빈 문자열인 경우 0을 반환 "MissionUtils.Console.print("결과 : 0")""

  - 유효하지 않은 값(숫자가 아닌 값)이 입력되면 `[ERROR] 잘못된 입력입니다.`를 출력하고 프로그램을 종료한다.

    > ❕숫자로 변환할 수 없는 값이 있을 경우 `isNaN()`을 사용하여 처리하고, 에러 메시지를 출력한다.

- [O] **구분자 설정**

  - 구분자를 쉼표(,)와 콜론(:)으로 설정한다.

    > ❕정규식 `input.match` 메서드를 사용하여 커스텀 구분자가 있는지 확인하고, 이를 기준으로 구분자를 처리한다.

  - 커스텀 구분자가 있을 경우

    - 입력 문자열이 `//`로 시작하고 `\n`이 포함된 경우, `//`와 `\n` 사이의 문자를 커스텀 구분자로 설정한다.

  - 커스텀 구분자가 없을 경우 기본 구분자로 분리한다.

    > ❕split() 메서드를 사용하여 구분자를 기준으로 숫자를 분리한다.
    > 구분자는 customDelimiterMatch[1]에 저장하고
    > 구분자로 구별 된 숫자는 customDelimiterMatch[2]에 저장한다.

### 3️⃣. 문자열 분리 및 숫자 추출

- [O] **구분자를 기준으로 문자열 분리**

  - 설정된 구분자를 기준으로 문자열을 분리한다.

    > ❕split() 메서드를 사용하여 구분자를 기준으로 숫자를 분리한다.
    > 동적으로 정규 표현식을 생성하는 RegExp를 사용하여 문자열을 정규식으로 바꾼다.

- [O] **숫자가 아닌 값 확인**

  - 숫자가 아닌 값이 포함된 경우 `[ERROR] 잘못된 입력입니다.`를 출력하고 프로그램을 종료한다.

### 4️⃣. 계산 처리

- [O] **추출된 숫자 더하기**

  - 분리된 문자열을 숫자로 변환한 후, 숫자들의 합을 구한다.

    > ❕`map()` 또는 `reduce()`를 사용하여 배열의 숫자들의 합을 계산한다.

- [O] **음수 입력 처리**
  - 음수가 포함된 경우 `[ERROR] 음수는 입력할 수 없습니다.`를 출력하고 프로그램을 종료한다.

### 5️⃣. 결과 출력

- [O] **결과 출력**

  - 계산된 결과를 `결과 : {입력된 숫자의 합}` 형식으로 출력한다.

    > ❕"Console.print" 를 사용하여 계산된 결과를 출력한다.
