import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import type { FlashCard } from '../types';

export default function StudyHub() {
  const [cards, setCards] = useState<FlashCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleAddCard = () => {
    const newCard: FlashCard = {
      id: Date.now().toString(),
      question: 'New Question',
      answer: 'New Answer',
      category: 'General'
    };
    setCards([...cards, newCard]);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-8 px-8 ml-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Study Hub</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-white">Flashcards</h2>
              <button
                onClick={handleAddCard}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>

            {cards.length > 0 ? (
              <div className="relative h-[300px]">
                <motion.div
                  className="absolute inset-0 bg-gray-700 rounded-lg p-6 cursor-pointer"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  onClick={handleFlip}
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-400">Card {currentIndex + 1} of {cards.length}</span>
                    <span className="text-blue-400">{cards[currentIndex].category}</span>
                  </div>
                  <div className="flex items-center justify-center h-[200px]">
                    <p className="text-white text-xl text-center">
                      {isFlipped ? cards[currentIndex].answer : cards[currentIndex].question}
                    </p>
                  </div>
                </motion.div>

                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
                  <button
                    onClick={handlePrev}
                    className="bg-gray-600 p-2 rounded-full hover:bg-gray-500 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="bg-gray-600 p-2 rounded-full hover:bg-gray-500 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-400 py-12">
                No flashcards yet. Click the + button to add one.
              </div>
            )}
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-6">Study Progress</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Cards Mastered</span>
                  <span className="text-white">0/{cards.length}</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: `${(0 / Math.max(cards.length, 1)) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Study Streak</span>
                  <span className="text-white">0 days</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '0%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}