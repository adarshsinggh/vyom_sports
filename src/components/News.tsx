import React from 'react';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

const News: React.FC = () => {
  const newsArticles = [
    {
      title: 'VYOM SECURES RECORD-BREAKING SCHOLARSHIP DEALS',
      excerpt: 'Our latest partnership with top universities has opened unprecedented opportunities for young athletes across multiple sports disciplines.',
      image: 'https://images.pexels.com/photos/159740/library-la-trobe-study-students-159740.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'Education'
    },
    {
      title: 'EXCLUSIVE ACCESS TO CHAMPIONS LEAGUE FINALS',
      excerpt: 'Vyom clients experience the pinnacle of European football with unprecedented VIP access and hospitality packages.',
      image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      date: '2025-01-12',
      readTime: '3 min read',
      category: 'Events'
    },
    {
      title: 'RISING STARS: TALENT REPRESENTATION SUCCESS',
      excerpt: 'Meet the next generation of sporting legends who have chosen Vyom to guide their professional careers to new heights.',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      date: '2025-01-10',
      readTime: '7 min read',
      category: 'Talent'
    },
    {
      title: 'GLOBAL EXPANSION: NEW PARTNERSHIPS ANNOUNCED',
      excerpt: 'Vyom extends its reach with strategic alliances across Asia-Pacific, opening new pathways for international opportunities.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      date: '2025-01-08',
      readTime: '4 min read',
      category: 'Business'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-20 bg-celestial-haze">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bebas text-vyom-midnight mb-6">
            LATEST NEWS
          </h2>
          <p className="text-xl text-eclipse-grey max-w-3xl mx-auto font-inter">
            Stay updated with the latest developments, success stories, and exclusive insights from the world of luxury sports
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {newsArticles.map((article, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-aurora-teal text-white px-3 py-1 rounded-full text-xs font-inter font-semibold uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center space-x-4 mb-4 text-sm text-eclipse-grey">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span className="font-inter">{formatDate(article.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span className="font-inter">{article.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bebas text-vyom-midnight mb-3 leading-tight group-hover:text-aurora-teal transition-colors duration-300">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-eclipse-grey font-inter text-sm leading-relaxed mb-6">
                  {article.excerpt}
                </p>

                {/* Read More */}
                <button className="group/btn flex items-center space-x-2 text-aurora-teal font-inter font-semibold hover:text-vyom-midnight transition-all duration-300">
                  <span className="text-sm uppercase tracking-wider">Read More</span>
                  <div className="w-6 h-6 bg-aurora-teal/10 rounded-full flex items-center justify-center group-hover/btn:bg-aurora-teal group-hover/btn:text-white transition-all duration-300">
                    <ArrowRight className="w-3 h-3 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All News Button */}
        <div className="text-center mt-12">
          <button className="bg-aurora-teal text-white px-8 py-4 rounded-xl font-inter font-semibold hover:bg-aurora-teal/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
            VIEW ALL NEWS
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;