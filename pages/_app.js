import '../styles/globals.css'
import dynamic from 'next/dynamic'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <AnimatedCursor
        innerSize={10}
        outerSize={20}
        color='32, 75, 69'
        innerScale={0.7}
        outerAlpha={0.6}
        outerScale={2}
       />
    </div>
  )
}

export default MyApp