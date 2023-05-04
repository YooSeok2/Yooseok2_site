export interface CareerObjType {
  id: string;
  title: string;
  year: string;
  cont?: string[];
  skils: string[];
  link?: string;
}

interface KaleCodeType {
  bigStock: CareerObjType;
  kaledart: CareerObjType;
  kaleCycle: CareerObjType;
  kaleHome: CareerObjType;
  kaleScrener: CareerObjType;
}

interface SevenFintechType {
  bits: CareerObjType;
  dobego: CareerObjType;
  pam: CareerObjType;
  sevenHome: CareerObjType;
}

export const KaleCodeData : KaleCodeType = {
  bigStock: {
    id: 'bigStock',
    title: '큰손정석 프로젝트 개발',
    year: '2022.08 ~ 2023.03',
    cont: [
      '서비스 기획부터 참여하여 타겟, BM, 서비스 방향을 논의하고 주도적으로 개발하였다.',
      'SEO최적화를 위해 리액트기반의 프레임워크인 Next를 이용하여 SSR방식의 웹페이지를 구축하였다.',
      'UI프레임워크인 antd를 이용하여 메뉴, 그리드, 인풋 등을 구성하여 개발 시간을 단축하였다.',
      'eCharts를 이용하여 주가와 재무 데이터를 차트로 표현하였다.',
      'socket을 통해 정석랭킹의 종목 데이터를 실시간으로 업데이트하고, 종목 주가의 숫자를 framer-motion을 이용해 counting 에니메이션을 적용하였다.',
      '전역 상태관리로 리덕스를 채택하여 props-driling을 해소하고, 비동기 API처리를 위해 리덕스사가를 도입하였다.',
    ],
    skils: ['React', 'Next', 'Redux', 'Redux-Saga', 'Styled-Components', 'eCharts'],
    link: 'https://bigstandard.kaleplay.com',
  },
  kaledart: {
    id: 'kaledart',
    title: '케일다트 기획 및 개발',
    year: '2022.04 ~ 2022.07',
    cont: [
      '다트(전자공시시스템)에 올라오는 공시들 중 계약관련 공시 정보를 실시간으로 제공해주는 툴이다.',
      'Sammy 라이브러리를 이용하여 SSR방식을 CSR방식으로 바꾸어 페이지 로딩 속도를 개선하였다.',
      'socket을 통해 실시간으로 공시 데이터를 업데이트하였다.',
    ],
    skils: [
      'jQuery',
      'Sammy',
    ],
    link: 'https://app.kaleplay.com/com.kalecode.dart_contract_feed/index.html',
  },
  kaleCycle: {
    id: 'kaleCycle',
    title: '케일 경기 분석 툴 기획 및 개발',
    year: '2022.02 ~ 2022.04',
    cont: [
      '주요 경제 지표 10개와 코스피 지수의 상관 관계를 분석하는 툴이다.',
      'eCharts를 이용하여 주요 경제지표 10개를 표현하는 scatter 차트 및 경기순환지수와 코스피 주가를 표현하는 line, stock 차트를 그리었다.',
      '1990년도부터 지금까지의 데이터를 보여주기 위해 플레이 박스 기능(가장 예전, 한달 전, 재생, 정지, 한달 후, 가장 최근)을 구축하였다.',
    ],
    skils: [
      'jQuery',
      'eCharts',
    ],
    link: 'https://app.kaleplay.com/com.kalecode.kalecycle/index.html',
  },
  kaleHome: {
    id: 'kaleHome',
    title: '케일코드 홈페이지 제작',
    year: '2022.01 ~ 2022.02',
    cont: [
      '워드프레스를 사용하여 케일코드 홈페이지를 제작하였다.',
      '워드프레스에서 메타 태그를 관리하는 플러그인을 만들어 SEO를 최적화 하였다.',
    ],
    skils: [
      'WordPress',
    ],
    link: 'https://kalecode.com',
  },
  kaleScrener: {
    id: 'kaleScrener',
    title: '케일스크리너 모바일버전 기획 및 개발',
    year: '2021.10 ~ 2021.12',
    cont: [
      'agGrid를 이용하여 그리드로 표현된 화면을 로드하는 시간을 단축하였다.',
      'Sammy 라이브러리를 이용하여 SSR방식을 CSR방식으로 바꾸어 페이지 로딩 속도를 개선하였다.',
      '사용자의 편의성을 고려하여 관심종목 기능을 추가하였다.',
    ],
    skils: [
      'jQuery',
      'agGrid',
      'Sammy',
    ],
    link: 'https://app.kaleplay.com/com.kalecode.kalescreener_mobile/index.html',
  },
};

export const sevenFintechData : SevenFintechType = {
  bits: {
    id: 'bits',
    title: '비츠, 마운티 앱 서비스 리뉴얼 및 배포',
    year: '2021.06 ~ 2021.08',
    cont: [
      '기존에 이미 개발된 FTS라는 앱을 수정하여 비츠, 마운티 두 개의 앱 서비스를 리엑트 네이티브를 사용하여 제작하였다.',
      '로그인 화면을 추가하였다.',
      '로고 및 백그라운드 색상을 변경하였다.',
      '비츠, 마운티 앱 둘 다 구글스토어와 앱 스토어에 출시하였다.',
    ],
    skils: [
      'React Native',
    ],
  },
  dobego: {
    id: 'dobego',
    title: '도배고 서비스 설계 및 개발 후 배포',
    year: '2021.02 ~ 2021.05',
    cont: [
      '비즈니스의 아이디어를 전달받고 프로젝트 설계 및 기획 하였다.',
      '리엑트 네이티브로 화면을 만들고 노드로 서버를 구축하였다.',
      '온전한 REST API를 구축하였다.',
      'Sequelize로 데이터베이스(MySql)를 연동하였다.',
      'AWS EC2 인스턴스로 웹 호스팅 서버를 만들었다.',
      '고대디에서 도메인을 구매하여 DNS설정을 하고, CertBot으로 SSL인증서 발급 및 자동갱신 하였다.',
      'Sencha 프레임워크를 이용하여 주문, 고객, 마일리지를 관리하는 CMS페이지를 만들었다.',
      '네이버 클라우드 SENS를 이용하여 문자 인증 기능을 추가하였다.',
      '구글스토어에 출시하였다.',
    ],
    skils: [
      'React Native',
      'Node',
      'Sequelize',
      'AWS EC2',
      'jQuery',
      'Sencha',
    ],
  },
  pam: {
    id: 'pam',
    title: '팜 CMS 제작, 팜 앱 웹뷰 기획 및 개발',
    year: '2020.12 ~ 2021.01',
    cont: [
      '고객 정보와 계약 정보를 관리하는 페이지를 Sencha프레임워크를 이용하여 제작하였다.',
      '팜 앱 서비스에 웹 뷰로 들어갈 화면을 jQuery로 만들었다.',
    ],
    skils: [
      'jQuery',
      'ejs',
      'Sencha',
    ],
  },
  sevenHome: {
    id: 'sevenHome',
    title: '세븐핀테크 홈페이지 리뉴얼, 더한트레이더 홈페이지 기획 및 개발',
    year: '2020.07 ~ 2020.11',
    skils: [
      'jQuery',
      'ejs',
    ],
  },
};
