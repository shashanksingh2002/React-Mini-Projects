import React from 'react';
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import instagram from '../images/instagram.svg'
import logo from '../images/logo.svg'
const navBarLinksData = [
    {
        "id":1,
        "href":'#',
        "value":"Home"
    },
    {
        "id":2,
        "href":'#',
        "value":"About"
    },
    {
        "id":3,
        "href":'#',
        "value":"Services"
    },
    {
        "id":4,
        "href":'#',
        "value":"Tours"
    }
];


const socialLinksData = [
    {
        "id":1,
        "href":"https://www.facebook.com",
        "value":facebook
    },
    {
        "id":1,
        "href":"https://www.twitter.com",
        "value":twitter
    },
    {
        "id":1,
        "href":"https:www.instagram.com",
        "value":instagram
    }
]

const NavBarLinks = () => {
    return (
        <ul className="nav-bar-links flex">
            {
                navBarLinksData.map(data => {
                    return (
                        <li>
                            <a href={data.href}>&nbsp;{data.value}&nbsp;</a>
                        </li>
                    )
                })
            }
        </ul>
    );
}

const SocialPageLinks = () => {
    return (
        <ul className="social-page-links flex">
            {
                socialLinksData.map(data => {
                    return (
                        <li>
                            <a href={data.href} target='__blank'>
                                <img src={data.value} alt="" />
                            </a>
                        </li>
                    )
                })
            }
        </ul>
   );
}

export const Navigation = () => {
    return (
        <header className="nav-bar flex">
            <img src={logo} alt="" className="left-nav-bar" />
            <NavBarLinks/>
            <SocialPageLinks/>
        </header>
    );
}