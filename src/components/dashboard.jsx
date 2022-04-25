import React, { useState } from 'react'

const Dashboard = () => {
    return (
        <React.Fragment>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" >
                        <div>
                            <div className="h-full py-6 px-6 rounded-xl border border-gray-200 bg-white">
                                <h5 className="text-xl text-gray-700">Downloads</h5>
                                <div className="my-8" >
                                    <h1 className="text-5xl font-bold text-gray-800" > 64, 5 %</h1 >
                                    <span className="text-gray-500" > Compared to last week $13, 988</span >
                                </div >
                                <svg className="w-full" viewBox="0 0 218 69" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                    <path d="M0 67.5C27.8998 67.5 24.6002 15 52.5 15C80.3998 15 77.1002 29 105 29C132.9 29 128.6 52 156.5 52C184.4 52 189.127 63.8158 217.027 63.8158" stroke="url(#paint0_linear_622:13664)" strokeWidth="3" strokeLinecap="round" />
                                    <defs>
                                        <linearGradient id="paint0_linear_622:13664" x1="217.027" y1="15" x2="7.91244" y2="15" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#4DFFDF" />
                                            <stop offset="1" stop-color="#4DA1FF" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_622:13664" x1="218" y1="18.3748" x2="5.4362" y2="18.9795" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#E323FF" />
                                            <stop offset="1" stop-color="#7517F8" />
                                        </linearGradient>
                                    </defs>
                                </svg >
                                <table className="mt-6  w-full text-gray-600" >
                                    <tbody>
                                        <tr>
                                            <td className="py-2">From new users</td>
                                            <td className="text-gray-500">896</td>
                                            <td>
                                                <svg className="w-16 ml-auto" viewBox="0 0 68 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2" />
                                                    <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2" />
                                                    <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2" />
                                                    <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2" />
                                                    <path d="M0 7C8.62687 7 7.61194 16 17.7612 16C27.9104 16 25.3731 9 34 9C42.6269 9 44.5157 5 51.2537 5C57.7936 5 59.3731 14.5 68 14.5" stroke="url(#paint0_linear_622:13631)" strokeWidth="2" strokeLinejoin="round" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_622:13631" x1="68" y1="7.74997" x2="1.69701" y2="8.10029" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#E323FF" />
                                                            <stop offset="1" stop-color="#7517F8" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </td >
                                        </tr >
                                    </tbody >
                                </table >
                            </div >
                        </div >
                    </div >
        </React.Fragment >
    )
}

export default Dashboard