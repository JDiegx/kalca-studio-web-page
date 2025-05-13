import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from '../components/layout/Header/Header.jsx'
import LinkInBio from '../pages/LinkinBio/LinkInBio.jsx'
import NotFound from '../pages/NotFound/NotFound.jsx'


const Router = () => {
    return (
        <>
        <Header />
        <Routes>
            <Route path="/" element={<LinkInBio />} />
            <Route path="/linkinbio" element={<LinkInBio />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        </>
    )
}

export default Router