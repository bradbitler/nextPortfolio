import Layout from "../components/Layout";
import { withRouter } from 'next/router';

const Post = ({ router }) => (
    <Layout title={router.query.title} >
        <p>nstead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both. We will come back to components in a further section, but if you’re not yet comfortable putting markup in JS, this talk might convince you otherwise.</p>
    </Layout>
);

export default withRouter(Post);