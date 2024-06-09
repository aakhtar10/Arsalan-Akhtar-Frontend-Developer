import React from "react";

function Home() {
  return (
    <>
      <header className="w-full flex flex-row items-start justify-start max-w-[1440px] z-[4] lg:max-w-full mq450:max-w-full mq825:max-w-full mq1425:max-w-full fixed top-0">
        <div className="flex-1 [backdrop-filter:blur(20px)] bg-gray-300 box-border flex flex-row items-start justify-start pt-4 px-16 pb-3.5 max-w-[1440px] border-b-[1px] border-solid border-gray-200 lg:max-w-full mq450:max-w-full mq825:pl-8 mq825:pr-8 mq825:box-border mq825:max-w-full mq1425:max-w-full">
          <div className="flex-1 [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] flex flex-row items-start justify-start max-w-[1312px] mq1425:max-w-full">
            <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px]">
              <nav className="m-0 w-[444px] flex flex-col items-start justify-end pt-0 px-0 pb-[6.7px] box-border max-w-full">
                <nav className="m-0 self-stretch flex flex-row items-center justify-center gap-[48px] text-left text-xl text-white font-outfit mq450:gap-[24px]">
                  <a className="[text-decoration:none] relative tracking-[0.5em] font-medium text-[inherit] inline-block min-w-[116px] whitespace-nowrap">
                    AI.GEN
                  </a>
                  <nav className="m-0 flex-1 flex flex-row items-start justify-between pt-0.5 px-0 pb-0 gap-[20px] text-left text-base text-white font-outfit mq825:hidden">
                    <div className="flex flex-col items-start justify-start cursor-pointer">
                      <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[0.5px]">
                        <a className="[text-decoration:none] relative leading-[24px] text-[inherit] inline-block min-w-[63px]">
                          Features
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center">
                      <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[0.5px]">
                          <a className="[text-decoration:none] relative leading-[24px] text-[inherit] inline-block min-w-[70px]">
                            Roadmap
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center">
                      <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[0.5px]">
                          <a className="[text-decoration:none] relative leading-[24px] text-[inherit] inline-block min-w-[83px]">
                            Tokenomics
                          </a>
                        </div>
                      </div>
                    </div>
                  </nav>
                </nav>
              </nav>
              <div className="flex flex-row items-start justify-start gap-[12px] ">
                <button className="cursor-pointer [border:none] p-0 bg-gray-400 rounded flex flex-row items-start justify-start relative">
                  <img
                    className="h-[42px] w-[136px] relative hidden z-[0]"
                    alt=""
                  />
                  <div className="h-10 w-[134px] relative rounded bg-gray-400 hidden z-[1]" />
                  <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded z-[1]" />
                  <div className="flex flex-row items-center justify-start pt-[12.8px] px-6 pb-[10.7px] z-[2]">
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-col items-center justify-start pt-0 px-0 pb-[0.5px]">
                        <a className="[text-decoration:none] relative text-base leading-[16px] font-medium font-outfit text-white text-center inline-block min-w-[86px]">
                          Whitepaper
                        </a>
                      </div>
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] rounded [background:linear-gradient(90deg,_#9e6ee5,_#fa75f8)] flex flex-row items-start justify-start relative">
                  <img
                    className="h-[42px] w-[135px] relative hidden z-[0]"
                    alt=""
                  />
                  <div className="h-10 w-[133px] relative rounded [background:linear-gradient(90deg,_#9e6ee5,_#fa75f8)] hidden z-[1]" />
                  <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded bg-gray-900 z-[1]" />
                  <div className="flex flex-row items-center justify-start pt-[12.8px] px-6 pb-[10.7px] z-[2]">
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-col items-center justify-start pt-0 px-0 pb-[0.5px]">
                        <a className="[text-decoration:none] relative text-base leading-[16px] font-medium font-outfit text-white text-center inline-block min-w-[85px] whitespace-nowrap">
                          Get Started
                        </a>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[448.2px] box-border max-w-full shrink-0 text-base text-white">
        <div className="h-[1292px] w-[1440px] flex flex-col items-start justify-start pt-[127.6px] px-[171px] pb-[669.9px] box-border relative gap-[77.9px] max-w-full z-[2] mq450:h-auto mq450:gap-[19px] mq450:pl-5 mq450:pr-5 mq450:box-border mq825:gap-[39px] mq825:pl-[42px] mq825:pr-[42px] mq825:box-border mq1425:pl-[85px] mq1425:pr-[85px] mq1425:box-border">
          <div className="w-[668.5px] flex flex-row items-start justify-start py-0 px-1 box-border max-w-full shrink-0">
            <div className="flex-1 flex flex-col items-start justify-start gap-[48px] shrink-0 [debug_commit:bf4bc93] max-w-full mq825:gap-[24px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[64px] mq450:gap-[16px] mq825:gap-[32px]">
                <div className="w-[315px] rounded-[10px] [background:linear-gradient(94.15deg,_rgba(255,_255,_255,_0.3)_0%,_rgba(171,_171,_171,_0.15))] flex flex-col items-start justify-start py-[0.5px] px-px box-border z-[4]">
                  <div className="self-stretch flex flex-col items-center justify-center pt-[0.5px] px-0 pb-0">
                    <div className="self-stretch rounded-[9px] bg-gray-100 flex flex-row flex-wrap items-center justify-center pt-[6.8px] px-3 pb-[6.7px] gap-[8px]">
                      <div className="relative leading-[24px] inline-block min-w-[16px] mq450:w-full mq450:h-4">
                        🎉
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start min-w-[172px]">
                        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.5px]">
                          <div className="relative leading-[24px] whitespace-pre-wrap">
                            New in AI.GEN: Real Time Interaction
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                    <div className="h-px w-[83px] relative [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.6),_rgba(171,_171,_171,_0))]" />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px] z-[4] text-29xl text-gray-800">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-col items-center justify-start">
                        <h1 className="m-0 self-stretch relative text-inherit leading-[59px] font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.5))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-10xl mq450:leading-[35px] mq825:text-19xl mq825:leading-[47px]">
                          IOTA polygon serum ipsum WAX terraUSD gala THETA.
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-5xl">
                    <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[0.5px]">
                      <p className="m-0 w-full relative leading-[40px] inline-block max-w-[703px] mq450:text-lgi mq450:leading-[32px] mq825:max-w-full">
                        Chiliz serum TRON dash aave cardano crypto celo. Golem
                        ankr bancor horizen ethereum quant bitcoin.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start pt-0 px-0 pb-14 box-border min-h-[120px] z-[4]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] rounded-lg flex flex-row items-start justify-start relative">
                  <div className="h-full w-full !m-[0] absolute top-[calc(50%_-_34px)] left-[calc(50%_-_97px)] flex flex-row items-start justify-start">
                    <img
                      className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/beforemaskgroup.svg"
                    />
                    <div className="h-16 w-[calc(100%_-_4px)] absolute !m-[0] top-[calc(50%_-_32px)] right-[2px] left-[2px] rounded-md [background:linear-gradient(90deg,_#9e6ee5,_#fa75f8)] z-[1]" />
                    <div className="h-16 w-[calc(100%_-_4px)] absolute !m-[0] top-[calc(50%_-_32px)] right-[2px] left-[2px] rounded-md bg-gray-900 z-[2]" />
                  </div>
                  <div className="flex flex-row items-start justify-start pt-[22px] px-8 pb-[17.5px] z-[3]">
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[0.5px]">
                        <div className="relative text-5xl leading-[24px] font-outfit text-white text-left inline-block min-w-[126px] whitespace-nowrap mq450:text-lgi mq450:leading-[19px]">
                          Get Started
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="w-[1845px] h-[1230px] absolute !m-[0] bottom-[-478px] left-[-732px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(92,_195,_250,_0.28),_rgba(92,_195,_250,_0))] opacity-[0.8]" />
          <div className="w-[1845px] h-[1230px] absolute !m-[0] right-[-636px] bottom-[-354px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(250,_117,_248,_0.28),_rgba(250,_117,_248,_0))] opacity-[0.7] z-[1]" />
          <div className="w-[1845px] h-[1230px] absolute !m-[0] top-[16px] left-[-650px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(158,_110,_230,_0.28),_rgba(158,_110,_230,_0))] opacity-[0.8] z-[2]" />
          <div className="w-[] mt-[-40px] absolute right-[0.5px] overflow-hidden flex flex-row flex-wrap items-start justify-start gap-[100px] max-w-full z-[3]">
            <div className="h-[741px] flex flex-col items-start justify-start pt-[111px] px-0 pb-[0.1px] box-border gap-[48.6px]">
              <div className="w-[178.3px] h-[177.4px] relative rounded-[21.61px] flex items-center justify-center">
                <img
                  className="w-full h-full object-contain absolute left-[0px] top-[18px] [transform:scale(1.407)]"
                  loading="lazy"
                  alt=""
                  src="/picture@2x.png"
                />
              </div>
              <div className="w-[178.3px] h-[177.4px] relative rounded-[21.61px] flex items-center justify-center">
                <img
                  className="w-full h-full object-contain absolute left-[0px] top-[18px] [transform:scale(1.407)]"
                  loading="lazy"
                  alt=""
                  src="/picture-1@2x.png"
                />
              </div>
              <div className="w-[178.3px] h-[177.4px] relative rounded-[21.61px] flex items-center justify-center">
                <img
                  className="w-full h-full object-contain absolute left-[0px] top-[18px] [transform:scale(1.406)]"
                  loading="lazy"
                  alt=""
                  src="/picture-2@2x.png"
                />
              </div>
            </div>
            <div className="h-[631px] flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border gap-[47.7px]">
              <div className="w-[179.2px] h-[178.3px] relative rounded-[21.61px] flex items-center justify-center">
                <img
                  className="w-full h-full object-contain absolute left-[0px] top-[18px] [transform:scale(1.404)]"
                  alt=""
                  src="/picture-3@2x.png"
                />
              </div>
              <div className="w-[178.3px] h-[179.2px] relative rounded-[21.61px] flex items-center justify-center">
                <img
                  className="w-full h-full object-contain absolute left-[0px] top-[18px] [transform:scale(1.404)]"
                  loading="lazy"
                  alt=""
                  src="/picture-4@2x.png"
                />
              </div>
              <div className="w-[178.3px] h-[178.3px] relative rounded-[21.61px] flex items-center justify-center">
                <img
                  className="w-full h-full object-contain absolute left-[0px] top-[18px] [transform:scale(1.404)]"
                  loading="lazy"
                  alt=""
                  src="/picture-5@2x.png"
                />
              </div>
            </div>
            <div className="h-[741px] flex flex-col items-start justify-start pt-[111px] px-0 pb-[0.1px] box-border gap-[48.6px]">
              <div className="w-[178.3px] h-[177.4px] relative rounded-[21.61px] flex items-center justify-center">
                <img
                  className="w-full h-full object-contain absolute left-[0px] top-[18px] [transform:scale(1.407)]"
                  loading="lazy"
                  alt=""
                  src="/picture-6@2x.png"
                />
              </div>
              <div className="w-[178.3px] h-[177.4px] relative rounded-[21.61px] flex items-center justify-center">
                <img
                  className="w-full h-full object-contain absolute left-[0px] top-[18px] [transform:scale(1.407)]"
                  loading="lazy"
                  alt=""
                  src="/picture-7@2x.png"
                />
              </div>
              <div className="w-[178.3px] h-[177.4px] relative rounded-[21.61px] flex items-center justify-center">
                <img
                  className="w-full h-full object-contain absolute left-[0px] top-[18px] [transform:scale(1.406)]"
                  loading="lazy"
                  alt=""
                  src="/picture-8@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="w-[1845px] h-[1230px] flex flex-row items-start justify-start shrink-0 [debug_commit:bf4bc93] max-w-[169%]">
            <div className="self-stretch flex-1 relative [background:radial-gradient(50%_50%_at_50%_50%,_rgba(92,_195,_250,_0.22),_rgba(92,_195,_250,_0))] max-w-full" />
          </div>
          <div className="w-[1263.5px] h-[386.6px] absolute !m-[0] top-[500px] left-[-60.5px] max-w-full text-center text-29xl">
            <div className="absolute top-[0px] left-[-746.5px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(158,_110,_230,_0.22),_rgba(158,_110,_230,_0))] w-[1845px] h-[1230px] z-[1]" />
            <div className="absolute top-[403px] left-[177.5px] w-[1086px] overflow-hidden flex flex-row items-start justify-start pt-[134.4px] px-0 pb-[134.3px] box-border max-w-full z-[4]">
              <div className="flex-1 flex flex-row items-start justify-start relative min-h-[288px] max-w-full">
                <div className="h-[508.9px] !m-[0] absolute top-[-110.8px] left-[-1px] flex flex-col items-start justify-start pt-[63.7px] px-0 pb-0 box-border gap-[70px] opacity-[0.5]">
                  <div className="w-[126.1px] h-[125.5px] relative rounded-[15.29px] flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain absolute left-[0px] top-[13px] [transform:scale(1.406)]"
                      alt=""
                      src="/picture-9@2x.png"
                    />
                  </div>
                  <div className="w-[126.1px] h-[125.5px] relative rounded-[15.29px] flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain absolute left-[0px] top-[13px] [transform:scale(1.406)]"
                      alt=""
                      src="/picture-10@2x.png"
                    />
                  </div>
                  <div className="w-[126.1px] h-[125.5px] relative rounded-[15.29px] flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain absolute left-[0px] top-[13px] [transform:scale(1.406)]"
                      alt=""
                      src="/picture-11@2x.png"
                    />
                  </div>
                </div>
                <div className="h-[446.5px] !m-[0] absolute top-[-110.8px] left-[158.9px] flex flex-col items-start justify-start gap-[70px] opacity-[0.5]">
                  <div className="w-[126.8px] h-[126.1px] relative rounded-[15.29px] flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain absolute left-[0px] top-[13px] [transform:scale(1.404)]"
                      alt=""
                      src="/picture-12@2x.png"
                    />
                  </div>
                  <div className="w-[126.1px] h-[126.8px] relative rounded-[15.29px] flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain absolute left-[0px] top-[13px] [transform:scale(1.404)]"
                      alt=""
                      src="/picture-13@2x.png"
                    />
                  </div>
                  <div className="w-[126.1px] h-[126.1px] relative rounded-[15.29px] flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain absolute left-[0px] top-[13px] [transform:scale(1.404)]"
                      alt=""
                      src="/picture-14@2x.png"
                    />
                  </div>
                </div>
                <div className="h-[508.9px] !m-[0] absolute top-[-110.8px] left-[319.4px] flex flex-col items-start justify-start pt-[63.7px] px-0 pb-0 box-border gap-[70px] opacity-[0.5]">
                  <div className="w-[126.1px] h-[125.5px] relative rounded-[15.29px] flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain absolute left-[0px] top-[13px] [transform:scale(1.406)]"
                      alt=""
                      src="/picture-15@2x.png"
                    />
                  </div>
                  <div className="w-[126.1px] h-[125.5px] relative rounded-[15.29px] flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain absolute left-[0px] top-[13px] [transform:scale(1.406)]"
                      alt=""
                      src="/picture-16@2x.png"
                    />
                  </div>
                  <div className="w-[126.1px] h-[125.5px] relative rounded-[15.29px] flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain absolute left-[0px] top-[13px] [transform:scale(1.406)]"
                      alt=""
                      src="/picture-17@2x.png"
                    />
                  </div>
                </div>
                <div className="h-[445.9px] !m-[0] absolute top-[-110.8px] left-[479.3px] flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border gap-[70px] opacity-[0.5]">
                  <div className="w-[125.5px] h-[125.5px] relative rounded-[15.29px] flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain absolute left-[0px] top-[13px] [transform:scale(1.406)]"
                      alt=""
                      src="/picture-18@2x.png"
                    />
                  </div>
                  <div className="w-[125.5px] h-[125.5px] relative rounded-[15.29px] flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain absolute left-[0px] top-[13px] [transform:scale(1.406)]"
                      alt=""
                      src="/picture-19@2x.png"
                    />
                  </div>
                  <div className="w-[126.1px] h-[126.1px] relative rounded-[15.29px] flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain absolute left-[0px] top-[13px] [transform:scale(1.404)]"
                      alt=""
                      src="/picture-20@2x.png"
                    />
                  </div>
                </div>
                <div className="h-[509.6px] !m-[0] absolute top-[-110.8px] right-[319.8px] flex flex-col items-start justify-start pt-[63.7px] px-0 pb-[0.1px] box-border gap-[70px] opacity-[0.5]">
                  <div className="w-[126.1px] h-[125.5px] relative rounded-[15.29px] flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain absolute left-[0px] top-[13px] [transform:scale(1.406)]"
                      alt=""
                      src="/picture-21@2x.png"
                    />
                  </div>
                  <div className="w-[126.1px] h-[125.5px] relative rounded-[15.29px] flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain absolute left-[0px] top-[13px] [transform:scale(1.406)]"
                      alt=""
                      src="/picture-22@2x.png"
                    />
                  </div>
                  <div className="w-[126.1px] h-[126.1px] relative rounded-[15.29px] flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain absolute left-[0px] top-[13px] [transform:scale(1.404)]"
                      alt=""
                      src="/picture-23@2x.png"
                    />
                  </div>
                </div>
                <div className="h-[446.5px] !m-[0] absolute top-[-110.8px] right-[159.9px] flex flex-col items-start justify-start gap-[70px] opacity-[0.5]">
                  <div className="w-[126.1px] h-[125.5px] relative rounded-[15.29px] flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain absolute left-[0px] top-[13px] [transform:scale(1.406)]"
                      alt=""
                      src="/picture-24@2x.png"
                    />
                  </div>
                  <div className="w-[126.1px] h-[126.1px] relative rounded-[15.29px] flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain absolute left-[0px] top-[13px] [transform:scale(1.404)]"
                      alt=""
                      src="/picture-25@2x.png"
                    />
                  </div>
                  <div className="w-[126.1px] h-[126.1px] relative rounded-[15.29px] flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain absolute left-[0px] top-[13px] [transform:scale(1.404)]"
                      alt=""
                      src="/picture-26@2x.png"
                    />
                  </div>
                </div>
                <div className="h-[509.6px] !m-[0] absolute top-[-110.8px] right-[0px] flex flex-col items-start justify-start pt-[63.7px] px-0 pb-[0.1px] box-border gap-[70px] opacity-[0.5]">
                  <div className="w-[126.1px] h-[125.5px] relative rounded-[15.29px] flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain absolute left-[0px] top-[13px] [transform:scale(1.406)]"
                      alt=""
                      src="/picture-27@2x.png"
                    />
                  </div>
                  <div className="w-[126.1px] h-[125.5px] relative rounded-[15.29px] flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain absolute left-[0px] top-[13px] [transform:scale(1.406)]"
                      alt=""
                      src="/picture-28@2x.png"
                    />
                  </div>
                  <div className="w-[126.1px] h-[126.1px] relative rounded-[15.29px] flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain absolute left-[0px] top-[13px] [transform:scale(1.404)]"
                      alt=""
                      src="/picture-29@2x.png"
                    />
                  </div>
                </div>
                <>
                  <>
                    <div className="self-stretch h-32 flex flex-col items-center justify-start pt-[100px] px-[150px] pb-0 box-border  max-w-full">
                      <h1 className="m-0 w-[787px] h-32 relative text-inherit leading-[64px] flex items-center max-w-full font-outfit mq450:text-10xl mq450:leading-[38px] mq825:text-19xl mq825:leading-[51px]">
                        <span className="w-full">
                          <span
                            style={{
                              background:
                                "linear-gradient(90deg, #facc69, #ff91a5)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                            }}
                          >
                            <span className="font-medium">
                              Create, customize, and publish
                            </span>
                          </span>
                          <span>
                            <span className="text-transparent !bg-clip-text [background:linear-gradient(90deg,_#facc69,_#ff91a5)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{` `}</span>
                            <span>
                              your digital persona to life effortlessly.
                            </span>
                          </span>
                        </span>
                      </h1>
                    </div>
                  </>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
