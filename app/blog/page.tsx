import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

const posts = [
  {
    slug: 'how-ai-is-changing-digital-marketing-in-2026',
    title: 'How AI is Changing Digital Marketing in 2026',
    description:
      'Discover how AI is transforming content creation, personalization, SEO, and marketing automation.',
    image: '/blog.jpg',
    category: 'Digital Marketing',
    // date: 'March 2026',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow">
        <div className="max-w-5xl mx-auto px-4 py-12 pt-24">
          <h1 className="text-3xl font-bold mb-3 text-gray-900">Marketing Insights</h1>
          <p className="text-gray-600 mb-10">
            Latest updates, ideas, and strategies for modern digital marketing.
          </p>

          <div className="space-y-8">
            {posts.map((post) => (
              <div
                key={post.slug}
                className="border rounded-2xl overflow-hidden hover:shadow-lg transition bg-white"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                        loading="eager"
                      />
                    </div>

                    <div className="p-6 md:w-2/3">
                      <div className="flex items-center gap-3 mb-3 text-sm text-gray-500">
                        <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold mb-3 text-gray-900">{post.title}</h2>

                      <p className="text-gray-600 mb-5">{post.description}</p>

                      <span className="text-blue-600 font-medium hover:underline">
                        Read Article →
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}