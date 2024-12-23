import Image from 'next/image';

const BlogCard = ({ image, date, title, description }:any) => {
    
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image src={image} alt={title} width={500} height={300} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
        <a href="#" className="text-blue-500 mt-4 inline-block">Read More</a>
      </div>
    </div>
  );
};

export default BlogCard;
