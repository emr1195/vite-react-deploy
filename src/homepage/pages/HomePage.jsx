import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {startLoadingLandingPage} from '../../store/landingPage'
import './styles.css'
import {
  Events,
  ExpeditionGroup,
  Footer,
  HeroSection,
  History,
  Navbar,
  Organization,
  ProgramStructure,
  
} from '../components'
import {CircularProgress} from '@mui/material'
export const HomePage = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  const {info: navbarInfo} = useSelector((state) => state.navbar)
  
  const {info: heroSectionInfo} = useSelector((state) => state.heroSection)
  const {info: historyInfo} = useSelector((state) => state.history)
  const {info: programStructureInfo} = useSelector(
    (state) => state.programStructure,
  )
  const {info: expeditionGroupInfo} = useSelector(
    (state) => state.expeditionGroup,
  )
  const {info: eventsInfo} = useSelector((state) => state.events)
  const {info: organizationInfo} = useSelector((state) => state.organization)
  const {info: footerInfo} = useSelector((state) => state.footer)

  useEffect(() => {
    dispatch(startLoadingLandingPage())
  }, [])

  useEffect(() => {
    // Check if all data is available and set loading to false
    if (
      navbarInfo &&
      heroSectionInfo &&
  
      historyInfo &&
      programStructureInfo &&
      expeditionGroupInfo &&
      eventsInfo &&
      organizationInfo &&
      footerInfo
    ) {
      setLoading(false)
    }
  }, [
    navbarInfo,
    heroSectionInfo,
    historyInfo,
   
    programStructureInfo,
    expeditionGroupInfo,
    eventsInfo,
    organizationInfo,
    footerInfo,
  ])

  if (loading) {
    return <CircularProgress />
  }

  return (
    <main>
      <Navbar navbarInfo={navbarInfo} />
      <HeroSection heroSectionInfo={heroSectionInfo} />
     
      <History historyInfo={historyInfo} />
      <ProgramStructure programStructureInfo={programStructureInfo} />
      <ExpeditionGroup expeditionGroupInfo={expeditionGroupInfo} />
      <Events eventsInfo={eventsInfo} />
      <Organization organizationInfo={organizationInfo} />
      <Footer footerInfo={footerInfo} />
      {/* {info.listMenu.map((item, index) => (
        <div key={index}>{item.title}</div>
      ))} */}
      {/* Hola Mundo */}
    </main>
  )
}
