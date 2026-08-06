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
            {
                name: 'Ultimate Cosmic Fusion',
                imageSources:
                [
                    './models/projects/cosmic-fusion/slideA.jpg'
                ],
                floorTexture: this.resources.items.projectsCitrixRedbullFloorTexture,
                link:
                {
                    href: 'https://www.youtube.com/watch?v=6TXC5G8ecrY',
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
                name: 'Drum and Bass Hits HARD',
                imageSources:
                [
                    './models/projects/dnb-hard/slideA.jpg'
                ],
                floorTexture: this.resources.items.projectsChartogneFloorTexture,
                link:
                {
                    href: 'https://www.youtube.com/watch?v=lTjxgOQEK0U',
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
                name: 'DnB feat. Bryan Gee',
                imageSources:
                [
                    './models/projects/dnb-bryangee/slideA.jpg'
                ],
                floorTexture: this.resources.items.projectsMadboxFloorTexture,
                link:
                {
                    href: 'https://www.youtube.com/watch?v=GdcuXYKnJzQ',
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
                name: 'Hypnotic Dark Techno @GG',
                imageSources:
                [
                    './models/projects/darktechno-gg/slideA.jpg'
                ],
                floorTexture: this.resources.items.projectsOranoFloorTexture,
                link:
                {
                    href: 'https://www.youtube.com/watch?v=ilRqtcjwmUI',
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
                name: 'DnB Scouter DBZ feat. Upgrade',
                imageSources:
                [
                    './models/projects/dnb-dbz/slideA.jpg'
                ],
                floorTexture: this.resources.items.projectsPriorHoldingsFloorTexture,
                link:
                {
                    href: 'https://www.youtube.com/watch?v=BTKcgvYx81o',
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
                name: 'Hypnotic Dark Techno - Live 2015',
                imageSources:
                [
                    './models/projects/darktechno-2015/slideA.jpg'
                ],
                floorTexture: this.resources.items.projectsScoutFloorTexture,
                link:
                {
                    href: 'https://www.youtube.com/watch?v=0rDahsPYsuw',
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
                name: 'Björk von Hohenheim - Dark Techno',
                imageSources:
                [
                    './models/projects/fiteiro-2014/slideA.jpg'
                ],
                floorTexture: this.resources.items.projectsChartogneFloorTexture,
                link:
                {
                    href: 'https://www.youtube.com/watch?v=b3bEWOfiyX4',
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
                name: 'Björk von Hohenheim - Minimal Tech',
                imageSources:
                [
                    './models/projects/minimal-tech/slideA.jpg'
                ],
                floorTexture: this.resources.items.projectsCitrixRedbullFloorTexture,
                link:
                {
                    href: 'https://www.youtube.com/watch?v=16yZ6EtZ9cE',
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
                name: 'Magros Zapatero at Second Life',
                imageSources:
                [
                    './models/projects/secondlife/slideA.jpg'
                ],
                floorTexture: this.resources.items.projectsPriorHoldingsFloorTexture,
                link:
                {
                    href: 'https://www.youtube.com/watch?v=X6qUXQNrGck',
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
                name: 'DnB feat. Simula & Bou',
                imageSources:
                [
                    './models/projects/dnb-simulabou/slideA.jpg'
                ],
                floorTexture: this.resources.items.projectsMadboxFloorTexture,
                link:
                {
                    href: 'https://www.youtube.com/watch?v=16GcWSNAukk',
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
                name: 'Björk von Hohenheim - Techno Music',
                imageSources:
                [
                    './models/projects/techno-music/slideA.jpg'
                ],
                floorTexture: this.resources.items.projectsOranoFloorTexture,
                link:
                {
                    href: 'https://www.youtube.com/watch?v=_urGBUhH1yI',
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
                name: 'Connecting to Host - Agros.Net',
                imageSources:
                [
                    './models/projects/agros-net/slideA.jpg'
                ],
                floorTexture: this.resources.items.projectsScoutFloorTexture,
                link:
                {
                    href: 'https://www.youtube.com/watch?v=YGNeX2oS7Hw',
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
                name: 'Björk von Hohenheim - Techno @GG',
                imageSources:
                [
                    './models/projects/techno-gg/slideA.jpg'
                ],
                floorTexture: this.resources.items.projectsChartogneFloorTexture,
                link:
                {
                    href: 'https://www.youtube.com/watch?v=jkz_8LCdwb8',
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
                name: 'Hypnotic Techno Experimental',
                imageSources:
                [
                    './models/projects/techno-experimental/slideA.jpg'
                ],
                floorTexture: this.resources.items.projectsCitrixRedbullFloorTexture,
                link:
                {
                    href: 'https://www.youtube.com/watch?v=VhZqA0Lpw6A',
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions: []
            }
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