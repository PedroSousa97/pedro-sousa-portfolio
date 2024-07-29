import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import { OrbitControls, Plane, useGLTF } from '@react-three/drei';
import { Row, Col } from 'antd';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import './LandingPage.css';
import ArrowSvg from '../Components/ArrowSvg';

// Extend THREE namespace to include shadowMaterial
extend({ ShadowMaterial: THREE.ShadowMaterial });

const Model = () => {
  const gltf = useGLTF('./uploads_files_4942349_Website+Illustration.glb');
  const textureLoader = new THREE.TextureLoader();
  const imageTexture = textureLoader.load('./certificate.png');
  
  const videoRef = useRef(document.createElement('video'));
  const [videoTexture, setVideoTexture] = useState(null);

  useEffect(() => {
    const video = videoRef.current;
    video.src = './myLife.mp4';
    video.crossOrigin = 'Anonymous';
    video.loop = true;
    video.muted = true;
    video.autoplay = true;
    video.playsInline = true;

    video.play().catch((error) => {
      console.error("Error attempting to play video:", error);
    });

    const checkVideoReady = () => {
      if (video.readyState >= 3) { // HAVE_FUTURE_DATA
        const texture = new THREE.VideoTexture(video);
        setVideoTexture(texture);
      } else {
        requestAnimationFrame(checkVideoReady);
      }
    };

    checkVideoReady();
  }, []);

  useEffect(() => {
    const nodesToRemove = [];
    const nodesnamestoremove = ["Bg", "Plane003", "Picture_base", "Circle", "Mountain_1", "Mountain_2"];
    const nodesToChangeColor = ["Plane001", "Plane002", "Website_Componant_2_001", "Clock_Hands", "Cube028", "Cube007"];
    const newNodesColors = ["#ece0d1", "#ece0d1", "#dbc1ac", "#634832", "#967259", "#967259"];

    gltf.scene.traverse((node) => {
      if (node.isMesh) {
        if (nodesnamestoremove.includes(node.name)) {
          nodesToRemove.push(node);
        } else {
          if (nodesToChangeColor.indexOf(node.name) >= 0) {
            node.material.color = new THREE.Color(newNodesColors[nodesToChangeColor.indexOf(node.name)]);
          }
          node.castShadow = true;
          node.receiveShadow = false;
        }
      }
    });

    nodesToRemove.forEach(node => node.parent.remove(node));
  }, [gltf]);

  return (
    <>
      <primitive object={gltf.scene} />
      <mesh position={[4.93, 4.26, -0.13]}>
        <planeGeometry args={[1.8, 1.52]} />
        <meshBasicMaterial map={imageTexture} transparent />
      </mesh>
      <mesh position={[4.48, .67, 1.66]} rotation={[
        -29 * Math.PI / 180,   // X-axis rotation
        -25 * Math.PI / 180,   // Y-axis rotation
        -13 * Math.PI / 180     // Z-axis rotation
      ]}>
        <planeGeometry args={[0.92, 1.27]} />
        {videoTexture && (
          <meshBasicMaterial map={videoTexture} toneMapped={false} />
        )}
      </mesh>
    </>
  );
};

const CameraController = () => {
  const { camera } = useThree();
  const aspectRatio = window.innerWidth / window.innerHeight;
  const targetPosition = useRef(new THREE.Vector3());
  const currentLookAt = useRef(new THREE.Vector3());

  const defaultLandscapeTargetPosition = new THREE.Vector3(-4, 2, 0);
  const defaultPortraitTargetPosition = new THREE.Vector3(1.5, 3, -15);

  const updateCameraPosition = () => {
    const aspectRatio = window.innerWidth / window.innerHeight;

    if (aspectRatio > 1) { // Landscape
      camera.position.set(3, 3, 10);
      targetPosition.current.copy(defaultLandscapeTargetPosition);
    } else { // Portrait
      camera.position.set(0, 10, 13);
      targetPosition.current.copy(defaultPortraitTargetPosition);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      updateCameraPosition();
    };

    updateCameraPosition();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseMove = (event) => {
    const x = (event.clientX / window.innerWidth) - 0.5;
    const y = (event.clientY / window.innerHeight) - 0.5;

    const aspectRatio = window.innerWidth / window.innerHeight;

    if (aspectRatio > 1) { // Landscape      
      targetPosition.current.x = defaultLandscapeTargetPosition.x + x * 1.2;
      targetPosition.current.y = defaultLandscapeTargetPosition.y - y * 1.2;
    } else { // Portrait      
      targetPosition.current.x = defaultPortraitTargetPosition.x + x * 1.2;
      targetPosition.current.y = defaultPortraitTargetPosition.y - y * 1.2;
    }
  };

  const handleMouseLeave = () => {
    const aspectRatio = window.innerWidth / window.innerHeight;

    if (aspectRatio > 1) { // Landscape      
      targetPosition.current.copy(defaultLandscapeTargetPosition);
    } else { // Portrait      
      targetPosition.current.copy(defaultPortraitTargetPosition);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useFrame(() => {
    currentLookAt.current.lerp(targetPosition.current, 0.1);
    camera.lookAt(currentLookAt.current);
  });

  return null;
};

const Lighting = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight
        intensity={3}
        position={[5, 10, 7.5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
    </>
  );
};

const Ground = () => {
  return (
    <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, 0, 0]}>
      <planeGeometry args={[100, 100]} />
      <shadowMaterial opacity={0.3} />
    </mesh>
  );
};

const ThreeContent = () => {
  const canvasRef = useRef();
  const [controlsEnabled, setControlsEnabled] = useState(true);

  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
    };

    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  const handleMouseDown = () => {
    setControlsEnabled(false);
  };

  const handleMouseUp = () => {
    setControlsEnabled(true);
  };

  return (
    <div
      className="canvas-container"
      ref={canvasRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <Canvas style={{ width: '100%', height: '100%' }} shadows>
        <CameraController />
        <Lighting />
        <Model />
        <Ground />
        {controlsEnabled && <OrbitControls enableZoom={false} />}
      </Canvas>
    </div>
  );
};

function LandingPage() {
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,  // Increased duration for smoother transition
        ease: [0.42, 0, 0.58, 1]  // Custom cubic-bezier for smoother ease-in-out
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,  // Increased stagger for smoother sequence
        delayChildren: 0.1  // Delay for the start of the animation
      }
    }
  };

  return (
    <div className="landing-page">
      {/* First row for main content, beneath text */}
      <Row className="landing-page-row" justify="center" align="middle">
        <Col className="landing-page-column">
          <ThreeContent />
        </Col>
      </Row>
      
      {/* Second row for text, stacked on top */}
      <Row className="landing-page-text-row" justify="center" align="middle">
        <motion.div 
        className="landing-page-text-col"
            variants={containerVariants}
            initial="hidden"
            animate="visible">
            <motion.div className="arrow-container" variants={textVariants}>
              <ArrowSvg />
            </motion.div>
            <motion.h1 className="landing-page-text-name" variants={textVariants}>
              Pedro
            </motion.h1>
            <motion.h1 className="landing-page-text-surname" variants={textVariants}>
              Sousa
            </motion.h1>
            <motion.h2 className="landing-page-text-career" variants={textVariants}>
              Software Engineer & Web Developer
            </motion.h2>
            <motion.p className='landing-page-text-welcome' variants={textVariants}>
              Welcome to my portfolio! Keep scrolling to get to know me better!
            </motion.p>
            <motion.div className="landing-page-text-mouse" variants={textVariants}></motion.div>
        </motion.div>
      </Row>
    </div>
  );
}

export default LandingPage;
