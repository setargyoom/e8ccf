// 404.js
import Link from 'next/link'
import Image from 'next/image';

const Custom404 = () => {
    return (
        <>
            <div className="hero">
                <div className="container">
                    <h1>Page not found!</h1>
                    <Image
                        src="images/404.svg"
                        alt="Not Found"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </> 
    )
}

export default Custom404;
