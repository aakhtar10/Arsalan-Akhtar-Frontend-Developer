import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";

const Section1 = () => {
    const badge ={
        background: 'rgba(20, 20, 20, 1)'
    }
  return (
    <div className="container1">
      <Box display={"flex" } justifyContent={"center"}>
        <Flex 
        className='section1-container1'
        direction="column" alignItems="left">
          <Text width=' 313px'
          height={'38px'}

h= '24px'
gap= '8px'
opacity= '0px'
fontFamily= 'Outfit'
fontSize= "16px"
fontWeight= '400'
lineHeight= '24px'
textAlign= "left"
borderRadius={'8px'}
padding={'4px, 12px,4px, 12px'}
style={badge}

color= 'rgba(255, 255, 255, 1)'

>🎉 New in AI.GEN: Real Time Interaction</Text>
          <Heading className='section1-container1-heading' as="h1" >
            IOTA polygon serum ipsum
            <br />
            WAX terraUSD gala THETA.
          </Heading>
          <Text  className='section1-container1-text' >
            Chiliz serum TRON dash aave cardano crypto celo. Golem
            <br />
            ankr bancor horizen ethereum quant bitcoin.
          </Text>
          <Button padding='16px, 32px, 16px, 32px'
        background=' linear-gradient(90deg, #9E6EE5 0%, #FA75F8 100%)'
            className='section1-container1-button'
          >
            Get Started
          </Button>
        </Flex>

        <SimpleGrid position={{base:'absolute' , md:'relative'}} className='section1-container2' columns={{ base: 4, md: 3 }} spacing={8} mt={8}>
          <Image
            src="https://s3-alpha-sig.figma.com/img/3f1b/57c9/8400244f681009baef72af1baf9a3364?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hwNGCid-omq7gY3H0BSiALBNKpzkSX6RhlBpsavyRv-EZGg9sL5P4zMHd~senczmpc~hgMuTImTIzCRaZ2baW6weVxkP2SLuS0kGk3aapK0Et3YUwxxQmPYx78plPLJemapUIXz~LuOFEEPp6SYCqmp0AscFAdKpusGY39nTYArdHI0Fjo5lqJr4K-246DLsINzXY6gmyIdzVEW-WRPpgFg-6WonJHR-wObSAHOpfwA9Yg6OX8EQfg3QPs7rtdeKiCHiGW1By9H0X8C3EK8Aznv8tFhx1IUL27ZoUH110xr1SUbpeC8imWkJRl3qdOJ2tLKjcS3SP~t3x2HMAuHpeQ__"
            alt="Elon Musk"
            rounded="md"
            boxSize="150px"
          />
          <Image
            src="https://s3-alpha-sig.figma.com/img/0dde/966a/cc37d31a73c3b33e6d759ed832dd92d7?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kCgPWgBT7t7lwZKtQyBFEcVsrhGgd7Vg84OdpeC3nyHBSgv-zgRAf5F8tpeIv9HEVIvAQbVKoVCJiO8Uwg54HNnwoJDzvdLpdUTrtilD~lrHnpWuvYlOhg~its2XGIshbIis-s8--BSd2mK5~QDy-aws~wOXFP2YoaVxUFoc~SpXIkXRu-EccJigy0rF7GJOzppPDqFALeJgpo5Bz4euJSuw1VzRMjAbOUi00Ks18SzjgG2G817dBrUfz6DokQFcGLVmLuIrRczOvryPRq~1p7kgqT0YgZ4L6AspuIshzroL9H6QWYqnLCYwxI8AFXGmquSfjoW8CIyd5dkPmw6Tjg__"
            alt="Bill Gates"
            rounded="md"
            boxSize="150px"
          />
          <Image
            src="https://s3-alpha-sig.figma.com/img/1dae/0b6e/baae97643f0b9c05b4470fb61bf90c7d?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OPzuI6Qh3UNg8BrJSlOS5Ixb97ocb8Hs~CDmCEjqUUXj3LddHrSZEUKQy5qWwzX1zs334I9F42Lafrk1K64lxhVGIRez91dShUAtKqaz~dWyMLUVfr5SIPL6PUxYidVv0d1C6BxlsHxamtv8VXPk1yxwPRH84i8J-TskEjjmW-2ku-QPGFvAXnN1DB6LHOQ3bZZ4gitxEAJbfrEzcQflQDDkN08aLy-~AOHTrBS7hXB0RNqRAW8BnTjSJtOsjxjw~vc8M6ybKTk3RvX6DX4NzX~Sr5pwvaggYIDQ8T61gXCj4afO7IGRepbTiVyJ3EWe0UpDTruVDigq8Qlinn83NA__"
            alt="Mark Zuckerberg"
            rounded="md"
            boxSize="150px"
          />
          <Image
            src="https://s3-alpha-sig.figma.com/img/f06e/0a0f/6ea4d876ece72c57bf397574d6577b7e?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eecMxd4py4Fu-f3D4rJDWtG1O5giP0p1LOPDJqHVcoQBW2hFKepli4~TiPq1rejIOuFcdyMCEM55b-PvyVOKpNlZMsEmzDjSJgna7m5vNAHru6tXKZoi2SuHXADCzCrVekgAIQF1dvuF9tI9Vuhx3RDToNxbr6KmK2ffUWSpWiOy8cHcfXQ6S0wQrs64-O0oNsbll4GXPGBLWyC1AeKjKBvmZcWQkTdjTMrfFY26IckNx42N01ohh68Z-R6MZApmN1fIWyk6oEQPyGlmkXurIYTni3I4puolYFUf1Ltfjyu9BA1eSIlzt1GXubsIvNwtPwCNhc0KDRmRi68qDkNazQ__"
            alt="Joe Biden"
            rounded="md"
            boxSize="150px"
          />
          <Image
            src="https://s3-alpha-sig.figma.com/img/554d/d160/64de3dd35e71d9de27d5bb519f0cbf17?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dPPD59vQrHB1oAKeHWWCbIf--hIPZfmhCmwRRbC~5htB~zE13ANs97muljz9EC8OanQ566s7O4kgySXKy~2BWBd2R9uYqjMRMk5PTp0TQlFgDmKU1~w84ZDCgiw1pBnaWNg8DEFqXgBAUZrPj9axvVdhHeqmJfWoX1~9nmH~CKcHcmG6otYoB-~RZnNz86R94uZ8j-mLNRTPxiwriRPM0frpCm9JvaYYMSNL5ixkMLvze7Ruxu3Wjn-12ikTJwJrAsiULCk1ZlGgXUB7eyLTV4ydsiFbdWown3u3kSbyWnr8wSy8~rl-9hzWEGK1N2eKa8~xBro3eg7pr9GWFy3reA__"
            alt="Albert Einstein"
            rounded="md"
            boxSize="150px"
          />
          <Image
            src="https://s3-alpha-sig.figma.com/img/b1e2/b937/2de54997651adf34fdad584b45f0db2c?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n20RSvPeEdmGHMdX6g-4aCa3hIXQHwOVzYAV6mwfFAMmfV~dr6zKuzhzf5fXj3jaJpcizjkVEdoNzILu3HA0KokSgTeLkz20YNA1lLOTC2qd7-M3~haDbn~2S-Af2hw3KV9~lG6C0K8V92ry7IE~4fVlKHcemcNf6CBQ5iEL1vrA6qgWWRqZL7y6HUPIHvrG7K9q49ovI4xvR3GUNFJ5fZRxpvDrCDCrhs01L3YjgCEgYKLMDzIUBkDt9OW7zX~PnNi9m1uQ3XJXYYPfbWRAEy7AduZNy59G6P0jhQ8ZTEu0bzdPb1SCJwsT1bsw9Bb7GoSpaYaPzgp4bckBEXfUGA__"
            alt="Tim Cook"
            rounded="md"
            boxSize="150px"
          />
          <Image
            src="https://s3-alpha-sig.figma.com/img/7379/710d/fd4d1d9f07d4b86af31011601b02db4a?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sk56u-Pj4Op63EqYSuIBRP7bmEU7Mp2Tje~j7U-ZF~msOyVenGoLd1H-TMpAIWwbCh3SM73ngW7Z9FDYeoHUt9zTKtXgKDXAr9gNRQpqtPluZsnBy4w9Pq3PK7XTZUb4tY11~9OCtOXNpkcRk3bXpWCctSmMlBYf1i3zd6~HiKPcmcMAUKdH~uy6GbeaI1emEE7Yc3VoDIZeUEk7Nv1qZj5cT-84AWEPBomeqMZiFH9J0tX-iGxvbEalYzHg3G0IH4lMuRByGUWJ0Mq9Up5X-itnZEcMOhw7v7M8KfB0DPC6hdKMkE1GBk3dvZbaq-96riYJeSL1DIO5AdgIhbK-xw__"
            alt="Young Man"
            rounded="md"
            boxSize="150px"
          />
          <Image
            src="https://s3-alpha-sig.figma.com/img/2956/4f13/41c407227d4ebf55a6614ade4a78eda3?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Epu08wf-DLVoyiyh2O~cgVUkt95fEUN-M5kv1p9HhLMpv-Gs1hPbZf0YQnGOc9UeLptYUxfi-PscJSOyo77iYQcKxE3RoKQ~usCPyrSS~MARaCacRAMpxPijEdNZcDPqhzWz0OlqrMAKFt1co-qFVQlgjVHXyzOtfqiBzsLEHrAsD22cuXJ8SSPiFYg3zDJ-GW2pyQy1aHIvhn8VnWA7XqbBb4ld0oVzIIAwpd3RG5VDjychPzzkPLwpZFxJEL-N2Pk1XN1EkSLwivi2Uf7WfaNDB2RB66LfkaVCcsKWq6W5TU9rhf10MJb~hXDe81~~nqacFT7KqT11Z1s9XGtraw__"
            alt="Man in Hat"
            rounded="md"
            boxSize="150px"
          />
          <Image
            src="https://s3-alpha-sig.figma.com/img/3a76/2de1/7806e7156141700b52c7354586eb74f1?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YYAPchZjFQ5g08xmAMi16NS-R9wjb5UEL0E30F1smE~m50GQqQJLT4h~fH8aEwBgV~eoDXrfu0oZhUfHur-4cErpsiKlStw-IO1Njpwjt6YEhObjtgI5ZN5RDG0LUR76Oe0YePdvL9tnnpT3VebFZrTEeBRRr4oIQ1uqNgN0guBgTEdHbHkyddDS~fnDxWxEPpBZ08utC4GNYhf~VnSj25wagQOXBZGczAJBSlw4i5PPQNWvhqoQKdFjuU~7S9sbGiWuT8CkFZ8HyFlcJ8a8XDCcNAsPlJHcXSm0jNQFnIey7tbw-cBpVgBggBQRNCmG817uv7HccY3gaSgXm937Vw__"
            alt="donald-trump"
            rounded="md"
            boxSize="150px"
          />
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default Section1;
