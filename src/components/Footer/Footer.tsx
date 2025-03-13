import { Container, Group, ActionIcon, rem } from '@mantine/core'
import {
    IconBrandTwitter,
    IconBrandYoutube,
    IconBrandInstagram,
} from '@tabler/icons-react'
import classes from './Footer.module.css'

export const Footer = () => {
    return (
        <div id={'partners'} className={classes.footer}>
            <Container className={classes.inner}>
                <a href="https://toplogos.ru/logo-sistema/" target="_blank">
                    <img
                        src="https://toplogos.ru/images/thumbs/preview-logo-sistema.png"
                        alt="Логотип Система"
                    />
                </a>
                <Group
                    gap={0}
                    className={classes.links}
                    justify="flex-end"
                    wrap="nowrap"
                >
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandTwitter
                            style={{ width: rem(18), height: rem(18) }}
                            stroke={1.5}
                        />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandYoutube
                            style={{ width: rem(18), height: rem(18) }}
                            stroke={1.5}
                        />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandInstagram
                            style={{ width: rem(18), height: rem(18) }}
                            stroke={1.5}
                        />
                    </ActionIcon>
                </Group>
            </Container>
        </div>
    )
}
