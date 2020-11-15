# 9장 정리
1. 변수 쪼개기 :: SplitVariable.js
        변수의 역할이 둘 이상이면 변수를 쪼개야 한다.

2. 필드 이름 바꾸기 :: RenameField.js
        데이터 구조는 데이터 흐름을 이해하게 해준다.

3. 파생 변수를 질의 함수로 바꾸기 :: Replace Derived Variable with Query.js
        가변 데이터의 유효 범위를 가능한 좁혀야 한다. 

4. 참조를 값으로 바꾸기 :: ChangeReferenceToValue.js
        불변 데이터를 사용해, 프로그램의 영향도를 줄이자.

5. 값을 참조로 바꾸기 :: ChangeValueToReference.js
        논리적으로 같은 데이터를 갱신해야할때 사용하자. 

6. 매직 리터럴 바꾸기 :: ReplaceMagicLiteral.js
    매직 리터럴이란 리터럴인데 의미를 명확하게 알려주지 않은 코드. 이를 의미가 분명하게 바꾸는 것이 좋다.