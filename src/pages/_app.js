import '../sass/main.scss';
import 
          'styles/global.scss'
          ;
         

         
 
         

         

          import 
          { ThemeProvider } 
          from 
          'next-themes'
          ;
         

         

          import 
          { MDXProvider } 
          from 
          '@mdx-js/react'
          ;
         

         

          import 
          MDXComponents 
          from 
          'components/MDXComponents'
          ;
         

         
 
         

         

          function 
          MyApp
          (
          { Component, pageProps }
          ) 
          {
         

         
 
          return 
          (
         

         
 
          <ThemeProvider attribute="class">
         

         
 
          <MDXProvider components={MDXComponents}>
         

         
 
          <Component {...pageProps} />
         

         
 
          </MDXProvider>
         

         
 
          </ThemeProvider>
         

         
 
          )
          ;
         

         

          }
         

         
 
         

         

          export 
          default 
          MyApp
          ;

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
