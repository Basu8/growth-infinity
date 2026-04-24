import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Footer from '../../components/Footer';

const post = {
  slug: 'how-ai-is-changing-digital-marketing-in-2026',
  title: 'How AI is Changing Digital Marketing in 2026',
  description:
    'Expert insights on how AI is transforming content creation, personalization, SEO, and automation.',
  image: '/ai-in-digital-marketing.jpeg',
};

export const metadata = {
  title: `${post.title} | DigiMark`,
  description: post.description,
};

export function generateStaticParams() {
  return [{ slug: post.slug }];
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (slug !== post.slug) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow">
        <article className="max-w-4xl mx-auto px-4 py-12 pt-24">
          <div className="mb-6">
            <Link href="/blog" className="text-blue-600 hover:underline">
              ← Back to Blog
            </Link>
          </div>

          <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={630}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="flex items-center gap-3 mb-4 text-sm text-gray-500">
            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
              Digital Marketing
            </span>
            {/* <span>March 2026</span> */}
          </div>

          <h1 className="text-4xl font-bold mb-6 text-gray-900">{post.title}</h1>

          <div className="prose prose-lg max-w-none text-gray-700 mb-10">
            <p>
              AI is no longer just a support tool in marketing. In 2026, it is helping teams
              create content faster, understand audiences better, and make smarter decisions
              across every channel.
            </p>
            <p>
              From personalized campaigns to automated workflows, businesses that use AI well
              are improving efficiency, targeting, and customer experience at the same time.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              1. AI is making personalization smarter
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p>
                AI helps brands analyze user behavior and deliver content that matches interests,
                buying patterns, and intent. That means emails, ads, landing pages, and product
                recommendations can feel more relevant to each user.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              2. Content creation is becoming faster
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p>
                Marketers are using AI to brainstorm topics, draft captions, generate outlines,
                and repurpose content across platforms. This saves time and helps teams publish
                more consistently.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              3. Chatbots and automation improve customer support
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p>
                AI-powered chatbots can answer common questions instantly, guide users, and help
                teams stay available around the clock. Automation also reduces repetitive manual
                work in email, CRM, and campaign management.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              4. AI is changing SEO and ad optimization
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p>
                Search and paid media are becoming more data-driven. AI can help with keyword
                research, audience targeting, bid adjustments, and performance analysis, making
                campaigns easier to optimize at scale.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              5. Better analytics leads to better decisions
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p>
                AI tools can process large amounts of marketing data quickly and highlight what is
                working, what is not, and where to improve next. That helps teams move faster with
                more confidence.
              </p>
            </div>
          </section>

          <section className="bg-gray-50 p-6 rounded-2xl mt-10">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Why AI matters for digital marketing
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Faster content creation and campaign execution</li>
              <li>More personalized customer experiences</li>
              <li>Smarter SEO and advertising decisions</li>
              <li>Better efficiency for marketing teams</li>
            </ul>
          </section>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300"
            >
              Contact DigiMark Today
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}