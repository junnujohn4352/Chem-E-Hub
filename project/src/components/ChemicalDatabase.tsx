import { useState } from 'react';
import { Search } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Molecule() {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#4299e1" />
    </mesh>
  );
}

export default function ChemicalDatabase() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-900 pt-8 px-8 ml-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Chemical Database</h1>
        
        <div className="flex items-center mb-8">
          <div className="relative flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for chemical compounds..."
              className="w-full bg-gray-800 text-white px-4 py-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">3D Molecular Viewer</h2>
            <div className="h-[400px] bg-gray-900 rounded-lg">
              <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Molecule />
                <OrbitControls />
              </Canvas>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Properties</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Molecular Weight</span>
                <span className="text-white">--</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Density</span>
                <span className="text-white">--</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Boiling Point</span>
                <span className="text-white">--</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Melting Point</span>
                <span className="text-white">--</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}