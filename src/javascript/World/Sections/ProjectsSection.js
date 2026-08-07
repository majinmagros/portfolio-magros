import * as THREE from 'three'
import Project from './Project'
import gsap from 'gsap'

export default class ProjectsSection
{
    constructor(_options)
    {
        // Options
        this.time = _options.time
        this.resources = _options.resources
        this.camera = _options.camera
        this.passes = _options.passes
        this.objects = _options.objects
        this.areas = _options.areas
        this.zones = _options.zones
        this.tiles = _options.tiles
        this.debug = _options.debug
        this.car = _options.car
        this.x = _options.x
        this.y = _options.y

        // Debug
        if(this.debug)
        {
            this.debugFolder = this.debug.addFolder('projects')
            this.debugFolder.open()
        }

        // Set up
        this.items = []

        this.interDistance = 24
        this.positionRandomess = 5
        this.projectHalfWidth = 9

        this.container = new THREE.Object3D()
        this.container.matrixAutoUpdate = false
        this.container.updateMatrix()

        this.setGeometries()
        this.setMeshes()
        this.setList()
        this.setZone()

        // Add all project from the list
        for(const _options of this.list)
        {
            this.add(_options)
        }
    }

    setGeometries()
    {
        this.geometries = {}
        this.geometries.floor = new THREE.PlaneGeometry(16, 8)
    }

