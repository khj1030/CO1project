# `CO1` - `대다`

해커그라운드 해커톤에 참여하는 `CO1` 팀의 `대다`입니다.

## 참고 문서

> 아래 두 링크는 해커톤에서 앱을 개발하면서 참고할 만한 문서들입니다. 이 문서들에서 언급한 서비스 이외에도 더 많은 서비스들이 PaaS, SaaS, 서버리스 형태로 제공되니 참고하세요.

- [순한맛](./REFERENCES_BASIC.md)
- [매운맛](./REFERENCES_ADVANCED.md)

## 제품/서비스 소개

<!-- 아래 링크는 지우지 마세요 -->
[제품/서비스 소개 보기](TOPIC.md)
<!-- 위 링크는 지우지 마세요 -->

## 오픈 소스 라이센스

<!-- 아래 링크는 지우지 마세요 -->
[오픈소스 라이센스 보기](./LICENSE)
<!-- 위 링크는 지우지 마세요 -->

## 설치 방법

## 사전 준비 사항

- github 환경변수

## 백엔드 시작하기

1. git clone를 한다.
    
    > git clone https://github.com/hackersground-kr/CO1project.git
    > 
2. Azure App Service 리소스 생성한다.
![스크린샷 2023-06-22 194149](https://github.com/hackersground-kr/CO1project/assets/104004650/f26db483-bf78-43d6-b191-ca50323ba438)


3. 이름은 daeda-server
런타임 스택 java 17
java 웹 서버 스택 Java SE
운영 체제는 Linux
지역은 Korea South
Linux 플랜은 자기가 원하는거 고르고 **다음: 배포**로 넘어간다.
4. **GitHub Actions 설정**에서 **지속적인 배포** 사용으로 바꾼다.
그리고 GitHub 계정을 **자기 계정**으로 로그인후 자기가 git clone을 내 repository에 했다면 자기 **github 이름**을 고르고, Organization를 골랐다면 **Organization 이름**을 골른다. 분기에서는 **main**를 골른다.
5. App Service Azure Database for MySQL 서버에 들어갑니다.
![스크린샷 2023-06-22 194305](https://github.com/hackersground-kr/CO1project/assets/104004650/96bdc55a-c92f-4414-9be2-a06accd55faf)


6. 만들기를 누른 후 **유연한 서버**를 만들어 줍니다.
7. 자신의 **리소스 그룹**으로 설정을 해두고 서버 이름을 daeda-db로 입력을 하고 지역은 Korea Central, MySQL 버전은 8.0으로 설정합니다.
8. 워크로드 유형은 개발 또는 취미 프로젝트용으로 설정 후 인증 방법은 **MySQL 인증만** 으로 설정합니다.
9. 서버 관리자 **로그인 이름**은
값은 비어 있으면 안 됩니다.
관리자 사용자 이름은 1에서63자여야 합니다.
관리자 사용자 이름에는 문자와 숫자만 사용해야 합니다. 조건 확인 후 
**비밀번호**를 입력합니다. 비밀번호 조건은
값은 비어 있으면 안 됩니다.
암호는 8~128자여야 합니다.
암호에는 영어 대문자, 영어 소문자, 숫자(0-9) 및 영숫자가 아닌 문자(!, $, #, % 등) 범주 중 세 개에 해당하는 문자가 포함되어 있어야 합니다.
10. 네트워킹으로 넘어가 연결 방법을 퍼블릭 액세스(허용된 IP 주소)로 선택을 하고 0.0.0.0 에서 255.255.255.255추가 버튼을 눌으고 검토 + 만들기를 눌러 유연한 서버를 만들어줍니다.
11. 리소스로 서버에 들어가 설저 -> 데이터베이스에 들어가서 추가를 눌어서 데이터베이스을 만듭니다. 이름은 daeda로 만듭니다. 
12. 그리고 다음에 있는 코드를 .github/workflows/main_daeda.yml에 **name: Set up Java version**다음 부분에 넣어준다.
    
    ```yaml
    - name: Set yml
            uses: microsoft/variable-substitution@v1
            with:
              files: ./backend/src/main/resources/application.yml
            env:
              spring.datasource.url: ${{ secrets.DB_URL }} #DB 주소
              spring.datasource.username: ${{ secrets.DB_USERNAME }} #DB 이름
              spring.datasource.password: ${{ secrets.DB_PASSWORD }} #DB 암호
              jwt.secret.access: ${{ secrets.ACCESS_KEY }} #access 암호화(아무 문자열 입력)
              jwt.secret.refresh: ${{ secrets.REFRESH_KEY }} #refresh 암호화(아무 문자열 입력)
    ```
13. 깃허브 상단에있는 Setting 눌으고 그다음에 Secrets → Actions → New repository secret 눌으고 환경변수를 설정해준다.
    
    ```spring.datasource.url: ${{ secrets.DB_URL }} db주소
    spring.datasource.username: ${{ secrets.DB_USERNAME }} db아이디
    spring.datasource.password: ${{ secrets.DB_PASSWORD }} db비밀번호
    jwt.secret.access: ${{ secrets.ACCESS_KEY }} jwt access 암호화
    jwt.secret.refresh: ${{ secrets.REFRESH_KEY }}  jwt refresh 암호화
    ```
    ![스크린샷 2023-06-22 235143](https://github.com/hackersground-kr/CO1project/assets/104004650/264ce081-8d88-4a80-8b71-51579d91530c)
14. github action이 성공하면 끝이다.
![스크린샷 2023-06-22 194905](https://github.com/hackersground-kr/CO1project/assets/104004650/2debcda7-6d9d-4260-918f-e02eda7a4f7a)

## 프론트엔드 시작하기

1. git clone를 한다.
    
    > git clone https://github.com/hackersground-kr/CO1project.git
    > 
2. 정적 웹앱을 생성한다. 
![스크린샷 2023-06-22 195708](https://github.com/hackersground-kr/CO1project/assets/104004650/a90d0117-f43a-41a9-9c72-2bff4619fa3d)


3. 권한이 있는 계정으로 
호스팅 계획 : 표준:범용 프로덕션 인용
배포 세부 정보 github
조직은 내 repository에 했다면 자기 **github 이름**을 고르고, Organization를 골랐다면 **Organization 이름**을 골른다.
리포지토리 clone 이름으로 하고
분기는 frontendRelease선택하고
빌드는 Reactm.
앱 위치는 /frontend
api 위치는 비우고
출력 위치는 /frontend/build한다.

5. github action이 성공하면 끝이다.

![스크린샷 2023-06-22 194905](https://github.com/hackersground-kr/CO1project/assets/104004650/2debcda7-6d9d-4260-918f-e02eda7a4f7a)

