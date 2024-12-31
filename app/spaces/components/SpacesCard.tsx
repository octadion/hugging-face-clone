import { Heart } from 'lucide-react';
import { Space } from '../types';

function getEmojiGradient(emoji: string) {
  const emojiColorMap: {[key: string]: [string, string, string, string]} = {
    '❤️': ['from-red-100', 'to-pink-100', 'dark:from-red-900', 'dark:to-pink-900'],
    '🌸': ['from-pink-50', 'to-pink-200', 'dark:from-pink-900', 'dark:to-pink-950'],
    '🌈': ['from-purple-100', 'to-blue-100', 'dark:from-purple-900', 'dark:to-blue-900'],
    '🤖': ['from-blue-100', 'to-indigo-200', 'dark:from-blue-900', 'dark:to-indigo-950'],
    '💬': ['from-green-50', 'to-green-200', 'dark:from-green-900', 'dark:to-green-950'],
    '🚀': ['from-orange-100', 'to-yellow-100', 'dark:from-orange-900', 'dark:to-yellow-900'],
    '🌟': ['from-yellow-100', 'to-yellow-200', 'dark:from-yellow-900', 'dark:to-yellow-950'],
    '🌊': ['from-blue-100', 'to-cyan-200', 'dark:from-blue-900', 'dark:to-cyan-950'],
    '🍀': ['from-green-100', 'to-emerald-200', 'dark:from-green-900', 'dark:to-emerald-950'],
  };

  if (emojiColorMap[emoji]) {
    return emojiColorMap[emoji];
  }

  const colors: [string, string, string, string][] = [
    ['from-red-50', 'to-red-200', 'dark:from-red-900', 'dark:to-red-950'],
    ['from-blue-50', 'to-blue-200', 'dark:from-blue-900', 'dark:to-blue-950'],
    ['from-green-50', 'to-green-200', 'dark:from-green-900', 'dark:to-green-950'],
    ['from-purple-50', 'to-purple-200', 'dark:from-purple-900', 'dark:to-purple-950'],
    ['from-pink-50', 'to-pink-200', 'dark:from-pink-900', 'dark:to-pink-950'],
    ['from-orange-50', 'to-orange-200', 'dark:from-orange-900', 'dark:to-orange-950'],
    ['from-yellow-50', 'to-yellow-200', 'dark:from-yellow-900', 'dark:to-yellow-950'],
    ['from-indigo-50', 'to-indigo-200', 'dark:from-indigo-900', 'dark:to-indigo-950'],
  ];

  const hash = emoji.charCodeAt(0) % colors.length;
  return colors[hash];
}

export default function SpacesCard({ space }: { space: Space }) {
  const [fromColor, toColor, darkFromColor, darkToColor] = getEmojiGradient(space.thumbnail);

  return (
    <div className="
      border rounded-lg overflow-hidden 
      bg-white dark:bg-gray-800 dark:border-gray-700
      hover:shadow-md transition-shadow
    ">
      <div className={`
        mb-6 flex h-36 items-center justify-center 
        rounded-lg bg-gradient-to-r 
        ${fromColor} ${toColor}
        ${darkFromColor} ${darkToColor}
        shadow-inner
      `}>
        <p className="text-6xl">{space.thumbnail}</p>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold dark:text-white">
            {space.title}
          </h3>
          <div className="flex items-center space-x-2">
            <Heart className="text-gray-500 dark:text-gray-300" size={20} />
            <span className="dark:text-white">{space.likes}</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          {space.description}
        </p>
        
        <div className="flex space-x-2">
          {space.tags.map(tag => (
            <span 
              key={tag} 
              className="
                px-2 py-1 
                bg-gray-100 text-xs 
                rounded 
                dark:bg-gray-700 dark:text-white
              "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}