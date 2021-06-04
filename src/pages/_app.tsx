import TopBar from '../components/TopBar/topBar';
import Navigation from '../components/Navigation/navigation';
import Footer from '../components/Footer/footer';

import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <TopBar />
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
