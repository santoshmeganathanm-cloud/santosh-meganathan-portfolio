import { useEffect, useRef } from "react";
import type * as THREE from "three";

function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let cancelled = false;
    let disposeScene: (() => void) | undefined;

    void import("three")
      .then((THREE) => {
        if (cancelled) return;

        let renderer: THREE.WebGLRenderer;
        try {
          renderer = new THREE.WebGLRenderer({
            canvas,
            alpha: true,
            antialias: true,
          });
        } catch (error) {
          console.warn("3D hero unavailable; showing its static fallback.", error);
          return;
        }

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
        camera.position.set(0, 0, 8.5);

        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
        renderer.setClearColor(0x000000, 0);
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;

        const artwork = new THREE.Group();
        scene.add(artwork);

        const core = new THREE.Mesh(
          new THREE.IcosahedronGeometry(1.48, 5),
          new THREE.MeshPhysicalMaterial({
            color: 0xcda1e8,
            emissive: 0x442455,
            emissiveIntensity: 0.45,
            metalness: 0.46,
            roughness: 0.3,
            clearcoat: 0.65,
          }),
        );
        artwork.add(core);

        const wireframe = new THREE.Mesh(
          new THREE.IcosahedronGeometry(1.56, 2),
          new THREE.MeshBasicMaterial({
            color: 0xead8f4,
            wireframe: true,
            transparent: true,
            opacity: 0.16,
          }),
        );
        artwork.add(wireframe);

        const orbit = new THREE.Mesh(
          new THREE.TorusGeometry(2.03, 0.012, 8, 180),
          new THREE.MeshBasicMaterial({
            color: 0xe9b77b,
            transparent: true,
            opacity: 0.76,
          }),
        );
        orbit.rotation.set(0.94, 0.17, -0.37);
        artwork.add(orbit);

        const secondOrbit = new THREE.Mesh(
          new THREE.TorusGeometry(2.28, 0.006, 8, 180),
          new THREE.MeshBasicMaterial({
            color: 0xa9a4df,
            transparent: true,
            opacity: 0.4,
          }),
        );
        secondOrbit.rotation.set(0.25, 0.82, 0.48);
        artwork.add(secondOrbit);

        const starPositions = new Float32Array(180 * 3);
        for (let index = 0; index < starPositions.length; index += 3) {
          starPositions[index] = (Math.random() - 0.5) * 8;
          starPositions[index + 1] = (Math.random() - 0.5) * 8;
          starPositions[index + 2] = (Math.random() - 0.5) * 3 - 1;
        }
        const starsGeometry = new THREE.BufferGeometry();
        starsGeometry.setAttribute(
          "position",
          new THREE.BufferAttribute(starPositions, 3),
        );
        const stars = new THREE.Points(
          starsGeometry,
          new THREE.PointsMaterial({
            color: 0xd4c0df,
            size: 0.018,
            transparent: true,
            opacity: 0.62,
          }),
        );
        scene.add(stars);

        scene.add(new THREE.AmbientLight(0xf1e3fa, 1.1));
        const keyLight = new THREE.PointLight(0xe4c3f6, 26, 20);
        keyLight.position.set(3.2, 3.5, 5);
        scene.add(keyLight);
        const edgeLight = new THREE.PointLight(0xd99c66, 14, 14);
        edgeLight.position.set(-4, -2, 2);
        scene.add(edgeLight);

        const motionPreference = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        );
        const pointer = { x: 0, y: 0 };
        const onPointerMove = (event: PointerEvent) => {
          const bounds = canvas.getBoundingClientRect();
          pointer.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.3;
          pointer.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 0.2;
        };
        const onPointerLeave = () => {
          pointer.x = 0;
          pointer.y = 0;
        };
        const onContextLost = (event: Event) => {
          event.preventDefault();
          canvas.classList.add("is-unavailable");
          console.warn("3D hero context lost; showing its static fallback.");
        };

        let frameId = 0;
        const resize = () => {
          const bounds = canvas.getBoundingClientRect();
          if (!bounds.width || !bounds.height) return;
          renderer.setSize(bounds.width, bounds.height, false);
          camera.aspect = bounds.width / bounds.height;
          camera.updateProjectionMatrix();
          renderer.render(scene, camera);
        };
        const renderFrame = (time: number) => {
          if (motionPreference.matches || document.hidden) return;
          artwork.rotation.y = time * 0.00012 + pointer.x;
          artwork.rotation.x = Math.sin(time * 0.00016) * 0.09 + pointer.y;
          stars.rotation.y = time * 0.000012;
          renderer.render(scene, camera);
          frameId = window.requestAnimationFrame(renderFrame);
        };
        const startAnimation = () => {
          window.cancelAnimationFrame(frameId);
          if (motionPreference.matches) {
            artwork.rotation.set(0, 0, 0);
            renderer.render(scene, camera);
            return;
          }
          frameId = window.requestAnimationFrame(renderFrame);
        };
        const onVisibilityChange = () => {
          if (document.hidden) {
            window.cancelAnimationFrame(frameId);
          } else {
            startAnimation();
          }
        };

        resize();
        startAnimation();
        window.addEventListener("resize", resize);
        canvas.addEventListener("pointermove", onPointerMove);
        canvas.addEventListener("pointerleave", onPointerLeave);
        canvas.addEventListener("webglcontextlost", onContextLost);
        document.addEventListener("visibilitychange", onVisibilityChange);
        motionPreference.addEventListener("change", startAnimation);

        disposeScene = () => {
          window.cancelAnimationFrame(frameId);
          window.removeEventListener("resize", resize);
          canvas.removeEventListener("pointermove", onPointerMove);
          canvas.removeEventListener("pointerleave", onPointerLeave);
          canvas.removeEventListener("webglcontextlost", onContextLost);
          document.removeEventListener("visibilitychange", onVisibilityChange);
          motionPreference.removeEventListener("change", startAnimation);
          artwork.traverse((object) => {
            if (object instanceof THREE.Mesh) {
              object.geometry.dispose();
              const materials = Array.isArray(object.material)
                ? object.material
                : [object.material];
              materials.forEach((material) => material.dispose());
            }
          });
          starsGeometry.dispose();
          stars.material.dispose();
          renderer.dispose();
        };
      })
      .catch((error: unknown) => {
        if (!cancelled) {
          console.warn("3D hero module failed to load; showing its static fallback.", error);
        }
      });

    return () => {
      cancelled = true;
      disposeScene?.();
    };
  }, []);

  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-visual-fallback" />
      <canvas className="hero-scene-canvas" ref={canvasRef} />
    </div>
  );
}

export default HeroScene;
