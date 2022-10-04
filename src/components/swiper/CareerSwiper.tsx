import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import '../../styles/app.scss';
// import required modules
import { Pagination } from 'swiper';
import { Kalecode, SevenFintech } from '../../images';
import CareerProject from '../CareerProject';
import { KaleCodeData, sevenFintechData } from '../../utils/CareerDatas';

function CareerSwiper() {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      <SwiperSlide>
        <div className="career-box shadow-box">
          <div className="career-intro">
            <div className="intro-logo">
              <div className="logo-img">
                <img src={Kalecode} alt="케일코드 로고" />
              </div>
              <div className="logo-txt">
                <h4>(주)케일코드</h4>
                <span>2021.10 ~ 현재</span>
              </div>
            </div>
            <div className="intro-txt">
              <span>
                금융 관련 데이터로 투자자들에게 유용한 서비스를 개발하여 BTC, BTB로 판매하는
                회사로서 플랫폼으로는 큰손의 거래내역을 실시간 추적 및 주식시장의 자금흐름을 시각화한
                <strong>&nbsp;&apos;큰손투자&apos;</strong>
                와 투자자를 위한 다양한 툴을 제공하는
                <strong>&nbsp;&apos;케일플레이&apos;</strong>
                가 있습니다.
              </span>
            </div>
          </div>
          <div className="career-main">
            <h4>경력사항</h4>
            <div className="main-txt">
              <span>
                <i>
                  회사 서비스 특성상 프론트 업무는 주로 많은 양의 데이터를 사용자가 쉽게 볼 수 있도록 UI로
                  풀어내는 일이었습니다. 대체로 하나의 프로덕트를 서비스 설계부터 디자인, 개발까지 도맡아
                  주도적으로 일를 했습니다. 기술 스택으로는 서비스 성격에 따라  jQuery, React 및 Next를
                  사용하여 작업하였습니다.
                </i>
              </span>
            </div>
            {
              Object.values(KaleCodeData).map((ele, idx) => <CareerProject {...ele} key={`kalecode${idx + 1}`} />)
            }
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="career-box shadow-box">
          <div className="career-intro">
            <div className="intro-logo">
              <div className="logo-img">
                <img src={SevenFintech} alt="세븐핀테크 로고" />
              </div>
              <div className="logo-txt">
                <h4>(주)세븐핀테크</h4>
                <span>2020.07 - 2021.08</span>
              </div>
            </div>
            <div className="intro-txt">
              <span>
                금융 서비스를 개발하고 BTB로 판매하는 회사로서 대표적인 플랫폼은
                <strong>&nbsp;&apos;더한트레이더&apos;</strong>
                가 있습니다.
                <strong>&nbsp;더한트레이더</strong>
                는 특정 트레이더가 주식 등을 매매하면 그와 연동된 사용자 모두에게 매매 신호를
                보내어 같이 매매가 되는 자동 매매 시스템입니다.
              </span>
            </div>
          </div>
          <div className="career-main">
            <h4>경력사항</h4>
            <div className="main-txt">
              <span>
                <i>
                  기본적으로는 프론트엔드 관련 모든 업무를 담당하였습니다. 업무를 진행할 때 기술 스택은
                  웹 페이지는 jQuery와 ejs 문법, CMS는 Sencha 프레임워크, 앱 서비스는 React Native를 이용하여
                  작업을 하였습니다. 대체로 모든 프로젝트에서 기획 및 디자인에 참여하였으며 제 의견이 많이
                  반영되었습니다.
                </i>
              </span>
            </div>
            {
              Object.values(sevenFintechData).map((ele, idx) => <CareerProject {...ele} key={`kalecode${idx + 1}`} />)
            }
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default CareerSwiper;
