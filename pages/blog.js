import Layout from "../components/Layout";
import Link from 'next/link';

const PostLink = ({ slug, title }) => (
    <li>
        <Link as={`/${slug}`}href={`/post?title=${title}`}>
            <a>{title}</a>
        </Link>
    </li>

)

export default () => (
    <Layout title="My Blog">
        <ul>
            <PostLink slug="react-post" title="react post"/>
            <PostLink slug="angular-post" title="angular post"/>
            <PostLink slug="vue-post" title="vue post"/>
        </ul>
    
    </Layout>
);