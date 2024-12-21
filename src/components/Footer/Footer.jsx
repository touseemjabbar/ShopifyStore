import React from 'react';
import { SiShopify } from "react-icons/si";

const Footer = () => {
    return (
        <footer className='py-6 '>
            <div className='container mx-auto px-4'>
                <hr className='border-gray-300 mb-6' />

                <div className='footer flex flex-col md:flex-row md:justify-between'>
                    <div className='flex justify-center md:justify-start mb-6'>
                        <h2 className='text-[40px] font-[600] text-green-600'>
                            <SiShopify />
                        </h2>
                    </div>

                    <div className='part2 flex flex-wrap gap-6 md:gap-8'>
                        <div className='w-full md:w-[20%] text-center md:text-left'>
                            <h2 className='text-[16px] font-[600] mb-3'>Shopify</h2>
                            <ul className='list space-y-2'>
                                <li><a href='/' className='text-[14px] hover:underline'>About</a></li>
                                <li><a href='/' className='text-[14px] hover:underline'>Careers</a></li>
                                <li><a href='/' className='text-[14px] hover:underline'>Investors</a></li>
                                <li><a href='/' className='text-[14px] hover:underline'>Press and Media</a></li>
                                <li><a href='/' className='text-[14px] hover:underline'>Partners</a></li>
                                <li><a href='/' className='text-[14px] hover:underline'>Affiliates</a></li>
                                <li><a href='/' className='text-[14px] hover:underline'>Legal</a></li>
                                <li><a href='/' className='text-[14px] hover:underline'>Service Status</a></li>
                            </ul>
                        </div>

                        <div className='w-full md:w-[20%] text-center md:text-left'>
                            <h2 className='text-[16px] font-[600] mb-3'>Support</h2>
                            <ul className='list space-y-2'>
                                <li><a href='/' className='text-[14px] hover:underline'>Merchant Support</a></li>
                                <li><a href='/' className='text-[14px] hover:underline'>Help Center</a></li>
                                <li><a href='/' className='text-[14px] hover:underline'>Hire a Partner</a></li>
                                <li><a href='/' className='text-[14px] hover:underline'>Shopify Academy</a></li>
                                <li><a href='/' className='text-[14px] hover:underline'>Shopify Community</a></li>
                            </ul>
                        </div>

                        <div className='w-full md:w-[20%] text-center md:text-left'>
                            <h2 className='text-[16px] font-[600] mb-3'>Developer</h2>
                            <ul className='list space-y-2'>
                                <li><a href='/' className='text-[14px] hover:underline'>Shopify.dev</a></li>
                                <li><a href='/' className='text-[14px] hover:underline'>API Documentation</a></li>
                                <li><a href='/' className='text-[14px] hover:underline'>Dev Degree</a></li>
                            </ul>
                        </div>

                        <div className='w-full md:w-[20%] text-center md:text-left'>
                            <h2 className='text-[16px] font-[600] mb-3'>Products</h2>
                            <ul className='list space-y-2'>
                                <li><a href='/' className='text-[14px] hover:underline'>Shop</a></li>
                                <li><a href='/' className='text-[14px] hover:underline'>Shop Pay</a></li>
                                <li><a href='/' className='text-[14px] hover:underline'>Shopify Plus</a></li>
                                <li><a href='/' className='text-[14px] hover:underline'>Shopify Fulfillment Network</a></li>
                                <li><a href='/' className='text-[14px] hover:underline'>Linkpop</a></li>
                                <li><a href='/' className='text-[14px] hover:underline'>Shopify for Enterprise</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
