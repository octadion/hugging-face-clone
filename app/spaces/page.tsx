import SpacesFilter from './components/SpacesFilter'
import SpacesCard from './components/SpacesCard'
import { Space } from './types'

const mockSpaces: Space[] = [
  {
    id: '1',
    title: 'Quiz Generator',
    author: 'JAGR AI',
    likes: 1245,
    description: 'Quiz Generator',
    tags: ['AI', 'Quiz Generator', 'Agent'],
    thumbnail: '🤖',
    url: 'http://127.0.0.1:7860/'
  },
  {
    id: '2',
    title: 'Language Model',
    author: 'OpenAI',
    likes: 2345,
    description: 'Powerful text generation AI',
    tags: ['AI', 'NLP', 'LLM'],
    thumbnail: '💬',
    url: ''
  },
  {
    id: '3',
    title: 'Love AI',
    author: 'Romantic Tech',
    likes: 987,
    description: 'AI that understands emotions',
    tags: ['AI', 'Emotion', 'NLP'],
    thumbnail: '❤️',
    url: ''
  },
  {
    id: '4',
    title: 'Unique Algorithm',
    author: 'Tech Innovators',
    likes: 654,
    description: 'Groundbreaking AI approach',
    tags: ['AI', 'Algorithm', 'Innovation'],
    thumbnail: '🌟',
    url: ''
  }
]

export default function SpacesPage() {
  return (
    <div className="py-8">
      <SpacesFilter />
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {mockSpaces.map(space => (
          <SpacesCard key={space.id} space={space} />
        ))}
      </div>
    </div>
  )
}