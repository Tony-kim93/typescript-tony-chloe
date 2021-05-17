# 이상한 투두리스트...

제 프로젝트에는 리덕스와 사가가 섞여있어서 일단 리액트 상황에서 타입스크립트를 적용 간단히 만들어 보고싶어서 해봤습니다.

app.tsx 와 todo.tsx 요 두개만 사용했습니다 추가랑 삭제 기능만 있구 아무런 기능없이 진짜 가볍게 만든겁니다.

그냥 간단하게 이런식으로 타입쓰는구나 느끼면서 해보기에 좋은정도였습니다.

보시다 보면 handleChange에서 e에 타입 맥여주는 건 사실 any를 줘도 가능하지만 그냥 e에 마우스 올리면 어떤 타입을 지정해 줘야하는지 알려줍니다.

그래서e: ChangeEvent<HTMLInputElement>이런 식으로 했습니다.

참고 : https://react.vlpt.us/using-typescript/03-ts-manage-state.html
