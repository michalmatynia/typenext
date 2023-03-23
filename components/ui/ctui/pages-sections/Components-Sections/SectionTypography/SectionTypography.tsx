/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { CSSProperties, FC } from 'react'

import stylesUntyped from '../../../../../../styles/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js'
import { Box } from '@mui/material'
import {
  CT_GridContainer,
  CT_GridItem,
  CT_Quote,
  CT_Muted,
  CT_Primary,
  CT_Info,
  CT_Success,
  CT_Warning,
  CT_Danger,
  CT_Small,
} from '@components/ui'
import { selectedStyle } from '@lib/component-helpers/nextjs-material-kit/styleSelectors'
import Image from 'next/image'

const CT_SectionTypography: FC = (): React.ReactElement => {
  const styles = stylesUntyped as { [key: string]: CSSProperties }

  const TitleStyle = css({
    ...selectedStyle('title', styles),
  })

  return (
    <Box sx={styles.section}>
      <Box sx={styles.container}>
        <Box id="typography">
          <Box sx={styles.title}>
            <h2>Typography</h2>
          </Box>
          <CT_GridContainer>
            <Box sx={styles.typo}>
              <Box sx={styles.note}>Header 1</Box>
              <h1>The Life of Material Kit</h1>
            </Box>
            <Box sx={styles.typo}>
              <Box sx={styles.note}>Header 2</Box>
              <h2>The Life of Material Kit</h2>
            </Box>
            <Box sx={styles.typo}>
              <Box sx={styles.note}>Header 3</Box>
              <h3>The Life of Material Kit</h3>
            </Box>
            <Box sx={styles.typo}>
              <Box sx={styles.note}>Header 4</Box>
              <h4>The Life of Material Kit</h4>
            </Box>
            <Box sx={styles.typo}>
              <Box sx={styles.note}>Header 5</Box>
              <h5>The Life of Material Kit</h5>
            </Box>
            <Box sx={styles.typo}>
              <Box sx={styles.note}>Header 6</Box>
              <h6>The Life of Material Kit</h6>
            </Box>
            <Box sx={styles.typo}>
              <Box sx={styles.note}>Header 1</Box>
              <h1 css={TitleStyle}>The Life of Material Kit</h1>
            </Box>
            <Box sx={styles.typo}>
              <Box sx={styles.note}>Header 2</Box>
              <h2 css={TitleStyle}>The Life of Material Kit</h2>
            </Box>
            <Box sx={styles.typo}>
              <Box sx={styles.note}>Header 3</Box>
              <h3 css={TitleStyle}>The Life of Material Kit</h3>
            </Box>
            <Box sx={styles.typo}>
              <Box sx={styles.note}>Header 4</Box>
              <h4 css={TitleStyle}>The Life of Material Kit</h4>
            </Box>
            <Box sx={styles.typo}>
              <Box sx={styles.note}>Paragraph</Box>
              <p>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers. I understand
                culture. I am the nucleus. I think that’s a responsibility that
                I have, to push possibilities, to show people, this is the level
                that things could be at.
              </p>
            </Box>
            <Box sx={styles.typo}>
              <Box sx={styles.note}>Quote</Box>
              <CT_Quote
                text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
                author=" Kanye West, Musician"
              />
            </Box>
            <Box sx={styles.typo}>
              <Box sx={styles.note}>Muted Text</Box>
              <CT_Muted>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers...
              </CT_Muted>
            </Box>
            <Box sx={styles.typo}>
              <Box sx={styles.note}>Primary Text</Box>
              <CT_Primary>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers...
              </CT_Primary>
            </Box>
            <Box sx={styles.typo}>
              <Box sx={styles.note}>Info Text</Box>
              <CT_Info>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers...
              </CT_Info>
            </Box>
            <Box sx={styles.typo}>
              <Box sx={styles.note}>Success Text</Box>
              <CT_Success>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers...
              </CT_Success>
            </Box>
            <Box sx={styles.typo}>
              <Box sx={styles.note}>Warning Text</Box>
              <CT_Warning>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers...
              </CT_Warning>
            </Box>
            <Box sx={styles.typo}>
              <Box sx={styles.note}>Danger Text</Box>
              <CT_Danger>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers...
              </CT_Danger>
            </Box>
            <Box sx={styles.typo}>
              <Box sx={styles.note}>Small Tag</Box>
              <h2>
                Header with small subtitle
                <br />
                <CT_Small>Use {'"Small"'} tag for the headers</CT_Small>
              </h2>
            </Box>
          </CT_GridContainer>
        </Box>
        <Box sx={styles.space50} />
        <Box id="images">
          <Box sx={styles.title}>
            <h2>Images</h2>
          </Box>
          <br />
          <CT_GridContainer>
            <CT_GridItem xs={12} sm={2}>
              <h4>Rounded Image</h4>
              <Image
                src="/img/faces/avatar.jpg"
                alt="..."
                width={500}
                height={500}
                css={css({ ...styles.imgRounded, ...styles.imgFluid })}
              />
            </CT_GridItem>
            <CT_GridItem xs={12} sm={2} styleProps={styles.marginLeft}>
              <h4>Circle Image</h4>
              <Image
                src="/img/faces/avatar.jpg"
                alt="..."
                width={500}
                height={500}
                css={css({ ...styles.imgRoundedCircle, ...styles.imgFluid })}
              />
            </CT_GridItem>
            <CT_GridItem xs={12} sm={2} styleProps={styles.marginLeft}>
              <h4>Rounded Raised</h4>
              <Image
                src="/img/faces/avatar.jpg"
                alt="..."
                width={500}
                height={500}
                css={css({
                  ...styles.imgRaised,
                  ...styles.imgRounded,
                  ...styles.imgFluid,
                })}
              />
            </CT_GridItem>
            <CT_GridItem xs={12} sm={2} styleProps={styles.marginLeft}>
              <h4>Circle Raised</h4>
              <Image
                src="/img/faces/avatar.jpg"
                alt="..."
                width={500}
                height={500}
                css={css({
                  ...styles.imgRaised,
                  ...styles.imgRoundedCircle,
                  ...styles.imgFluid,
                })}
              />
            </CT_GridItem>
          </CT_GridContainer>
          <CT_GridContainer />
        </Box>
        <Box sx={styles.space50} />
      </Box>
    </Box>
  )
}

export default CT_SectionTypography
