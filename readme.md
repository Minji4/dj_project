### kita_class 폴더 생성
### 가상환경을 생성
- W : python -m venv myenv
- L : python3 -m venv myenv
### 생성된 가상환경을 활성화
- W : myenv\Scripts\activate
- L : source myenv/bin/activate
### requirements.txt 생성 및 설치
- pip install -r requirements.txt
### 장고 프로젝트 생성
- django-admin startproject mysite .

### 마이그레이션을 생성하는 명령어
python manage.py makemigrations

### db 생성
- python manage.py migrate

### 관리자 계정 생성
- python manage.py createsuperuser
### 서버 실행
- python manage.py runserver
### 앱 실행
- python manage.py startapp blog
- python manage.py startapp single_pages
- setting.py에 blog앱과  single_pages앱을 등록
### URLconf
- "URL Configuration"의 약어로, 웹 애플리케이션과  URL 패턴을 정의하고 관리하는데 사용되는 중요한 구성 요소

장고(Django) 템플릿 시스템은 Python의 웹 프레임워크인 Django의 핵심 부분 중 하나. 이 시스템은 동적 웹 페이지의 내용을 보다 쉽게 생성할 수 있게 해준다. 

1. 템플릿과 컨텍스트
- 템플릿(Template): HTML 파일에 Python 코드와 비슷한 태그를 포함하여 동적인 웹 페이지를 구성.
- 컨텍스트(Context): 템플릿에 전달되는 데이터로, 보통 Python 딕셔너리 형태. 템플릿 태그들은 이 데이터를 활용하여 최종 HTML을 생성.
2. 템플릿 태그
- 변수 출력: {{ variable }} 형태로 사용되며, 컨텍스트에서 해당 변수의 값을 출력.
- 제어 구조: {% if %}, {% for %} 등의 태그를 사용하여 조건문과 반복문을 구현할 수 있다.
- 예: {% if user.is_authenticated %} Hello, {{ user.username }}! {% endif %}
- 템플릿 상속: {% extends 'base.html' %}를 사용하여 기본 템플릿을 상속받을 수 있다.
- 블록 태그: {% block content %}{% endblock %}와 같은 형태로, 상속된 템플릿에서 재정의할 수 있는 영역을 지정.
3. 필터
- 변수 변형: {{ variable|filter }} 형태로 사용되며, 변수의 출력 형태를 변경.
- 예: {{ text|lower }}는 text 변수를 소문자로 출력.

## Generic view
- 장고(Django)의 제네릭 뷰(Generic Views)는 일반적인 웹 개발 작업을 위한 미리 정의된 뷰 클래스들을 제공
- 제네릭 뷰를 사용하면 표준적인 CRUD(Create, Read, Update, Delete) 작업을 처리하는 데 필요한 코드 양을 크게 줄일 수 있다.

#### ListView
- 목적: 모델의 객체 목록을 표시하기 위한 뷰
- 특징: 지정된 모델의 모든 레코드(또는 쿼리셋을 통해 필터링된 레코드)를 가져와서 템플릿에 전달
- Django는 클래스 기반 뷰에 대한 기본 템플릿 이름을 자동으로 생성합니다. 이 이름은 {app_name}/{model_name}_list.html 형식을 따릅니다. 예를 들어, Book 모델을 가진 library 앱에 대한 ListView를 생성한다고 가정하면 library/templates/library/book_list.html

#### DetailView 
- 목적: 특정 객체의 상세 정보를 표시하기 위한 뷰. 특징: URL에서 전달된 키(보통 기본 키)를 기반으로 특정 모델 인스턴스를 검색하여 템플릿에 전달. 
- Book 모델에 대한 DetailView를 구현하면 book_detail.html 파일을 생성.
library/templates/library/book_detail.html