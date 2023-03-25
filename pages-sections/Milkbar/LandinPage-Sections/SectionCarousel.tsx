/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { CSSProperties, FC } from 'react'
import Carousel from 'react-slick'
import stylesUntyped from '../../../styles/project/milkbar/pages/componentsSections/carouselStyle.js'
import { Box } from '@mui/material'

import { CT_GridContainer, CT_GridItem, CT_Card } from '@components/ui'
import Image from 'next/image'

const Milkbar_SectionCarousel: FC = (): React.ReactElement => {
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
      <CT_GridContainer styleProps={{ justifyContent: 'center' }}>
        <CT_GridItem xs={12} sm={12} md={8} styleProps={styles.marginAuto}>
          <h2 css={css({ ...styles.title })}>Our Portfolio</h2>
          <h4 css={css({ ...styles.description })}>
            Includes 3D models and visualisations of buildings, both interior
            and exterior, demonstrating the company{`'`}s ability to create
            accurate and realistic representations of architectural designs. The
            portfolio may also include before-and-after comparisons,
            demonstrating the impact of the company{`'`}s work on a project. A
            well-crafted portfolio highlights the company{`'`}s expertise and
            serves as a valuable tool in attracting new clients.
          </h4>
        </CT_GridItem>
      </CT_GridContainer>
      <CT_GridContainer>
        <CT_GridItem xs={12} sm={12} md={8} styleProps={styles.marginAuto}>
          <CT_Card carousel>
            <Carousel {...settings}>
              <Box>
                <Image
                  src="/img/milkbar/landingpage/portfolio/a2.jpg"
                  alt="First slide"
                  className="slick-image"
                  width={1000}
                  height={500}
                  style={{ width: '100%', height: 'auto' }}
                />
              </Box>
              <Box>
                <Image
                  src="/img/milkbar/landingpage/portfolio/a8.jpg"
                  alt="Second slide"
                  className="slick-image"
                  width={1000}
                  height={500}
                  style={{ width: '100%', height: 'auto' }}
                />
              </Box>
              <Box>
                <Image
                  src="/img/milkbar/landingpage/portfolio/a1lsmall.jpg"
                  alt="Third slide"
                  className="slick-image"
                  width={1000}
                  height={500}
                  style={{ width: '100%', height: 'auto' }}
                />
              </Box>
            </Carousel>
          </CT_Card>
        </CT_GridItem>
      </CT_GridContainer>
    </Box>
  )
}

export default Milkbar_SectionCarousel
