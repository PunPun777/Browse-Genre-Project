import './App.css'

function App() {
  const categories = [
    { name: "Movies", 
      link: "https://www.netflix.com/browse/genre/34399", 
      color: "bg-gradient-to-r from-red-500 to-orange-500" 
    },
    { name: "Series", 
      link: "https://www.netflix.com/browse/genre/83", 
      color: "bg-gradient-to-r from-teal-400 to-cyan-500" 
    },
    { name: "Comedy", 
      link: "https://www.netflix.com/browse/genre/6548", 
      color: "bg-gradient-to-r from-yellow-300 to-amber-400 text-black" 
    },
    { name: "Action", 
      link: "https://www.netflix.com/browse/genre/1365", 
      color: "bg-gradient-to-r from-orange-400 to-pink-500" 
    },
    { name: "Horror", 
      link: "https://www.netflix.com/browse/genre/8711", 
      color: "bg-gradient-to-r from-purple-500 to-violet-600" 
    },
    { name: "Drama", 
      link: "https://www.netflix.com/browse/genre/5763", 
      color: "bg-gradient-to-r from-green-400 to-emerald-500" 
    },
    { name: "Romance", 
      link: "https://www.netflix.com/browse/genre/8883", 
      color: "bg-gradient-to-r from-sky-400 to-blue-500 text-black" 
    },
    { name: "Anime", 
      link: "https://www.netflix.com/browse/genre/7424", 
      color: "bg-gradient-to-r from-pink-400 to-fuchsia-500" 
    },
  ];

  return (
    <div className="min-h-screen bg-[#27272a] text-white text-center p-6">
      <h1 className="text-3xl font-mono font-bold my-6">What Do You Want to Watch?</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((cat, index) => (
          <a
            key={index}
            href={cat.link}
            target="_blank"
            className={`flex items-center justify-center h-36 rounded-xl text-lg font-bold transition-transform duration-300 cursor-pointer hover:scale-105 ${cat.color}`}
          >
            {cat.name}
          </a>
        ))}
      </div>
    </div>
  )
}

export default App
