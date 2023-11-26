import Head from "next/head";
import HomeSections from "@/Sections/HomeSections/HomeSections";

export default function Home() {
  return (
    <>
      <Head>
        <title>Friyad</title>
        <meta
          name="description"
          content="Welcome to Friyad's portfolio website, showcasing the work of a skilled Full Stack Web Developer. With expertise in React, Next.js, Node.js, Express.js, MongoDB, SQL, PostgreSQL, Docker, database management, HTML, CSS, SCSS, any UI component library including Ant Design, Materail UI, Semantic UI, website deployment, hosting, cPanel and devOps services. Friyad has the tools and knowledge to bring your ideas to life. Browse the portfolio to see examples of web applications, dynamic user interfaces, and efficient database systems. Contact Friyad to discuss how your business can benefit from cutting-edge web development solutions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeSections />
    </>
  );
}
