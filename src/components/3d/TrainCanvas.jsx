import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function TrainCanvas({ scrollProgressRef, mousePosRef }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene & Cinematic Fog
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050505);
    scene.fog = new THREE.FogExp2(0x050505, 0.012);

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 3.8, 18);

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    // Cap pixel ratio at 1.5 for better performance on high-DPI displays
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    containerRef.current.appendChild(renderer.domElement);

    // 4. Refined Controlled Environmental Lighting System
    const ambientLight = new THREE.AmbientLight(0x0A0A0A, 2.0);
    scene.add(ambientLight);

    // Main Gold Directional Light (Soft Warm Sun/Key Light)
    const keyGoldLight = new THREE.DirectionalLight(0xF5C542, 2.2);
    keyGoldLight.position.set(12, 18, 12);
    scene.add(keyGoldLight);

    // Subtle Rim Gold Light (Creates elegant rim highlight on train hull)
    const rimGoldLight = new THREE.DirectionalLight(0xD4AF37, 1.4);
    rimGoldLight.position.set(-15, 8, -15);
    scene.add(rimGoldLight);

    // Train Headlight Spotlight (Soft warm gold light projecting down the track)
    const trainSpotlight = new THREE.SpotLight(0xF5C542, 6.0, 50, Math.PI / 7, 0.7, 1.5);
    trainSpotlight.position.set(0, 1.8, 7.5);
    trainSpotlight.target.position.set(0, 0, 45);
    scene.add(trainSpotlight);
    scene.add(trainSpotlight.target);

    // 5. Cinematic Procedural Metallic Maglev Train
    const trainGroup = new THREE.Group();

    // High-Quality Metallic Materials
    const obsidianHullMat = new THREE.MeshStandardMaterial({
      color: 0x0A0A0A,
      metalness: 0.95,
      roughness: 0.15,
    });

    const goldTrimMat = new THREE.MeshStandardMaterial({
      color: 0xD4AF37,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x443000,
      emissiveIntensity: 0.25,
    });

    const warmCabinMat = new THREE.MeshStandardMaterial({
      color: 0xE8D7A8,
      emissive: 0xD4AF37,
      emissiveIntensity: 0.6,
      roughness: 0.3,
    });

    const thrusterUnderglowMat = new THREE.MeshBasicMaterial({
      color: 0xF5C542,
      transparent: true,
      opacity: 0.45,
    });

    // Lead Engine Car
    const leadBodyGeo = new THREE.BoxGeometry(2.5, 2.1, 10.5);
    const leadBody = new THREE.Mesh(leadBodyGeo, obsidianHullMat);
    leadBody.position.y = 1.5;
    trainGroup.add(leadBody);

    // Aerodynamic Nose
    const noseGeo = new THREE.ConeGeometry(1.55, 3.8, 4);
    const nose = new THREE.Mesh(noseGeo, obsidianHullMat);
    nose.rotation.x = Math.PI / 2;
    nose.rotation.y = Math.PI / 4;
    nose.position.set(0, 1.35, 6.7);
    trainGroup.add(nose);

    // Elegant Metallic Gold Side Trim Ribbons
    const trimGeo = new THREE.BoxGeometry(2.56, 0.08, 10.6);
    const trimLower = new THREE.Mesh(trimGeo, goldTrimMat);
    trimLower.position.y = 1.05;
    trainGroup.add(trimLower);

    const trimUpper = new THREE.Mesh(trimGeo, goldTrimMat);
    trimUpper.position.y = 2.25;
    trainGroup.add(trimUpper);

    // Cabin Windows with Warm Refined Lighting
    for (let z = -3.8; z <= 3.8; z += 1.8) {
      const windowGeo = new THREE.BoxGeometry(2.62, 0.45, 0.95);
      const windowMesh = new THREE.Mesh(windowGeo, warmCabinMat);
      windowMesh.position.set(0, 1.7, z);
      trainGroup.add(windowMesh);
    }

    // Maglev Levitation Thruster Rails (Soft Underglow)
    const thrusterRailGeo = new THREE.BoxGeometry(2.1, 0.08, 10);
    const thrusterRail = new THREE.Mesh(thrusterRailGeo, thrusterUnderglowMat);
    thrusterRail.position.set(0, 0.3, 0);
    trainGroup.add(thrusterRail);

    // Passenger Coaches (2 attached behind)
    for (let c = 1; c <= 2; c++) {
      const coachGroup = new THREE.Group();
      const coachBody = new THREE.Mesh(new THREE.BoxGeometry(2.45, 2.05, 9.5), obsidianHullMat);
      coachBody.position.y = 1.5;
      coachGroup.add(coachBody);

      const coachTrim = new THREE.Mesh(new THREE.BoxGeometry(2.51, 0.07, 9.6), goldTrimMat);
      coachTrim.position.y = 1.05;
      coachGroup.add(coachTrim);

      for (let z = -3.2; z <= 3.2; z += 1.6) {
        const wMesh = new THREE.Mesh(new THREE.BoxGeometry(2.52, 0.4, 0.85), warmCabinMat);
        wMesh.position.set(0, 1.65, z);
        coachGroup.add(wMesh);
      }

      coachGroup.position.z = -c * 11.2;
      trainGroup.add(coachGroup);
    }

    trainGroup.position.set(0, 0, 0);
    scene.add(trainGroup);

    // 6. Refined Levitating Track Bed & Distant Environment
    const trackGroup = new THREE.Group();
    const trackLength = 220;

    const darkRailMat = new THREE.MeshStandardMaterial({
      color: 0x111111,
      metalness: 0.9,
      roughness: 0.2,
    });

    const goldRailMat = new THREE.MeshStandardMaterial({
      color: 0xD4AF37,
      metalness: 0.95,
      roughness: 0.15,
      emissive: 0x443000,
      emissiveIntensity: 0.2,
    });

    // Left & Right Metallic Levitation Rails
    const railGeo = new THREE.BoxGeometry(0.25, 0.2, trackLength);
    const railLeft = new THREE.Mesh(railGeo, goldRailMat);
    railLeft.position.set(-1.5, 0.08, 0);
    trackGroup.add(railLeft);

    const railRight = new THREE.Mesh(railGeo, goldRailMat);
    railRight.position.set(1.5, 0.08, 0);
    trackGroup.add(railRight);

    // Sleepers with Controlled Gold Illumination (Fading into distance)
    const sleeperDarkGeo = new THREE.BoxGeometry(3.4, 0.06, 0.25);
    const sleeperGoldGeo = new THREE.BoxGeometry(3.4, 0.06, 0.25);

    for (let z = -110; z < 110; z += 3.5) {
      const isGoldNode = Math.abs(z % 14) === 0;
      const sleeper = new THREE.Mesh(
        isGoldNode ? sleeperGoldGeo : sleeperDarkGeo,
        isGoldNode ? goldRailMat : darkRailMat
      );
      sleeper.position.set(0, -0.04, z);
      trackGroup.add(sleeper);
    }

    // Subtle Architectural Route Arches in Background
    const archMat = new THREE.MeshStandardMaterial({
      color: 0x0D0D0D,
      metalness: 0.8,
      roughness: 0.4,
    });

    for (let z = -90; z <= 70; z += 32) {
      const archGroup = new THREE.Group();
      const pillarLeft = new THREE.Mesh(new THREE.BoxGeometry(0.5, 12, 0.5), archMat);
      pillarLeft.position.set(-10, 5, 0);
      archGroup.add(pillarLeft);

      const pillarRight = new THREE.Mesh(new THREE.BoxGeometry(0.5, 12, 0.5), archMat);
      pillarRight.position.set(10, 5, 0);
      archGroup.add(pillarRight);

      const beam = new THREE.Mesh(new THREE.BoxGeometry(20.5, 0.4, 0.5), archMat);
      beam.position.set(0, 11, 0);
      archGroup.add(beam);

      // Faint gold accent light on arch beam
      const archGoldLine = new THREE.Mesh(new THREE.BoxGeometry(20.6, 0.08, 0.52), goldTrimMat);
      archGoldLine.position.set(0, 10.8, 0);
      archGroup.add(archGoldLine);

      archGroup.position.z = z;
      trackGroup.add(archGroup);
    }

    scene.add(trackGroup);

    // 7. Sparse, Soft, Depth-Aware Atmospheric Dust Particle System (NO RANDOMS/NO NOISE)
    const particleCount = 80; // Reduced from 120 for better performance
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePos[i * 3] = (Math.random() - 0.5) * 45;
      particlePos[i * 3 + 1] = Math.random() * 25 - 2;
      particlePos[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xE8D7A8,
      size: 0.22,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 8. Ultra-Smooth Cinematic Render Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Subtle organic train floating (Gentle, physical maglev levitation)
      if (!prefersReducedMotion) {
        trainGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.04 + 0.08;
        trainGroup.rotation.z = Math.sin(elapsedTime * 0.8) * 0.004;

        // Slow track motion illusion
        trackGroup.position.z = (elapsedTime * 3.5) % 3.5;

        // Faint atmospheric particle drift (predictable & smooth)
        particleSystem.rotation.y = elapsedTime * 0.008;
      }

      // Read scroll and mouse from refs (not props) to avoid re-renders
      const scrollProgress = scrollProgressRef?.current || 0;
      const mousePos = mousePosRef?.current || { x: 0, y: 0 };

      // Smooth Camera Progression along train track based on scroll
      const scrollOffset = scrollProgress * -75;
      const targetCamZ = 18 + scrollOffset;
      const targetCamY = 3.8 + Math.sin(scrollProgress * Math.PI) * 1.5;

      // Ultra-smooth linear interpolation (No camera jitter)
      camera.position.z += (targetCamZ - camera.position.z) * 0.03;
      camera.position.y += (targetCamY - camera.position.y) * 0.03;

      // Subtle cursor parallax
      if (!prefersReducedMotion) {
        camera.position.x += (mousePos.x * 1.2 - camera.position.x) * 0.02;
        camera.lookAt(mousePos.x * 0.3, 1.4, camera.position.z - 20);
      } else {
        camera.lookAt(0, 1.4, camera.position.z - 20);
      }

      renderer.render(scene, camera);
    };

    animate();

    // 9. Responsive Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []); // Empty dependency array - scene initializes once and never re-mounts

  return (
    <div
      ref={containerRef}
      id="bg-canvas-container"
      aria-hidden="true"
    />
  );
}
