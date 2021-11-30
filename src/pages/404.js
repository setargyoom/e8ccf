// 404.js
import Link from 'next/link'

export default function FourOhFour() {
  return <>
   <center>
    var img = document.createElement("img");
img.src = "/images/404.svg";
var src = document.getElementById("header");
src.appendChild(img);
    <h1>404 - Page Not Found</h1>
    <Link href="/">
      <a>
        Go back home
      </a>
    </Link></center>
  </>
}
