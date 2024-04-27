import Link from "next/link";

export default function allvid() {
  return (
    <>
      <section className="w-full">
        <div className="container grid gap-8 px-4 py-12 md:px-6 md:py-16 lg:grid-cols-2 lg:gap-12 lg:py-24">
          <div className="space-y-4 lg:space-y-6">
            <img
              alt="Hero Image"
              className="aspect-video w-full overflow-hidden rounded-xl object-cover"
              height={600}
              src="/placeholder.svg"
              width={1200}
            />
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Unlock Your Potential with Our Learning Platform
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Discover a world of knowledge and skills at your fingertips. Our
                learning platform offers a diverse range of courses to help you
                achieve your goals.
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="group overflow-hidden rounded-lg shadow-md transition-all hover:scale-[1.02] hover:shadow-lg">
              <Link className="block h-full" href="#">
                <img
                  alt="Course Image"
                  className="aspect-[16/9] w-full object-cover"
                  height={225}
                  src="/placeholder.svg"
                  width={400}
                />
                <div className="space-y-2 p-4">
                  <h3 className="text-lg font-semibold group-hover:underline">
                    Introduction to Web Development
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Learn the fundamentals of web development and build your
                    first website.
                  </p>
                </div>
              </Link>
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md transition-all hover:scale-[1.02] hover:shadow-lg">
              <Link className="block h-full" href="#">
                <img
                  alt="Course Image"
                  className="aspect-[16/9] w-full object-cover"
                  height={225}
                  src="/placeholder.svg"
                  width={400}
                />
                <div className="space-y-2 p-4">
                  <h3 className="text-lg font-semibold group-hover:underline">
                    Data Science Fundamentals
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Dive into the world of data science and learn how to analyze
                    and interpret data.
                  </p>
                </div>
              </Link>
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md transition-all hover:scale-[1.02] hover:shadow-lg">
              <Link className="block h-full" href="#">
                <img
                  alt="Course Image"
                  className="aspect-[16/9] w-full object-cover"
                  height={225}
                  src="/placeholder.svg"
                  width={400}
                />
                <div className="space-y-2 p-4">
                  <h3 className="text-lg font-semibold group-hover:underline">
                    Mastering Digital Marketing
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Explore the latest strategies and techniques to grow your
                    online presence.
                  </p>
                </div>
              </Link>
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md transition-all hover:scale-[1.02] hover:shadow-lg">
              <Link className="block h-full" href="#">
                <img
                  alt="Course Image"
                  className="aspect-[16/9] w-full object-cover"
                  height={225}
                  src="/placeholder.svg"
                  width={400}
                />
                <div className="space-y-2 p-4">
                  <h3 className="text-lg font-semibold group-hover:underline">
                    Artificial Intelligence Fundamentals
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Dive into the world of AI and learn how to build intelligent
                    systems.
                  </p>
                </div>
              </Link>
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md transition-all hover:scale-[1.02] hover:shadow-lg">
              <Link className="block h-full" href="#">
                <img
                  alt="Course Image"
                  className="aspect-[16/9] w-full object-cover"
                  height={225}
                  src="/placeholder.svg"
                  width={400}
                />
                <div className="space-y-2 p-4">
                  <h3 className="text-lg font-semibold group-hover:underline">
                    Graphic Design Fundamentals
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Unleash your creative potential and learn the art of graphic
                    design.
                  </p>
                </div>
              </Link>
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md transition-all hover:scale-[1.02] hover:shadow-lg">
              <Link className="block h-full" href="#">
                <img
                  alt="Course Image"
                  className="aspect-[16/9] w-full object-cover"
                  height={225}
                  src="/placeholder.svg"
                  width={400}
                />
                <div className="space-y-2 p-4">
                  <h3 className="text-lg font-semibold group-hover:underline">
                    Introduction to Mobile Development
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Learn how to build mobile apps for iOS and Android
                    platforms.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-8 px-4 md:px-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Explore More Topics
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Dive into a wide range of subjects and expand your knowledge.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="group overflow-hidden rounded-lg shadow-md transition-all hover:scale-[1.02] hover:shadow-lg">
              <Link className="block h-full" href="#">
                <img
                  alt="Course Image"
                  className="aspect-[16/9] w-full object-cover"
                  height={225}
                  src="/placeholder.svg"
                  width={400}
                />
                <div className="space-y-2 p-4">
                  <h3 className="text-lg font-semibold group-hover:underline">
                    Machine Learning Fundamentals
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Explore the world of machine learning and build intelligent
                    algorithms.
                  </p>
                </div>
              </Link>
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md transition-all hover:scale-[1.02] hover:shadow-lg">
              <Link className="block h-full" href="#">
                <img
                  alt="Course Image"
                  className="aspect-[16/9] w-full object-cover"
                  height={225}
                  src="/placeholder.svg"
                  width={400}
                />
                <div className="space-y-2 p-4">
                  <h3 className="text-lg font-semibold group-hover:underline">
                    Cryptocurrency and Blockchain
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Dive into the world of cryptocurrencies and blockchain
                    technology.
                  </p>
                </div>
              </Link>
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md transition-all hover:scale-[1.02] hover:shadow-lg">
              <Link className="block h-full" href="#">
                <img
                  alt="Course Image"
                  className="aspect-[16/9] w-full object-cover"
                  height={225}
                  src="/placeholder.svg"
                  width={400}
                />
                <div className="space-y-2 p-4">
                  <h3 className="text-lg font-semibold group-hover:underline">
                    Entrepreneurship and Innovation
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Learn how to turn your ideas into successful businesses.
                  </p>
                </div>
              </Link>
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md transition-all hover:scale-[1.02] hover:shadow-lg">
              <Link className="block h-full" href="#">
                <img
                  alt="Course Image"
                  className="aspect-[16/9] w-full object-cover"
                  height={225}
                  src="/placeholder.svg"
                  width={400}
                />
                <div className="space-y-2 p-4">
                  <h3 className="text-lg font-semibold group-hover:underline">
                    Sustainable Energy Solutions
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Explore the latest advancements in renewable energy and
                    sustainability.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-8 px-4 md:px-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Discover Short Videos
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Explore a collection of engaging short videos on a variety of
              topics.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="group overflow-hidden rounded-lg shadow-md transition-all hover:scale-[1.02] hover:shadow-lg">
              <Link className="block h-full" href="#">
                <img
                  alt="Video Thumbnail"
                  className="aspect-[16/9] w-full object-cover"
                  height={225}
                  src="/placeholder.svg"
                  width={400}
                />
                <div className="space-y-2 p-4">
                  <h3 className="text-lg font-semibold group-hover:underline">
                    The Future of Renewable Energy
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Explore the latest advancements in renewable energy
                    technology.
                  </p>
                </div>
              </Link>
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md transition-all hover:scale-[1.02] hover:shadow-lg">
              <Link className="block h-full" href="#">
                <img
                  alt="Video Thumbnail"
                  className="aspect-[16/9] w-full object-cover"
                  height={225}
                  src="/placeholder.svg"
                  width={400}
                />
                <div className="space-y-2 p-4">
                  <h3 className="text-lg font-semibold group-hover:underline">
                    Mindfulness Techniques for Stress Relief
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Learn simple mindfulness practices to manage stress and
                    anxiety.
                  </p>
                </div>
              </Link>
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md transition-all hover:scale-[1.02] hover:shadow-lg">
              <Link className="block h-full" href="#">
                <img
                  alt="Video Thumbnail"
                  className="aspect-[16/9] w-full object-cover"
                  height={225}
                  src="/placeholder.svg"
                  width={400}
                />
                <div className="space-y-2 p-4">
                  <h3 className="text-lg font-semibold group-hover:underline">
                    The Art of Effective Communication
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Improve your communication skills and become a better
                    communicator.
                  </p>
                </div>
              </Link>
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md transition-all hover:scale-[1.02] hover:shadow-lg">
              <Link className="block h-full" href="#">
                <img
                  alt="Video Thumbnail"
                  className="aspect-[16/9] w-full object-cover"
                  height={225}
                  src="/placeholder.svg"
                  width={400}
                />
                <div className="space-y-2 p-4">
                  <h3 className="text-lg font-semibold group-hover:underline">
                    Unlocking the Power of Creativity
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Discover techniques to unleash your creative potential.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// === styles.css ===

// body {
//   font-family: var(--font-libre_franklin), sans-serif;
// }

// h1, h2, h3, h4, h5, h6 {
//   font-family: var(--font-libre_franklin), sans-serif;
// }

// === layout.jsx ===

// // This is the root layout component for your Next.js app.
// // Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

// import { Libre_Franklin } from 'next/font/google'
// import './styles.css'

// const libre_franklin = Libre_Franklin({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-libre_franklin',
// })

// export default function Layout({ children }) {
//   return (
//     <html lang="en">
//       <body className={libre_franklin.variable}>
//         {children}
//       </body>
//     </html>
//   )
// }