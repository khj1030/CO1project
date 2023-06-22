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
9. 서버 관리자 **로그인 이름**은 jiseok으로 입력 후 **비밀번호**는 qwer1234로 설정합니다.
10. 네트워킹으로 넘어가 연결 방법을 퍼블릭 액세스(허용된 IP 주소)로 선택을 하고 0.0.0.0 ~ 255.255.255.255추가 버튼을 눌으고 검토 + 만들기를 눌러 유연한 서버를 만들어줍니다.
11. 리소스로 서버에 들어가 daeda 레코드를 만들어 줍니다.
12. 그리고 다음과 같이 backend브랜치에 github workflow에 **name: Set up Java version**다음 부분에 넣어준다.
    
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
    
13. setting → Secrets → Actions → New repository secret 눌으고 환경변수를 설정해준다.
    
    ```spring.datasource.url: ${{ secrets.DB_URL }} db주소
    spring.datasource.username: ${{ secrets.DB_USERNAME }} db아이디
    spring.datasource.password: ${{ secrets.DB_PASSWORD }} db비밀번호
    jwt.secret.access: ${{ secrets.ACCESS_KEY }} jwt access 암호화
    jwt.secret.refresh: ${{ secrets.REFRESH_KEY }}  jwt refresh 암호화
    ```
14. github action이 성공하면 끝이다.
15. ![스크린샷 2023-06-22 194905](https://github.com/hackersground-kr/CO1project/assets/104004650/2debcda7-6d9d-4260-918f-e02eda7a4f7a)

