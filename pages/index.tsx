import { Button, DatePicker, version } from 'antd';
import CustomButton from '../components/CustomButton';
import Link from 'next/link';

function HomePage() {
    return (
        <div>
            <div>Welcome to React - Next.js + Ant Design + Typescript</div>
            <h3>antd version: {version}</h3>
            <CustomButton />
            <Link href="/typescriptpage">
                <a title="Typescript Page">Typescript Page</a>
            </Link>
            <br/>
            <DatePicker />
            <Button type="primary" style={{ marginLeft: 8 }}>
                Primary Button
            </Button>
        </div>
    )
}

export default HomePage
  