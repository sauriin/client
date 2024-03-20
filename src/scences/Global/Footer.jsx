import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material';
import React from 'react'
import {shades} from '../../theme'

const Footer = () => {
    
    const {palette:{neutral}} = useTheme();
  return (
    <Box mt='70px'p="40px 0" backgroundColor={neutral.light}>
        <Box
            width="80%"
            margin='auto'
            display='flex'
            justifyContent='space-between'
            flexWrap='wrap'
            rowGap='30px'
            columnGap='clamp(20px, 30px, 40px)'>

            <Box width='clamp(20%, 30%, 40%)'>
                    <Typography varient='h4' fontWeight='bold' mb='30px' color={shades.secondary[500]}
                    >
                        ShopNow
                    </Typography>
                <div>
                ShopNow: Shop Smarter, Faster.  Explore a world of products at your fingertips. Effortless browsing, clear information, and instant "Shop Now" buttons make getting what you want a breeze.  Discover your new favorite shopping destination. 
                </div>
            </Box>
            <Box>
                <Typography varient='h4' fontWeight='bold' mb='30px'>
                    About Us
                </Typography>
                <Typography mb='30px'>Careers</Typography>
                <Typography mb='30px'>Our Stores</Typography>
                <Typography mb='30px'>Terms & Conditions</Typography>
                <Typography mb='30px'>Privacy Policy</Typography>
            </Box>

            <Box>
                <Typography varient='h4' fontWeight='bold' mb='30px'>
                    Customer Care
                </Typography>
                <Typography mb='30px'>Careers</Typography>
                <Typography mb='30px'>Track Your Order</Typography>
                <Typography mb='30px'>Cooprate & Bulk Purchasing</Typography>
                <Typography mb='30px'>Returns & Refunds</Typography>
            </Box>

            <Box>
                <Typography varient='h4' fontWeight='bold' mb='30px'>
                    Contact Us
                </Typography>
                <Typography mb='30px'>50 north Prevet Drive, Washington, DC 10501</Typography>
                <Typography mb='30px'>Email: contactus@gmail.com</Typography>
                <Typography mb='30px'>(222)333-7777</Typography>
            </Box>
        </Box>     
    </Box>
  )
}
export default Footer
