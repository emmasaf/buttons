import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    deepBlue: '#025366',
    mars: '#FF7377',
    saturn: '#F2F5F6',
    sandyYellow: '#EDEBCC',
    andromedaeLight: '#FFE7E8',
    siriusLight: '#FFF2E6',
    polarisLight: '#DEF2ED',
    sun: '#FFFFFF',
    //////
    primery: '#F2727D',
    primeryCheck: '#FF7377',
    primeryHover: '#D76064',
    primeryDisable: '#FFC7CA',
    primeryLoading: '#FF7477',
    primeryText: '#FFFFFF',
    primeryDisableText: '#FFFFFF',
    primeryActive:'#FF7477',
    primeryInactive:'#FFE3E5',
    //////
    secondary: '#F1F5F6',
    secondaryCheck: '#025366',
    secondaryHover: '#B2C7CA',
    secondaryDisable: '#FAFCFB',
    secondaryLoading: '#F3FDFF',
    secondaryActive: '#02404F',
    secondaryInactive: '#B3C6CA',
    secondaryText: '#3B6A70',
    secondaryDisableText: '#9DABAB',
    //////
    pseudo: '#FEFFFF',
    pseudoHover: '#F7D7DC',
    pseudoDisable: '#FFFFFF',
    pseudoLoading: '#FFFFFF',
    pseudoText: '#B38383',
    pseudoDisableText: '#ECD7DC',
  },
  breakpoints: ['30em', '48em', '62em', '80em'],
});

export default theme