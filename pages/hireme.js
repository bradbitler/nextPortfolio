import Link from 'next/link';
import Layout from "../components/Layout";

const HireMe = () => (
    <Layout title="Hire me">
        <p>
            You can hire me at{" "}
            <a href="mailto:bradbitler@gmail.com">bradbitler@gmail.com</a>
        </p>
    </Layout>
);

export default HireMe;