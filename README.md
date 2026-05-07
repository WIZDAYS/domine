# DOMINE — Premium Domain Gallery

## 시작하기

### 1. Node.js 설치
https://nodejs.org 에서 LTS 버전 다운로드 후 설치

### 2. 프로젝트 폴더에서 패키지 설치
```
npm install
```

### 3. 개발 서버 실행
```
npm run dev
```
브라우저에서 http://localhost:3000 접속

---

## 파일 구조

```
domine/
├── app/
│   ├── layout.js          # 전체 레이아웃 (헤더/푸터 포함)
│   ├── page.js            # 메인 페이지
│   ├── globals.css        # 전체 스타일
│   ├── collection/        # 컬렉션 페이지
│   ├── about/             # 어바웃 페이지
│   └── contact/           # 연락처 페이지
├── components/
│   ├── Header.js          # 헤더 (로고 + 메뉴)
│   ├── Footer.js          # 푸터
│   ├── Hero.js            # 메인 히어로 섹션
│   ├── DomainGrid.js      # 도메인 목록 그리드
│   └── DomainCard.js      # 도메인 카드 하나
├── data/
│   └── domains.json       # 도메인 데이터 (여기서 관리)
└── public/
    └── images/
        ├── hero-bg.jpg    # 히어로 배경 이미지 (포토샵 작업물)
        └── domains/       # 각 도메인 동물 이미지
            ├── ij3n.jpg
            ├── 5i3ns.jpg
            └── 7iqr.jpg
```

---

## 이미지 추가하는 방법

1. 포토샵에서 작업한 히어로 배경 이미지를 `public/images/hero-bg.jpg` 로 저장
2. 각 도메인 동물 이미지를 `public/images/domains/` 폴더에 저장
3. 저장하면 자동으로 반영됨

---

## 도메인 추가하는 방법

`data/domains.json` 파일에 아래 형식으로 추가:

```json
{
  "slug": "도메인명-com",
  "name": "도메인명.com",
  "category": "카테고리",
  "description": "설명",
  "image": "/images/domains/파일명.jpg",
  "price": 50000,
  "status": "available",
  "animal": "동물이름",
  "tags": ["태그1", "태그2"]
}
```

---

## Vercel 배포

1. https://vercel.com 가입
2. GitHub에 이 폴더 업로드
3. Vercel에서 GitHub 연결 후 배포
4. domine.ing 도메인 연결