    setMeshes()
    {
        this.meshes = {}

        // this.meshes.boardStructure = this.objects.getConvertedMesh(this.resources.items.projectsBoardStructure.scene.children, { floorShadowTexture: this.resources.items.projectsBoardStructureFloorShadowTexture })
        this.resources.items.areaOpenTexture.magFilter = THREE.NearestFilter
        this.resources.items.areaOpenTexture.minFilter = THREE.LinearFilter
        this.meshes.boardPlane = this.resources.items.projectsBoardPlane.scene.children[0]
        this.meshes.areaLabel = new THREE.Mesh(new THREE.PlaneGeometry(2, 0.5), new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, color: 0xffffff, alphaMap: this.resources.items.areaOpenTexture }))
        this.meshes.areaLabel.matrixAutoUpdate = false
    }

    setList()
    {
        this.list = [
﻿            {
                name: "\ud83d\udd49\ufe0f Ultimate Cosmic Fusion \u2014 Hindu Gods dropping divine beats over ancient myths - magros Zapatero",
                imageSources:
                [
                    "./models/projects/6TXC5G8ecrY/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=6TXC5G8ecrY",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "WARNING: This Drum and Bass Mix Hits HARD \u26a1 Underground DNB - magros Zapatero",
                imageSources:
                [
                    "./models/projects/lTjxgOQEK0U/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=lTjxgOQEK0U",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "Drum'n Bass - magros Zapatero feat.  Bryan Gee playlist",
                imageSources:
                [
                    "./models/projects/GdcuXYKnJzQ/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=GdcuXYKnJzQ",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "Hypnotic Dark Techno   magros @GG",
                imageSources:
                [
                    "./models/projects/ilRqtcjwmUI/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=ilRqtcjwmUI",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "Drum'n Bass - magros Zapatero - Scouter DBZ - feat. Upgrade playlist mix",
                imageSources:
                [
                    "./models/projects/BTKcgvYx81o/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=BTKcgvYx81o",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "Hypnotic Dark Techno - magros spinning live set ib 23 avril 2015",
                imageSources:
                [
                    "./models/projects/0rDahsPYsuw/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=0rDahsPYsuw",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "Bj\u00f6rk von Hohenheim -  Hypnotic Dark Techno @Fiteiro Cultural IB 18 Dez 2014",
                imageSources:
                [
                    "./models/projects/b3bEWOfiyX4/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=b3bEWOfiyX4",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "Bj\u00f6rk von Hohenheim - Hypnotic Minimal Tech",
                imageSources:
                [
                    "./models/projects/16yZ6EtZ9cE/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=16yZ6EtZ9cE",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "magros Zapatero at Second Life.",
                imageSources:
                [
                    "./models/projects/X6qUXQNrGck/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=X6qUXQNrGck",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "Drum'n Bass - magros Zapatero feat. Simula & Bou playlist mix",
                imageSources:
                [
                    "./models/projects/16GcWSNAukk/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=16GcWSNAukk",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "Bj\u00f6rk von Hohenheim - Hypnotic Techno Music",
                imageSources:
                [
                    "./models/projects/_urGBUhH1yI/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=_urGBUhH1yI",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "Hypnotic Techno Music  - magros Connecting to host - Agros.Net",
                imageSources:
                [
                    "./models/projects/YGNeX2oS7Hw/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=YGNeX2oS7Hw",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "Bj\u00f6rk von Hohenheim - Techno magros @GG",
                imageSources:
                [
                    "./models/projects/jkz_8LCdwb8/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=jkz_8LCdwb8",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "Hypnotic Techno Experimental -  magros Zapatero",
                imageSources:
                [
                    "./models/projects/VhZqA0Lpw6A/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=VhZqA0Lpw6A",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "Bj\u00f6rk von Hohenheim - Hypnotic Dark Techno @Fiteiro Cultural 06 nov 2012",
                imageSources:
                [
                    "./models/projects/npSbYthBTo4/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=npSbYthBTo4",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "\ud83d\udc7b Bj\u00f6rk von Hohenheim - Hypnotic Dark Techno - Halloween Party at home - Music to Code Oct 31 2025 \ud83c\udf83",
                imageSources:
                [
                    "./models/projects/3rua9eShUvQ/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=3rua9eShUvQ",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "\ud83d\udc7b Bj\u00f6rk von Hohenheim - Hypnotic Dark Techno - Halloween Party at home - Music to Relax Oct 312025 \ud83c\udf83",
                imageSources:
                [
                    "./models/projects/5PGFT_V0WqY/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=5PGFT_V0WqY",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "Drum'n Bass - magros Zapatero feat. BreaK and Update",
                imageSources:
                [
                    "./models/projects/o4gCBe-Shsc/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=o4gCBe-Shsc",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "Hypnotic Dark Techno @ Taclsen (4)",
                imageSources:
                [
                    "./models/projects/nr0uJ5OT5Us/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=nr0uJ5OT5Us",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "Bj\u00f6rk von Hohenheim - Astronema - Hypnotic Minimal Tech",
                imageSources:
                [
                    "./models/projects/-nX70DG4iEM/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=-nX70DG4iEM",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "Dubstep - magros Zapatero - Peekaboo",
                imageSources:
                [
                    "./models/projects/8BDzg6pM5as/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=8BDzg6pM5as",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "Dubstep - magros Zapatero - Hamdi",
                imageSources:
                [
                    "./models/projects/Ya4g2Wwizt0/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=Ya4g2Wwizt0",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "Dubstep - magros Zapatero - Sinestro Corps",
                imageSources:
                [
                    "./models/projects/rxoQ65YCSeE/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=rxoQ65YCSeE",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "Dark Techno VS Psy Techno - Bj\u00f6rk von Hohenheim",
                imageSources:
                [
                    "./models/projects/OvYhhKYvjGI/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=OvYhhKYvjGI",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "Top 25 Drum & Bass Bangers Of 2025",
                imageSources:
                [
                    "./models/projects/bh9TcthCMXo/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=bh9TcthCMXo",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "Deep Techno & Minimal Mix - Bj\u00f6rk von Hohenheim",
                imageSources:
                [
                    "./models/projects/3aYie-u93bQ/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=3aYie-u93bQ",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "Psy Techno VS Dark Techno - Bj\u00f6rk von Hohenheim",
                imageSources:
                [
                    "./models/projects/b2iNwqheRcI/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=b2iNwqheRcI",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "\u26a0\ufe0f WARNING: This Underground Minimal & Dark Techno Set Hits HARD - Bj\u00f6rk von Hohenheim",
                imageSources:
                [
                    "./models/projects/_rF3OvKj_QY/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=_rF3OvKj_QY",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "LITERALLY BREAK YOUR SPEAKERS \ud83d\ude31\ud83d\udd25 #HeaviestBass2026 - magros Zapatero",
                imageSources:
                [
                    "./models/projects/12PJPz12Zks/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=12PJPz12Zks",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "ARE YOU READY TO GET WRECKED?  Bj\u00f6rk von Hohenheim",
                imageSources:
                [
                    "./models/projects/a62ogSVllIk/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=a62ogSVllIk",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "Lost in Hypnosis: Deep Techno That Will Trap You for Hours And You'll Love It - Bj\u00f6rk von Hohenheim",
                imageSources:
                [
                    "./models/projects/yE-DC6na78s/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=yE-DC6na78s",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "WARNING: Underground Techno So Dark It Might Ruin EDM Music for You Forever  - Bj\u00f6rk von Hohenheim",
                imageSources:
                [
                    "./models/projects/72x9hi3zZsc/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=72x9hi3zZsc",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "Commercial EDM Makes You Sick, This Underground Mix Will Break Your Brain  - Bj\u00f6rk von Hohenheim",
                imageSources:
                [
                    "./models/projects/onHts4ou9VQ/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=onHts4ou9VQ",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "If You Like Mainstream EDM... DON'T CLICK! Real Dark Techno Only \ud83d\ude08 - Anubis -  magros Zapatero",
                imageSources:
                [
                    "./models/projects/6psUhxFXT6s/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=6psUhxFXT6s",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "YOU'RE NOT READY for this Underground Techno 2026 \ud83d\udc80 - Hathor - Bj\u00f6rk von Hohenheim",
                imageSources:
                [
                    "./models/projects/nyRFpKrxxwg/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=nyRFpKrxxwg",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "This Hypnotic Minimal Techno Set Will MELT Your Brain in 2026 \ud83d\udd25- Hathor - Bj\u00f6rk von Hohenheim",
                imageSources:
                [
                    "./models/projects/3xWSSlkd4OA/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=3xWSSlkd4OA",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "DRUM & BASS Mix 2025 \ud83d\udd25 Jump Up, Neurofunk & Underground DnB",
                imageSources:
                [
                    "./models/projects/ZU8pCRApdIY/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=ZU8pCRApdIY",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "This Drum & Bass Set Will Melt Your Brain (Jump Up / Neurofunk / Techstep) - magros Zapatero",
                imageSources:
                [
                    "./models/projects/fToez0H0b24/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=fToez0H0b24",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "The FORBIDDEN PLAYLIST of the Gods: Peak Time Techno through Greek Myth - magros Zapatero",
                imageSources:
                [
                    "./models/projects/VijQJQUev5s/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=VijQJQUev5s",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "Hindu Myth - Ramayana - magros Zapatero",
                imageSources:
                [
                    "./models/projects/Zf7V-rnzUmc/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=Zf7V-rnzUmc",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "Description",
                imageSources:
                [
                    "./models/projects/kwezBVvpE4Y/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=kwezBVvpE4Y",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "Greek MythForbidden",
                imageSources:
                [
                    "./models/projects/_SR8QLn7gVU/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=_SR8QLn7gVU",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "Cyber DJ Live Set \u2014 Drum & Bass 180+ BPM Mix | feat. Nick a Lot",
                imageSources:
                [
                    "./models/projects/E4TMRkQniWo/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=E4TMRkQniWo",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "Bj\u00f6rk von Hohenheim - Hypnotic Dark Techno - Part 1",
                imageSources:
                [
                    "./models/projects/SO0R5dDTl3Y/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=SO0R5dDTl3Y",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "24 de maio de 2026",
                imageSources:
                [
                    "./models/projects/4lYllo4L0d8/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=4lYllo4L0d8",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
            {
                name: "Bj\u00f6rk von Hohenheim - Hypnotic Dark Techno - Part 2",
                imageSources:
                [
                    "./models/projects/5-k3_lFRLHA/slideA.jpg"
                ],
                link:
                {
                    href: "https://www.youtube.com/watch?v=5-k3_lFRLHA",
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            },
        ]
    }

    setZone()
    {
        const totalWidth = this.list.length * (this.interDistance / 2)

        const zone = this.zones.add({
            position: { x: this.x + totalWidth - this.projectHalfWidth - 6, y: this.y },
            halfExtents: { x: totalWidth, y: 12 },
            data: { cameraAngle: 'projects' }
        })

        zone.on('in', (_data) =>
        {
            this.camera.angle.set(_data.cameraAngle)
            gsap.to(this.passes.horizontalBlurPass.material.uniforms.uStrength.value, { x: 0, duration: 2 })
            gsap.to(this.passes.verticalBlurPass.material.uniforms.uStrength.value, { y: 0, duration: 2 })
        })

        zone.on('out', () =>
        {
            this.camera.angle.set('default')
            gsap.to(this.passes.horizontalBlurPass.material.uniforms.uStrength.value, { x: this.passes.horizontalBlurPass.strength, duration: 2 })
            gsap.to(this.passes.verticalBlurPass.material.uniforms.uStrength.value, { y: this.passes.verticalBlurPass.strength, duration: 2 })
        })
    }

    add(_options)
    {
        const x = this.x + this.items.length * this.interDistance
        let y = this.y
        if(this.items.length > 0)
        {
            y += (Math.random() - 0.5) * this.positionRandomess
        }

        // Create project
        const project = new Project({
            time: this.time,
            resources: this.resources,
            objects: this.objects,
            areas: this.areas,
            geometries: this.geometries,
            meshes: this.meshes,
            debug: this.debugFolder,
            car: this.car,
            x: x,
            y: y,
            ..._options
        })

        this.container.add(project.container)

        // Add tiles
        if(this.items.length >= 1)
        {
            const previousProject = this.items[this.items.length - 1]
            const start = new THREE.Vector2(previousProject.x + this.projectHalfWidth, previousProject.y)
            const end = new THREE.Vector2(project.x - this.projectHalfWidth, project.y)
            const delta = end.clone().sub(start)
            this.tiles.add({
                start: start,
                delta: delta
            })
        }

        // Save
        this.items.push(project)
    }
}