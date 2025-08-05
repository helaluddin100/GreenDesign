import Link from 'next/link'
import { Calendar, User, ArrowRight, Search, Filter } from 'lucide-react'
import MiniHeader from '../components/MiniHeader'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Blog() {
  const featuredPost = {
    id: 1,
    title: '2025 Green Building Trends: What to Expect',
    excerpt: 'Discover the latest innovations in sustainable architecture and how they\'re shaping the future of construction. From smart home integration to revolutionary building materials.',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Sarah Johnson',
    date: 'January 15, 2025',
    category: 'Trends',
    slug: '2025-green-building-trends',
    readTime: '8 min read'
  }

  const posts = [
    {
      id: 2,
      title: 'Solar Panel Integration in Modern Home Design',
      excerpt: 'Learn how to seamlessly incorporate solar panels into your home design without compromising aesthetics.',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Michael Chen',
      date: 'January 12, 2025',
      category: 'Technology',
      slug: 'solar-panel-integration-modern-design',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'The Economics of Green Building: ROI Analysis',
      excerpt: 'Understand the long-term financial benefits of investing in sustainable building practices and materials.',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Emily Rodriguez',
      date: 'January 10, 2025',
      category: 'Finance',
      slug: 'economics-green-building-roi-analysis',
      readTime: '10 min read'
    },
    {
      id: 4,
      title: 'Passive House Design Principles Explained',
      excerpt: 'A comprehensive guide to understanding passive house standards and how to implement them in your project.',
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'David Kim',
      date: 'January 8, 2025',
      category: 'Design',
      slug: 'passive-house-design-principles',
      readTime: '12 min read'
    },
    {
      id: 5,
      title: 'Sustainable Building Materials: A Complete Guide',
      excerpt: 'Explore eco-friendly alternatives to traditional building materials and their environmental benefits.',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Lisa Wang',
      date: 'January 5, 2025',
      category: 'Materials',
      slug: 'sustainable-building-materials-guide',
      readTime: '9 min read'
    },
    {
      id: 6,
      title: 'Smart Home Technology for Green Buildings',
      excerpt: 'How intelligent systems can optimize energy usage and enhance the sustainability of your home.',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'James Thompson',
      date: 'January 3, 2025',
      category: 'Technology',
      slug: 'smart-home-technology-green-buildings',
      readTime: '7 min read'
    }
  ]

  const categories = ['All', 'Trends', 'Technology', 'Design', 'Finance', 'Materials']

  return (
    <div className="min-h-screen">
      <MiniHeader />
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Green Building Blog
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest trends, technologies, and insights 
              in sustainable architecture and green building design.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Article</h2>
            <div className="w-20 h-1 bg-emerald-600"></div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {featuredPost.category}
                  </span>
                  <span className="ml-3 text-sm text-gray-500">{featuredPost.readTime}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{featuredPost.date}</span>
                  </div>
                  
                  <Link href={`/blog/${featuredPost.slug}`} className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Latest Articles</h2>
            <div className="w-20 h-1 bg-emerald-600"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold transition-colors">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}