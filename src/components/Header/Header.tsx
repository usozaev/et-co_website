import { useEffect, useRef, useState } from 'react'
import classes from './Header.module.css'
import { Box, Burger, CloseIcon } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { HashLink } from 'react-router-hash-link'
import { LogoIcon } from '../../images/icons/logo-icon'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom'

export const Header = () => {
    const headerRef = useRef<HTMLElement>(null)
    const [whiteHeader, setWhiteHeader] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const isMobile = useMediaQuery('(max-width: 1100px)')
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const handleLogoClick = () => {
        navigate('/')
        setMenuOpen(false)
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    const handleHamburgerClick = () => {
        setMenuOpen((prevState) => !prevState)
    }

    const handleMobileClick = () => {
        if (pathname !== '/') {
            navigate('/')
        }
        setMenuOpen(false)
    }

    useEffect(() => {
        const scrollHandler = () => {
            setWhiteHeader(document.documentElement.scrollTop > 0)
        }

        window.addEventListener('scroll', scrollHandler)

        scrollHandler()

        return () => {
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    return (
        <header
            className={`${classes.header} ${whiteHeader ? classes.white : ''} ${
                menuOpen ? classes.open : ''
            }`}
            ref={headerRef}
            style={{ zIndex: 10000 }}
        >
            <div style={{ width: '100%' }}>
                <div className={classes.content}>
                    {menuOpen && isMobile ? (
                        <Box
                            w={'40px'}
                            h={'40px'}
                            style={{ zIndex: 1000 }}
                            onClick={handleLogoClick}
                        >
                            <CloseIcon />
                        </Box>
                    ) : (
                        <a
                            className={classes.logo}
                            onClick={handleLogoClick}
                            style={{ zIndex: 10000, scale: 1.5 }}
                        >
                            <LogoIcon onClick={handleLogoClick} />
                        </a>
                    )}

                    <nav
                        style={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            gap: '24px',
                            alignItems: 'center',
                        }}
                    >
                        <HashLink
                            style={{
                                height: isMobile ? 'fit-content' : '100%',
                                textDecoration: 'none',
                            }}
                            to={'/#projects'}
                            onClick={handleMobileClick}
                            smooth
                        >
                            <a
                                key={'projects'}
                                href={'/projects'}
                                className={classes.link}
                            >
                                Проекты
                            </a>
                        </HashLink>
                        <RouterLink
                            onClick={handleMobileClick}
                            style={{
                                height: isMobile ? 'fit-content' : '100%',
                                textDecoration: 'none',
                            }}
                            to={'/news'}
                        >
                            <a className={classes.link}>Новости</a>
                        </RouterLink>
                        <RouterLink
                            onClick={handleMobileClick}
                            style={{
                                height: isMobile ? 'fit-content' : '100%',
                                textDecoration: 'none',
                            }}
                            to={'/team'}
                        >
                            <a className={classes.link}>Команда</a>
                        </RouterLink>
                        <HashLink
                            style={{
                                height: isMobile ? 'fit-content' : '100%',
                                textDecoration: 'none',
                            }}
                            to={'/#contacts'}
                            onClick={handleMobileClick}
                            smooth
                        >
                            <a className={classes.link}>Контакты</a>
                        </HashLink>
                    </nav>

                    {isMobile &&
                        (menuOpen ? (
                            <Box style={{ zIndex: 1000 }}>
                                <LogoIcon />
                            </Box>
                        ) : (
                            <div className={classes.right}>
                                <Burger
                                    color={'#233C91'}
                                    onClick={handleHamburgerClick}
                                />
                            </div>
                        ))}
                </div>
            </div>
        </header>
    )
}
