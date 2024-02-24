import './App.css';
import Post from "./Post";
import Header from "./Header";
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import {UserContextProvider} from "./UserContext";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";
import { ToastContainer } from 'react-toastify';
import { WhatsAppWidget} from 'react-whatsapp-widget'
import "react-whatsapp-widget/dist/index.css";
import 'react-toastify/dist/ReactToastify.css';
import LoadingAnimation from './components/loadingAnimation';
import AboutPage from './pages/aboutPage';
import ContactPage from './pages/contactPage';
import ServicesPage from './pages/servicesPage';
import GalleryPage from './pages/GalleryPage';
import PageWrapper from './components/pageWrapper';
import AboutImage from './assets/mockup.png';
import ServicesImage from './assets/services-bg.jpg';
import ContactImage from './assets/bg-2.jpg';
import GalleryImage from './assets/bg-3.jpg';

function App() {
  return (
    <UserContextProvider>
      {/* <LoadingAnimation/> */}
      <Routes>
        <Route exact path="/" element={<Layout />}/>
          {/* <Route index element={<IndexPage />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/about" element={<PageWrapper heroText="hello there, scroll down to learn more" image={AboutImage}><AboutPage/></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper heroText="Fill the form below to contact us" image={ContactImage}><ContactPage/></PageWrapper>} />
          <Route path="/services" element={<PageWrapper heroText="scroll down to learn more" image={ServicesImage}><ServicesPage/></PageWrapper>} />
          <Route path="/gallery" element={<PageWrapper heroText="check out some of our projects and gallery" image={GalleryImage}><GalleryPage/></PageWrapper>} />
        
      </Routes>
      <ToastContainer/>
      <WhatsAppWidget
          // CompanyIcon={CTBAIcon}
          replyTimeText="we will reply in the next 48 hours"
          message="Hello! 👋🏼 What can we do for you ?"
          companyName="Safricon&Sagrico"
          SendButton="Send"
          phoneNumber="+31613590423"
          
        />
    </UserContextProvider>
  );
}

export default App;
