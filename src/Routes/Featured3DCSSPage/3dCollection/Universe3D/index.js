import './styles.css'
import { useEffect } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import moonImage from './media/moon.jpeg'
import moonTextureImage from './media/normal.jpeg'
import background from './media/space.jpeg'
import neptuneImage from './media/neptune.jpeg'
import dots from './media/dots.png'
// import Astronaut from './media/astronaut/Astronaut'

function Universe3D() {
  useEffect(() => {
    const scene = new THREE.Scene()
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#bg'),
    })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Camera <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    // camera tracks and initial position
    const cameraOffset = new THREE.Vector3(-.5, 4, 9)
    const cameraTrack = new THREE.CubicBezierCurve3(new THREE.Vector3(0, 10, 100), new THREE.Vector3(-20, 0, 100), new THREE.Vector3(15, 0, 80), new THREE.Vector3(-5, -1, 0))

    // show tracks
    // const points = cameraTrack.getPoints(50)
    // const lineGeo = new THREE.BufferGeometry().setFromPoints(points)
    // const lineMat = new THREE.LineBasicMaterial({ color: 0x00ffff })
    // const line = new THREE.Line(lineGeo, lineMat)
    // scene.add(line)

    // create camera
    const fov = 60
    const aspect = window.innerWidth / window.innerHeight
    const near = 1.0
    const far = 50.0
    const perspectiveCamera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    const camera = perspectiveCamera
    camera.position.set(0, 15, 95).add(cameraOffset)
    scene.add(perspectiveCamera)

  

    const cameraTargetGeometry = new THREE.SphereGeometry(2, 24, 24)
    const cameraTargetImage = new THREE.MeshStandardMaterial({ color: 0xff6347 })
    const cameraTarget = new THREE.Mesh(cameraTargetGeometry, cameraTargetImage)
    cameraTarget.position.set(0, 15, 95)
    scene.add(cameraTarget)

    // const cameraHelperGeometry = new THREE.SphereGeometry(2, 24, 24)
    // const cameraHelperImage = new THREE.MeshStandardMaterial({ color: 0xff6347 })
    // const cameraHelper = new THREE.Mesh(cameraHelperGeometry, cameraHelperImage)
    // cameraHelper.position.set(0, 15, 95).add(cameraOffset)
    // scene.add(cameraHelper)

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Lights <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    const pointLight = new THREE.PointLight(0xffffff)
    const ambientLight = new THREE.AmbientLight(0xffffff)
    pointLight.position.set(30, 30, 30)
    scene.add(pointLight, ambientLight)
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> helper tools <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    const lightHelper = new THREE.PointLightHelper(pointLight)
    // const gridHelper = new THREE.GridHelper(200, 50)
    const controls = new OrbitControls(camera, renderer.domElement)

    // scene.add(lightHelper, gridHelper)
    scene.add(lightHelper)
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Scenery <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    const spaceTexture = new THREE.TextureLoader().load(background)
    scene.background = spaceTexture

    function addStar() {
      const starGeometry = new THREE.SphereGeometry(THREE.MathUtils.randFloatSpread(0.2), 24, 24)
      const starMaterial = new THREE.MeshStandardMaterial({ color: 0xffffffaf, transparent: true })
      const star = new THREE.Mesh(starGeometry, starMaterial)
      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(100))
      star.position.set(x, y, z)
      scene.add(star)
    }
    Array(500).fill().forEach(addStar)

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Objects <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    const moonGeometry = new THREE.SphereGeometry(4, 64, 32)
    const moonSurfaceImage = new THREE.TextureLoader().load(moonImage)
    const moonTexture = new THREE.TextureLoader().load(moonTextureImage)
    const moonSurface = new THREE.MeshStandardMaterial({ map: moonSurfaceImage, normalMap: moonTexture })
    const moon = new THREE.Mesh(moonGeometry, moonSurface)
    moon.position.setX(-15)
    moon.position.setZ(60)
    scene.add(moon)

    const neptuneGeometry = new THREE.SphereGeometry(8, 64, 32)
    const neptuneSurfaceImage = new THREE.TextureLoader().load(neptuneImage)
    const neptuneTexture = new THREE.TextureLoader().load(moonTextureImage)
    const neptuneSurface = new THREE.MeshStandardMaterial({ map: neptuneSurfaceImage, normalMap: neptuneTexture })
    const neptune = new THREE.Mesh(neptuneGeometry, neptuneSurface)
    neptune.position.setX(-15)
    neptune.position.setZ(15)
    scene.add(neptune)

    const dustPlanetGeometry = new THREE.SphereGeometry(5, 24, 24)
    const dustPlanetImage = new THREE.TextureLoader().load(dots)
    const dustPlanet = new THREE.Mesh(dustPlanetGeometry, new THREE.MeshBasicMaterial({ map: dustPlanetImage, transparent: true }))
    dustPlanet.position.setX(20)
    dustPlanet.position.setZ(40)
    scene.add(dustPlanet)

    // function addRing() {
    //   const ringGeometry = new THREE.RingGeometry(6.1, 6, 200)
    //   ringGeometry.rotateY(2)
    //   ringGeometry.rotateX(2)
    //   const ringMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide })
    //   const ring = new THREE.Mesh(ringGeometry, ringMaterial)
    //   const [x, y, z] = Array(3)
    //   .fill()
    //   .map(() => THREE.MathUtils.randFloatSpread(100))
    //   ring.position.set(x, y, z)
    //   scene.add(ring)
    // }
    // Array(10).fill().forEach(addRing)

    // const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
    // const material = new THREE.MeshStandardMaterial({ color: 0xff6347 })
    // const torus = new THREE.Mesh(geometry, material)
    // scene.add(torus)

    // >>>>>>>>>>>>>>>>>>>>>>>>> To Render and Animate <<<<<<<<<<<<<<<<<<<<
    function animate() {
      requestAnimationFrame(animate)
      dustPlanet.rotation.y -= 0.001
      moon.rotation.y += 0.003
      neptune.rotation.y += 0.003
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    function moveCamera() {
      const t = window.pageYOffset
      // const t = document.body.getBoundingClientRect().top
      // neptune.rotation.z += 0.01
      
      const cameraPos = cameraTrack.getPoint(t * 0.00038)      

      cameraTarget.position.set(cameraPos.x, cameraPos.y, cameraPos.z)
      // cameraHelper.position.set(cameraPos.x, cameraPos.y, cameraPos.z).add(cameraOffset)

      camera.position.set(cameraPos.x, cameraPos.y, cameraPos.z).add(cameraOffset)
    }
    document.body.onscroll = moveCamera
  }, [])

  return (
    <div id='universe3D-wrapper'>
      <canvas id='bg'>
        {/* <Astronaut/> */}
      </canvas>
      <div className='space-scroll-content'>
        <section>
          <p>Section 1</p>
        </section>
        <section>
          <p>Section 2</p>
        </section>
        <section>
          <p>Section 3</p>
        </section>
        <section>
          <p>Section 4</p>
        </section>
      </div>
    </div>
  )
}

export default Universe3D
