## Data Binding
- 단방향 바인딩
    - {}: String Interpolation
    - []: Property Binding
    - (): Event Binding
- 양방향 바인딩
    - [(ngModel)]: html과 ts가 양방향으로 묶여 있음. ngModel이라는 directive 사용(FormsModule 필요함). 내부적으로는 프로퍼티 바인딩과 이벤트 바인딩을 사용해 동작
        ```
        <h3>My Budget: ?{{budget}}</h3>
        <input type="text" [(ngModel)]="budget">
        ```
    위 코드에서 input의 budget 값이 바뀌면 바로 h3 태그의 출력이 바뀜

-----

## 구조지시자
DOM 요소를 추가하거나 삭자하는 등 DOM 트리를 동적으로 조작하여 화면의 구조를 변경할 때 사용하는 지시자
- ngIf: if문
    ```
    <button type="button" (click)="isShow  = !isShow">전환</button>
    <label *ngIf="isShow; else hiding">true</label>
    ```
- ngFor: for문
    ```
    *ngFor = "let animal of animals let idx = index"
    ```
- ngSwitch: switch문
    ```
    <span [ngSwitch]="animal">
    <span *ngSwichCase="'Dog'">멍멍</span>
    <span *ngSwichCase="'lion'">어흥</span>
    <span *ngSwichDefault>none</span>
    </span>
    ```

-----

## 수정 필요사항
- ride-history.ts의 userID 필요한지. rooms.ts에서 한번더 받아오기 때문
- roomSort 없앨 방법 - departDate와 departTime을 합친 데이터 만들어서 orderByChild하면 될 것 같음