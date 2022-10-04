import React, { useEffect, useState } from 'react';
import '../styles/app.scss';
import ReactGa from 'react-ga';
import Header from '../components/Header';
import useMoveScroll from '../hooks/menuHooks';
import OpacityBox from '../components/framer/OpacityBox';
import ScrollBox from '../components/framer/ScrollBox';
import CareerSwiper from '../components/swiper/CareerSwiper';
import ProfileBox from '../components/ProfileBox';
import Footer from '../components/Footer';
import SkilsBox from '../components/SkilsBox';
import {
  HomeImg,
  SkilImg,
  CareerImg,
  UserImg,
  Github,
  Velog,
  Calendar,
  Name,
  Place,
  Mail,
  Front,
  Back,
  Etc,
} from '../images';

export interface MoveMethods {
  onMoveHome: () => void,
  onMoveSkils: () => void,
  onMoveCareer: () => void
}

function IndexPage() {
  const [initialized, setInitialized] = useState(false);
  const [homeRef, onMoveHome] = useMoveScroll();
  const [skilsRef, onMoveSkils] = useMoveScroll();
  const [careerRef, onMoveCareer] = useMoveScroll();

  useEffect(() => {
    if (!window.location.href.includes('localhost')) {
      ReactGa.initialize(process.env.GATSBY_GOOGLE_TRACKING_ID);
      setInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (initialized) ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <main className="main">
      <Header
        onMoveHome={onMoveHome}
        onMoveSkils={onMoveSkils}
        onMoveCareer={onMoveCareer}
      />
      <div className="main-body">
        <div className="home" ref={homeRef}>
          <div className="home-title">
            <div className="home-img">
              <img
                src={HomeImg}
                alt="홈"
              />
              <h4>안녕하세요!</h4>
            </div>
            <div className="home-title-txt">
              <p>김유석의 포트폴리오 사이트입니다.</p>
            </div>
          </div>
          <div className="home-anim-box">
            <OpacityBox className="home-big-box">
              <div className="inner-big-box">
                <div className="home-intro">
                  <div className="intro-img">
                    <img src={UserImg} alt="소개" />
                  </div>
                  <span>소개</span>
                </div>
                <span className="home-intro-txt">
                  <strong>서비스 향상</strong>
                  과
                  {' '}
                  <strong>사용자 경험(UX)</strong>
                  에 큰 가치를 두고 사용자 입장에서 고민하며 프로그래밍하는 2년차 프론트 엔지니어입니다.
                </span>
                <div className="home-prof-boxs">
                  <div className="table-row">
                    <ProfileBox icon={Name} category="이름" text="김유석" />
                    <ProfileBox icon={Calendar} category="생년월일" text="93.04.19" />
                  </div>
                  <div className="table-row">
                    <ProfileBox icon={Place} category="주소" text="서울시 관악구" />
                    <ProfileBox icon={Mail} category="메일" text="rdt419@gmail.com" />
                  </div>
                </div>
              </div>
            </OpacityBox>
            <div className="home-anim-boxs">
              <OpacityBox className="home-small-box">
                <a href="https://github.com/YooSeok2" target="_blank" rel="noreferrer">
                  <div className="github-img">
                    <img src={Github} alt="깃헙" />
                    <span>https://github.com/YooSeok2</span>
                  </div>
                </a>
                <span className="small-box-txt">
                  <strong>소스 코드 저장소</strong>
                  입니다.
                </span>
              </OpacityBox>
              <OpacityBox>
                <a href="https://velog.io/@rdt419" target="_blank" rel="noreferrer">
                  <div className="velog-img">
                    <img src={Velog} alt="벨로그" />
                    <span>https://velog.io/@rdt419</span>
                  </div>
                </a>
                <span className="small-box-txt">
                  <strong>기술 블로그</strong>
                  입니다.
                </span>
              </OpacityBox>
            </div>
          </div>
        </div>
        <div className="skils" ref={skilsRef}>
          <div className="skils-title">
            <div className="skils-img">
              <img
                src={SkilImg}
                width={45}
                height={45}
                alt="기술"
              />
            </div>
            <h4>기술</h4>
          </div>
          <div className="skils-cont">
            <ScrollBox className="scroll-box skilbox1" duration={0.8}>
              <SkilsBox backImg={Front} text="프론트엔드" />
            </ScrollBox>
            <ScrollBox className="scroll-box skilbox2" duration={1.2}>
              <SkilsBox backImg={Back} text="모바일 및 백" />
            </ScrollBox>
            <ScrollBox className="scroll-box skilbox3" duration={1.5}>
              <SkilsBox backImg={Etc} text="기타" />
            </ScrollBox>
          </div>
        </div>
        <div className="career" ref={careerRef}>
          <div className="career-title">
            <div className="carrer-logo">
              <img
                src={CareerImg}
                alt="경력"
              />
            </div>
            <h4>경력</h4>
          </div>
          <div className="career-swiper">
            <CareerSwiper />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default IndexPage;
