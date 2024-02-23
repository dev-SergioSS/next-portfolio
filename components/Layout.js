import { Sora } from '@next/font/google'

// components
import Nav from '../components/Nav'
import Header from '../components/Header'
import TopLeftImg from '../components/TopLeftImg'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat relative font-sora ${sora.variable} `}>
      <TopLeftImg />
      <Nav></Nav>
      <Header></Header>
      {children}
    </div>
  )
}

export default Layout
