import React, { CSSProperties, FC } from 'react'
import Carousel from 'react-slick'
import stylesUntyped from '../../../../../../styles/jss/nextjs-material-kit/pages/componentsSections/carouselStyle.js'
import { Box } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'

import { CT_GridContainer, CT_GridItem, CT_Card } from '@components/ui'
import Image from 'next/image'

const CT_SectionCarousel: FC = (): React.ReactElement => {
  const styles = stylesUntyped as { [key: string]: CSSProperties }

  //   function SampleNextArrow(props) {
  //     const { className, style, onClick } = props
  //     return (
  //       <Box
  //         className={className}
  //         style={{ ...style, display: 'block', background: 'red' }}
  //         onClick={onClick}
  //       />
  //     )
  //   }

  //   function SamplePrevArrow(props) {
  //     const { className, style, onClick } = props
  //     return (
  //       <div
  //         className={className}
  //         style={{ ...style, display: 'block', background: 'green' }}
  //         onClick={onClick}
  //       />
  //     )
  //   }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  }

  return (
    <Box sx={styles.section}>
      <Box sx={styles.container}>
        <CT_GridContainer>
          <CT_GridItem xs={12} sm={12} md={8} styleProps={styles.marginAuto}>
            <CT_Card carousel>
              <Carousel {...settings}>
                <Box>
                  <Image
                    src="/img/bg.jpg"
                    alt="First slide"
                    className="slick-image"
                    width={500}
                    height={315.5}
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOnIcon className="slick-icons" />
                      Yellowstone National Park, United States
                    </h4>
                  </div>
                </Box>
                <div>
                  <Image
                    src="/img/bg2.jpg"
                    alt="Second slide"
                    className="slick-image"
                    width={500}
                    height={315.5}
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOnIcon className="slick-icons" />
                      Somewhere Beyond, United States
                    </h4>
                  </div>
                </div>
                <div>
                  <Image
                    src="/img/bg3.jpg"
                    alt="Third slide"
                    className="slick-image"
                    width={500}
                    height={315.5}
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOnIcon className="slick-icons" />
                      Yellowstone National Park, United States
                    </h4>
                  </div>
                </div>
              </Carousel>
            </CT_Card>
          </CT_GridItem>
        </CT_GridContainer>
      </Box>
    </Box>
  )
}

export default CT_SectionCarousel
