'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Heart, Share2, Download, ShoppingCart, Bed, Bath, Car, Ruler, Zap, Leaf, Award, CheckCircle, Star, User, Calendar } from 'lucide-react'
import MiniHeader from '../../components/MiniHeader'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function HouseDetail({ params }) {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedImage, setSelectedImage] = useState(0)

  // Mock data - in real app, fetch based on params.id
  const house = {
    id: 1,
    title: 'The Eco Haven',
    price: '$299',
    originalPrice: '$399',
    beds: 4,
    baths: 3,
    garages: 2,
    sqft: '240 m²',
    floors: 2,
    planNumber: 'GH-2024-001',
    architect: 'Sarah Johnson',
    rating: 4.8,
    reviews: 127,
    description: 'The Eco Haven represents the pinnacle of sustainable residential design, combining modern aesthetics with cutting-edge green technology. This thoughtfully designed home maximizes energy efficiency while providing comfortable living spaces for the modern family.',
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    greenFeatures: [
      'Solar Ready Roof Design',
      'Energy Star Certified',
      'LEED Gold Eligible',
      'High-Performance Windows',
      'Advanced Insulation System',
      'Smart Home Pre-wiring',
      'Rainwater Collection Ready',
      'Native Landscaping Plan'
    ],
    specifications: {
      'Total Living Area': '240 m²',
      'Ground Floor': '140 m²',
      'Second Floor': '100 m²',
      'Garage': '48 m²',
      'Covered Porch': '20 m²',
      'Foundation': 'Slab or Basement',
      'Roof Pitch': '8:12',
      'Ceiling Height': '2.7m (9ft)'
    },
    floorPlans: [
      {
        name: 'Ground Floor',
        image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        name: 'Second Floor',
        image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600'
      }
    ],
    included: [
      'Complete architectural drawings',
      'Structural engineering plans',
      'Electrical and plumbing layouts',
      'Energy efficiency specifications',
      'Material specifications',
      'Construction details',
      'Green building guidelines',
      '12 months of designer support'
    ]
  }

  const reviews = [
    {
      id: 1,
      name: 'Michael Thompson',
      rating: 5,
      date: 'January 10, 2025',
      comment: 'Absolutely love this design! The energy efficiency features are exactly what we were looking for. The plans are detailed and easy to follow.'
    },
    {
      id: 2,
      name: 'Lisa Chen',
      rating: 5,
      date: 'December 28, 2024',
      comment: 'Built this home last year and our energy bills are 60% lower than our previous house. The design is beautiful and functional.'
    },
    {
      id: 3,
      name: 'David Rodriguez',
      rating: 4,
      date: 'December 15, 2024',
      comment: 'Great design with excellent green features. The customer support was very helpful during construction.'
    }
  ]

  return (
    <div className="min-h-screen">
      <MiniHeader />
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/houses" className="text-gray-500 hover:text-gray-700">House Plans</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{house.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="relative mb-4">
                <img 
                  src={house.images[selectedImage]} 
                  alt={house.title}
                  className="w-full h-96 object-cover rounded-xl"
                />
                <button className="absolute top-4 left-4 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transition-colors">
                  <ArrowLeft className="h-5 w-5" />
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {house.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative overflow-hidden rounded-lg ${
                      selectedImage === index ? 'ring-2 ring-emerald-500' : ''
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`View ${index + 1}`}
                      className="w-full h-20 object-cover hover:opacity-80 transition-opacity"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 mb-6">
              <nav className="flex space-x-8">
                {['overview', 'specifications', 'floor-plans', 'reviews'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                      activeTab === tab
                        ? 'border-emerald-500 text-emerald-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.replace('-', ' ')}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="mb-8">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Description</h3>
                    <p className="text-gray-600 leading-relaxed">{house.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Green Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {house.greenFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-emerald-600 mr-2" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">What's Included</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {house.included.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-emerald-600 mr-2" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Specifications</h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(house.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b border-gray-200">
                          <span className="font-medium text-gray-700">{key}:</span>
                          <span className="text-gray-600">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'floor-plans' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Floor Plans</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {house.floorPlans.map((plan, index) => (
                      <div key={index} className="bg-white border rounded-lg overflow-hidden">
                        <img 
                          src={plan.image} 
                          alt={plan.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900">{plan.name}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-900">Customer Reviews</h3>
                    <div className="flex items-center">
                      <div className="flex items-center mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-5 w-5 ${i < Math.floor(house.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <span className="text-gray-600">({house.reviews} reviews)</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-200 pb-6">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <User className="h-5 w-5 text-gray-400 mr-2" />
                            <span className="font-medium text-gray-900">{review.name}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="h-4 w-4 mr-1" />
                            {review.date}
                          </div>
                        </div>
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                          ))}
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{house.title}</h1>
                <p className="text-gray-600 mb-2">Plan #{house.planNumber}</p>
                <p className="text-gray-600">Designed by {house.architect}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-3xl font-bold text-emerald-600">{house.price}</span>
                    {house.originalPrice && (
                      <span className="text-lg text-gray-500 line-through ml-2">{house.originalPrice}</span>
                    )}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                    <span className="font-medium">{house.rating}</span>
                    <span className="text-gray-500 ml-1">({house.reviews})</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Bed className="h-5 w-5 text-gray-400 mr-2" />
                    <span>{house.beds} beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-5 w-5 text-gray-400 mr-2" />
                    <span>{house.baths} baths</span>
                  </div>
                  <div className="flex items-center">
                    <Car className="h-5 w-5 text-gray-400 mr-2" />
                    <span>{house.garages} garage</span>
                  </div>
                  <div className="flex items-center">
                    <Ruler className="h-5 w-5 text-gray-400 mr-2" />
                    <span>{house.sqft}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Leaf className="h-4 w-4 mr-1" />
                    Eco-Friendly
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Zap className="h-4 w-4 mr-1" />
                    Energy Star
                  </span>
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Award className="h-4 w-4 mr-1" />
                    LEED Ready
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </button>
                
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
                  <Download className="h-5 w-5 mr-2" />
                  Download Sample
                </button>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
                    <Heart className="h-5 w-5 mr-2" />
                    Save
                  </button>
                  <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
                    <Share2 className="h-5 w-5 mr-2" />
                    Share
                  </button>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Need Help?</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Have questions about this design? Our experts are here to help.
                </p>
                <button className="w-full bg-white border border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-semibold py-2 px-4 rounded-lg transition-colors">
                  Contact Designer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}