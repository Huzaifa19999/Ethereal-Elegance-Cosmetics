import BlogCard from "./BlogCard";

 function Blogs() {
  const blogs = [
    {
      image: '/blogs/image2.png',
      date: 'November 2024',
      title: 'Stay All Day: Long-lasting Makeup Tips for Busy Beauties',
      description: 'Explore five makeup trends this season for a fresh and adventurous beauty look.',
    },
    {
      image: '/blogs/image2.png',
      date: 'November 2024',
      title: 'Five Makeup Trends to Experiment with This Season',
      description: 'Explore new makeup trends this season for a fresh and adventurous beauty look.',
    },
    {
      image: '/blogs/image3.png',
      date: 'November 2024',
      title: 'Effortless Beauty: Minimalist Makeup Techniques',
      description: 'Explore minimalist makeup trends this season for a fresh look.',
    },
    {
      image: '/blogs/image4.png',
      date: 'November 2024',
      title: 'Get the Glow: Highlighting and Contouring Made Easy',
      description: 'Learn easy techniques for highlighting and contouring for a natural glow.',
    },
    {
      image: '/blogs/image5.png',
      date: 'November 2024',
      title: 'Day to Night Makeup Transformations: Quick and Easy Tips',
      description: 'Transform your look effortlessly from day to night with these tips.',
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.image}
              date={blog.date}
              title={blog.title}
              description={blog.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs