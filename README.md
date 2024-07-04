# 카카오 테크 캠퍼스 - 프론트엔드 카카오 선물하기 편

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa)

## Week 1
### Step1 프로젝트 세팅
- [ ] Create React App을 기반으로 프로젝트를 생성한다.
- [ ] Typescript로 프로젝트가 동작되게 세팅하고, 절대 경로로 Import 할 수 있게 alias를 설정한다.
- [ ] tsconfig에 어떤 항목들로 구성되어 있는지 살펴보고, 필요하다 생각되는 설정들이 있다면 자유롭게 설정한다.
- [ ] ESLint, Prettier를 추가하고 Airbnb 룰을  설정한다.
- [ ] emotion 스타일 라이브러리를 추가하고, reset css를 적용한다.
- [ ] gitignore를 추가하고, 프로젝트에 불필요한 코드들은 정리한다.

### Step2 Storybook 사용하여 재사용 가능한 컴포넌트 구현
- [ ] Storybook 을 추가한다.


## Step 1 페이지 만들기

### 요구사항
- [ ] 본인만의 기준으로 일관된 코드를 작성한다.
- [ ] 기능 단위로 나누어 커밋한다.
- [ ] Header, Footer와 같은 공통 컴포넌트를 만든다. (모든 페이지에서 Header와 Footer는 보여질 수 있게 적용한다.)
- [ ] 각 Url Path별로 페이지를 만든다.
    - 메인 페이지 (/)
        - [ ] Theme 카테고리 섹션을 추가한다.
        - [ ] Theme 카테고리 Item을 클릭 시 Theme 페이지(/theme/:themeKey)로 이동한다.
        - [ ] 실시간 급상승 선물랭킹을 추가한다.
        - [ ] 필터 기능을 hooks를 사용하여 구현한다. (ex. 전체, 여성이, 남성이, 청소년이 / 받고 싶어한, 많이 선물한, 위시로 받은)
        - [ ] 상품 목록을 처음에는 6개만 보여지게 한다. 더보기를 누르는 경우 상품 목록이 더 보여지게 한다. (접기 버튼을 누르면 다시 6개만 보여지게 한다.)
    - Theme 페이지(/theme/:themeKey)
        - [ ] Header 섹션을 추가한다.
        - [ ] 재사용성을 고려하여 Header 섹션을 만든다. (themeKey에 따라 label, title, description, backgroundColor가 달라짐)
        - [ ] 상품 목록 섹션을 추가한다.
    - 로그인 페이지(/login)
        - [ ] ID와 PW를 입력하면 로그인이 되도록 구현한다. (ID와 PW는 아무 값을 입력해도 통과되도록 한다.)
    - 나의 페이지(/my-account)
        - [ ] 로그아웃을 할 수있는 버튼을 추가한다.