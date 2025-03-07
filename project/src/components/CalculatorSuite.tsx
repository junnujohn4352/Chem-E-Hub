import { useState } from 'react';
import { Calculator as CalcIcon } from 'lucide-react';

type CalculatorType = 'idealGas' | 'reynolds' | 'heatExchanger' | 'unitConverter';

export default function CalculatorSuite() {
  const [activeCalculator, setActiveCalculator] = useState<CalculatorType>('idealGas');
  const [values, setValues] = useState({
    pressure: '',
    volume: '',
    temperature: '',
    moles: ''
  });

  const handleCalculate = () => {
    // Implement calculation logic based on activeCalculator
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-8 px-8 ml-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Engineering Calculator Suite</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {['idealGas', 'reynolds', 'heatExchanger', 'unitConverter'].map((calc) => (
            <button
              key={calc}
              onClick={() => setActiveCalculator(calc as CalculatorType)}
              className={`p-4 rounded-lg flex flex-col items-center justify-center transition-colors ${
                activeCalculator === calc
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <CalcIcon className="w-6 h-6 mb-2" />
              <span className="text-sm font-medium">
                {calc.split(/(?=[A-Z])/).join(' ')}
              </span>
            </button>
          ))}
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-6">
            {activeCalculator.split(/(?=[A-Z])/).join(' ')} Calculator
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Pressure (atm)</label>
                <input
                  type="number"
                  value={values.pressure}
                  onChange={(e) => setValues({ ...values, pressure: e.target.value })}
                  className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Volume (L)</label>
                <input
                  type="number"
                  value={values.volume}
                  onChange={(e) => setValues({ ...values, volume: e.target.value })}
                  className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Temperature (K)</label>
                <input
                  type="number"
                  value={values.temperature}
                  onChange={(e) => setValues({ ...values, temperature: e.target.value })}
                  className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Moles</label>
                <input
                  type="number"
                  value={values.moles}
                  onChange={(e) => setValues({ ...values, moles: e.target.value })}
                  className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Calculate
          </button>

          <div className="mt-6 p-4 bg-gray-700 rounded-lg">
            <h3 className="text-lg font-medium text-white mb-2">Result</h3>
            <p className="text-gray-300">--</p>
          </div>
        </div>
      </div>
    </div>
  );
}