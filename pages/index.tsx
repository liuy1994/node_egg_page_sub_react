import Head from 'next/head';
import Layout, { siteTitle } from '@/components/layout';
import Date from '@/components/date';
import utilStyles from '@/styles/utils.module.scss';
import { getSortedPostsData, sleep } from "@/lib/posts"
import Link from "next/link"
const data = [{"id":"ssg-ssr","title":"When to Use Static Generation v.s. Server-side Rendering","date":"2020-01-02"},{"id":"pre-rendering","title":"Two Forms of Pre-rendering","date":"2020-01-01"}]
export default function Home({ allPostsData }: any) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }: any) => {
            return <li key={id} className={utilStyles.listItem}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br/>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              {date}
            </li>
          })}
        </ul>
      </section>
    </Layout>
  )
}
export const getStaticProps = async () => {
  // await sleep(3000)
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
//
// export const getServerSideProps = async (next) => {
//   // await sleep(3000)
//   return {
//     props: {
//       allPostsData: data,
//     },
//   };
// }
