import React from "react";

import { Stack, Img, Row, Text, Button, Column, Line } from "components";

const FrameOnePage = () => {
  return (
    <>
      <Stack className="bg-gray_50 font-josefinsans lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] mx-[auto] lg:pl-[218px] xl:pl-[250px] 2xl:pl-[281px] 3xl:pl-[337px] w-[100%]">
        <Stack className="absolute lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] right-[0] w-[80%]">
          <Img
            src="images/img_image1.png"
            className="absolute lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] right-[0] rounded-radius1000 w-[53%]"
            alt="imageOne"
          />
          <header className="absolute left-[0] top-[2%] w-[76%]">
            <Row className="pb-[3px] w-[100%]">
              <Text className="font-bold mb-[1px] mt-[4px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-black_900 w-[auto]">
                <span className="text-light_green_600 font-josefinsans">F</span>
                <span className="text-yellow_900 font-josefinsans">OO</span>
                <span className="text-light_green_600 font-josefinsans">D</span>
                <span className="text-red_800 font-josefinsans">COURT</span>
              </Text>
              <Text className="font-normal lg:ml-[40px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[63px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                <span className="text-black_900 font-josefinsans font-semibold">
                  Home
                </span>
                <span className="text-black_900 font-josefinsans"> </span>
                <span className="text-gray_600 font-josefinsans">
                  Menu Shop Service
                </span>
              </Text>
              <Stack className="lg:h-[17px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[27px] 3xl:ml-[103px] lg:ml-[67px] xl:ml-[76px] 2xl:ml-[86px] w-[3%]">
                <Img
                  src="images/img_trash.svg"
                  className="absolute bottom-[0] lg:h-[11px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] left-[0] w-[77%]"
                  alt="trash"
                />
                <Stack className="absolute xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[9px] right-[0] top-[0] 2xl:w-[10px] 3xl:w-[12px] lg:w-[8px] xl:w-[9px]">
                  <div className="absolute bg-yellow_900 xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[9px] rounded-radius50 top-[7%] 2xl:w-[10px] 3xl:w-[12px] lg:w-[8px] xl:w-[9px]"></div>
                  <Text className="absolute font-normal inset-x-[0] mx-[auto] not-italic 3xl:text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-white_A700 top-[0] w-[max-content]">
                    0
                  </Text>
                </Stack>
              </Stack>
              <Img
                src="images/img_search.svg"
                className="lg:h-[11px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:w-[10px] xl:w-[12px] 2xl:w-[13px] 3xl:w-[16px]"
                alt="search"
              />
              <Button
                className="2xl:ml-[82px] 2xl:mt-[3px] 3xl:ml-[99px] 3xl:mt-[4px] flex items-center justify-center lg:ml-[64px] lg:mt-[2px] text-center w-[9%] xl:ml-[73px] xl:mt-[3px]"
                leftIcon={
                  <Img
                    src="images/img_user.svg"
                    className="text-center lg:w-[8px] lg:mr-[8px] xl:w-[10px] xl:mr-[9px] 2xl:w-[11px] 2xl:mr-[10px] 3xl:w-[13px] 3xl:mr-[12px]"
                    alt="user"
                  />
                }
              >
                <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px]">
                  Sign in
                </div>
              </Button>
              <Row className="bg-yellow_900 items-center justify-center lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] rounded-radius15 w-[9%]">
                <Img
                  src="images/img_exit1.png"
                  className="lg:h-[11px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:w-[10px] xl:w-[12px] 2xl:w-[13px] 3xl:w-[16px]"
                  alt="exitOne"
                />
                <Text className="font-normal 3xl:mx-[10px] lg:mx-[7px] xl:mx-[8px] 2xl:mx-[9px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                  Login
                </Text>
              </Row>
            </Row>
          </header>
          <Column className="absolute bottom-[7%] left-[0] w-[38%]">
            <Text className="font-normal leading-[normal] ml-[3px] not-italic lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-black_900 w-[85%]">
              <span className="text-black_900 font-josefinsans font-bold lg:text-[56px] xl:text-[64px] 2xl:text-[72px] 3xl:text-[86px]">
                Order{" "}
              </span>
              <span className="text-black_900 font-josefinsans font-bold lg:text-[56px] xl:text-[64px] 2xl:text-[72px] 3xl:text-[86px]">
                your
                <br />
              </span>
              <span className="text-black_900 font-josefinsans font-light lg:text-[45px] xl:text-[52px] 2xl:text-[58px] 3xl:text-[70px]">
                favourite Foods
              </span>
            </Text>
            <Text className="font-normal leading-[normal] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[92%]">
              fresh and tasty seafood curry sit amet consectetur
              <br />
              curobitur acuumsan auctor pulvinar proin sit amet
            </Text>
            <Text className="font-normal ml-[3px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] not-italic lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-black_900 w-[auto]">
              <span className="text-black_900 font-josefinsans font-light">
                Total order :
              </span>
              <span className="text-black_900 font-josefinsans"> </span>
              <span className="text-black_900 font-josefinsans font-semibold">
                $24.30
              </span>
            </Text>
            <Row className="items-center justify-between lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] w-[100%]">
              <Stack className="border border-solid border-yellow_900 lg:h-[41px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[64px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] rounded-radius35 w-[37%]">
                <Row className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[44%]">
                  <Line className="bg-gray_600 lg:h-[30px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] w-[1px]" />
                  <Text className="font-normal lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[33px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-yellow_900 w-[auto]">
                    2
                  </Text>
                  <Line className="bg-gray_600 lg:h-[30px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] w-[1px]" />
                </Row>
                <Img
                  src="images/img_group6.svg"
                  className="absolute bottom-[26%] 3xl:h-[10px] lg:h-[6px] xl:h-[7px] 2xl:h-[8px] inset-x-[0] mx-[auto] w-[75%]"
                  alt="GroupSix"
                />
              </Stack>
              <Row className="bg-black_900 items-center justify-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] rounded-radius501 w-[54%]">
                <Stack className="bg-yellow_900 lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] ml-[1px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[9px] rounded-radius50 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]">
                  <Img
                    src="images/img_vector.svg"
                    className="absolute lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-[0] justify-center m-[auto] w-[57%]"
                    alt="Vector"
                  />
                </Stack>
                <Text className="font-normal lg:ml-[19px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] lg:mr-[25px] xl:mr-[29px] 2xl:mr-[33px] 3xl:mr-[39px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-white_A700 w-[auto]">
                  Buy Now
                </Text>
              </Row>
            </Row>
            <Stack className="lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[86%]">
              <Column
                className="absolute bg-cover bg-repeat inset-x-[15%] items-center p-[4px] w-[71%]"
                style={{ backgroundImage: "url('images/img_group2.svg')" }}
              >
                <Row className="items-center justify-between w-[96%]">
                  <Img
                    src="images/img_60236181.png"
                    className="lg:h-[40px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] lg:w-[39px] xl:w-[45px] 2xl:w-[51px] 3xl:w-[61px]"
                    alt="60236181"
                  />
                  <Img
                    src="images/img_11.png"
                    className="lg:h-[53px] xl:h-[61px] 2xl:h-[68px] 3xl:h-[82px] lg:w-[52px] xl:w-[60px] 2xl:w-[67px] 3xl:w-[81px]"
                    alt="Eleven"
                  />
                  <Img
                    src="images/img_331.png"
                    className="lg:h-[53px] xl:h-[61px] 2xl:h-[68px] 3xl:h-[82px] lg:w-[52px] xl:w-[60px] 2xl:w-[67px] 3xl:w-[81px]"
                    alt="ThreeHundredThirtyOne"
                  />
                </Row>
                <Column className="items-center lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[22px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] w-[87%]">
                  <Row className="justify-between w-[100%]">
                    <Text className="font-normal mt-[1px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                      Burger
                    </Text>
                    <Text className="font-normal mt-[1px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                      Beverage
                    </Text>
                    <Text className="font-normal mb-[1px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                      Donut
                    </Text>
                  </Row>
                  <Row className="items-center justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[99%]">
                    <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                      $ 12.80
                    </Text>
                    <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                      $ 5.25
                    </Text>
                    <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                      $ 3.99
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Img
                src="images/img_sliderbutton.svg"
                className="absolute lg:h-[27px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px] inset-y-[37%] w-[100%]"
                alt="sliderbutton"
              />
            </Stack>
          </Column>
          <Stack className="absolute lg:h-[436px] xl:h-[499px] 2xl:h-[561px] 3xl:h-[673px] inset-y-[0] my-[auto] right-[24%] w-[37%]">
            <Column className="absolute bg-yellow_900 bottom-[0] inset-x-[0] items-center justify-end mx-[auto] lg:p-[17px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius30 w-[61%]">
              <Row className="lg:mt-[127px] xl:mt-[146px] 2xl:mt-[164px] 3xl:mt-[197px] pb-[2px] w-[74%]">
                <Text className="font-normal mb-[1px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-white_A700 w-[auto]">
                  Salad
                </Text>
                <Img
                  src="images/img_star.svg"
                  className="lg:h-[16px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[25px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] mt-[4px] w-[13%]"
                  alt="star"
                />
                <Text className="font-normal lg:ml-[5px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] mt-[1px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-white_A700 w-[auto]">
                  4.7
                </Text>
              </Row>
              <Button
                className="2xl:mt-[15px] 3xl:mt-[18px] flex items-center justify-center lg:mt-[11px] text-center w-[86%] xl:mt-[13px]"
                leftIcon={
                  <Img
                    src="images/img_alarm.svg"
                    className="text-center lg:w-[14px] lg:mr-[11px] xl:w-[16px] xl:mr-[12px] 2xl:w-[18px] 2xl:mr-[14px] 3xl:w-[21px] 3xl:mr-[17px]"
                    alt="alarm"
                  />
                }
                shape="CircleBorder30"
                size="md"
                variant="FillBlack900"
              >
                <div className="bg-transparent font-normal not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                  10-18 Mins
                </div>
              </Button>
            </Column>
            <Column
              className="absolute bg-cover bg-repeat justify-end lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] top-[0] w-[100%]"
              style={{ backgroundImage: "url('images/img_group3.png')" }}
            >
              <Img
                src="images/img_imageremovebg.png"
                className="lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] lg:mb-[46px] xl:mb-[52px] 2xl:mb-[59px] 3xl:mb-[71px] lg:mt-[260px] xl:mt-[297px] 2xl:mt-[334px] 3xl:mt-[401px] rounded-radius50 w-[8%]"
                alt="imageremovebg"
              />
            </Column>
          </Stack>
        </Stack>
        <Column className="absolute h-[max-content] inset-y-[0] my-[auto] lg:pl-[40px] xl:pl-[46px] 2xl:pl-[52px] 3xl:pl-[63px] right-[0] shadow-bs w-[25%]">
          <Img
            src="images/img_imageremovebg.png"
            className="lg:h-[48px] xl:h-[55px] 2xl:h-[61px] 3xl:h-[73px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[8px] xl:ml-[9px] rounded-radius405 w-[29%]"
            alt="imageremovebg One"
          />
          <Stack className="lg:h-[334px] xl:h-[381px] 2xl:h-[429px] 3xl:h-[515px] xl:mt-[100px] 2xl:mt-[113px] 3xl:mt-[135px] lg:mt-[88px] w-[100%]">
            <Stack className="absolute lg:h-[244px] xl:h-[279px] 2xl:h-[314px] 3xl:h-[377px] top-[0] w-[100%]">
              <Img
                src="images/img_imageremovebg_81X84.png"
                className="absolute bottom-[10%] lg:h-[48px] xl:h-[55px] 2xl:h-[61px] 3xl:h-[73px] left-[0] w-[20%]"
                alt="imageremovebg Two"
              />
              <Stack className="absolute lg:h-[244px] xl:h-[279px] 2xl:h-[314px] 3xl:h-[377px] left-[2%] rotate-[125deg] w-[98%]">
                <Img
                  src="images/img_imageremovebg_105X94.png"
                  className="absolute lg:h-[62px] xl:h-[71px] 2xl:h-[79px] 3xl:h-[95px] inset-x-[0] mx-[auto] top-[0] w-[23%]"
                  alt="imageremovebg Three"
                />
                <Img
                  src="images/img_imageremovebg_100X110.png"
                  className="absolute lg:h-[59px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] left-[25%] top-[10%] w-[27%]"
                  alt="imageremovebg Four"
                />
                <Img
                  src="images/img_imageremovebg_402X407.png"
                  className="absolute lg:h-[235px] xl:h-[269px] 2xl:h-[302px] 3xl:h-[363px] rounded-radius1465 top-[4%] w-[100%]"
                  alt="imageremovebg Five"
                />
              </Stack>
            </Stack>
            <Img
              src="images/img_imageremovebg_184X179.png"
              className="absolute bottom-[0] lg:h-[108px] xl:h-[123px] 2xl:h-[139px] 3xl:h-[166px] inset-x-[0] mx-[auto] w-[43%]"
              alt="imageremovebg Six"
            />
          </Stack>
        </Column>
      </Stack>
    </>
  );
};

export default FrameOnePage;
