import styled from 'styled-components';
import Container from './Container';
import Marquee from 'react-fast-marquee';
import NextImage from './NextImage';
import { MdLocationOn } from 'react-icons/md';

const Marquees = [
    [
        {
            name: 'MetaTokyo',
            coordinate: [-117, -35],
            imgUrl: '/MetaTokyo.png'
        },
        {
            name: 'Philipp Plein',
            coordinate: [-80, -57],
            imgUrl: '/PhilippPlein.png'
        },
        {
            name: 'FOREVER 21',
            coordinate: [-120, -16],
            imgUrl: '/Forever21.png'
        },
        {
            name: 'Threedium Mall',
            coordinate: [2, 19],
            imgUrl: '/Threedium.png'
        },
        {
            name: 'Dragon City',
            coordinate: [95, -117],
            imgUrl: '/DragonCity.png'
        },
        {
            name: 'CashLabs',
            coordinate: [73, 15],
            imgUrl: '/CashLabs.png'
        },
    ],
    [
        {
            name: 'Metaloop by Kollectiff',
            coordinate: [94, -13],
            imgUrl: '/Kollectiff.png'
        },
        {
            name: 'Selfridges',
            coordinate: [71, 14],
            imgUrl: '/Selfridges.png'
        },
        {
            name: 'Metaparty',
            coordinate: [2, 16],
            imgUrl: '/Metaparty.png'
        },
        {
            name: 'Rarible',
            coordinate: [-44, 70],
            imgUrl: '/Rarible.png'
        },
        {
            name: 'UNXD Luxury District',
            coordinate: [-100,-18],
            imgUrl: '/Luxury District.png'
        },
        {
            name: 'Boson Portal',
            coordinate: [-86, 108],
            imgUrl: '/Boson.png'
        },
    ]
]

const Zones = props => {
    return (
        <StyledZones size="full" id="zones">
            <Container size="full" className="zones-container" flexDirection={"column"}>
                {
                    props.showTitle && (
                        <Container size="large">
                            <h2>ZONES</h2>
                        </Container>
                    )
                }
                <Container size="full" className="marquee-wrapper" flexDirection="column">
                    {Marquees.map((marquee, index) => (
                        <Marquee
                            speed={40}
                            className="marquee-component"
                            gradientColor={[0, 0, 0]} 
                            pauseOnHover
                            key={index}
                            direction={index + 1 % 2 == 2 ? 'left' : 'right'}
                        >
                            <ul className="zone-list">
                                {marquee.map((zone, index) => (
                                    <li key={index} className={zone.name.replace(' ', '-')}>
                                        <a href={`https://play.decentraland.org/?position=${zone.coordinate[0]}%2C${zone.coordinate[1]}`}>
                                            <div className="zone-image">
                                                <NextImage objectFit={'contain'} alt={zone.name} src={'/Teleporters' + zone.imgUrl} layout="fill"/>
                                                <div className="image-overlay">
                                                    <span className="go-to-button" role="button">JUMP IN</span>
                                                </div>
                                            </div>
                                            <div className="zone-info">
                                                <h3>{zone.name}</h3>
                                                <span className="coordinate">
                                                        <MdLocationOn className="icon"/>
                                                        <span>
                                                            {zone.coordinate[0]}, {zone.coordinate[1]}
                                                        </span>
                                                </span>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </Marquee>
                    ))}
                </Container>
            </Container>
        </StyledZones>
    )
}

const StyledZones = styled(Container)`
    /* height: 342px; */
    background: ${props => props.theme.color.black};
    .zones-container {
        padding: 80px 0;
        max-width: 100%;
        h2 {
            color: white;
            font-size: 80px;
            letter-spacing: 0.1em;
        }
        .marquee-wrapper {
            width: 100%;
            .marquee-component {
                margin-top: 32px;
                .marquee {
                    min-width: 0;
                    margin-bottom: 24px;
                }
                .zone-list {
                    display: flex;
                    margin: 0;
                    li {
                        display: flex;
                        flex-direction: column;
                        margin: 0 16px;
                        position: relative;
                        cursor: pointer;
                        .zone-image {
                            width: 264px;
                            height: 304px;
                            position: relative;
                            margin-bottom: 20px;
                            .image-overlay {
                                position: absolute;
                                top: 0;
                                left: 0;
                                background: rgba(0,0,0, 0.4);
                                width: 100%;
                                height: 100%;
                                transition: 0.25s ease-in-out all;
                                pointer-events: none;
                                opacity: 0;
                                .go-to-button {
                                    position: absolute;
                                    top: 40px;
                                    background: black;
                                    color: white;
                                    width: 220px;
                                    height: 60px;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    left: calc(50% - (220px / 2));
                                    top: calc(50% - (60px / 2));
                                    font-size: 32px;
                                }
                            }
                        }
                        .zone-info {
                            display: flex;
                            flex-direction: column;
                            width: 264px;
                            h3 {
                                color: white;
                                font-family: Inter;
                                font-size: 28px;
                                font-weight: 700;
                                width: 100%;
                            }
                            .coordinate {
                                color: white;
                                font-family: inter;
                                margin-top: 8px;
                                display: flex;
                                align-items: center;
                                font-size: 14px;
                                background: slateblue;
                                width: fit-content;
                                padding: 0 12px;
                                border-radius: 20px;
                                height: 28px;
                                .icon {
                                    /* color: slateblue; */
                                    font-size: 18px;
                                }
                                span {
                                    margin-left: 8px;
                                    line-height: 20px;
                                    opacity: 0.7;
                                    font-weight: 600;
                                }
                            }
                        }
                        &:hover {
                            .image-overlay {
                                opacity: 1;
                            }
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: ${props => props.theme.breakpoints.m}) {
        .zones-container {
            padding: 40px 0;
            h2 {
                font-size: 48px;
                text-align: center;
                display: inline-block;
                width: 100%;
            }
            .marquee-wrapper {
                .marquee-component {
                    .overlay {
                        display: none;
                    }
                    .zone-list {

                        li {
                            margin: 0 12px;
                            .zone-image {
                                width: 180px;
                                height: 240px;
                                margin-bottom: 0;
                                .image-overlay {
                                    display: none;
                                }
                            }
                            .zone-info {
                                width: 180px;
                                h3 {
                                    font-size: 24px;
                                    margin-bottom: 8px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default Zones;