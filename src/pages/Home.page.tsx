import { Flex } from '@mantine/core'
import '@mantine/core/styles.css'
import { useState } from 'react'
import HeroBlock from '../components/Hero/HeroBlock'
import { NewsSlider } from '../components/NewsSlider/NewsSlider'
import { PartnersCarousel } from '../components/PartnersCarousel/PartnersCarousel'
import {
    ProjectsGallery,
    ProjectsGalleryType,
} from '../components/PojectsGallery/ProjectsGallery'
import { RussianMap } from '../components/RussianMap/RussianMap'
import { Contacts } from '../components/Сontacts/Contacts'

export const HomePage = () => {
    const [galleryType, setGalleryType] = useState<ProjectsGalleryType>(
        ProjectsGalleryType.Perm
    )

    const galleryTypeClickHandler = (type: ProjectsGalleryType) => {
        setGalleryType(type)
    }

    return (
        <Flex
            bg={'#F8F9FB'}
            direction={'column'}
            w={'100vw'}
            gap={{ base: '90px', lg: '90px' }}
        >
            <HeroBlock />
            <RussianMap galleryTypeClickHandler={galleryTypeClickHandler} />
            <ProjectsGallery
                galleryType={galleryType}
                galleryTypeClickHandler={galleryTypeClickHandler}
            />
            <NewsSlider />
            <Contacts />
            <PartnersCarousel />
        </Flex>
    )
}
