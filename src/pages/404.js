// 404.js
import Link from 'next/link'

export default function FourOhFour() {
  return <>
   <center>
    ![Alt text](public/404.svg?raw=true "404")
    <h1>404 - Page Not Found</h1>
    <Link href="/">
      <a>
        Go back home
      </a>
    </Link></center>
  </>
}
