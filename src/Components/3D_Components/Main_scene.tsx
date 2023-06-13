/* Main R3F SCENE  */
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import LoadingScreen from "./Environment/LoadingScreen";
import { Sphere } from "@react-three/drei";

type Props = {};

function Main_scene({}: Props) {
  return (
    // AWSD controls

    <Canvas>
      {/* Loading screen */}
      <Suspense fallback={<LoadingScreen />}>
        {/* Lights */}
        <ambientLight color={[1, 1, 1]} intensity={1} />
        <Sphere />

        {/* <PlanetWithPlaneLines position={planetWithLinesPosition} /> */}
      </Suspense>
    </Canvas>
  );
}

export default Main_scene;
